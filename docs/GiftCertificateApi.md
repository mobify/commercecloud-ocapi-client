# ShopApi.GiftCertificateApi

All URIs are relative to *https://mobify-tech-prtnr-na03-dw.demandware.net/s/2017refresh/dw/shop/v17_8*

Method | HTTP request | Description
------------- | ------------- | -------------
[**postGiftCertificate**](GiftCertificateApi.md#postGiftCertificate) | **POST** /gift_certificate | 


<a name="postGiftCertificate"></a>
# **postGiftCertificate**
> GiftCertificateModel postGiftCertificate(opts)



Action to retrieve an existing gift certificate.

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

let apiInstance = new ShopApi.GiftCertificateApi();

let opts = { 
  'body': new ShopApi.GiftCertificateRequestModel() // GiftCertificateRequestModel | 
};
apiInstance.postGiftCertificate(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**GiftCertificateRequestModel**](GiftCertificateRequestModel.md)|  | [optional] 

### Return type

[**GiftCertificateModel**](GiftCertificateModel.md)

### Authorization

[customers_auth](../README.md#customers_auth), [oauth2_application](../README.md#oauth2_application)

### HTTP request headers

 - **Content-Type**: application/json, text/xml, application/xml
 - **Accept**: application/json, text/xml, application/xml

