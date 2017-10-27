import * as ShopApi from '../src/index'
import {clientId, proxyUrl, baseUrl} from './config.json'
import btoa from 'btoa'
import atob from 'atob'
import * as dataSamples from './samples'

const VALID_USER_NAME = 'mobifyqa@gmail.com'
const VALID_USER_PASS = 'p4ssword'

export const getNewRegisteredUser = (client) => {
    const instance = new ShopApi.CustomersApi(client)
    const {
        validCustomerRegistration,
        validCustomerAddress,
        validCustomerPaymentInstrumentRequest,
        validCustomerProductList
    } = dataSamples

    const {customer, password} = validCustomerRegistration

    let newCustomer
    let newProductLists
    return getGuestUserAuth(client)
        .then(() => instance.postCustomers(validCustomerRegistration))
        .then(() => instance.postCustomersAuth(
            { type: 'credentials' },
            { authorization: `Basic ${btoa(`${customer.login}:${password}`)}` }
        ))
        .then((customer) => { newCustomer = customer})
        .then(() => instance.postCustomersByIDAddresses(newCustomer.customer_id, validCustomerAddress))
        .then(() => instance.postCustomersByIDPaymentInstruments(newCustomer.customer_id, validCustomerPaymentInstrumentRequest))
        .then(() => instance.postCustomersByIDProductLists(newCustomer.customer_id, validCustomerProductList))
        .then((productList) => {
            // Append product list for testing purposes later
            newProductLists = [productList]
        })
        .then(() => instance.getCustomersByID(newCustomer.customer_id, { expand: ['addresses', 'paymentinstruments']}))
        .then((customer) => {
            customer.product_lists = newProductLists
            return customer
        })
}

export const getNewRegisteredUserWithPayment = (client) => {
    return getNewRegisteredUser(client, {ignore})
}
export const getAuthPayload = (client) => {
    // NOTE: This function needs to to do error checking
    const {authorization} = client.defaultHeaders

    const token = authorization.split(' ')[1]
    const payload = token.split('.')[1]

    return JSON.parse(atob(payload))
}

export const getAuthClientInfo = (client) => {
    const payload = getAuthPayload(client)

    return JSON.parse(payload.sub).customer_info
}

export const getRegisteredUserAuth = (client) => {
    const instance = new ShopApi.CustomersApi(client)

    return instance.postCustomersAuth(
        { type: 'credentials' },
        { authorization: `Basic ${btoa(`${VALID_USER_NAME}:${VALID_USER_PASS}`)}` }
    )
}

export const getGuestUserAuth = (client) => {
    const instance = new ShopApi.CustomersApi(client)

    return instance.postCustomersAuth({ type: 'guest' })
}

export const clearUserAuth = (client) => {
    const instance = new ShopApi.CustomersApi(client)

    return instance.deleteCustomersAuth({ type: 'guest' })
}
