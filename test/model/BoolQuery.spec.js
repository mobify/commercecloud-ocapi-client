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
    instance = new ShopApi.BoolQuery()
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

describe('BoolQueryModel', () => {
    it('should create an instance of BoolQueryModel', () => {
        // uncomment below and update the code to test BoolQueryModel
        // var instane = new ShopApi.BoolQuery()
        // expect(instance).to.be.a(ShopApi.BoolQuery);
    })

    it('should have the property must (base name: "must")', () => {
        // uncomment below and update the code to test the property must
        // var instane = new ShopApi.BoolQuery()
        // expect(instance).to.be();
    })

    it('should have the property mustNot (base name: "must_not")', () => {
        // uncomment below and update the code to test the property mustNot
        // var instane = new ShopApi.BoolQuery()
        // expect(instance).to.be();
    })

    it('should have the property should (base name: "should")', () => {
        // uncomment below and update the code to test the property should
        // var instane = new ShopApi.BoolQuery()
        // expect(instance).to.be();
    })

})
