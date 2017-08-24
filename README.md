## DEMANDWARE SLEUTH

*Goal*: Compare the flow of submitting a basket through the OCAPI to the flow of submiting through the desktop.

First Milestone: Submit an order through OCAPI.

```bash
# Run the client in Debug mode:
./node_modules/.bin/nodemon --inspect --debug-brk ./client.js
```

The final code should look something like this:

```js

client.guest()
 .then(client.addItem, {item})
 .then(client.setShippingAddress, {address})  // as a billing for now
 .then(client.setShippingMethod, {})
 .then(client.setBilling, {})
 .then(client.order, {})
```

The steps we have left, based on: https://github.com/mobify/platform-scaffold/blob/develop/web/app/connectors/_sfcc-connector/checkout/commands.js#L228

1. set the customer name

> https://mobify-tech-prtnr-na03-dw.demandware.net/s/2017refresh/dw/shop/v17_4/baskets/aefd5c5a6ce5947e94f1ea804d/customer

```json

{"customer_name":"John Boxall","customer_id":"abFXk9ur3Ltu9BJcsDOE31XOoQ"}

```

2. set the basket's shipping address

> use_as_billing=true

```json
 {
     "address1": "1600 pennsylvania",
     "city": "washington",
     "country_code": "us",
     "first_name": "John",
     "last_name": "Boxall",
     "full_name": "John Boxall",
     "phone": "(778) 882-0017",
     "postal_code": "20050",
     "state_code": "DC"
 }
 ```

 3. set the baskets shipping method

 > https://mobify-tech-prtnr-na03-dw.demandware.net/s/2017refresh/dw/shop/v17_4/baskets/aefd5c5a6ce5947e94f1ea804d/shipments/me/shipping_method

 ```json
 {"id":"standardshipping"}
 ```

 4. set the baskets payment instrument

 > https://mobify-tech-prtnr-na03-dw.demandware.net/s/2017refresh/dw/shop/v17_4/baskets/aefd5c5a6ce5947e94f1ea804d/payment_instruments

 ```
 {"amount":312.7,"payment_method_id":"CREDIT_CARD","payment_card":{"card_type":"Visa"}}
 ```

 5. Create the order - we send up the whole basket.

_I don't actually believe we need to send the whole basket... if we did we probably wouldn't need the other steps._

> https://mobify-tech-prtnr-na03-dw.demandware.net/s/2017refresh/dw/shop/v17_4/orders

```json
{
     "_v": "17.4",
     "_type": "basket",
     "_resource_state": "255df110f1b3823552f0823d6db6edb15a347912540868add72c4c07f8c0b84f",
     "adjusted_merchandize_total_tax": 17.7,
     "adjusted_shipping_total_tax": 0,
     "agent_basket": false,
     "basket_id": "aefd5c5a6ce5947e94f1ea804d",
     "billing_address": {
         "_type": "order_address",
         "address1": "1600 pennsylvania",
         "city": "washington",
         "country_code": "us",
         "first_name": "John",
         "full_name": "John Boxall",
         "id": "8a3a44ed26b601d01189000cd5",
         "last_name": "Boxall",
         "phone": "(778) 882-0017",
         "postal_code": "20050",
         "state_code": "DC"
     },
     "channel_type": "storefront",
     "creation_date": "2017-08-24T06:06:50.947Z",
     "currency": "USD",
     "customer_info": {
         "_type": "customer_info",
         "customer_id": "abFXk9ur3Ltu9BJcsDOE31XOoQ",
         "email": ""
     },
     "last_modified": "2017-08-24T06:11:44.713Z",
     "merchandize_total_tax": 17.7,
     "notes": {
         "_type": "simple_link",
         "link": "https://mobify-tech-prtnr-na03-dw.demandware.net/s/2017refresh/dw/shop/v17_4/baskets/aefd5c5a6ce5947e94f1ea804d/notes"
     },
     "order_total": 312.7,
     "payment_instruments": [
         {
             "_type": "order_payment_instrument",
             "amount": 312.7,
             "payment_card": {
                 "_type": "payment_card",
                 "card_type": "Visa",
                 "credit_card_expired": false
             },
             "payment_instrument_id": "fd6c7f2abcb47180cd23e2c256",
             "payment_method_id": "CREDIT_CARD"
         }
     ],
     "product_items": [
         {
             "_type": "product_item",
             "adjusted_tax": 17.7,
             "base_price": 295,
             "bonus_product_line_item": false,
             "item_id": "0a8f9ec8c94992b07b6abb30f7",
             "item_text": "Casual Spring Easy Jacket",
             "price": 295,
             "price_after_item_discount": 295,
             "price_after_order_discount": 295,
             "product_id": "883360524252",
             "product_name": "Casual Spring Easy Jacket",
             "quantity": 1,
             "shipment_id": "me",
             "tax": 17.7,
             "tax_basis": 295,
             "tax_class_id": "standard",
             "tax_rate": 0.06
         }
     ],
     "product_sub_total": 295,
     "product_total": 295,
     "shipments": [
         {
             "_type": "shipment",
             "adjusted_merchandize_total_tax": 17.7,
             "adjusted_shipping_total_tax": 0,
             "gift": false,
             "merchandize_total_tax": 17.7,
             "product_sub_total": 295,
             "product_total": 295,
             "shipment_id": "me",
             "shipment_total": 312.7,
             "shipping_address": {
                 "_type": "order_address",
                 "address1": "1600 pennsylvania",
                 "city": "washington",
                 "country_code": "us",
                 "first_name": "John",
                 "full_name": "John Boxall",
                 "id": "8a3a44ed26b601d01189000cd5",
                 "last_name": "Boxall",
                 "phone": "(778) 882-0017",
                 "postal_code": "20050",
                 "state_code": "DC"
             },
             "shipping_method": {
                 "_type": "shipping_method",
                 "description": "5-7 business days",
                 "id": "standardshipping",
                 "name": "Standard Shipping",
                 "price": 0,
                 "c_storePickupEnabled": false
             },
             "shipping_status": "not_shipped",
             "shipping_total": 0,
             "shipping_total_tax": 0,
             "tax_total": 17.7
         }
     ],
     "shipping_items": [
         {
             "_type": "shipping_item",
             "adjusted_tax": 0,
             "base_price": 0,
             "item_id": "8e53a7346cd4d9d9a29abab143",
             "item_text": "Shipping",
             "price": 0,
             "price_after_item_discount": 0,
             "shipment_id": "me",
             "tax": 0,
             "tax_basis": 0,
             "tax_class_id": null,
             "tax_rate": 0.06
         }
     ],
     "shipping_total": 0,
     "shipping_total_tax": 0,
     "taxation": "net",
     "tax_total": 17.7
 }
 ```

 6. Attach a payment instrument to the order to submit it.

 > https://mobify-tech-prtnr-na03-dw.demandware.net/s/2017refresh/dw/shop/v17_4/orders/00005601/payment_instruments/a7d8eb15f1cc8bc41622ad366c

 ```json
 {
     "payment_card": {
         "card_type": "Visa",
         "expiration_month": 12,
         "expiration_year": 2018,
         "holder": "John Boxall",
         "number": "4111111111111111",
         "security_code": "111"
     },
     "payment_method_id": "CREDIT_CARD"
 }
 ```