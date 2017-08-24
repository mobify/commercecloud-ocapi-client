// OCAPI Shop client: https://documentation.demandware.com/DOC1/topic/com.demandware.dochelp/OCAPI/17.6/usage/ShopAPIResources.html
// Client ID: // https://documentation.demandware.com/DOC1/topic/com.demandware.dochelp/OCAPI/17.6/usage/ClientApplicationIdentification.html
// JWT: https://documentation.demandware.com/DOC1/topic/com.demandware.dochelp/OCAPI/17.6/usage/JWT.html?cp=0_11_2_15
// CUSTOMERS: https://documentation.demandware.com/DOC1/topic/com.demandware.dochelp/OCAPI/17.6/shop/Resources/Customers.html
//
// Mobify Connector:
// - Baskets: https://github.com/mobify/platform-scaffold/blob/develop/web/app/connectors/_sfcc-connector/cart/commands.js#L26
const Request = require('request-promise')


class Client {
    constructor(clientId, baseUrl) {
        this.client = Request.defaults({
            baseUrl,
            headers: {
                'Content-Type': 'application/json',
                'X-DW-Client-ID': clientId
            },
            json: true
        })

        // TODO: How can we bind all the methods? Or do we need another approach? https://ponyfoo.com/articles/binding-methods-to-class-instance-objects
        this.createBasket = this.createBasket.bind(this)
        this.addProductToBasket = this.addProductToBasket.bind(this)
        this.getBasket = this.getBasket.bind(this)
    }


    // Associate this client with a Guest session.
    guest() {
        // TODO: Should this bind the Customer ID?
        const self = this
        const options = {
            url: 'customers/auth',
            json: {
                type: 'guest'
            },
            resolveWithFullResponse: true
        }

        return this.client.post(options)
            .then((response) => {
                self.client = self.client.defaults({
                    headers: {
                        Authorization: response.headers.authorization
                    }
                })
                return response.body
            })
    }


    createBasket() {
        // TODO: Should this bind the Basket ID?
        return this.client.post('baskets')
    }


    getBasket(basketId) {
        return this.client.get(`baskets/${basketId}`)
    }


    // `productId` must be a string. Also you can submit multiple items using this method.
    addProductToBasket(basketId, productId, quantity = 1) {
        return this.client.post({
            url: `baskets/${basketId}/items`,
            json: [{
                product_id: productId,
                quantity,
            }]
        })
    }


    // Returns a Promise for categories matching `categoryIds`. Defaults to the
    // `root` if not provided.
    // https://documentation.demandware.com/DOC1/topic/com.demandware.dochelp/OCAPI/17.6/shop/Resources/Categories.html
    categories(categoryIds = ['root'], depth = 2) {
        const url = `categories/(${categoryIds.join(',')})?levels=${depth}`
        return this.client.get(url)
            .then(({data}) => data)
    }

    // Returns a Promise for products matching `categoryId`.
    // TODO: Multiple categories
    // https://documentation.demandware.com/DOC1/topic/com.demandware.dochelp/OCAPI/17.6/shop/Resources/ProductSearch.html
    // http://hostname:port/dw/shop/v17_6/product_search?q={String}&refine={String}&sort={String}&start={Integer}&count={Integer}&expand={String}&currency={String}&locale={String}
    // `hits`
    // product_id, product_type, link
    // refines
    // count
    // q = query what to search for
    // refine = ids and values speerated by =, if you have multiple then put |
    // sort
    // start
    // what are all things we can search on again?
    productSearch(categoryId = 'root', count = 200) {
        return this.client.get(`product_search?refine=cgid=${categoryId}&expand=availability,images,prices,variations`)
    }
}





if (!module.parent) {
    // http://mobify-tech-prtnr-na03-dw.demandware.net/s/2017refresh/62516752.html?dwvar_62516752_color=DL0&cgid=newarrivals-mens#start=1
    // How do you actually get this given a URL?
    const PRODUCT_ID = '883360524252' // the master '62516752'

    const client = new Client('5640cc6b-f5e9-466e-9134-9853e9f9db93', 'https://mobify-tech-prtnr-na03-dw.demandware.net/s/2017refresh/dw/shop/v17_7/')

    let basketId

    // TODO: Finish submitting an order and recording the basket states along the way.
    client.guest()
        .then(client.createBasket)
        .then(({basket_id}) => {
            basketId = basket_id
            return client.addProductToBasket(basket_id, PRODUCT_ID)
        })
        .then(() => client.getBasket(basketId))
        .then((basket) => {
            console.log(basket)
            debugger
        })
        .catch((err) => {
            console.error(err)
        })
}


module.exports = {
    Client,
}