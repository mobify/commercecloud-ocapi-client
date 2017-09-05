import * as request from 'request'
import * as requestPromise from 'request-promise'
import auth from './auth'

type BasketID = string
interface Customer {
    customer_id?: string
    customer_no?: string
    customer_name?: string
    email?: string
}

interface OrderAddress {
    address1: String
    address2?: String
    city: String
    company_name?: String
    country_code: String // The two-letter ISO 3166-1 (Alpha-2) country code.
    first_name?: String
    full_name?: String
    id?: String
    job_title?: String
    last_name?: String
    phone?: String
    post_box?: String
    postal_code?: String
    salutation?: String
    second_name?: String
    state_code?: String
    suffix?: String
    suite?: String
    title?: String
}

class Basket {
    client: Client

    constructor(client: Client) {
        this.client = client
    }

    setCustomerEmail(basketId: BasketID, email: string) {
        return this.client.authenticatedPut(`baskets/${basketId}/customer`, {
            body: {email}
        })
    }

    addProduct(basketId: BasketID, productId: string, quantity: number) {
        return this.client.authenticatedPost(`baskets/${basketId}/items`, {
                body: [{
                    product_id: productId,
                    quantity
                }]
            })
    }

    setBillingAddress(basketId: BasketID, address: OrderAddress, useAsShipping: Boolean = false) {
        const queryParams = useAsShipping ? '?use_as_shipping=true' : ''

        return this.client.authenticatedPut(`baskets/${basketId}/billing_address${queryParams}`, {
            body: address
        })
    }

    addShippingAddress(basketId: BasketID, address: OrderAddress) {
        // TODO: set shipping address on non-default shipments (default is "me")
        return this.client.authenticatedPut(`baskets/${basketId}/shipments/me/shipping_address`, {
            body: address
        })
    }
}

class Client {
    readonly clientId: string
    readonly baseUrl: string

    private requestAuth: request.RequestAPI<requestPromise.RequestPromise, requestPromise.RequestPromiseOptions, request.RequiredUriUrl>
    private requestAnon: request.RequestAPI<requestPromise.RequestPromise, requestPromise.RequestPromiseOptions, request.RequiredUriUrl>

    readonly baskets: Basket

    constructor(clientId: string, baseUrl: string) {
        this.clientId = clientId
        this.baseUrl = baseUrl
        this.baskets = new Basket(this)

        this.requestAuth = requestPromise.defaults({
            baseUrl,
            headers: {
                'Content-Type': 'application/json',
                'X-DW-Client-ID': clientId
            },
            json: true
        })
    }

    guest() /* Promise<Customer> */ {
        return this.requestAuth.post('customers/auth', {
            json: auth.guest,
            resolveWithFullResponse: true
        })
            .then((response) => {
                this.requestAnon = this.requestAuth.defaults({
                    headers: {
                        Authorization: response.headers.authorization
                    }
                })

                return response.toJSON().body
            })
    }

    authenticatedPost(path, options) {
        return this.requestAnon.post(path, options)
    }

    authenticatedPut(path, options) {
        return this.requestAnon.put(path, options)
    }

    getAllCategories() {
        return this.requestAnon.get('categories')
    }

    createBasket() /* Promise<Basket> */ {
        return this.requestAnon.post('baskets')
    }
}

const PRODUCT_ID = '883360524252' // the master '62516752'

const client = new Client(
    '5640cc6b-f5e9-466e-9134-9853e9f9db93',
    'https://mobify-tech-prtnr-na03-dw.demandware.net/s/2017refresh/dw/shop/v17_7'
)

client
    .getAllCategories()
    .then(() => client.guest())
    .then((customer) => {
        console.log('Customer:', customer)
    })
    .then(() => client.createBasket())
    .then((basket) => client.baskets.setCustomerEmail(basket.basket_id, 'jeremy@mobify.com'))
    .then((basket) => client.baskets.addProduct(basket.basket_id, PRODUCT_ID, 2)) // TODO: how does multi look like?
    .then((basket) => client.baskets.setBillingAddress(
        basket.basket_id,
        {
            first_name: 'Jeremy',
            last_name: 'Wiebe',
            address1: '1600 Pennsylvania Avenue',
            city: 'Washington',
            state_code: 'DC',
            country_code: 'US',
            postal_code: '10011'
        },
        false
    ))
    .then((basket) => client.baskets.addShippingAddress(
        basket.basket_id,
        {
            first_name: 'Jeremiah',
            last_name: 'Wiebelson',
            address1: '238 Eareckson Avenue',
            city: 'Stevensville',
            state_code: 'MD',
            country_code: 'US',
            postal_code: '21666'
        }
    ))
    .then((basket) => console.log(basket))

// OCAPI Shop client: https://documentation.demandware.com/DOC1/topic/com.demandware.dochelp/OCAPI/17.6/usage/ShopAPIResources.html
// Client ID: // https://documentation.demandware.com/DOC1/topic/com.demandware.dochelp/OCAPI/17.6/usage/ClientApplicationIdentification.html
// JWT: https://documentation.demandware.com/DOC1/topic/com.demandware.dochelp/OCAPI/17.6/usage/JWT.html?cp=0_11_2_15
// CUSTOMERS: https://documentation.demandware.com/DOC1/topic/com.demandware.dochelp/OCAPI/17.6/shop/Resources/Customers.html
//
// Mobify Connector:
// - Baskets: https://github.com/mobify/platform-scaffold/blob/develop/web/app/connectors/_sfcc-connector/cart/commands.js#L26
// const r2 = require('r2')


//     // Returns a Promise for categories matching `categoryIds`. Defaults to the
//     // `root` if not provided.
//     // https://documentation.demandware.com/DOC1/topic/com.demandware.dochelp/OCAPI/17.6/shop/Resources/Categories.html
//     categories(categoryIds = ['root'], depth = 2) {
//         const url = `categories/(${categoryIds.join(',')})?levels=${depth}`
//         return this.client.get(url)
//             .then(({data}) => data)
//     }

//     // Returns a Promise for products matching `categoryId`.
//     // TODO: Multiple categories
//     // https://documentation.demandware.com/DOC1/topic/com.demandware.dochelp/OCAPI/17.6/shop/Resources/ProductSearch.html
//     // http://hostname:port/dw/shop/v17_6/product_search?q={String}&refine={String}&sort={String}&start={Integer}&count={Integer}&expand={String}&currency={String}&locale={String}
//     // `hits`
//     // product_id, product_type, link
//     // refines
//     // count
//     // q = query what to search for
//     // refine = ids and values separated by =, if you have multiple then put |
//     // sort
//     // start
//     // what are all things we can search on again?
//     productSearch(categoryId = 'root', count = 200) {
//         return this.client.get(`product_search?refine=cgid=${categoryId}&expand=availability,images,prices,variations`)
//     }
// }


// if (!module.parent) {
//     // http://mobify-tech-prtnr-na03-dw.demandware.net/s/2017refresh/62516752.html?dwvar_62516752_color=DL0&cgid=newarrivals-mens#start=1
//     // How do you actually get this given a URL?
//     const PRODUCT_ID = '883360524252' // the master '62516752'

//     const client = new Client('5640cc6b-f5e9-466e-9134-9853e9f9db93', 'https://mobify-tech-prtnr-na03-dw.demandware.net/s/2017refresh/dw/shop/v17_7/')

//     let basketId

//     // TODO: Finish submitting an order and recording the basket states along the way.
//     client.guest()
//         .then(client.createBasket)
//         .then(({basket_id}) => {
//             basketId = basket_id
//             return client.addProductToBasket(basket_id, PRODUCT_ID)
//         })
//         .then(() => client.getBasket(basketId))
//         .then((basket) => {
//             console.log(basket)
//             debugger
//         })
//         .catch((err) => {
//             console.error(err)
//         })
// }


// module.exports = {
//     Client,
// }
