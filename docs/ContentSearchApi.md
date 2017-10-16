# ShopApi.ContentSearchApi

All URIs are relative to *https://mobify-tech-prtnr-na03-dw.demandware.net/s/2017refresh/dw/shop/v17_8*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getContentSearch**](ContentSearchApi.md#getContentSearch) | **GET** /content_search | 


<a name="getContentSearch"></a>
# **getContentSearch**
> ContentSearchResultModel getContentSearch(opts)



Provides keyword and refinement search functionality for content assets. The search result contains only content  that is online and assigned to a folder.

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

let apiInstance = new ShopApi.ContentSearchApi();

let opts = { 
  'q': "q_example", // String | The query phrase to search for.
  'refine': ["refine_example"], // [String] | Parameter that represents a refinement attribute/value(s) pair. Refinement attribute id and                      value(s) are separated by '='. Multiple values are supported by a sub-set of refinement attributes and                      can be provided by separating them using a pipe (URL                      encoded = \"|\"). Value ranges can be specified like this: refine=foo=(100..500) Multiple refine                      parameters can be provided by adding an underscore in combination with an integer counter right behind                      the parameter name and a counter range 1..9. I.e. refine_1=c_refinementType=type1|type2|type3. The                      following system refinement attribute ids are supported:                                            fdid: Allows to refine per single content folder id. Multiple folder ids are not supported.                      
  'sort': ["sort_example"], // [String] | Parameter that represents a sorting attribute/value(s) pair. Sorting attribute id and value are                      separated by '='. The value describes the sort direction. Possible values are 'asc' and 'desc', for                      ascending or descending sort direction. I.e. sort=c_myAttribute=desc. Precondition: You have to select                      your sorting attributes in Business Manager > YourSite > Search Indexes > Content Index > Sorting                      Attributes.
  'start': 56, // Number | The result set index to return the first instance for. Default value is 0.
  'count': 56, // Number | The maximum number of instances per request. Default value is 25.
  'locale': "locale_example" // String | The locale context.
};
apiInstance.getContentSearch(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **q** | **String**| The query phrase to search for. | [optional] 
 **refine** | [**[String]**](String.md)| Parameter that represents a refinement attribute/value(s) pair. Refinement attribute id and                      value(s) are separated by &#39;&#x3D;&#39;. Multiple values are supported by a sub-set of refinement attributes and                      can be provided by separating them using a pipe (URL                      encoded &#x3D; \&quot;|\&quot;). Value ranges can be specified like this: refine&#x3D;foo&#x3D;(100..500) Multiple refine                      parameters can be provided by adding an underscore in combination with an integer counter right behind                      the parameter name and a counter range 1..9. I.e. refine_1&#x3D;c_refinementType&#x3D;type1|type2|type3. The                      following system refinement attribute ids are supported:                                            fdid: Allows to refine per single content folder id. Multiple folder ids are not supported.                       | [optional] 
 **sort** | [**[String]**](String.md)| Parameter that represents a sorting attribute/value(s) pair. Sorting attribute id and value are                      separated by &#39;&#x3D;&#39;. The value describes the sort direction. Possible values are &#39;asc&#39; and &#39;desc&#39;, for                      ascending or descending sort direction. I.e. sort&#x3D;c_myAttribute&#x3D;desc. Precondition: You have to select                      your sorting attributes in Business Manager &gt; YourSite &gt; Search Indexes &gt; Content Index &gt; Sorting                      Attributes. | [optional] 
 **start** | **Number**| The result set index to return the first instance for. Default value is 0. | [optional] 
 **count** | **Number**| The maximum number of instances per request. Default value is 25. | [optional] 
 **locale** | **String**| The locale context. | [optional] 

### Return type

[**ContentSearchResultModel**](ContentSearchResultModel.md)

### Authorization

[client_id](../README.md#client_id), [customers_auth](../README.md#customers_auth)

### HTTP request headers

 - **Content-Type**: application/json, text/xml, application/xml
 - **Accept**: application/json, text/xml, application/xml

