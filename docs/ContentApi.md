# ShopApi.ContentApi

All URIs are relative to *https://mobify-tech-prtnr-na03-dw.demandware.net/s/2017refresh/dw/shop/v17_8*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getContentByID**](ContentApi.md#getContentByID) | **GET** /content/{id} | 
[**getContentByIDs**](ContentApi.md#getContentByIDs) | **GET** /content/({ids}) | 


<a name="getContentByID"></a>
# **getContentByID**
> ContentModel getContentByID(id, opts)



To access a content asset, you construct a URL using the template shown below. This template requires you to  specify a content asset id. In response, the server returns a corresponding content asset document. Only content  assets, which are marked as online are returned. An assignment to a folder is not necessary.

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

let apiInstance = new ShopApi.ContentApi();

let id = "id_example"; // String | The id of the requested content asset.

let opts = { 
  'locale': "locale_example" // String | 
};
apiInstance.getContentByID(id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The id of the requested content asset. | 
 **locale** | **String**|  | [optional] 

### Return type

[**ContentModel**](ContentModel.md)

### Authorization

[client_id](../README.md#client_id), [customers_auth](../README.md#customers_auth)

### HTTP request headers

 - **Content-Type**: application/json, text/xml, application/xml
 - **Accept**: application/json, text/xml, application/xml

<a name="getContentByIDs"></a>
# **getContentByIDs**
> ContentResultModel getContentByIDs(ids, opts)



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

let apiInstance = new ShopApi.ContentApi();

let ids = ["ids_example"]; // [String] | 

let opts = { 
  'locale': "locale_example" // String | 
};
apiInstance.getContentByIDs(ids, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ids** | [**[String]**](String.md)|  | 
 **locale** | **String**|  | [optional] 

### Return type

[**ContentResultModel**](ContentResultModel.md)

### Authorization

[client_id](../README.md#client_id), [customers_auth](../README.md#customers_auth)

### HTTP request headers

 - **Content-Type**: application/json, text/xml, application/xml
 - **Accept**: application/json, text/xml, application/xml

