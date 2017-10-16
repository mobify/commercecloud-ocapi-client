# ShopApi.ProductModel

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**brand** | **String** | The product&#39;s brand. | [optional] 
**bundledProducts** | [**[BundledProductModel]**](BundledProductModel.md) | The array of all bundled products of this product. | [optional] 
**cAvailableForInStorePickup** | **Boolean** | Signals if there are inventory lists for brick-and-mortar stores associated with this product. | [optional] 
**cBatteryLife** | **String** |  | [optional] 
**cBatteryType** | **String** |  | [optional] 
**cBootType** | **[String]** | Type of Boot for search refinement. | [optional] 
**cBottomType** | **[String]** | Bottom type for search refinement | [optional] 
**cColor** | **String** | Product color used for variation attribute | [optional] 
**cConsoleWarranty** | **String** |  | [optional] 
**cCustomCSSFile** | **String** | Use this attribute to apply custom styles for this product. | [optional] 
**cDigitalCameraFeatures** | **[String]** |  | [optional] 
**cDigitalCameraPixels** | **String** |  | [optional] 
**cDigitalCameraType** | **String** |  | [optional] 
**cDigitalCameraWarranty** | **String** |  | [optional] 
**cDimDepth** | **String** |  | [optional] 
**cDimHeight** | **String** |  | [optional] 
**cDimWeight** | **String** |  | [optional] 
**cDimWidth** | **String** |  | [optional] 
**cDisplaySize** | **String** |  | [optional] 
**cGameGenre** | **[String]** |  | [optional] 
**cGameRating** | **String** |  | [optional] 
**cGameSystemType** | **String** |  | [optional] 
**cGpsFeatures** | **[String]** |  | [optional] 
**cGpsType** | **[String]** |  | [optional] 
**cGpsWarranty** | **String** |  | [optional] 
**cImageAspectRatio** | **String** |  | [optional] 
**cIsNew** | **Boolean** |  | [optional] 
**cIsNewtest** | **Boolean** | This indiciates if the product is a new arrival. | [optional] 
**cIsSale** | **Boolean** | This is the help text. It is used for sorting rules. | [optional] 
**cKidsAge** | **String** | Kids Age used for search refinements | [optional] 
**cLength** | **String** | This attribute is used for mens and womens pants lengths. | [optional] 
**cLensAperture** | **String** |  | [optional] 
**cMaterialTest** | **[String]** |  | [optional] 
**cMediaFormat** | **[String]** | Media Format | [optional] 
**cMemorySize** | **String** | Memory Size | [optional] 
**cMemoryType** | **[String]** |  | [optional] 
**cMusicStorage** | **String** |  | [optional] 
**cOpticalZoom** | **String** |  | [optional] 
**cOuterwearType** | **String** | Type of Outerwear for search refinement | [optional] 
**cPortableAudioType** | **[String]** |  | [optional] 
**cRefinementColor** | **String** |  | [optional] 
**cResolution** | **String** |  | [optional] 
**cSandalType** | **String** | Type of Sandal for search refinement | [optional] 
**cSheets** | **[String]** | test attribute | [optional] 
**cShoeType** | **String** | Type of Shoe for search refinements | [optional] 
**cSize** | **String** | This attribute is used for all footwear, apparel and accessory sizing for men, women and kids products. | [optional] 
**cSkinConcern** | **[String]** |  | [optional] 
**cStyleNumber** | **String** |  | [optional] 
**cTabDescription** | **String** |  | [optional] 
**cTabDetails** | **String** |  | [optional] 
**cTest** | **String** |  | [optional] 
**cTopType** | **String** | Type of tops in clothing | [optional] 
**cTvSignalFormat** | **String** |  | [optional] 
**cTvSize** | **String** |  | [optional] 
**cTvType** | **String** |  | [optional] 
**cTvWarranty** | **String** |  | [optional] 
**cVideoStorage** | **String** |  | [optional] 
**cWaist** | **String** | Attribute used for apparel waist sizing. | [optional] 
**cWidth** | **String** | This attribute is used for shoe widths for mens, womens and kids. | [optional] 
**currency** | **String** | The ISO 4217 mnemonic code of the currency. | [optional] 
**ean** | **String** | The European Article Number. | [optional] 
**fetchDate** | **Number** |  | [optional] 
**id** | **String** | The id (SKU) of the product. | 
**imageGroups** | [**[ImageGroupModel]**](ImageGroupModel.md) | The array of product image groups. | [optional] 
**inventories** | [**[InventoryModel]**](InventoryModel.md) | The array of product inventories explicitly requested via &#39;inventory_ids&#39; query parameter. This property  is only returned in context of the &#39;availability&#39; expansion. | [optional] 
**inventory** | [**InventoryModel**](InventoryModel.md) | The site default inventory information. This property is only  returned in context of the &#39;availability&#39; expansion. | [optional] 
**longDescription** | **String** | The localized product long description. | [optional] 
**manufacturerName** | **String** | The products manufacturer name. | [optional] 
**manufacturerSku** | **String** | The products manufacturer sku. | [optional] 
**master** | [**MasterModel**](MasterModel.md) | The master product information. Only for types master, variation group and variant. | [optional] 
**minOrderQuantity** | **Number** | The minimum order quantity for this product. | [optional] 
**name** | **String** | The localized product name. | [optional] 
**options** | [**[OptionModel]**](OptionModel.md) | The array of product options. This array can be empty. Only for type option. | [optional] 
**pageDescription** | **String** | The localized products page description. | [optional] 
**pageKeywords** | **String** | The localized products page description. | [optional] 
**pageTitle** | **String** | The localized products page title. | [optional] 
**price** | **Number** | The sales price of the product. In case of complex products like master or set this is the minimum price of  related child products. | [optional] 
**priceMax** | **Number** | The maximum sales of related child products in case of complex products like master or set. | [optional] 
**prices** | **{String: Number}** | The prices map with price book ids and their values. | [optional] 
**primaryCategoryId** | **String** | The id of the products primary category. | [optional] 
**productLinks** | [**[ProductLinkModel]**](ProductLinkModel.md) | The array of source and target products links information. | [optional] 
**productPromotions** | [**[ProductPromotionModel]**](ProductPromotionModel.md) | The array of active customer product promotions for this product. This array can be empty.  Coupon promotions are not returned in this array. | [optional] 
**recommendations** | [**[RecommendationModel]**](RecommendationModel.md) | Returns a list of recommendations. | [optional] 
**setProducts** | [**[ProductModel]**](ProductModel.md) | The array of set products of this product. | [optional] 
**shortDescription** | **String** | The localized product short description. | [optional] 
**stepQuantity** | **Number** | The steps in which the order amount of the product can be  increased. | [optional] 
**type** | [**ProductTypeModel**](ProductTypeModel.md) | The product type information. Can be one or multiple of the following values: item,master,variation_group,variant,bundle,set. | [optional] 
**unit** | **String** | The sales unit of the product. | [optional] 
**upc** | **String** | The Universal Product Code. | [optional] 
**variants** | [**[VariantModel]**](VariantModel.md) | The array of actual variants. This array can be empty. Only for types master, variation group and variant. | [optional] 
**variationAttributes** | [**[VariationAttributeModel]**](VariationAttributeModel.md) | Sorted array of variation attributes information. This array can be empty. Only for types master,  variation group and variant. | [optional] 
**variationGroups** | [**[VariationGroupModel]**](VariationGroupModel.md) | The array of actual variation groups. This array can be empty. Only for types master, variation group and variant. | [optional] 
**variationValues** | **{String: String}** | The actual variation attribute id - value pairs. Only for type variant and  variation group. | [optional] 


<a name="[CBootTypeEnum]"></a>
## Enum: [CBootTypeEnum]


* `0010` (value: `"0010"`)

* `0020` (value: `"0020"`)

* `0030` (value: `"0030"`)

* `0040` (value: `"0040"`)

* `0050` (value: `"0050"`)

* `0060` (value: `"0060"`)

* `0070` (value: `"0070"`)




<a name="[CBottomTypeEnum]"></a>
## Enum: [CBottomTypeEnum]


* `0010` (value: `"0010"`)

* `0020` (value: `"0020"`)

* `0030` (value: `"0030"`)

* `0040` (value: `"0040"`)

* `0050` (value: `"0050"`)

* `0060` (value: `"0060"`)

* `0070` (value: `"0070"`)

* `0080` (value: `"0080"`)




<a name="[CDigitalCameraFeaturesEnum]"></a>
## Enum: [CDigitalCameraFeaturesEnum]


* `0010` (value: `"0010"`)

* `0020` (value: `"0020"`)

* `0030` (value: `"0030"`)

* `0040` (value: `"0040"`)

* `0050` (value: `"0050"`)

* `0060` (value: `"0060"`)

* `0070` (value: `"0070"`)

* `0080` (value: `"0080"`)

* `0090` (value: `"0090"`)

* `0100` (value: `"0100"`)

* `0110` (value: `"0110"`)

* `0120` (value: `"0120"`)

* `0130` (value: `"0130"`)

* `0140` (value: `"0140"`)

* `0150` (value: `"0150"`)

* `0160` (value: `"0160"`)

* `0170` (value: `"0170"`)

* `0180` (value: `"0180"`)

* `0190` (value: `"0190"`)

* `0200` (value: `"0200"`)

* `0210` (value: `"0210"`)

* `0220` (value: `"0220"`)

* `0230` (value: `"0230"`)

* `0240` (value: `"0240"`)

* `0250` (value: `"0250"`)

* `0260` (value: `"0260"`)

* `0270` (value: `"0270"`)

* `0280` (value: `"0280"`)




<a name="[CGameGenreEnum]"></a>
## Enum: [CGameGenreEnum]


* `Action` (value: `"Action"`)

* `Educational` (value: `"Educational"`)

* `Kids` (value: `"Kids"`)

* `Racing` (value: `"Racing"`)

* `Role-Playing` (value: `"Role-Playing"`)

* `Sports` (value: `"Sports"`)

* `Strategy` (value: `"Strategy"`)




<a name="[CGpsFeaturesEnum]"></a>
## Enum: [CGpsFeaturesEnum]


* `0010` (value: `"0010"`)

* `0020` (value: `"0020"`)

* `0030` (value: `"0030"`)

* `0040` (value: `"0040"`)

* `0050` (value: `"0050"`)

* `0060` (value: `"0060"`)

* `0070` (value: `"0070"`)

* `0080` (value: `"0080"`)

* `0090` (value: `"0090"`)

* `0100` (value: `"0100"`)

* `0110` (value: `"0110"`)

* `0120` (value: `"0120"`)

* `0130` (value: `"0130"`)

* `0140` (value: `"0140"`)

* `0150` (value: `"0150"`)

* `0160` (value: `"0160"`)

* `0170` (value: `"0170"`)

* `0180` (value: `"0180"`)

* `0190` (value: `"0190"`)

* `0200` (value: `"0200"`)

* `0210` (value: `"0210"`)

* `0230` (value: `"0230"`)




<a name="[CGpsTypeEnum]"></a>
## Enum: [CGpsTypeEnum]


* `0010` (value: `"0010"`)

* `0020` (value: `"0020"`)

* `0030` (value: `"0030"`)

* `0040` (value: `"0040"`)




<a name="CKidsAgeEnum"></a>
## Enum: CKidsAgeEnum


* `0010` (value: `"0010"`)

* `0020` (value: `"0020"`)

* `0030` (value: `"0030"`)

* `0040` (value: `"0040"`)

* `0050` (value: `"0050"`)

* `0060` (value: `"0060"`)

* `0070` (value: `"0070"`)




<a name="[CMaterialTestEnum]"></a>
## Enum: [CMaterialTestEnum]


* `cotton` (value: `"cotton"`)

* `wool` (value: `"wool"`)

* `polyester` (value: `"polyester"`)




<a name="[CMediaFormatEnum]"></a>
## Enum: [CMediaFormatEnum]


* `0010` (value: `"0010"`)

* `0020` (value: `"0020"`)

* `0030` (value: `"0030"`)

* `0040` (value: `"0040"`)

* `0050` (value: `"0050"`)

* `0060` (value: `"0060"`)

* `0070` (value: `"0070"`)

* `0080` (value: `"0080"`)

* `0090` (value: `"0090"`)

* `0100` (value: `"0100"`)




<a name="[CMemoryTypeEnum]"></a>
## Enum: [CMemoryTypeEnum]


* `0010` (value: `"0010"`)

* `0020` (value: `"0020"`)

* `0030` (value: `"0030"`)

* `0040` (value: `"0040"`)

* `0050` (value: `"0050"`)

* `0060` (value: `"0060"`)

* `0070` (value: `"0070"`)

* `0080` (value: `"0080"`)

* `0090` (value: `"0090"`)




<a name="COuterwearTypeEnum"></a>
## Enum: COuterwearTypeEnum


* `0010` (value: `"0010"`)

* `0020` (value: `"0020"`)

* `0030` (value: `"0030"`)

* `0040` (value: `"0040"`)

* `0050` (value: `"0050"`)

* `0060` (value: `"0060"`)

* `0070` (value: `"0070"`)

* `0080` (value: `"0080"`)




<a name="[CPortableAudioTypeEnum]"></a>
## Enum: [CPortableAudioTypeEnum]


* `0010` (value: `"0010"`)

* `0020` (value: `"0020"`)

* `0030` (value: `"0030"`)




<a name="CRefinementColorEnum"></a>
## Enum: CRefinementColorEnum


* `black` (value: `"black"`)

* `blue` (value: `"blue"`)

* `green` (value: `"green"`)

* `red` (value: `"red"`)

* `orange` (value: `"orange"`)

* `pink` (value: `"pink"`)

* `purple` (value: `"purple"`)

* `white` (value: `"white"`)

* `yellow` (value: `"yellow"`)

* `grey` (value: `"grey"`)

* `beige` (value: `"beige"`)

* `miscellaneous` (value: `"miscellaneous"`)

* `brown` (value: `"brown"`)

* `navy` (value: `"navy"`)




<a name="CSandalTypeEnum"></a>
## Enum: CSandalTypeEnum


* `0010` (value: `"0010"`)

* `0020` (value: `"0020"`)

* `0030` (value: `"0030"`)




<a name="[CSheetsEnum]"></a>
## Enum: [CSheetsEnum]


* `value1` (value: `"value1"`)

* `value2` (value: `"value2"`)

* `value3` (value: `"value3"`)




<a name="CShoeTypeEnum"></a>
## Enum: CShoeTypeEnum


* `0010` (value: `"0010"`)

* `0020` (value: `"0020"`)

* `0030` (value: `"0030"`)

* `0040` (value: `"0040"`)

* `0050` (value: `"0050"`)

* `0060` (value: `"0060"`)

* `0070` (value: `"0070"`)

* `0080` (value: `"0080"`)

* `0090` (value: `"0090"`)

* `0100` (value: `"0100"`)

* `0110` (value: `"0110"`)




<a name="[CSkinConcernEnum]"></a>
## Enum: [CSkinConcernEnum]


* `dryTight` (value: `"dryTight"`)

* `comprehensive` (value: `"comprehensive"`)

* `liftingLossFirm` (value: `"liftingLossFirm"`)




<a name="CTvTypeEnum"></a>
## Enum: CTvTypeEnum


* `0010` (value: `"0010"`)

* `0020` (value: `"0020"`)

* `0030` (value: `"0030"`)

* `0040` (value: `"0040"`)




