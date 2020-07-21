/* * *  *  * *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  * */
/* Copyright (c) 2020 Mobify Research & Development Inc. All rights reserved. */
/* * *  *  * *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  * */

/**
 * Shop API
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 20.4
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */
import expect from 'expect.js'
import ShopApi from '../../src/index'

import {clientId, proxyUrl, baseUrl} from '../config.json'
import * as utils from '../utils'

let instance
let client
let newCustomer

before(() => {
    client = new ShopApi.ApiClient({
        basePath: `${baseUrl}`,
        defaultHeaders: {'x-dw-client-id': clientId}
    })
})

beforeEach(() => {
    instance = new ShopApi.BasketsApi(client)

    return utils.getGuestUserAuth(client)
        .then((customer) => {
            newCustomer = customer
            return Promise.resolve()
        })
})

afterEach(() => utils.clearUserAuth(instance.apiClient))

const getProperty = (object, getter, property) => {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function') { return object[getter]() } else { return object[property] }
}

const setProperty = (object, setter, property, value) => {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function') { object[setter](value) } else { object[property] = value }
}

describe('BasketsApi', () => {
    // describe('deleteBasketsByID', () => {
    //     it('should call deleteBasketsByID successfully', () =>
    //         instance.deleteBasketsByID('BAD_BASKET_ID')
    //             .then((data) => {
    //                 console.log('data: ', data)
    //                 if (!data) throw error;
    //
    //                 // expect(category.id).to.be('root')
    //             })
    //     )
    // })

    // describe('deleteBasketsByIDCouponsByID', () => {
    //     it('should call deleteBasketsByIDCouponsByID successfully', (done) => {
    //         //uncomment below and update the code to test deleteBasketsByIDCouponsByID
    //         //instance.deleteBasketsByIDCouponsByID(function(error) {
    //         //  if (error) throw error;
    //         //expect().to.be()
    //         //})
    //         done()
    //     })
    // })
    //
    // describe('deleteBasketsByIDItemsByID', () => {
    //     it('should call deleteBasketsByIDItemsByID successfully', (done) => {
    //         //uncomment below and update the code to test deleteBasketsByIDItemsByID
    //         //instance.deleteBasketsByIDItemsByID(function(error) {
    //         //  if (error) throw error;
    //         //expect().to.be()
    //         //})
    //         done()
    //     })
    // })
    //
    // describe('deleteBasketsByIDNotesByID', () => {
    //     it('should call deleteBasketsByIDNotesByID successfully', (done) => {
    //         //uncomment below and update the code to test deleteBasketsByIDNotesByID
    //         //instance.deleteBasketsByIDNotesByID(function(error) {
    //         //  if (error) throw error;
    //         //expect().to.be()
    //         //})
    //         done()
    //     })
    // })
    //
    // describe('deleteBasketsByIDPaymentInstrumentsByID', () => {
    //     it('should call deleteBasketsByIDPaymentInstrumentsByID successfully', (done) => {
    //         //uncomment below and update the code to test deleteBasketsByIDPaymentInstrumentsByID
    //         //instance.deleteBasketsByIDPaymentInstrumentsByID(function(error) {
    //         //  if (error) throw error;
    //         //expect().to.be()
    //         //})
    //         done()
    //     })
    // })
    //
    // describe('deleteBasketsByIDShipmentsByID', () => {
    //     it('should call deleteBasketsByIDShipmentsByID successfully', (done) => {
    //         //uncomment below and update the code to test deleteBasketsByIDShipmentsByID
    //         //instance.deleteBasketsByIDShipmentsByID(function(error) {
    //         //  if (error) throw error;
    //         //expect().to.be()
    //         //})
    //         done()
    //     })
    // })
    //
    // describe('getBasketsByID', () => {
    //     it('should call getBasketsByID successfully', (done) => {
    //         //uncomment below and update the code to test getBasketsByID
    //         //instance.getBasketsByID(function(error) {
    //         //  if (error) throw error;
    //         //expect().to.be()
    //         //})
    //         done()
    //     })
    // })
    //
    // describe('getBasketsByIDNotes', () => {
    //     it('should call getBasketsByIDNotes successfully', (done) => {
    //         //uncomment below and update the code to test getBasketsByIDNotes
    //         //instance.getBasketsByIDNotes(function(error) {
    //         //  if (error) throw error;
    //         //expect().to.be()
    //         //})
    //         done()
    //     })
    // })
    //
    // describe('getBasketsByIDPaymentMethods', () => {
    //     it('should call getBasketsByIDPaymentMethods successfully', (done) => {
    //         //uncomment below and update the code to test getBasketsByIDPaymentMethods
    //         //instance.getBasketsByIDPaymentMethods(function(error) {
    //         //  if (error) throw error;
    //         //expect().to.be()
    //         //})
    //         done()
    //     })
    // })

    describe('getBasketsByIDShipmentsByIDShippingMethods', () => {
        it('should call getBasketsByIDShipmentsByIDShippingMethods successfully', () =>
            instance.postBaskets()
                .then((basket) =>
                    instance.getBasketsByIDShipmentsByIDShippingMethods(basket.basket_id, 'me')
                )
                .then((result) => {
                    expect(result.constructor.name).to.be('ShippingMethodResult')
                })
        )
    })

    // describe('patchBasketsByID', () => {
    //     it('should call patchBasketsByID successfully', (done) => {
    //         //uncomment below and update the code to test patchBasketsByID
    //         //instance.patchBasketsByID(function(error) {
    //         //  if (error) throw error;
    //         //expect().to.be()
    //         //})
    //         done()
    //     })
    // })
    //
    // describe('patchBasketsByIDItemsByID', () => {
    //     it('should call patchBasketsByIDItemsByID successfully', (done) => {
    //         //uncomment below and update the code to test patchBasketsByIDItemsByID
    //         //instance.patchBasketsByIDItemsByID(function(error) {
    //         //  if (error) throw error;
    //         //expect().to.be()
    //         //})
    //         done()
    //     })
    // })
    //
    // describe('patchBasketsByIDPaymentInstrumentsByID', () => {
    //     it('should call patchBasketsByIDPaymentInstrumentsByID successfully', (done) => {
    //         //uncomment below and update the code to test patchBasketsByIDPaymentInstrumentsByID
    //         //instance.patchBasketsByIDPaymentInstrumentsByID(function(error) {
    //         //  if (error) throw error;
    //         //expect().to.be()
    //         //})
    //         done()
    //     })
    // })
    //
    // describe('patchBasketsByIDShipmentsByID', () => {
    //     it('should call patchBasketsByIDShipmentsByID successfully', (done) => {
    //         //uncomment below and update the code to test patchBasketsByIDShipmentsByID
    //         //instance.patchBasketsByIDShipmentsByID(function(error) {
    //         //  if (error) throw error;
    //         //expect().to.be()
    //         //})
    //         done()
    //     })
    // })

    describe('postBaskets', () => {
        it('should call postBaskets successfully', () =>
            instance.postBaskets()
                .then((basket) => {
                    expect(basket.constructor.name).to.be('Basket')
                })
        )
    })

    describe('postBasketsByIDCoupons', () => {
        it('should call postBasketsByIDCoupons successfully', () =>
            instance.postBaskets()
                .then((basket) =>
                    instance.postBasketsByIDCoupons(basket.basket_id, {
                        code: 'AMAZE'
                    })
                )
                .then((basket) => {
                    expect(basket.coupon_items[0].code).to.be('AMAZE')
                })
        )
    })

    describe('postBasketsByIDGiftCertificateItems', () => {
        it('should call postBasketsByIDGiftCertificateItems successfully', () =>
            instance.postBaskets()
                .then((basket) =>
                    instance.postBasketsByIDGiftCertificateItems(basket.basket_id, {
                        recipient_email: 'ben.chypak@mobify.com',
                        recipient_name: 'Ben Chypak',
                        sender_name: 'John Boxall',
                        message: 'Present from your boss',
                        amount: 200.00
                    })
                )
                .then((basket) => {
                    expect(basket.gift_certificate_items.length).to.be(1)
                })
        )
    })

    describe('postBasketsByIDItems', () => {
        it('should call postBasketsByIDItems successfully', () =>
            instance.postBaskets()
                .then((basket) =>
                    instance.postBasketsByIDItems(basket.basket_id, [{
                        product_id: '008884303996',
                        quantity: 1.00
                    }])
                )
                .then((basket) => {
                    expect(basket.product_items.length).to.be(1)
                    expect(basket.product_items[0].product_id).to.be('008884303996')
                })
        )
    })

    // NOTE: We need to be authenticated to test this, we'll have to think of how to constuct
    // the tests before we can run this one.
    // describe('postBasketsByIDNotes', () => {
    //     it('should call postBasketsByIDNotes successfully', () =>
    //         instance.postBaskets()
    //             .then((basket) =>
    //                 instance.postBasketsByIDNotes(basket.basket_id, {
    //                     "subject" : "this is an example subject",
    //                     "text" : "This is a note because the customer was not very happy."
    //                 })
    //             )
    //             .then((basket) => {
    //                 expect(basket.notes).to.an('object')
    //             })
    //     )
    // })

    describe('postBasketsByIDPaymentInstruments', () => {
        it('should call postBasketsByIDPaymentInstruments successfully', () =>
            instance.postBaskets()
                .then((basket) =>
                    instance.postBasketsByIDPaymentInstruments(basket.basket_id, {
                        amount: 1.0,
                        payment_card: {
                            number: '411111111111111',
                            security_code: '121',
                            holder: 'John Doe',
                            card_type: 'Visa',
                            expiration_month: 1,
                            expiration_year: 2021
                        },
                        payment_method_id: 'CREDIT_CARD'
                    })
                )
                .then((basket) => {
                    expect(basket.payment_instruments.length).to.be(1)
                })
        )
    })

    describe('postBasketsByIDShipments', () => {
        it('should call postBasketsByIDShipments successfully', () =>
            instance.postBaskets()
                .then((basket) =>
                    instance.postBasketsByIDShipments(basket.basket_id, {
                        gift: true,
                        gift_message: 'Happy Birthday',
                        shipping_method: {
                            id: 'standardshipping'
                        },
                        shipping_address: {
                            first_name: 'John',
                            last_name: 'Smith',
                            city: 'Boston',
                            country_code: 'US',
                        }
                    })
                )
                .then((basket) => {
                    expect(basket.shipments).to.be.an('array')
                })
        )
    })

    describe('putBasketsByIDBillingAddress', () => {
        it('should call putBasketsByIDBillingAddress successfully', () =>
            instance.postBaskets()
                .then((basket) =>
                    instance.putBasketsByIDBillingAddress(basket.basket_id, {
                        useAsShipping: true,
                        body: {
                            first_name: 'John',
                            last_name: 'Smith',
                            city: 'Boston',
                            country_code: 'US'
                        }
                    })
                )
                .then((basket) => {
                    expect(basket.billing_address).to.be.an('object')
                    expect(basket.billing_address.city).to.be('Boston')
                })
        )
    })

    // NOTE: I have not figure out how to test this yet. Need to know when a basket
    // can be in the state of not having customer info before being able to set it.
    // describe('putBasketsByIDCustomer', () => {
    //     it('should call putBasketsByIDCustomer successfully', () =>
    //     instance.postBaskets()
    //         .then((basket) => {
    //             console.log('basket: ', basket)
    //             return instance.putBasketsByIDCustomer(basket.basket_id, {
    //                 "customer_no": "00022002",
    //                 "email": "mobifyqa@gmail.com"
    //             })
    //         })
    //         .then((basket) => {
    //             console.log('basket')
    //             expect(basket.customer_info).to.be.an('object')
    //             expect(basket.customer_info.customer_no).to.be('00022002')
    //             expect(basket.customer_info.email).to.be('mobifyqa@gmail.com')
    //         })
    //     )
    // })

    // NOTE: Make sure we refactor this sample data into it's own file.
    describe('putBasketsByIDShipmentsByIDShippingAddress', () => {
        it('should call putBasketsByIDShipmentsByIDShippingAddress successfully', () =>
            instance.postBaskets()
                .then((basket) =>
                    instance.putBasketsByIDShipmentsByIDShippingAddress(basket.basket_id, 'me', {
                        first_name: 'John',
                        last_name: 'Smith',
                        city: 'Boston',
                        country_code: 'US'
                    })
                )
                .then((basket) => {
                    expect(basket.shipments).to.be.an('array')
                    expect(basket.shipments.length).to.be(1)
                    expect(basket.shipments[0].shipping_address).to.be.an('object')
                    expect(basket.shipments[0].shipping_address.city).to.be('Boston')
                    expect(basket.shipments[0].shipping_address.country_code).to.be('US')
                })
        )
    })

    describe('putBasketsByIDShipmentsByIDShippingMethod', () => {
        it('should call putBasketsByIDShipmentsByIDShippingMethod successfully', () =>
            instance.postBaskets()
                .then((basket) =>
                    instance.putBasketsByIDShipmentsByIDShippingMethod(basket.basket_id, 'me', {
                        id: 'standardshipping'
                    })
                )
                .then((basket) => {
                    expect(basket.shipments).to.be.an('array')
                    expect(basket.shipments.length).to.be(1)
                    expect(basket.shipments[0].shipping_method).to.be.an('object')
                    expect(basket.shipments[0].shipping_method.id).to.be('standardshipping')
                })
        )
    })

})
