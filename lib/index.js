'use strict'

Object.defineProperty(exports, '__esModule', {
    value: true
})
exports.StoresApi = exports.SiteApi = exports.SessionsApi = exports.SearchSuggestionApi = exports.PromotionsApi = exports.ProductsApi = exports.ProductSearchApi = exports.ProductListsApi = exports.PriceAdjustmentLimitsApi = exports.OrdersApi = exports.OrderSearchApi = exports.GiftCertificateApi = exports.FoldersApi = exports.CustomersApi = exports.CustomObjectsApi = exports.ContentSearchApi = exports.ContentApi = exports.CategoriesApi = exports.BasketsApi = exports.VariationGroupModel = exports.VariationAttributeValueModel = exports.VariationAttributeModel = exports.VariantModel = exports.TextQueryModel = exports.TermQueryModel = exports.TermFilterModel = exports.SuggestionResultModel = exports.SuggestionModel = exports.SuggestedTermsModel = exports.SuggestedTermModel = exports.SuggestedProductModel = exports.SuggestedPhraseModel = exports.SuggestedContentModel = exports.SuggestedCategoryModel = exports.StoreResultModel = exports.StoreModel = exports.StatusModel = exports.SortModel = exports.SiteModel = exports.SimpleLinkModel = exports.ShippingPromotionModel = exports.ShippingMethodResultModel = exports.ShippingMethodModel = exports.ShippingItemModel = exports.ShipmentModel = exports.ResultPageModel = exports.RecommendationTypeModel = exports.RecommendationModel = exports.RangeFilterModel = undefined
exports.Range2FilterModel = exports.QueryFilterModel = exports.PublicProductListResultModel = exports.PublicProductListModel = exports.PublicProductListLinkModel = exports.PublicProductListItemResultModel = exports.PublicProductListItemModel = exports.PromotionResultModel = exports.PromotionModel = exports.ProductTypeModel = exports.ProductSimpleLinkModel = exports.ProductSearchSortingOptionModel = exports.ProductSearchResultModel = exports.ProductSearchRefinementValueModel = exports.ProductSearchRefinementModel = exports.ProductSearchHitModel = exports.ProductResultModel = exports.ProductPromotionModel = exports.ProductModel = exports.ProductListShippingAddressModel = exports.ProductListRegistrantModel = exports.ProductListLinkModel = exports.ProductListItemReferenceModel = exports.ProductListEventModel = exports.ProductLinkModel = exports.ProductItemModel = exports.ProductDetailsLinkModel = exports.PriceAdjustmentModel = exports.PriceAdjustmentLimitsModel = exports.PriceAdjustmentLimitModel = exports.PaymentMethodResultModel = exports.PaymentMethodModel = exports.PaymentCardSpecModel = exports.PaymentCardModel = exports.PaymentBankAccountRequestModel = exports.PaymentBankAccountModel = exports.PasswordResetModel = exports.PasswordChangeRequestModel = exports.OrderSearchResultModel = exports.OrderSearchRequestModel = exports.OrderSearchHitModel = exports.OrderPaymentInstrumentRequestModel = exports.OrderPaymentInstrumentModel = exports.OrderPaymentCardRequestModel = exports.OrderModel = exports.OrderAddressModel = exports.OptionValueModel = exports.OptionModel = exports.OptionItemModel = exports.NotesResultModel = exports.NoteModel = exports.NestedQueryModel = exports.MasterModel = exports.LocaleModel = exports.InventoryModel = exports.ImageModel = exports.ImageGroupModel = exports.GiftCertificateRequestModel = exports.GiftCertificateModel = exports.GiftCertificateItemModel = exports.FilteredQueryModel = exports.FaultModel = exports.DiscountModel = exports.CustomerRegistrationModel = exports.CustomerProductListResultModel = exports.CustomerProductListRegistrantModel = exports.CustomerProductListModel = exports.CustomerProductListItemResultModel = exports.CustomerProductListItemModel = exports.CustomerProductListItemLinkModel = exports.CustomerPaymentInstrumentResultModel = exports.CustomerPaymentInstrumentRequestModel = exports.CustomerPaymentInstrumentModel = exports.CustomerPaymentCardRequestModel = exports.CustomerOrderResultModel = exports.CustomerModel = exports.CustomerInfoModel = exports.CustomerAddressResultModel = exports.CustomerAddressModel = exports.CustomerAddressLinkModel = exports.CustomObjectModel = exports.CouponItemModel = exports.ContentSearchResultModel = exports.ContentSearchRefinementValueModel = exports.ContentSearchRefinementModel = exports.ContentResultModel = exports.ContentModel = exports.ContentFolderResultModel = exports.ContentFolderModel = exports.CategoryResultModel = exports.CategoryModel = exports.BundledProductModel = exports.BoolQueryModel = exports.BoolFilterModel = exports.BonusDiscountLineItemModel = exports.BasketsResultModel = exports.BasketPaymentInstrumentRequestModel = exports.BasketModel = exports.AuthRequestModel = exports.ApiClient = undefined

const _ApiClient = require('./ApiClient')

const _ApiClient2 = _interopRequireDefault(_ApiClient)

const _AuthRequestModel = require('./models/AuthRequestModel')

const _AuthRequestModel2 = _interopRequireDefault(_AuthRequestModel)

const _BasketModel = require('./models/BasketModel')

const _BasketModel2 = _interopRequireDefault(_BasketModel)

const _BasketPaymentInstrumentRequestModel = require('./models/BasketPaymentInstrumentRequestModel')

const _BasketPaymentInstrumentRequestModel2 = _interopRequireDefault(_BasketPaymentInstrumentRequestModel)

const _BasketsResultModel = require('./models/BasketsResultModel')

const _BasketsResultModel2 = _interopRequireDefault(_BasketsResultModel)

const _BonusDiscountLineItemModel = require('./models/BonusDiscountLineItemModel')

const _BonusDiscountLineItemModel2 = _interopRequireDefault(_BonusDiscountLineItemModel)

const _BoolFilterModel = require('./models/BoolFilterModel')

const _BoolFilterModel2 = _interopRequireDefault(_BoolFilterModel)

const _BoolQueryModel = require('./models/BoolQueryModel')

const _BoolQueryModel2 = _interopRequireDefault(_BoolQueryModel)

const _BundledProductModel = require('./models/BundledProductModel')

const _BundledProductModel2 = _interopRequireDefault(_BundledProductModel)

const _CategoryModel = require('./models/CategoryModel')

const _CategoryModel2 = _interopRequireDefault(_CategoryModel)

const _CategoryResultModel = require('./models/CategoryResultModel')

const _CategoryResultModel2 = _interopRequireDefault(_CategoryResultModel)

const _ContentFolderModel = require('./models/ContentFolderModel')

const _ContentFolderModel2 = _interopRequireDefault(_ContentFolderModel)

const _ContentFolderResultModel = require('./models/ContentFolderResultModel')

const _ContentFolderResultModel2 = _interopRequireDefault(_ContentFolderResultModel)

const _ContentModel = require('./models/ContentModel')

const _ContentModel2 = _interopRequireDefault(_ContentModel)

const _ContentResultModel = require('./models/ContentResultModel')

const _ContentResultModel2 = _interopRequireDefault(_ContentResultModel)

const _ContentSearchRefinementModel = require('./models/ContentSearchRefinementModel')

const _ContentSearchRefinementModel2 = _interopRequireDefault(_ContentSearchRefinementModel)

const _ContentSearchRefinementValueModel = require('./models/ContentSearchRefinementValueModel')

const _ContentSearchRefinementValueModel2 = _interopRequireDefault(_ContentSearchRefinementValueModel)

const _ContentSearchResultModel = require('./models/ContentSearchResultModel')

const _ContentSearchResultModel2 = _interopRequireDefault(_ContentSearchResultModel)

const _CouponItemModel = require('./models/CouponItemModel')

const _CouponItemModel2 = _interopRequireDefault(_CouponItemModel)

const _CustomObjectModel = require('./models/CustomObjectModel')

const _CustomObjectModel2 = _interopRequireDefault(_CustomObjectModel)

const _CustomerAddressLinkModel = require('./models/CustomerAddressLinkModel')

const _CustomerAddressLinkModel2 = _interopRequireDefault(_CustomerAddressLinkModel)

const _CustomerAddressModel = require('./models/CustomerAddressModel')

const _CustomerAddressModel2 = _interopRequireDefault(_CustomerAddressModel)

const _CustomerAddressResultModel = require('./models/CustomerAddressResultModel')

const _CustomerAddressResultModel2 = _interopRequireDefault(_CustomerAddressResultModel)

const _CustomerInfoModel = require('./models/CustomerInfoModel')

const _CustomerInfoModel2 = _interopRequireDefault(_CustomerInfoModel)

const _CustomerModel = require('./models/CustomerModel')

const _CustomerModel2 = _interopRequireDefault(_CustomerModel)

const _CustomerOrderResultModel = require('./models/CustomerOrderResultModel')

const _CustomerOrderResultModel2 = _interopRequireDefault(_CustomerOrderResultModel)

const _CustomerPaymentCardRequestModel = require('./models/CustomerPaymentCardRequestModel')

const _CustomerPaymentCardRequestModel2 = _interopRequireDefault(_CustomerPaymentCardRequestModel)

const _CustomerPaymentInstrumentModel = require('./models/CustomerPaymentInstrumentModel')

const _CustomerPaymentInstrumentModel2 = _interopRequireDefault(_CustomerPaymentInstrumentModel)

const _CustomerPaymentInstrumentRequestModel = require('./models/CustomerPaymentInstrumentRequestModel')

const _CustomerPaymentInstrumentRequestModel2 = _interopRequireDefault(_CustomerPaymentInstrumentRequestModel)

const _CustomerPaymentInstrumentResultModel = require('./models/CustomerPaymentInstrumentResultModel')

const _CustomerPaymentInstrumentResultModel2 = _interopRequireDefault(_CustomerPaymentInstrumentResultModel)

const _CustomerProductListItemLinkModel = require('./models/CustomerProductListItemLinkModel')

const _CustomerProductListItemLinkModel2 = _interopRequireDefault(_CustomerProductListItemLinkModel)

const _CustomerProductListItemModel = require('./models/CustomerProductListItemModel')

const _CustomerProductListItemModel2 = _interopRequireDefault(_CustomerProductListItemModel)

const _CustomerProductListItemResultModel = require('./models/CustomerProductListItemResultModel')

const _CustomerProductListItemResultModel2 = _interopRequireDefault(_CustomerProductListItemResultModel)

const _CustomerProductListModel = require('./models/CustomerProductListModel')

const _CustomerProductListModel2 = _interopRequireDefault(_CustomerProductListModel)

const _CustomerProductListRegistrantModel = require('./models/CustomerProductListRegistrantModel')

const _CustomerProductListRegistrantModel2 = _interopRequireDefault(_CustomerProductListRegistrantModel)

const _CustomerProductListResultModel = require('./models/CustomerProductListResultModel')

const _CustomerProductListResultModel2 = _interopRequireDefault(_CustomerProductListResultModel)

const _CustomerRegistrationModel = require('./models/CustomerRegistrationModel')

const _CustomerRegistrationModel2 = _interopRequireDefault(_CustomerRegistrationModel)

const _DiscountModel = require('./models/DiscountModel')

const _DiscountModel2 = _interopRequireDefault(_DiscountModel)

const _FaultModel = require('./models/FaultModel')

const _FaultModel2 = _interopRequireDefault(_FaultModel)

const _FilteredQueryModel = require('./models/FilteredQueryModel')

const _FilteredQueryModel2 = _interopRequireDefault(_FilteredQueryModel)

const _GiftCertificateItemModel = require('./models/GiftCertificateItemModel')

const _GiftCertificateItemModel2 = _interopRequireDefault(_GiftCertificateItemModel)

const _GiftCertificateModel = require('./models/GiftCertificateModel')

const _GiftCertificateModel2 = _interopRequireDefault(_GiftCertificateModel)

const _GiftCertificateRequestModel = require('./models/GiftCertificateRequestModel')

const _GiftCertificateRequestModel2 = _interopRequireDefault(_GiftCertificateRequestModel)

const _ImageGroupModel = require('./models/ImageGroupModel')

const _ImageGroupModel2 = _interopRequireDefault(_ImageGroupModel)

const _ImageModel = require('./models/ImageModel')

const _ImageModel2 = _interopRequireDefault(_ImageModel)

const _InventoryModel = require('./models/InventoryModel')

const _InventoryModel2 = _interopRequireDefault(_InventoryModel)

const _LocaleModel = require('./models/LocaleModel')

const _LocaleModel2 = _interopRequireDefault(_LocaleModel)

const _MasterModel = require('./models/MasterModel')

const _MasterModel2 = _interopRequireDefault(_MasterModel)

const _NestedQueryModel = require('./models/NestedQueryModel')

const _NestedQueryModel2 = _interopRequireDefault(_NestedQueryModel)

const _NoteModel = require('./models/NoteModel')

const _NoteModel2 = _interopRequireDefault(_NoteModel)

const _NotesResultModel = require('./models/NotesResultModel')

const _NotesResultModel2 = _interopRequireDefault(_NotesResultModel)

const _OptionItemModel = require('./models/OptionItemModel')

const _OptionItemModel2 = _interopRequireDefault(_OptionItemModel)

const _OptionModel = require('./models/OptionModel')

const _OptionModel2 = _interopRequireDefault(_OptionModel)

const _OptionValueModel = require('./models/OptionValueModel')

const _OptionValueModel2 = _interopRequireDefault(_OptionValueModel)

const _OrderAddressModel = require('./models/OrderAddressModel')

const _OrderAddressModel2 = _interopRequireDefault(_OrderAddressModel)

const _OrderModel = require('./models/OrderModel')

const _OrderModel2 = _interopRequireDefault(_OrderModel)

const _OrderPaymentCardRequestModel = require('./models/OrderPaymentCardRequestModel')

const _OrderPaymentCardRequestModel2 = _interopRequireDefault(_OrderPaymentCardRequestModel)

const _OrderPaymentInstrumentModel = require('./models/OrderPaymentInstrumentModel')

const _OrderPaymentInstrumentModel2 = _interopRequireDefault(_OrderPaymentInstrumentModel)

const _OrderPaymentInstrumentRequestModel = require('./models/OrderPaymentInstrumentRequestModel')

const _OrderPaymentInstrumentRequestModel2 = _interopRequireDefault(_OrderPaymentInstrumentRequestModel)

const _OrderSearchHitModel = require('./models/OrderSearchHitModel')

const _OrderSearchHitModel2 = _interopRequireDefault(_OrderSearchHitModel)

const _OrderSearchRequestModel = require('./models/OrderSearchRequestModel')

const _OrderSearchRequestModel2 = _interopRequireDefault(_OrderSearchRequestModel)

const _OrderSearchResultModel = require('./models/OrderSearchResultModel')

const _OrderSearchResultModel2 = _interopRequireDefault(_OrderSearchResultModel)

const _PasswordChangeRequestModel = require('./models/PasswordChangeRequestModel')

const _PasswordChangeRequestModel2 = _interopRequireDefault(_PasswordChangeRequestModel)

const _PasswordResetModel = require('./models/PasswordResetModel')

const _PasswordResetModel2 = _interopRequireDefault(_PasswordResetModel)

const _PaymentBankAccountModel = require('./models/PaymentBankAccountModel')

const _PaymentBankAccountModel2 = _interopRequireDefault(_PaymentBankAccountModel)

const _PaymentBankAccountRequestModel = require('./models/PaymentBankAccountRequestModel')

const _PaymentBankAccountRequestModel2 = _interopRequireDefault(_PaymentBankAccountRequestModel)

const _PaymentCardModel = require('./models/PaymentCardModel')

const _PaymentCardModel2 = _interopRequireDefault(_PaymentCardModel)

const _PaymentCardSpecModel = require('./models/PaymentCardSpecModel')

const _PaymentCardSpecModel2 = _interopRequireDefault(_PaymentCardSpecModel)

const _PaymentMethodModel = require('./models/PaymentMethodModel')

const _PaymentMethodModel2 = _interopRequireDefault(_PaymentMethodModel)

const _PaymentMethodResultModel = require('./models/PaymentMethodResultModel')

const _PaymentMethodResultModel2 = _interopRequireDefault(_PaymentMethodResultModel)

const _PriceAdjustmentLimitModel = require('./models/PriceAdjustmentLimitModel')

const _PriceAdjustmentLimitModel2 = _interopRequireDefault(_PriceAdjustmentLimitModel)

const _PriceAdjustmentLimitsModel = require('./models/PriceAdjustmentLimitsModel')

const _PriceAdjustmentLimitsModel2 = _interopRequireDefault(_PriceAdjustmentLimitsModel)

const _PriceAdjustmentModel = require('./models/PriceAdjustmentModel')

const _PriceAdjustmentModel2 = _interopRequireDefault(_PriceAdjustmentModel)

const _ProductDetailsLinkModel = require('./models/ProductDetailsLinkModel')

const _ProductDetailsLinkModel2 = _interopRequireDefault(_ProductDetailsLinkModel)

const _ProductItemModel = require('./models/ProductItemModel')

const _ProductItemModel2 = _interopRequireDefault(_ProductItemModel)

const _ProductLinkModel = require('./models/ProductLinkModel')

const _ProductLinkModel2 = _interopRequireDefault(_ProductLinkModel)

const _ProductListEventModel = require('./models/ProductListEventModel')

const _ProductListEventModel2 = _interopRequireDefault(_ProductListEventModel)

const _ProductListItemReferenceModel = require('./models/ProductListItemReferenceModel')

const _ProductListItemReferenceModel2 = _interopRequireDefault(_ProductListItemReferenceModel)

const _ProductListLinkModel = require('./models/ProductListLinkModel')

const _ProductListLinkModel2 = _interopRequireDefault(_ProductListLinkModel)

const _ProductListRegistrantModel = require('./models/ProductListRegistrantModel')

const _ProductListRegistrantModel2 = _interopRequireDefault(_ProductListRegistrantModel)

const _ProductListShippingAddressModel = require('./models/ProductListShippingAddressModel')

const _ProductListShippingAddressModel2 = _interopRequireDefault(_ProductListShippingAddressModel)

const _ProductModel = require('./models/ProductModel')

const _ProductModel2 = _interopRequireDefault(_ProductModel)

const _ProductPromotionModel = require('./models/ProductPromotionModel')

const _ProductPromotionModel2 = _interopRequireDefault(_ProductPromotionModel)

const _ProductResultModel = require('./models/ProductResultModel')

const _ProductResultModel2 = _interopRequireDefault(_ProductResultModel)

const _ProductSearchHitModel = require('./models/ProductSearchHitModel')

const _ProductSearchHitModel2 = _interopRequireDefault(_ProductSearchHitModel)

const _ProductSearchRefinementModel = require('./models/ProductSearchRefinementModel')

const _ProductSearchRefinementModel2 = _interopRequireDefault(_ProductSearchRefinementModel)

const _ProductSearchRefinementValueModel = require('./models/ProductSearchRefinementValueModel')

const _ProductSearchRefinementValueModel2 = _interopRequireDefault(_ProductSearchRefinementValueModel)

const _ProductSearchResultModel = require('./models/ProductSearchResultModel')

const _ProductSearchResultModel2 = _interopRequireDefault(_ProductSearchResultModel)

const _ProductSearchSortingOptionModel = require('./models/ProductSearchSortingOptionModel')

const _ProductSearchSortingOptionModel2 = _interopRequireDefault(_ProductSearchSortingOptionModel)

const _ProductSimpleLinkModel = require('./models/ProductSimpleLinkModel')

const _ProductSimpleLinkModel2 = _interopRequireDefault(_ProductSimpleLinkModel)

const _ProductTypeModel = require('./models/ProductTypeModel')

const _ProductTypeModel2 = _interopRequireDefault(_ProductTypeModel)

const _PromotionModel = require('./models/PromotionModel')

const _PromotionModel2 = _interopRequireDefault(_PromotionModel)

const _PromotionResultModel = require('./models/PromotionResultModel')

const _PromotionResultModel2 = _interopRequireDefault(_PromotionResultModel)

const _PublicProductListItemModel = require('./models/PublicProductListItemModel')

const _PublicProductListItemModel2 = _interopRequireDefault(_PublicProductListItemModel)

const _PublicProductListItemResultModel = require('./models/PublicProductListItemResultModel')

const _PublicProductListItemResultModel2 = _interopRequireDefault(_PublicProductListItemResultModel)

const _PublicProductListLinkModel = require('./models/PublicProductListLinkModel')

const _PublicProductListLinkModel2 = _interopRequireDefault(_PublicProductListLinkModel)

const _PublicProductListModel = require('./models/PublicProductListModel')

const _PublicProductListModel2 = _interopRequireDefault(_PublicProductListModel)

const _PublicProductListResultModel = require('./models/PublicProductListResultModel')

const _PublicProductListResultModel2 = _interopRequireDefault(_PublicProductListResultModel)

const _QueryFilterModel = require('./models/QueryFilterModel')

const _QueryFilterModel2 = _interopRequireDefault(_QueryFilterModel)

const _Range2FilterModel = require('./models/Range2FilterModel')

const _Range2FilterModel2 = _interopRequireDefault(_Range2FilterModel)

const _RangeFilterModel = require('./models/RangeFilterModel')

const _RangeFilterModel2 = _interopRequireDefault(_RangeFilterModel)

const _RecommendationModel = require('./models/RecommendationModel')

const _RecommendationModel2 = _interopRequireDefault(_RecommendationModel)

const _RecommendationTypeModel = require('./models/RecommendationTypeModel')

const _RecommendationTypeModel2 = _interopRequireDefault(_RecommendationTypeModel)

const _ResultPageModel = require('./models/ResultPageModel')

const _ResultPageModel2 = _interopRequireDefault(_ResultPageModel)

const _ShipmentModel = require('./models/ShipmentModel')

const _ShipmentModel2 = _interopRequireDefault(_ShipmentModel)

const _ShippingItemModel = require('./models/ShippingItemModel')

const _ShippingItemModel2 = _interopRequireDefault(_ShippingItemModel)

const _ShippingMethodModel = require('./models/ShippingMethodModel')

const _ShippingMethodModel2 = _interopRequireDefault(_ShippingMethodModel)

const _ShippingMethodResultModel = require('./models/ShippingMethodResultModel')

const _ShippingMethodResultModel2 = _interopRequireDefault(_ShippingMethodResultModel)

const _ShippingPromotionModel = require('./models/ShippingPromotionModel')

const _ShippingPromotionModel2 = _interopRequireDefault(_ShippingPromotionModel)

const _SimpleLinkModel = require('./models/SimpleLinkModel')

const _SimpleLinkModel2 = _interopRequireDefault(_SimpleLinkModel)

const _SiteModel = require('./models/SiteModel')

const _SiteModel2 = _interopRequireDefault(_SiteModel)

const _SortModel = require('./models/SortModel')

const _SortModel2 = _interopRequireDefault(_SortModel)

const _StatusModel = require('./models/StatusModel')

const _StatusModel2 = _interopRequireDefault(_StatusModel)

const _StoreModel = require('./models/StoreModel')

const _StoreModel2 = _interopRequireDefault(_StoreModel)

const _StoreResultModel = require('./models/StoreResultModel')

const _StoreResultModel2 = _interopRequireDefault(_StoreResultModel)

const _SuggestedCategoryModel = require('./models/SuggestedCategoryModel')

const _SuggestedCategoryModel2 = _interopRequireDefault(_SuggestedCategoryModel)

const _SuggestedContentModel = require('./models/SuggestedContentModel')

const _SuggestedContentModel2 = _interopRequireDefault(_SuggestedContentModel)

const _SuggestedPhraseModel = require('./models/SuggestedPhraseModel')

const _SuggestedPhraseModel2 = _interopRequireDefault(_SuggestedPhraseModel)

const _SuggestedProductModel = require('./models/SuggestedProductModel')

const _SuggestedProductModel2 = _interopRequireDefault(_SuggestedProductModel)

const _SuggestedTermModel = require('./models/SuggestedTermModel')

const _SuggestedTermModel2 = _interopRequireDefault(_SuggestedTermModel)

const _SuggestedTermsModel = require('./models/SuggestedTermsModel')

const _SuggestedTermsModel2 = _interopRequireDefault(_SuggestedTermsModel)

const _SuggestionModel = require('./models/SuggestionModel')

const _SuggestionModel2 = _interopRequireDefault(_SuggestionModel)

const _SuggestionResultModel = require('./models/SuggestionResultModel')

const _SuggestionResultModel2 = _interopRequireDefault(_SuggestionResultModel)

const _TermFilterModel = require('./models/TermFilterModel')

const _TermFilterModel2 = _interopRequireDefault(_TermFilterModel)

const _TermQueryModel = require('./models/TermQueryModel')

const _TermQueryModel2 = _interopRequireDefault(_TermQueryModel)

const _TextQueryModel = require('./models/TextQueryModel')

const _TextQueryModel2 = _interopRequireDefault(_TextQueryModel)

const _VariantModel = require('./models/VariantModel')

const _VariantModel2 = _interopRequireDefault(_VariantModel)

const _VariationAttributeModel = require('./models/VariationAttributeModel')

const _VariationAttributeModel2 = _interopRequireDefault(_VariationAttributeModel)

const _VariationAttributeValueModel = require('./models/VariationAttributeValueModel')

const _VariationAttributeValueModel2 = _interopRequireDefault(_VariationAttributeValueModel)

const _VariationGroupModel = require('./models/VariationGroupModel')

const _VariationGroupModel2 = _interopRequireDefault(_VariationGroupModel)

const _BasketsApi = require('./api/BasketsApi')

const _BasketsApi2 = _interopRequireDefault(_BasketsApi)

const _CategoriesApi = require('./api/CategoriesApi')

const _CategoriesApi2 = _interopRequireDefault(_CategoriesApi)

const _ContentApi = require('./api/ContentApi')

const _ContentApi2 = _interopRequireDefault(_ContentApi)

const _ContentSearchApi = require('./api/ContentSearchApi')

const _ContentSearchApi2 = _interopRequireDefault(_ContentSearchApi)

const _CustomObjectsApi = require('./api/CustomObjectsApi')

const _CustomObjectsApi2 = _interopRequireDefault(_CustomObjectsApi)

const _CustomersApi = require('./api/CustomersApi')

const _CustomersApi2 = _interopRequireDefault(_CustomersApi)

const _FoldersApi = require('./api/FoldersApi')

const _FoldersApi2 = _interopRequireDefault(_FoldersApi)

const _GiftCertificateApi = require('./api/GiftCertificateApi')

const _GiftCertificateApi2 = _interopRequireDefault(_GiftCertificateApi)

const _OrderSearchApi = require('./api/OrderSearchApi')

const _OrderSearchApi2 = _interopRequireDefault(_OrderSearchApi)

const _OrdersApi = require('./api/OrdersApi')

const _OrdersApi2 = _interopRequireDefault(_OrdersApi)

const _PriceAdjustmentLimitsApi = require('./api/PriceAdjustmentLimitsApi')

const _PriceAdjustmentLimitsApi2 = _interopRequireDefault(_PriceAdjustmentLimitsApi)

const _ProductListsApi = require('./api/ProductListsApi')

const _ProductListsApi2 = _interopRequireDefault(_ProductListsApi)

const _ProductSearchApi = require('./api/ProductSearchApi')

const _ProductSearchApi2 = _interopRequireDefault(_ProductSearchApi)

const _ProductsApi = require('./api/ProductsApi')

const _ProductsApi2 = _interopRequireDefault(_ProductsApi)

const _PromotionsApi = require('./api/PromotionsApi')

const _PromotionsApi2 = _interopRequireDefault(_PromotionsApi)

const _SearchSuggestionApi = require('./api/SearchSuggestionApi')

const _SearchSuggestionApi2 = _interopRequireDefault(_SearchSuggestionApi)

const _SessionsApi = require('./api/SessionsApi')

const _SessionsApi2 = _interopRequireDefault(_SessionsApi)

const _SiteApi = require('./api/SiteApi')

const _SiteApi2 = _interopRequireDefault(_SiteApi)

const _StoresApi = require('./api/StoresApi')

const _StoresApi2 = _interopRequireDefault(_StoresApi)

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : {default: obj} }

/**
* ERROR_UNKNOWN.<br>
* The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
* <p>
* An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
* <pre>
* var ShopApi = require('index') // See note below*.
* var xxxSvc = new ShopApi.XxxApi(); // Allocate the API class we're going to use.
* var yyyModel = new ShopApi.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue'
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
* and put the application logic within the callback function.</em>
* </p>
* <p>
* A non-AMD browser application (discouraged) might do something like this:
* <pre>
* var xxxSvc = new ShopApi.XxxApi(); // Allocate the API class we're going to use.
* var yyy = new ShopApi.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue'
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* </p>
* @module index
* @version 17.8
*/
exports.ApiClient = _ApiClient2.default
exports.AuthRequestModel = _AuthRequestModel2.default
exports.BasketModel = _BasketModel2.default
exports.BasketPaymentInstrumentRequestModel = _BasketPaymentInstrumentRequestModel2.default
exports.BasketsResultModel = _BasketsResultModel2.default
exports.BonusDiscountLineItemModel = _BonusDiscountLineItemModel2.default
exports.BoolFilterModel = _BoolFilterModel2.default
exports.BoolQueryModel = _BoolQueryModel2.default
exports.BundledProductModel = _BundledProductModel2.default
exports.CategoryModel = _CategoryModel2.default
exports.CategoryResultModel = _CategoryResultModel2.default
exports.ContentFolderModel = _ContentFolderModel2.default
exports.ContentFolderResultModel = _ContentFolderResultModel2.default
exports.ContentModel = _ContentModel2.default
exports.ContentResultModel = _ContentResultModel2.default
exports.ContentSearchRefinementModel = _ContentSearchRefinementModel2.default
exports.ContentSearchRefinementValueModel = _ContentSearchRefinementValueModel2.default
exports.ContentSearchResultModel = _ContentSearchResultModel2.default
exports.CouponItemModel = _CouponItemModel2.default
exports.CustomObjectModel = _CustomObjectModel2.default
exports.CustomerAddressLinkModel = _CustomerAddressLinkModel2.default
exports.CustomerAddressModel = _CustomerAddressModel2.default
exports.CustomerAddressResultModel = _CustomerAddressResultModel2.default
exports.CustomerInfoModel = _CustomerInfoModel2.default
exports.CustomerModel = _CustomerModel2.default
exports.CustomerOrderResultModel = _CustomerOrderResultModel2.default
exports.CustomerPaymentCardRequestModel = _CustomerPaymentCardRequestModel2.default
exports.CustomerPaymentInstrumentModel = _CustomerPaymentInstrumentModel2.default
exports.CustomerPaymentInstrumentRequestModel = _CustomerPaymentInstrumentRequestModel2.default
exports.CustomerPaymentInstrumentResultModel = _CustomerPaymentInstrumentResultModel2.default
exports.CustomerProductListItemLinkModel = _CustomerProductListItemLinkModel2.default
exports.CustomerProductListItemModel = _CustomerProductListItemModel2.default
exports.CustomerProductListItemResultModel = _CustomerProductListItemResultModel2.default
exports.CustomerProductListModel = _CustomerProductListModel2.default
exports.CustomerProductListRegistrantModel = _CustomerProductListRegistrantModel2.default
exports.CustomerProductListResultModel = _CustomerProductListResultModel2.default
exports.CustomerRegistrationModel = _CustomerRegistrationModel2.default
exports.DiscountModel = _DiscountModel2.default
exports.FaultModel = _FaultModel2.default
exports.FilteredQueryModel = _FilteredQueryModel2.default
exports.GiftCertificateItemModel = _GiftCertificateItemModel2.default
exports.GiftCertificateModel = _GiftCertificateModel2.default
exports.GiftCertificateRequestModel = _GiftCertificateRequestModel2.default
exports.ImageGroupModel = _ImageGroupModel2.default
exports.ImageModel = _ImageModel2.default
exports.InventoryModel = _InventoryModel2.default
exports.LocaleModel = _LocaleModel2.default
exports.MasterModel = _MasterModel2.default
exports.NestedQueryModel = _NestedQueryModel2.default
exports.NoteModel = _NoteModel2.default
exports.NotesResultModel = _NotesResultModel2.default
exports.OptionItemModel = _OptionItemModel2.default
exports.OptionModel = _OptionModel2.default
exports.OptionValueModel = _OptionValueModel2.default
exports.OrderAddressModel = _OrderAddressModel2.default
exports.OrderModel = _OrderModel2.default
exports.OrderPaymentCardRequestModel = _OrderPaymentCardRequestModel2.default
exports.OrderPaymentInstrumentModel = _OrderPaymentInstrumentModel2.default
exports.OrderPaymentInstrumentRequestModel = _OrderPaymentInstrumentRequestModel2.default
exports.OrderSearchHitModel = _OrderSearchHitModel2.default
exports.OrderSearchRequestModel = _OrderSearchRequestModel2.default
exports.OrderSearchResultModel = _OrderSearchResultModel2.default
exports.PasswordChangeRequestModel = _PasswordChangeRequestModel2.default
exports.PasswordResetModel = _PasswordResetModel2.default
exports.PaymentBankAccountModel = _PaymentBankAccountModel2.default
exports.PaymentBankAccountRequestModel = _PaymentBankAccountRequestModel2.default
exports.PaymentCardModel = _PaymentCardModel2.default
exports.PaymentCardSpecModel = _PaymentCardSpecModel2.default
exports.PaymentMethodModel = _PaymentMethodModel2.default
exports.PaymentMethodResultModel = _PaymentMethodResultModel2.default
exports.PriceAdjustmentLimitModel = _PriceAdjustmentLimitModel2.default
exports.PriceAdjustmentLimitsModel = _PriceAdjustmentLimitsModel2.default
exports.PriceAdjustmentModel = _PriceAdjustmentModel2.default
exports.ProductDetailsLinkModel = _ProductDetailsLinkModel2.default
exports.ProductItemModel = _ProductItemModel2.default
exports.ProductLinkModel = _ProductLinkModel2.default
exports.ProductListEventModel = _ProductListEventModel2.default
exports.ProductListItemReferenceModel = _ProductListItemReferenceModel2.default
exports.ProductListLinkModel = _ProductListLinkModel2.default
exports.ProductListRegistrantModel = _ProductListRegistrantModel2.default
exports.ProductListShippingAddressModel = _ProductListShippingAddressModel2.default
exports.ProductModel = _ProductModel2.default
exports.ProductPromotionModel = _ProductPromotionModel2.default
exports.ProductResultModel = _ProductResultModel2.default
exports.ProductSearchHitModel = _ProductSearchHitModel2.default
exports.ProductSearchRefinementModel = _ProductSearchRefinementModel2.default
exports.ProductSearchRefinementValueModel = _ProductSearchRefinementValueModel2.default
exports.ProductSearchResultModel = _ProductSearchResultModel2.default
exports.ProductSearchSortingOptionModel = _ProductSearchSortingOptionModel2.default
exports.ProductSimpleLinkModel = _ProductSimpleLinkModel2.default
exports.ProductTypeModel = _ProductTypeModel2.default
exports.PromotionModel = _PromotionModel2.default
exports.PromotionResultModel = _PromotionResultModel2.default
exports.PublicProductListItemModel = _PublicProductListItemModel2.default
exports.PublicProductListItemResultModel = _PublicProductListItemResultModel2.default
exports.PublicProductListLinkModel = _PublicProductListLinkModel2.default
exports.PublicProductListModel = _PublicProductListModel2.default
exports.PublicProductListResultModel = _PublicProductListResultModel2.default
exports.QueryFilterModel = _QueryFilterModel2.default
exports.Range2FilterModel = _Range2FilterModel2.default
exports.RangeFilterModel = _RangeFilterModel2.default
exports.RecommendationModel = _RecommendationModel2.default
exports.RecommendationTypeModel = _RecommendationTypeModel2.default
exports.ResultPageModel = _ResultPageModel2.default
exports.ShipmentModel = _ShipmentModel2.default
exports.ShippingItemModel = _ShippingItemModel2.default
exports.ShippingMethodModel = _ShippingMethodModel2.default
exports.ShippingMethodResultModel = _ShippingMethodResultModel2.default
exports.ShippingPromotionModel = _ShippingPromotionModel2.default
exports.SimpleLinkModel = _SimpleLinkModel2.default
exports.SiteModel = _SiteModel2.default
exports.SortModel = _SortModel2.default
exports.StatusModel = _StatusModel2.default
exports.StoreModel = _StoreModel2.default
exports.StoreResultModel = _StoreResultModel2.default
exports.SuggestedCategoryModel = _SuggestedCategoryModel2.default
exports.SuggestedContentModel = _SuggestedContentModel2.default
exports.SuggestedPhraseModel = _SuggestedPhraseModel2.default
exports.SuggestedProductModel = _SuggestedProductModel2.default
exports.SuggestedTermModel = _SuggestedTermModel2.default
exports.SuggestedTermsModel = _SuggestedTermsModel2.default
exports.SuggestionModel = _SuggestionModel2.default
exports.SuggestionResultModel = _SuggestionResultModel2.default
exports.TermFilterModel = _TermFilterModel2.default
exports.TermQueryModel = _TermQueryModel2.default
exports.TextQueryModel = _TextQueryModel2.default
exports.VariantModel = _VariantModel2.default
exports.VariationAttributeModel = _VariationAttributeModel2.default
exports.VariationAttributeValueModel = _VariationAttributeValueModel2.default
exports.VariationGroupModel = _VariationGroupModel2.default
exports.BasketsApi = _BasketsApi2.default
exports.CategoriesApi = _CategoriesApi2.default
exports.ContentApi = _ContentApi2.default
exports.ContentSearchApi = _ContentSearchApi2.default
exports.CustomObjectsApi = _CustomObjectsApi2.default
exports.CustomersApi = _CustomersApi2.default
exports.FoldersApi = _FoldersApi2.default
exports.GiftCertificateApi = _GiftCertificateApi2.default
exports.OrderSearchApi = _OrderSearchApi2.default
exports.OrdersApi = _OrdersApi2.default
exports.PriceAdjustmentLimitsApi = _PriceAdjustmentLimitsApi2.default
exports.ProductListsApi = _ProductListsApi2.default
exports.ProductSearchApi = _ProductSearchApi2.default
exports.ProductsApi = _ProductsApi2.default
exports.PromotionsApi = _PromotionsApi2.default
exports.SearchSuggestionApi = _SearchSuggestionApi2.default
exports.SessionsApi = _SessionsApi2.default
exports.SiteApi = _SiteApi2.default
exports.StoresApi = _StoresApi2.default /**
                                          * Shop API
                                          * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
                                          *
                                          * OpenAPI spec version: 17.8
                                          *
                                          *
                                          * NOTE: This class is auto generated by the swagger code generator program.
                                          * https://github.com/swagger-api/swagger-codegen.git
                                          * Do not edit the class manually.
                                          *
                                          */
