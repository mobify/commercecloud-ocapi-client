# ShopApi.ProductListsApi

All URIs are relative to *https://mobify-tech-prtnr-na03-dw.demandware.net/s/2017refresh/dw/shop/v17_8*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getProductLists**](ProductListsApi.md#getProductLists) | **GET** /product_lists | 
[**getProductListsByID**](ProductListsApi.md#getProductListsByID) | **GET** /product_lists/{list_id} | 
[**getProductListsByIDItems**](ProductListsApi.md#getProductListsByIDItems) | **GET** /product_lists/{list_id}/items | 
[**getProductListsByIDItemsByID**](ProductListsApi.md#getProductListsByIDItemsByID) | **GET** /product_lists/{list_id}/items/{item_id} | 


<a name="getProductLists"></a>
# **getProductLists**
> PublicProductListResultModel getProductLists(opts)



Retrieves all public product lists as defined by the given search term (email, first name, last name).

### Example
```javascript
import ShopApi from 'shop_api'
let defaultClient = ShopApi.ApiClient.instance;

// Configure API key authorization: client_id
let client_id = defaultClient.authentications['client_id'];
client_id.apiKey = 'YOUR API KEY'
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//client_id.apiKeyPrefix = 'Token'

// Configure HTTP basic authorization: customers_auth
let customers_auth = defaultClient.authentications['customers_auth'];
customers_auth.username = 'YOUR USERNAME'
customers_auth.password = 'YOUR PASSWORD'

let apiInstance = new ShopApi.ProductListsApi();

let opts = { 
  'email': "email_example", // String | The email address of the customer, the product lists belong to.
  'firstname': "firstname_example", // String | The first name of the customer, the product lists belong to.
  'lastname': "lastname_example" // String | The last name of the customer, the product lists belong to.
};
apiInstance.getProductLists(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **email** | **String**| The email address of the customer, the product lists belong to. | [optional] 
 **firstname** | **String**| The first name of the customer, the product lists belong to. | [optional] 
 **lastname** | **String**| The last name of the customer, the product lists belong to. | [optional] 

### Return type

[**PublicProductListResultModel**](PublicProductListResultModel.md)

### Authorization

[client_id](../README.md#client_id), [customers_auth](../README.md#customers_auth)

### HTTP request headers

 - **Content-Type**: application/json, text/xml, application/xml
 - **Accept**: application/json, text/xml, application/xml

<a name="getProductListsByID"></a>
# **getProductListsByID**
> PublicProductListModel getProductListsByID(listId, opts)



Retrieves a public product list by id.

### Example
```javascript
import ShopApi from 'shop_api'
let defaultClient = ShopApi.ApiClient.instance;

// Configure API key authorization: client_id
let client_id = defaultClient.authentications['client_id'];
client_id.apiKey = 'YOUR API KEY'
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//client_id.apiKeyPrefix = 'Token'

// Configure HTTP basic authorization: customers_auth
let customers_auth = defaultClient.authentications['customers_auth'];
customers_auth.username = 'YOUR USERNAME'
customers_auth.password = 'YOUR PASSWORD'

let apiInstance = new ShopApi.ProductListsApi();

let listId = "listId_example"; // String | The id of the list.

let opts = { 
  'expand': ["expand_example"] // [String] | 
};
apiInstance.getProductListsByID(listId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **listId** | **String**| The id of the list. | 
 **expand** | [**[String]**](String.md)|  | [optional] 

### Return type

[**PublicProductListModel**](PublicProductListModel.md)

### Authorization

[client_id](../README.md#client_id), [customers_auth](../README.md#customers_auth)

### HTTP request headers

 - **Content-Type**: application/json, text/xml, application/xml
 - **Accept**: application/json, text/xml, application/xml

<a name="getProductListsByIDItems"></a>
# **getProductListsByIDItems**
> PublicProductListItemResultModel getProductListsByIDItems(listId, opts)



Retrieves the items of a public product list.

### Example
```javascript
import ShopApi from 'shop_api'
let defaultClient = ShopApi.ApiClient.instance;

// Configure API key authorization: client_id
let client_id = defaultClient.authentications['client_id'];
client_id.apiKey = 'YOUR API KEY'
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//client_id.apiKeyPrefix = 'Token'

// Configure HTTP basic authorization: customers_auth
let customers_auth = defaultClient.authentications['customers_auth'];
customers_auth.username = 'YOUR USERNAME'
customers_auth.password = 'YOUR PASSWORD'

let apiInstance = new ShopApi.ProductListsApi();

let listId = "listId_example"; // String | The id of the list.

let opts = { 
  'expand': ["expand_example"] // [String] | 
};
apiInstance.getProductListsByIDItems(listId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **listId** | **String**| The id of the list. | 
 **expand** | [**[String]**](String.md)|  | [optional] 

### Return type

[**PublicProductListItemResultModel**](PublicProductListItemResultModel.md)

### Authorization

[client_id](../README.md#client_id), [customers_auth](../README.md#customers_auth)

### HTTP request headers

 - **Content-Type**: application/json, text/xml, application/xml
 - **Accept**: application/json, text/xml, application/xml

<a name="getProductListsByIDItemsByID"></a>
# **getProductListsByIDItemsByID**
> PublicProductListItemModel getProductListsByIDItemsByID(listId, itemId, opts)



Retrieves an item from a public product list.

### Example
```javascript
import ShopApi from 'shop_api'
let defaultClient = ShopApi.ApiClient.instance;

// Configure API key authorization: client_id
let client_id = defaultClient.authentications['client_id'];
client_id.apiKey = 'YOUR API KEY'
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//client_id.apiKeyPrefix = 'Token'

// Configure HTTP basic authorization: customers_auth
let customers_auth = defaultClient.authentications['customers_auth'];
customers_auth.username = 'YOUR USERNAME'
customers_auth.password = 'YOUR PASSWORD'

let apiInstance = new ShopApi.ProductListsApi();

let listId = "listId_example"; // String | The id of the list.

let itemId = "itemId_example"; // String | The id of the item.

let opts = { 
  'expand': ["expand_example"] // [String] | 
};
apiInstance.getProductListsByIDItemsByID(listId, itemId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **listId** | **String**| The id of the list. | 
 **itemId** | **String**| The id of the item. | 
 **expand** | [**[String]**](String.md)|  | [optional] 

### Return type

[**PublicProductListItemModel**](PublicProductListItemModel.md)

### Authorization

[client_id](../README.md#client_id), [customers_auth](../README.md#customers_auth)

### HTTP request headers

 - **Content-Type**: application/json, text/xml, application/xml
 - **Accept**: application/json, text/xml, application/xml

