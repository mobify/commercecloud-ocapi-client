# ShopApi.PromotionsApi

All URIs are relative to *https://mobify-tech-prtnr-na03-dw.demandware.net/s/2017refresh/dw/shop/v17_8*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getPromotions**](PromotionsApi.md#getPromotions) | **GET** /promotions | 
[**getPromotionsByID**](PromotionsApi.md#getPromotionsByID) | **GET** /promotions/{id} | 
[**getPromotionsByIDs**](PromotionsApi.md#getPromotionsByIDs) | **GET** /promotions/({ids}) | 


<a name="getPromotions"></a>
# **getPromotions**
> PromotionResultModel getPromotions(campaignId, opts)



Handles get promotion by filter criteria Returns an array of enabled promotions matching specified filter  criteria. In the request URL, you must provide a campaign_id parameter, and you can optionally specify a date  range by providing start_date and end_date parameters. Both parameters are required to specify a date range:  omitting one causes the server to return a MissingParameterException fault. Each request returns only enabled  promotions; the server does not consider promotion qualifiers or schedules.

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

let apiInstance = new ShopApi.PromotionsApi();

let campaignId = "campaignId_example"; // String | Find the promotions assigned to this campaign (mandatory)

let opts = { 
  'startDate': "startDate_example", // String | The start date of the promotion in ISO8601 date time format: yyyy-MM-dd'T'HH:mmZ
  'endDate': "endDate_example", // String | The end date of the promotion in ISO8601 date time format: yyyy-MM-dd'T'HH:mmZ
  'currency': "currency_example" // String | The currency mnemonic specified for price
};
apiInstance.getPromotions(campaignId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **campaignId** | **String**| Find the promotions assigned to this campaign (mandatory) | 
 **startDate** | **String**| The start date of the promotion in ISO8601 date time format: yyyy-MM-dd&#39;T&#39;HH:mmZ | [optional] 
 **endDate** | **String**| The end date of the promotion in ISO8601 date time format: yyyy-MM-dd&#39;T&#39;HH:mmZ | [optional] 
 **currency** | **String**| The currency mnemonic specified for price | [optional] 

### Return type

[**PromotionResultModel**](PromotionResultModel.md)

### Authorization

[client_id](../README.md#client_id), [customers_auth](../README.md#customers_auth)

### HTTP request headers

 - **Content-Type**: application/json, text/xml, application/xml
 - **Accept**: application/json, text/xml, application/xml

<a name="getPromotionsByID"></a>
# **getPromotionsByID**
> PromotionModel getPromotionsByID(id, opts)



Returns an enabled promotion using a specified id. Each request returns a response only for an enabled promotion;  the server does not consider promotion qualifiers or schedules.

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

let apiInstance = new ShopApi.PromotionsApi();

let id = "id_example"; // String | The id of the requested promotion.

let opts = { 
  'locale': "locale_example" // String | 
};
apiInstance.getPromotionsByID(id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The id of the requested promotion. | 
 **locale** | **String**|  | [optional] 

### Return type

[**PromotionModel**](PromotionModel.md)

### Authorization

[client_id](../README.md#client_id), [customers_auth](../README.md#customers_auth)

### HTTP request headers

 - **Content-Type**: application/json, text/xml, application/xml
 - **Accept**: application/json, text/xml, application/xml

<a name="getPromotionsByIDs"></a>
# **getPromotionsByIDs**
> PromotionResultModel getPromotionsByIDs(ids, opts)



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

let apiInstance = new ShopApi.PromotionsApi();

let ids = ["ids_example"]; // [String] | 

let opts = { 
  'locale': "locale_example" // String | 
};
apiInstance.getPromotionsByIDs(ids, opts).then((data) => {
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

[**PromotionResultModel**](PromotionResultModel.md)

### Authorization

[client_id](../README.md#client_id), [customers_auth](../README.md#customers_auth)

### HTTP request headers

 - **Content-Type**: application/json, text/xml, application/xml
 - **Accept**: application/json, text/xml, application/xml

