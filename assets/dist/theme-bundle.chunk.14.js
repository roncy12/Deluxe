(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[14],{

/***/ "./assets/js/theme/search.js":
/*!***********************************!*\
  !*** ./assets/js/theme/search.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Search; });
/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");
/* harmony import */ var _catalog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./catalog */ "./assets/js/theme/catalog.js");
/* harmony import */ var _common_faceted_search__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./common/faceted-search */ "./assets/js/theme/common/faceted-search.js");
/* harmony import */ var _common_utils_form_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./common/utils/form-utils */ "./assets/js/theme/common/utils/form-utils.js");
/* harmony import */ var _global_compare_products__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./global/compare-products */ "./assets/js/theme/global/compare-products.js");
/* harmony import */ var _common_utils_url_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./common/utils/url-utils */ "./assets/js/theme/common/utils/url-utils.js");
/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! url */ "./node_modules/url/url.js");
/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(url__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _common_collapsible__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./common/collapsible */ "./assets/js/theme/common/collapsible.js");
/* harmony import */ var jstree__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! jstree */ "./node_modules/jstree/dist/jstree.min.js");
/* harmony import */ var jstree__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(jstree__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _common_nod__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./common/nod */ "./assets/js/theme/common/nod.js");
function _createForOfIteratorHelperLoose(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (it) return (it = it.call(o)).next.bind(it); if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; return function () { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }











var leftArrowKey = 37;
var rightArrowKey = 39;

var Search = /*#__PURE__*/function (_CatalogPage) {
  _inheritsLoose(Search, _CatalogPage);

  function Search() {
    return _CatalogPage.apply(this, arguments) || this;
  }

  var _proto = Search.prototype;

  _proto.formatCategoryTreeForJSTree = function formatCategoryTreeForJSTree(node) {
    var _this = this;

    var nodeData = {
      text: node.data,
      id: node.metadata.id,
      state: {
        selected: node.selected
      }
    };

    if (node.state) {
      nodeData.state.opened = node.state === 'open';
      nodeData.children = true;
    }

    if (node.children) {
      nodeData.children = [];
      node.children.forEach(function (childNode) {
        nodeData.children.push(_this.formatCategoryTreeForJSTree(childNode));
      });
    }

    return nodeData;
  };

  _proto.showProducts = function showProducts(navigate) {
    if (navigate === void 0) {
      navigate = true;
    }

    this.$productListingContainer.removeClass('u-hidden');
    this.$facetedSearchContainer.removeClass('u-hidden');
    this.$contentResultsContainer.addClass('u-hidden');
    $('[data-content-results-toggle]').removeClass('navBar-action-color--active');
    $('[data-content-results-toggle]').addClass('navBar-action');
    $('[data-product-results-toggle]').removeClass('navBar-action');
    $('[data-product-results-toggle]').addClass('navBar-action-color--active');
    this.activateTab($('[data-product-results-toggle]'));

    if (!navigate) {
      return;
    }

    var searchData = $('#search-results-product-count span').data();
    var url = searchData.count > 0 ? searchData.url : _common_utils_url_utils__WEBPACK_IMPORTED_MODULE_5__["default"].replaceParams(searchData.url, {
      page: 1
    });
    _common_utils_url_utils__WEBPACK_IMPORTED_MODULE_5__["default"].goToUrl(url);
  };

  _proto.showContent = function showContent(navigate) {
    if (navigate === void 0) {
      navigate = true;
    }

    this.$contentResultsContainer.removeClass('u-hidden');
    this.$productListingContainer.addClass('u-hidden');
    this.$facetedSearchContainer.addClass('u-hidden');
    $('[data-product-results-toggle]').removeClass('navBar-action-color--active');
    $('[data-product-results-toggle]').addClass('navBar-action');
    $('[data-content-results-toggle]').removeClass('navBar-action');
    $('[data-content-results-toggle]').addClass('navBar-action-color--active');
    this.activateTab($('[data-content-results-toggle]'));

    if (!navigate) {
      return;
    }

    var searchData = $('#search-results-content-count span').data();
    var url = searchData.count > 0 ? searchData.url : _common_utils_url_utils__WEBPACK_IMPORTED_MODULE_5__["default"].replaceParams(searchData.url, {
      page: 1
    });
    _common_utils_url_utils__WEBPACK_IMPORTED_MODULE_5__["default"].goToUrl(url);
  };

  _proto.activateTab = function activateTab($tabToActivate) {
    var $tabsCollection = $('[data-search-page-tabs]').find('[role="tab"]');
    $tabsCollection.each(function (idx, tab) {
      var $tab = $(tab);

      if ($tab.is($tabToActivate)) {
        $tab.removeAttr('tabindex');
        $tab.attr('aria-selected', true);
        return;
      }

      $tab.attr('tabindex', '-1');
      $tab.attr('aria-selected', false);
    });
  };

  _proto.onTabChangeWithArrows = function onTabChangeWithArrows(event) {
    var eventKey = event.which;
    var isLeftOrRightArrowKeydown = eventKey === leftArrowKey || eventKey === rightArrowKey;
    if (!isLeftOrRightArrowKeydown) return;
    var $tabsCollection = $('[data-search-page-tabs]').find('[role="tab"]');
    var isActiveElementNotTab = $tabsCollection.index($(document.activeElement)) === -1;
    if (isActiveElementNotTab) return;
    var $activeTab = $("#" + document.activeElement.id);
    var activeTabIdx = $tabsCollection.index($activeTab);
    var lastTabIdx = $tabsCollection.length - 1;
    var nextTabIdx;

    switch (eventKey) {
      case leftArrowKey:
        nextTabIdx = activeTabIdx === 0 ? lastTabIdx : activeTabIdx - 1;
        break;

      case rightArrowKey:
        nextTabIdx = activeTabIdx === lastTabIdx ? 0 : activeTabIdx + 1;
        break;

      default:
        break;
    }

    $($tabsCollection.get(nextTabIdx)).focus().trigger('click');
  };

  _proto.onReady = function onReady() {
    var _this2 = this;

    Object(_global_compare_products__WEBPACK_IMPORTED_MODULE_4__["default"])(this.context);
    this.arrangeFocusOnSortBy();
    var $searchForm = $('[data-advanced-search-form]');
    var $categoryTreeContainer = $searchForm.find('[data-search-category-tree]');
    var url = url__WEBPACK_IMPORTED_MODULE_6___default.a.parse(window.location.href, true);
    var treeData = [];
    this.$productListingContainer = $('#product-listing-container');
    this.$facetedSearchContainer = $('#faceted-search-container');
    this.$contentResultsContainer = $('#search-results-content'); // Init faceted search

    if ($('#facetedSearch').length > 0) {
      this.initFacetedSearch();
    } else {
      this.onSortBySubmit = this.onSortBySubmit.bind(this);
      _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_0__["hooks"].on('sortBy-submitted', this.onSortBySubmit);
    } // Init collapsibles


    Object(_common_collapsible__WEBPACK_IMPORTED_MODULE_7__["default"])();
    $('[data-product-results-toggle]').on('click', function (event) {
      event.preventDefault();

      _this2.showProducts();
    });
    $('[data-content-results-toggle]').on('click', function (event) {
      event.preventDefault();

      _this2.showContent();
    });
    $('[data-search-page-tabs]').on('keyup', this.onTabChangeWithArrows);

    if (this.$productListingContainer.find('li.product').length === 0 || url.query.section === 'content') {
      this.showContent(false);
    } else {
      this.showProducts(false);
    }

    var validator = this.initValidation($searchForm).bindValidation($searchForm.find('#search_query_adv'));
    this.context.categoryTree.forEach(function (node) {
      treeData.push(_this2.formatCategoryTreeForJSTree(node));
    });
    this.categoryTreeData = treeData;
    this.createCategoryTree($categoryTreeContainer);
    $searchForm.on('submit', function (event) {
      var selectedCategoryIds = $categoryTreeContainer.jstree().get_selected();

      if (!validator.check()) {
        return event.preventDefault();
      }

      $searchForm.find('input[name="category\[\]"]').remove();

      for (var _iterator = _createForOfIteratorHelperLoose(selectedCategoryIds), _step; !(_step = _iterator()).done;) {
        var categoryId = _step.value;
        var input = $('<input>', {
          type: 'hidden',
          name: 'category[]',
          value: categoryId
        });
        $searchForm.append(input);
      }
    });
    var $searchResultsMessage = $("<p\n            class=\"aria-description--hidden\"\n            tabindex=\"-1\"\n            role=\"status\"\n            aria-live=\"polite\"\n            >" + this.context.searchResultsCount + "</p>").prependTo('body');
    setTimeout(function () {
      return $searchResultsMessage.focus();
    }, 100);
  };

  _proto.loadTreeNodes = function loadTreeNodes(node, cb) {
    var _this3 = this;

    $.ajax({
      url: '/remote/v1/category-tree',
      data: {
        selectedCategoryId: node.id,
        prefix: 'category'
      },
      headers: {
        'x-xsrf-token': window.BCData && window.BCData.csrf_token ? window.BCData.csrf_token : ''
      }
    }).done(function (data) {
      var formattedResults = [];
      data.forEach(function (dataNode) {
        formattedResults.push(_this3.formatCategoryTreeForJSTree(dataNode));
      });
      cb(formattedResults);
    });
  };

  _proto.createCategoryTree = function createCategoryTree($container) {
    var _this4 = this;

    var treeOptions = {
      core: {
        data: function data(node, cb) {
          // Root node
          if (node.id === '#') {
            cb(_this4.categoryTreeData);
          } else {
            // Lazy loaded children
            _this4.loadTreeNodes(node, cb);
          }
        },
        themes: {
          icons: true
        }
      },
      checkbox: {
        three_state: false
      },
      plugins: ['checkbox']
    };
    $container.jstree(treeOptions);
  };

  _proto.initFacetedSearch = function initFacetedSearch() {
    var _this5 = this;

    // eslint-disable-next-line object-curly-newline
    var _this$context = this.context,
        onMinPriceError = _this$context.onMinPriceError,
        onMaxPriceError = _this$context.onMaxPriceError,
        minPriceNotEntered = _this$context.minPriceNotEntered,
        maxPriceNotEntered = _this$context.maxPriceNotEntered,
        onInvalidPrice = _this$context.onInvalidPrice;
    var $productListingContainer = $('#product-listing-container');
    var $contentListingContainer = $('#search-results-content');
    var $facetedSearchContainer = $('#faceted-search-container');
    var $searchHeading = $('#search-results-heading');
    var $searchCount = $('#search-results-product-count');
    var $contentCount = $('#search-results-content-count');
    var productsPerPage = this.context.searchProductsPerPage;
    var requestOptions = {
      template: {
        productListing: 'search/product-listing',
        contentListing: 'search/content-listing',
        sidebar: 'search/sidebar',
        heading: 'search/heading',
        productCount: 'search/product-count',
        contentCount: 'search/content-count'
      },
      config: {
        product_results: {
          limit: productsPerPage
        }
      },
      showMore: 'search/show-more'
    };
    this.facetedSearch = new _common_faceted_search__WEBPACK_IMPORTED_MODULE_2__["default"](requestOptions, function (content) {
      $searchHeading.html(content.heading);
      var url = url__WEBPACK_IMPORTED_MODULE_6___default.a.parse(window.location.href, true);

      if (url.query.section === 'content') {
        $contentListingContainer.html(content.contentListing);
        $contentCount.html(content.contentCount);

        _this5.showContent(false);
      } else {
        $productListingContainer.html(content.productListing);
        $facetedSearchContainer.html(content.sidebar);
        $searchCount.html(content.productCount);

        _this5.showProducts(false);
      }

      $('body').triggerHandler('compareReset');
      $('html, body').animate({
        scrollTop: 0
      }, 100);
    }, {
      validationErrorMessages: {
        onMinPriceError: onMinPriceError,
        onMaxPriceError: onMaxPriceError,
        minPriceNotEntered: minPriceNotEntered,
        maxPriceNotEntered: maxPriceNotEntered,
        onInvalidPrice: onInvalidPrice
      }
    });
  };

  _proto.initValidation = function initValidation($form) {
    this.$form = $form;
    this.validator = Object(_common_nod__WEBPACK_IMPORTED_MODULE_9__["default"])({
      submit: $form,
      tap: _common_utils_form_utils__WEBPACK_IMPORTED_MODULE_3__["announceInputErrorMessage"]
    });
    return this;
  };

  _proto.bindValidation = function bindValidation($element) {
    if (this.validator) {
      this.validator.add({
        selector: $element,
        validate: 'presence',
        errorMessage: $element.data('errorMessage')
      });
    }

    return this;
  };

  _proto.check = function check() {
    if (this.validator) {
      this.validator.performCheck();
      return this.validator.areAll('valid');
    }

    return false;
  };

  return Search;
}(_catalog__WEBPACK_IMPORTED_MODULE_1__["default"]);


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js")))

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGhlbWUvc2VhcmNoLmpzIl0sIm5hbWVzIjpbImxlZnRBcnJvd0tleSIsInJpZ2h0QXJyb3dLZXkiLCJTZWFyY2giLCJmb3JtYXRDYXRlZ29yeVRyZWVGb3JKU1RyZWUiLCJub2RlIiwibm9kZURhdGEiLCJ0ZXh0IiwiZGF0YSIsImlkIiwibWV0YWRhdGEiLCJzdGF0ZSIsInNlbGVjdGVkIiwib3BlbmVkIiwiY2hpbGRyZW4iLCJmb3JFYWNoIiwiY2hpbGROb2RlIiwicHVzaCIsInNob3dQcm9kdWN0cyIsIm5hdmlnYXRlIiwiJHByb2R1Y3RMaXN0aW5nQ29udGFpbmVyIiwicmVtb3ZlQ2xhc3MiLCIkZmFjZXRlZFNlYXJjaENvbnRhaW5lciIsIiRjb250ZW50UmVzdWx0c0NvbnRhaW5lciIsImFkZENsYXNzIiwiJCIsImFjdGl2YXRlVGFiIiwic2VhcmNoRGF0YSIsInVybCIsImNvdW50IiwidXJsVXRpbHMiLCJyZXBsYWNlUGFyYW1zIiwicGFnZSIsImdvVG9VcmwiLCJzaG93Q29udGVudCIsIiR0YWJUb0FjdGl2YXRlIiwiJHRhYnNDb2xsZWN0aW9uIiwiZmluZCIsImVhY2giLCJpZHgiLCJ0YWIiLCIkdGFiIiwiaXMiLCJyZW1vdmVBdHRyIiwiYXR0ciIsIm9uVGFiQ2hhbmdlV2l0aEFycm93cyIsImV2ZW50IiwiZXZlbnRLZXkiLCJ3aGljaCIsImlzTGVmdE9yUmlnaHRBcnJvd0tleWRvd24iLCJpc0FjdGl2ZUVsZW1lbnROb3RUYWIiLCJpbmRleCIsImRvY3VtZW50IiwiYWN0aXZlRWxlbWVudCIsIiRhY3RpdmVUYWIiLCJhY3RpdmVUYWJJZHgiLCJsYXN0VGFiSWR4IiwibGVuZ3RoIiwibmV4dFRhYklkeCIsImdldCIsImZvY3VzIiwidHJpZ2dlciIsIm9uUmVhZHkiLCJjb21wYXJlUHJvZHVjdHMiLCJjb250ZXh0IiwiYXJyYW5nZUZvY3VzT25Tb3J0QnkiLCIkc2VhcmNoRm9ybSIsIiRjYXRlZ29yeVRyZWVDb250YWluZXIiLCJVcmwiLCJwYXJzZSIsIndpbmRvdyIsImxvY2F0aW9uIiwiaHJlZiIsInRyZWVEYXRhIiwiaW5pdEZhY2V0ZWRTZWFyY2giLCJvblNvcnRCeVN1Ym1pdCIsImJpbmQiLCJob29rcyIsIm9uIiwiY29sbGFwc2libGVGYWN0b3J5IiwicHJldmVudERlZmF1bHQiLCJxdWVyeSIsInNlY3Rpb24iLCJ2YWxpZGF0b3IiLCJpbml0VmFsaWRhdGlvbiIsImJpbmRWYWxpZGF0aW9uIiwiY2F0ZWdvcnlUcmVlIiwiY2F0ZWdvcnlUcmVlRGF0YSIsImNyZWF0ZUNhdGVnb3J5VHJlZSIsInNlbGVjdGVkQ2F0ZWdvcnlJZHMiLCJqc3RyZWUiLCJnZXRfc2VsZWN0ZWQiLCJjaGVjayIsInJlbW92ZSIsImNhdGVnb3J5SWQiLCJpbnB1dCIsInR5cGUiLCJuYW1lIiwidmFsdWUiLCJhcHBlbmQiLCIkc2VhcmNoUmVzdWx0c01lc3NhZ2UiLCJzZWFyY2hSZXN1bHRzQ291bnQiLCJwcmVwZW5kVG8iLCJzZXRUaW1lb3V0IiwibG9hZFRyZWVOb2RlcyIsImNiIiwiYWpheCIsInNlbGVjdGVkQ2F0ZWdvcnlJZCIsInByZWZpeCIsImhlYWRlcnMiLCJCQ0RhdGEiLCJjc3JmX3Rva2VuIiwiZG9uZSIsImZvcm1hdHRlZFJlc3VsdHMiLCJkYXRhTm9kZSIsIiRjb250YWluZXIiLCJ0cmVlT3B0aW9ucyIsImNvcmUiLCJ0aGVtZXMiLCJpY29ucyIsImNoZWNrYm94IiwidGhyZWVfc3RhdGUiLCJwbHVnaW5zIiwib25NaW5QcmljZUVycm9yIiwib25NYXhQcmljZUVycm9yIiwibWluUHJpY2VOb3RFbnRlcmVkIiwibWF4UHJpY2VOb3RFbnRlcmVkIiwib25JbnZhbGlkUHJpY2UiLCIkY29udGVudExpc3RpbmdDb250YWluZXIiLCIkc2VhcmNoSGVhZGluZyIsIiRzZWFyY2hDb3VudCIsIiRjb250ZW50Q291bnQiLCJwcm9kdWN0c1BlclBhZ2UiLCJzZWFyY2hQcm9kdWN0c1BlclBhZ2UiLCJyZXF1ZXN0T3B0aW9ucyIsInRlbXBsYXRlIiwicHJvZHVjdExpc3RpbmciLCJjb250ZW50TGlzdGluZyIsInNpZGViYXIiLCJoZWFkaW5nIiwicHJvZHVjdENvdW50IiwiY29udGVudENvdW50IiwiY29uZmlnIiwicHJvZHVjdF9yZXN1bHRzIiwibGltaXQiLCJzaG93TW9yZSIsImZhY2V0ZWRTZWFyY2giLCJGYWNldGVkU2VhcmNoIiwiY29udGVudCIsImh0bWwiLCJ0cmlnZ2VySGFuZGxlciIsImFuaW1hdGUiLCJzY3JvbGxUb3AiLCJ2YWxpZGF0aW9uRXJyb3JNZXNzYWdlcyIsIiRmb3JtIiwibm9kIiwic3VibWl0IiwidGFwIiwiYW5ub3VuY2VJbnB1dEVycm9yTWVzc2FnZSIsIiRlbGVtZW50IiwiYWRkIiwic2VsZWN0b3IiLCJ2YWxpZGF0ZSIsImVycm9yTWVzc2FnZSIsInBlcmZvcm1DaGVjayIsImFyZUFsbCIsIkNhdGFsb2dQYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxZQUFZLEdBQUcsRUFBckI7QUFDQSxJQUFNQyxhQUFhLEdBQUcsRUFBdEI7O0lBRXFCQyxNOzs7Ozs7Ozs7U0FDakJDLDJCLEdBQUEscUNBQTRCQyxJQUE1QixFQUFrQztJQUFBOztJQUM5QixJQUFNQyxRQUFRLEdBQUc7TUFDYkMsSUFBSSxFQUFFRixJQUFJLENBQUNHLElBREU7TUFFYkMsRUFBRSxFQUFFSixJQUFJLENBQUNLLFFBQUwsQ0FBY0QsRUFGTDtNQUdiRSxLQUFLLEVBQUU7UUFDSEMsUUFBUSxFQUFFUCxJQUFJLENBQUNPO01BRFo7SUFITSxDQUFqQjs7SUFRQSxJQUFJUCxJQUFJLENBQUNNLEtBQVQsRUFBZ0I7TUFDWkwsUUFBUSxDQUFDSyxLQUFULENBQWVFLE1BQWYsR0FBd0JSLElBQUksQ0FBQ00sS0FBTCxLQUFlLE1BQXZDO01BQ0FMLFFBQVEsQ0FBQ1EsUUFB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QkEsa0JBSnFCO1FBS3JCQyxjQUFjLEVBQWRBO01BTHFCO0lBRDFCLENBcEJrQixDQUFyQjtFQTZCSCxDOztTQUVEM0MsYyxHQUFBLHdCQUFlc0UsS0FBZixFQUFzQjtJQUNsQixLQUFLQSxLQUFMLEdBQWFBLEtBQWI7SUFDQSxLQUFLdkUsU0FBTCxHQUFpQndFLDJEQUFHLENBQUM7TUFDakJDLE1BQU0sRUFBRUYsS0FEUztNQUVqQkcsR0FBRyxFQUFFQyxrRkFBeUJBO0lBRmIsQ0FBRCxDQUFwQjtJQUtBLE9BQU8sSUFBUDtFQUNILEM7O1NBRUR6RSxjLEdBQUEsd0JBQWUwRSxRQUFmLEVBQXlCO0lBQ3JCLElBQUksS0FBSzVFLFNBQVQsRUFBb0I7TUFDaEIsS0FBS0EsU0FBTCxDQUFlNkUsR0FBZixDQUFtQjtRQUNmQyxRQUFRLEVBQUVGLFFBREs7UUFFZkcsUUFBUSxFQUFFLFVBRks7UUFHZkMsWUFBWSxFQUFFSixRQUFRLENBQUN2SixJQUFULENBQWMsY0FBZDtNQUhDLENBQW5CO0lBS0g7O0lBRUQsT0FBTyxJQUFQO0VBQ0gsQzs7U0FFRG9GLEssR0FBQSxpQkFBUTtJQUNKLElBQUksS0FBS1QsU0FBVCxFQUFvQjtNQUNoQixLQUFLQSxTQUFMLENBQWVpRixZQUFmO01BQ0EsT0FBTyxLQUFLakYsU0FBTCxDQUFla0YsTUFBZixDQUFzQixPQUF0QixDQUFQO0lBQ0g7O0lBRUQsT0FBTyxLQUFQO0VBQ0gsQzs7O0VBbFYrQkMsZ0QiLCJmaWxlIjoidGhlbWUtYnVuZGxlLmNodW5rLjE0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaG9va3MgfSBmcm9tICdAYmlnY29tbWVyY2Uvc3RlbmNpbC11dGlscyc7XHJcbmltcG9ydCBDYXRhbG9nUGFnZSBmcm9tICcuL2NhdGFsb2cnO1xyXG5pbXBvcnQgRmFjZXRlZFNlYXJjaCBmcm9tICcuL2NvbW1vbi9mYWNldGVkLXNlYXJjaCc7XHJcbmltcG9ydCB7IGFubm91bmNlSW5wdXRFcnJvck1lc3NhZ2UgfSBmcm9tICcuL2NvbW1vbi91dGlscy9mb3JtLXV0aWxzJztcclxuaW1wb3J0IGNvbXBhcmVQcm9kdWN0cyBmcm9tICcuL2dsb2JhbC9jb21wYXJlLXByb2R1Y3RzJztcclxuaW1wb3J0IHVybFV0aWxzIGZyb20gJy4vY29tbW9uL3V0aWxzL3VybC11dGlscyc7XHJcbmltcG9ydCBVcmwgZnJvbSAndXJsJztcclxuaW1wb3J0IGNvbGxhcHNpYmxlRmFjdG9yeSBmcm9tICcuL2NvbW1vbi9jb2xsYXBzaWJsZSc7XHJcbmltcG9ydCAnanN0cmVlJztcclxuaW1wb3J0IG5vZCBmcm9tICcuL2NvbW1vbi9ub2QnO1xyXG5cclxuY29uc3QgbGVmdEFycm93S2V5ID0gMzc7XHJcbmNvbnN0IHJpZ2h0QXJyb3dLZXkgPSAzOTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlYXJjaCBleHRlbmRzIENhdGFsb2dQYWdlIHtcclxuICAgIGZvcm1hdENhdGVnb3J5VHJlZUZvckpTVHJlZShub2RlKSB7XHJcbiAgICAgICAgY29uc3Qgbm9kZURhdGEgPSB7XHJcbiAgICAgICAgICAgIHRleHQ6IG5vZGUuZGF0YSxcclxuICAgICAgICAgICAgaWQ6IG5vZGUubWV0YWRhdGEuaWQsXHJcbiAgICAgICAgICAgIHN0YXRlOiB7XHJcbiAgICAgICAgICAgICAgICBzZWxlY3RlZDogbm9kZS5zZWxlY3RlZCxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBpZiAobm9kZS5zdGF0ZSkge1xyXG4gICAgICAgICAgICBub2RlRGF0YS5zdGF0ZS5vcGVuZWQgPSBub2RlLnN0YXRlID09PSAnb3Blbic7XHJcbiAgICAgICAgICAgIG5vZGVEYXRhLmNoaWxkcmVuID0gdHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChub2RlLmNoaWxkcmVuKSB7XHJcbiAgICAgICAgICAgIG5vZGVEYXRhLmNoaWxkcmVuID0gW107XHJcbiAgICAgICAgICAgIG5vZGUuY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGROb2RlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBub2RlRGF0YS5jaGlsZHJlbi5wdXNoKHRoaXMuZm9ybWF0Q2F0ZWdvcnlUcmVlRm9ySlNUcmVlKGNoaWxkTm9kZSkpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBub2RlRGF0YTtcclxuICAgIH1cclxuXHJcbiAgICBzaG93UHJvZHVjdHMobmF2aWdhdGUgPSB0cnVlKSB7XHJcbiAgICAgICAgdGhpcy4kcHJvZHVjdExpc3RpbmdDb250YWluZXIucmVtb3ZlQ2xhc3MoJ3UtaGlkZGVuJyk7XHJcbiAgICAgICAgdGhpcy4kZmFjZXRlZFNlYXJjaENvbnRhaW5lci5yZW1vdmVDbGFzcygndS1oaWRkZW4nKTtcclxuICAgICAgICB0aGlzLiRjb250ZW50UmVzdWx0c0NvbnRhaW5lci5hZGRDbGFzcygndS1oaWRkZW4nKTtcclxuXHJcbiAgICAgICAgJCgnW2RhdGEtY29udGVudC1yZXN1bHRzLXRvZ2dsZV0nKS5yZW1vdmVDbGFzcygnbmF2QmFyLWFjdGlvbi1jb2xvci0tYWN0aXZlJyk7XHJcbiAgICAgICAgJCgnW2RhdGEtY29udGVudC1yZXN1bHRzLXRvZ2dsZV0nKS5hZGRDbGFzcygnbmF2QmFyLWFjdGlvbicpO1xyXG5cclxuICAgICAgICAkKCdbZGF0YS1wcm9kdWN0LXJlc3VsdHMtdG9nZ2xlXScpLnJlbW92ZUNsYXNzKCduYXZCYXItYWN0aW9uJyk7XHJcbiAgICAgICAgJCgnW2RhdGEtcHJvZHVjdC1yZXN1bHRzLXRvZ2dsZV0nKS5hZGRDbGFzcygnbmF2QmFyLWFjdGlvbi1jb2xvci0tYWN0aXZlJyk7XHJcblxyXG4gICAgICAgIHRoaXMuYWN0aXZhdGVUYWIoJCgnW2RhdGEtcHJvZHVjdC1yZXN1bHRzLXRvZ2dsZV0nKSk7XHJcblxyXG4gICAgICAgIGlmICghbmF2aWdhdGUpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3Qgc2VhcmNoRGF0YSA9ICQoJyNzZWFyY2gtcmVzdWx0cy1wcm9kdWN0LWNvdW50IHNwYW4nKS5kYXRhKCk7XHJcbiAgICAgICAgY29uc3QgdXJsID0gKHNlYXJjaERhdGEuY291bnQgPiAwKSA/IHNlYXJjaERhdGEudXJsIDogdXJsVXRpbHMucmVwbGFjZVBhcmFtcyhzZWFyY2hEYXRhLnVybCwge1xyXG4gICAgICAgICAgICBwYWdlOiAxLFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB1cmxVdGlscy5nb1RvVXJsKHVybCk7XHJcbiAgICB9XHJcblxyXG4gICAgc2hvd0NvbnRlbnQobmF2aWdhdGUgPSB0cnVlKSB7XHJcbiAgICAgICAgdGhpcy4kY29udGVudFJlc3VsdHNDb250YWluZXIucmVtb3ZlQ2xhc3MoJ3UtaGlkZGVuJyk7XHJcbiAgICAgICAgdGhpcy4kcHJvZHVjdExpc3RpbmdDb250YWluZXIuYWRkQ2xhc3MoJ3UtaGlkZGVuJyk7XHJcbiAgICAgICAgdGhpcy4kZmFjZXRlZFNlYXJjaENvbnRhaW5lci5hZGRDbGFzcygndS1oaWRkZW4nKTtcclxuXHJcbiAgICAgICAgJCgnW2RhdGEtcHJvZHVjdC1yZXN1bHRzLXRvZ2dsZV0nKS5yZW1vdmVDbGFzcygnbmF2QmFyLWFjdGlvbi1jb2xvci0tYWN0aXZlJyk7XHJcbiAgICAgICAgJCgnW2RhdGEtcHJvZHVjdC1yZXN1bHRzLXRvZ2dsZV0nKS5hZGRDbGFzcygnbmF2QmFyLWFjdGlvbicpO1xyXG5cclxuICAgICAgICAkKCdbZGF0YS1jb250ZW50LXJlc3VsdHMtdG9nZ2xlXScpLnJlbW92ZUNsYXNzKCduYXZCYXItYWN0aW9uJyk7XHJcbiAgICAgICAgJCgnW2RhdGEtY29udGVudC1yZXN1bHRzLXRvZ2dsZV0nKS5hZGRDbGFzcygnbmF2QmFyLWFjdGlvbi1jb2xvci0tYWN0aXZlJyk7XHJcblxyXG4gICAgICAgIHRoaXMuYWN0aXZhdGVUYWIoJCgnW2RhdGEtY29udGVudC1yZXN1bHRzLXRvZ2dsZV0nKSk7XHJcblxyXG4gICAgICAgIGlmICghbmF2aWdhdGUpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3Qgc2VhcmNoRGF0YSA9ICQoJyNzZWFyY2gtcmVzdWx0cy1jb250ZW50LWNvdW50IHNwYW4nKS5kYXRhKCk7XHJcbiAgICAgICAgY29uc3QgdXJsID0gKHNlYXJjaERhdGEuY291bnQgPiAwKSA/IHNlYXJjaERhdGEudXJsIDogdXJsVXRpbHMucmVwbGFjZVBhcmFtcyhzZWFyY2hEYXRhLnVybCwge1xyXG4gICAgICAgICAgICBwYWdlOiAxLFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB1cmxVdGlscy5nb1RvVXJsKHVybCk7XHJcbiAgICB9XHJcblxyXG4gICAgYWN0aXZhdGVUYWIoJHRhYlRvQWN0aXZhdGUpIHtcclxuICAgICAgICBjb25zdCAkdGFic0NvbGxlY3Rpb24gPSAkKCdbZGF0YS1zZWFyY2gtcGFnZS10YWJzXScpLmZpbmQoJ1tyb2xlPVwidGFiXCJdJyk7XHJcblxyXG4gICAgICAgICR0YWJzQ29sbGVjdGlvbi5lYWNoKChpZHgsIHRhYikgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCAkdGFiID0gJCh0YWIpO1xyXG5cclxuICAgICAgICAgICAgaWYgKCR0YWIuaXMoJHRhYlRvQWN0aXZhdGUpKSB7XHJcbiAgICAgICAgICAgICAgICAkdGFiLnJlbW92ZUF0dHIoJ3RhYmluZGV4Jyk7XHJcbiAgICAgICAgICAgICAgICAkdGFiLmF0dHIoJ2FyaWEtc2VsZWN0ZWQnLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgJHRhYi5hdHRyKCd0YWJpbmRleCcsICctMScpO1xyXG4gICAgICAgICAgICAkdGFiLmF0dHIoJ2FyaWEtc2VsZWN0ZWQnLCBmYWxzZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25UYWJDaGFuZ2VXaXRoQXJyb3dzKGV2ZW50KSB7XHJcbiAgICAgICAgY29uc3QgZXZlbnRLZXkgPSBldmVudC53aGljaDtcclxuICAgICAgICBjb25zdCBpc0xlZnRPclJpZ2h0QXJyb3dLZXlkb3duID0gZXZlbnRLZXkgPT09IGxlZnRBcnJvd0tleVxyXG4gICAgICAgICAgICB8fCBldmVudEtleSA9PT0gcmlnaHRBcnJvd0tleTtcclxuICAgICAgICBpZiAoIWlzTGVmdE9yUmlnaHRBcnJvd0tleWRvd24pIHJldHVybjtcclxuXHJcbiAgICAgICAgY29uc3QgJHRhYnNDb2xsZWN0aW9uID0gJCgnW2RhdGEtc2VhcmNoLXBhZ2UtdGFic10nKS5maW5kKCdbcm9sZT1cInRhYlwiXScpO1xyXG5cclxuICAgICAgICBjb25zdCBpc0FjdGl2ZUVsZW1lbnROb3RUYWIgPSAkdGFic0NvbGxlY3Rpb24uaW5kZXgoJChkb2N1bWVudC5hY3RpdmVFbGVtZW50KSkgPT09IC0xO1xyXG4gICAgICAgIGlmIChpc0FjdGl2ZUVsZW1lbnROb3RUYWIpIHJldHVybjtcclxuXHJcbiAgICAgICAgY29uc3QgJGFjdGl2ZVRhYiA9ICQoYCMke2RvY3VtZW50LmFjdGl2ZUVsZW1lbnQuaWR9YCk7XHJcbiAgICAgICAgY29uc3QgYWN0aXZlVGFiSWR4ID0gJHRhYnNDb2xsZWN0aW9uLmluZGV4KCRhY3RpdmVUYWIpO1xyXG4gICAgICAgIGNvbnN0IGxhc3RUYWJJZHggPSAkdGFic0NvbGxlY3Rpb24ubGVuZ3RoIC0gMTtcclxuXHJcbiAgICAgICAgbGV0IG5leHRUYWJJZHg7XHJcbiAgICAgICAgc3dpdGNoIChldmVudEtleSkge1xyXG4gICAgICAgIGNhc2UgbGVmdEFycm93S2V5OlxyXG4gICAgICAgICAgICBuZXh0VGFiSWR4ID0gYWN0aXZlVGFiSWR4ID09PSAwID8gbGFzdFRhYklkeCA6IGFjdGl2ZVRhYklkeCAtIDE7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgcmlnaHRBcnJvd0tleTpcclxuICAgICAgICAgICAgbmV4dFRhYklkeCA9IGFjdGl2ZVRhYklkeCA9PT0gbGFzdFRhYklkeCA/IDAgOiBhY3RpdmVUYWJJZHggKyAxO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBkZWZhdWx0OiBicmVhaztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICQoJHRhYnNDb2xsZWN0aW9uLmdldChuZXh0VGFiSWR4KSkuZm9jdXMoKS50cmlnZ2VyKCdjbGljaycpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uUmVhZHkoKSB7XHJcbiAgICAgICAgY29tcGFyZVByb2R1Y3RzKHRoaXMuY29udGV4dCk7XHJcbiAgICAgICAgdGhpcy5hcnJhbmdlRm9jdXNPblNvcnRCeSgpO1xyXG5cclxuICAgICAgICBjb25zdCAkc2VhcmNoRm9ybSA9ICQoJ1tkYXRhLWFkdmFuY2VkLXNlYXJjaC1mb3JtXScpO1xyXG4gICAgICAgIGNvbnN0ICRjYXRlZ29yeVRyZWVDb250YWluZXIgPSAkc2VhcmNoRm9ybS5maW5kKCdbZGF0YS1zZWFyY2gtY2F0ZWdvcnktdHJlZV0nKTtcclxuICAgICAgICBjb25zdCB1cmwgPSBVcmwucGFyc2Uod2luZG93LmxvY2F0aW9uLmhyZWYsIHRydWUpO1xyXG4gICAgICAgIGNvbnN0IHRyZWVEYXRhID0gW107XHJcbiAgICAgICAgdGhpcy4kcHJvZHVjdExpc3RpbmdDb250YWluZXIgPSAkKCcjcHJvZHVjdC1saXN0aW5nLWNvbnRhaW5lcicpO1xyXG4gICAgICAgIHRoaXMuJGZhY2V0ZWRTZWFyY2hDb250YWluZXIgPSAkKCcjZmFjZXRlZC1zZWFyY2gtY29udGFpbmVyJyk7XHJcbiAgICAgICAgdGhpcy4kY29udGVudFJlc3VsdHNDb250YWluZXIgPSAkKCcjc2VhcmNoLXJlc3VsdHMtY29udGVudCcpO1xyXG5cclxuICAgICAgICAvLyBJbml0IGZhY2V0ZWQgc2VhcmNoXHJcbiAgICAgICAgaWYgKCQoJyNmYWNldGVkU2VhcmNoJykubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICB0aGlzLmluaXRGYWNldGVkU2VhcmNoKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5vblNvcnRCeVN1Ym1pdCA9IHRoaXMub25Tb3J0QnlTdWJtaXQuYmluZCh0aGlzKTtcclxuICAgICAgICAgICAgaG9va3Mub24oJ3NvcnRCeS1zdWJtaXR0ZWQnLCB0aGlzLm9uU29ydEJ5U3VibWl0KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIEluaXQgY29sbGFwc2libGVzXHJcbiAgICAgICAgY29sbGFwc2libGVGYWN0b3J5KCk7XHJcblxyXG4gICAgICAgICQoJ1tkYXRhLXByb2R1Y3QtcmVzdWx0cy10b2dnbGVdJykub24oJ2NsaWNrJywgZXZlbnQgPT4ge1xyXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICB0aGlzLnNob3dQcm9kdWN0cygpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAkKCdbZGF0YS1jb250ZW50LXJlc3VsdHMtdG9nZ2xlXScpLm9uKCdjbGljaycsIGV2ZW50ID0+IHtcclxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgdGhpcy5zaG93Q29udGVudCgpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAkKCdbZGF0YS1zZWFyY2gtcGFnZS10YWJzXScpLm9uKCdrZXl1cCcsIHRoaXMub25UYWJDaGFuZ2VXaXRoQXJyb3dzKTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuJHByb2R1Y3RMaXN0aW5nQ29udGFpbmVyLmZpbmQoJ2xpLnByb2R1Y3QnKS5sZW5ndGggPT09IDAgfHwgdXJsLnF1ZXJ5LnNlY3Rpb24gPT09ICdjb250ZW50Jykge1xyXG4gICAgICAgICAgICB0aGlzLnNob3dDb250ZW50KGZhbHNlKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnNob3dQcm9kdWN0cyhmYWxzZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCB2YWxpZGF0b3IgPSB0aGlzLmluaXRWYWxpZGF0aW9uKCRzZWFyY2hGb3JtKVxyXG4gICAgICAgICAgICAuYmluZFZhbGlkYXRpb24oJHNlYXJjaEZvcm0uZmluZCgnI3NlYXJjaF9xdWVyeV9hZHYnKSk7XHJcblxyXG4gICAgICAgIHRoaXMuY29udGV4dC5jYXRlZ29yeVRyZWUuZm9yRWFjaCgobm9kZSkgPT4ge1xyXG4gICAgICAgICAgICB0cmVlRGF0YS5wdXNoKHRoaXMuZm9ybWF0Q2F0ZWdvcnlUcmVlRm9ySlNUcmVlKG5vZGUpKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5jYXRlZ29yeVRyZWVEYXRhID0gdHJlZURhdGE7XHJcbiAgICAgICAgdGhpcy5jcmVhdGVDYXRlZ29yeVRyZWUoJGNhdGVnb3J5VHJlZUNvbnRhaW5lcik7XHJcblxyXG4gICAgICAgICRzZWFyY2hGb3JtLm9uKCdzdWJtaXQnLCBldmVudCA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHNlbGVjdGVkQ2F0ZWdvcnlJZHMgPSAkY2F0ZWdvcnlUcmVlQ29udGFpbmVyLmpzdHJlZSgpLmdldF9zZWxlY3RlZCgpO1xyXG5cclxuICAgICAgICAgICAgaWYgKCF2YWxpZGF0b3IuY2hlY2soKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICRzZWFyY2hGb3JtLmZpbmQoJ2lucHV0W25hbWU9XCJjYXRlZ29yeVxcW1xcXVwiXScpLnJlbW92ZSgpO1xyXG5cclxuICAgICAgICAgICAgZm9yIChjb25zdCBjYXRlZ29yeUlkIG9mIHNlbGVjdGVkQ2F0ZWdvcnlJZHMpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGlucHV0ID0gJCgnPGlucHV0PicsIHtcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnaGlkZGVuJyxcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnY2F0ZWdvcnlbXScsXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGNhdGVnb3J5SWQsXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAkc2VhcmNoRm9ybS5hcHBlbmQoaW5wdXQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGNvbnN0ICRzZWFyY2hSZXN1bHRzTWVzc2FnZSA9ICQoYDxwXHJcbiAgICAgICAgICAgIGNsYXNzPVwiYXJpYS1kZXNjcmlwdGlvbi0taGlkZGVuXCJcclxuICAgICAgICAgICAgdGFiaW5kZXg9XCItMVwiXHJcbiAgICAgICAgICAgIHJvbGU9XCJzdGF0dXNcIlxyXG4gICAgICAgICAgICBhcmlhLWxpdmU9XCJwb2xpdGVcIlxyXG4gICAgICAgICAgICA+JHt0aGlzLmNvbnRleHQuc2VhcmNoUmVzdWx0c0NvdW50fTwvcD5gKVxyXG4gICAgICAgICAgICAucHJlcGVuZFRvKCdib2R5Jyk7XHJcblxyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4gJHNlYXJjaFJlc3VsdHNNZXNzYWdlLmZvY3VzKCksIDEwMCk7XHJcbiAgICB9XHJcblxyXG4gICAgbG9hZFRyZWVOb2Rlcyhub2RlLCBjYikge1xyXG4gICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgIHVybDogJy9yZW1vdGUvdjEvY2F0ZWdvcnktdHJlZScsXHJcbiAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgIHNlbGVjdGVkQ2F0ZWdvcnlJZDogbm9kZS5pZCxcclxuICAgICAgICAgICAgICAgIHByZWZpeDogJ2NhdGVnb3J5JyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgJ3gteHNyZi10b2tlbic6IHdpbmRvdy5CQ0RhdGEgJiYgd2luZG93LkJDRGF0YS5jc3JmX3Rva2VuID8gd2luZG93LkJDRGF0YS5jc3JmX3Rva2VuIDogJycsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfSkuZG9uZShkYXRhID0+IHtcclxuICAgICAgICAgICAgY29uc3QgZm9ybWF0dGVkUmVzdWx0cyA9IFtdO1xyXG5cclxuICAgICAgICAgICAgZGF0YS5mb3JFYWNoKChkYXRhTm9kZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgZm9ybWF0dGVkUmVzdWx0cy5wdXNoKHRoaXMuZm9ybWF0Q2F0ZWdvcnlUcmVlRm9ySlNUcmVlKGRhdGFOb2RlKSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgY2IoZm9ybWF0dGVkUmVzdWx0cyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRlQ2F0ZWdvcnlUcmVlKCRjb250YWluZXIpIHtcclxuICAgICAgICBjb25zdCB0cmVlT3B0aW9ucyA9IHtcclxuICAgICAgICAgICAgY29yZToge1xyXG4gICAgICAgICAgICAgICAgZGF0YTogKG5vZGUsIGNiKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gUm9vdCBub2RlXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG5vZGUuaWQgPT09ICcjJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYih0aGlzLmNhdGVnb3J5VHJlZURhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIExhenkgbG9hZGVkIGNoaWxkcmVuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubG9hZFRyZWVOb2Rlcyhub2RlLCBjYik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHRoZW1lczoge1xyXG4gICAgICAgICAgICAgICAgICAgIGljb25zOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgY2hlY2tib3g6IHtcclxuICAgICAgICAgICAgICAgIHRocmVlX3N0YXRlOiBmYWxzZSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgcGx1Z2luczogW1xyXG4gICAgICAgICAgICAgICAgJ2NoZWNrYm94JyxcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICAkY29udGFpbmVyLmpzdHJlZSh0cmVlT3B0aW9ucyk7XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdEZhY2V0ZWRTZWFyY2goKSB7XHJcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG9iamVjdC1jdXJseS1uZXdsaW5lXHJcbiAgICAgICAgY29uc3QgeyBvbk1pblByaWNlRXJyb3IsIG9uTWF4UHJpY2VFcnJvciwgbWluUHJpY2VOb3RFbnRlcmVkLCBtYXhQcmljZU5vdEVudGVyZWQsIG9uSW52YWxpZFByaWNlIH0gPSB0aGlzLmNvbnRleHQ7XHJcbiAgICAgICAgY29uc3QgJHByb2R1Y3RMaXN0aW5nQ29udGFpbmVyID0gJCgnI3Byb2R1Y3QtbGlzdGluZy1jb250YWluZXInKTtcclxuICAgICAgICBjb25zdCAkY29udGVudExpc3RpbmdDb250YWluZXIgPSAkKCcjc2VhcmNoLXJlc3VsdHMtY29udGVudCcpO1xyXG4gICAgICAgIGNvbnN0ICRmYWNldGVkU2VhcmNoQ29udGFpbmVyID0gJCgnI2ZhY2V0ZWQtc2VhcmNoLWNvbnRhaW5lcicpO1xyXG4gICAgICAgIGNvbnN0ICRzZWFyY2hIZWFkaW5nID0gJCgnI3NlYXJjaC1yZXN1bHRzLWhlYWRpbmcnKTtcclxuICAgICAgICBjb25zdCAkc2VhcmNoQ291bnQgPSAkKCcjc2VhcmNoLXJlc3VsdHMtcHJvZHVjdC1jb3VudCcpO1xyXG4gICAgICAgIGNvbnN0ICRjb250ZW50Q291bnQgPSAkKCcjc2VhcmNoLXJlc3VsdHMtY29udGVudC1jb3VudCcpO1xyXG4gICAgICAgIGNvbnN0IHByb2R1Y3RzUGVyUGFnZSA9IHRoaXMuY29udGV4dC5zZWFyY2hQcm9kdWN0c1BlclBhZ2U7XHJcbiAgICAgICAgY29uc3QgcmVxdWVzdE9wdGlvbnMgPSB7XHJcbiAgICAgICAgICAgIHRlbXBsYXRlOiB7XHJcbiAgICAgICAgICAgICAgICBwcm9kdWN0TGlzdGluZzogJ3NlYXJjaC9wcm9kdWN0LWxpc3RpbmcnLFxyXG4gICAgICAgICAgICAgICAgY29udGVudExpc3Rpbmc6ICdzZWFyY2gvY29udGVudC1saXN0aW5nJyxcclxuICAgICAgICAgICAgICAgIHNpZGViYXI6ICdzZWFyY2gvc2lkZWJhcicsXHJcbiAgICAgICAgICAgICAgICBoZWFkaW5nOiAnc2VhcmNoL2hlYWRpbmcnLFxyXG4gICAgICAgICAgICAgICAgcHJvZHVjdENvdW50OiAnc2VhcmNoL3Byb2R1Y3QtY291bnQnLFxyXG4gICAgICAgICAgICAgICAgY29udGVudENvdW50OiAnc2VhcmNoL2NvbnRlbnQtY291bnQnLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBjb25maWc6IHtcclxuICAgICAgICAgICAgICAgIHByb2R1Y3RfcmVzdWx0czoge1xyXG4gICAgICAgICAgICAgICAgICAgIGxpbWl0OiBwcm9kdWN0c1BlclBhZ2UsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBzaG93TW9yZTogJ3NlYXJjaC9zaG93LW1vcmUnLFxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHRoaXMuZmFjZXRlZFNlYXJjaCA9IG5ldyBGYWNldGVkU2VhcmNoKHJlcXVlc3RPcHRpb25zLCAoY29udGVudCkgPT4ge1xyXG4gICAgICAgICAgICAkc2VhcmNoSGVhZGluZy5odG1sKGNvbnRlbnQuaGVhZGluZyk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCB1cmwgPSBVcmwucGFyc2Uod2luZG93LmxvY2F0aW9uLmhyZWYsIHRydWUpO1xyXG4gICAgICAgICAgICBpZiAodXJsLnF1ZXJ5LnNlY3Rpb24gPT09ICdjb250ZW50Jykge1xyXG4gICAgICAgICAgICAgICAgJGNvbnRlbnRMaXN0aW5nQ29udGFpbmVyLmh0bWwoY29udGVudC5jb250ZW50TGlzdGluZyk7XHJcbiAgICAgICAgICAgICAgICAkY29udGVudENvdW50Lmh0bWwoY29udGVudC5jb250ZW50Q291bnQpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zaG93Q29udGVudChmYWxzZSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAkcHJvZHVjdExpc3RpbmdDb250YWluZXIuaHRtbChjb250ZW50LnByb2R1Y3RMaXN0aW5nKTtcclxuICAgICAgICAgICAgICAgICRmYWNldGVkU2VhcmNoQ29udGFpbmVyLmh0bWwoY29udGVudC5zaWRlYmFyKTtcclxuICAgICAgICAgICAgICAgICRzZWFyY2hDb3VudC5odG1sKGNvbnRlbnQucHJvZHVjdENvdW50KTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2hvd1Byb2R1Y3RzKGZhbHNlKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgJCgnYm9keScpLnRyaWdnZXJIYW5kbGVyKCdjb21wYXJlUmVzZXQnKTtcclxuXHJcbiAgICAgICAgICAgICQoJ2h0bWwsIGJvZHknKS5hbmltYXRlKHtcclxuICAgICAgICAgICAgICAgIHNjcm9sbFRvcDogMCxcclxuICAgICAgICAgICAgfSwgMTAwKTtcclxuICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgIHZhbGlkYXRpb25FcnJvck1lc3NhZ2VzOiB7XHJcbiAgICAgICAgICAgICAgICBvbk1pblByaWNlRXJyb3IsXHJcbiAgICAgICAgICAgICAgICBvbk1heFByaWNlRXJyb3IsXHJcbiAgICAgICAgICAgICAgICBtaW5QcmljZU5vdEVudGVyZWQsXHJcbiAgICAgICAgICAgICAgICBtYXhQcmljZU5vdEVudGVyZWQsXHJcbiAgICAgICAgICAgICAgICBvbkludmFsaWRQcmljZSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBpbml0VmFsaWRhdGlvbigkZm9ybSkge1xyXG4gICAgICAgIHRoaXMuJGZvcm0gPSAkZm9ybTtcclxuICAgICAgICB0aGlzLnZhbGlkYXRvciA9IG5vZCh7XHJcbiAgICAgICAgICAgIHN1Ym1pdDogJGZvcm0sXHJcbiAgICAgICAgICAgIHRhcDogYW5ub3VuY2VJbnB1dEVycm9yTWVzc2FnZSxcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgYmluZFZhbGlkYXRpb24oJGVsZW1lbnQpIHtcclxuICAgICAgICBpZiAodGhpcy52YWxpZGF0b3IpIHtcclxuICAgICAgICAgICAgdGhpcy52YWxpZGF0b3IuYWRkKHtcclxuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAkZWxlbWVudCxcclxuICAgICAgICAgICAgICAgIHZhbGlkYXRlOiAncHJlc2VuY2UnLFxyXG4gICAgICAgICAgICAgICAgZXJyb3JNZXNzYWdlOiAkZWxlbWVudC5kYXRhKCdlcnJvck1lc3NhZ2UnKSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBjaGVjaygpIHtcclxuICAgICAgICBpZiAodGhpcy52YWxpZGF0b3IpIHtcclxuICAgICAgICAgICAgdGhpcy52YWxpZGF0b3IucGVyZm9ybUNoZWNrKCk7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnZhbGlkYXRvci5hcmVBbGwoJ3ZhbGlkJyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==