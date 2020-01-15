/* * *  *  * *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  * */
/* Copyright (c) 2019 Mobify Research & Development Inc. All rights reserved. */
/* * *  *  * *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  * */

import expect from 'expect.js'
import sinon from 'sinon'

import ShopApi from '../../src/index'
import {clientId, baseUrl} from '../config.json'

let client

beforeEach(() => {
    client = new ShopApi.ApiClient({
        basePath: `${baseUrl}`,
        defaultHeaders: {'x-dw-client-id': clientId}
    })
})

describe('ApiClient', () => {
    describe('utilities', () => {
        it('buildRefineParams returns an object with keyed refinements', () => {
            const tests = new Map()
            tests.set(undefined, {})
            tests.set([], {})
            tests.set(['foo=bar'], {refine: 'foo=bar'})
            tests.set(
                ['foo1=bar1', 'foo2=bar2'],
                {
                    refine_1: 'foo1=bar1',
                    refine_2: 'foo2=bar2'
                }
            )

            for(let [input, result] of tests) {
                expect(client.buildRefineParams(input)).to.eql(result)
            }
        })
    })

    describe('sendApiRequest', () => {
        let mockRequest

        beforeEach(() => {
            mockRequest = {end: sinon.stub()}
        })

        it('should deserialize a successful response into a string', () => {
            const mockData = Symbol()
            const mockResponse = Symbol()

            client.deserialize = sinon.stub().returns(mockData)
            mockRequest.end.callsArgWith(0, null, mockResponse)

            return client.sendApiRequest(mockRequest, 'String')
                .then((result) => {
                    expect(result.data).to.be(mockData)
                    expect(result.response).to.be(mockResponse)
                    expect(client.deserialize.calledWith(mockResponse, 'String')).to.be(true)
                })
        })

        it('should deserialize the response into a blob', () => {
            const mockData = Symbol()
            const mockResponse = Symbol()

            client.deserialize = sinon.stub().returns(mockData)
            mockRequest.end.callsArgWith(0, null, mockResponse)

            return client.sendApiRequest(mockRequest, 'Blob')
                .then((result) => {
                    expect(result.data).to.be(mockData)
                    expect(result.response).to.be(mockResponse)
                    expect(client.deserialize.calledWith(mockResponse, 'Blob')).to.be(true)
                })
        })

        it('should reject when deserializing the response throws an error', () => {
            const mockError = Symbol()

            client.deserialize = sinon.stub().throws(mockError)
            mockRequest.end.callsArg(0)

            return client.sendApiRequest(mockRequest, 'String')
                .catch((error) => {
                    expect(error).to.be(mockError)
                })
        })

        it('should reject when the request fails with valid JSON', () => {
            const mockError = {
                response: {
                    text: '{ "fault": { "message": "foo", "type": "bar" } }'
                }
            }

            mockRequest.end.callsArgWith(0, mockError)

            return client.sendApiRequest(mockRequest, 'String')
                .catch((error) => {
                    expect(error).to.be.a(ShopApi.Fault)
                    expect(error.message).to.equal('foo')
                    expect(error.type).to.equal('bar')
                })
        })

        it('should reject when the request fails with HTML', () => {
            const mockError = {
                response: {
                    text: '<html><head></head><body></body></html>'
                }
            }

            mockRequest.end.callsArgWith(0, mockError)

            return client.sendApiRequest(mockRequest, 'String')
                .catch((error) => {
                    expect(error).to.be.a(SyntaxError)
                })
        })

        it('should reject when the request fails for any reason', () => {
            const mockError = Symbol()

            mockRequest.end.callsArgWith(0, mockError)

            return client.sendApiRequest(mockRequest, 'String')
                .catch((error) => {
                    expect(error).to.be(mockError)
                })
        })
    })
})
