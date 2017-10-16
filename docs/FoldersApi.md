# ShopApi.FoldersApi

All URIs are relative to *https://mobify-tech-prtnr-na03-dw.demandware.net/s/2017refresh/dw/shop/v17_8*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getFoldersByID**](FoldersApi.md#getFoldersByID) | **GET** /folders/{id} | 
[**getFoldersByIDs**](FoldersApi.md#getFoldersByIDs) | **GET** /folders/({ids}) | 


<a name="getFoldersByID"></a>
# **getFoldersByID**
> ContentFolderModel getFoldersByID(id, opts)



To access a content folder, you construct a URL using the template shown below. This template requires you to  specify a content folder id and a subfolder level. In response, the server returns a corresponding content  folder document. Only content folder, which are marked as online are returned.

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

let apiInstance = new ShopApi.FoldersApi();

let id = "id_example"; // String | The id of the requested content folder.

let opts = { 
  'levels': 56, // Number | 
  'locale': "locale_example" // String | 
};
apiInstance.getFoldersByID(id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The id of the requested content folder. | 
 **levels** | **Number**|  | [optional] 
 **locale** | **String**|  | [optional] 

### Return type

[**ContentFolderModel**](ContentFolderModel.md)

### Authorization

[client_id](../README.md#client_id), [customers_auth](../README.md#customers_auth)

### HTTP request headers

 - **Content-Type**: application/json, text/xml, application/xml
 - **Accept**: application/json, text/xml, application/xml

<a name="getFoldersByIDs"></a>
# **getFoldersByIDs**
> ContentFolderResultModel getFoldersByIDs(ids, opts)



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

let apiInstance = new ShopApi.FoldersApi();

let ids = ["ids_example"]; // [String] | 

let opts = { 
  'levels': 56, // Number | 
  'locale': "locale_example" // String | 
};
apiInstance.getFoldersByIDs(ids, opts).then((data) => {
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

[**ContentFolderResultModel**](ContentFolderResultModel.md)

### Authorization

[client_id](../README.md#client_id), [customers_auth](../README.md#customers_auth)

### HTTP request headers

 - **Content-Type**: application/json, text/xml, application/xml
 - **Accept**: application/json, text/xml, application/xml

