# ShopApi.SearchSuggestionApi

All URIs are relative to *https://mobify-tech-prtnr-na03-dw.demandware.net/s/2017refresh/dw/shop/v17_8*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getSearchSuggestion**](SearchSuggestionApi.md#getSearchSuggestion) | **GET** /search_suggestion | 


<a name="getSearchSuggestion"></a>
# **getSearchSuggestion**
> SuggestionResultModel getSearchSuggestion(q, opts)



Provides keyword search functionality for products, categories, content, brands and custom suggestions.  Returns suggested products, suggested categories, suggested content, suggested brands and custom suggestions  for the given search phrase.

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

let apiInstance = new ShopApi.SearchSuggestionApi();

let q = "q_example"; // String | The query phrase to search for.

let opts = { 
  'count': 56, // Number | The maximum number of suggestions per request. Default value is 5. This affects all types of suggestions (category, product, content, brand, custom suggestions).
  'currency': "currency_example", // String | The currency mnemonic specified for price. This parameter is effective only for product suggestions.
  'locale': "locale_example" // String | 
};
apiInstance.getSearchSuggestion(q, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **q** | **String**| The query phrase to search for. | 
 **count** | **Number**| The maximum number of suggestions per request. Default value is 5. This affects all types of suggestions (category, product, content, brand, custom suggestions). | [optional] 
 **currency** | **String**| The currency mnemonic specified for price. This parameter is effective only for product suggestions. | [optional] 
 **locale** | **String**|  | [optional] 

### Return type

[**SuggestionResultModel**](SuggestionResultModel.md)

### Authorization

[client_id](../README.md#client_id), [customers_auth](../README.md#customers_auth)

### HTTP request headers

 - **Content-Type**: application/json, text/xml, application/xml
 - **Accept**: application/json, text/xml, application/xml

