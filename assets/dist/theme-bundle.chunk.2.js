(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./assets/js/theme/common/gift-certificate-validator.js":
/*!**************************************************************!*\
  !*** ./assets/js/theme/common/gift-certificate-validator.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function (cert) {
  if (typeof cert !== 'string' || cert.length === 0) {
    return false;
  } // Add any custom gift certificate validation logic here


  return true;
});

/***/ }),

/***/ "./assets/js/theme/common/utils/translations-utils.js":
/*!************************************************************!*\
  !*** ./assets/js/theme/common/utils/translations-utils.js ***!
  \************************************************************/
/*! exports provided: createTranslationDictionary */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createTranslationDictionary", function() { return createTranslationDictionary; });
var TRANSLATIONS = 'translations';

var isTranslationDictionaryNotEmpty = function isTranslationDictionaryNotEmpty(dictionary) {
  return !!Object.keys(dictionary[TRANSLATIONS]).length;
};

var chooseActiveDictionary = function chooseActiveDictionary() {
  for (var i = 0; i < arguments.length; i++) {
    var dictionary = JSON.parse(i < 0 || arguments.length <= i ? undefined : arguments[i]);

    if (isTranslationDictionaryNotEmpty(dictionary)) {
      return dictionary;
    }
  }
};
/**
 * defines Translation Dictionary to use
 * @param context provides access to 3 validation JSONs from en.json:
 * validation_messages, validation_fallback_messages and default_messages
 * @returns {Object}
 */


var createTranslationDictionary = function createTranslationDictionary(context) {
  var validationDictionaryJSON = context.validationDictionaryJSON,
      validationFallbackDictionaryJSON = context.validationFallbackDictionaryJSON,
      validationDefaultDictionaryJSON = context.validationDefaultDictionaryJSON;
  var activeDictionary = chooseActiveDictionary(validationDictionaryJSON, validationFallbackDictionaryJSON, validationDefaultDictionaryJSON);
  var localizations = Object.values(activeDictionary[TRANSLATIONS]);
  var translationKeys = Object.keys(activeDictionary[TRANSLATIONS]).map(function (key) {
    return key.split('.').pop();
  });
  return translationKeys.reduce(function (acc, key, i) {
    acc[key] = localizations[i];
    return acc;
  }, {});
};

/***/ }),

/***/ "./assets/js/theme/gift-certificate.js":
/*!*********************************************!*\
  !*** ./assets/js/theme/gift-certificate.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GiftCertificate; });
/* harmony import */ var _page_manager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page-manager */ "./assets/js/theme/page-manager.js");
/* harmony import */ var _common_nod__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./common/nod */ "./assets/js/theme/common/nod.js");
/* harmony import */ var _common_gift_certificate_validator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./common/gift-certificate-validator */ "./assets/js/theme/common/gift-certificate-validator.js");
/* harmony import */ var _common_models_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./common/models/forms */ "./assets/js/theme/common/models/forms.js");
/* harmony import */ var _common_utils_translations_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./common/utils/translations-utils */ "./assets/js/theme/common/utils/translations-utils.js");
/* harmony import */ var _common_utils_form_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./common/utils/form-utils */ "./assets/js/theme/common/utils/form-utils.js");
/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");
/* harmony import */ var _global_modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./global/modal */ "./assets/js/theme/global/modal.js");
function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }










var GiftCertificate = /*#__PURE__*/function (_PageManager) {
  _inheritsLoose(GiftCertificate, _PageManager);

  function GiftCertificate(context) {
    var _this;

    _this = _PageManager.call(this, context) || this;
    _this.validationDictionary = Object(_common_utils_translations_utils__WEBPACK_IMPORTED_MODULE_4__["createTranslationDictionary"])(context);
    var $certBalanceForm = $('#gift-certificate-balance');
    var purchaseModel = {
      recipientName: function recipientName(val) {
        return val.length;
      },
      recipientEmail: function recipientEmail() {
        return _common_models_forms__WEBPACK_IMPORTED_MODULE_3__["default"].email.apply(_common_models_forms__WEBPACK_IMPORTED_MODULE_3__["default"], arguments);
      },
      senderName: function senderName(val) {
        return val.length;
      },
      senderEmail: function senderEmail() {
        return _common_models_forms__WEBPACK_IMPORTED_MODULE_3__["default"].email.apply(_common_models_forms__WEBPACK_IMPORTED_MODULE_3__["default"], arguments);
      },
      customAmount: function customAmount(value, min, max) {
        return value && value >= min && value <= max;
      },
      setAmount: function setAmount(value, options) {
        var found = false;
        options.forEach(function (option) {
          if (option === value) {
            found = true;
            return false;
          }
        });
        return found;
      }
    };
    var $purchaseForm = $('#gift-certificate-form');
    var $customAmounts = $purchaseForm.find('input[name="certificate_amount"]');
    var purchaseValidator = Object(_common_nod__WEBPACK_IMPORTED_MODULE_1__["default"])({
      submit: '#gift-certificate-form input[type="submit"]',
      delay: 300,
      tap: _common_utils_form_utils__WEBPACK_IMPORTED_MODULE_5__["announceInputErrorMessage"]
    });

    if ($customAmounts.length) {
      var $element = $purchaseForm.find('input[name="certificate_amount"]');
      var min = $element.data('min');
      var minFormatted = $element.data('minFormatted');
      var max = $element.data('max');
      var maxFormatted = $element.data('maxFormatted');

      var insertFormattedAmountsIntoErrorMessage = function insertFormattedAmountsIntoErrorMessage(message) {
        for (var _len = arguments.length, amountRange = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          amountRange[_key - 1] = arguments[_key];
        }

        var amountPlaceholders = ['[MIN]', '[MAX]'];
        var updatedErrorText = message;
        amountPlaceholders.forEach(function (placeholder, i) {
          updatedErrorText = updatedErrorText.includes(placeholder) ? updatedErrorText.replace(placeholder, amountRange[i]) : updatedErrorText;
        });
        return updatedErrorText;
      };

      purchaseValidator.add({
        selector: '#gift-certificate-form input[name="certificate_amount"]',
        validate: function validate(cb, val) {
          var numberVal = Number(val);

          if (!numberVal) {
            cb(false);
          }

          cb(numberVal >= min && numberVal <= max);
        },
        errorMessage: insertFormattedAmountsIntoErrorMessage(_this.validationDictionary.certificate_amount_range, minFormatted, maxFormatted)
      });
    }

    purchaseValidator.add([{
      selector: '#gift-certificate-form input[name="to_name"]',
      validate: function validate(cb, val) {
        var result = purchaseModel.recipientName(val);
        cb(result);
      },
      errorMessage: _this.context.toName
    }, {
      selector: '#gift-certificate-form input[name="to_email"]',
      validate: function validate(cb, val) {
        var result = purchaseModel.recipientEmail(val);
        cb(result);
      },
      errorMessage: _this.context.toEmail
    }, {
      selector: '#gift-certificate-form input[name="from_name"]',
      validate: function validate(cb, val) {
        var result = purchaseModel.senderName(val);
        cb(result);
      },
      errorMessage: _this.context.fromName
    }, {
      selector: '#gift-certificate-form input[name="from_email"]',
      validate: function validate(cb, val) {
        var result = purchaseModel.senderEmail(val);
        cb(result);
      },
      errorMessage: _this.context.fromEmail
    }, {
      selector: '#gift-certificate-form input[name="certificate_theme"]:first-of-type',
      triggeredBy: '#gift-certificate-form input[name="certificate_theme"]',
      validate: function validate(cb) {
        var val = $purchaseForm.find('input[name="certificate_theme"]:checked').val();
        cb(typeof val === 'string');
      },
      errorMessage: _this.context.certTheme
    }, {
      selector: '#gift-certificate-form input[name="agree"]',
      validate: function validate(cb) {
        var val = $purchaseForm.find('input[name="agree"]').get(0).checked;
        cb(val);
      },
      errorMessage: _this.context.agreeToTerms
    }, {
      selector: '#gift-certificate-form input[name="agree2"]',
      validate: function validate(cb) {
        var val = $purchaseForm.find('input[name="agree2"]').get(0).checked;
        cb(val);
      },
      errorMessage: _this.context.agreeToTerms
    }]);

    if ($certBalanceForm.length) {
      var balanceVal = _this.checkCertBalanceValidator($certBalanceForm);

      $certBalanceForm.on('submit', function () {
        balanceVal.performCheck();

        if (!balanceVal.areAll('valid')) {
          return false;
        }
      });
    }

    $purchaseForm.on('submit', function (event) {
      purchaseValidator.performCheck();

      if (!purchaseValidator.areAll('valid')) {
        return event.preventDefault();
      }
    });
    $('#gift-certificate-preview').click(function (event) {
      event.preventDefault();
      purchaseValidator.performCheck();

      if (!purchaseValidator.areAll('valid')) {
        return;
      }

      var modal = Object(_global_modal__WEBPACK_IMPORTED_MODULE_7__["defaultModal"])();
      var previewUrl = $(event.currentTarget).data('previewUrl') + "&" + $purchaseForm.serialize();
      modal.open();
      _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_6__["api"].getPage(previewUrl, {}, function (err, content) {
        if (err) {
          return modal.updateContent(_this.context.previewError);
        }

        modal.updateContent(content, {
          wrap: true
        });
      });
    });
    return _this;
  }

  var _proto = GiftCertificate.prototype;

  _proto.checkCertBalanceValidator = function checkCertBalanceValidator($balanceForm) {
    var balanceValidator = Object(_common_nod__WEBPACK_IMPORTED_MODULE_1__["default"])({
      submit: $balanceForm.find('input[type="submit"]'),
      tap: _common_utils_form_utils__WEBPACK_IMPORTED_MODULE_5__["announceInputErrorMessage"]
    });
    balanceValidator.add({
      selector: $balanceForm.find('input[name="giftcertificatecode"]'),
      validate: function validate(cb, val) {
        cb(Object(_common_gift_certificate_validator__WEBPACK_IMPORTED_MODULE_2__["default"])(val));
      },
      errorMessage: this.validationDictionary.invalid_gift_certificate
    });
    return balanceValidator;
  };

  return GiftCertificate;
}(_page_manager__WEBPACK_IMPORTED_MODULE_0__["default"]);


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js")))

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGhlbWUvY29tbW9uL2dpZnQtY2VydGlmaWNhdGUtdmFsaWRhdG9yLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy90aGVtZS9jb21tb24vdXRpbHMvdHJhbnNsYXRpb25zLXV0aWxzLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy90aGVtZS9naWZ0LWNlcnRpZmljYXRlLmpzIl0sIm5hbWVzIjpbImNlcnQiLCJsZW5ndGgiLCJUUkFOU0xBVElPTlMiLCJpc1RyYW5zbGF0aW9uRGljdGlvbmFyeU5vdEVtcHR5IiwiZGljdGlvbmFyeSIsIk9iamVjdCIsImtleXMiLCJjaG9vc2VBY3RpdmVEaWN0aW9uYXJ5IiwiaSIsIkpTT04iLCJwYXJzZSIsImNyZWF0ZVRyYW5zbGF0aW9uRGljdGlvbmFyeSIsImNvbnRleHQiLCJ2YWxpZGF0aW9uRGljdGlvbmFyeUpTT04iLCJ2YWxpZGF0aW9uRmFsbGJhY2tEaWN0aW9uYXJ5SlNPTiIsInZhbGlkYXRpb25EZWZhdWx0RGljdGlvbmFyeUpTT04iLCJhY3RpdmVEaWN0aW9uYXJ5IiwibG9jYWxpemF0aW9ucyIsInZhbHVlcyIsInRyYW5zbGF0aW9uS2V5cyIsIm1hcCIsImtleSIsInNwbGl0IiwicG9wIiwicmVkdWNlIiwiYWNjIiwiR2lmdENlcnRpZmljYXRlIiwidmFsaWRhdGlvbkRpY3Rpb25hcnkiLCIkY2VydEJhbGFuY2VGb3JtIiwiJCIsInB1cmNoYXNlTW9kZWwiLCJyZWNpcGllbnROYW1lIiwidmFsIiwicmVjaXBpZW50RW1haWwiLCJmb3JtTW9kZWwiLCJlbWFpbCIsInNlbmRlck5hbWUiLCJzZW5kZXJFbWFpbCIsImN1c3RvbUFtb3VudCIsInZhbHVlIiwibWluIiwibWF4Iiwic2V0QW1vdW50Iiwib3B0aW9ucyIsImZvdW5kIiwiZm9yRWFjaCIsIm9wdGlvbiIsIiRwdXJjaGFzZUZvcm0iLCIkY3VzdG9tQW1vdW50cyIsImZpbmQiLCJwdXJjaGFzZVZhbGlkYXRvciIsIm5vZCIsInN1Ym1pdCIsImRlbGF5IiwidGFwIiwiYW5ub3VuY2VJbnB1dEVycm9yTWVzc2FnZSIsIiRlbGVtZW50IiwiZGF0YSIsIm1pbkZvcm1hdHRlZCIsIm1heEZvcm1hdHRlZCIsImluc2VydEZvcm1hdHRlZEFtb3VudHNJbnRvRXJyb3JNZXNzYWdlIiwibWVzc2FnZSIsImFtb3VudFJhbmdlIiwiYW1vdW50UGxhY2Vob2xkZXJzIiwidXBkYXRlZEVycm9yVGV4dCIsInBsYWNlaG9sZGVyIiwiaW5jbHVkZXMiLCJyZXBsYWNlIiwiYWRkIiwic2VsZWN0b3IiLCJ2YWxpZGF0ZSIsImNiIiwibnVtYmVyVmFsIiwiTnVtYmVyIiwiZXJyb3JNZXNzYWdlIiwiY2VydGlmaWNhdGVfYW1vdW50X3JhbmdlIiwicmVzdWx0IiwidG9OYW1lIiwidG9FbWFpbCIsImZyb21OYW1lIiwiZnJvbUVtYWlsIiwidHJpZ2dlcmVkQnkiLCJjZXJ0VGhlbWUiLCJnZXQiLCJjaGVja2VkIiwiYWdyZWVUb1Rlcm1zIiwiYmFsYW5jZVZhbCIsImNoZWNrQ2VydEJhbGFuY2VWYWxpZGF0b3IiLCJvbiIsInBlcmZvcm1DaGVjayIsImFyZUFsbCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJjbGljayIsIm1vZGFsIiwiZGVmYXVsdE1vZGFsIiwicHJldmlld1VybCIsImN1cnJlbnRUYXJnZXQiLCJzZXJpYWxpemUiLCJvcGVuIiwiYXBpIiwiZ2V0UGFnZSIsImVyciIsImNvbnRlbnQiLCJ1cGRhdGVDb250ZW50IiwicHJldmlld0Vycm9yIiwid3JhcCIsIiRiYWxhbmNlRm9ybSIsImJhbGFuY2VWYWxpZGF0b3IiLCJjaGVja0lzR2lmdENlcnRWYWxpZCIsImludmFsaWRfZ2lmdF9jZXJ0aWZpY2F0ZSIsIlBhZ2VNYW5hZ2VyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBZSx5RUFBVUEsSUFBVixFQUFnQjtFQUMzQixJQUFJLE9BQU9BLElBQVAsS0FBZ0IsUUFBaEIsSUFBNEJBLElBQUksQ0FBQ0Ms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WUFBMUIsRUFBd0M7SUFDcEMsSUFBTUMsZ0JBQWdCLEdBQUd6RCwyREFBRyxDQUFDO01BQ3pCQyxNQUFNLEVBQUV1RCxZQUFZLENBQUMxRCxJQUFiLENBQWtCLHNCQUFsQixDQURpQjtNQUV6QkssR0FBRyxFQUFFQyxrRkFBeUJBO0lBRkwsQ0FBRCxDQUE1QjtJQUtBcUQsZ0JBQWdCLENBQUN4QyxHQUFqQixDQUFxQjtNQUNqQkMsUUFBUSxFQUFFc0MsWUFBWSxDQUFDMUQsSUFBYixDQUFrQixtQ0FBbEIsQ0FETztNQUVqQnFCLFFBRmlCLG9CQUVSQyxFQUZRLEVBRUp2QyxHQUZJLEVBRUM7UUFDZHVDLEVBQUUsQ0FBQ3NDLGtGQUFvQixDQUFDN0UsR0FBRCxDQUFyQixDQUFGO01BQ0gsQ0FKZ0I7TUFLakIwQyxZQUFZLEVBQUUsS0FBSy9DLG9CQUFMLENBQTBCbUY7SUFMdkIsQ0FBckI7SUFRQSxPQUFPRixnQkFBUDtFQUNILEM7OztFQTNNd0NHLHFEIiwiZmlsZSI6InRoZW1lLWJ1bmRsZS5jaHVuay4yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKGNlcnQpIHtcclxuICAgIGlmICh0eXBlb2YgY2VydCAhPT0gJ3N0cmluZycgfHwgY2VydC5sZW5ndGggPT09IDApIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQWRkIGFueSBjdXN0b20gZ2lmdCBjZXJ0aWZpY2F0ZSB2YWxpZGF0aW9uIGxvZ2ljIGhlcmVcclxuICAgIHJldHVybiB0cnVlO1xyXG59XHJcbiIsImNvbnN0IFRSQU5TTEFUSU9OUyA9ICd0cmFuc2xhdGlvbnMnO1xyXG5jb25zdCBpc1RyYW5zbGF0aW9uRGljdGlvbmFyeU5vdEVtcHR5ID0gKGRpY3Rpb25hcnkpID0+ICEhT2JqZWN0LmtleXMoZGljdGlvbmFyeVtUUkFOU0xBVElPTlNdKS5sZW5ndGg7XHJcbmNvbnN0IGNob29zZUFjdGl2ZURpY3Rpb25hcnkgPSAoLi4uZGljdGlvbmFyeUpzb25MaXN0KSA9PiB7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRpY3Rpb25hcnlKc29uTGlzdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGNvbnN0IGRpY3Rpb25hcnkgPSBKU09OLnBhcnNlKGRpY3Rpb25hcnlKc29uTGlzdFtpXSk7XHJcbiAgICAgICAgaWYgKGlzVHJhbnNsYXRpb25EaWN0aW9uYXJ5Tm90RW1wdHkoZGljdGlvbmFyeSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGRpY3Rpb25hcnk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59O1xyXG5cclxuLyoqXHJcbiAqIGRlZmluZXMgVHJhbnNsYXRpb24gRGljdGlvbmFyeSB0byB1c2VcclxuICogQHBhcmFtIGNvbnRleHQgcHJvdmlkZXMgYWNjZXNzIHRvIDMgdmFsaWRhdGlvbiBKU09OcyBmcm9tIGVuLmpzb246XHJcbiAqIHZhbGlkYXRpb25fbWVzc2FnZXMsIHZhbGlkYXRpb25fZmFsbGJhY2tfbWVzc2FnZXMgYW5kIGRlZmF1bHRfbWVzc2FnZXNcclxuICogQHJldHVybnMge09iamVjdH1cclxuICovXHJcbmV4cG9ydCBjb25zdCBjcmVhdGVUcmFuc2xhdGlvbkRpY3Rpb25hcnkgPSAoY29udGV4dCkgPT4ge1xyXG4gICAgY29uc3QgeyB2YWxpZGF0aW9uRGljdGlvbmFyeUpTT04sIHZhbGlkYXRpb25GYWxsYmFja0RpY3Rpb25hcnlKU09OLCB2YWxpZGF0aW9uRGVmYXVsdERpY3Rpb25hcnlKU09OIH0gPSBjb250ZXh0O1xyXG4gICAgY29uc3QgYWN0aXZlRGljdGlvbmFyeSA9IGNob29zZUFjdGl2ZURpY3Rpb25hcnkodmFsaWRhdGlvbkRpY3Rpb25hcnlKU09OLCB2YWxpZGF0aW9uRmFsbGJhY2tEaWN0aW9uYXJ5SlNPTiwgdmFsaWRhdGlvbkRlZmF1bHREaWN0aW9uYXJ5SlNPTik7XHJcbiAgICBjb25zdCBsb2NhbGl6YXRpb25zID0gT2JqZWN0LnZhbHVlcyhhY3RpdmVEaWN0aW9uYXJ5W1RSQU5TTEFUSU9OU10pO1xyXG4gICAgY29uc3QgdHJhbnNsYXRpb25LZXlzID0gT2JqZWN0LmtleXMoYWN0aXZlRGljdGlvbmFyeVtUUkFOU0xBVElPTlNdKS5tYXAoa2V5ID0+IGtleS5zcGxpdCgnLicpLnBvcCgpKTtcclxuXHJcbiAgICByZXR1cm4gdHJhbnNsYXRpb25LZXlzLnJlZHVjZSgoYWNjLCBrZXksIGkpID0+IHtcclxuICAgICAgICBhY2Nba2V5XSA9IGxvY2FsaXphdGlvbnNbaV07XHJcbiAgICAgICAgcmV0dXJuIGFjYztcclxuICAgIH0sIHt9KTtcclxufTtcclxuIiwiaW1wb3J0IFBhZ2VNYW5hZ2VyIGZyb20gJy4vcGFnZS1tYW5hZ2VyJztcclxuaW1wb3J0IG5vZCBmcm9tICcuL2NvbW1vbi9ub2QnO1xyXG5pbXBvcnQgY2hlY2tJc0dpZnRDZXJ0VmFsaWQgZnJvbSAnLi9jb21tb24vZ2lmdC1jZXJ0aWZpY2F0ZS12YWxpZGF0b3InO1xyXG5pbXBvcnQgZm9ybU1vZGVsIGZyb20gJy4vY29tbW9uL21vZGVscy9mb3Jtcyc7XHJcbmltcG9ydCB7IGNyZWF0ZVRyYW5zbGF0aW9uRGljdGlvbmFyeSB9IGZyb20gJy4vY29tbW9uL3V0aWxzL3RyYW5zbGF0aW9ucy11dGlscyc7XHJcbmltcG9ydCB7IGFubm91bmNlSW5wdXRFcnJvck1lc3NhZ2UgfSBmcm9tICcuL2NvbW1vbi91dGlscy9mb3JtLXV0aWxzJztcclxuaW1wb3J0IHsgYXBpIH0gZnJvbSAnQGJpZ2NvbW1lcmNlL3N0ZW5jaWwtdXRpbHMnO1xyXG5pbXBvcnQgeyBkZWZhdWx0TW9kYWwgfSBmcm9tICcuL2dsb2JhbC9tb2RhbCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHaWZ0Q2VydGlmaWNhdGUgZXh0ZW5kcyBQYWdlTWFuYWdlciB7XHJcbiAgICBjb25zdHJ1Y3Rvcihjb250ZXh0KSB7XHJcbiAgICAgICAgc3VwZXIoY29udGV4dCk7XHJcbiAgICAgICAgdGhpcy52YWxpZGF0aW9uRGljdGlvbmFyeSA9IGNyZWF0ZVRyYW5zbGF0aW9uRGljdGlvbmFyeShjb250ZXh0KTtcclxuXHJcbiAgICAgICAgY29uc3QgJGNlcnRCYWxhbmNlRm9ybSA9ICQoJyNnaWZ0LWNlcnRpZmljYXRlLWJhbGFuY2UnKTtcclxuXHJcbiAgICAgICAgY29uc3QgcHVyY2hhc2VNb2RlbCA9IHtcclxuICAgICAgICAgICAgcmVjaXBpZW50TmFtZSh2YWwpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB2YWwubGVuZ3RoO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICByZWNpcGllbnRFbWFpbCguLi5hcmdzKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZm9ybU1vZGVsLmVtYWlsKC4uLmFyZ3MpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBzZW5kZXJOYW1lKHZhbCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbC5sZW5ndGg7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHNlbmRlckVtYWlsKC4uLmFyZ3MpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmb3JtTW9kZWwuZW1haWwoLi4uYXJncyk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGN1c3RvbUFtb3VudCh2YWx1ZSwgbWluLCBtYXgpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZSAmJiB2YWx1ZSA+PSBtaW4gJiYgdmFsdWUgPD0gbWF4O1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBzZXRBbW91bnQodmFsdWUsIG9wdGlvbnMpIHtcclxuICAgICAgICAgICAgICAgIGxldCBmb3VuZCA9IGZhbHNlO1xyXG5cclxuICAgICAgICAgICAgICAgIG9wdGlvbnMuZm9yRWFjaCgob3B0aW9uKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wdGlvbiA9PT0gdmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm91bmQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZvdW5kO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGNvbnN0ICRwdXJjaGFzZUZvcm0gPSAkKCcjZ2lmdC1jZXJ0aWZpY2F0ZS1mb3JtJyk7XHJcbiAgICAgICAgY29uc3QgJGN1c3RvbUFtb3VudHMgPSAkcHVyY2hhc2VGb3JtLmZpbmQoJ2lucHV0W25hbWU9XCJjZXJ0aWZpY2F0ZV9hbW91bnRcIl0nKTtcclxuICAgICAgICBjb25zdCBwdXJjaGFzZVZhbGlkYXRvciA9IG5vZCh7XHJcbiAgICAgICAgICAgIHN1Ym1pdDogJyNnaWZ0LWNlcnRpZmljYXRlLWZvcm0gaW5wdXRbdHlwZT1cInN1Ym1pdFwiXScsXHJcbiAgICAgICAgICAgIGRlbGF5OiAzMDAsXHJcbiAgICAgICAgICAgIHRhcDogYW5ub3VuY2VJbnB1dEVycm9yTWVzc2FnZSxcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaWYgKCRjdXN0b21BbW91bnRzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICBjb25zdCAkZWxlbWVudCA9ICRwdXJjaGFzZUZvcm0uZmluZCgnaW5wdXRbbmFtZT1cImNlcnRpZmljYXRlX2Ftb3VudFwiXScpO1xyXG4gICAgICAgICAgICBjb25zdCBtaW4gPSAkZWxlbWVudC5kYXRhKCdtaW4nKTtcclxuICAgICAgICAgICAgY29uc3QgbWluRm9ybWF0dGVkID0gJGVsZW1lbnQuZGF0YSgnbWluRm9ybWF0dGVkJyk7XHJcbiAgICAgICAgICAgIGNvbnN0IG1heCA9ICRlbGVtZW50LmRhdGEoJ21heCcpO1xyXG4gICAgICAgICAgICBjb25zdCBtYXhGb3JtYXR0ZWQgPSAkZWxlbWVudC5kYXRhKCdtYXhGb3JtYXR0ZWQnKTtcclxuICAgICAgICAgICAgY29uc3QgaW5zZXJ0Rm9ybWF0dGVkQW1vdW50c0ludG9FcnJvck1lc3NhZ2UgPSAobWVzc2FnZSwgLi4uYW1vdW50UmFuZ2UpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGFtb3VudFBsYWNlaG9sZGVycyA9IFsnW01JTl0nLCAnW01BWF0nXTtcclxuICAgICAgICAgICAgICAgIGxldCB1cGRhdGVkRXJyb3JUZXh0ID0gbWVzc2FnZTtcclxuICAgICAgICAgICAgICAgIGFtb3VudFBsYWNlaG9sZGVycy5mb3JFYWNoKChwbGFjZWhvbGRlciwgaSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHVwZGF0ZWRFcnJvclRleHQgPSB1cGRhdGVkRXJyb3JUZXh0LmluY2x1ZGVzKHBsYWNlaG9sZGVyKSA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZWRFcnJvclRleHQucmVwbGFjZShwbGFjZWhvbGRlciwgYW1vdW50UmFuZ2VbaV0pIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXBkYXRlZEVycm9yVGV4dDtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHVwZGF0ZWRFcnJvclRleHQ7XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICBwdXJjaGFzZVZhbGlkYXRvci5hZGQoe1xyXG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6ICcjZ2lmdC1jZXJ0aWZpY2F0ZS1mb3JtIGlucHV0W25hbWU9XCJjZXJ0aWZpY2F0ZV9hbW91bnRcIl0nLFxyXG4gICAgICAgICAgICAgICAgdmFsaWRhdGU6IChjYiwgdmFsKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbnVtYmVyVmFsID0gTnVtYmVyKHZhbCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghbnVtYmVyVmFsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNiKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNiKG51bWJlclZhbCA+PSBtaW4gJiYgbnVtYmVyVmFsIDw9IG1heCk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZXJyb3JNZXNzYWdlOiBpbnNlcnRGb3JtYXR0ZWRBbW91bnRzSW50b0Vycm9yTWVzc2FnZSh0aGlzLnZhbGlkYXRpb25EaWN0aW9uYXJ5LmNlcnRpZmljYXRlX2Ftb3VudF9yYW5nZSwgbWluRm9ybWF0dGVkLCBtYXhGb3JtYXR0ZWQpLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1cmNoYXNlVmFsaWRhdG9yLmFkZChbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnI2dpZnQtY2VydGlmaWNhdGUtZm9ybSBpbnB1dFtuYW1lPVwidG9fbmFtZVwiXScsXHJcbiAgICAgICAgICAgICAgICB2YWxpZGF0ZTogKGNiLCB2YWwpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSBwdXJjaGFzZU1vZGVsLnJlY2lwaWVudE5hbWUodmFsKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY2IocmVzdWx0KTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2U6IHRoaXMuY29udGV4dC50b05hbWUsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnI2dpZnQtY2VydGlmaWNhdGUtZm9ybSBpbnB1dFtuYW1lPVwidG9fZW1haWxcIl0nLFxyXG4gICAgICAgICAgICAgICAgdmFsaWRhdGU6IChjYiwgdmFsKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gcHVyY2hhc2VNb2RlbC5yZWNpcGllbnRFbWFpbCh2YWwpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjYihyZXN1bHQpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGVycm9yTWVzc2FnZTogdGhpcy5jb250ZXh0LnRvRW1haWwsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnI2dpZnQtY2VydGlmaWNhdGUtZm9ybSBpbnB1dFtuYW1lPVwiZnJvbV9uYW1lXCJdJyxcclxuICAgICAgICAgICAgICAgIHZhbGlkYXRlOiAoY2IsIHZhbCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHB1cmNoYXNlTW9kZWwuc2VuZGVyTmFtZSh2YWwpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjYihyZXN1bHQpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGVycm9yTWVzc2FnZTogdGhpcy5jb250ZXh0LmZyb21OYW1lLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJyNnaWZ0LWNlcnRpZmljYXRlLWZvcm0gaW5wdXRbbmFtZT1cImZyb21fZW1haWxcIl0nLFxyXG4gICAgICAgICAgICAgICAgdmFsaWRhdGU6IChjYiwgdmFsKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gcHVyY2hhc2VNb2RlbC5zZW5kZXJFbWFpbCh2YWwpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjYihyZXN1bHQpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGVycm9yTWVzc2FnZTogdGhpcy5jb250ZXh0LmZyb21FbWFpbCxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6ICcjZ2lmdC1jZXJ0aWZpY2F0ZS1mb3JtIGlucHV0W25hbWU9XCJjZXJ0aWZpY2F0ZV90aGVtZVwiXTpmaXJzdC1vZi10eXBlJyxcclxuICAgICAgICAgICAgICAgIHRyaWdnZXJlZEJ5OiAnI2dpZnQtY2VydGlmaWNhdGUtZm9ybSBpbnB1dFtuYW1lPVwiY2VydGlmaWNhdGVfdGhlbWVcIl0nLFxyXG4gICAgICAgICAgICAgICAgdmFsaWRhdGU6IChjYikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHZhbCA9ICRwdXJjaGFzZUZvcm0uZmluZCgnaW5wdXRbbmFtZT1cImNlcnRpZmljYXRlX3RoZW1lXCJdOmNoZWNrZWQnKS52YWwoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY2IodHlwZW9mICh2YWwpID09PSAnc3RyaW5nJyk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZXJyb3JNZXNzYWdlOiB0aGlzLmNvbnRleHQuY2VydFRoZW1lLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJyNnaWZ0LWNlcnRpZmljYXRlLWZvcm0gaW5wdXRbbmFtZT1cImFncmVlXCJdJyxcclxuICAgICAgICAgICAgICAgIHZhbGlkYXRlOiAoY2IpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB2YWwgPSAkcHVyY2hhc2VGb3JtLmZpbmQoJ2lucHV0W25hbWU9XCJhZ3JlZVwiXScpLmdldCgwKS5jaGVja2VkO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjYih2YWwpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGVycm9yTWVzc2FnZTogdGhpcy5jb250ZXh0LmFncmVlVG9UZXJtcyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6ICcjZ2lmdC1jZXJ0aWZpY2F0ZS1mb3JtIGlucHV0W25hbWU9XCJhZ3JlZTJcIl0nLFxyXG4gICAgICAgICAgICAgICAgdmFsaWRhdGU6IChjYikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHZhbCA9ICRwdXJjaGFzZUZvcm0uZmluZCgnaW5wdXRbbmFtZT1cImFncmVlMlwiXScpLmdldCgwKS5jaGVja2VkO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjYih2YWwpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGVycm9yTWVzc2FnZTogdGhpcy5jb250ZXh0LmFncmVlVG9UZXJtcyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICBdKTtcclxuXHJcbiAgICAgICAgaWYgKCRjZXJ0QmFsYW5jZUZvcm0ubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGJhbGFuY2VWYWwgPSB0aGlzLmNoZWNrQ2VydEJhbGFuY2VWYWxpZGF0b3IoJGNlcnRCYWxhbmNlRm9ybSk7XHJcblxyXG4gICAgICAgICAgICAkY2VydEJhbGFuY2VGb3JtLm9uKCdzdWJtaXQnLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBiYWxhbmNlVmFsLnBlcmZvcm1DaGVjaygpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICghYmFsYW5jZVZhbC5hcmVBbGwoJ3ZhbGlkJykpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJHB1cmNoYXNlRm9ybS5vbignc3VibWl0JywgZXZlbnQgPT4ge1xyXG4gICAgICAgICAgICBwdXJjaGFzZVZhbGlkYXRvci5wZXJmb3JtQ2hlY2soKTtcclxuXHJcbiAgICAgICAgICAgIGlmICghcHVyY2hhc2VWYWxpZGF0b3IuYXJlQWxsKCd2YWxpZCcpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAkKCcjZ2lmdC1jZXJ0aWZpY2F0ZS1wcmV2aWV3JykuY2xpY2soZXZlbnQgPT4ge1xyXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICAgICAgcHVyY2hhc2VWYWxpZGF0b3IucGVyZm9ybUNoZWNrKCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoIXB1cmNoYXNlVmFsaWRhdG9yLmFyZUFsbCgndmFsaWQnKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjb25zdCBtb2RhbCA9IGRlZmF1bHRNb2RhbCgpO1xyXG4gICAgICAgICAgICBjb25zdCBwcmV2aWV3VXJsID0gYCR7JChldmVudC5jdXJyZW50VGFyZ2V0KS5kYXRhKCdwcmV2aWV3VXJsJyl9JiR7JHB1cmNoYXNlRm9ybS5zZXJpYWxpemUoKX1gO1xyXG5cclxuICAgICAgICAgICAgbW9kYWwub3BlbigpO1xyXG5cclxuICAgICAgICAgICAgYXBpLmdldFBhZ2UocHJldmlld1VybCwge30sIChlcnIsIGNvbnRlbnQpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChlcnIpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbW9kYWwudXBkYXRlQ29udGVudCh0aGlzLmNvbnRleHQucHJldmlld0Vycm9yKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBtb2RhbC51cGRhdGVDb250ZW50KGNvbnRlbnQsIHsgd3JhcDogdHJ1ZSB9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgY2hlY2tDZXJ0QmFsYW5jZVZhbGlkYXRvcigkYmFsYW5jZUZvcm0pIHtcclxuICAgICAgICBjb25zdCBiYWxhbmNlVmFsaWRhdG9yID0gbm9kKHtcclxuICAgICAgICAgICAgc3VibWl0OiAkYmFsYW5jZUZvcm0uZmluZCgnaW5wdXRbdHlwZT1cInN1Ym1pdFwiXScpLFxyXG4gICAgICAgICAgICB0YXA6IGFubm91bmNlSW5wdXRFcnJvck1lc3NhZ2UsXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGJhbGFuY2VWYWxpZGF0b3IuYWRkKHtcclxuICAgICAgICAgICAgc2VsZWN0b3I6ICRiYWxhbmNlRm9ybS5maW5kKCdpbnB1dFtuYW1lPVwiZ2lmdGNlcnRpZmljYXRlY29kZVwiXScpLFxyXG4gICAgICAgICAgICB2YWxpZGF0ZShjYiwgdmFsKSB7XHJcbiAgICAgICAgICAgICAgICBjYihjaGVja0lzR2lmdENlcnRWYWxpZCh2YWwpKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZXJyb3JNZXNzYWdlOiB0aGlzLnZhbGlkYXRpb25EaWN0aW9uYXJ5LmludmFsaWRfZ2lmdF9jZXJ0aWZpY2F0ZSxcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGJhbGFuY2VWYWxpZGF0b3I7XHJcbiAgICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==