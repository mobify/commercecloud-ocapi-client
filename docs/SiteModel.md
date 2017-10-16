# ShopApi.SiteModel

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allowedCurrencies** | **[String]** | The list of allowed currencies. | [optional] 
**allowedLocales** | [**[LocaleModel]**](LocaleModel.md) | A list of all allowed site locales. | [optional] 
**defaultCurrency** | **String** | The currency mnemonic of the site. | [optional] 
**defaultLocale** | **String** | The default locale of the site. | [optional] 
**httpDisBaseUrl** | **String** | The HTTP DIS base URL. | [optional] 
**httpHostname** | **String** | The configured HTTP host name. If no host name is configured the instance host name is returned. | [optional] 
**httpLibraryContentUrl** | **String** | The HTTP URL to the library content location of the site. | [optional] 
**httpSiteContentUrl** | **String** | The HTTP URL to the site content location. | [optional] 
**httpsDisBaseUrl** | **String** | The HTTPS DIS base URL. | [optional] 
**httpsHostname** | **String** | The configured HTTPS host name. If no host name is configured the instance host name is returned. | [optional] 
**httpsLibraryContentUrl** | **String** | The HTTPS URL to the library content location of the site. | [optional] 
**httpsSiteContentUrl** | **String** | The HTTPS URL to the site content location. | [optional] 
**id** | **String** | The id of the site. | [optional] 
**name** | **String** | The descriptive name for the site. | [optional] 
**status** | **String** | The site status online/offline. | [optional] 
**timezone** | **String** | The time zone of the site (for example, USA/Eastern). | [optional] 
**timezoneOffset** | **Number** | The time zone offset from UTC for the current time in milliseconds (for example, -14400000). | [optional] 


<a name="StatusEnum"></a>
## Enum: StatusEnum


* `online` (value: `"online"`)

* `offline` (value: `"offline"`)




