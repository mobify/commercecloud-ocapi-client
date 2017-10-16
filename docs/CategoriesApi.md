# ShopApi.CategoriesApi

All URIs are relative to *https://mobify-tech-prtnr-na03-dw.demandware.net/s/2017refresh/dw/shop/v17_8*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getCategoriesByID**](CategoriesApi.md#getCategoriesByID) | **GET** /categories/{id} | 
[**getCategoriesByIDs**](CategoriesApi.md#getCategoriesByIDs) | **GET** /categories/({ids}) | 


<a name="getCategoriesByID"></a>
# **getCategoriesByID**
> CategoryModel getCategoriesByID(id, opts)



When you use the URL template below, the server returns a category identified by its id; by default, the server  also returns the first level of subcategories, but you can specify another level by setting the levels  parameter. The server only returns online categories.

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

let apiInstance = new ShopApi.CategoriesApi();

let id = "id_example"; // String | The id of the requested category.

let opts = { 
  'levels': 56, // Number | 
  'locale': "locale_example" // String | 
};
apiInstance.getCategoriesByID(id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The id of the requested category. | 
 **levels** | **Number**|  | [optional] 
 **locale** | **String**|  | [optional] 

### Return type

[**CategoryModel**](CategoryModel.md)

### Authorization

[client_id](../README.md#client_id), [customers_auth](../README.md#customers_auth)

### HTTP request headers

 - **Content-Type**: application/json, text/xml, application/xml
 - **Accept**: application/json, text/xml, application/xml

<a name="getCategoriesByIDs"></a>
# **getCategoriesByIDs**
> CategoryResultModel getCategoriesByIDs(ids, opts)



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

let apiInstance = new ShopApi.CategoriesApi();

let ids = ["ids_example"]; // [String] | 

let opts = { 
  'levels': 56, // Number | 
  'locale': "locale_example" // String | 
};
apiInstance.getCategoriesByIDs(ids, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ids** | [**[String]**](String.md)|  | 
 **levels** | **Number**|  | [optional] 
 **locale** | **String**|  | [optional] 

### Return type

[**CategoryResultModel**](CategoryResultModel.md)

### Authorization

[client_id](../README.md#client_id), [customers_auth](../README.md#customers_auth)

### HTTP request headers

 - **Content-Type**: application/json, text/xml, application/xml
 - **Accept**: application/json, text/xml, application/xml

