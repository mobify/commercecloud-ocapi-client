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
    instance = new ShopApi.PriceAdjustmentLimit()
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

describe('PriceAdjustmentLimitModel', () => {
    it('should create an instance of PriceAdjustmentLimitModel', () => {
        // uncomment below and update the code to test PriceAdjustmentLimitModel
        // var instane = new ShopApi.PriceAdjustmentLimit()
        // expect(instance).to.be.a(ShopApi.PriceAdjustmentLimit);
    })

    it('should have the property amount (base name: "amount")', () => {
        // uncomment below and update the code to test the property amount
        // var instane = new ShopApi.PriceAdjustmentLimit()
        // expect(instance).to.be();
    })

    it('should have the property currency (base name: "currency")', () => {
        // uncomment below and update the code to test the property currency
        // var instane = new ShopApi.PriceAdjustmentLimit()
        // expect(instance).to.be();
    })

    it('should have the property percent (base name: "percent")', () => {
        // uncomment below and update the code to test the property percent
        // var instane = new ShopApi.PriceAdjustmentLimit()
        // expect(instance).to.be();
    })

    it('should have the property type (base name: "type")', () => {
        // uncomment below and update the code to test the property type
        // var instane = new ShopApi.PriceAdjustmentLimit()
        // expect(instance).to.be();
    })

})
