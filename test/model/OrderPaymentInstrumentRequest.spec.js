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

let instance

beforeEach(() => {
    instance = new ShopApi.OrderPaymentInstrumentRequest()
})

const getProperty = (object, getter, property) => {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function') {
        return object[getter]()
    } else {
        return object[property]
    }
}

const setProperty = (object, setter, property, value) => {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function') {
        object[setter](value)
    } else {
        object[property] = value
    }
}

describe('OrderPaymentInstrumentRequestModel', () => {
    it('should create an instance of OrderPaymentInstrumentRequestModel', () => {
        // uncomment below and update the code to test OrderPaymentInstrumentRequestModel
        // var instane = new ShopApi.OrderPaymentInstrumentRequest()
        // expect(instance).to.be.a(ShopApi.OrderPaymentInstrumentRequest);
    })

    it('should have the property amount (base name: "amount")', () => {
        // uncomment below and update the code to test the property amount
        // var instane = new ShopApi.OrderPaymentInstrumentRequest()
        // expect(instance).to.be();
    })

    it('should have the property bankRoutingNumber (base name: "bank_routing_number")', () => {
        // uncomment below and update the code to test the property bankRoutingNumber
        // var instane = new ShopApi.OrderPaymentInstrumentRequest()
        // expect(instance).to.be();
    })

    it('should have the property createCustomerPaymentInstrument (base name: "create_customer_payment_instrument")', () => {
        // uncomment below and update the code to test the property createCustomerPaymentInstrument
        // var instane = new ShopApi.OrderPaymentInstrumentRequest()
        // expect(instance).to.be();
    })

    it('should have the property customerPaymentInstrumentId (base name: "customer_payment_instrument_id")', () => {
        // uncomment below and update the code to test the property customerPaymentInstrumentId
        // var instane = new ShopApi.OrderPaymentInstrumentRequest()
        // expect(instance).to.be();
    })

    it('should have the property giftCertificateCode (base name: "gift_certificate_code")', () => {
        // uncomment below and update the code to test the property giftCertificateCode
        // var instane = new ShopApi.OrderPaymentInstrumentRequest()
        // expect(instance).to.be();
    })

    it('should have the property paymentBankAccount (base name: "payment_bank_account")', () => {
        // uncomment below and update the code to test the property paymentBankAccount
        // var instane = new ShopApi.OrderPaymentInstrumentRequest()
        // expect(instance).to.be();
    })

    it('should have the property paymentCard (base name: "payment_card")', () => {
        // uncomment below and update the code to test the property paymentCard
        // var instane = new ShopApi.OrderPaymentInstrumentRequest()
        // expect(instance).to.be();
    })

    it('should have the property paymentMethodId (base name: "payment_method_id")', () => {
        // uncomment below and update the code to test the property paymentMethodId
        // var instane = new ShopApi.OrderPaymentInstrumentRequest()
        // expect(instance).to.be();
    })

})
