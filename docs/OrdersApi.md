# ShopApi.OrdersApi

All URIs are relative to *https://mobify-tech-prtnr-na03-dw.demandware.net/s/2017refresh/dw/shop/v17_8*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteOrdersByIDNotesByID**](OrdersApi.md#deleteOrdersByIDNotesByID) | **DELETE** /orders/{order_no}/notes/{note_id} | 
[**deleteOrdersByIDPaymentInstrumentsByID**](OrdersApi.md#deleteOrdersByIDPaymentInstrumentsByID) | **DELETE** /orders/{order_no}/payment_instruments/{payment_instrument_id} | 
[**getOrdersByID**](OrdersApi.md#getOrdersByID) | **GET** /orders/{order_no} | 
[**getOrdersByIDNotes**](OrdersApi.md#getOrdersByIDNotes) | **GET** /orders/{order_no}/notes | 
[**getOrdersByIDPaymentMethods**](OrdersApi.md#getOrdersByIDPaymentMethods) | **GET** /orders/{order_no}/payment_methods | 
[**patchOrdersByID**](OrdersApi.md#patchOrdersByID) | **PATCH** /orders/{order_no} | 
[**patchOrdersByIDPaymentInstrumentsByID**](OrdersApi.md#patchOrdersByIDPaymentInstrumentsByID) | **PATCH** /orders/{order_no}/payment_instruments/{payment_instrument_id} | 
[**postOrders**](OrdersApi.md#postOrders) | **POST** /orders | 
[**postOrdersByIDNotes**](OrdersApi.md#postOrdersByIDNotes) | **POST** /orders/{order_no}/notes | 
[**postOrdersByIDPaymentInstruments**](OrdersApi.md#postOrdersByIDPaymentInstruments) | **POST** /orders/{order_no}/payment_instruments | 


<a name="deleteOrdersByIDNotesByID"></a>
# **deleteOrdersByIDNotesByID**
> OrderModel deleteOrdersByIDNotesByID(orderNo, noteId)



Removes an order note.

### Example
```javascript
import ShopApi from 'shop_api'
let defaultClient = ShopApi.ApiClient.instance;

// Configure HTTP basic authorization: customers_auth
let customers_auth = defaultClient.authentications['customers_auth'];
customers_auth.username = 'YOUR USERNAME'
customers_auth.password = 'YOUR PASSWORD'

// Configure OAuth2 access token for authorization: oauth2_application
let oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN'

let apiInstance = new ShopApi.OrdersApi();

let orderNo = "orderNo_example"; // String | the id of the order to be modified

let noteId = "noteId_example"; // String | the id of the note to be removed

apiInstance.deleteOrdersByIDNotesByID(orderNo, noteId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderNo** | **String**| the id of the order to be modified | 
 **noteId** | **String**| the id of the note to be removed | 

### Return type

[**OrderModel**](OrderModel.md)

### Authorization

[customers_auth](../README.md#customers_auth), [oauth2_application](../README.md#oauth2_application)

### HTTP request headers

 - **Content-Type**: application/json, text/xml, application/xml
 - **Accept**: application/json, text/xml, application/xml

<a name="deleteOrdersByIDPaymentInstrumentsByID"></a>
# **deleteOrdersByIDPaymentInstrumentsByID**
> OrderModel deleteOrdersByIDPaymentInstrumentsByID(orderNo, paymentInstrumentId)



Removes a payment instrument of an order.

### Example
```javascript
import ShopApi from 'shop_api'
let defaultClient = ShopApi.ApiClient.instance;

// Configure HTTP basic authorization: customers_auth
let customers_auth = defaultClient.authentications['customers_auth'];
customers_auth.username = 'YOUR USERNAME'
customers_auth.password = 'YOUR PASSWORD'

// Configure OAuth2 access token for authorization: oauth2_application
let oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN'

let apiInstance = new ShopApi.OrdersApi();

let orderNo = "orderNo_example"; // String | the order number

let paymentInstrumentId = "paymentInstrumentId_example"; // String | the id of the payment instrument to be updated

apiInstance.deleteOrdersByIDPaymentInstrumentsByID(orderNo, paymentInstrumentId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderNo** | **String**| the order number | 
 **paymentInstrumentId** | **String**| the id of the payment instrument to be updated | 

### Return type

[**OrderModel**](OrderModel.md)

### Authorization

[customers_auth](../README.md#customers_auth), [oauth2_application](../README.md#oauth2_application)

### HTTP request headers

 - **Content-Type**: application/json, text/xml, application/xml
 - **Accept**: application/json, text/xml, application/xml

<a name="getOrdersByID"></a>
# **getOrdersByID**
> OrderModel getOrdersByID(orderNo)



Gets information for an order.

### Example
```javascript
import ShopApi from 'shop_api'
let defaultClient = ShopApi.ApiClient.instance;

// Configure HTTP basic authorization: customers_auth
let customers_auth = defaultClient.authentications['customers_auth'];
customers_auth.username = 'YOUR USERNAME'
customers_auth.password = 'YOUR PASSWORD'

// Configure OAuth2 access token for authorization: oauth2_application
let oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN'

let apiInstance = new ShopApi.OrdersApi();

let orderNo = "orderNo_example"; // String | the order number

apiInstance.getOrdersByID(orderNo).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderNo** | **String**| the order number | 

### Return type

[**OrderModel**](OrderModel.md)

### Authorization

[customers_auth](../README.md#customers_auth), [oauth2_application](../README.md#oauth2_application)

### HTTP request headers

 - **Content-Type**: application/json, text/xml, application/xml
 - **Accept**: application/json, text/xml, application/xml

<a name="getOrdersByIDNotes"></a>
# **getOrdersByIDNotes**
> NotesResultModel getOrdersByIDNotes(orderNo)



Retrieves notes for an order.

### Example
```javascript
import ShopApi from 'shop_api'
let defaultClient = ShopApi.ApiClient.instance;

// Configure HTTP basic authorization: customers_auth
let customers_auth = defaultClient.authentications['customers_auth'];
customers_auth.username = 'YOUR USERNAME'
customers_auth.password = 'YOUR PASSWORD'

// Configure OAuth2 access token for authorization: oauth2_application
let oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN'

let apiInstance = new ShopApi.OrdersApi();

let orderNo = "orderNo_example"; // String | The id of the order from which you want to retrieve notes.

apiInstance.getOrdersByIDNotes(orderNo).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderNo** | **String**| The id of the order from which you want to retrieve notes. | 

### Return type

[**NotesResultModel**](NotesResultModel.md)

### Authorization

[customers_auth](../README.md#customers_auth), [oauth2_application](../README.md#oauth2_application)

### HTTP request headers

 - **Content-Type**: application/json, text/xml, application/xml
 - **Accept**: application/json, text/xml, application/xml

<a name="getOrdersByIDPaymentMethods"></a>
# **getOrdersByIDPaymentMethods**
> PaymentMethodResultModel getOrdersByIDPaymentMethods(orderNo)



Gets the applicable payment methods for an existing order considering the open payment amount only.

### Example
```javascript
import ShopApi from 'shop_api'
let defaultClient = ShopApi.ApiClient.instance;

// Configure HTTP basic authorization: customers_auth
let customers_auth = defaultClient.authentications['customers_auth'];
customers_auth.username = 'YOUR USERNAME'
customers_auth.password = 'YOUR PASSWORD'

// Configure OAuth2 access token for authorization: oauth2_application
let oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN'

let apiInstance = new ShopApi.OrdersApi();

let orderNo = "orderNo_example"; // String | the order number

apiInstance.getOrdersByIDPaymentMethods(orderNo).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderNo** | **String**| the order number | 

### Return type

[**PaymentMethodResultModel**](PaymentMethodResultModel.md)

### Authorization

[customers_auth](../README.md#customers_auth), [oauth2_application](../README.md#oauth2_application)

### HTTP request headers

 - **Content-Type**: application/json, text/xml, application/xml
 - **Accept**: application/json, text/xml, application/xml

<a name="patchOrdersByID"></a>
# **patchOrdersByID**
> OrderModel patchOrdersByID(orderNo, body)



Update an order.   Considered fields for update are status (same status transitions are possible as for dw.order.Order.setStatus(int  status) plus CREATED to FAILED) and custom properties. During the call the correct channel type will be assured to be set for the order  in a successful call. Without agent context the channel type will be storefront otherwise callcenter.

### Example
```javascript
import ShopApi from 'shop_api'
let defaultClient = ShopApi.ApiClient.instance;

// Configure HTTP basic authorization: customers_auth
let customers_auth = defaultClient.authentications['customers_auth'];
customers_auth.username = 'YOUR USERNAME'
customers_auth.password = 'YOUR PASSWORD'

// Configure OAuth2 access token for authorization: oauth2_application
let oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN'

let apiInstance = new ShopApi.OrdersApi();

let orderNo = "orderNo_example"; // String | the order number

let body = new ShopApi.OrderModel() // OrderModel | 

apiInstance.patchOrdersByID(orderNo, body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderNo** | **String**| the order number | 
 **body** | [**OrderModel**](OrderModel.md)|  | 

### Return type

[**OrderModel**](OrderModel.md)

### Authorization

[customers_auth](../README.md#customers_auth), [oauth2_application](../README.md#oauth2_application)

### HTTP request headers

 - **Content-Type**: application/json, text/xml, application/xml
 - **Accept**: application/json, text/xml, application/xml

<a name="patchOrdersByIDPaymentInstrumentsByID"></a>
# **patchOrdersByIDPaymentInstrumentsByID**
> OrderModel patchOrdersByIDPaymentInstrumentsByID(orderNo, paymentInstrumentId, body)



Updates a payment instrument of an order and passes the order and updated payment instrument to the correct  payment authorizeCreditcard or authorize hook.   Details:    The payment instrument is updated with the provided details. The payment method must be applicable for the  order see GET /baskets/{basket_id}/payment_methods, if the payment method is &#39;CREDIT_CARD&#39; a  payment_card must be specified in the request.      Order authorization:      To authorize the order one of two possible customization hooks is called and an  dw.order.OrderPaymentInstrument is passed as an input argument.      Which hook is called?      If the request includes a payment_card or the dw.order.OrderPaymentInstrument  contains a creditCardType the customization hook dw.order.payment.authorizeCreditCard is called.  See dw.order.hooks.PaymentHooks.authorizeCreditCard(order : Order, paymentDetails : OrderPaymentInstrument, cvn : String) : Status.  Otherwise dw.order.payment.authorize is called.  See dw.order.hooks.PaymentHooks.authorize(order : Order, paymentDetails : OrderPaymentInstrument) : Status.      What is the dw.order.OrderPaymentInstrument input argument passed to the hook?      If the request contains a customer_payment_instrument_id the  dw.order.OrderPaymentInstrument is copied from the customer payment instrument (An exception is thrown  if none was found).  Otherwise the data from the request document is passed (payment_card or  payment_bank_account etc. information).      Note: the amount and the security_code (cvn) contained in the  payment_card data will be propagated if available to  dw.order.payment.authorizeCreditCard even if the dw.order.OrderPaymentInstrument is  resolved from a customer payment instrument.      Customization hook dw.ocapi.shop.order.afterPatchPaymentInstrument is called. The default  implementation places the order if the order status is CREATED and the authorization amount equals or exceeds the  order total. Placing the order (equivalent to calling dw.order.OrderMgr.placeOrder(order : Order)  in the scripting API) results in the order being changed to status NEW and prepared for export.  

### Example
```javascript
import ShopApi from 'shop_api'
let defaultClient = ShopApi.ApiClient.instance;

// Configure HTTP basic authorization: customers_auth
let customers_auth = defaultClient.authentications['customers_auth'];
customers_auth.username = 'YOUR USERNAME'
customers_auth.password = 'YOUR PASSWORD'

// Configure OAuth2 access token for authorization: oauth2_application
let oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN'

let apiInstance = new ShopApi.OrdersApi();

let orderNo = "orderNo_example"; // String | the order number

let paymentInstrumentId = "paymentInstrumentId_example"; // String | the id of the payment instrument to be updated

let body = new ShopApi.OrderPaymentInstrumentRequestModel() // OrderPaymentInstrumentRequestModel | 

apiInstance.patchOrdersByIDPaymentInstrumentsByID(orderNo, paymentInstrumentId, body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderNo** | **String**| the order number | 
 **paymentInstrumentId** | **String**| the id of the payment instrument to be updated | 
 **body** | [**OrderPaymentInstrumentRequestModel**](OrderPaymentInstrumentRequestModel.md)|  | 

### Return type

[**OrderModel**](OrderModel.md)

### Authorization

[customers_auth](../README.md#customers_auth), [oauth2_application](../README.md#oauth2_application)

### HTTP request headers

 - **Content-Type**: application/json, text/xml, application/xml
 - **Accept**: application/json, text/xml, application/xml

<a name="postOrders"></a>
# **postOrders**
> OrderModel postOrders(body)



Submits an order based on a prepared basket.  Note: If the basket has been submitted  using Order Center (considered by it&#39;s client id) the channel type will  be set to \&quot;Call Center\&quot;. In case another channel type was set by a script  before submitting the basket, the channel type will be reset to  \&quot;Call Center\&quot; and a warning will be logged.  The only considered value from the request body is basket_id.

### Example
```javascript
import ShopApi from 'shop_api'
let defaultClient = ShopApi.ApiClient.instance;

// Configure HTTP basic authorization: customers_auth
let customers_auth = defaultClient.authentications['customers_auth'];
customers_auth.username = 'YOUR USERNAME'
customers_auth.password = 'YOUR PASSWORD'

// Configure OAuth2 access token for authorization: oauth2_application
let oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN'

let apiInstance = new ShopApi.OrdersApi();

let body = new ShopApi.BasketModel() // BasketModel | 

apiInstance.postOrders(body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**BasketModel**](BasketModel.md)|  | 

### Return type

[**OrderModel**](OrderModel.md)

### Authorization

[customers_auth](../README.md#customers_auth), [oauth2_application](../README.md#oauth2_application)

### HTTP request headers

 - **Content-Type**: application/json, text/xml, application/xml
 - **Accept**: application/json, text/xml, application/xml

<a name="postOrdersByIDNotes"></a>
# **postOrdersByIDNotes**
> OrderModel postOrdersByIDNotes(orderNo, body)



Adds a note to an existing order.

### Example
```javascript
import ShopApi from 'shop_api'
let defaultClient = ShopApi.ApiClient.instance;

// Configure HTTP basic authorization: customers_auth
let customers_auth = defaultClient.authentications['customers_auth'];
customers_auth.username = 'YOUR USERNAME'
customers_auth.password = 'YOUR PASSWORD'

// Configure OAuth2 access token for authorization: oauth2_application
let oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN'

let apiInstance = new ShopApi.OrdersApi();

let orderNo = "orderNo_example"; // String | The id of the order to be modified.

let body = new ShopApi.NoteModel() // NoteModel | 

apiInstance.postOrdersByIDNotes(orderNo, body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderNo** | **String**| The id of the order to be modified. | 
 **body** | [**NoteModel**](NoteModel.md)|  | 

### Return type

[**OrderModel**](OrderModel.md)

### Authorization

[customers_auth](../README.md#customers_auth), [oauth2_application](../README.md#oauth2_application)

### HTTP request headers

 - **Content-Type**: application/json, text/xml, application/xml
 - **Accept**: application/json, text/xml, application/xml

<a name="postOrdersByIDPaymentInstruments"></a>
# **postOrdersByIDPaymentInstruments**
> OrderModel postOrdersByIDPaymentInstruments(orderNo, body)



Adds a payment instrument to an order. It is possible either to supply the full payment information or only a  customer payment instrument id and amount. In case the customer payment instrument id was set all the other  properties (except amount) are ignored and the payment data is resolved from the stored customer payment  information. An attempt is made to authorize the order by passing it to the authorize or authorizeCreditCard  hook.   Details:    The payment instrument is added with the provided details or the details from the customer payment  instrument. The payment method must be applicable for the order see GET  /baskets/{basket_id}/payment_methods, if the payment method is &#39;CREDIT_CARD&#39; a  payment_card must be specified in the request.      Order authorization:      To authorize the order one of two possible customization hooks is called and an  dw.order.OrderPaymentInstrument is passed as an input argument.      Which hook is called?      If the request includes a payment_card or the dw.order.OrderPaymentInstrument  contains a creditCardType the customization hook dw.order.payment.authorizeCreditCard is called.   See dw.order.hooks.PaymentHooks.authorizeCreditCard(order : Order, paymentDetails : OrderPaymentInstrument, cvn : String) : Status.  Otherwise dw.order.payment.authorize is called. See dw.order.hooks.PaymentHooks.authorize(order : Order, paymentDetails : OrderPaymentInstrument) : Status.      What is the dw.order.OrderPaymentInstrument input argument passed to the hook?      If the request contains a customer_payment_instrument_id the  dw.order.OrderPaymentInstrument is copied from the customer payment instrument (An exception is thrown  if none was found).  Otherwise the data from the request document is passed (payment_card or  payment_bank_account etc. information).      Note: the amount and the security_code (cvn) contained in the  payment_card data will be propagated if available to  dw.order.payment.authorizeCreditCard even if the dw.order.OrderPaymentInstrument is  resolved from a customer payment instrument.      Customization hook dw.ocapi.shop.order.afterPostPaymentInstrument is called. The default  implementation places the order if the order status is CREATED and the authorization amount equals or exceeds the  order total. Placing the order (equivalent to calling dw.order.OrderMgr.placeOrder(order : Order) in the  scripting API) results in the order being changed to status NEW and prepared for export.  

### Example
```javascript
import ShopApi from 'shop_api'
let defaultClient = ShopApi.ApiClient.instance;

// Configure HTTP basic authorization: customers_auth
let customers_auth = defaultClient.authentications['customers_auth'];
customers_auth.username = 'YOUR USERNAME'
customers_auth.password = 'YOUR PASSWORD'

// Configure OAuth2 access token for authorization: oauth2_application
let oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN'

let apiInstance = new ShopApi.OrdersApi();

let orderNo = "orderNo_example"; // String | the order number

let body = new ShopApi.OrderPaymentInstrumentRequestModel() // OrderPaymentInstrumentRequestModel | 

apiInstance.postOrdersByIDPaymentInstruments(orderNo, body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderNo** | **String**| the order number | 
 **body** | [**OrderPaymentInstrumentRequestModel**](OrderPaymentInstrumentRequestModel.md)|  | 

### Return type

[**OrderModel**](OrderModel.md)

### Authorization

[customers_auth](../README.md#customers_auth), [oauth2_application](../README.md#oauth2_application)

### HTTP request headers

 - **Content-Type**: application/json, text/xml, application/xml
 - **Accept**: application/json, text/xml, application/xml

