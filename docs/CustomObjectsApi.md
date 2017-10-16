# ShopApi.CustomObjectsApi

All URIs are relative to *https://mobify-tech-prtnr-na03-dw.demandware.net/s/2017refresh/dw/shop/v17_8*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getCustomObjectsByIDByID**](CustomObjectsApi.md#getCustomObjectsByIDByID) | **GET** /custom_objects/{object_type}/{key} | 


<a name="getCustomObjectsByIDByID"></a>
# **getCustomObjectsByIDByID**
> CustomObjectModel getCustomObjectsByIDByID(objectType, key)



Reads a custom object with a given object type ID and a value for the  key attribute of the object which represents its unique identifier.

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

let apiInstance = new ShopApi.CustomObjectsApi();

let objectType = "objectType_example"; // String | the ID of the object type

let key = "key_example"; // String | the key attribute value of the custom object

apiInstance.getCustomObjectsByIDByID(objectType, key).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **objectType** | **String**| the ID of the object type | 
 **key** | **String**| the key attribute value of the custom object | 

### Return type

[**CustomObjectModel**](CustomObjectModel.md)

### Authorization

[client_id](../README.md#client_id), [customers_auth](../README.md#customers_auth)

### HTTP request headers

 - **Content-Type**: application/json, text/xml, application/xml
 - **Accept**: application/json, text/xml, application/xml

