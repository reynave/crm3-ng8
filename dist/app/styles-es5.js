(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"], {
  /***/
  "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./src/styles.css":
  /*!*****************************************************************************************************************************************************************!*\
    !*** ./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src??embedded!./src/styles.css ***!
    \*****************************************************************************************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesAngularDevkitBuildAngularSrcAngularCliFilesPluginsRawCssLoaderJsNode_modulesPostcssLoaderSrcIndexJsSrcStylesCss(module, exports) {
    module.exports = [[module.i, "html,\r\nbody {\r\n  overflow-x: hidden; /* Prevent scroll on narrow devices */\r\n}\r\n\r\nbody {  min-height: 100vh;\r\n    padding-top: 45px;\r\n}\r\n\r\n.navbar { \r\n    padding: 0px 10px;\r\n}\r\n\r\n.bg-primary{\r\n    background:#0075AA !important;\r\n}\r\n\r\n@media (min-width: 576px){\r\n    .modal-dialog {\r\n        max-width: 95%;\r\n        margin: 1.75rem auto;\r\n    }\r\n}\r\n\r\n@media (max-width: 991.98px) {\r\n  .offcanvas-collapse {\r\n    position: fixed;\r\n    top: 56px; /* Height of navbar */\r\n    bottom: 0;\r\n    left: 100%;\r\n    width: 100%;\r\n    padding-right: 1rem;\r\n    padding-left: 1rem;\r\n    overflow-y: auto;\r\n    visibility: hidden;\r\n    background-color: #343a40;\r\n    transition: visibility .3s ease-in-out, -webkit-transform .3s ease-in-out;\r\n    -webkit-transition: visibility .3s ease-in-out, -webkit-transform .3s ease-in-out;\r\n    transition: transform .3s ease-in-out, visibility .3s ease-in-out;\r\n    transition: transform .3s ease-in-out, visibility .3s ease-in-out, -webkit-transform .3s ease-in-out;\r\n  }\r\n  .offcanvas-collapse.open {\r\n    visibility: visible;\r\n    -webkit-transform: translateX(-100%);\r\n    transform: translateX(-100%);\r\n  }\r\n}\r\n\r\n.alert { \r\n    padding: 2px 10px; \r\n    border-radius: 0px;\r\n}\r\n\r\n.btn{\r\n    font-size: 12px;\r\n}\r\n\r\n.nav-scroller {\r\n  position: relative;\r\n  z-index: 2;\r\n  height: 2.75rem;\r\n  overflow-y: hidden;\r\n}\r\n\r\n.nav-scroller .nav {\r\n  display: -webkit-box;\r\n  display: flex;\r\n  flex-wrap: nowrap;\r\n  padding-bottom: 1rem;\r\n  margin-top: -1px;\r\n  overflow-x: auto;\r\n  color: rgba(255, 255, 255, .75);\r\n  text-align: center;\r\n  white-space: nowrap;\r\n  -webkit-overflow-scrolling: touch;\r\n}\r\n\r\n.nav-underline .nav-link {\r\n  padding-top: .75rem;\r\n  padding-bottom: .75rem;\r\n  font-size: .875rem;\r\n  color: #6c757d;\r\n}\r\n\r\n.nav-underline .nav-link:hover {\r\n  color: #007bff;\r\n}\r\n\r\n.nav-underline .active {\r\n  font-weight: 500;\r\n  color: #343a40;\r\n}\r\n\r\n.text-white-50 { color: rgba(255, 255, 255, .5); }\r\n\r\n.bg-purple { background-color: #6f42c1; }\r\n\r\n.lh-100 { line-height: 1; }\r\n\r\n.lh-125 { line-height: 1.25; }\r\n\r\n.lh-150 { line-height: 1.5; }\r\n\r\n.nav-link, .dropdown-item{\r\n    font-size: 14px; \r\n}\r\n\r\n.navbar-dark .navbar-nav .nav-link {\r\n    color: rgba(255,255,255,.5);\r\n    text-transform: uppercase;\r\n    font-size: 12px;\r\n    letter-spacing: 0.3px;\r\n}\r\n\r\n.navbar-themes {\r\n    border-bottom: 3px solid #ffa556!important;\r\n}\r\n\r\n.font-open-sand{\r\n    font-family: 'Open Sans', sans-serif;\r\n}\r\n\r\n.font-source-sans-pro{\r\n    font-family: 'Source Sans Pro', sans-serif;\r\n}\r\n\r\n.custom-control-label {\r\n    padding-top: 2px;\r\n}\r\n\r\n.container-header{\r\n    margin: 10px auto;\r\n}\r\n\r\n.module-name strong{\r\n    display: block;\r\n    line-height: 90%;\r\n}\r\n\r\ntable{\r\n    width: 100%;\r\n}\r\n\r\n.table-p0 tr{\r\n    line-height: 110%;\r\n}\r\n\r\n.table-p0 tr td{\r\n    padding-bottom: 0px;\r\n}\r\n\r\ntd {\r\n    vertical-align: text-top; \r\n}\r\n\r\nlabel{\r\n    font-family: 'Open Sans', sans-serif;\r\n    font-size: 13px;\r\n}\r\n\r\n.pointer{\r\n    cursor: pointer;\r\n}\r\n\r\na{\r\n    cursor: pointer;\r\n}\r\n\r\nb {\r\n    font-weight: bold;\r\n    font-size: .875rem;\r\n}\r\n\r\n.col-form-label {\r\n     font-size:13px;\r\n}\r\n\r\n.active label{\r\n    font-size: 12px;\r\n}\r\n\r\n.form-group {\r\n    margin-bottom: 10px;\r\n}\r\n\r\nstrong{\r\n    font-family: 'Source Sans Pro', sans-serif;\r\n    text-transform: uppercase;\r\n    font-size: 85%;\r\n}\r\n\r\ninput[type=\"number\"], input[type=\"text\"], input[type=\"email\"], input {\r\n   /* background: #fff url('./assets/imgs/iconfinder_pencil.png') no-repeat scroll;*/\r\n    background-size: 14px;\r\n    padding: 5px 5px;\r\n    \r\n    padding-right: 20px;\r\n    background-position-x: calc(100% - 5px);\r\n    background-position-y: 50%;\r\n}\r\n\r\ninput[type=\"text\"], input[type=\"email\"]{\r\n    width: 100%;\r\n}\r\n\r\ninput[type=\"number\"]{\r\n    width: auto;\r\n}\r\n\r\ninput[type=\"number\"], input[type=\"text\"], input[type=\"email\"], select, textarea{ \r\n   border-radius: 0px !important;\r\n}\r\n\r\ninput:required , select:required, textarea:required {\r\n    border-right: 3px solid red !important;\r\n}\r\n\r\ntextarea{\r\n    width: 100%;\r\n    height: 100px;\r\n    font-size: 13px;\r\n}\r\n\r\nselect{\r\n    background: #fff;\r\n    width:auto;\r\n    border: none;\r\n    padding: 4px ;\r\n    font-weight: 500;\r\n}\r\n\r\n.bg-gray{\r\n    background: #f5f5f5;\r\n}\r\n\r\n.bg-yellow-light{\r\n    background: #fffee8;\r\n}\r\n\r\n.form-control-sm:focus{\r\n   outline: none;\r\n}\r\n\r\n.price-desc{\r\n    font-size: 12px;\r\n    white-space: pre-line;\r\n}\r\n\r\n/** \r\nTABLE\r\n*/\r\n\r\n.inline{\r\n    width: auto !important;\r\n    display: inline !important;\r\n}\r\n\r\n.table td {\r\n    padding:4px 10px; \r\n    font-size: 13px;\r\n    font-family: 'Open Sans', sans-serif;\r\n}\r\n\r\n.table th {\r\n    padding:2px 10px;\r\n    font-size: 13px;\r\n    vertical-align: top !important;\r\n}\r\n\r\n.table td:hover, .table th:hover {\r\n     cursor: pointer;\r\n}\r\n\r\n.table .thead-light th {\r\n    color: #495057;\r\n    background-color: #fff;\r\n    border: none !important; \r\n    border-bottom: 1px solid #dee2e6;\r\n    font-weight: normal;\r\n    font-size: 12px;\r\n    text-transform: uppercase;\r\n    font-family: 'Source Sans Pro', sans-serif;\r\n}\r\n\r\n.table-hover tbody tr:hover {\r\n    color: #212529;\r\n    background-color: #E3F3FF;\r\n}\r\n\r\ntable a{\r\n     font-family: 'Open Sans', sans-serif;\r\n     text-decoration: underline;\r\n}\r\n\r\ntable ul{\r\n    margin: 0px;\r\n    padding: 0px;\r\n    margin-left: 20px;\r\n}\r\n\r\n.table .thead-light th {\r\n    border: 1px solid #e0e0e0;\r\n}\r\n\r\n.form-control, textarea{\r\n    padding: 3px 3px;\r\n    font-size: 13px;\r\n    height: auto;\r\n    min-height: 31px;\r\n}\r\n\r\n.form-radius{\r\n    display: inline;\r\n    border-radius:20px;\r\n    border: 1px solid #ccc!important;\r\n    \r\n}\r\n\r\n#dtable a{\r\n    text-decoration: none;;\r\n}\r\n\r\na.paginate_button.current {\r\n    padding: 0px !important;\r\n    margin: 0px;\r\n}\r\n\r\ntable.dataTable thead th, table.dataTable thead td {\r\n    padding: 4px 10px;\r\n    border-bottom: 1px solid #a4bad0;  \r\n}\r\n\r\ntable.dataTable tfoot th{\r\n    padding: 4px 10px;\r\n}\r\n\r\ntable.dataTable tbody th, table.dataTable tbody td {\r\n    padding: 4px 10px;\r\n}\r\n\r\ninput[type=\"search\"] {\r\n    border: 1px solid #ccc;\r\n    padding: 3px 5px;\r\n    min-width: 240px; \r\n    margin-bottom: 5px;\r\n}\r\n\r\n.dataTables_length select {\r\n    border: 1px solid #ccc;\r\n    margin-bottom: 5px;\r\n    padding: 3px 5px;\r\n}\r\n\r\n.border-top-blue{    border-top: 5px solid #007BFF !important; }\r\n\r\n.border-top-red{    border-top: 5px solid red !important; }\r\n\r\n.border-top-brown{    border-top: 5px solid brown !important; }\r\n\r\n.border-top-green{    border-top: 5px solid green !important; }\r\n\r\n.border-top-gray{    border-top: 5px solid gray !important; }\r\n\r\n.border-top-black{    border-top: 5px solid #000 !important; }\r\n\r\n.border-top-yellowgreen{    border-top: 5px solid yellowgreen !important; }\r\n\r\n.border-top-yellow{    border-top: 5px solid yellow !important; }\r\n\r\n.text-blue{   color: #007BFF !important; }\r\n\r\n.text-red{   color: red !important; }\r\n\r\n.text-brown{   color: brown !important; }\r\n\r\n.text-green{   color: green !important; }\r\n\r\n.text-gray{   color: gray !important; }\r\n\r\n.text-black{   color: #000 !important; }\r\n\r\n.text-yellowgreen{   color: yellowgreen !important; }\r\n\r\n.text-yellow{   color: yellow !important; }\r\n\r\n.text-grey {    color: #b9b9b9  !important; }\r\n\r\n.bg-blue{   background-color: #007BFF !important; }\r\n\r\n.bg-red{   background-color: red !important; }\r\n\r\n.bg-brown{   background-color: brown !important; }\r\n\r\n.bg-green{   background-color: green !important; }\r\n\r\n.bg-gray{   background-color: gray !important; }\r\n\r\n.bg-black{   background-color: #000 !important; }\r\n\r\n.bg-yellowgreen{   background-color: yellowgreen !important; }\r\n\r\n.bg-yellow{   background-color: yellow !important; }\r\n\r\ntable thead th { position: -webkit-sticky; position: sticky; top: 0; }\r\n\r\n.table-list:first-child td:first-child {\r\n   \r\n}\r\n\r\n.table-list:first-child td:nth-child(2){\r\n    font-weight: 500;\r\n}\r\n\r\n.table-list td{\r\n    border: none;\r\n    padding: 4px;\r\n    border-bottom: 1px solid #eee;\r\n}\r\n\r\n.table-list td label{\r\n    color: #222;\r\n}\r\n\r\n.btn-classic{\r\n    background: #fff;\r\n    border: 1.3px solid #ddd; \r\n}\r\n\r\n.btn-classic:hover{\r\n    background: #F8F9FA; \r\n}\r\n\r\nlabel {\r\n    display: inline-block;\r\n    margin-bottom: 0px; \r\n}\r\n\r\n.line-through{\r\n    text-decoration: line-through !important;\r\n}\r\n\r\nfieldset {\r\n    padding: 0px 10px;\r\n     border: 1px solid #ccc;\r\n     font-size: 14px;\r\n}\r\n\r\nfieldset legend{\r\n    width: auto;\r\n    max-width: auto; \r\n    padding: 0px 5px;\r\n    font-size: 16px;\r\n    color: #333;\r\n    margin-bottom: 0px;\r\n}\r\n\r\nfieldset table{\r\n    width: 100%;\r\n}\r\n\r\nfieldset table td{\r\n    padding: 8px 5px;\r\n}\r\n\r\n.font-sm{\r\n    font-size: 13px;\r\n}\r\n\r\n.form-control:disabled, .form-control[readonly] {\r\n   background-color: #fff;\r\n}\r\n\r\ninput[type=\"text\"]:-moz-read-only{\r\n    background:#f9f9f9;\r\n}\r\n\r\ninput[type=\"text\"]:read-only{\r\n    background:#f9f9f9;\r\n}\r\n\r\ninput[type=\"number\"]{\r\n    padding-right: 0px !important;\r\n}\r\n\r\ninput[type=\"text\"]:-moz-read-only,   input[type=\"number\"]:-moz-read-only,  select:disabled,  textarea:-moz-read-only {\r\n    background: #fff;\r\n    border:none;\r\n    border-bottom: 1px solid #ccc;\r\n}\r\n\r\ninput[type=\"text\"]:read-only,   input[type=\"number\"]:read-only,  select:disabled,  textarea:read-only {\r\n    background: #fff;\r\n    border:none;\r\n    border-bottom: 1px solid #ccc;\r\n}\r\n\r\ninput[type=\"text\"]:-moz-read-only:required,input[type=\"number\"]:-moz-read-only:required, select:-moz-read-only:required, textarea:-moz-read-only:required {\r\n  border-right: none;\r\n}\r\n\r\ninput[type=\"text\"]:read-only:required,input[type=\"number\"]:read-only:required, select:read-only:required, textarea:read-only:required {\r\n  border-right: none;\r\n}\r\n\r\n.form-description{\r\n  padding: 5px;\r\n  font-size: 12px;\r\n  background: none;\r\n}\r\n\r\n.dropdown-item{\r\n    text-decoration: none;\r\n}\r\n\r\n.required{\r\n    border-right: 3px solid red !important;\r\n}\r\n\r\n.form-style label{\r\n    font-size: 13px;\r\n    color: #9C988D;\r\n}\r\n\r\n.form-style .form-control{\r\n    border: none;\r\n    padding: 1px 0px;\r\n    border-bottom: 1px solid #ccc;\r\n    font-size: 16px;\r\n    margin-bottom: 5px;\r\n}\r\n\r\n.footer-menu{\r\n    position: fixed;\r\n    bottom: 0px;\r\n    left: 0px;\r\n    width: 100%;\r\n    z-index: 999;\r\n}\r\n\r\n@media (min-width: 992px){\r\n    .modal-lg, .modal-xl {\r\n        max-width: 990px;\r\n    }\r\n}\r\n\r\n.scroll-x {\r\n    width: 100%;\r\n    overflow-x: auto;\r\n    white-space: nowrap;\r\n    margin-bottom: 1em;\r\n}\r\n\r\n.scroll-x .table {\r\n    margin-bottom: 0px;\r\n}\r\n\r\n.scroll-style-2{\r\n    padding-right: 8px;\r\n}\r\n\r\n.scroll-style-2::-webkit-scrollbar-track\r\n{\r\n\t-webkit-box-shadow: inset 0 0 6px #F8F8F8;\r\n\tborder-radius: 10px;\r\n\tbackground-color: #F5F5F5;\r\n}\r\n\r\n.scroll-style-2::-webkit-scrollbar\r\n{\r\n\twidth: 6px;\r\n\tbackground-color: #F5F5F5;\r\n}\r\n\r\n.scroll-style-2::-webkit-scrollbar-thumb\r\n{\r\n\tborder-radius: 10px;\r\n\t-webkit-box-shadow: inset 0 0 6px #F8F8F8;\r\n\tbackground-color: #CCC;\r\n}\r\n\r\n.activity-log{\r\n    padding: 0px 10px 0px 20px;\r\n    position: relative;\r\n    border:1px solid #fff;\r\n    border-left: 2px solid #d9e3f7;\r\n    margin-bottom: 20px;\r\n    margin-left: 7px; \r\n}\r\n\r\n.activity-log  .content{\r\n    margin-top: -5px;\r\n}\r\n\r\n.activity-log .text{\r\n    font-size: 14px; \r\n}\r\n\r\n.activity-log .icon{\r\n    position: absolute;\r\n    left: -13px;\r\n    top: -2px;\r\n    border: 3px solid #fff;\r\n    background: #d9e3f7;\r\n    color: #fff;\r\n    padding: 1px 5px;\r\n    width: 26px;\r\n    font-size: 11px;\r\n    border-radius: 5px;\r\n}\r\n\r\n.act-1{    border-left-color:  #E6B2C6 !important;}\r\n\r\n.act-1 .icon{     background: #E6B2C6 !important; }\r\n\r\n.act-100{    border-left-color:  #B2DFFB !important;}\r\n\r\n.act-100 .icon{     background: #B2DFFB !important; }\r\n\r\n.act-200{    border-left-color:  #02d64f !important;}\r\n\r\n.act-200 .icon{     background: #02d64f !important; }\r\n\r\n.act-300{    border-left-color:  #FFC55C !important;}\r\n\r\n.act-300 .icon{     background: #FFC55C !important; }\r\n\r\n.act-400{    border-left-color:  #C7F0DB !important;}\r\n\r\n.act-400 .icon{     background: #C7F0DB !important; }\r\n\r\n.act-1001{    border-left-color:  #FFD271 !important;}\r\n\r\n.act-1001 .icon{     background: #FFD271 !important; }\r\n\r\n.bg-white-transparent{\r\n    background: rgba(255, 255, 255, .96);\r\n}\r\n\r\n.error-log{\r\n    overflow-y: auto;\r\n    max-height: 400px;\r\n}\r\n\r\n.error-container{\r\n    display: none;\r\n    position: fixed;\r\n    width: 100%;\r\n    top: 100px; left: 0px;\r\n    height: 100%;\r\n    z-index: 99999999;\r\n}\r\n\r\n.table-items tr td, .table-items tr th a{\r\n    font-size: 13px; line-height: 110%;\r\n    padding-bottom: 2px;\r\n}\r\n\r\n.tabset1 a.nav-link {\r\n    color: green;\r\n}\r\n\r\n.tabset1 a.nav-link.active {\r\n    color: red;\r\n    font-weight: bold;\r\n}\r\n\r\n.table-status{\r\n    padding: 0px;\r\n    margin: 0px;\r\n}\r\n\r\n.table-status tr td{\r\n    border-top: none;\r\n    padding: 1px; \r\n    background: #fff;\r\n}\r\n\r\n.table-status .bg-danger{\r\n    color: #fff;\r\n}\r\n\r\n.table-status .bg-primary{\r\n    color: #fff;\r\n}\r\n ", '', '']];
    /***/
  },

  /***/
  "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
  /*!****************************************************************************!*\
    !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
    \****************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesStyleLoaderDistRuntimeInjectStylesIntoStyleTagJs(module, exports, __webpack_require__) {
    "use strict";

    var stylesInDom = {};

    var isOldIE = function isOldIE() {
      var memo;
      return function memorize() {
        if (typeof memo === 'undefined') {
          // Test for IE <= 9 as proposed by Browserhacks
          // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
          // Tests for existence of standard globals is to allow style-loader
          // to operate correctly into non-standard environments
          // @see https://github.com/webpack-contrib/style-loader/issues/177
          memo = Boolean(window && document && document.all && !window.atob);
        }

        return memo;
      };
    }();

    var getTarget = function getTarget() {
      var memo = {};
      return function memorize(target) {
        if (typeof memo[target] === 'undefined') {
          var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

          if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
            try {
              // This will throw an exception if access to iframe is blocked
              // due to cross-origin restrictions
              styleTarget = styleTarget.contentDocument.head;
            } catch (e) {
              // istanbul ignore next
              styleTarget = null;
            }
          }

          memo[target] = styleTarget;
        }

        return memo[target];
      };
    }();

    function listToStyles(list, options) {
      var styles = [];
      var newStyles = {};

      for (var i = 0; i < list.length; i++) {
        var item = list[i];
        var id = options.base ? item[0] + options.base : item[0];
        var css = item[1];
        var media = item[2];
        var sourceMap = item[3];
        var part = {
          css: css,
          media: media,
          sourceMap: sourceMap
        };

        if (!newStyles[id]) {
          styles.push(newStyles[id] = {
            id: id,
            parts: [part]
          });
        } else {
          newStyles[id].parts.push(part);
        }
      }

      return styles;
    }

    function addStylesToDom(styles, options) {
      for (var i = 0; i < styles.length; i++) {
        var item = styles[i];
        var domStyle = stylesInDom[item.id];
        var j = 0;

        if (domStyle) {
          domStyle.refs++;

          for (; j < domStyle.parts.length; j++) {
            domStyle.parts[j](item.parts[j]);
          }

          for (; j < item.parts.length; j++) {
            domStyle.parts.push(addStyle(item.parts[j], options));
          }
        } else {
          var parts = [];

          for (; j < item.parts.length; j++) {
            parts.push(addStyle(item.parts[j], options));
          }

          stylesInDom[item.id] = {
            id: item.id,
            refs: 1,
            parts: parts
          };
        }
      }
    }

    function insertStyleElement(options) {
      var style = document.createElement('style');

      if (typeof options.attributes.nonce === 'undefined') {
        var nonce = true ? __webpack_require__.nc : undefined;

        if (nonce) {
          options.attributes.nonce = nonce;
        }
      }

      Object.keys(options.attributes).forEach(function (key) {
        style.setAttribute(key, options.attributes[key]);
      });

      if (typeof options.insert === 'function') {
        options.insert(style);
      } else {
        var target = getTarget(options.insert || 'head');

        if (!target) {
          throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
        }

        target.appendChild(style);
      }

      return style;
    }

    function removeStyleElement(style) {
      // istanbul ignore if
      if (style.parentNode === null) {
        return false;
      }

      style.parentNode.removeChild(style);
    }
    /* istanbul ignore next  */


    var replaceText = function replaceText() {
      var textStore = [];
      return function replace(index, replacement) {
        textStore[index] = replacement;
        return textStore.filter(Boolean).join('\n');
      };
    }();

    function applyToSingletonTag(style, index, remove, obj) {
      var css = remove ? '' : obj.css; // For old IE

      /* istanbul ignore if  */

      if (style.styleSheet) {
        style.styleSheet.cssText = replaceText(index, css);
      } else {
        var cssNode = document.createTextNode(css);
        var childNodes = style.childNodes;

        if (childNodes[index]) {
          style.removeChild(childNodes[index]);
        }

        if (childNodes.length) {
          style.insertBefore(cssNode, childNodes[index]);
        } else {
          style.appendChild(cssNode);
        }
      }
    }

    function applyToTag(style, options, obj) {
      var css = obj.css;
      var media = obj.media;
      var sourceMap = obj.sourceMap;

      if (media) {
        style.setAttribute('media', media);
      }

      if (sourceMap && btoa) {
        css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
      } // For old IE

      /* istanbul ignore if  */


      if (style.styleSheet) {
        style.styleSheet.cssText = css;
      } else {
        while (style.firstChild) {
          style.removeChild(style.firstChild);
        }

        style.appendChild(document.createTextNode(css));
      }
    }

    var singleton = null;
    var singletonCounter = 0;

    function addStyle(obj, options) {
      var style;
      var update;
      var remove;

      if (options.singleton) {
        var styleIndex = singletonCounter++;
        style = singleton || (singleton = insertStyleElement(options));
        update = applyToSingletonTag.bind(null, style, styleIndex, false);
        remove = applyToSingletonTag.bind(null, style, styleIndex, true);
      } else {
        style = insertStyleElement(options);
        update = applyToTag.bind(null, style, options);

        remove = function remove() {
          removeStyleElement(style);
        };
      }

      update(obj);
      return function updateStyle(newObj) {
        if (newObj) {
          if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
            return;
          }

          update(obj = newObj);
        } else {
          remove();
        }
      };
    }

    module.exports = function (list, options) {
      options = options || {};
      options.attributes = typeof options.attributes === 'object' ? options.attributes : {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
      // tags it will allow on a page

      if (!options.singleton && typeof options.singleton !== 'boolean') {
        options.singleton = isOldIE();
      }

      var styles = listToStyles(list, options);
      addStylesToDom(styles, options);
      return function update(newList) {
        var mayRemove = [];

        for (var i = 0; i < styles.length; i++) {
          var item = styles[i];
          var domStyle = stylesInDom[item.id];

          if (domStyle) {
            domStyle.refs--;
            mayRemove.push(domStyle);
          }
        }

        if (newList) {
          var newStyles = listToStyles(newList, options);
          addStylesToDom(newStyles, options);
        }

        for (var _i = 0; _i < mayRemove.length; _i++) {
          var _domStyle = mayRemove[_i];

          if (_domStyle.refs === 0) {
            for (var j = 0; j < _domStyle.parts.length; j++) {
              _domStyle.parts[j]();
            }

            delete stylesInDom[_domStyle.id];
          }
        }
      };
    };
    /***/

  },

  /***/
  "./src/styles.css":
  /*!************************!*\
    !*** ./src/styles.css ***!
    \************************/

  /*! no static exports found */

  /***/
  function srcStylesCss(module, exports, __webpack_require__) {
    var content = __webpack_require__(
    /*! !../node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!../node_modules/postcss-loader/src??embedded!./styles.css */
    "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./src/styles.css");

    if (typeof content === 'string') {
      content = [[module.i, content, '']];
    }

    var options = {};
    options.insert = "head";
    options.singleton = false;

    var update = __webpack_require__(
    /*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */
    "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

    if (content.locals) {
      module.exports = content.locals;
    }
    /***/

  },

  /***/
  3:
  /*!******************************!*\
    !*** multi ./src/styles.css ***!
    \******************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\xampp7433\htdocs\crm.co.id\crm3-ng8\src\styles.css */
    "./src/styles.css");
    /***/
  }
}, [[3, "runtime"]]]);