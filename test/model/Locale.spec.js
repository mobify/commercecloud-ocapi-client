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
    instance = new ShopApi.Locale()
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

describe('LocaleModel', () => {
    it('should create an instance of LocaleModel', () => {
        // uncomment below and update the code to test LocaleModel
        // var instane = new ShopApi.Locale()
        // expect(instance).to.be.a(ShopApi.Locale);
    })

    it('should have the property country (base name: "country")', () => {
        // uncomment below and update the code to test the property country
        // var instane = new ShopApi.Locale()
        // expect(instance).to.be();
    })

    it('should have the property _default (base name: "default")', () => {
        // uncomment below and update the code to test the property _default
        // var instane = new ShopApi.Locale()
        // expect(instance).to.be();
    })

    it('should have the property displayCountry (base name: "display_country")', () => {
        // uncomment below and update the code to test the property displayCountry
        // var instane = new ShopApi.Locale()
        // expect(instance).to.be();
    })

    it('should have the property displayLanguage (base name: "display_language")', () => {
        // uncomment below and update the code to test the property displayLanguage
        // var instane = new ShopApi.Locale()
        // expect(instance).to.be();
    })

    it('should have the property displayName (base name: "display_name")', () => {
        // uncomment below and update the code to test the property displayName
        // var instane = new ShopApi.Locale()
        // expect(instance).to.be();
    })

    it('should have the property id (base name: "id")', () => {
        // uncomment below and update the code to test the property id
        // var instane = new ShopApi.Locale()
        // expect(instance).to.be();
    })

    it('should have the property iso3Country (base name: "iso3_country")', () => {
        // uncomment below and update the code to test the property iso3Country
        // var instane = new ShopApi.Locale()
        // expect(instance).to.be();
    })

    it('should have the property iso3Language (base name: "iso3_language")', () => {
        // uncomment below and update the code to test the property iso3Language
        // var instane = new ShopApi.Locale()
        // expect(instance).to.be();
    })

    it('should have the property language (base name: "language")', () => {
        // uncomment below and update the code to test the property language
        // var instane = new ShopApi.Locale()
        // expect(instance).to.be();
    })

    it('should have the property name (base name: "name")', () => {
        // uncomment below and update the code to test the property name
        // var instane = new ShopApi.Locale()
        // expect(instance).to.be();
    })

})
