# ShopApi.OrderSearchApi

All URIs are relative to *https://mobify-tech-prtnr-na03-dw.demandware.net/s/2017refresh/dw/shop/v17_8*

Method | HTTP request | Description
------------- | ------------- | -------------
[**postOrderSearch**](OrderSearchApi.md#postOrderSearch) | **POST** /order_search | 


<a name="postOrderSearch"></a>
# **postOrderSearch**
> OrderSearchResultModel postOrderSearch(body)



Searches for orders.    The query attribute specifies a complex query that can be used to narrow down the search.    Note that search fields are mandatory now and no default ones are supported.    As the old order search version, the new one always uses Search Service too and the for that reason Order  Incremental Indexing should be enabled. Otherwise HTTP 500 response will occur.    The supported search fields are:    affiliate_partner_i_d  affiliate_partner_name  business_type  channel_type  confirmation_status (String)  created_by  creation_date  currency_code  customer_email  customer_name  customer_no  export_after  export_status (String)  external_order_no  external_order_status  last_modified  order_no  original_order_no  payment_status (String)  replaced_order_no  replacement_order_no  shipping_status (String)  status (String)  total_gross_price  total_net_price  order.has_holds  coupon_line_items.coupon_code  coupon_line_items.coupon_id  holds.type  invoices.status  order_items.status  payment_instruments.credit_card_type  payment_instruments.payment_method_id  product_items.product_id  return_cases.return_case_number  shipments.shipping_method_id  shipping_orders.shipping_order_number    The sort order of the retrieved orders could be specified by the \&quot;sorts\&quot; parameter. It is a list of objects  presenting field name and sort direction (\&quot;asc\&quot; or \&quot;desc\&quot;).    Custom attributes could be used as search fields and as sort fields too. A prefix \&quot;c_\&quot; has to be added to them.

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

let apiInstance = new ShopApi.OrderSearchApi();

let body = new ShopApi.OrderSearchRequestModel() // OrderSearchRequestModel | 

apiInstance.postOrderSearch(body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**OrderSearchRequestModel**](OrderSearchRequestModel.md)|  | 

### Return type

[**OrderSearchResultModel**](OrderSearchResultModel.md)

### Authorization

[customers_auth](../README.md#customers_auth), [oauth2_application](../README.md#oauth2_application)

### HTTP request headers

 - **Content-Type**: application/json, text/xml, application/xml
 - **Accept**: application/json, text/xml, application/xml

