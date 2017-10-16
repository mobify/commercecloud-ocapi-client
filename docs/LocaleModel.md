# ShopApi.LocaleModel

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**country** | **String** | The country/region code for this Locale, which will  either be the empty string or an upercase ISO 3166 2-letter code. | [optional] 
**_default** | **Boolean** | Flag that is true if the locale is the default one to use if an explicit locale is not specified. | [optional] 
**displayCountry** | **String** | The name for the Locale&#39;s country that is appropriate for  display to the user, or an empty string if no country has been specified  for the Locale.  The display country is returned in the language defined for this locale,  and not in the language of the session locale. | [optional] 
**displayLanguage** | **String** | The name for the Locale&#39;s language that is appropriate for  display to the user, or an empty string if no language has been specified  for the Locale.  The display language is returned in the language defined for this locale,  and not in the language of the session locale. | [optional] 
**displayName** | **String** | The name for the Locale that is appropriate for  display to the user, or an empty string if no display name has been  specified for the Locale.  The display name is returned in the language defined for this locale,  and not in the language of the session locale. | [optional] 
**id** | **String** | The identifier of the Locale. Contains a combination of the  language and the country key, concatenated by \&quot;-\&quot;, e.g. \&quot;en-US\&quot;. This  attribute is the primary key of the class. | [optional] 
**iso3Country** | **String** | The three-letter abbreviation for this Locale&#39;s country, or an  empty string if no country has been specified for the Locale. | [optional] 
**iso3Language** | **String** | The three-letter abbreviation for this Locale&#39;s language, or an  empty string if no language has been specified for the  Locale. | [optional] 
**language** | **String** | The language code for this Locale, which will either  be the empty string or a lowercase ISO 639 code. | [optional] 
**name** | **String** | The display name of the Locale. This uses the current  request locale to localize the value. | [optional] 


