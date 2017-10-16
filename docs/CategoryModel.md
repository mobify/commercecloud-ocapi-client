# ShopApi.CategoryModel

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cAlternativeUrl** | **String** | Renders an alternative URL in main navigation. Uses Salesforce Commerce Cloud content url notation. For example: $url(&#39;Account-Show&#39;)$ or normal URL http://xchange.demandware.com | [optional] 
**cCatBannerID** | **String** | Used to define the content asset used to populate a grid page banner for a category. This value is applied to all sub-category navigation (cascading) if no specific catBannerID has been defined for  a sub-category. | [optional] 
**cCustomCSSFile** | **String** | Use this attribute to apply custom styles for this category. | [optional] 
**cEnableCompare** | **Boolean** | Used to define if/when the Compare feature is to be visualized in the storefront based on navigation. If enableCompare &#x3D; FALSE, no Compare checkboxes will be displayed in the grid view. If enableCompare &#x3D; TRUE, the category (and its children) will support the Compare feature. | [optional] 
**cHeaderMenuBanner** | **String** |  | [optional] 
**cHeaderMenuOrientation** | **String** | Which way to orient the menu and optional header menu HTML. Vertical will list all in one line. Horizontal will list in columns. | [optional] 
**cShowInMenu** | **Boolean** | Used to indicate that a category (such as Mens -&gt; Footwear -&gt; Boots) will display in the roll-over navigation. A sub-category only shows if also the parent category is marked as showInMenu. Up to three category levels are shown in roll-over navigation. | [optional] 
**cSizeChartID** | **String** | Used to define the content asset ID of the Size Chart that is appropriate for products whose PRIMARY category is the associated category (and its children). Whenever a product detail page (or quick view) is rendered, the Size Chart link is populated based on the value of this attribute for the products primary categorization. If not defined, NO size chart link is displayed. | [optional] 
**cSlotBannerHtml** | **String** |  | [optional] 
**cSlotBannerImage** | **String** | Image used on either the top or bottom slot on the category landing pages. | [optional] 
**categories** | [**[CategoryModel]**](CategoryModel.md) | Array of subcategories. Can be empty. | [optional] 
**description** | **String** | The localized description of the category. | [optional] 
**id** | **String** | The id of the category. | [optional] 
**image** | **String** | The URL to the category image. | [optional] 
**name** | **String** | The localized name of the category. | [optional] 
**pageDescription** | **String** | The localized page description of the category. | [optional] 
**pageKeywords** | **String** | The localized page keywords of the category. | [optional] 
**pageTitle** | **String** | The localized page title of the category. | [optional] 
**parentCategoryId** | **String** | The id of the parent category. | [optional] 
**thumbnail** | **String** | The URL to the category thumbnail. | [optional] 


<a name="CHeaderMenuOrientationEnum"></a>
## Enum: CHeaderMenuOrientationEnum


* `Horizontal` (value: `"Horizontal"`)

* `Vertical` (value: `"Vertical"`)




