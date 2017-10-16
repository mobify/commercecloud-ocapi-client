# ShopApi.ProductsApi

All URIs are relative to *https://mobify-tech-prtnr-na03-dw.demandware.net/s/2017refresh/dw/shop/v17_8*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getProductsByID**](ProductsApi.md#getProductsByID) | **GET** /products/{id} | 
[**getProductsByIDAvailability**](ProductsApi.md#getProductsByIDAvailability) | **GET** /products/{id}/availability | 
[**getProductsByIDBundledProducts**](ProductsApi.md#getProductsByIDBundledProducts) | **GET** /products/{id}/bundled_products | 
[**getProductsByIDImages**](ProductsApi.md#getProductsByIDImages) | **GET** /products/{id}/images | 
[**getProductsByIDLinks**](ProductsApi.md#getProductsByIDLinks) | **GET** /products/{id}/links | 
[**getProductsByIDOptions**](ProductsApi.md#getProductsByIDOptions) | **GET** /products/{id}/options | 
[**getProductsByIDPrices**](ProductsApi.md#getProductsByIDPrices) | **GET** /products/{id}/prices | 
[**getProductsByIDPromotions**](ProductsApi.md#getProductsByIDPromotions) | **GET** /products/{id}/promotions | 
[**getProductsByIDShippingMethods**](ProductsApi.md#getProductsByIDShippingMethods) | **GET** /products/{id}/shipping_methods | 
[**getProductsByIDVariations**](ProductsApi.md#getProductsByIDVariations) | **GET** /products/{id}/variations | 
[**getProductsByIDs**](ProductsApi.md#getProductsByIDs) | **GET** /products/({ids}) | 


<a name="getProductsByID"></a>
# **getProductsByID**
> ProductModel getProductsByID(id, opts)



To access single products resource, you construct a URL using the template shown below. This template requires  you to specify an Id (typically a SKU) for a product. In response, the server returns a corresponding Product  document, provided the product is online and assigned to site catalog. The document contains variation attributes  (including values) and the variant matrix; this data is provided for both the master and for the variant.

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

let apiInstance = new ShopApi.ProductsApi();

let id = "id_example"; // String | The id of the requested product.

let opts = { 
  'expand': ["expand_example"], // [String] | 
  'inventoryIds': ["inventoryIds_example"], // [String] | 
  'currency': "currency_example", // String | 
  'locale': "locale_example", // String | 
  'allImages': true // Boolean | 
};
apiInstance.getProductsByID(id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The id of the requested product. | 
 **expand** | [**[String]**](String.md)|  | [optional] 
 **inventoryIds** | [**[String]**](String.md)|  | [optional] 
 **currency** | **String**|  | [optional] 
 **locale** | **String**|  | [optional] 
 **allImages** | **Boolean**|  | [optional] 

### Return type

[**ProductModel**](ProductModel.md)

### Authorization

[client_id](../README.md#client_id), [customers_auth](../README.md#customers_auth)

### HTTP request headers

 - **Content-Type**: application/json, text/xml, application/xml
 - **Accept**: application/json, text/xml, application/xml

<a name="getProductsByIDAvailability"></a>
# **getProductsByIDAvailability**
> ProductModel getProductsByIDAvailability(id, opts)



Access product availability information of products that are online and assigned to site catalog.

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

let apiInstance = new ShopApi.ProductsApi();

let id = "id_example"; // String | The requested product id.

let opts = { 
  'inventoryIds': ["inventoryIds_example"], // [String] | 
  'locale': "locale_example" // String | 
};
apiInstance.getProductsByIDAvailability(id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The requested product id. | 
 **inventoryIds** | [**[String]**](String.md)|  | [optional] 
 **locale** | **String**|  | [optional] 

### Return type

[**ProductModel**](ProductModel.md)

### Authorization

[client_id](../README.md#client_id), [customers_auth](../README.md#customers_auth)

### HTTP request headers

 - **Content-Type**: application/json, text/xml, application/xml
 - **Accept**: application/json, text/xml, application/xml

<a name="getProductsByIDBundledProducts"></a>
# **getProductsByIDBundledProducts**
> ProductModel getProductsByIDBundledProducts(id, opts)



Access bundled product information of products that are online and assigned to site catalog.

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

let apiInstance = new ShopApi.ProductsApi();

let id = "id_example"; // String | The requested product id.

let opts = { 
  'locale': "locale_example" // String | 
};
apiInstance.getProductsByIDBundledProducts(id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The requested product id. | 
 **locale** | **String**|  | [optional] 

### Return type

[**ProductModel**](ProductModel.md)

### Authorization

[client_id](../README.md#client_id), [customers_auth](../README.md#customers_auth)

### HTTP request headers

 - **Content-Type**: application/json, text/xml, application/xml
 - **Accept**: application/json, text/xml, application/xml

<a name="getProductsByIDImages"></a>
# **getProductsByIDImages**
> ProductModel getProductsByIDImages(id, opts)



Access product image information of products that are online and assigned to site catalog. Filter the result by  view type and variation values.

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

let apiInstance = new ShopApi.ProductsApi();

let id = "id_example"; // String | The requested product id.

let opts = { 
  'viewType': ["viewType_example"], // [String] | 
  'allImages': true, // Boolean | 
  'variationAttribute': "variationAttribute_example", // String | 
  'locale': "locale_example" // String | 
};
apiInstance.getProductsByIDImages(id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The requested product id. | 
 **viewType** | [**[String]**](String.md)|  | [optional] 
 **allImages** | **Boolean**|  | [optional] 
 **variationAttribute** | **String**|  | [optional] 
 **locale** | **String**|  | [optional] 

### Return type

[**ProductModel**](ProductModel.md)

### Authorization

[client_id](../README.md#client_id), [customers_auth](../README.md#customers_auth)

### HTTP request headers

 - **Content-Type**: application/json, text/xml, application/xml
 - **Accept**: application/json, text/xml, application/xml

<a name="getProductsByIDLinks"></a>
# **getProductsByIDLinks**
> ProductModel getProductsByIDLinks(id, opts)



Access product link information of products that are online and assigned to site catalog. Filter the result by  link type and link direction.

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

let apiInstance = new ShopApi.ProductsApi();

let id = "id_example"; // String | The requested product id.

let opts = { 
  'type': "type_example", // String | 
  'direction': "direction_example", // String | 
  'locale': "locale_example" // String | 
};
apiInstance.getProductsByIDLinks(id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The requested product id. | 
 **type** | **String**|  | [optional] 
 **direction** | **String**|  | [optional] 
 **locale** | **String**|  | [optional] 

### Return type

[**ProductModel**](ProductModel.md)

### Authorization

[client_id](../README.md#client_id), [customers_auth](../README.md#customers_auth)

### HTTP request headers

 - **Content-Type**: application/json, text/xml, application/xml
 - **Accept**: application/json, text/xml, application/xml

<a name="getProductsByIDOptions"></a>
# **getProductsByIDOptions**
> ProductModel getProductsByIDOptions(id, opts)



Access product option information of products that are online and assigned to site catalog.

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

let apiInstance = new ShopApi.ProductsApi();

let id = "id_example"; // String | The requested product id.

let opts = { 
  'locale': "locale_example" // String | 
};
apiInstance.getProductsByIDOptions(id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The requested product id. | 
 **locale** | **String**|  | [optional] 

### Return type

[**ProductModel**](ProductModel.md)

### Authorization

[client_id](../README.md#client_id), [customers_auth](../README.md#customers_auth)

### HTTP request headers

 - **Content-Type**: application/json, text/xml, application/xml
 - **Accept**: application/json, text/xml, application/xml

<a name="getProductsByIDPrices"></a>
# **getProductsByIDPrices**
> ProductModel getProductsByIDPrices(id, opts)



Access product price information of products that are online and assigned to site catalog.

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

let apiInstance = new ShopApi.ProductsApi();

let id = "id_example"; // String | The requested product id.

let opts = { 
  'locale': "locale_example" // String | 
};
apiInstance.getProductsByIDPrices(id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The requested product id. | 
 **locale** | **String**|  | [optional] 

### Return type

[**ProductModel**](ProductModel.md)

### Authorization

[client_id](../README.md#client_id), [customers_auth](../README.md#customers_auth)

### HTTP request headers

 - **Content-Type**: application/json, text/xml, application/xml
 - **Accept**: application/json, text/xml, application/xml

<a name="getProductsByIDPromotions"></a>
# **getProductsByIDPromotions**
> ProductModel getProductsByIDPromotions(id, opts)



Access product promotion information of products that are online and assigned to site catalog.

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

let apiInstance = new ShopApi.ProductsApi();

let id = "id_example"; // String | The requested product id.

let opts = { 
  'currency': "currency_example", // String | 
  'locale': "locale_example" // String | 
};
apiInstance.getProductsByIDPromotions(id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The requested product id. | 
 **currency** | **String**|  | [optional] 
 **locale** | **String**|  | [optional] 

### Return type

[**ProductModel**](ProductModel.md)

### Authorization

[client_id](../README.md#client_id), [customers_auth](../README.md#customers_auth)

### HTTP request headers

 - **Content-Type**: application/json, text/xml, application/xml
 - **Accept**: application/json, text/xml, application/xml

<a name="getProductsByIDShippingMethods"></a>
# **getProductsByIDShippingMethods**
> ShippingMethodResultModel getProductsByIDShippingMethods(id)



Retrieves the applicable shipping methods for a certain product.

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

let apiInstance = new ShopApi.ProductsApi();

let id = "id_example"; // String | the requested product id

apiInstance.getProductsByIDShippingMethods(id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| the requested product id | 

### Return type

[**ShippingMethodResultModel**](ShippingMethodResultModel.md)

### Authorization

[customers_auth](../README.md#customers_auth), [oauth2_application](../README.md#oauth2_application)

### HTTP request headers

 - **Content-Type**: application/json, text/xml, application/xml
 - **Accept**: application/json, text/xml, application/xml

<a name="getProductsByIDVariations"></a>
# **getProductsByIDVariations**
> ProductModel getProductsByIDVariations(id, opts)



Access product variation information of products that are online and assigned to site catalog.

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

let apiInstance = new ShopApi.ProductsApi();

let id = "id_example"; // String | The requested product id.

let opts = { 
  'locale': "locale_example" // String | 
};
apiInstance.getProductsByIDVariations(id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The requested product id. | 
 **locale** | **String**|  | [optional] 

### Return type

[**ProductModel**](ProductModel.md)

### Authorization

[client_id](../README.md#client_id), [customers_auth](../README.md#customers_auth)

### HTTP request headers

 - **Content-Type**: application/json, text/xml, application/xml
 - **Accept**: application/json, text/xml, application/xml

<a name="getProductsByIDs"></a>
# **getProductsByIDs**
> ProductResultModel getProductsByIDs(ids, opts)



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

let apiInstance = new ShopApi.ProductsApi();

let ids = ["ids_example"]; // [String] | 

let opts = { 
  'expand': ["expand_example"], // [String] | 
  'inventoryIds': ["inventoryIds_example"], // [String] | 
  'currency': "currency_example", // String | 
  'locale': "locale_example", // String | 
  'allImages': true // Boolean | 
};
apiInstance.getProductsByIDs(ids, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ids** | [**[String]**](String.md)|  | 
 **expand** | [**[String]**](String.md)|  | [optional] 
 **inventoryIds** | [**[String]**](String.md)|  | [optional] 
 **currency** | **String**|  | [optional] 
 **locale** | **String**|  | [optional] 
 **allImages** | **Boolean**|  | [optional] 

### Return type

[**ProductResultModel**](ProductResultModel.md)

### Authorization

[client_id](../README.md#client_id), [customers_auth](../README.md#customers_auth)

### HTTP request headers

 - **Content-Type**: application/json, text/xml, application/xml
 - **Accept**: application/json, text/xml, application/xml

