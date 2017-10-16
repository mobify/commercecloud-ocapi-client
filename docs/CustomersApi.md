# ShopApi.CustomersApi

All URIs are relative to *https://mobify-tech-prtnr-na03-dw.demandware.net/s/2017refresh/dw/shop/v17_8*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteCustomersAuth**](CustomersApi.md#deleteCustomersAuth) | **DELETE** /customers/auth | 
[**deleteCustomersByIDAddressesByID**](CustomersApi.md#deleteCustomersByIDAddressesByID) | **DELETE** /customers/{customer_id}/addresses/{address_name} | 
[**deleteCustomersByIDPaymentInstrumentsByID**](CustomersApi.md#deleteCustomersByIDPaymentInstrumentsByID) | **DELETE** /customers/{customer_id}/payment_instruments/{payment_instrument_id} | 
[**deleteCustomersByIDProductListsByID**](CustomersApi.md#deleteCustomersByIDProductListsByID) | **DELETE** /customers/{customer_id}/product_lists/{list_id} | 
[**deleteCustomersByIDProductListsByIDItemsByID**](CustomersApi.md#deleteCustomersByIDProductListsByIDItemsByID) | **DELETE** /customers/{customer_id}/product_lists/{list_id}/items/{item_id} | 
[**getCustomersByID**](CustomersApi.md#getCustomersByID) | **GET** /customers/{customer_id} | 
[**getCustomersByIDAddresses**](CustomersApi.md#getCustomersByIDAddresses) | **GET** /customers/{customer_id}/addresses | 
[**getCustomersByIDAddressesByID**](CustomersApi.md#getCustomersByIDAddressesByID) | **GET** /customers/{customer_id}/addresses/{address_name} | 
[**getCustomersByIDBaskets**](CustomersApi.md#getCustomersByIDBaskets) | **GET** /customers/{customer_id}/baskets | 
[**getCustomersByIDOrders**](CustomersApi.md#getCustomersByIDOrders) | **GET** /customers/{customer_id}/orders | 
[**getCustomersByIDPaymentInstruments**](CustomersApi.md#getCustomersByIDPaymentInstruments) | **GET** /customers/{customer_id}/payment_instruments | 
[**getCustomersByIDPaymentInstrumentsByID**](CustomersApi.md#getCustomersByIDPaymentInstrumentsByID) | **GET** /customers/{customer_id}/payment_instruments/{payment_instrument_id} | 
[**getCustomersByIDProductLists**](CustomersApi.md#getCustomersByIDProductLists) | **GET** /customers/{customer_id}/product_lists | 
[**getCustomersByIDProductListsByID**](CustomersApi.md#getCustomersByIDProductListsByID) | **GET** /customers/{customer_id}/product_lists/{list_id} | 
[**getCustomersByIDProductListsByIDItems**](CustomersApi.md#getCustomersByIDProductListsByIDItems) | **GET** /customers/{customer_id}/product_lists/{list_id}/items | 
[**getCustomersByIDProductListsByIDItemsByID**](CustomersApi.md#getCustomersByIDProductListsByIDItemsByID) | **GET** /customers/{customer_id}/product_lists/{list_id}/items/{item_id} | 
[**patchCustomersByID**](CustomersApi.md#patchCustomersByID) | **PATCH** /customers/{customer_id} | 
[**patchCustomersByIDAddressesByID**](CustomersApi.md#patchCustomersByIDAddressesByID) | **PATCH** /customers/{customer_id}/addresses/{address_name} | 
[**patchCustomersByIDProductListsByID**](CustomersApi.md#patchCustomersByIDProductListsByID) | **PATCH** /customers/{customer_id}/product_lists/{list_id} | 
[**patchCustomersByIDProductListsByIDItemsByID**](CustomersApi.md#patchCustomersByIDProductListsByIDItemsByID) | **PATCH** /customers/{customer_id}/product_lists/{list_id}/items/{item_id} | 
[**postCustomers**](CustomersApi.md#postCustomers) | **POST** /customers | 
[**postCustomersAuth**](CustomersApi.md#postCustomersAuth) | **POST** /customers/auth | 
[**postCustomersByIDAddresses**](CustomersApi.md#postCustomersByIDAddresses) | **POST** /customers/{customer_id}/addresses | 
[**postCustomersByIDAuth**](CustomersApi.md#postCustomersByIDAuth) | **POST** /customers/{customer_id}/auth | 
[**postCustomersByIDPasswordReset**](CustomersApi.md#postCustomersByIDPasswordReset) | **POST** /customers/{customer_id}/password_reset | 
[**postCustomersByIDPaymentInstruments**](CustomersApi.md#postCustomersByIDPaymentInstruments) | **POST** /customers/{customer_id}/payment_instruments | 
[**postCustomersByIDProductLists**](CustomersApi.md#postCustomersByIDProductLists) | **POST** /customers/{customer_id}/product_lists | 
[**postCustomersByIDProductListsByIDItems**](CustomersApi.md#postCustomersByIDProductListsByIDItems) | **POST** /customers/{customer_id}/product_lists/{list_id}/items | 
[**postCustomersPasswordReset**](CustomersApi.md#postCustomersPasswordReset) | **POST** /customers/password_reset | 
[**putCustomersByIDPassword**](CustomersApi.md#putCustomersByIDPassword) | **PUT** /customers/{customer_id}/password | 


<a name="deleteCustomersAuth"></a>
# **deleteCustomersAuth**
> deleteCustomersAuth(opts)



Invalidates the JWT provided in the header.

### Example
```javascript
import ShopApi from 'shop_api'
let defaultClient = ShopApi.ApiClient.instance;

// Configure HTTP basic authorization: customers_auth
let customers_auth = defaultClient.authentications['customers_auth'];
customers_auth.username = 'YOUR USERNAME'
customers_auth.password = 'YOUR PASSWORD'

let apiInstance = new ShopApi.CustomersApi();

let opts = { 
  'authorization': "authorization_example" // String | the JWT token
};
apiInstance.deleteCustomersAuth(opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**| the JWT token | [optional] 

### Return type

null (empty response body)

### Authorization

[customers_auth](../README.md#customers_auth)

### HTTP request headers

 - **Content-Type**: application/json, text/xml, application/xml
 - **Accept**: application/json, text/xml, application/xml

<a name="deleteCustomersByIDAddressesByID"></a>
# **deleteCustomersByIDAddressesByID**
> deleteCustomersByIDAddressesByID(customerId, addressName)



Deletes a customer&#39;s address by address name.

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

let apiInstance = new ShopApi.CustomersApi();

let customerId = "customerId_example"; // String | the id of the customer to delete the address for

let addressName = "addressName_example"; // String | the name of the address to delete

apiInstance.deleteCustomersByIDAddressesByID(customerId, addressName).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customerId** | **String**| the id of the customer to delete the address for | 
 **addressName** | **String**| the name of the address to delete | 

### Return type

null (empty response body)

### Authorization

[customers_auth](../README.md#customers_auth), [oauth2_application](../README.md#oauth2_application)

### HTTP request headers

 - **Content-Type**: application/json, text/xml, application/xml
 - **Accept**: application/json, text/xml, application/xml

<a name="deleteCustomersByIDPaymentInstrumentsByID"></a>
# **deleteCustomersByIDPaymentInstrumentsByID**
> deleteCustomersByIDPaymentInstrumentsByID(customerId, paymentInstrumentId)



Deletes a customer&#39;s payment instrument.

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

let apiInstance = new ShopApi.CustomersApi();

let customerId = "customerId_example"; // String | the id of the customer to delete the payment instrument for

let paymentInstrumentId = "paymentInstrumentId_example"; // String | the id of the payment instrument to be deleted

apiInstance.deleteCustomersByIDPaymentInstrumentsByID(customerId, paymentInstrumentId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customerId** | **String**| the id of the customer to delete the payment instrument for | 
 **paymentInstrumentId** | **String**| the id of the payment instrument to be deleted | 

### Return type

null (empty response body)

### Authorization

[customers_auth](../README.md#customers_auth), [oauth2_application](../README.md#oauth2_application)

### HTTP request headers

 - **Content-Type**: application/json, text/xml, application/xml
 - **Accept**: application/json, text/xml, application/xml

<a name="deleteCustomersByIDProductListsByID"></a>
# **deleteCustomersByIDProductListsByID**
> deleteCustomersByIDProductListsByID(customerId, listId)



Deletes a customer product list.

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

let apiInstance = new ShopApi.CustomersApi();

let customerId = "customerId_example"; // String | The customer id.

let listId = "listId_example"; // String | The product list id.

apiInstance.deleteCustomersByIDProductListsByID(customerId, listId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customerId** | **String**| The customer id. | 
 **listId** | **String**| The product list id. | 

### Return type

null (empty response body)

### Authorization

[customers_auth](../README.md#customers_auth), [oauth2_application](../README.md#oauth2_application)

### HTTP request headers

 - **Content-Type**: application/json, text/xml, application/xml
 - **Accept**: application/json, text/xml, application/xml

<a name="deleteCustomersByIDProductListsByIDItemsByID"></a>
# **deleteCustomersByIDProductListsByIDItemsByID**
> deleteCustomersByIDProductListsByIDItemsByID(customerId, listId, itemId)



Removes an item from a customer product list.

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

let apiInstance = new ShopApi.CustomersApi();

let customerId = "customerId_example"; // String | The id of the owner of the product list

let listId = "listId_example"; // String | The id of the product list.

let itemId = "itemId_example"; // String | The id of the product list item to delete.

apiInstance.deleteCustomersByIDProductListsByIDItemsByID(customerId, listId, itemId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customerId** | **String**| The id of the owner of the product list | 
 **listId** | **String**| The id of the product list. | 
 **itemId** | **String**| The id of the product list item to delete. | 

### Return type

null (empty response body)

### Authorization

[customers_auth](../README.md#customers_auth), [oauth2_application](../README.md#oauth2_application)

### HTTP request headers

 - **Content-Type**: application/json, text/xml, application/xml
 - **Accept**: application/json, text/xml, application/xml

<a name="getCustomersByID"></a>
# **getCustomersByID**
> CustomerModel getCustomersByID(customerId, opts)



Gets a customer.

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

let apiInstance = new ShopApi.CustomersApi();

let customerId = "customerId_example"; // String | The customer id

let opts = { 
  'expand': ["expand_example"] // [String] | 
};
apiInstance.getCustomersByID(customerId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customerId** | **String**| The customer id | 
 **expand** | [**[String]**](String.md)|  | [optional] 

### Return type

[**CustomerModel**](CustomerModel.md)

### Authorization

[customers_auth](../README.md#customers_auth), [oauth2_application](../README.md#oauth2_application)

### HTTP request headers

 - **Content-Type**: application/json, text/xml, application/xml
 - **Accept**: application/json, text/xml, application/xml

<a name="getCustomersByIDAddresses"></a>
# **getCustomersByIDAddresses**
> CustomerAddressResultModel getCustomersByIDAddresses(customerId, opts)



Returns a sorted pageable list of all customer addresses in the address book. The default page size is 10  customer addresses. The addresses are sorted so that the preferred address is always sorted first. The remaining  addresses are sorted alphabetically by ID.    When the customer cannot be found CustomerNotFoundException  is thrown in a case of an agent but an empty result list is returned in a case of JWT.

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

let apiInstance = new ShopApi.CustomersApi();

let customerId = "customerId_example"; // String | The customer uuid

let opts = { 
  'start': 56, // Number | 
  'count': 56 // Number | 
};
apiInstance.getCustomersByIDAddresses(customerId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customerId** | **String**| The customer uuid | 
 **start** | **Number**|  | [optional] 
 **count** | **Number**|  | [optional] 

### Return type

[**CustomerAddressResultModel**](CustomerAddressResultModel.md)

### Authorization

[customers_auth](../README.md#customers_auth), [oauth2_application](../README.md#oauth2_application)

### HTTP request headers

 - **Content-Type**: application/json, text/xml, application/xml
 - **Accept**: application/json, text/xml, application/xml

<a name="getCustomersByIDAddressesByID"></a>
# **getCustomersByIDAddressesByID**
> CustomerAddressModel getCustomersByIDAddressesByID(customerId, addressName)



Retrieves a customer&#39;s address by address name.

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

let apiInstance = new ShopApi.CustomersApi();

let customerId = "customerId_example"; // String | the id of the customer to retrieve the address for

let addressName = "addressName_example"; // String | the name of the address to retrieve

apiInstance.getCustomersByIDAddressesByID(customerId, addressName).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customerId** | **String**| the id of the customer to retrieve the address for | 
 **addressName** | **String**| the name of the address to retrieve | 

### Return type

[**CustomerAddressModel**](CustomerAddressModel.md)

### Authorization

[customers_auth](../README.md#customers_auth), [oauth2_application](../README.md#oauth2_application)

### HTTP request headers

 - **Content-Type**: application/json, text/xml, application/xml
 - **Accept**: application/json, text/xml, application/xml

<a name="getCustomersByIDBaskets"></a>
# **getCustomersByIDBaskets**
> BasketsResultModel getCustomersByIDBaskets(customerId)



Gets the baskets of a customer.

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

let apiInstance = new ShopApi.CustomersApi();

let customerId = "customerId_example"; // String | the id of the customer to retrieve the baskets for

apiInstance.getCustomersByIDBaskets(customerId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customerId** | **String**| the id of the customer to retrieve the baskets for | 

### Return type

[**BasketsResultModel**](BasketsResultModel.md)

### Authorization

[customers_auth](../README.md#customers_auth), [oauth2_application](../README.md#oauth2_application)

### HTTP request headers

 - **Content-Type**: application/json, text/xml, application/xml
 - **Accept**: application/json, text/xml, application/xml

<a name="getCustomersByIDOrders"></a>
# **getCustomersByIDOrders**
> CustomerOrderResultModel getCustomersByIDOrders(customerId, opts)



Returns a pageable list of all customer&#39;s orders. The default page size is 10.

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

let apiInstance = new ShopApi.CustomersApi();

let customerId = "customerId_example"; // String | the customer uuid

let opts = { 
  'start': 56, // Number | 
  'count': 56, // Number | 
  'crossSites': true, // Boolean | 
  'from': "from_example", // String | 
  'until': "until_example", // String | 
  'status': "status_example" // String | 
};
apiInstance.getCustomersByIDOrders(customerId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customerId** | **String**| the customer uuid | 
 **start** | **Number**|  | [optional] 
 **count** | **Number**|  | [optional] 
 **crossSites** | **Boolean**|  | [optional] 
 **from** | **String**|  | [optional] 
 **until** | **String**|  | [optional] 
 **status** | **String**|  | [optional] 

### Return type

[**CustomerOrderResultModel**](CustomerOrderResultModel.md)

### Authorization

[customers_auth](../README.md#customers_auth), [oauth2_application](../README.md#oauth2_application)

### HTTP request headers

 - **Content-Type**: application/json, text/xml, application/xml
 - **Accept**: application/json, text/xml, application/xml

<a name="getCustomersByIDPaymentInstruments"></a>
# **getCustomersByIDPaymentInstruments**
> CustomerPaymentInstrumentResultModel getCustomersByIDPaymentInstruments(customerId, opts)



Gets customer payment instruments for an customer.  Can be limited to a specific payment  method by providing query parameter payment_method_id.    When the customer cannot be found CustomerNotFoundException  is thrown in a case of an agent but an empty result list is returned in a case of JWT.

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

let apiInstance = new ShopApi.CustomersApi();

let customerId = "customerId_example"; // String | the id of the customer to retrieve the payment instruments for

let opts = { 
  'paymentMethodId': "paymentMethodId_example" // String | 
};
apiInstance.getCustomersByIDPaymentInstruments(customerId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customerId** | **String**| the id of the customer to retrieve the payment instruments for | 
 **paymentMethodId** | **String**|  | [optional] 

### Return type

[**CustomerPaymentInstrumentResultModel**](CustomerPaymentInstrumentResultModel.md)

### Authorization

[customers_auth](../README.md#customers_auth), [oauth2_application](../README.md#oauth2_application)

### HTTP request headers

 - **Content-Type**: application/json, text/xml, application/xml
 - **Accept**: application/json, text/xml, application/xml

<a name="getCustomersByIDPaymentInstrumentsByID"></a>
# **getCustomersByIDPaymentInstrumentsByID**
> CustomerPaymentInstrumentModel getCustomersByIDPaymentInstrumentsByID(customerId, paymentInstrumentId)



Retrieves a customer&#39;s payment instrument by its id.

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

let apiInstance = new ShopApi.CustomersApi();

let customerId = "customerId_example"; // String | the id of the customer to retrieve the payment instrument for

let paymentInstrumentId = "paymentInstrumentId_example"; // String | the id of the payment instrument to be retrievedCustomer

apiInstance.getCustomersByIDPaymentInstrumentsByID(customerId, paymentInstrumentId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customerId** | **String**| the id of the customer to retrieve the payment instrument for | 
 **paymentInstrumentId** | **String**| the id of the payment instrument to be retrievedCustomer | 

### Return type

[**CustomerPaymentInstrumentModel**](CustomerPaymentInstrumentModel.md)

### Authorization

[customers_auth](../README.md#customers_auth), [oauth2_application](../README.md#oauth2_application)

### HTTP request headers

 - **Content-Type**: application/json, text/xml, application/xml
 - **Accept**: application/json, text/xml, application/xml

<a name="getCustomersByIDProductLists"></a>
# **getCustomersByIDProductLists**
> CustomerProductListResultModel getCustomersByIDProductLists(customerId, opts)



Returns all customer product lists.

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

let apiInstance = new ShopApi.CustomersApi();

let customerId = "customerId_example"; // String | The customer id.

let opts = { 
  'expand': ["expand_example"] // [String] | 
};
apiInstance.getCustomersByIDProductLists(customerId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customerId** | **String**| The customer id. | 
 **expand** | [**[String]**](String.md)|  | [optional] 

### Return type

[**CustomerProductListResultModel**](CustomerProductListResultModel.md)

### Authorization

[customers_auth](../README.md#customers_auth), [oauth2_application](../README.md#oauth2_application)

### HTTP request headers

 - **Content-Type**: application/json, text/xml, application/xml
 - **Accept**: application/json, text/xml, application/xml

<a name="getCustomersByIDProductListsByID"></a>
# **getCustomersByIDProductListsByID**
> CustomerProductListModel getCustomersByIDProductListsByID(customerId, listId, opts)



Returns a customer product list of the given customer.

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

let apiInstance = new ShopApi.CustomersApi();

let customerId = "customerId_example"; // String | The customer id.

let listId = "listId_example"; // String | The product list id.

let opts = { 
  'expand': ["expand_example"] // [String] | 
};
apiInstance.getCustomersByIDProductListsByID(customerId, listId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customerId** | **String**| The customer id. | 
 **listId** | **String**| The product list id. | 
 **expand** | [**[String]**](String.md)|  | [optional] 

### Return type

[**CustomerProductListModel**](CustomerProductListModel.md)

### Authorization

[customers_auth](../README.md#customers_auth), [oauth2_application](../README.md#oauth2_application)

### HTTP request headers

 - **Content-Type**: application/json, text/xml, application/xml
 - **Accept**: application/json, text/xml, application/xml

<a name="getCustomersByIDProductListsByIDItems"></a>
# **getCustomersByIDProductListsByIDItems**
> CustomerProductListItemResultModel getCustomersByIDProductListsByIDItems(customerId, listId, opts)



Returns a pageable list of all items of a customer&#39;s product list. The default page size is 10.

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

let apiInstance = new ShopApi.CustomersApi();

let customerId = "customerId_example"; // String | The id of the customer to retrieve the product list items for.

let listId = "listId_example"; // String | The id of the product list.

let opts = { 
  'expand': ["expand_example"], // [String] | 
  'start': 56, // Number | 
  'count': 56 // Number | 
};
apiInstance.getCustomersByIDProductListsByIDItems(customerId, listId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customerId** | **String**| The id of the customer to retrieve the product list items for. | 
 **listId** | **String**| The id of the product list. | 
 **expand** | [**[String]**](String.md)|  | [optional] 
 **start** | **Number**|  | [optional] 
 **count** | **Number**|  | [optional] 

### Return type

[**CustomerProductListItemResultModel**](CustomerProductListItemResultModel.md)

### Authorization

[customers_auth](../README.md#customers_auth), [oauth2_application](../README.md#oauth2_application)

### HTTP request headers

 - **Content-Type**: application/json, text/xml, application/xml
 - **Accept**: application/json, text/xml, application/xml

<a name="getCustomersByIDProductListsByIDItemsByID"></a>
# **getCustomersByIDProductListsByIDItemsByID**
> CustomerProductListItemModel getCustomersByIDProductListsByIDItemsByID(customerId, listId, itemId, opts)



Returns an item of a customer product list.

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

let apiInstance = new ShopApi.CustomersApi();

let customerId = "customerId_example"; // String | The id of the customer to retrieve the product list items for.

let listId = "listId_example"; // String | The id of the product list.

let itemId = "itemId_example"; // String | The id of the product list item to retrieve.

let opts = { 
  'expand': ["expand_example"] // [String] | 
};
apiInstance.getCustomersByIDProductListsByIDItemsByID(customerId, listId, itemId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customerId** | **String**| The id of the customer to retrieve the product list items for. | 
 **listId** | **String**| The id of the product list. | 
 **itemId** | **String**| The id of the product list item to retrieve. | 
 **expand** | [**[String]**](String.md)|  | [optional] 

### Return type

[**CustomerProductListItemModel**](CustomerProductListItemModel.md)

### Authorization

[customers_auth](../README.md#customers_auth), [oauth2_application](../README.md#oauth2_application)

### HTTP request headers

 - **Content-Type**: application/json, text/xml, application/xml
 - **Accept**: application/json, text/xml, application/xml

<a name="patchCustomersByID"></a>
# **patchCustomersByID**
> CustomerModel patchCustomersByID(customerId, body)



Updates a customer.

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

let apiInstance = new ShopApi.CustomersApi();

let customerId = "customerId_example"; // String | the customer id

let body = new ShopApi.CustomerModel() // CustomerModel | 

apiInstance.patchCustomersByID(customerId, body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customerId** | **String**| the customer id | 
 **body** | [**CustomerModel**](CustomerModel.md)|  | 

### Return type

[**CustomerModel**](CustomerModel.md)

### Authorization

[customers_auth](../README.md#customers_auth), [oauth2_application](../README.md#oauth2_application)

### HTTP request headers

 - **Content-Type**: application/json, text/xml, application/xml
 - **Accept**: application/json, text/xml, application/xml

<a name="patchCustomersByIDAddressesByID"></a>
# **patchCustomersByIDAddressesByID**
> CustomerAddressModel patchCustomersByIDAddressesByID(customerId, addressName, body)



Updates a customer&#39;s address by address name.

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

let apiInstance = new ShopApi.CustomersApi();

let customerId = "customerId_example"; // String | the id of the customer to update the address for

let addressName = "addressName_example"; // String | the name of the address to update

let body = new ShopApi.CustomerAddressModel() // CustomerAddressModel | 

apiInstance.patchCustomersByIDAddressesByID(customerId, addressName, body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customerId** | **String**| the id of the customer to update the address for | 
 **addressName** | **String**| the name of the address to update | 
 **body** | [**CustomerAddressModel**](CustomerAddressModel.md)|  | 

### Return type

[**CustomerAddressModel**](CustomerAddressModel.md)

### Authorization

[customers_auth](../README.md#customers_auth), [oauth2_application](../README.md#oauth2_application)

### HTTP request headers

 - **Content-Type**: application/json, text/xml, application/xml
 - **Accept**: application/json, text/xml, application/xml

<a name="patchCustomersByIDProductListsByID"></a>
# **patchCustomersByIDProductListsByID**
> CustomerProductListModel patchCustomersByIDProductListsByID(body, customerId, listId)



Changes a product list. Changeable properties are the name, description and if the list is public.

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

let apiInstance = new ShopApi.CustomersApi();

let body = new ShopApi.CustomerProductListModel() // CustomerProductListModel | 

let customerId = "customerId_example"; // String | The customer id.

let listId = "listId_example"; // String | The product list id.

apiInstance.patchCustomersByIDProductListsByID(body, customerId, listId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**CustomerProductListModel**](CustomerProductListModel.md)|  | 
 **customerId** | **String**| The customer id. | 
 **listId** | **String**| The product list id. | 

### Return type

[**CustomerProductListModel**](CustomerProductListModel.md)

### Authorization

[customers_auth](../README.md#customers_auth), [oauth2_application](../README.md#oauth2_application)

### HTTP request headers

 - **Content-Type**: application/json, text/xml, application/xml
 - **Accept**: application/json, text/xml, application/xml

<a name="patchCustomersByIDProductListsByIDItemsByID"></a>
# **patchCustomersByIDProductListsByIDItemsByID**
> CustomerProductListItemModel patchCustomersByIDProductListsByIDItemsByID(customerId, listId, itemId, body)



Updates an item of a customer&#39;s product list.  Considered values from the request body are:    priority: This is the priority of the customer&#39;s product list item.  public: This is the flag whether the customer&#39;s product list item is public.  quantity: used for product item type only. This is the quantity of  the customer&#39;s product list item.  custom properties in the form c_&lt;CUSTOM_NAME&gt;: the custom property  must correspond to a custom attribute (&lt;CUSTOM_NAME&gt;) defined for ProductListItem.  The value of this property must be valid for the type of custom attribute defined for ProductListItem.  

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

let apiInstance = new ShopApi.CustomersApi();

let customerId = "customerId_example"; // String | The id of the owner of the product list.

let listId = "listId_example"; // String | The id of the product list.

let itemId = "itemId_example"; // String | The id of the product list item to update.

let body = new ShopApi.CustomerProductListItemModel() // CustomerProductListItemModel | 

apiInstance.patchCustomersByIDProductListsByIDItemsByID(customerId, listId, itemId, body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customerId** | **String**| The id of the owner of the product list. | 
 **listId** | **String**| The id of the product list. | 
 **itemId** | **String**| The id of the product list item to update. | 
 **body** | [**CustomerProductListItemModel**](CustomerProductListItemModel.md)|  | 

### Return type

[**CustomerProductListItemModel**](CustomerProductListItemModel.md)

### Authorization

[customers_auth](../README.md#customers_auth), [oauth2_application](../README.md#oauth2_application)

### HTTP request headers

 - **Content-Type**: application/json, text/xml, application/xml
 - **Accept**: application/json, text/xml, application/xml

<a name="postCustomers"></a>
# **postCustomers**
> CustomerModel postCustomers(body)



Registers a customer.  The mandatory data are the credentials and profile last name and email.  When using OAuth the password in the request must not be set, otherwise an InvalidPasswordException will be thrown.  When using JWT the password is required.

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

let apiInstance = new ShopApi.CustomersApi();

let body = new ShopApi.CustomerRegistrationModel() // CustomerRegistrationModel | 

apiInstance.postCustomers(body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**CustomerRegistrationModel**](CustomerRegistrationModel.md)|  | 

### Return type

[**CustomerModel**](CustomerModel.md)

### Authorization

[customers_auth](../README.md#customers_auth), [oauth2_application](../README.md#oauth2_application)

### HTTP request headers

 - **Content-Type**: application/json, text/xml, application/xml
 - **Accept**: application/json, text/xml, application/xml

<a name="postCustomersAuth"></a>
# **postCustomersAuth**
> CustomerModel postCustomersAuth(body, opts)



Obtains a new JWT (JSON Web Token) for a guest or registered  customer. Tokens are returned as a HTTP Authorization:Bearer response  header entry. These kinds of request are supported, as specified by the  type:    Type guest - creates a new guest (non-authenticated) customer  and returns a token for the customer.  Type credentials - authenticates credentials passed in the  HTTP Authorization:Basic request header, returning a token for a  successfully authenticated customer otherwise results in an  AuthenticationFailedException.  Type session - authenticates the customer (anonymous or registered)  on base of dwsid and dwsecuretoken cookies. It returns a token for a  successfully authenticated customer, otherwise results in an  AuthenticationFailedException.  Type refresh - examines the token passed in the HTTP  Authorization:Bearer request header and when valid returns a new token  with an updated expiry time.     For a request of type credentials:    Updates profile attributes for the customer (for example,  \&quot;last-visited\&quot;).  Handles the maximum number of failed login attempts.    For a request of type session:    Does not touch profile attributes for the registered customer (for example,  \&quot;last-visited\&quot;), since this is not a real login.  Returns different tokens for multiple requests with the same session id. Means, there should be  only one call per session.      About JWT The token contains 3 sections:    the header section (specifies token type and algorithm used)  the payload section (contains customer information, client id,  issue and expiration time)  finally the signature section records the token signature.    A token is created and returned to the client whenever a registered  customer logs in (type \&quot;credentials\&quot;) or a guest customer requests it (type  \&quot;guest\&quot;). The token is returned in the response header as   Authorization: Bearer --token--    The client has to include the token in the request header as   Authorization: Bearer --token--   in any follow up request. The server declines any follow up requests  without a token or which cannot be verified based on the token signature  or expiration time. A token nearing its expiration time should be  exchanged for a new one (type \&quot;refresh\&quot;).    See \&quot;API Usage &gt; JWT\&quot; for more details on using JWT as an authentication  mechanism.

### Example
```javascript
import ShopApi from 'shop_api'
let defaultClient = ShopApi.ApiClient.instance;

// Configure API key authorization: client_id
let client_id = defaultClient.authentications['client_id'];
client_id.apiKey = 'YOUR API KEY'
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//client_id.apiKeyPrefix = 'Token'

let apiInstance = new ShopApi.CustomersApi();

let body = new ShopApi.AuthRequestModel() // AuthRequestModel | 

let opts = { 
  'authorization': "authorization_example" // String |              Authorization:Basic for type credentials             Authorization:Bearer for type refresh             
};
apiInstance.postCustomersAuth(body, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**AuthRequestModel**](AuthRequestModel.md)|  | 
 **authorization** | **String**|              Authorization:Basic for type credentials             Authorization:Bearer for type refresh              | [optional] 

### Return type

[**CustomerModel**](CustomerModel.md)

### Authorization

[client_id](../README.md#client_id)

### HTTP request headers

 - **Content-Type**: application/json, text/xml, application/xml
 - **Accept**: application/json, text/xml, application/xml

<a name="postCustomersByIDAddresses"></a>
# **postCustomersByIDAddresses**
> CustomerAddressModel postCustomersByIDAddresses(customerId, body)



Creates a new address with the given name for the given customer.

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

let apiInstance = new ShopApi.CustomersApi();

let customerId = "customerId_example"; // String | the id of the customer to create the address for

let body = new ShopApi.CustomerAddressModel() // CustomerAddressModel | 

apiInstance.postCustomersByIDAddresses(customerId, body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customerId** | **String**| the id of the customer to create the address for | 
 **body** | [**CustomerAddressModel**](CustomerAddressModel.md)|  | 

### Return type

[**CustomerAddressModel**](CustomerAddressModel.md)

### Authorization

[customers_auth](../README.md#customers_auth), [oauth2_application](../README.md#oauth2_application)

### HTTP request headers

 - **Content-Type**: application/json, text/xml, application/xml
 - **Accept**: application/json, text/xml, application/xml

<a name="postCustomersByIDAuth"></a>
# **postCustomersByIDAuth**
> CustomerModel postCustomersByIDAuth(customerId)



  Obtains a new agent on behalf token for a registered customer. Token is returned as a HTTP Authorization:Bearer  response header entry.      A token is created and returned to the client whenever an agent with Create_Order_On_Behalf_Of  permission calls the resource for a registered customer.      The token is returned in the response header as Authorization: Bearer --token--.      The client has to include the token in the request header as Authorization: Bearer --token--    in any follow up request, the agent will do on behalf of the customer.    About the order on behalf token      The token contains 3 sections:      the header section (specifies token type and algorithm used)  the payload section (contains customer information, client id, issue and expiration time)  finally the signature section records the token signature.      A token nearing its expiration time should be exchanged for a new one by calling this resource once more.  

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

let apiInstance = new ShopApi.CustomersApi();

let customerId = "customerId_example"; // String | specifies the customer to act on behalf of

apiInstance.postCustomersByIDAuth(customerId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customerId** | **String**| specifies the customer to act on behalf of | 

### Return type

[**CustomerModel**](CustomerModel.md)

### Authorization

[customers_auth](../README.md#customers_auth), [oauth2_application](../README.md#oauth2_application)

### HTTP request headers

 - **Content-Type**: application/json, text/xml, application/xml
 - **Accept**: application/json, text/xml, application/xml

<a name="postCustomersByIDPasswordReset"></a>
# **postCustomersByIDPasswordReset**
> postCustomersByIDPasswordReset(customerId)



Starts a password reset process. A password reset token is generated and passed together with the customer  resolved by the id provided as path parameter to a afterPOST hook. The hook  dw.ocapi.shop.customer.password_reset.afterPOST can utilize the provided reset token, for example to send a reset email.

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

let apiInstance = new ShopApi.CustomersApi();

let customerId = "customerId_example"; // String | the id of the customer

apiInstance.postCustomersByIDPasswordReset(customerId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customerId** | **String**| the id of the customer | 

### Return type

null (empty response body)

### Authorization

[customers_auth](../README.md#customers_auth), [oauth2_application](../README.md#oauth2_application)

### HTTP request headers

 - **Content-Type**: application/json, text/xml, application/xml
 - **Accept**: application/json, text/xml, application/xml

<a name="postCustomersByIDPaymentInstruments"></a>
# **postCustomersByIDPaymentInstruments**
> CustomerPaymentInstrumentModel postCustomersByIDPaymentInstruments(customerId, body)



Adds a payment instrument to a customer information.

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

let apiInstance = new ShopApi.CustomersApi();

let customerId = "customerId_example"; // String | the id of the customer

let body = new ShopApi.CustomerPaymentInstrumentRequestModel() // CustomerPaymentInstrumentRequestModel | 

apiInstance.postCustomersByIDPaymentInstruments(customerId, body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customerId** | **String**| the id of the customer | 
 **body** | [**CustomerPaymentInstrumentRequestModel**](CustomerPaymentInstrumentRequestModel.md)|  | 

### Return type

[**CustomerPaymentInstrumentModel**](CustomerPaymentInstrumentModel.md)

### Authorization

[customers_auth](../README.md#customers_auth), [oauth2_application](../README.md#oauth2_application)

### HTTP request headers

 - **Content-Type**: application/json, text/xml, application/xml
 - **Accept**: application/json, text/xml, application/xml

<a name="postCustomersByIDProductLists"></a>
# **postCustomersByIDProductLists**
> CustomerProductListModel postCustomersByIDProductLists(body, customerId)



Creates a customer product list.

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

let apiInstance = new ShopApi.CustomersApi();

let body = new ShopApi.CustomerProductListModel() // CustomerProductListModel | 

let customerId = "customerId_example"; // String | The customer id.

apiInstance.postCustomersByIDProductLists(body, customerId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**CustomerProductListModel**](CustomerProductListModel.md)|  | 
 **customerId** | **String**| The customer id. | 

### Return type

[**CustomerProductListModel**](CustomerProductListModel.md)

### Authorization

[customers_auth](../README.md#customers_auth), [oauth2_application](../README.md#oauth2_application)

### HTTP request headers

 - **Content-Type**: application/json, text/xml, application/xml
 - **Accept**: application/json, text/xml, application/xml

<a name="postCustomersByIDProductListsByIDItems"></a>
# **postCustomersByIDProductListsByIDItems**
> CustomerProductListItemModel postCustomersByIDProductListsByIDItems(customerId, listId, body)



Adds an item to the customer&#39;s product list. Considered values from the request body are:    type: a valid type, mandatory. This is the type of the item to be added to the customer&#39;s product  list.  priority: This is the priority of the item to be added to the customer&#39;s product list.  public: This is the flag whether the item to be added to the customer&#39;s product list is public.  product_id: a valid product id, used for product item type only. This is the id (sku)  of the product related to the item to be added to the customer&#39;s product list. It is mandatory for  product item type and it must be a valid product id, otherwise  ProductListProductIdMissingException or ProductListProductNotFoundException  will be thrown.  quantity: used for product item type only. This is the quantity of the item to be  added to the customer&#39;s product list.  custom properties in the form c_&lt;CUSTOM_NAME&gt;: the custom property must correspond to a custom  attribute (&lt;CUSTOM_NAME&gt;) defined for ProductListItem. The value of this property must be valid for the  type of custom attribute defined for ProductListItem.  

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

let apiInstance = new ShopApi.CustomersApi();

let customerId = "customerId_example"; // String | The id of the customer - owner of the product list.

let listId = "listId_example"; // String | The id of the product list

let body = new ShopApi.CustomerProductListItemModel() // CustomerProductListItemModel | 

apiInstance.postCustomersByIDProductListsByIDItems(customerId, listId, body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customerId** | **String**| The id of the customer - owner of the product list. | 
 **listId** | **String**| The id of the product list | 
 **body** | [**CustomerProductListItemModel**](CustomerProductListItemModel.md)|  | 

### Return type

[**CustomerProductListItemModel**](CustomerProductListItemModel.md)

### Authorization

[customers_auth](../README.md#customers_auth), [oauth2_application](../README.md#oauth2_application)

### HTTP request headers

 - **Content-Type**: application/json, text/xml, application/xml
 - **Accept**: application/json, text/xml, application/xml

<a name="postCustomersPasswordReset"></a>
# **postCustomersPasswordReset**
> postCustomersPasswordReset(body)



First the beforePOST hook is called. After that the validation of the   customer information provided in the the password reset document is performed.   Then a password reset token is generated and together with the resolved   customer is passed to a afterPOST hook. The customer resolution is based   on the password reset request type. Both hooks are performed in a single  transaction.  Currently the resolution can be done by email or login. In case of  an email the password reset hook is only executed if one and only one  customer has been identified for that email. In the case that more than  one customers have been identified for the provided email the resource  does nothing.

### Example
```javascript
import ShopApi from 'shop_api'
let defaultClient = ShopApi.ApiClient.instance;

// Configure API key authorization: client_id
let client_id = defaultClient.authentications['client_id'];
client_id.apiKey = 'YOUR API KEY'
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//client_id.apiKeyPrefix = 'Token'

let apiInstance = new ShopApi.CustomersApi();

let body = new ShopApi.PasswordResetModel() // PasswordResetModel | 

apiInstance.postCustomersPasswordReset(body).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**PasswordResetModel**](PasswordResetModel.md)|  | 

### Return type

null (empty response body)

### Authorization

[client_id](../README.md#client_id)

### HTTP request headers

 - **Content-Type**: application/json, text/xml, application/xml
 - **Accept**: application/json, text/xml, application/xml

<a name="putCustomersByIDPassword"></a>
# **putCustomersByIDPassword**
> putCustomersByIDPassword(customerId, body)



Updates the customer&#39;s password.

### Example
```javascript
import ShopApi from 'shop_api'
let defaultClient = ShopApi.ApiClient.instance;

// Configure HTTP basic authorization: customers_auth
let customers_auth = defaultClient.authentications['customers_auth'];
customers_auth.username = 'YOUR USERNAME'
customers_auth.password = 'YOUR PASSWORD'

let apiInstance = new ShopApi.CustomersApi();

let customerId = "customerId_example"; // String | the customer id

let body = new ShopApi.PasswordChangeRequestModel() // PasswordChangeRequestModel | 

apiInstance.putCustomersByIDPassword(customerId, body).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customerId** | **String**| the customer id | 
 **body** | [**PasswordChangeRequestModel**](PasswordChangeRequestModel.md)|  | 

### Return type

null (empty response body)

### Authorization

[customers_auth](../README.md#customers_auth)

### HTTP request headers

 - **Content-Type**: application/json, text/xml, application/xml
 - **Accept**: application/json, text/xml, application/xml

