(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ "./assets/js/theme/product.js":
/*!************************************!*\
  !*** ./assets/js/theme/product.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Product; });
/* harmony import */ var _page_manager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page-manager */ "./assets/js/theme/page-manager.js");
/* harmony import */ var _product_reviews__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./product/reviews */ "./assets/js/theme/product/reviews.js");
/* harmony import */ var _common_collapsible__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./common/collapsible */ "./assets/js/theme/common/collapsible.js");
/* harmony import */ var _common_product_details__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./common/product-details */ "./assets/js/theme/common/product-details.js");
/* harmony import */ var _product_video_gallery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./product/video-gallery */ "./assets/js/theme/product/video-gallery.js");
/* harmony import */ var _common_utils_form_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./common/utils/form-utils */ "./assets/js/theme/common/utils/form-utils.js");
/* harmony import */ var _global_modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./global/modal */ "./assets/js/theme/global/modal.js");
function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/*
 Import all product specific js
 */








var Product = /*#__PURE__*/function (_PageManager) {
  _inheritsLoose(Product, _PageManager);

  function Product(context) {
    var _this;

    _this = _PageManager.call(this, context) || this;
    _this.url = window.location.href;
    _this.$reviewLink = $('[data-reveal-id="modal-review-form"]');
    _this.$bulkPricingLink = $('[data-reveal-id="modal-bulk-pricing"]');
    _this.reviewModal = Object(_global_modal__WEBPACK_IMPORTED_MODULE_6__["default"])('#modal-review-form')[0];
    return _this;
  }

  var _proto = Product.prototype;

  _proto.onReady = function onReady() {
    var _this2 = this;

    // Listen for foundation modal close events to sanitize URL after review.
    $(document).on('close.fndtn.reveal', function () {
      if (_this2.url.indexOf('#write_review') !== -1 && typeof window.history.replaceState === 'function') {
        window.history.replaceState(null, document.title, window.location.pathname);
      }
    });
    var validator; // Init collapsible

    Object(_common_collapsible__WEBPACK_IMPORTED_MODULE_2__["default"])();
    this.productDetails = new _common_product_details__WEBPACK_IMPORTED_MODULE_3__["default"]($('.productView'), this.context, window.BCData.product_attributes);
    this.productDetails.setProductVariant();
    Object(_product_video_gallery__WEBPACK_IMPORTED_MODULE_4__["default"])();
    this.bulkPricingHandler();
    var $reviewForm = Object(_common_utils_form_utils__WEBPACK_IMPORTED_MODULE_5__["classifyForm"])('.writeReview-form');
    if ($reviewForm.length === 0) return;
    var review = new _product_reviews__WEBPACK_IMPORTED_MODULE_1__["default"]({
      $reviewForm: $reviewForm
    });
    $('body').on('click', '[data-reveal-id="modal-review-form"]', function () {
      validator = review.registerValidation(_this2.context);

      _this2.ariaDescribeReviewInputs($reviewForm);
    });
    $reviewForm.on('submit', function () {
      if (validator) {
        validator.performCheck();
        return validator.areAll('valid');
      }

      return false;
    });
    this.productReviewHandler();
  };

  _proto.ariaDescribeReviewInputs = function ariaDescribeReviewInputs($form) {
    $form.find('[data-input]').each(function (_, input) {
      var $input = $(input);
      var msgSpanId = $input.attr('name') + "-msg";
      $input.siblings('span').attr('id', msgSpanId);
      $input.attr('aria-describedby', msgSpanId);
    });
  };

  _proto.productReviewHandler = function productReviewHandler() {
    if (this.url.indexOf('#write_review') !== -1) {
      this.$reviewLink.trigger('click');
    }
  };

  _proto.bulkPricingHandler = function bulkPricingHandler() {
    if (this.url.indexOf('#bulk_pricing') !== -1) {
      this.$bulkPricingLink.trigger('click');
    }
  };

  return Product;
}(_page_manager__WEBPACK_IMPORTED_MODULE_0__["default"]);


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js")))

/***/ }),

/***/ "./assets/js/theme/product/video-gallery.js":
/*!**************************************************!*\
  !*** ./assets/js/theme/product/video-gallery.js ***!
  \**************************************************/
/*! exports provided: VideoGallery, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoGallery", function() { return VideoGallery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return videoGallery; });
var VideoGallery = /*#__PURE__*/function () {
  function VideoGallery($element) {
    this.$player = $element.find('[data-video-player]');
    this.$videos = $element.find('[data-video-item]');
    this.currentVideo = {};
    this.bindEvents();
  }

  var _proto = VideoGallery.prototype;

  _proto.selectNewVideo = function selectNewVideo(e) {
    e.preventDefault();
    var $target = $(e.currentTarget);
    this.currentVideo = {
      id: $target.data('videoId'),
      $selectedThumb: $target
    };
    this.setMainVideo();
    this.setActiveThumb();
  };

  _proto.setMainVideo = function setMainVideo() {
    this.$player.attr('src', "//www.youtube.com/embed/" + this.currentVideo.id);
  };

  _proto.setActiveThumb = function setActiveThumb() {
    this.$videos.removeClass('is-active');
    this.currentVideo.$selectedThumb.addClass('is-active');
  };

  _proto.bindEvents = function bindEvents() {
    this.$videos.on('click', this.selectNewVideo.bind(this));
  };

  return VideoGallery;
}();
function videoGallery() {
  var pluginKey = 'video-gallery';
  var $videoGallery = $("[data-" + pluginKey + "]");
  $videoGallery.each(function (index, element) {
    var $el = $(element);
    var isInitialized = $el.data(pluginKey) instanceof VideoGallery;

    if (isInitialized) {
      return;
    }

    $el.data(pluginKey, new VideoGallery($el));
  });
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js")))

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGhlbWUvcHJvZHVjdC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGhlbWUvcHJvZHVjdC92aWRlby1nYWxsZXJ5LmpzIl0sIm5hbWVzIjpbIlByb2R1Y3QiLCJjb250ZXh0IiwidXJsIiwid2luZG93IiwibG9jYXRpb24iLCJocmVmIiwiJHJldmlld0xpbmsiLCIkIiwiJGJ1bGtQcmljaW5nTGluayIsInJldmlld01vZGFsIiwibW9kYWxGYWN0b3J5Iiwib25SZWFkeSIsImRvY3VtZW50Iiwib24iLCJpbmRleE9mIiwiaGlzdG9yeSIsInJlcGxhY2VTdGF0ZSIsInRpdGxlIiwicGF0aG5hbWUiLCJ2YWxpZGF0b3IiLCJjb2xsYXBzaWJsZUZhY3RvcnkiLCJwcm9kdWN0RGV0YWlscyIsIlByb2R1Y3REZXRhaWxzIiwiQkNEYXRhIiwicHJvZHVjdF9hdHRyaWJ1dGVzIiwic2V0UHJvZHVjdFZhcmlhbnQiLCJ2aWRlb0dhbGxlcnkiLCJidWxrUHJpY2luZ0hhbmRsZXIiLCIkcmV2aWV3Rm9ybSIsImNsYXNzaWZ5Rm9ybSIsImxlbmd0aCIsInJldmlldyIsIlJldmlldyIsInJlZ2lzdGVyVmFsaWRhdGlvbiIsImFyaWFEZXNjcmliZVJldmlld0lucHV0cyIsInBlcmZvcm1DaGVjayIsImFyZUFsbCIsInByb2R1Y3RSZXZpZXdIYW5kbGVyIiwiJGZvcm0iLCJmaW5kIiwiZWFjaCIsIl8iLCJpbnB1dCIsIiRpbnB1dCIsIm1zZ1NwYW5JZCIsImF0dHIiLCJzaWJsaW5ncyIsInRyaWdnZXIiLCJQYWdlTWFuYWdlciIsIlZpZGVvR2FsbGVyeSIsIiRlbGVtZW50IiwiJHBsYXllciIsIiR2aWRlb3MiLCJjdXJyZW50VmlkZW8iLCJiaW5kRXZlbnRzIiwic2VsZWN0TmV3VmlkZW8iLCJlIiwicHJldmVudERlZmF1bHQiLCIkdGFyZ2V0IiwiY3VycmVudFRhcmdldCIsImlkIiwiZGF0YSIsIiRzZWxlY3RlZFRodW1iIiwic2V0TWFpblZpZGVvIiwic2V0QWN0aXZlVGh1bWIiLCJyZW1vdmVDbGFzcyIsImFkZENsYXNzIiwiYmluZCIsInBsdWdpbktleSIsIiR2aWRlb0dhbGxlcnkiLCJpbmRleCIsImVsZW1lbnQiLCIkZWwiLCJpc0luaXRpYWxpemVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztJQUVxQkEsTzs7O0VBQ2pCLGlCQUFZQyxPQUFaLEVBQXFCO0lBQUE7O0lBQ2pCLGdDQUFNQSxPQUFOO0lBQ0EsTUFBS0MsR0FBTCxHQUFXQyxNQUFNLENBQUNDLFFBQVAsQ0FBZ0JDLElBQTNCO0lBQ0EsTUFBS0MsV0FBTCxHQUFtQkMsQ0FBQyxDQUFDLHNDQUFELENBQXBCO0lBQ0EsTUFBS0MsZ0JBQUwsR0FBd0JELENBQUMsQ0FBQyx1Q0FBRCxDQUF6QjtJQUNBLE1BQUtFLFdBQUwsR0FBbUJDLDZEQUFZLENBQUMsb0JBQUQsQ0FBWixDQUFtQyxDQUFuQyxDQUFuQjtJQUxpQjtFQU1wQjs7OztTQUVEQyxPLEdBQUEsbUJBQVU7SUFBQTs7SUFDTjtJQUNBSixDQUFDLENBQUNLLFFBQUQsQ0FBRCxDQUFZQyxFQUFaLENBQWUsb0JBQWYsRUFBcUMsWUFBTTtNQUN2QyxJQUFJLE1BQUksQ0FBQ1gsR0FBTCxDQUFTWSxPQUFULENBQWlCLGVBQWpCLE1BQXNDLENBQUMsQ0FBdkMsSUFBNEMsT0FBT1gsTUFBTSxDQUFDWSxPQUFQLENBQWVDLFlBQXRCLEtBQXVDLFVBQXZGLEVBQW1HO1FBQy9GYixNQUFNLENBQUNZLE9BQVAsQ0FBZUMsWUFBZixDQUE0QixJQUE1QixFQUFrQ0osUUFBUSxDQUFDSyxLQUEzQyxFQUFrRGQsTUFBTSxDQUFDQyxRQUFQLENBQWdCYyxRQUFsRTtNQUNIO0lBQ0osQ0FKRDtJQU1BLElBQUlDLFNBQUosQ0FSTSxDQVVOOztJQUNBQyxtRUFBa0I7SUFFbEIsS0FBS0MsY0FBTCxHQUFzQixJQUFJ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QjtJQUtBLEtBQUtLLFlBQUw7SUFDQSxLQUFLQyxjQUFMO0VBQ0gsQ0FwQkw7O0VBQUEsT0FzQklELFlBdEJKLEdBc0JJLHdCQUFlO0lBQ1gsS0FBS1osT0FBTCxDQUFhTixJQUFiLENBQWtCLEtBQWxCLCtCQUFvRCxLQUFLUSxZQUFMLENBQWtCTyxFQUF0RTtFQUNILENBeEJMOztFQUFBLE9BMEJJSSxjQTFCSixHQTBCSSwwQkFBaUI7SUFDYixLQUFLWixPQUFMLENBQWFhLFdBQWIsQ0FBeUIsV0FBekI7SUFDQSxLQUFLWixZQUFMLENBQWtCUyxjQUFsQixDQUFpQ0ksUUFBakMsQ0FBMEMsV0FBMUM7RUFDSCxDQTdCTDs7RUFBQSxPQStCSVosVUEvQkosR0ErQkksc0JBQWE7SUFDVCxLQUFLRixPQUFMLENBQWF2QyxFQUFiLENBQWdCLE9BQWhCLEVBQXlCLEtBQUswQyxjQUFMLENBQW9CWSxJQUFwQixDQUF5QixJQUF6QixDQUF6QjtFQUNILENBakNMOztFQUFBO0FBQUE7QUFvQ2UsU0FBU3pDLFlBQVQsR0FBd0I7RUFDbkMsSUFBTTBDLFNBQVMsR0FBRyxlQUFsQjtFQUNBLElBQU1DLGFBQWEsR0FBRzlELENBQUMsWUFBVTZELFNBQVYsT0FBdkI7RUFFQUMsYUFBYSxDQUFDN0IsSUFBZCxDQUFtQixVQUFDOEIsS0FBRCxFQUFRQyxPQUFSLEVBQW9CO0lBQ25DLElBQU1DLEdBQUcsR0FBR2pFLENBQUMsQ0FBQ2dFLE9BQUQsQ0FBYjtJQUNBLElBQU1FLGFBQWEsR0FBR0QsR0FBRyxDQUFDWCxJQUFKLENBQVNPLFNBQVQsYUFBK0JuQixZQUFyRDs7SUFFQSxJQUFJd0IsYUFBSixFQUFtQjtNQUNmO0lBQ0g7O0lBRURELEdBQUcsQ0FBQ1gsSUFBSixDQUFTTyxTQUFULEVBQW9CLElBQUluQixZQUFKLENBQWlCdUIsR0FBakIsQ0FBcEI7RUFDSCxDQVREO0FBVUgsQyIsImZpbGUiOiJ0aGVtZS1idW5kbGUuY2h1bmsuNC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXHJcbiBJbXBvcnQgYWxsIHByb2R1Y3Qgc3BlY2lmaWMganNcclxuICovXHJcbmltcG9ydCBQYWdlTWFuYWdlciBmcm9tICcuL3BhZ2UtbWFuYWdlcic7XHJcbmltcG9ydCBSZXZpZXcgZnJvbSAnLi9wcm9kdWN0L3Jldmlld3MnO1xyXG5pbXBvcnQgY29sbGFwc2libGVGYWN0b3J5IGZyb20gJy4vY29tbW9uL2NvbGxhcHNpYmxlJztcclxuaW1wb3J0IFByb2R1Y3REZXRhaWxzIGZyb20gJy4vY29tbW9uL3Byb2R1Y3QtZGV0YWlscyc7XHJcbmltcG9ydCB2aWRlb0dhbGxlcnkgZnJvbSAnLi9wcm9kdWN0L3ZpZGVvLWdhbGxlcnknO1xyXG5pbXBvcnQgeyBjbGFzc2lmeUZvcm0gfSBmcm9tICcuL2NvbW1vbi91dGlscy9mb3JtLXV0aWxzJztcclxuaW1wb3J0IG1vZGFsRmFjdG9yeSBmcm9tICcuL2dsb2JhbC9tb2RhbCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9kdWN0IGV4dGVuZHMgUGFnZU1hbmFnZXIge1xyXG4gICAgY29uc3RydWN0b3IoY29udGV4dCkge1xyXG4gICAgICAgIHN1cGVyKGNvbnRleHQpO1xyXG4gICAgICAgIHRoaXMudXJsID0gd2luZG93LmxvY2F0aW9uLmhyZWY7XHJcbiAgICAgICAgdGhpcy4kcmV2aWV3TGluayA9ICQoJ1tkYXRhLXJldmVhbC1pZD1cIm1vZGFsLXJldmlldy1mb3JtXCJdJyk7XHJcbiAgICAgICAgdGhpcy4kYnVsa1ByaWNpbmdMaW5rID0gJCgnW2RhdGEtcmV2ZWFsLWlkPVwibW9kYWwtYnVsay1wcmljaW5nXCJdJyk7XHJcbiAgICAgICAgdGhpcy5yZXZpZXdNb2RhbCA9IG1vZGFsRmFjdG9yeSgnI21vZGFsLXJldmlldy1mb3JtJylbMF07XHJcbiAgICB9XHJcblxyXG4gICAgb25SZWFkeSgpIHtcclxuICAgICAgICAvLyBMaXN0ZW4gZm9yIGZvdW5kYXRpb24gbW9kYWwgY2xvc2UgZXZlbnRzIHRvIHNhbml0aXplIFVSTCBhZnRlciByZXZpZXcuXHJcbiAgICAgICAgJChkb2N1bWVudCkub24oJ2Nsb3NlLmZuZHRuLnJldmVhbCcsICgpID0+IHtcclxuICAgICAgICAgICAgaWYgKHRoaXMudXJsLmluZGV4T2YoJyN3cml0ZV9yZXZpZXcnKSAhPT0gLTEgJiYgdHlwZW9mIHdpbmRvdy5oaXN0b3J5LnJlcGxhY2VTdGF0ZSA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgICAgICAgICAgd2luZG93Lmhpc3RvcnkucmVwbGFjZVN0YXRlKG51bGwsIGRvY3VtZW50LnRpdGxlLCB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGxldCB2YWxpZGF0b3I7XHJcblxyXG4gICAgICAgIC8vIEluaXQgY29sbGFwc2libGVcclxuICAgICAgICBjb2xsYXBzaWJsZUZhY3RvcnkoKTtcclxuXHJcbiAgICAgICAgdGhpcy5wcm9kdWN0RGV0YWlscyA9IG5ldyBQcm9kdWN0RGV0YWlscygkKCcucHJvZHVjdFZpZXcnKSwgdGhpcy5jb250ZXh0LCB3aW5kb3cuQkNEYXRhLnByb2R1Y3RfYXR0cmlidXRlcyk7XHJcbiAgICAgICAgdGhpcy5wcm9kdWN0RGV0YWlscy5zZXRQcm9kdWN0VmFyaWFudCgpO1xyXG5cclxuICAgICAgICB2aWRlb0dhbGxlcnkoKTtcclxuXHJcbiAgICAgICAgdGhpcy5idWxrUHJpY2luZ0hhbmRsZXIoKTtcclxuXHJcbiAgICAgICAgY29uc3QgJHJldmlld0Zvcm0gPSBjbGFzc2lmeUZvcm0oJy53cml0ZVJldmlldy1mb3JtJyk7XHJcblxyXG4gICAgICAgIGlmICgkcmV2aWV3Rm9ybS5sZW5ndGggPT09IDApIHJldHVybjtcclxuXHJcbiAgICAgICAgY29uc3QgcmV2aWV3ID0gbmV3IFJldmlldyh7ICRyZXZpZXdGb3JtIH0pO1xyXG5cclxuICAgICAgICAkKCdib2R5Jykub24oJ2NsaWNrJywgJ1tkYXRhLXJldmVhbC1pZD1cIm1vZGFsLXJldmlldy1mb3JtXCJdJywgKCkgPT4ge1xyXG4gICAgICAgICAgICB2YWxpZGF0b3IgPSByZXZpZXcucmVnaXN0ZXJWYWxpZGF0aW9uKHRoaXMuY29udGV4dCk7XHJcbiAgICAgICAgICAgIHRoaXMuYXJpYURlc2NyaWJlUmV2aWV3SW5wdXRzKCRyZXZpZXdGb3JtKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgJHJldmlld0Zvcm0ub24oJ3N1Ym1pdCcsICgpID0+IHtcclxuICAgICAgICAgICAgaWYgKHZhbGlkYXRvcikge1xyXG4gICAgICAgICAgICAgICAgdmFsaWRhdG9yLnBlcmZvcm1DaGVjaygpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbGlkYXRvci5hcmVBbGwoJ3ZhbGlkJyk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5wcm9kdWN0UmV2aWV3SGFuZGxlcigpO1xyXG4gICAgfVxyXG5cclxuICAgIGFyaWFEZXNjcmliZVJldmlld0lucHV0cygkZm9ybSkge1xyXG4gICAgICAgICRmb3JtLmZpbmQoJ1tkYXRhLWlucHV0XScpLmVhY2goKF8sIGlucHV0KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0ICRpbnB1dCA9ICQoaW5wdXQpO1xyXG4gICAgICAgICAgICBjb25zdCBtc2dTcGFuSWQgPSBgJHskaW5wdXQuYXR0cignbmFtZScpfS1tc2dgO1xyXG5cclxuICAgICAgICAgICAgJGlucHV0LnNpYmxpbmdzKCdzcGFuJykuYXR0cignaWQnLCBtc2dTcGFuSWQpO1xyXG4gICAgICAgICAgICAkaW5wdXQuYXR0cignYXJpYS1kZXNjcmliZWRieScsIG1zZ1NwYW5JZCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvZHVjdFJldmlld0hhbmRsZXIoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMudXJsLmluZGV4T2YoJyN3cml0ZV9yZXZpZXcnKSAhPT0gLTEpIHtcclxuICAgICAgICAgICAgdGhpcy4kcmV2aWV3TGluay50cmlnZ2VyKCdjbGljaycpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBidWxrUHJpY2luZ0hhbmRsZXIoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMudXJsLmluZGV4T2YoJyNidWxrX3ByaWNpbmcnKSAhPT0gLTEpIHtcclxuICAgICAgICAgICAgdGhpcy4kYnVsa1ByaWNpbmdMaW5rLnRyaWdnZXIoJ2NsaWNrJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsImV4cG9ydCBjbGFzcyBWaWRlb0dhbGxlcnkge1xyXG4gICAgY29uc3RydWN0b3IoJGVsZW1lbnQpIHtcclxuICAgICAgICB0aGlzLiRwbGF5ZXIgPSAkZWxlbWVudC5maW5kKCdbZGF0YS12aWRlby1wbGF5ZXJdJyk7XHJcbiAgICAgICAgdGhpcy4kdmlkZW9zID0gJGVsZW1lbnQuZmluZCgnW2RhdGEtdmlkZW8taXRlbV0nKTtcclxuICAgICAgICB0aGlzLmN1cnJlbnRWaWRlbyA9IHt9O1xyXG4gICAgICAgIHRoaXMuYmluZEV2ZW50cygpO1xyXG4gICAgfVxyXG5cclxuICAgIHNlbGVjdE5ld1ZpZGVvKGUpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgIGNvbnN0ICR0YXJnZXQgPSAkKGUuY3VycmVudFRhcmdldCk7XHJcblxyXG4gICAgICAgIHRoaXMuY3VycmVudFZpZGVvID0ge1xyXG4gICAgICAgICAgICBpZDogJHRhcmdldC5kYXRhKCd2aWRlb0lkJyksXHJcbiAgICAgICAgICAgICRzZWxlY3RlZFRodW1iOiAkdGFyZ2V0LFxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHRoaXMuc2V0TWFpblZpZGVvKCk7XHJcbiAgICAgICAgdGhpcy5zZXRBY3RpdmVUaHVtYigpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldE1haW5WaWRlbygpIHtcclxuICAgICAgICB0aGlzLiRwbGF5ZXIuYXR0cignc3JjJywgYC8vd3d3LnlvdXR1YmUuY29tL2VtYmVkLyR7dGhpcy5jdXJyZW50VmlkZW8uaWR9YCk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0QWN0aXZlVGh1bWIoKSB7XHJcbiAgICAgICAgdGhpcy4kdmlkZW9zLnJlbW92ZUNsYXNzKCdpcy1hY3RpdmUnKTtcclxuICAgICAgICB0aGlzLmN1cnJlbnRWaWRlby4kc2VsZWN0ZWRUaHVtYi5hZGRDbGFzcygnaXMtYWN0aXZlJyk7XHJcbiAgICB9XHJcblxyXG4gICAgYmluZEV2ZW50cygpIHtcclxuICAgICAgICB0aGlzLiR2aWRlb3Mub24oJ2NsaWNrJywgdGhpcy5zZWxlY3ROZXdWaWRlby5iaW5kKHRoaXMpKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdmlkZW9HYWxsZXJ5KCkge1xyXG4gICAgY29uc3QgcGx1Z2luS2V5ID0gJ3ZpZGVvLWdhbGxlcnknO1xyXG4gICAgY29uc3QgJHZpZGVvR2FsbGVyeSA9ICQoYFtkYXRhLSR7cGx1Z2luS2V5fV1gKTtcclxuXHJcbiAgICAkdmlkZW9HYWxsZXJ5LmVhY2goKGluZGV4LCBlbGVtZW50KSA9PiB7XHJcbiAgICAgICAgY29uc3QgJGVsID0gJChlbGVtZW50KTtcclxuICAgICAgICBjb25zdCBpc0luaXRpYWxpemVkID0gJGVsLmRhdGEocGx1Z2luS2V5KSBpbnN0YW5jZW9mIFZpZGVvR2FsbGVyeTtcclxuXHJcbiAgICAgICAgaWYgKGlzSW5pdGlhbGl6ZWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJGVsLmRhdGEocGx1Z2luS2V5LCBuZXcgVmlkZW9HYWxsZXJ5KCRlbCkpO1xyXG4gICAgfSk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==