# ShopApi.PriceAdjustmentLimitsApi

All URIs are relative to *https://mobify-tech-prtnr-na03-dw.demandware.net/s/2017refresh/dw/shop/v17_8*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getPriceAdjustmentLimits**](PriceAdjustmentLimitsApi.md#getPriceAdjustmentLimits) | **GET** /price_adjustment_limits | 


<a name="getPriceAdjustmentLimits"></a>
# **getPriceAdjustmentLimits**
> PriceAdjustmentLimitsModel getPriceAdjustmentLimits()



Returns a list of price adjustment limits for the authenticated user and the site defined in the URL.    At least one of the following functional permissions must be assigned to the user to be able to access it:  Adjust_Item_Price or Adjust_Shipping_Price or Adjust_Order_Price.  

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

let apiInstance = new ShopApi.PriceAdjustmentLimitsApi();
apiInstance.getPriceAdjustmentLimits().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters
This endpoint does not need any parameter.

### Return type

[**PriceAdjustmentLimitsModel**](PriceAdjustmentLimitsModel.md)

### Authorization

[customers_auth](../README.md#customers_auth), [oauth2_application](../README.md#oauth2_application)

### HTTP request headers

 - **Content-Type**: application/json, text/xml, application/xml
 - **Accept**: application/json, text/xml, application/xml

