'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StoresApi = exports.SiteApi = exports.SessionsApi = exports.SearchSuggestionApi = exports.PromotionsApi = exports.ProductsApi = exports.ProductSearchApi = exports.ProductListsApi = exports.PriceAdjustmentLimitsApi = exports.OrdersApi = exports.OrderSearchApi = exports.GiftCertificateApi = exports.FoldersApi = exports.CustomersApi = exports.CustomObjectsApi = exports.ContentSearchApi = exports.ContentApi = exports.CategoriesApi = exports.BasketsApi = exports.VariationGroupModel = exports.VariationAttributeValueModel = exports.VariationAttributeModel = exports.VariantModel = exports.TextQueryModel = exports.TermQueryModel = exports.TermFilterModel = exports.SuggestionResultModel = exports.SuggestionModel = exports.SuggestedTermsModel = exports.SuggestedTermModel = exports.SuggestedProductModel = exports.SuggestedPhraseModel = exports.SuggestedContentModel = exports.SuggestedCategoryModel = exports.StoreResultModel = exports.StoreModel = exports.StatusModel = exports.SortModel = exports.SiteModel = exports.SimpleLinkModel = exports.ShippingPromotionModel = exports.ShippingMethodResultModel = exports.ShippingMethodModel = exports.ShippingItemModel = exports.ShipmentModel = exports.ResultPageModel = exports.RecommendationTypeModel = exports.RecommendationModel = undefined;
exports.RangeFilterModel = exports.Range2FilterModel = exports.QueryFilterModel = exports.PublicProductListResultModel = exports.PublicProductListModel = exports.PublicProductListLinkModel = exports.PublicProductListItemResultModel = exports.PublicProductListItemModel = exports.PromotionResultModel = exports.PromotionModel = exports.ProductTypeModel = exports.ProductSimpleLinkModel = exports.ProductSearchSortingOptionModel = exports.ProductSearchResultModel = exports.ProductSearchRefinementValueModel = exports.ProductSearchRefinementModel = exports.ProductSearchHitModel = exports.ProductResultModel = exports.ProductPromotionModel = exports.ProductModel = exports.ProductListShippingAddressModel = exports.ProductListRegistrantModel = exports.ProductListLinkModel = exports.ProductListItemReferenceModel = exports.ProductListEventModel = exports.ProductLinkModel = exports.ProductItemModel = exports.ProductDetailsLinkModel = exports.PriceAdjustmentModel = exports.PriceAdjustmentLimitsModel = exports.PriceAdjustmentLimitModel = exports.PaymentMethodResultModel = exports.PaymentMethodModel = exports.PaymentCardSpecModel = exports.PaymentCardModel = exports.PaymentBankAccountRequestModel = exports.PaymentBankAccountModel = exports.PasswordResetModel = exports.PasswordChangeRequestModel = exports.OrderSearchResultModel = exports.OrderSearchRequestModel = exports.OrderSearchHitModel = exports.OrderPaymentInstrumentRequestModel = exports.OrderPaymentInstrumentModel = exports.OrderPaymentCardRequestModel = exports.OrderModel = exports.OrderAddressModel = exports.OptionValueModel = exports.OptionModel = exports.OptionItemModel = exports.NotesResultModel = exports.NoteModel = exports.NestedQueryModel = exports.MasterModel = exports.LocaleModel = exports.InventoryModel = exports.ImageModel = exports.ImageGroupModel = exports.GiftCertificateRequestModel = exports.GiftCertificateModel = exports.GiftCertificateItemModel = exports.FilteredQueryModel = exports.DiscountModel = exports.CustomerRegistrationModel = exports.CustomerProductListResultModel = exports.CustomerProductListRegistrantModel = exports.CustomerProductListModel = exports.CustomerProductListItemResultModel = exports.CustomerProductListItemModel = exports.CustomerProductListItemLinkModel = exports.CustomerPaymentInstrumentResultModel = exports.CustomerPaymentInstrumentRequestModel = exports.CustomerPaymentInstrumentModel = exports.CustomerPaymentCardRequestModel = exports.CustomerOrderResultModel = exports.CustomerModel = exports.CustomerInfoModel = exports.CustomerAddressResultModel = exports.CustomerAddressModel = exports.CustomerAddressLinkModel = exports.CustomObjectModel = exports.CouponItemModel = exports.ContentSearchResultModel = exports.ContentSearchRefinementValueModel = exports.ContentSearchRefinementModel = exports.ContentResultModel = exports.ContentModel = exports.ContentFolderResultModel = exports.ContentFolderModel = exports.CategoryResultModel = exports.CategoryModel = exports.BundledProductModel = exports.BoolQueryModel = exports.BoolFilterModel = exports.BonusDiscountLineItemModel = exports.BasketsResultModel = exports.BasketPaymentInstrumentRequestModel = exports.BasketModel = exports.AuthRequestModel = exports.ApiClient = undefined;

var _ApiClient = require('./ApiClient');

var _ApiClient2 = _interopRequireDefault(_ApiClient);

var _AuthRequestModel = require('./models/AuthRequestModel');

var _AuthRequestModel2 = _interopRequireDefault(_AuthRequestModel);

var _BasketModel = require('./models/BasketModel');

var _BasketModel2 = _interopRequireDefault(_BasketModel);

var _BasketPaymentInstrumentRequestModel = require('./models/BasketPaymentInstrumentRequestModel');

var _BasketPaymentInstrumentRequestModel2 = _interopRequireDefault(_BasketPaymentInstrumentRequestModel);

var _BasketsResultModel = require('./models/BasketsResultModel');

var _BasketsResultModel2 = _interopRequireDefault(_BasketsResultModel);

var _BonusDiscountLineItemModel = require('./models/BonusDiscountLineItemModel');

var _BonusDiscountLineItemModel2 = _interopRequireDefault(_BonusDiscountLineItemModel);

var _BoolFilterModel = require('./models/BoolFilterModel');

var _BoolFilterModel2 = _interopRequireDefault(_BoolFilterModel);

var _BoolQueryModel = require('./models/BoolQueryModel');

var _BoolQueryModel2 = _interopRequireDefault(_BoolQueryModel);

var _BundledProductModel = require('./models/BundledProductModel');

var _BundledProductModel2 = _interopRequireDefault(_BundledProductModel);

var _CategoryModel = require('./models/CategoryModel');

var _CategoryModel2 = _interopRequireDefault(_CategoryModel);

var _CategoryResultModel = require('./models/CategoryResultModel');

var _CategoryResultModel2 = _interopRequireDefault(_CategoryResultModel);

var _ContentFolderModel = require('./models/ContentFolderModel');

var _ContentFolderModel2 = _interopRequireDefault(_ContentFolderModel);

var _ContentFolderResultModel = require('./models/ContentFolderResultModel');

var _ContentFolderResultModel2 = _interopRequireDefault(_ContentFolderResultModel);

var _ContentModel = require('./models/ContentModel');

var _ContentModel2 = _interopRequireDefault(_ContentModel);

var _ContentResultModel = require('./models/ContentResultModel');

var _ContentResultModel2 = _interopRequireDefault(_ContentResultModel);

var _ContentSearchRefinementModel = require('./models/ContentSearchRefinementModel');

var _ContentSearchRefinementModel2 = _interopRequireDefault(_ContentSearchRefinementModel);

var _ContentSearchRefinementValueModel = require('./models/ContentSearchRefinementValueModel');

var _ContentSearchRefinementValueModel2 = _interopRequireDefault(_ContentSearchRefinementValueModel);

var _ContentSearchResultModel = require('./models/ContentSearchResultModel');

var _ContentSearchResultModel2 = _interopRequireDefault(_ContentSearchResultModel);

var _CouponItemModel = require('./models/CouponItemModel');

var _CouponItemModel2 = _interopRequireDefault(_CouponItemModel);

var _CustomObjectModel = require('./models/CustomObjectModel');

var _CustomObjectModel2 = _interopRequireDefault(_CustomObjectModel);

var _CustomerAddressLinkModel = require('./models/CustomerAddressLinkModel');

var _CustomerAddressLinkModel2 = _interopRequireDefault(_CustomerAddressLinkModel);

var _CustomerAddressModel = require('./models/CustomerAddressModel');

var _CustomerAddressModel2 = _interopRequireDefault(_CustomerAddressModel);

var _CustomerAddressResultModel = require('./models/CustomerAddressResultModel');

var _CustomerAddressResultModel2 = _interopRequireDefault(_CustomerAddressResultModel);

var _CustomerInfoModel = require('./models/CustomerInfoModel');

var _CustomerInfoModel2 = _interopRequireDefault(_CustomerInfoModel);

var _CustomerModel = require('./models/CustomerModel');

var _CustomerModel2 = _interopRequireDefault(_CustomerModel);

var _CustomerOrderResultModel = require('./models/CustomerOrderResultModel');

var _CustomerOrderResultModel2 = _interopRequireDefault(_CustomerOrderResultModel);

var _CustomerPaymentCardRequestModel = require('./models/CustomerPaymentCardRequestModel');

var _CustomerPaymentCardRequestModel2 = _interopRequireDefault(_CustomerPaymentCardRequestModel);

var _CustomerPaymentInstrumentModel = require('./models/CustomerPaymentInstrumentModel');

var _CustomerPaymentInstrumentModel2 = _interopRequireDefault(_CustomerPaymentInstrumentModel);

var _CustomerPaymentInstrumentRequestModel = require('./models/CustomerPaymentInstrumentRequestModel');

var _CustomerPaymentInstrumentRequestModel2 = _interopRequireDefault(_CustomerPaymentInstrumentRequestModel);

var _CustomerPaymentInstrumentResultModel = require('./models/CustomerPaymentInstrumentResultModel');

var _CustomerPaymentInstrumentResultModel2 = _interopRequireDefault(_CustomerPaymentInstrumentResultModel);

var _CustomerProductListItemLinkModel = require('./models/CustomerProductListItemLinkModel');

var _CustomerProductListItemLinkModel2 = _interopRequireDefault(_CustomerProductListItemLinkModel);

var _CustomerProductListItemModel = require('./models/CustomerProductListItemModel');

var _CustomerProductListItemModel2 = _interopRequireDefault(_CustomerProductListItemModel);

var _CustomerProductListItemResultModel = require('./models/CustomerProductListItemResultModel');

var _CustomerProductListItemResultModel2 = _interopRequireDefault(_CustomerProductListItemResultModel);

var _CustomerProductListModel = require('./models/CustomerProductListModel');

var _CustomerProductListModel2 = _interopRequireDefault(_CustomerProductListModel);

var _CustomerProductListRegistrantModel = require('./models/CustomerProductListRegistrantModel');

var _CustomerProductListRegistrantModel2 = _interopRequireDefault(_CustomerProductListRegistrantModel);

var _CustomerProductListResultModel = require('./models/CustomerProductListResultModel');

var _CustomerProductListResultModel2 = _interopRequireDefault(_CustomerProductListResultModel);

var _CustomerRegistrationModel = require('./models/CustomerRegistrationModel');

var _CustomerRegistrationModel2 = _interopRequireDefault(_CustomerRegistrationModel);

var _DiscountModel = require('./models/DiscountModel');

var _DiscountModel2 = _interopRequireDefault(_DiscountModel);

var _FilteredQueryModel = require('./models/FilteredQueryModel');

var _FilteredQueryModel2 = _interopRequireDefault(_FilteredQueryModel);

var _GiftCertificateItemModel = require('./models/GiftCertificateItemModel');

var _GiftCertificateItemModel2 = _interopRequireDefault(_GiftCertificateItemModel);

var _GiftCertificateModel = require('./models/GiftCertificateModel');

var _GiftCertificateModel2 = _interopRequireDefault(_GiftCertificateModel);

var _GiftCertificateRequestModel = require('./models/GiftCertificateRequestModel');

var _GiftCertificateRequestModel2 = _interopRequireDefault(_GiftCertificateRequestModel);

var _ImageGroupModel = require('./models/ImageGroupModel');

var _ImageGroupModel2 = _interopRequireDefault(_ImageGroupModel);

var _ImageModel = require('./models/ImageModel');

var _ImageModel2 = _interopRequireDefault(_ImageModel);

var _InventoryModel = require('./models/InventoryModel');

var _InventoryModel2 = _interopRequireDefault(_InventoryModel);

var _LocaleModel = require('./models/LocaleModel');

var _LocaleModel2 = _interopRequireDefault(_LocaleModel);

var _MasterModel = require('./models/MasterModel');

var _MasterModel2 = _interopRequireDefault(_MasterModel);

var _NestedQueryModel = require('./models/NestedQueryModel');

var _NestedQueryModel2 = _interopRequireDefault(_NestedQueryModel);

var _NoteModel = require('./models/NoteModel');

var _NoteModel2 = _interopRequireDefault(_NoteModel);

var _NotesResultModel = require('./models/NotesResultModel');

var _NotesResultModel2 = _interopRequireDefault(_NotesResultModel);

var _OptionItemModel = require('./models/OptionItemModel');

var _OptionItemModel2 = _interopRequireDefault(_OptionItemModel);

var _OptionModel = require('./models/OptionModel');

var _OptionModel2 = _interopRequireDefault(_OptionModel);

var _OptionValueModel = require('./models/OptionValueModel');

var _OptionValueModel2 = _interopRequireDefault(_OptionValueModel);

var _OrderAddressModel = require('./models/OrderAddressModel');

var _OrderAddressModel2 = _interopRequireDefault(_OrderAddressModel);

var _OrderModel = require('./models/OrderModel');

var _OrderModel2 = _interopRequireDefault(_OrderModel);

var _OrderPaymentCardRequestModel = require('./models/OrderPaymentCardRequestModel');

var _OrderPaymentCardRequestModel2 = _interopRequireDefault(_OrderPaymentCardRequestModel);

var _OrderPaymentInstrumentModel = require('./models/OrderPaymentInstrumentModel');

var _OrderPaymentInstrumentModel2 = _interopRequireDefault(_OrderPaymentInstrumentModel);

var _OrderPaymentInstrumentRequestModel = require('./models/OrderPaymentInstrumentRequestModel');

var _OrderPaymentInstrumentRequestModel2 = _interopRequireDefault(_OrderPaymentInstrumentRequestModel);

var _OrderSearchHitModel = require('./models/OrderSearchHitModel');

var _OrderSearchHitModel2 = _interopRequireDefault(_OrderSearchHitModel);

var _OrderSearchRequestModel = require('./models/OrderSearchRequestModel');

var _OrderSearchRequestModel2 = _interopRequireDefault(_OrderSearchRequestModel);

var _OrderSearchResultModel = require('./models/OrderSearchResultModel');

var _OrderSearchResultModel2 = _interopRequireDefault(_OrderSearchResultModel);

var _PasswordChangeRequestModel = require('./models/PasswordChangeRequestModel');

var _PasswordChangeRequestModel2 = _interopRequireDefault(_PasswordChangeRequestModel);

var _PasswordResetModel = require('./models/PasswordResetModel');

var _PasswordResetModel2 = _interopRequireDefault(_PasswordResetModel);

var _PaymentBankAccountModel = require('./models/PaymentBankAccountModel');

var _PaymentBankAccountModel2 = _interopRequireDefault(_PaymentBankAccountModel);

var _PaymentBankAccountRequestModel = require('./models/PaymentBankAccountRequestModel');

var _PaymentBankAccountRequestModel2 = _interopRequireDefault(_PaymentBankAccountRequestModel);

var _PaymentCardModel = require('./models/PaymentCardModel');

var _PaymentCardModel2 = _interopRequireDefault(_PaymentCardModel);

var _PaymentCardSpecModel = require('./models/PaymentCardSpecModel');

var _PaymentCardSpecModel2 = _interopRequireDefault(_PaymentCardSpecModel);

var _PaymentMethodModel = require('./models/PaymentMethodModel');

var _PaymentMethodModel2 = _interopRequireDefault(_PaymentMethodModel);

var _PaymentMethodResultModel = require('./models/PaymentMethodResultModel');

var _PaymentMethodResultModel2 = _interopRequireDefault(_PaymentMethodResultModel);

var _PriceAdjustmentLimitModel = require('./models/PriceAdjustmentLimitModel');

var _PriceAdjustmentLimitModel2 = _interopRequireDefault(_PriceAdjustmentLimitModel);

var _PriceAdjustmentLimitsModel = require('./models/PriceAdjustmentLimitsModel');

var _PriceAdjustmentLimitsModel2 = _interopRequireDefault(_PriceAdjustmentLimitsModel);

var _PriceAdjustmentModel = require('./models/PriceAdjustmentModel');

var _PriceAdjustmentModel2 = _interopRequireDefault(_PriceAdjustmentModel);

var _ProductDetailsLinkModel = require('./models/ProductDetailsLinkModel');

var _ProductDetailsLinkModel2 = _interopRequireDefault(_ProductDetailsLinkModel);

var _ProductItemModel = require('./models/ProductItemModel');

var _ProductItemModel2 = _interopRequireDefault(_ProductItemModel);

var _ProductLinkModel = require('./models/ProductLinkModel');

var _ProductLinkModel2 = _interopRequireDefault(_ProductLinkModel);

var _ProductListEventModel = require('./models/ProductListEventModel');

var _ProductListEventModel2 = _interopRequireDefault(_ProductListEventModel);

var _ProductListItemReferenceModel = require('./models/ProductListItemReferenceModel');

var _ProductListItemReferenceModel2 = _interopRequireDefault(_ProductListItemReferenceModel);

var _ProductListLinkModel = require('./models/ProductListLinkModel');

var _ProductListLinkModel2 = _interopRequireDefault(_ProductListLinkModel);

var _ProductListRegistrantModel = require('./models/ProductListRegistrantModel');

var _ProductListRegistrantModel2 = _interopRequireDefault(_ProductListRegistrantModel);

var _ProductListShippingAddressModel = require('./models/ProductListShippingAddressModel');

var _ProductListShippingAddressModel2 = _interopRequireDefault(_ProductListShippingAddressModel);

var _ProductModel = require('./models/ProductModel');

var _ProductModel2 = _interopRequireDefault(_ProductModel);

var _ProductPromotionModel = require('./models/ProductPromotionModel');

var _ProductPromotionModel2 = _interopRequireDefault(_ProductPromotionModel);

var _ProductResultModel = require('./models/ProductResultModel');

var _ProductResultModel2 = _interopRequireDefault(_ProductResultModel);

var _ProductSearchHitModel = require('./models/ProductSearchHitModel');

var _ProductSearchHitModel2 = _interopRequireDefault(_ProductSearchHitModel);

var _ProductSearchRefinementModel = require('./models/ProductSearchRefinementModel');

var _ProductSearchRefinementModel2 = _interopRequireDefault(_ProductSearchRefinementModel);

var _ProductSearchRefinementValueModel = require('./models/ProductSearchRefinementValueModel');

var _ProductSearchRefinementValueModel2 = _interopRequireDefault(_ProductSearchRefinementValueModel);

var _ProductSearchResultModel = require('./models/ProductSearchResultModel');

var _ProductSearchResultModel2 = _interopRequireDefault(_ProductSearchResultModel);

var _ProductSearchSortingOptionModel = require('./models/ProductSearchSortingOptionModel');

var _ProductSearchSortingOptionModel2 = _interopRequireDefault(_ProductSearchSortingOptionModel);

var _ProductSimpleLinkModel = require('./models/ProductSimpleLinkModel');

var _ProductSimpleLinkModel2 = _interopRequireDefault(_ProductSimpleLinkModel);

var _ProductTypeModel = require('./models/ProductTypeModel');

var _ProductTypeModel2 = _interopRequireDefault(_ProductTypeModel);

var _PromotionModel = require('./models/PromotionModel');

var _PromotionModel2 = _interopRequireDefault(_PromotionModel);

var _PromotionResultModel = require('./models/PromotionResultModel');

var _PromotionResultModel2 = _interopRequireDefault(_PromotionResultModel);

var _PublicProductListItemModel = require('./models/PublicProductListItemModel');

var _PublicProductListItemModel2 = _interopRequireDefault(_PublicProductListItemModel);

var _PublicProductListItemResultModel = require('./models/PublicProductListItemResultModel');

var _PublicProductListItemResultModel2 = _interopRequireDefault(_PublicProductListItemResultModel);

var _PublicProductListLinkModel = require('./models/PublicProductListLinkModel');

var _PublicProductListLinkModel2 = _interopRequireDefault(_PublicProductListLinkModel);

var _PublicProductListModel = require('./models/PublicProductListModel');

var _PublicProductListModel2 = _interopRequireDefault(_PublicProductListModel);

var _PublicProductListResultModel = require('./models/PublicProductListResultModel');

var _PublicProductListResultModel2 = _interopRequireDefault(_PublicProductListResultModel);

var _QueryFilterModel = require('./models/QueryFilterModel');

var _QueryFilterModel2 = _interopRequireDefault(_QueryFilterModel);

var _Range2FilterModel = require('./models/Range2FilterModel');

var _Range2FilterModel2 = _interopRequireDefault(_Range2FilterModel);

var _RangeFilterModel = require('./models/RangeFilterModel');

var _RangeFilterModel2 = _interopRequireDefault(_RangeFilterModel);

var _RecommendationModel = require('./models/RecommendationModel');

var _RecommendationModel2 = _interopRequireDefault(_RecommendationModel);

var _RecommendationTypeModel = require('./models/RecommendationTypeModel');

var _RecommendationTypeModel2 = _interopRequireDefault(_RecommendationTypeModel);

var _ResultPageModel = require('./models/ResultPageModel');

var _ResultPageModel2 = _interopRequireDefault(_ResultPageModel);

var _ShipmentModel = require('./models/ShipmentModel');

var _ShipmentModel2 = _interopRequireDefault(_ShipmentModel);

var _ShippingItemModel = require('./models/ShippingItemModel');

var _ShippingItemModel2 = _interopRequireDefault(_ShippingItemModel);

var _ShippingMethodModel = require('./models/ShippingMethodModel');

var _ShippingMethodModel2 = _interopRequireDefault(_ShippingMethodModel);

var _ShippingMethodResultModel = require('./models/ShippingMethodResultModel');

var _ShippingMethodResultModel2 = _interopRequireDefault(_ShippingMethodResultModel);

var _ShippingPromotionModel = require('./models/ShippingPromotionModel');

var _ShippingPromotionModel2 = _interopRequireDefault(_ShippingPromotionModel);

var _SimpleLinkModel = require('./models/SimpleLinkModel');

var _SimpleLinkModel2 = _interopRequireDefault(_SimpleLinkModel);

var _SiteModel = require('./models/SiteModel');

var _SiteModel2 = _interopRequireDefault(_SiteModel);

var _SortModel = require('./models/SortModel');

var _SortModel2 = _interopRequireDefault(_SortModel);

var _StatusModel = require('./models/StatusModel');

var _StatusModel2 = _interopRequireDefault(_StatusModel);

var _StoreModel = require('./models/StoreModel');

var _StoreModel2 = _interopRequireDefault(_StoreModel);

var _StoreResultModel = require('./models/StoreResultModel');

var _StoreResultModel2 = _interopRequireDefault(_StoreResultModel);

var _SuggestedCategoryModel = require('./models/SuggestedCategoryModel');

var _SuggestedCategoryModel2 = _interopRequireDefault(_SuggestedCategoryModel);

var _SuggestedContentModel = require('./models/SuggestedContentModel');

var _SuggestedContentModel2 = _interopRequireDefault(_SuggestedContentModel);

var _SuggestedPhraseModel = require('./models/SuggestedPhraseModel');

var _SuggestedPhraseModel2 = _interopRequireDefault(_SuggestedPhraseModel);

var _SuggestedProductModel = require('./models/SuggestedProductModel');

var _SuggestedProductModel2 = _interopRequireDefault(_SuggestedProductModel);

var _SuggestedTermModel = require('./models/SuggestedTermModel');

var _SuggestedTermModel2 = _interopRequireDefault(_SuggestedTermModel);

var _SuggestedTermsModel = require('./models/SuggestedTermsModel');

var _SuggestedTermsModel2 = _interopRequireDefault(_SuggestedTermsModel);

var _SuggestionModel = require('./models/SuggestionModel');

var _SuggestionModel2 = _interopRequireDefault(_SuggestionModel);

var _SuggestionResultModel = require('./models/SuggestionResultModel');

var _SuggestionResultModel2 = _interopRequireDefault(_SuggestionResultModel);

var _TermFilterModel = require('./models/TermFilterModel');

var _TermFilterModel2 = _interopRequireDefault(_TermFilterModel);

var _TermQueryModel = require('./models/TermQueryModel');

var _TermQueryModel2 = _interopRequireDefault(_TermQueryModel);

var _TextQueryModel = require('./models/TextQueryModel');

var _TextQueryModel2 = _interopRequireDefault(_TextQueryModel);

var _VariantModel = require('./models/VariantModel');

var _VariantModel2 = _interopRequireDefault(_VariantModel);

var _VariationAttributeModel = require('./models/VariationAttributeModel');

var _VariationAttributeModel2 = _interopRequireDefault(_VariationAttributeModel);

var _VariationAttributeValueModel = require('./models/VariationAttributeValueModel');

var _VariationAttributeValueModel2 = _interopRequireDefault(_VariationAttributeValueModel);

var _VariationGroupModel = require('./models/VariationGroupModel');

var _VariationGroupModel2 = _interopRequireDefault(_VariationGroupModel);

var _BasketsApi = require('./api/BasketsApi');

var _BasketsApi2 = _interopRequireDefault(_BasketsApi);

var _CategoriesApi = require('./api/CategoriesApi');

var _CategoriesApi2 = _interopRequireDefault(_CategoriesApi);

var _ContentApi = require('./api/ContentApi');

var _ContentApi2 = _interopRequireDefault(_ContentApi);

var _ContentSearchApi = require('./api/ContentSearchApi');

var _ContentSearchApi2 = _interopRequireDefault(_ContentSearchApi);

var _CustomObjectsApi = require('./api/CustomObjectsApi');

var _CustomObjectsApi2 = _interopRequireDefault(_CustomObjectsApi);

var _CustomersApi = require('./api/CustomersApi');

var _CustomersApi2 = _interopRequireDefault(_CustomersApi);

var _FoldersApi = require('./api/FoldersApi');

var _FoldersApi2 = _interopRequireDefault(_FoldersApi);

var _GiftCertificateApi = require('./api/GiftCertificateApi');

var _GiftCertificateApi2 = _interopRequireDefault(_GiftCertificateApi);

var _OrderSearchApi = require('./api/OrderSearchApi');

var _OrderSearchApi2 = _interopRequireDefault(_OrderSearchApi);

var _OrdersApi = require('./api/OrdersApi');

var _OrdersApi2 = _interopRequireDefault(_OrdersApi);

var _PriceAdjustmentLimitsApi = require('./api/PriceAdjustmentLimitsApi');

var _PriceAdjustmentLimitsApi2 = _interopRequireDefault(_PriceAdjustmentLimitsApi);

var _ProductListsApi = require('./api/ProductListsApi');

var _ProductListsApi2 = _interopRequireDefault(_ProductListsApi);

var _ProductSearchApi = require('./api/ProductSearchApi');

var _ProductSearchApi2 = _interopRequireDefault(_ProductSearchApi);

var _ProductsApi = require('./api/ProductsApi');

var _ProductsApi2 = _interopRequireDefault(_ProductsApi);

var _PromotionsApi = require('./api/PromotionsApi');

var _PromotionsApi2 = _interopRequireDefault(_PromotionsApi);

var _SearchSuggestionApi = require('./api/SearchSuggestionApi');

var _SearchSuggestionApi2 = _interopRequireDefault(_SearchSuggestionApi);

var _SessionsApi = require('./api/SessionsApi');

var _SessionsApi2 = _interopRequireDefault(_SessionsApi);

var _SiteApi = require('./api/SiteApi');

var _SiteApi2 = _interopRequireDefault(_SiteApi);

var _StoresApi = require('./api/StoresApi');

var _StoresApi2 = _interopRequireDefault(_StoresApi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
/**
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

exports.ApiClient = _ApiClient2.default;
exports.AuthRequestModel = _AuthRequestModel2.default;
exports.BasketModel = _BasketModel2.default;
exports.BasketPaymentInstrumentRequestModel = _BasketPaymentInstrumentRequestModel2.default;
exports.BasketsResultModel = _BasketsResultModel2.default;
exports.BonusDiscountLineItemModel = _BonusDiscountLineItemModel2.default;
exports.BoolFilterModel = _BoolFilterModel2.default;
exports.BoolQueryModel = _BoolQueryModel2.default;
exports.BundledProductModel = _BundledProductModel2.default;
exports.CategoryModel = _CategoryModel2.default;
exports.CategoryResultModel = _CategoryResultModel2.default;
exports.ContentFolderModel = _ContentFolderModel2.default;
exports.ContentFolderResultModel = _ContentFolderResultModel2.default;
exports.ContentModel = _ContentModel2.default;
exports.ContentResultModel = _ContentResultModel2.default;
exports.ContentSearchRefinementModel = _ContentSearchRefinementModel2.default;
exports.ContentSearchRefinementValueModel = _ContentSearchRefinementValueModel2.default;
exports.ContentSearchResultModel = _ContentSearchResultModel2.default;
exports.CouponItemModel = _CouponItemModel2.default;
exports.CustomObjectModel = _CustomObjectModel2.default;
exports.CustomerAddressLinkModel = _CustomerAddressLinkModel2.default;
exports.CustomerAddressModel = _CustomerAddressModel2.default;
exports.CustomerAddressResultModel = _CustomerAddressResultModel2.default;
exports.CustomerInfoModel = _CustomerInfoModel2.default;
exports.CustomerModel = _CustomerModel2.default;
exports.CustomerOrderResultModel = _CustomerOrderResultModel2.default;
exports.CustomerPaymentCardRequestModel = _CustomerPaymentCardRequestModel2.default;
exports.CustomerPaymentInstrumentModel = _CustomerPaymentInstrumentModel2.default;
exports.CustomerPaymentInstrumentRequestModel = _CustomerPaymentInstrumentRequestModel2.default;
exports.CustomerPaymentInstrumentResultModel = _CustomerPaymentInstrumentResultModel2.default;
exports.CustomerProductListItemLinkModel = _CustomerProductListItemLinkModel2.default;
exports.CustomerProductListItemModel = _CustomerProductListItemModel2.default;
exports.CustomerProductListItemResultModel = _CustomerProductListItemResultModel2.default;
exports.CustomerProductListModel = _CustomerProductListModel2.default;
exports.CustomerProductListRegistrantModel = _CustomerProductListRegistrantModel2.default;
exports.CustomerProductListResultModel = _CustomerProductListResultModel2.default;
exports.CustomerRegistrationModel = _CustomerRegistrationModel2.default;
exports.DiscountModel = _DiscountModel2.default;
exports.FilteredQueryModel = _FilteredQueryModel2.default;
exports.GiftCertificateItemModel = _GiftCertificateItemModel2.default;
exports.GiftCertificateModel = _GiftCertificateModel2.default;
exports.GiftCertificateRequestModel = _GiftCertificateRequestModel2.default;
exports.ImageGroupModel = _ImageGroupModel2.default;
exports.ImageModel = _ImageModel2.default;
exports.InventoryModel = _InventoryModel2.default;
exports.LocaleModel = _LocaleModel2.default;
exports.MasterModel = _MasterModel2.default;
exports.NestedQueryModel = _NestedQueryModel2.default;
exports.NoteModel = _NoteModel2.default;
exports.NotesResultModel = _NotesResultModel2.default;
exports.OptionItemModel = _OptionItemModel2.default;
exports.OptionModel = _OptionModel2.default;
exports.OptionValueModel = _OptionValueModel2.default;
exports.OrderAddressModel = _OrderAddressModel2.default;
exports.OrderModel = _OrderModel2.default;
exports.OrderPaymentCardRequestModel = _OrderPaymentCardRequestModel2.default;
exports.OrderPaymentInstrumentModel = _OrderPaymentInstrumentModel2.default;
exports.OrderPaymentInstrumentRequestModel = _OrderPaymentInstrumentRequestModel2.default;
exports.OrderSearchHitModel = _OrderSearchHitModel2.default;
exports.OrderSearchRequestModel = _OrderSearchRequestModel2.default;
exports.OrderSearchResultModel = _OrderSearchResultModel2.default;
exports.PasswordChangeRequestModel = _PasswordChangeRequestModel2.default;
exports.PasswordResetModel = _PasswordResetModel2.default;
exports.PaymentBankAccountModel = _PaymentBankAccountModel2.default;
exports.PaymentBankAccountRequestModel = _PaymentBankAccountRequestModel2.default;
exports.PaymentCardModel = _PaymentCardModel2.default;
exports.PaymentCardSpecModel = _PaymentCardSpecModel2.default;
exports.PaymentMethodModel = _PaymentMethodModel2.default;
exports.PaymentMethodResultModel = _PaymentMethodResultModel2.default;
exports.PriceAdjustmentLimitModel = _PriceAdjustmentLimitModel2.default;
exports.PriceAdjustmentLimitsModel = _PriceAdjustmentLimitsModel2.default;
exports.PriceAdjustmentModel = _PriceAdjustmentModel2.default;
exports.ProductDetailsLinkModel = _ProductDetailsLinkModel2.default;
exports.ProductItemModel = _ProductItemModel2.default;
exports.ProductLinkModel = _ProductLinkModel2.default;
exports.ProductListEventModel = _ProductListEventModel2.default;
exports.ProductListItemReferenceModel = _ProductListItemReferenceModel2.default;
exports.ProductListLinkModel = _ProductListLinkModel2.default;
exports.ProductListRegistrantModel = _ProductListRegistrantModel2.default;
exports.ProductListShippingAddressModel = _ProductListShippingAddressModel2.default;
exports.ProductModel = _ProductModel2.default;
exports.ProductPromotionModel = _ProductPromotionModel2.default;
exports.ProductResultModel = _ProductResultModel2.default;
exports.ProductSearchHitModel = _ProductSearchHitModel2.default;
exports.ProductSearchRefinementModel = _ProductSearchRefinementModel2.default;
exports.ProductSearchRefinementValueModel = _ProductSearchRefinementValueModel2.default;
exports.ProductSearchResultModel = _ProductSearchResultModel2.default;
exports.ProductSearchSortingOptionModel = _ProductSearchSortingOptionModel2.default;
exports.ProductSimpleLinkModel = _ProductSimpleLinkModel2.default;
exports.ProductTypeModel = _ProductTypeModel2.default;
exports.PromotionModel = _PromotionModel2.default;
exports.PromotionResultModel = _PromotionResultModel2.default;
exports.PublicProductListItemModel = _PublicProductListItemModel2.default;
exports.PublicProductListItemResultModel = _PublicProductListItemResultModel2.default;
exports.PublicProductListLinkModel = _PublicProductListLinkModel2.default;
exports.PublicProductListModel = _PublicProductListModel2.default;
exports.PublicProductListResultModel = _PublicProductListResultModel2.default;
exports.QueryFilterModel = _QueryFilterModel2.default;
exports.Range2FilterModel = _Range2FilterModel2.default;
exports.RangeFilterModel = _RangeFilterModel2.default;
exports.RecommendationModel = _RecommendationModel2.default;
exports.RecommendationTypeModel = _RecommendationTypeModel2.default;
exports.ResultPageModel = _ResultPageModel2.default;
exports.ShipmentModel = _ShipmentModel2.default;
exports.ShippingItemModel = _ShippingItemModel2.default;
exports.ShippingMethodModel = _ShippingMethodModel2.default;
exports.ShippingMethodResultModel = _ShippingMethodResultModel2.default;
exports.ShippingPromotionModel = _ShippingPromotionModel2.default;
exports.SimpleLinkModel = _SimpleLinkModel2.default;
exports.SiteModel = _SiteModel2.default;
exports.SortModel = _SortModel2.default;
exports.StatusModel = _StatusModel2.default;
exports.StoreModel = _StoreModel2.default;
exports.StoreResultModel = _StoreResultModel2.default;
exports.SuggestedCategoryModel = _SuggestedCategoryModel2.default;
exports.SuggestedContentModel = _SuggestedContentModel2.default;
exports.SuggestedPhraseModel = _SuggestedPhraseModel2.default;
exports.SuggestedProductModel = _SuggestedProductModel2.default;
exports.SuggestedTermModel = _SuggestedTermModel2.default;
exports.SuggestedTermsModel = _SuggestedTermsModel2.default;
exports.SuggestionModel = _SuggestionModel2.default;
exports.SuggestionResultModel = _SuggestionResultModel2.default;
exports.TermFilterModel = _TermFilterModel2.default;
exports.TermQueryModel = _TermQueryModel2.default;
exports.TextQueryModel = _TextQueryModel2.default;
exports.VariantModel = _VariantModel2.default;
exports.VariationAttributeModel = _VariationAttributeModel2.default;
exports.VariationAttributeValueModel = _VariationAttributeValueModel2.default;
exports.VariationGroupModel = _VariationGroupModel2.default;
exports.BasketsApi = _BasketsApi2.default;
exports.CategoriesApi = _CategoriesApi2.default;
exports.ContentApi = _ContentApi2.default;
exports.ContentSearchApi = _ContentSearchApi2.default;
exports.CustomObjectsApi = _CustomObjectsApi2.default;
exports.CustomersApi = _CustomersApi2.default;
exports.FoldersApi = _FoldersApi2.default;
exports.GiftCertificateApi = _GiftCertificateApi2.default;
exports.OrderSearchApi = _OrderSearchApi2.default;
exports.OrdersApi = _OrdersApi2.default;
exports.PriceAdjustmentLimitsApi = _PriceAdjustmentLimitsApi2.default;
exports.ProductListsApi = _ProductListsApi2.default;
exports.ProductSearchApi = _ProductSearchApi2.default;
exports.ProductsApi = _ProductsApi2.default;
exports.PromotionsApi = _PromotionsApi2.default;
exports.SearchSuggestionApi = _SearchSuggestionApi2.default;
exports.SessionsApi = _SessionsApi2.default;
exports.SiteApi = _SiteApi2.default;
exports.StoresApi = _StoresApi2.default;