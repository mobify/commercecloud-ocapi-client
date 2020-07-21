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
    instance = new ShopApi.ProductSearchResult()
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

describe('ProductSearchResultModel', () => {
    it('should create an instance of ProductSearchResultModel', () => {
        // uncomment below and update the code to test ProductSearchResultModel
        // var instane = new ShopApi.ProductSearchResult()
        // expect(instance).to.be.a(ShopApi.ProductSearchResult);
    })

    it('should have the property count (base name: "count")', () => {
        // uncomment below and update the code to test the property count
        // var instane = new ShopApi.ProductSearchResult()
        // expect(instance).to.be();
    })

    it('should have the property data (base name: "data")', () => {
        // uncomment below and update the code to test the property data
        // var instane = new ShopApi.ProductSearchResult()
        // expect(instance).to.be();
    })

    it('should have the property fetchDate (base name: "fetch_date")', () => {
        // uncomment below and update the code to test the property fetchDate
        // var instane = new ShopApi.ProductSearchResult()
        // expect(instance).to.be();
    })

    it('should have the property hits (base name: "hits")', () => {
        // uncomment below and update the code to test the property hits
        // var instane = new ShopApi.ProductSearchResult()
        // expect(instance).to.be();
    })

    it('should have the property next (base name: "next")', () => {
        // uncomment below and update the code to test the property next
        // var instane = new ShopApi.ProductSearchResult()
        // expect(instance).to.be();
    })

    it('should have the property previous (base name: "previous")', () => {
        // uncomment below and update the code to test the property previous
        // var instane = new ShopApi.ProductSearchResult()
        // expect(instance).to.be();
    })

    it('should have the property query (base name: "query")', () => {
        // uncomment below and update the code to test the property query
        // var instane = new ShopApi.ProductSearchResult()
        // expect(instance).to.be();
    })

    it('should have the property refinements (base name: "refinements")', () => {
        // uncomment below and update the code to test the property refinements
        // var instane = new ShopApi.ProductSearchResult()
        // expect(instance).to.be();
    })

    it('should have the property searchPhraseSuggestions (base name: "search_phrase_suggestions")', () => {
        // uncomment below and update the code to test the property searchPhraseSuggestions
        // var instane = new ShopApi.ProductSearchResult()
        // expect(instance).to.be();
    })

    it('should have the property selectedRefinements (base name: "selected_refinements")', () => {
        // uncomment below and update the code to test the property selectedRefinements
        // var instane = new ShopApi.ProductSearchResult()
        // expect(instance).to.be();
    })

    it('should have the property selectedSortingOption (base name: "selected_sorting_option")', () => {
        // uncomment below and update the code to test the property selectedSortingOption
        // var instane = new ShopApi.ProductSearchResult()
        // expect(instance).to.be();
    })

    it('should have the property sortingOptions (base name: "sorting_options")', () => {
        // uncomment below and update the code to test the property sortingOptions
        // var instane = new ShopApi.ProductSearchResult()
        // expect(instance).to.be();
    })

    it('should have the property start (base name: "start")', () => {
        // uncomment below and update the code to test the property start
        // var instane = new ShopApi.ProductSearchResult()
        // expect(instance).to.be();
    })

    it('should have the property total (base name: "total")', () => {
        // uncomment below and update the code to test the property total
        // var instane = new ShopApi.ProductSearchResult()
        // expect(instance).to.be();
    })

})
