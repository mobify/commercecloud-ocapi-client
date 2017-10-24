import * as ShopApi from '../src/index'
import {clientId, proxyUrl, baseUrl} from './config.json'
import btoa from 'btoa'

const VALID_USER_NAME = 'mobifyqa@gmail.com'
const VALID_USER_PASS = 'p4ssword'

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
