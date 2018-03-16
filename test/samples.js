/* * *  *  * *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  * */
/* Copyright (c) 2017 Mobify Research & Development Inc. All rights reserved. */
/* * *  *  * *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  * */

import ShopApi from '../src/index'

export const validCustomerInfo = ShopApi.CustomerInfo.constructFromObject({
    email: 'admin@mobify.com'
})

export const validOrderSearchRequest = ShopApi.Product.constructFromObject({
    query: {
        text_query: {
            fields: ['customer_email'],
            search_phrase: 'example@non.existing.com'
        }
    },
    select: '(**)',
    sorts: [{
        field: 'customer_name',
        sort_order: 'asc'
    }]
})

export const validProduct = ShopApi.Product.constructFromObject({
    id: '008884303989'
})

export const validProductItem = ShopApi.ProductItem.constructFromObject({
    product_id: validProduct.id,
    quantity: 1
})

export const validCustomerProductListItemLink = ShopApi.CustomerProductListItemLink.constructFromObject({
    link: `https://mobify-tech-prtnr-na03-dw.demandware.net/s/2017refresh/dw/shop/v17_8/products/${validProduct.id}`,
    title: 'Platinum Blue Stripes Easy Care Fitted Shirt'
})

export const validCustomerProductListItem = ShopApi.CustomerProductListItem.constructFromObject({
    product: validProduct,
    product_details_link: validCustomerProductListItemLink,
    product_id: validProduct.id,
    public: true,
    quantity: 1,
    type: 'product'
})

export const validCustomerProductList = ShopApi.CustomerProductList.constructFromObject({
    type: 'wish_list',
    name: 'OurProductList',
    description: 'our productlist',
    public: true,
    co_registrant: {
        email: 'janedoe@example.com',
        first_name: 'Jane',
        last_name: 'Doe',
        role: 'Bride'
    },
    registrant: {
        email: 'johndoe@example.com',
        first_name: 'John',
        last_name: 'Doe',
        role: 'Groom'
    },
    event: {
        city: 'Washington',
        country: 'US',
        date: '2015-07-30T00:00Z',
        state: 'DC',
        type: 'Wedding'
    }
})

export const validCustomerPaymentCardRequest = ShopApi.CustomerPaymentCardRequest.constructFromObject({
    expiration_year: 2047,
    expiration_month: 7,
    number: '4111111111111111',
    holder: 'Joe Doe',
    card_type: 'Visa'
})

export const validCustomerPaymentInstrumentRequest = ShopApi.CustomerPaymentInstrumentRequest.constructFromObject({
    payment_card: validCustomerPaymentCardRequest,
    payment_method_id: 'CREDIT_CARD'
})

export const validOrderPaymentCardRequest = ShopApi.OrderPaymentCardRequest.constructFromObject({
    expiration_year: 2047,
    expiration_month: 7,
    number: '4111111111111111',
    holder: 'Joe Doe',
    card_type: 'Visa',
    security_code: '123'
})

export const validOrderPaymentInstrumentRequest = ShopApi.OrderPaymentInstrumentRequest.constructFromObject({
    payment_card: validOrderPaymentCardRequest,
    payment_method_id: 'CREDIT_CARD'
})

export const validOrderAddress = ShopApi.CustomerAddress.constructFromObject({
    address1: '1600 Pennsylvania Avenue NW',
    city: 'Washington',
    country_code: 'US',
    first_name: 'Donald',
    last_name: 'Trump',
    phone: '(555) 555-5555',
    postal_code: '20500',
    state_code: 'DC'
})

export const validOrderAddress2 = ShopApi.CustomerAddress.constructFromObject({
    address1: '14046 Aubrey Rd',
    city: 'Beverly Hills',
    country_code: 'US',
    first_name: 'Tom',
    last_name: 'Arnold',
    phone: '(555) 555-5555',
    postal_code: '90210-1064',
    state_code: 'CA'
})

export const validCustomerAddress = ShopApi.CustomerAddress.constructFromObject({
    address_id: 'work',
    address1: '725 Granville Steet',
    address2: 'Suite 420',
    city: 'Vancouver',
    company_name: 'Mobify',
    country_code: 'CA',
    first_name: 'Ben',
    job_title: 'Developer',
    last_name: 'Chypak',
    phone: '1-866-502-5880',
    postal_code: 'V7Y1C6',
    preferred: false,
    state_code: 'BC'
})

export const validCustomer = ShopApi.Customer.constructFromObject({
    login: `automated.user`,
    email: `automated.user@mobify.com`,
    first_name: 'automated',
    last_name: 'user',
    company_name: 'mobify'
})

export const validCustomerRegistration = ShopApi.CustomerRegistration.constructFromObject({
    password: '12345!aBcD:',
    customer: validCustomer
})

export const validPasswordChangeRequest = ShopApi.PasswordChangeRequest.constructFromObject({
    current_password: validCustomerRegistration.password,
    password: '54321!aBcD:'
})

export const invalidPasswordChangeRequest = ShopApi.PasswordChangeRequest.constructFromObject({
    current_password: validCustomerRegistration.password,
    password: ''
})

export const validPasswordReset = ShopApi.PasswordReset.constructFromObject({
    identification: 'jsmith@nonexist.com',
    type: 'email'
})

export const invalidPasswordReset = ShopApi.PasswordReset.constructFromObject({
    identification: 'jsmith@nonexist.com'
})
