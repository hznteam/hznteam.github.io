exports.id = "component---node-modules-lekoarts-gatsby-theme-minimal-blog-core-src-templates-post-query-tsx-content-file-path-home-borja-proyectos-hznteam-github-io-content-posts-hola-nicheros-index-mdxhead";
exports.ids = ["component---node-modules-lekoarts-gatsby-theme-minimal-blog-core-src-templates-post-query-tsx-content-file-path-home-borja-proyectos-hznteam-github-io-content-posts-hola-nicheros-index-mdxhead"];
exports.modules = {

/***/ "./content/posts/hola-nicheros/index.mdx":
/*!***********************************************!*\
  !*** ./content/posts/hola-nicheros/index.mdx ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mdx-js/react */ "./node_modules/@mdx-js/react/lib/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/*@jsxRuntime classic @jsx React.createElement @jsxFrag React.Fragment*/


function _createMdxContent(props) {
  const _components = Object.assign({
    h1: "h1"
  }, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.useMDXComponents)(), props.components);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.h1, null, "Ya estamos aquí, preparados para empezar nueva aventura.");
}
function MDXContent(props = {}) {
  const {
    wrapper: MDXLayout
  } = Object.assign({}, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.useMDXComponents)(), props.components);
  return MDXLayout ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(MDXLayout, props, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_createMdxContent, props)) : _createMdxContent(props);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MDXContent);

/***/ }),

/***/ "./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/@lekoarts/gatsby-theme-minimal-blog-core/components/post.tsx":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/@lekoarts/gatsby-theme-minimal-blog-core/components/post.tsx ***!
  \***************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Head": () => (/* reexport safe */ _components_post__WEBPACK_IMPORTED_MODULE_1__.Head),
/* harmony export */   "default": () => (/* binding */ MinimalBlogCorePost)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_post__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../components/post */ "./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/components/post.tsx");


function MinimalBlogCorePost({
  ...props
}) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_post__WEBPACK_IMPORTED_MODULE_1__["default"], props);
}


/***/ }),

/***/ "./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/components/code.tsx":
/*!**********************************************************************************!*\
  !*** ./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/components/code.tsx ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! theme-ui */ "./node_modules/@theme-ui/color-modes/dist/theme-ui-color-modes.esm.js");
/* harmony import */ var prism_react_renderer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prism-react-renderer */ "./node_modules/prism-react-renderer/dist/index.js");
/* harmony import */ var _lekoarts_themes_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @lekoarts/themes-utils */ "./node_modules/@lekoarts/themes-utils/dist/index.mjs");
/* harmony import */ var prism_react_renderer_themes_github__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! prism-react-renderer/themes/github */ "./node_modules/prism-react-renderer/themes/github/index.js");
/* harmony import */ var prism_react_renderer_themes_vsDark__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prism-react-renderer/themes/vsDark */ "./node_modules/prism-react-renderer/themes/vsDark/index.js");
/* harmony import */ var _copy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./copy */ "./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/components/copy.tsx");
/* harmony import */ var _hooks_use_minimal_blog_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../hooks/use-minimal-blog-config */ "./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/hooks/use-minimal-blog-config.tsx");








const Code = ({
  codeString,
  withLineNumbers = false,
  title = ``,
  className: blockClassName,
  highlight = ``
}) => {
  const {
    showLineNumbers,
    showCopyButton
  } = (0,_hooks_use_minimal_blog_config__WEBPACK_IMPORTED_MODULE_3__["default"])();
  const [colorMode] = (0,theme_ui__WEBPACK_IMPORTED_MODULE_4__.useColorMode)();
  const isDark = colorMode === `dark`;
  const language = (0,_lekoarts_themes_utils__WEBPACK_IMPORTED_MODULE_1__.getLanguage)(blockClassName);
  const shouldHighlightLine = (0,_lekoarts_themes_utils__WEBPACK_IMPORTED_MODULE_1__.calculateLinesToHighlight)(highlight);
  const shouldShowLineNumbers = withLineNumbers || showLineNumbers;
  return /*#__PURE__*/(
    // @ts-ignore
    react__WEBPACK_IMPORTED_MODULE_0__.createElement(prism_react_renderer__WEBPACK_IMPORTED_MODULE_5__["default"], Object.assign({}, prism_react_renderer__WEBPACK_IMPORTED_MODULE_5__.defaultProps, {
      code: codeString,
      language: language,
      theme: isDark ? prism_react_renderer_themes_vsDark__WEBPACK_IMPORTED_MODULE_6__["default"] : prism_react_renderer_themes_github__WEBPACK_IMPORTED_MODULE_7__["default"]
    }), ({
      className,
      style,
      tokens,
      getLineProps,
      getTokenProps
    }) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "gatsby-highlight",
      "data-language": language
    }, title && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "code-title"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, title)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("pre", {
      className: className,
      style: style,
      "data-linenumber": shouldShowLineNumbers
    }, showCopyButton && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_copy__WEBPACK_IMPORTED_MODULE_2__["default"], {
      content: codeString,
      fileName: title
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("code", {
      className: `language-${language}`
    }, tokens.map((line, i) => {
      const lineProps = getLineProps({
        line,
        key: i
      });
      if (shouldHighlightLine(i)) {
        lineProps.className = `${lineProps.className} highlight-line`;
        lineProps.style = {
          ...lineProps.style,
          backgroundColor: isDark ? `rgba(255, 255, 255, 0.1)` : `rgba(0, 0, 0, 0.035)`
        };
      }
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", lineProps, shouldShowLineNumbers && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
        className: "line-number-style"
      }, i + 1), line.map((token, key) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", getTokenProps({
        token,
        key
      }))));
    }))))))
  );
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Code);

/***/ }),

/***/ "./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/components/colormode-toggle.tsx":
/*!**********************************************************************************************!*\
  !*** ./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/components/colormode-toggle.tsx ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! theme-ui */ "./node_modules/theme-ui/dist/theme-ui.esm.js");
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ "./node_modules/@theme-ui/css/dist/theme-ui-css.esm.js");
/** @jsx jsx */

// Adapted from: https://codepen.io/aaroniker/pen/KGpXZo and https://github.com/narative/gatsby-theme-novela/blob/714b6209c5bd61b220370e8a7ad84c0b1407946a/%40narative/gatsby-theme-novela/src/components/Navigation/Navigation.Header.tsx

const ColorModeToggle = ({
  isDark,
  toggle
}) => (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", {
  onClick: toggle,
  type: "button",
  "aria-label": isDark ? `Activate Light Mode` : `Activate Dark Mode`,
  title: isDark ? `Activate Light Mode` : `Activate Dark Mode`,
  sx: {
    opacity: 0.65,
    position: `relative`,
    borderRadius: `4px`,
    width: `40px`,
    height: `25px`,
    display: `flex`,
    alignItems: `center`,
    justifyContent: `center`,
    transition: `opacity 0.3s ease`,
    border: `none`,
    outline: `none`,
    background: `none`,
    cursor: `pointer`,
    padding: 0,
    appearance: `none`,
    "&:hover, &:focus": {
      opacity: 1
    }
  }
}, (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
  sx: {
    position: `relative`,
    width: `24px`,
    height: `24px`,
    borderRadius: `50%`,
    border: t => isDark ? `4px solid ${(0,theme_ui__WEBPACK_IMPORTED_MODULE_1__.get)(t, `colors.toggleIcon`)}` : `none`,
    backgroundColor: isDark ? `toggleIcon` : `transparent`,
    transform: isDark ? `scale(0.55)` : `scale(1)`,
    transition: `all 0.45s ease`,
    overflow: isDark ? `visible` : `hidden`,
    boxShadow: t => isDark ? `none` : `inset 8px -8px 0px 0px ${(0,theme_ui__WEBPACK_IMPORTED_MODULE_1__.get)(t, `colors.toggleIcon`)}`,
    "&:before": {
      content: `""`,
      position: `absolute`,
      right: `-9px`,
      top: `-9px`,
      height: `24px`,
      width: `24px`,
      border: t => isDark ? `2px solid ${(0,theme_ui__WEBPACK_IMPORTED_MODULE_1__.get)(t, `colors.toggleIcon`)}` : `none`,
      borderRadius: `50%`,
      transform: isDark ? `translate(14px, -14px)` : `translate(0, 0)`,
      opacity: isDark ? 0 : 1,
      transition: `transform 0.45s ease`
    },
    "&:after": {
      content: `""`,
      width: `8px`,
      height: `8px`,
      borderRadius: `50%`,
      margin: `-4px 0 0 -4px`,
      position: `absolute`,
      top: `50%`,
      left: `50%`,
      boxShadow: t => `0 -23px 0 ${(0,theme_ui__WEBPACK_IMPORTED_MODULE_1__.get)(t, `colors.toggleIcon`)}, 0 23px 0 ${(0,theme_ui__WEBPACK_IMPORTED_MODULE_1__.get)(t, `colors.toggleIcon`)}, 23px 0 0 ${(0,theme_ui__WEBPACK_IMPORTED_MODULE_1__.get)(t, `colors.toggleIcon`)}, -23px 0 0 ${(0,theme_ui__WEBPACK_IMPORTED_MODULE_1__.get)(t, `colors.toggleIcon`)}, 15px 15px 0 ${(0,theme_ui__WEBPACK_IMPORTED_MODULE_1__.get)(t, `colors.toggleIcon`)}, -15px 15px 0 ${(0,theme_ui__WEBPACK_IMPORTED_MODULE_1__.get)(t, `colors.toggleIcon`)}, 15px -15px 0 ${(0,theme_ui__WEBPACK_IMPORTED_MODULE_1__.get)(t, `colors.toggleIcon`)}, -15px -15px 0 ${(0,theme_ui__WEBPACK_IMPORTED_MODULE_1__.get)(t, `colors.toggleIcon`)}`,
      transform: isDark ? `scale(1)` : `scale(0)`,
      transition: `all 0.35s ease`
    }
  }
}));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ColorModeToggle);

/***/ }),

/***/ "./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/components/copy.tsx":
/*!**********************************************************************************!*\
  !*** ./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/components/copy.tsx ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! theme-ui */ "./node_modules/theme-ui/dist/theme-ui.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/copy-to-clipboard */ "./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/utils/copy-to-clipboard.ts");
/* harmony import */ var _styles_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/utils */ "./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/styles/utils.ts");
/** @jsx jsx */




const delay = duration => new Promise(resolve => {
  setTimeout(resolve, duration);
});
const Copy = ({
  content,
  duration = 5000,
  fileName = ``,
  trim = false
}) => {
  const {
    0: copied,
    1: setCopied
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const label = copied ? `${fileName ? `${fileName} ` : ``}copied to clipboard` : `${fileName ? `${fileName}: ` : ``}copy code to clipboard`;
  return (0,theme_ui__WEBPACK_IMPORTED_MODULE_3__.jsx)("button", {
    type: "button",
    name: label,
    disabled: copied,
    className: "code-copy-button",
    sx: {
      variant: `copyButton`
    },
    onClick: async () => {
      await (0,_utils_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_1__["default"])(trim ? content.trim() : content);
      setCopied(true);
      await delay(duration);
      setCopied(false);
    }
  }, copied ? `Copied` : `Copy`, (0,theme_ui__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
    sx: _styles_utils__WEBPACK_IMPORTED_MODULE_2__.visuallyHidden,
    "aria-roledescription": "status"
  }, label));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Copy);

/***/ }),

/***/ "./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/components/footer.tsx":
/*!************************************************************************************!*\
  !*** ./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/components/footer.tsx ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ "./node_modules/theme-ui/dist/theme-ui.esm.js");
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! theme-ui */ "./node_modules/@theme-ui/components/dist/theme-ui-components.esm.js");
/* harmony import */ var _hooks_use_site_metadata__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../hooks/use-site-metadata */ "./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/hooks/use-site-metadata.tsx");
/** @jsx jsx */


const Footer = () => {
  const {
    siteTitle
  } = (0,_hooks_use_site_metadata__WEBPACK_IMPORTED_MODULE_0__["default"])();
  return (0,theme_ui__WEBPACK_IMPORTED_MODULE_1__.jsx)("footer", {
    sx: {
      boxSizing: `border-box`,
      display: `flex`,
      justifyContent: `space-between`,
      mt: [6],
      color: `secondary`,
      a: {
        variant: `links.secondary`
      },
      flexDirection: [`column`, `column`, `row`],
      variant: `dividers.top`
    }
  }, (0,theme_ui__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", null, "\xA9 ", new Date().getFullYear(), " by ", siteTitle, ". All rights reserved."), (0,theme_ui__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", null, (0,theme_ui__WEBPACK_IMPORTED_MODULE_1__.jsx)(theme_ui__WEBPACK_IMPORTED_MODULE_2__.Link, {
    "aria-label": "Link to the theme's GitHub repository",
    href: "https://github.com/LekoArts/gatsby-themes/tree/main/themes/gatsby-theme-minimal-blog"
  }, "Theme"), ` `, "by", ` `, (0,theme_ui__WEBPACK_IMPORTED_MODULE_1__.jsx)(theme_ui__WEBPACK_IMPORTED_MODULE_2__.Link, {
    "aria-label": "Link to the theme author's website",
    href: "https://www.lekoarts.de?utm_source=minimal-blog&utm_medium=Theme"
  }, "LekoArts")));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Footer);

/***/ }),

/***/ "./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/components/header-external-links.tsx":
/*!***************************************************************************************************!*\
  !*** ./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/components/header-external-links.tsx ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! theme-ui */ "./node_modules/theme-ui/dist/theme-ui.esm.js");
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! theme-ui */ "./node_modules/@theme-ui/components/dist/theme-ui-components.esm.js");
/* harmony import */ var _hooks_use_minimal_blog_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../hooks/use-minimal-blog-config */ "./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/hooks/use-minimal-blog-config.tsx");
/** @jsx jsx */



const HeaderExternalLinks = () => {
  const {
    externalLinks
  } = (0,_hooks_use_minimal_blog_config__WEBPACK_IMPORTED_MODULE_1__["default"])();
  return (0,theme_ui__WEBPACK_IMPORTED_MODULE_2__.jsx)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, externalLinks && externalLinks.length > 0 && (0,theme_ui__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
    sx: {
      "a:not(:first-of-type)": {
        ml: 3
      },
      fontSize: [1, `18px`]
    }
  }, externalLinks.map(link => (0,theme_ui__WEBPACK_IMPORTED_MODULE_2__.jsx)(theme_ui__WEBPACK_IMPORTED_MODULE_3__.Link, {
    key: link.url,
    href: link.url
  }, link.name))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HeaderExternalLinks);

/***/ }),

/***/ "./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/components/header-title.tsx":
/*!******************************************************************************************!*\
  !*** ./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/components/header-title.tsx ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! theme-ui */ "./node_modules/theme-ui/dist/theme-ui.esm.js");
/* harmony import */ var _utils_replaceSlashes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/replaceSlashes */ "./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/utils/replaceSlashes.ts");
/* harmony import */ var _hooks_use_site_metadata__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hooks/use-site-metadata */ "./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/hooks/use-site-metadata.tsx");
/* harmony import */ var _hooks_use_minimal_blog_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../hooks/use-minimal-blog-config */ "./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/hooks/use-minimal-blog-config.tsx");
/** @jsx jsx */





const HeaderTitle = () => {
  const {
    siteTitle
  } = (0,_hooks_use_site_metadata__WEBPACK_IMPORTED_MODULE_2__["default"])();
  const {
    basePath
  } = (0,_hooks_use_minimal_blog_config__WEBPACK_IMPORTED_MODULE_3__["default"])();
  return (0,theme_ui__WEBPACK_IMPORTED_MODULE_4__.jsx)(gatsby__WEBPACK_IMPORTED_MODULE_0__.Link, {
    to: (0,_utils_replaceSlashes__WEBPACK_IMPORTED_MODULE_1__["default"])(`/${basePath}`),
    "aria-label": `${siteTitle} - Back to home`,
    sx: {
      color: `heading`,
      textDecoration: `none`
    }
  }, (0,theme_ui__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
    sx: {
      my: 0,
      fontWeight: `semibold`,
      fontSize: [3, 4]
    }
  }, siteTitle));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HeaderTitle);

/***/ }),

/***/ "./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/components/header.tsx":
/*!************************************************************************************!*\
  !*** ./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/components/header.tsx ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! theme-ui */ "./node_modules/@theme-ui/color-modes/dist/theme-ui-color-modes.esm.js");
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! theme-ui */ "./node_modules/theme-ui/dist/theme-ui.esm.js");
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! theme-ui */ "./node_modules/@theme-ui/components/dist/theme-ui-components.esm.js");
/* harmony import */ var _hooks_use_minimal_blog_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../hooks/use-minimal-blog-config */ "./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/hooks/use-minimal-blog-config.tsx");
/* harmony import */ var _colormode_toggle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./colormode-toggle */ "./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/components/colormode-toggle.tsx");
/* harmony import */ var _navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./navigation */ "./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/components/navigation.tsx");
/* harmony import */ var _header_title__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./header-title */ "./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/components/header-title.tsx");
/* harmony import */ var _header_external_links__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./header-external-links */ "./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/components/header-external-links.tsx");
/** @jsx jsx */






const Header = () => {
  const {
    navigation: nav
  } = (0,_hooks_use_minimal_blog_config__WEBPACK_IMPORTED_MODULE_0__["default"])();
  const [colorMode, setColorMode] = (0,theme_ui__WEBPACK_IMPORTED_MODULE_5__.useColorMode)();
  const isDark = colorMode === `dark`;
  const toggleColorMode = e => {
    e.preventDefault();
    setColorMode(isDark ? `light` : `dark`);
  };
  return (0,theme_ui__WEBPACK_IMPORTED_MODULE_6__.jsx)("header", {
    sx: {
      mb: [5, 6]
    }
  }, (0,theme_ui__WEBPACK_IMPORTED_MODULE_6__.jsx)(theme_ui__WEBPACK_IMPORTED_MODULE_7__.Flex, {
    sx: {
      alignItems: `center`,
      justifyContent: `space-between`
    }
  }, (0,theme_ui__WEBPACK_IMPORTED_MODULE_6__.jsx)(_header_title__WEBPACK_IMPORTED_MODULE_3__["default"], null), (0,theme_ui__WEBPACK_IMPORTED_MODULE_6__.jsx)(_colormode_toggle__WEBPACK_IMPORTED_MODULE_1__["default"], {
    isDark: isDark,
    toggle: toggleColorMode
  })), (0,theme_ui__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
    sx: {
      boxSizing: `border-box`,
      display: `flex`,
      variant: `dividers.bottom`,
      alignItems: `center`,
      justifyContent: `space-between`,
      mt: 3,
      color: `secondary`,
      a: {
        color: `secondary`,
        ":hover": {
          color: `heading`
        }
      },
      flexFlow: `wrap`
    }
  }, (0,theme_ui__WEBPACK_IMPORTED_MODULE_6__.jsx)(_navigation__WEBPACK_IMPORTED_MODULE_2__["default"], {
    nav: nav
  }), (0,theme_ui__WEBPACK_IMPORTED_MODULE_6__.jsx)(_header_external_links__WEBPACK_IMPORTED_MODULE_4__["default"], null)));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);

/***/ }),

/***/ "./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/components/item-tags.tsx":
/*!***************************************************************************************!*\
  !*** ./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/components/item-tags.tsx ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! theme-ui */ "./node_modules/theme-ui/dist/theme-ui.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var _hooks_use_minimal_blog_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hooks/use-minimal-blog-config */ "./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/hooks/use-minimal-blog-config.tsx");
/* harmony import */ var _utils_replaceSlashes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/replaceSlashes */ "./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/utils/replaceSlashes.ts");
/** @jsx jsx */





const ItemTags = ({
  tags
}) => {
  const {
    tagsPath,
    basePath
  } = (0,_hooks_use_minimal_blog_config__WEBPACK_IMPORTED_MODULE_2__["default"])();
  return (0,theme_ui__WEBPACK_IMPORTED_MODULE_4__.jsx)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, tags.map((tag, i) => (0,theme_ui__WEBPACK_IMPORTED_MODULE_4__.jsx)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    key: tag.slug
  }, !!i && `, `, (0,theme_ui__WEBPACK_IMPORTED_MODULE_4__.jsx)(gatsby__WEBPACK_IMPORTED_MODULE_1__.Link, {
    sx: t => {
      var _t$styles;
      return {
        ...((_t$styles = t.styles) === null || _t$styles === void 0 ? void 0 : _t$styles.a)
      };
    },
    to: (0,_utils_replaceSlashes__WEBPACK_IMPORTED_MODULE_3__["default"])(`/${basePath}/${tagsPath}/${tag.slug}`)
  }, tag.name))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ItemTags);

/***/ }),

/***/ "./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/components/layout.tsx":
/*!************************************************************************************!*\
  !*** ./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/components/layout.tsx ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @emotion/react */ "./node_modules/@emotion/react/dist/emotion-react.esm.js");
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! theme-ui */ "./node_modules/theme-ui/dist/theme-ui.esm.js");
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! theme-ui */ "./node_modules/@theme-ui/css/dist/theme-ui-css.esm.js");
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! theme-ui */ "./node_modules/@theme-ui/components/dist/theme-ui-components.esm.js");
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mdx-js/react */ "./node_modules/@mdx-js/react/lib/index.js");
/* harmony import */ var _mdx_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mdx-components */ "./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/components/mdx-components.tsx");
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header */ "./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/components/header.tsx");
/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./footer */ "./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/components/footer.tsx");
/* harmony import */ var _styles_code__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/code */ "./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/styles/code.ts");
/* harmony import */ var _skip_nav__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./skip-nav */ "./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/components/skip-nav.tsx");
/** @jsx jsx */









const Layout = ({
  children,
  className = ``
}) => (0,theme_ui__WEBPACK_IMPORTED_MODULE_5__.jsx)(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.MDXProvider, {
  components: _mdx_components__WEBPACK_IMPORTED_MODULE_0__["default"]
}, (0,theme_ui__WEBPACK_IMPORTED_MODULE_5__.jsx)(_emotion_react__WEBPACK_IMPORTED_MODULE_7__.Global, {
  styles: t => ({
    "*": {
      boxSizing: `inherit`
    },
    html: {
      WebkitTextSizeAdjust: `100%`
    },
    img: {
      borderStyle: `none`
    },
    pre: {
      fontFamily: `monospace`,
      fontSize: `1em`
    },
    "[hidden]": {
      display: `none`
    },
    "::selection": {
      backgroundColor: (0,theme_ui__WEBPACK_IMPORTED_MODULE_8__.get)(t, `colors.text`),
      color: (0,theme_ui__WEBPACK_IMPORTED_MODULE_8__.get)(t, `colors.background`)
    },
    a: {
      transition: `all 0.3s ease-in-out`,
      color: `text`
    }
  })
}), (0,theme_ui__WEBPACK_IMPORTED_MODULE_5__.jsx)(_skip_nav__WEBPACK_IMPORTED_MODULE_4__["default"], null, "Skip to content"), (0,theme_ui__WEBPACK_IMPORTED_MODULE_5__.jsx)(theme_ui__WEBPACK_IMPORTED_MODULE_9__.Container, null, (0,theme_ui__WEBPACK_IMPORTED_MODULE_5__.jsx)(_header__WEBPACK_IMPORTED_MODULE_1__["default"], null), (0,theme_ui__WEBPACK_IMPORTED_MODULE_5__.jsx)(theme_ui__WEBPACK_IMPORTED_MODULE_9__.Box, {
  id: "skip-nav",
  as: "main",
  variant: "layout.main",
  sx: {
    ..._styles_code__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  className: className
}, children), (0,theme_ui__WEBPACK_IMPORTED_MODULE_5__.jsx)(_footer__WEBPACK_IMPORTED_MODULE_2__["default"], null)));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Layout);

/***/ }),

/***/ "./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/components/mdx-components.tsx":
/*!********************************************************************************************!*\
  !*** ./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/components/mdx-components.tsx ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! theme-ui */ "./node_modules/@theme-ui/components/dist/theme-ui-components.esm.js");
/* harmony import */ var _lekoarts_themes_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @lekoarts/themes-utils */ "./node_modules/@lekoarts/themes-utils/dist/index.mjs");
/* harmony import */ var _code__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./code */ "./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/components/code.tsx");
/* harmony import */ var _title__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./title */ "./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/components/title.tsx");





const MdxComponents = {
  Text: props => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(theme_ui__WEBPACK_IMPORTED_MODULE_4__.Text, props),
  Title: props => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_title__WEBPACK_IMPORTED_MODULE_3__["default"], props),
  pre: preProps => {
    const props = (0,_lekoarts_themes_utils__WEBPACK_IMPORTED_MODULE_1__.preToCodeBlock)(preProps);
    // if there's a codeString and some props, we passed the test
    if (props) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_code__WEBPACK_IMPORTED_MODULE_2__["default"], props);
    }
    // it's possible to have a pre without a code in it
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("pre", preProps);
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MdxComponents);

/***/ }),

/***/ "./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/components/navigation.tsx":
/*!****************************************************************************************!*\
  !*** ./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/components/navigation.tsx ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! theme-ui */ "./node_modules/theme-ui/dist/theme-ui.esm.js");
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var _hooks_use_minimal_blog_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hooks/use-minimal-blog-config */ "./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/hooks/use-minimal-blog-config.tsx");
/* harmony import */ var _utils_replaceSlashes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/replaceSlashes */ "./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/utils/replaceSlashes.ts");
/** @jsx jsx */





const Navigation = ({
  nav
}) => {
  const {
    basePath
  } = (0,_hooks_use_minimal_blog_config__WEBPACK_IMPORTED_MODULE_2__["default"])();
  return (0,theme_ui__WEBPACK_IMPORTED_MODULE_4__.jsx)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, nav && nav.length > 0 && (0,theme_ui__WEBPACK_IMPORTED_MODULE_4__.jsx)("nav", {
    sx: {
      "a:not(:last-of-type)": {
        mr: 3
      },
      fontSize: [1, `18px`],
      ".active": {
        color: `heading`
      }
    }
  }, nav.map(item => (0,theme_ui__WEBPACK_IMPORTED_MODULE_4__.jsx)(gatsby__WEBPACK_IMPORTED_MODULE_1__.Link, {
    activeClassName: "active",
    key: item.slug,
    sx: t => {
      var _t$styles;
      return {
        ...((_t$styles = t.styles) === null || _t$styles === void 0 ? void 0 : _t$styles.a)
      };
    },
    to: (0,_utils_replaceSlashes__WEBPACK_IMPORTED_MODULE_3__["default"])(`/${basePath}/${item.slug}`)
  }, item.title))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Navigation);

/***/ }),

/***/ "./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/components/post-footer.tsx":
/*!*****************************************************************************************!*\
  !*** ./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/components/post-footer.tsx ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* eslint-disable @typescript-eslint/no-unused-vars */

const PostFooter = ({
  post
}) => null;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PostFooter);

/***/ }),

/***/ "./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/components/post.tsx":
/*!**********************************************************************************!*\
  !*** ./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/components/post.tsx ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Head": () => (/* binding */ Head),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! theme-ui */ "./node_modules/theme-ui/dist/theme-ui.esm.js");
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! theme-ui */ "./node_modules/@theme-ui/components/dist/theme-ui-components.esm.js");
/* harmony import */ var _layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./layout */ "./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/components/layout.tsx");
/* harmony import */ var _item_tags__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./item-tags */ "./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/components/item-tags.tsx");
/* harmony import */ var _seo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./seo */ "./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/components/seo.tsx");
/* harmony import */ var _post_footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./post-footer */ "./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/components/post-footer.tsx");
/** @jsx jsx */







const px = [`16px`, `8px`, `4px`];
const shadow = px.map(v => `rgba(0, 0, 0, 0.1) 0px ${v} ${v} 0px`);
const Post = ({
  data: {
    post
  },
  children
}) => (0,theme_ui__WEBPACK_IMPORTED_MODULE_5__.jsx)(_layout__WEBPACK_IMPORTED_MODULE_1__["default"], null, (0,theme_ui__WEBPACK_IMPORTED_MODULE_5__.jsx)(theme_ui__WEBPACK_IMPORTED_MODULE_6__.Heading, {
  as: "h1",
  variant: "styles.h1"
}, post.title), (0,theme_ui__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
  sx: {
    color: `secondary`,
    mt: 3,
    a: {
      color: `secondary`
    },
    fontSize: [1, 1, 2]
  }
}, (0,theme_ui__WEBPACK_IMPORTED_MODULE_5__.jsx)("time", null, post.date), post.tags && (0,theme_ui__WEBPACK_IMPORTED_MODULE_5__.jsx)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, ` — `, (0,theme_ui__WEBPACK_IMPORTED_MODULE_5__.jsx)(_item_tags__WEBPACK_IMPORTED_MODULE_2__["default"], {
  tags: post.tags
})), post.timeToRead && ` — `, post.timeToRead && (0,theme_ui__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", null, post.timeToRead, " min read")), (0,theme_ui__WEBPACK_IMPORTED_MODULE_5__.jsx)("section", {
  sx: {
    my: 5,
    ".gatsby-resp-image-wrapper": {
      my: [4, 4, 5],
      borderRadius: `4px`,
      boxShadow: shadow.join(`, `),
      ".gatsby-resp-image-image": {
        borderRadius: `4px`
      }
    },
    variant: `layout.content`
  }
}, children), (0,theme_ui__WEBPACK_IMPORTED_MODULE_5__.jsx)(_post_footer__WEBPACK_IMPORTED_MODULE_4__["default"], {
  post: post
}));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Post);
const Head = ({
  data: {
    post
  }
}) => {
  var _post$banner, _post$banner$childIma, _post$banner$childIma2;
  return (0,theme_ui__WEBPACK_IMPORTED_MODULE_5__.jsx)(_seo__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: post.title,
    description: post.description ? post.description : post.excerpt,
    image: post.banner ? (_post$banner = post.banner) === null || _post$banner === void 0 ? void 0 : (_post$banner$childIma = _post$banner.childImageSharp) === null || _post$banner$childIma === void 0 ? void 0 : (_post$banner$childIma2 = _post$banner$childIma.resize) === null || _post$banner$childIma2 === void 0 ? void 0 : _post$banner$childIma2.src : undefined,
    pathname: post.slug,
    canonicalUrl: post.canonicalUrl
  });
};

/***/ }),

/***/ "./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/components/seo.tsx":
/*!*********************************************************************************!*\
  !*** ./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/components/seo.tsx ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var _hooks_use_site_metadata__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hooks/use-site-metadata */ "./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/hooks/use-site-metadata.tsx");



const Seo = ({
  title = ``,
  description = ``,
  pathname = ``,
  image = ``,
  children = null,
  canonicalUrl = ``
}) => {
  const site = (0,_hooks_use_site_metadata__WEBPACK_IMPORTED_MODULE_2__["default"])();
  const {
    siteTitle,
    siteTitleAlt: defaultTitle,
    siteUrl,
    siteDescription: defaultDescription,
    siteImage: defaultImage,
    author
  } = site;
  const seo = {
    title: title ? `${title} | ${siteTitle}` : defaultTitle,
    description: description || defaultDescription,
    url: `${siteUrl}${pathname || ``}`,
    image: `${siteUrl}${image || defaultImage}`
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("title", null, seo.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta", {
    name: "description",
    content: seo.description
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta", {
    name: "image",
    content: seo.image
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta", {
    property: "og:title",
    content: seo.title
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta", {
    property: "og:url",
    content: seo.url
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta", {
    property: "og:description",
    content: seo.description
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta", {
    property: "og:image",
    content: seo.image
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta", {
    property: "og:type",
    content: "website"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta", {
    property: "og:image:alt",
    content: seo.description
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta", {
    name: "twitter:card",
    content: "summary_large_image"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta", {
    name: "twitter:title",
    content: seo.title
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta", {
    name: "twitter:url",
    content: seo.url
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta", {
    name: "twitter:description",
    content: seo.description
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta", {
    name: "twitter:image",
    content: seo.image
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta", {
    name: "twitter:image:alt",
    content: seo.description
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta", {
    name: "twitter:creator",
    content: author
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta", {
    name: "gatsby-theme",
    content: "@lekoarts/gatsby-theme-minimal-blog"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("link", {
    rel: "icon",
    type: "image/png",
    sizes: "32x32",
    href: (0,gatsby__WEBPACK_IMPORTED_MODULE_1__.withPrefix)(`/favicon-32x32.png`)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("link", {
    rel: "icon",
    type: "image/png",
    sizes: "16x16",
    href: (0,gatsby__WEBPACK_IMPORTED_MODULE_1__.withPrefix)(`/favicon-16x16.png`)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("link", {
    rel: "apple-touch-icon",
    sizes: "180x180",
    href: (0,gatsby__WEBPACK_IMPORTED_MODULE_1__.withPrefix)(`/apple-touch-icon.png`)
  }), canonicalUrl ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("link", {
    rel: "canonical",
    href: canonicalUrl
  }) : null, children);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Seo);

/***/ }),

/***/ "./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/components/skip-nav.tsx":
/*!**************************************************************************************!*\
  !*** ./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/components/skip-nav.tsx ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! theme-ui */ "./node_modules/theme-ui/dist/theme-ui.esm.js");
/** @jsx jsx */

const skipNavStyles = {
  border: 0,
  clip: `react(0 0 0 0)`,
  height: `1px`,
  width: `1px`,
  margin: `-1px`,
  padding: 0,
  overflow: `hidden`,
  position: `absolute`,
  "&:focus": {
    padding: 3,
    position: `fixed`,
    top: `15px`,
    left: `15px`,
    backgroundColor: `heading`,
    color: `background`,
    zIndex: 1,
    width: `auto`,
    height: `auto`,
    clip: `auto`,
    textDecoration: `none`
  }
};
const SkipNavLink = ({
  children,
  ...props
}) => (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)("a", Object.assign({}, props, {
  sx: skipNavStyles,
  href: "#skip-nav",
  "data-skip-link": "true"
}), children);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SkipNavLink);

/***/ }),

/***/ "./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/components/title.tsx":
/*!***********************************************************************************!*\
  !*** ./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/components/title.tsx ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! theme-ui */ "./node_modules/theme-ui/dist/theme-ui.esm.js");
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ "./node_modules/@theme-ui/components/dist/theme-ui-components.esm.js");
/** @jsx jsx */


const Title = ({
  text,
  children,
  as = `h2`,
  className = ``
}) => (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
  sx: {
    justifyContent: `space-between`,
    alignItems: `center`,
    borderBottomStyle: `solid`,
    borderBottomWidth: `1px`,
    borderBottomColor: `divide`,
    pb: 3,
    mb: 4,
    flexFlow: `wrap`,
    boxSizing: `border-box`,
    display: `flex`
  }
}, (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)(theme_ui__WEBPACK_IMPORTED_MODULE_1__.Box, {
  as: as,
  sx: {
    fontWeight: `medium`,
    fontSize: [3, 4],
    fontFamily: `heading`,
    lineHeight: `heading`,
    color: `heading`
  },
  className: className
}, text), children ? (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
  sx: {
    color: `secondary`,
    a: {
      variant: `links.secondary`
    }
  }
}, children) : null);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Title);

/***/ }),

/***/ "./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/hooks/use-minimal-blog-config.tsx":
/*!************************************************************************************************!*\
  !*** ./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/hooks/use-minimal-blog-config.tsx ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _public_page_data_sq_d_3090400250_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../public/page-data/sq/d/3090400250.json */ "./public/page-data/sq/d/3090400250.json");

const useMinimalBlogConfig = () => {
  const data = _public_page_data_sq_d_3090400250_json__WEBPACK_IMPORTED_MODULE_0__.data;
  return data.minimalBlogConfig;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useMinimalBlogConfig);

/***/ }),

/***/ "./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/hooks/use-site-metadata.tsx":
/*!******************************************************************************************!*\
  !*** ./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/hooks/use-site-metadata.tsx ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _public_page_data_sq_d_2450661609_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../public/page-data/sq/d/2450661609.json */ "./public/page-data/sq/d/2450661609.json");

const useSiteMetadata = () => {
  const data = _public_page_data_sq_d_2450661609_json__WEBPACK_IMPORTED_MODULE_0__.data;
  return data.site.siteMetadata;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useSiteMetadata);

/***/ }),

/***/ "./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/styles/code.ts":
/*!*****************************************************************************!*\
  !*** ./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/styles/code.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const code = {
  ".prism-code": {
    fontSize: [1, 1, 2],
    padding: `2rem 1rem 1rem 1rem`,
    webkitOverflowScrolling: `touch`,
    backgroundColor: `transparent`,
    minWidth: `100%`,
    mb: 0,
    mt: 0,
    position: `relative`,
    overflow: `auto`,
    '&[data-linenumber="false"]': {
      ".token-line": {
        pl: 3
      }
    }
  },
  ".gatsby-highlight[data-language='none'], .gatsby-highlight[data-language='']": {
    ".prism-code": {
      pt: `1rem`
    }
  },
  ".token": {
    display: `inline-block`
  },
  "p > code, li > code": {
    bg: `muted`,
    color: `heading`,
    px: 2,
    py: 1,
    borderRadius: `4px`,
    fontSize: `0.95em`
  },
  ".gatsby-highlight": {
    fontSize: [1, 1, 2],
    position: `relative`,
    webkitOverflowScrolling: `touch`,
    borderRadius: `4px`,
    overflow: `hidden`,
    mx: [0, 0, 0, -3],
    ".token-line": {
      mx: -3,
      minWidth: `100%`
    },
    "pre code": {
      float: `left`,
      minWidth: `100%`
    },
    'pre[class*="language-"]:before': {
      bg: `white`,
      borderRadius: `0 0 4px 4px`,
      color: `black`,
      fontSize: `12px`,
      letterSpacing: `0.035rem`,
      padding: `0.1rem 0.5rem`,
      position: `absolute`,
      left: `1rem`,
      textAlign: `right`,
      textTransform: `uppercase`,
      top: 0,
      fontFamily: `body`,
      fontWeight: 600
    },
    'pre[class~="language-javascript"]:before, pre[class~="language-js"]:before': {
      content: `"js"`,
      background: `#f7df1e`,
      color: `black`
    },
    'pre[class~="language-jsx"]:before': {
      content: `"jsx"`,
      background: `#61dafb`,
      color: `black`
    },
    'pre[class~="language-ts"]:before': {
      content: `"ts"`,
      background: `#61dafb`,
      color: `black`
    },
    'pre[class~="language-tsx"]:before': {
      content: `"tsx"`,
      background: `#61dafb`,
      color: `black`
    },
    'pre[class~="language-html"]:before': {
      content: `"html"`,
      background: `#005a9c`,
      color: `white`
    },
    'pre[class~="language-xml"]:before': {
      content: `"xml"`,
      background: `#005a9c`,
      color: `white`
    },
    'pre[class~="language-svg"]:before': {
      content: `"svg"`,
      background: `#005a9c`,
      color: `white`
    },
    'pre[class~="language-graphql"]:before': {
      content: `"GraphQL"`,
      background: `#E10098`
    },
    'pre[class~="language-css"]:before': {
      content: `"css"`,
      background: `#ff9800`,
      color: `black`
    },
    'pre[class~="language-mdx"]:before': {
      content: `"mdx"`,
      background: `#f9ac00`,
      color: `black`
    },
    'pre[class~="language-php"]:before': {
      content: `"php"`,
      background: `#777bb3`,
      color: `black`
    },
    'pre[class~="language-py"]:before, pre[class~="language-python"]:before': {
      content: `"py"`,
      background: `#306998`,
      color: `white`
    },
    'pre[class~="language-text"]:before': {
      content: `"text"`
    },
    "pre[class~='language-shell']:before": {
      content: `'shell'`
    },
    "pre[class~='language-sh']:before": {
      content: `'sh'`
    },
    "pre[class~='language-bash']:before": {
      content: `'bash'`
    },
    "pre[class~='language-yaml']:before": {
      content: `'yaml'`,
      background: `#ffa8df`
    },
    "pre[class~='language-yml']:before": {
      content: `'yml'`,
      background: `#ffa8df`
    },
    "pre[class~='language-markdown']:before": {
      content: `'md'`
    },
    "pre[class~='language-json']:before, pre[class~='language-json5']:before": {
      content: `'json'`,
      background: `linen`
    },
    "pre[class~='language-diff']:before": {
      content: `'diff'`,
      background: `#e6ffed`
    }
  },
  '.gatsby-highlight > code[class*="language-"], .gatsby-highlight > pre[class=*="language-"]': {
    wordSpacing: `normal`,
    wordBreak: `normal`,
    overflowWrap: `normal`,
    lineHeight: 1.5,
    tabSize: 4,
    hyphens: `none`
  },
  ".gatsby-highlight pre::-webkit-scrollbar": {
    width: 2,
    height: 2
  },
  ".gatsby-highlight pre::-webkit-scrollbar-thumb": {
    backgroundColor: `primary`
  },
  ".gatsby-highlight pre::-webkit-scrollbar-track": {
    background: `muted`
  },
  ".line-number-style": {
    display: `inline-block`,
    width: `3em`,
    userSelect: `none`,
    opacity: 0.3,
    textAlign: `center`,
    position: `relative`
  },
  ".code-title": {
    backgroundColor: `muted`,
    color: `text`,
    fontSize: 1,
    px: 3,
    py: 2,
    fontFamily: `body`
  },
  ".token-line": {
    pr: 3
  },
  ".highlight-line": {
    borderLeft: `4px solid rgb(2, 155, 206)`,
    ".line-number-style": {
      width: `calc(3em - 4px)`,
      opacity: 0.5,
      left: `-2px`
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/styles/utils.ts":
/*!******************************************************************************!*\
  !*** ./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/styles/utils.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "visuallyHidden": () => (/* binding */ visuallyHidden)
/* harmony export */ });
const visuallyHidden = {
  // include `px` so we can use it with `sx`
  border: 0,
  clip: `rect(0, 0, 0, 0)`,
  height: `1px`,
  margin: `-1px`,
  overflow: `hidden`,
  padding: 0,
  position: `absolute`,
  whiteSpace: `nowrap`,
  width: `1px`
};

/***/ }),

/***/ "./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/utils/copy-to-clipboard.ts":
/*!*****************************************************************************************!*\
  !*** ./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/utils/copy-to-clipboard.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const copyToClipboard = str => {
  const {
    clipboard
  } = window.navigator;
  /*
   * fallback to older browsers (including Safari)
   * if clipboard API is not supported
   */
  if (!clipboard || typeof clipboard.writeText !== `function`) {
    const textarea = document.createElement(`textarea`);
    textarea.value = str;
    textarea.setAttribute(`readonly`, `true`);
    textarea.setAttribute(`contenteditable`, `true`);
    textarea.style.position = `absolute`;
    textarea.style.left = `-9999px`;
    document.body.appendChild(textarea);
    textarea.select();
    const range = document.createRange();
    const sel = window.getSelection();
    sel === null || sel === void 0 ? void 0 : sel.removeAllRanges();
    sel === null || sel === void 0 ? void 0 : sel.addRange(range);
    textarea.setSelectionRange(0, textarea.value.length);
    document.execCommand(`copy`);
    document.body.removeChild(textarea);
    return Promise.resolve(true);
  }
  return clipboard.writeText(str);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (copyToClipboard);

/***/ }),

/***/ "./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/utils/replaceSlashes.ts":
/*!**************************************************************************************!*\
  !*** ./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/utils/replaceSlashes.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Replace double slashes // with one slash /
 * @description This prevents double slashes as users might add e.g. the basePath as "/blog" or "blog"
 * @param input
 * @return {string} - Sanitized string
 */
function replaceSlashes(input) {
  return input.replace(/\/\/+/g, `/`);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (replaceSlashes);

/***/ }),

/***/ "./node_modules/@lekoarts/gatsby-theme-minimal-blog-core/src/templates/post-query.tsx?__contentFilePath=/home/borja/Proyectos/hznteam.github.io/content/posts/hola-nicheros/index.mdx&export=head":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@lekoarts/gatsby-theme-minimal-blog-core/src/templates/post-query.tsx?__contentFilePath=/home/borja/Proyectos/hznteam.github.io/content/posts/hola-nicheros/index.mdx&export=head ***!
  \********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Head": () => (/* reexport safe */ _components_post__WEBPACK_IMPORTED_MODULE_2__.Head),
/* harmony export */   "default": () => (/* binding */ GatsbyMDXWrapper)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _home_borja_Proyectos_hznteam_github_io_content_posts_hola_nicheros_index_mdx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./content/posts/hola-nicheros/index.mdx */ "./content/posts/hola-nicheros/index.mdx");
/* harmony import */ var _components_post__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/post */ "./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/@lekoarts/gatsby-theme-minimal-blog-core/components/post.tsx");



_components_post__WEBPACK_IMPORTED_MODULE_2__["default"];
function GatsbyMDXWrapper(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_post__WEBPACK_IMPORTED_MODULE_2__["default"], props, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_home_borja_Proyectos_hznteam_github_io_content_posts_hola_nicheros_index_mdx__WEBPACK_IMPORTED_MODULE_1__["default"], props));
}

const query = "2040642971";

/***/ }),

/***/ "./node_modules/lodash.kebabcase/index.js":
/*!************************************************!*\
  !*** ./node_modules/lodash.kebabcase/index.js ***!
  \************************************************/
/***/ ((module) => {

/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/** Used to match words composed of alphanumeric characters. */
var reAsciiWord = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;

/** Used to match Latin Unicode letters (excluding mathematical operators). */
var reLatin = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g;

/** Used to compose unicode character classes. */
var rsAstralRange = '\\ud800-\\udfff',
    rsComboMarksRange = '\\u0300-\\u036f\\ufe20-\\ufe23',
    rsComboSymbolsRange = '\\u20d0-\\u20f0',
    rsDingbatRange = '\\u2700-\\u27bf',
    rsLowerRange = 'a-z\\xdf-\\xf6\\xf8-\\xff',
    rsMathOpRange = '\\xac\\xb1\\xd7\\xf7',
    rsNonCharRange = '\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf',
    rsPunctuationRange = '\\u2000-\\u206f',
    rsSpaceRange = ' \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000',
    rsUpperRange = 'A-Z\\xc0-\\xd6\\xd8-\\xde',
    rsVarRange = '\\ufe0e\\ufe0f',
    rsBreakRange = rsMathOpRange + rsNonCharRange + rsPunctuationRange + rsSpaceRange;

/** Used to compose unicode capture groups. */
var rsApos = "['\u2019]",
    rsBreak = '[' + rsBreakRange + ']',
    rsCombo = '[' + rsComboMarksRange + rsComboSymbolsRange + ']',
    rsDigits = '\\d+',
    rsDingbat = '[' + rsDingbatRange + ']',
    rsLower = '[' + rsLowerRange + ']',
    rsMisc = '[^' + rsAstralRange + rsBreakRange + rsDigits + rsDingbatRange + rsLowerRange + rsUpperRange + ']',
    rsFitz = '\\ud83c[\\udffb-\\udfff]',
    rsModifier = '(?:' + rsCombo + '|' + rsFitz + ')',
    rsNonAstral = '[^' + rsAstralRange + ']',
    rsRegional = '(?:\\ud83c[\\udde6-\\uddff]){2}',
    rsSurrPair = '[\\ud800-\\udbff][\\udc00-\\udfff]',
    rsUpper = '[' + rsUpperRange + ']',
    rsZWJ = '\\u200d';

/** Used to compose unicode regexes. */
var rsLowerMisc = '(?:' + rsLower + '|' + rsMisc + ')',
    rsUpperMisc = '(?:' + rsUpper + '|' + rsMisc + ')',
    rsOptLowerContr = '(?:' + rsApos + '(?:d|ll|m|re|s|t|ve))?',
    rsOptUpperContr = '(?:' + rsApos + '(?:D|LL|M|RE|S|T|VE))?',
    reOptMod = rsModifier + '?',
    rsOptVar = '[' + rsVarRange + ']?',
    rsOptJoin = '(?:' + rsZWJ + '(?:' + [rsNonAstral, rsRegional, rsSurrPair].join('|') + ')' + rsOptVar + reOptMod + ')*',
    rsSeq = rsOptVar + reOptMod + rsOptJoin,
    rsEmoji = '(?:' + [rsDingbat, rsRegional, rsSurrPair].join('|') + ')' + rsSeq;

/** Used to match apostrophes. */
var reApos = RegExp(rsApos, 'g');

/**
 * Used to match [combining diacritical marks](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks) and
 * [combining diacritical marks for symbols](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks_for_Symbols).
 */
var reComboMark = RegExp(rsCombo, 'g');

/** Used to match complex or compound words. */
var reUnicodeWord = RegExp([
  rsUpper + '?' + rsLower + '+' + rsOptLowerContr + '(?=' + [rsBreak, rsUpper, '$'].join('|') + ')',
  rsUpperMisc + '+' + rsOptUpperContr + '(?=' + [rsBreak, rsUpper + rsLowerMisc, '$'].join('|') + ')',
  rsUpper + '?' + rsLowerMisc + '+' + rsOptLowerContr,
  rsUpper + '+' + rsOptUpperContr,
  rsDigits,
  rsEmoji
].join('|'), 'g');

/** Used to detect strings that need a more robust regexp to match words. */
var reHasUnicodeWord = /[a-z][A-Z]|[A-Z]{2,}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;

/** Used to map Latin Unicode letters to basic Latin letters. */
var deburredLetters = {
  // Latin-1 Supplement block.
  '\xc0': 'A',  '\xc1': 'A', '\xc2': 'A', '\xc3': 'A', '\xc4': 'A', '\xc5': 'A',
  '\xe0': 'a',  '\xe1': 'a', '\xe2': 'a', '\xe3': 'a', '\xe4': 'a', '\xe5': 'a',
  '\xc7': 'C',  '\xe7': 'c',
  '\xd0': 'D',  '\xf0': 'd',
  '\xc8': 'E',  '\xc9': 'E', '\xca': 'E', '\xcb': 'E',
  '\xe8': 'e',  '\xe9': 'e', '\xea': 'e', '\xeb': 'e',
  '\xcc': 'I',  '\xcd': 'I', '\xce': 'I', '\xcf': 'I',
  '\xec': 'i',  '\xed': 'i', '\xee': 'i', '\xef': 'i',
  '\xd1': 'N',  '\xf1': 'n',
  '\xd2': 'O',  '\xd3': 'O', '\xd4': 'O', '\xd5': 'O', '\xd6': 'O', '\xd8': 'O',
  '\xf2': 'o',  '\xf3': 'o', '\xf4': 'o', '\xf5': 'o', '\xf6': 'o', '\xf8': 'o',
  '\xd9': 'U',  '\xda': 'U', '\xdb': 'U', '\xdc': 'U',
  '\xf9': 'u',  '\xfa': 'u', '\xfb': 'u', '\xfc': 'u',
  '\xdd': 'Y',  '\xfd': 'y', '\xff': 'y',
  '\xc6': 'Ae', '\xe6': 'ae',
  '\xde': 'Th', '\xfe': 'th',
  '\xdf': 'ss',
  // Latin Extended-A block.
  '\u0100': 'A',  '\u0102': 'A', '\u0104': 'A',
  '\u0101': 'a',  '\u0103': 'a', '\u0105': 'a',
  '\u0106': 'C',  '\u0108': 'C', '\u010a': 'C', '\u010c': 'C',
  '\u0107': 'c',  '\u0109': 'c', '\u010b': 'c', '\u010d': 'c',
  '\u010e': 'D',  '\u0110': 'D', '\u010f': 'd', '\u0111': 'd',
  '\u0112': 'E',  '\u0114': 'E', '\u0116': 'E', '\u0118': 'E', '\u011a': 'E',
  '\u0113': 'e',  '\u0115': 'e', '\u0117': 'e', '\u0119': 'e', '\u011b': 'e',
  '\u011c': 'G',  '\u011e': 'G', '\u0120': 'G', '\u0122': 'G',
  '\u011d': 'g',  '\u011f': 'g', '\u0121': 'g', '\u0123': 'g',
  '\u0124': 'H',  '\u0126': 'H', '\u0125': 'h', '\u0127': 'h',
  '\u0128': 'I',  '\u012a': 'I', '\u012c': 'I', '\u012e': 'I', '\u0130': 'I',
  '\u0129': 'i',  '\u012b': 'i', '\u012d': 'i', '\u012f': 'i', '\u0131': 'i',
  '\u0134': 'J',  '\u0135': 'j',
  '\u0136': 'K',  '\u0137': 'k', '\u0138': 'k',
  '\u0139': 'L',  '\u013b': 'L', '\u013d': 'L', '\u013f': 'L', '\u0141': 'L',
  '\u013a': 'l',  '\u013c': 'l', '\u013e': 'l', '\u0140': 'l', '\u0142': 'l',
  '\u0143': 'N',  '\u0145': 'N', '\u0147': 'N', '\u014a': 'N',
  '\u0144': 'n',  '\u0146': 'n', '\u0148': 'n', '\u014b': 'n',
  '\u014c': 'O',  '\u014e': 'O', '\u0150': 'O',
  '\u014d': 'o',  '\u014f': 'o', '\u0151': 'o',
  '\u0154': 'R',  '\u0156': 'R', '\u0158': 'R',
  '\u0155': 'r',  '\u0157': 'r', '\u0159': 'r',
  '\u015a': 'S',  '\u015c': 'S', '\u015e': 'S', '\u0160': 'S',
  '\u015b': 's',  '\u015d': 's', '\u015f': 's', '\u0161': 's',
  '\u0162': 'T',  '\u0164': 'T', '\u0166': 'T',
  '\u0163': 't',  '\u0165': 't', '\u0167': 't',
  '\u0168': 'U',  '\u016a': 'U', '\u016c': 'U', '\u016e': 'U', '\u0170': 'U', '\u0172': 'U',
  '\u0169': 'u',  '\u016b': 'u', '\u016d': 'u', '\u016f': 'u', '\u0171': 'u', '\u0173': 'u',
  '\u0174': 'W',  '\u0175': 'w',
  '\u0176': 'Y',  '\u0177': 'y', '\u0178': 'Y',
  '\u0179': 'Z',  '\u017b': 'Z', '\u017d': 'Z',
  '\u017a': 'z',  '\u017c': 'z', '\u017e': 'z',
  '\u0132': 'IJ', '\u0133': 'ij',
  '\u0152': 'Oe', '\u0153': 'oe',
  '\u0149': "'n", '\u017f': 'ss'
};

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/**
 * A specialized version of `_.reduce` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {*} [accumulator] The initial value.
 * @param {boolean} [initAccum] Specify using the first element of `array` as
 *  the initial value.
 * @returns {*} Returns the accumulated value.
 */
function arrayReduce(array, iteratee, accumulator, initAccum) {
  var index = -1,
      length = array ? array.length : 0;

  if (initAccum && length) {
    accumulator = array[++index];
  }
  while (++index < length) {
    accumulator = iteratee(accumulator, array[index], index, array);
  }
  return accumulator;
}

/**
 * Splits an ASCII `string` into an array of its words.
 *
 * @private
 * @param {string} The string to inspect.
 * @returns {Array} Returns the words of `string`.
 */
function asciiWords(string) {
  return string.match(reAsciiWord) || [];
}

/**
 * The base implementation of `_.propertyOf` without support for deep paths.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Function} Returns the new accessor function.
 */
function basePropertyOf(object) {
  return function(key) {
    return object == null ? undefined : object[key];
  };
}

/**
 * Used by `_.deburr` to convert Latin-1 Supplement and Latin Extended-A
 * letters to basic Latin letters.
 *
 * @private
 * @param {string} letter The matched letter to deburr.
 * @returns {string} Returns the deburred letter.
 */
var deburrLetter = basePropertyOf(deburredLetters);

/**
 * Checks if `string` contains a word composed of Unicode symbols.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {boolean} Returns `true` if a word is found, else `false`.
 */
function hasUnicodeWord(string) {
  return reHasUnicodeWord.test(string);
}

/**
 * Splits a Unicode `string` into an array of its words.
 *
 * @private
 * @param {string} The string to inspect.
 * @returns {Array} Returns the words of `string`.
 */
function unicodeWords(string) {
  return string.match(reUnicodeWord) || [];
}

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/** Built-in value references. */
var Symbol = root.Symbol;

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolToString = symbolProto ? symbolProto.toString : undefined;

/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if (isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

/**
 * Creates a function like `_.camelCase`.
 *
 * @private
 * @param {Function} callback The function to combine each word.
 * @returns {Function} Returns the new compounder function.
 */
function createCompounder(callback) {
  return function(string) {
    return arrayReduce(words(deburr(string).replace(reApos, '')), callback, '');
  };
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && objectToString.call(value) == symbolTag);
}

/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function toString(value) {
  return value == null ? '' : baseToString(value);
}

/**
 * Deburrs `string` by converting
 * [Latin-1 Supplement](https://en.wikipedia.org/wiki/Latin-1_Supplement_(Unicode_block)#Character_table)
 * and [Latin Extended-A](https://en.wikipedia.org/wiki/Latin_Extended-A)
 * letters to basic Latin letters and removing
 * [combining diacritical marks](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks).
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category String
 * @param {string} [string=''] The string to deburr.
 * @returns {string} Returns the deburred string.
 * @example
 *
 * _.deburr('déjà vu');
 * // => 'deja vu'
 */
function deburr(string) {
  string = toString(string);
  return string && string.replace(reLatin, deburrLetter).replace(reComboMark, '');
}

/**
 * Converts `string` to
 * [kebab case](https://en.wikipedia.org/wiki/Letter_case#Special_case_styles).
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category String
 * @param {string} [string=''] The string to convert.
 * @returns {string} Returns the kebab cased string.
 * @example
 *
 * _.kebabCase('Foo Bar');
 * // => 'foo-bar'
 *
 * _.kebabCase('fooBar');
 * // => 'foo-bar'
 *
 * _.kebabCase('__FOO_BAR__');
 * // => 'foo-bar'
 */
var kebabCase = createCompounder(function(result, word, index) {
  return result + (index ? '-' : '') + word.toLowerCase();
});

/**
 * Splits `string` into an array of its words.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category String
 * @param {string} [string=''] The string to inspect.
 * @param {RegExp|string} [pattern] The pattern to match words.
 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
 * @returns {Array} Returns the words of `string`.
 * @example
 *
 * _.words('fred, barney, & pebbles');
 * // => ['fred', 'barney', 'pebbles']
 *
 * _.words('fred, barney, & pebbles', /[^, ]+/g);
 * // => ['fred', 'barney', '&', 'pebbles']
 */
function words(string, pattern, guard) {
  string = toString(string);
  pattern = guard ? undefined : pattern;

  if (pattern === undefined) {
    return hasUnicodeWord(string) ? unicodeWords(string) : asciiWords(string);
  }
  return string.match(pattern) || [];
}

module.exports = kebabCase;


/***/ }),

/***/ "./node_modules/prism-react-renderer/dist/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/prism-react-renderer/dist/index.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Prism": () => (/* reexport safe */ _prism_index_js__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "defaultProps": () => (/* binding */ defaultProps)
/* harmony export */ });
/* harmony import */ var _prism_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../prism/index.js */ "./node_modules/prism-react-renderer/prism/index.js");
/* harmony import */ var _themes_duotoneDark__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../themes/duotoneDark */ "./node_modules/prism-react-renderer/themes/duotoneDark/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);





var defaultProps = {
  // $FlowFixMe
  Prism: _prism_index_js__WEBPACK_IMPORTED_MODULE_0__["default"],
  theme: _themes_duotoneDark__WEBPACK_IMPORTED_MODULE_2__["default"]
};

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

var newlineRe = /\r\n|\r|\n/; // Empty lines need to contain a single empty token, denoted with { empty: true }

var normalizeEmptyLines = function (line) {
  if (line.length === 0) {
    line.push({
      types: ["plain"],
      content: "\n",
      empty: true
    });
  } else if (line.length === 1 && line[0].content === "") {
    line[0].content = "\n";
    line[0].empty = true;
  }
};

var appendTypes = function (types, add) {
  var typesSize = types.length;

  if (typesSize > 0 && types[typesSize - 1] === add) {
    return types;
  }

  return types.concat(add);
}; // Takes an array of Prism's tokens and groups them by line, turning plain
// strings into tokens as well. Tokens can become recursive in some cases,
// which means that their types are concatenated. Plain-string tokens however
// are always of type "plain".
// This is not recursive to avoid exceeding the call-stack limit, since it's unclear
// how nested Prism's tokens can become


var normalizeTokens = function (tokens) {
  var typeArrStack = [[]];
  var tokenArrStack = [tokens];
  var tokenArrIndexStack = [0];
  var tokenArrSizeStack = [tokens.length];
  var i = 0;
  var stackIndex = 0;
  var currentLine = [];
  var acc = [currentLine];

  while (stackIndex > -1) {
    while ((i = tokenArrIndexStack[stackIndex]++) < tokenArrSizeStack[stackIndex]) {
      var content = void 0;
      var types = typeArrStack[stackIndex];
      var tokenArr = tokenArrStack[stackIndex];
      var token = tokenArr[i]; // Determine content and append type to types if necessary

      if (typeof token === "string") {
        types = stackIndex > 0 ? types : ["plain"];
        content = token;
      } else {
        types = appendTypes(types, token.type);

        if (token.alias) {
          types = appendTypes(types, token.alias);
        }

        content = token.content;
      } // If token.content is an array, increase the stack depth and repeat this while-loop


      if (typeof content !== "string") {
        stackIndex++;
        typeArrStack.push(types);
        tokenArrStack.push(content);
        tokenArrIndexStack.push(0);
        tokenArrSizeStack.push(content.length);
        continue;
      } // Split by newlines


      var splitByNewlines = content.split(newlineRe);
      var newlineCount = splitByNewlines.length;
      currentLine.push({
        types: types,
        content: splitByNewlines[0]
      }); // Create a new line for each string on a new line

      for (var i$1 = 1; i$1 < newlineCount; i$1++) {
        normalizeEmptyLines(currentLine);
        acc.push(currentLine = []);
        currentLine.push({
          types: types,
          content: splitByNewlines[i$1]
        });
      }
    } // Decreate the stack depth


    stackIndex--;
    typeArrStack.pop();
    tokenArrStack.pop();
    tokenArrIndexStack.pop();
    tokenArrSizeStack.pop();
  }

  normalizeEmptyLines(currentLine);
  return acc;
};

var themeToDict = function (theme, language) {
  var plain = theme.plain; // $FlowFixMe

  var base = Object.create(null);
  var themeDict = theme.styles.reduce(function (acc, themeEntry) {
    var languages = themeEntry.languages;
    var style = themeEntry.style;

    if (languages && !languages.includes(language)) {
      return acc;
    }

    themeEntry.types.forEach(function (type) {
      // $FlowFixMe
      var accStyle = _extends({}, acc[type], style);

      acc[type] = accStyle;
    });
    return acc;
  }, base); // $FlowFixMe

  themeDict.root = plain; // $FlowFixMe

  themeDict.plain = _extends({}, plain, {
    backgroundColor: null
  });
  return themeDict;
};

function objectWithoutProperties(obj, exclude) {
  var target = {};

  for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k];

  return target;
}

var Highlight = /*@__PURE__*/function (Component) {
  function Highlight() {
    var this$1 = this;
    var args = [],
        len = arguments.length;

    while (len--) args[len] = arguments[len];

    Component.apply(this, args);

    _defineProperty(this, "getThemeDict", function (props) {
      if (this$1.themeDict !== undefined && props.theme === this$1.prevTheme && props.language === this$1.prevLanguage) {
        return this$1.themeDict;
      }

      this$1.prevTheme = props.theme;
      this$1.prevLanguage = props.language;
      var themeDict = props.theme ? themeToDict(props.theme, props.language) : undefined;
      return this$1.themeDict = themeDict;
    });

    _defineProperty(this, "getLineProps", function (ref) {
      var key = ref.key;
      var className = ref.className;
      var style = ref.style;
      var rest$1 = objectWithoutProperties(ref, ["key", "className", "style", "line"]);
      var rest = rest$1;

      var output = _extends({}, rest, {
        className: "token-line",
        style: undefined,
        key: undefined
      });

      var themeDict = this$1.getThemeDict(this$1.props);

      if (themeDict !== undefined) {
        output.style = themeDict.plain;
      }

      if (style !== undefined) {
        output.style = output.style !== undefined ? _extends({}, output.style, style) : style;
      }

      if (key !== undefined) {
        output.key = key;
      }

      if (className) {
        output.className += " " + className;
      }

      return output;
    });

    _defineProperty(this, "getStyleForToken", function (ref) {
      var types = ref.types;
      var empty = ref.empty;
      var typesSize = types.length;
      var themeDict = this$1.getThemeDict(this$1.props);

      if (themeDict === undefined) {
        return undefined;
      } else if (typesSize === 1 && types[0] === "plain") {
        return empty ? {
          display: "inline-block"
        } : undefined;
      } else if (typesSize === 1 && !empty) {
        return themeDict[types[0]];
      }

      var baseStyle = empty ? {
        display: "inline-block"
      } : {}; // $FlowFixMe

      var typeStyles = types.map(function (type) {
        return themeDict[type];
      });
      return Object.assign.apply(Object, [baseStyle].concat(typeStyles));
    });

    _defineProperty(this, "getTokenProps", function (ref) {
      var key = ref.key;
      var className = ref.className;
      var style = ref.style;
      var token = ref.token;
      var rest$1 = objectWithoutProperties(ref, ["key", "className", "style", "token"]);
      var rest = rest$1;

      var output = _extends({}, rest, {
        className: "token " + token.types.join(" "),
        children: token.content,
        style: this$1.getStyleForToken(token),
        key: undefined
      });

      if (style !== undefined) {
        output.style = output.style !== undefined ? _extends({}, output.style, style) : style;
      }

      if (key !== undefined) {
        output.key = key;
      }

      if (className) {
        output.className += " " + className;
      }

      return output;
    });

    _defineProperty(this, "tokenize", function (Prism, code, grammar, language) {
      var env = {
        code: code,
        grammar: grammar,
        language: language,
        tokens: []
      };
      Prism.hooks.run("before-tokenize", env);
      var tokens = env.tokens = Prism.tokenize(env.code, env.grammar, env.language);
      Prism.hooks.run("after-tokenize", env);
      return tokens;
    });
  }

  if (Component) Highlight.__proto__ = Component;
  Highlight.prototype = Object.create(Component && Component.prototype);
  Highlight.prototype.constructor = Highlight;

  Highlight.prototype.render = function render() {
    var ref = this.props;
    var Prism = ref.Prism;
    var language = ref.language;
    var code = ref.code;
    var children = ref.children;
    var themeDict = this.getThemeDict(this.props);
    var grammar = Prism.languages[language];
    var mixedTokens = grammar !== undefined ? this.tokenize(Prism, code, grammar, language) : [code];
    var tokens = normalizeTokens(mixedTokens);
    return children({
      tokens: tokens,
      className: "prism-code language-" + language,
      style: themeDict !== undefined ? themeDict.root : {},
      getLineProps: this.getLineProps,
      getTokenProps: this.getTokenProps
    });
  };

  return Highlight;
}(react__WEBPACK_IMPORTED_MODULE_1__.Component);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Highlight);



/***/ }),

/***/ "./node_modules/prism-react-renderer/prism/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/prism-react-renderer/prism/index.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Prism: Lightweight, robust, elegant syntax highlighting
 *
 * @license MIT <https://opensource.org/licenses/MIT>
 * @author Lea Verou <https://lea.verou.me>
 * @namespace
 * @public
 */
/**
 * prism-react-renderer:
 * This file has been modified to remove:
 * - globals and window dependency
 * - worker support
 * - highlightAll and other element dependent methods
 * - _.hooks helpers
 * - UMD/node-specific hacks
 * It has also been run through prettier
 */

 var Prism = (function () {

	// Private helper vars
	var lang = /(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i;
	var uniqueId = 0;

	// The grammar object for plaintext
	var plainTextGrammar = {};


	var _ = {
		/**
		 * A namespace for utility methods.
		 *
		 * All function in this namespace that are not explicitly marked as _public_ are for __internal use only__ and may
		 * change or disappear at any time.
		 *
		 * @namespace
		 * @memberof Prism
		 */
		util: {
			encode: function encode(tokens) {
				if (tokens instanceof Token) {
					return new Token(tokens.type, encode(tokens.content), tokens.alias);
				} else if (Array.isArray(tokens)) {
					return tokens.map(encode);
				} else {
					return tokens.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/\u00a0/g, ' ');
				}
			},

			/**
			 * Returns the name of the type of the given value.
			 *
			 * @param {any} o
			 * @returns {string}
			 * @example
			 * type(null)      === 'Null'
			 * type(undefined) === 'Undefined'
			 * type(123)       === 'Number'
			 * type('foo')     === 'String'
			 * type(true)      === 'Boolean'
			 * type([1, 2])    === 'Array'
			 * type({})        === 'Object'
			 * type(String)    === 'Function'
			 * type(/abc+/)    === 'RegExp'
			 */
			type: function (o) {
				return Object.prototype.toString.call(o).slice(8, -1);
			},

			/**
			 * Returns a unique number for the given object. Later calls will still return the same number.
			 *
			 * @param {Object} obj
			 * @returns {number}
			 */
			objId: function (obj) {
				if (!obj['__id']) {
					Object.defineProperty(obj, '__id', { value: ++uniqueId });
				}
				return obj['__id'];
			},

			/**
			 * Creates a deep clone of the given object.
			 *
			 * The main intended use of this function is to clone language definitions.
			 *
			 * @param {T} o
			 * @param {Record<number, any>} [visited]
			 * @returns {T}
			 * @template T
			 */
			clone: function deepClone(o, visited) {
				visited = visited || {};

				var clone; var id;
				switch (_.util.type(o)) {
					case 'Object':
						id = _.util.objId(o);
						if (visited[id]) {
							return visited[id];
						}
						clone = /** @type {Record<string, any>} */ ({});
						visited[id] = clone;

						for (var key in o) {
							if (o.hasOwnProperty(key)) {
								clone[key] = deepClone(o[key], visited);
							}
						}

						return /** @type {any} */ (clone);

					case 'Array':
						id = _.util.objId(o);
						if (visited[id]) {
							return visited[id];
						}
						clone = [];
						visited[id] = clone;

						(/** @type {Array} */(/** @type {any} */(o))).forEach(function (v, i) {
							clone[i] = deepClone(v, visited);
						});

						return /** @type {any} */ (clone);

					default:
						return o;
				}
			},

			/**
			 * Returns the Prism language of the given element set by a `language-xxxx` or `lang-xxxx` class.
			 *
			 * If no language is set for the element or the element is `null` or `undefined`, `none` will be returned.
			 *
			 * @param {Element} element
			 * @returns {string}
			 */
			getLanguage: function (element) {
				while (element) {
					var m = lang.exec(element.className);
					if (m) {
						return m[1].toLowerCase();
					}
					element = element.parentElement;
				}
				return 'none';
			},

			/**
			 * Sets the Prism `language-xxxx` class of the given element.
			 *
			 * @param {Element} element
			 * @param {string} language
			 * @returns {void}
			 */
			setLanguage: function (element, language) {
				// remove all `language-xxxx` classes
				// (this might leave behind a leading space)
				element.className = element.className.replace(RegExp(lang, 'gi'), '');

				// add the new `language-xxxx` class
				// (using `classList` will automatically clean up spaces for us)
				element.classList.add('language-' + language);
			},

			/**
			 * Returns whether a given class is active for `element`.
			 *
			 * The class can be activated if `element` or one of its ancestors has the given class and it can be deactivated
			 * if `element` or one of its ancestors has the negated version of the given class. The _negated version_ of the
			 * given class is just the given class with a `no-` prefix.
			 *
			 * Whether the class is active is determined by the closest ancestor of `element` (where `element` itself is
			 * closest ancestor) that has the given class or the negated version of it. If neither `element` nor any of its
			 * ancestors have the given class or the negated version of it, then the default activation will be returned.
			 *
			 * In the paradoxical situation where the closest ancestor contains __both__ the given class and the negated
			 * version of it, the class is considered active.
			 *
			 * @param {Element} element
			 * @param {string} className
			 * @param {boolean} [defaultActivation=false]
			 * @returns {boolean}
			 */
			isActive: function (element, className, defaultActivation) {
				var no = 'no-' + className;

				while (element) {
					var classList = element.classList;
					if (classList.contains(className)) {
						return true;
					}
					if (classList.contains(no)) {
						return false;
					}
					element = element.parentElement;
				}
				return !!defaultActivation;
			}
		},

		/**
		 * This namespace contains all currently loaded languages and the some helper functions to create and modify languages.
		 *
		 * @namespace
		 * @memberof Prism
		 * @public
		 */
		languages: {
			/**
			 * The grammar for plain, unformatted text.
			 */
			plain: plainTextGrammar,
			plaintext: plainTextGrammar,
			text: plainTextGrammar,
			txt: plainTextGrammar,

			/**
			 * Creates a deep copy of the language with the given id and appends the given tokens.
			 *
			 * If a token in `redef` also appears in the copied language, then the existing token in the copied language
			 * will be overwritten at its original position.
			 *
			 * ## Best practices
			 *
			 * Since the position of overwriting tokens (token in `redef` that overwrite tokens in the copied language)
			 * doesn't matter, they can technically be in any order. However, this can be confusing to others that trying to
			 * understand the language definition because, normally, the order of tokens matters in Prism grammars.
			 *
			 * Therefore, it is encouraged to order overwriting tokens according to the positions of the overwritten tokens.
			 * Furthermore, all non-overwriting tokens should be placed after the overwriting ones.
			 *
			 * @param {string} id The id of the language to extend. This has to be a key in `Prism.languages`.
			 * @param {Grammar} redef The new tokens to append.
			 * @returns {Grammar} The new language created.
			 * @public
			 * @example
			 * Prism.languages['css-with-colors'] = Prism.languages.extend('css', {
			 *     // Prism.languages.css already has a 'comment' token, so this token will overwrite CSS' 'comment' token
			 *     // at its original position
			 *     'comment': { ... },
			 *     // CSS doesn't have a 'color' token, so this token will be appended
			 *     'color': /\b(?:red|green|blue)\b/
			 * });
			 */
			extend: function (id, redef) {
				var lang = _.util.clone(_.languages[id]);

				for (var key in redef) {
					lang[key] = redef[key];
				}

				return lang;
			},

			/**
			 * Inserts tokens _before_ another token in a language definition or any other grammar.
			 *
			 * ## Usage
			 *
			 * This helper method makes it easy to modify existing languages. For example, the CSS language definition
			 * not only defines CSS highlighting for CSS documents, but also needs to define highlighting for CSS embedded
			 * in HTML through `<style>` elements. To do this, it needs to modify `Prism.languages.markup` and add the
			 * appropriate tokens. However, `Prism.languages.markup` is a regular JavaScript object literal, so if you do
			 * this:
			 *
			 * ```js
			 * Prism.languages.markup.style = {
			 *     // token
			 * };
			 * ```
			 *
			 * then the `style` token will be added (and processed) at the end. `insertBefore` allows you to insert tokens
			 * before existing tokens. For the CSS example above, you would use it like this:
			 *
			 * ```js
			 * Prism.languages.insertBefore('markup', 'cdata', {
			 *     'style': {
			 *         // token
			 *     }
			 * });
			 * ```
			 *
			 * ## Special cases
			 *
			 * If the grammars of `inside` and `insert` have tokens with the same name, the tokens in `inside`'s grammar
			 * will be ignored.
			 *
			 * This behavior can be used to insert tokens after `before`:
			 *
			 * ```js
			 * Prism.languages.insertBefore('markup', 'comment', {
			 *     'comment': Prism.languages.markup.comment,
			 *     // tokens after 'comment'
			 * });
			 * ```
			 *
			 * ## Limitations
			 *
			 * The main problem `insertBefore` has to solve is iteration order. Since ES2015, the iteration order for object
			 * properties is guaranteed to be the insertion order (except for integer keys) but some browsers behave
			 * differently when keys are deleted and re-inserted. So `insertBefore` can't be implemented by temporarily
			 * deleting properties which is necessary to insert at arbitrary positions.
			 *
			 * To solve this problem, `insertBefore` doesn't actually insert the given tokens into the target object.
			 * Instead, it will create a new object and replace all references to the target object with the new one. This
			 * can be done without temporarily deleting properties, so the iteration order is well-defined.
			 *
			 * However, only references that can be reached from `Prism.languages` or `insert` will be replaced. I.e. if
			 * you hold the target object in a variable, then the value of the variable will not change.
			 *
			 * ```js
			 * var oldMarkup = Prism.languages.markup;
			 * var newMarkup = Prism.languages.insertBefore('markup', 'comment', { ... });
			 *
			 * assert(oldMarkup !== Prism.languages.markup);
			 * assert(newMarkup === Prism.languages.markup);
			 * ```
			 *
			 * @param {string} inside The property of `root` (e.g. a language id in `Prism.languages`) that contains the
			 * object to be modified.
			 * @param {string} before The key to insert before.
			 * @param {Grammar} insert An object containing the key-value pairs to be inserted.
			 * @param {Object<string, any>} [root] The object containing `inside`, i.e. the object that contains the
			 * object to be modified.
			 *
			 * Defaults to `Prism.languages`.
			 * @returns {Grammar} The new grammar object.
			 * @public
			 */
			insertBefore: function (inside, before, insert, root) {
				root = root || /** @type {any} */ (_.languages);
				var grammar = root[inside];
				/** @type {Grammar} */
				var ret = {};

				for (var token in grammar) {
					if (grammar.hasOwnProperty(token)) {

						if (token == before) {
							for (var newToken in insert) {
								if (insert.hasOwnProperty(newToken)) {
									ret[newToken] = insert[newToken];
								}
							}
						}

						// Do not insert token which also occur in insert. See #1525
						if (!insert.hasOwnProperty(token)) {
							ret[token] = grammar[token];
						}
					}
				}

				var old = root[inside];
				root[inside] = ret;

				// Update references in other language definitions
				_.languages.DFS(_.languages, function (key, value) {
					if (value === old && key != inside) {
						this[key] = ret;
					}
				});

				return ret;
			},

			// Traverse a language definition with Depth First Search
			DFS: function DFS(o, callback, type, visited) {
				visited = visited || {};

				var objId = _.util.objId;

				for (var i in o) {
					if (o.hasOwnProperty(i)) {
						callback.call(o, i, o[i], type || i);

						var property = o[i];
						var propertyType = _.util.type(property);

						if (propertyType === 'Object' && !visited[objId(property)]) {
							visited[objId(property)] = true;
							DFS(property, callback, null, visited);
						} else if (propertyType === 'Array' && !visited[objId(property)]) {
							visited[objId(property)] = true;
							DFS(property, callback, i, visited);
						}
					}
				}
			}
		},

		plugins: {},


		/**
		 * Low-level function, only use if you know what you’re doing. It accepts a string of text as input
		 * and the language definitions to use, and returns a string with the HTML produced.
		 *
		 * The following hooks will be run:
		 * 1. `before-tokenize`
		 * 2. `after-tokenize`
		 * 3. `wrap`: On each {@link Token}.
		 *
		 * @param {string} text A string with the code to be highlighted.
		 * @param {Grammar} grammar An object containing the tokens to use.
		 *
		 * Usually a language definition like `Prism.languages.markup`.
		 * @param {string} language The name of the language definition passed to `grammar`.
		 * @returns {string} The highlighted HTML.
		 * @memberof Prism
		 * @public
		 * @example
		 * Prism.highlight('var foo = true;', Prism.languages.javascript, 'javascript');
		 */
		highlight: function (text, grammar, language) {
			var env = {
				code: text,
				grammar: grammar,
				language: language
			};
			_.hooks.run('before-tokenize', env);
			env.tokens = _.tokenize(env.code, env.grammar);
			_.hooks.run('after-tokenize', env);
			return Token.stringify(_.util.encode(env.tokens), env.language);
		},

		/**
		 * This is the heart of Prism, and the most low-level function you can use. It accepts a string of text as input
		 * and the language definitions to use, and returns an array with the tokenized code.
		 *
		 * When the language definition includes nested tokens, the function is called recursively on each of these tokens.
		 *
		 * This method could be useful in other contexts as well, as a very crude parser.
		 *
		 * @param {string} text A string with the code to be highlighted.
		 * @param {Grammar} grammar An object containing the tokens to use.
		 *
		 * Usually a language definition like `Prism.languages.markup`.
		 * @returns {TokenStream} An array of strings and tokens, a token stream.
		 * @memberof Prism
		 * @public
		 * @example
		 * let code = `var foo = 0;`;
		 * let tokens = Prism.tokenize(code, Prism.languages.javascript);
		 * tokens.forEach(token => {
		 *     if (token instanceof Prism.Token && token.type === 'number') {
		 *         console.log(`Found numeric literal: ${token.content}`);
		 *     }
		 * });
		 */
		tokenize: function (text, grammar) {
			var rest = grammar.rest;
			if (rest) {
				for (var token in rest) {
					grammar[token] = rest[token];
				}

				delete grammar.rest;
			}

			var tokenList = new LinkedList();
			addAfter(tokenList, tokenList.head, text);

			matchGrammar(text, tokenList, grammar, tokenList.head, 0);

			return toArray(tokenList);
		},

		/**
		 * @namespace
		 * @memberof Prism
		 * @public
		 */
		hooks: {
			all: {},

			/**
			 * Adds the given callback to the list of callbacks for the given hook.
			 *
			 * The callback will be invoked when the hook it is registered for is run.
			 * Hooks are usually directly run by a highlight function but you can also run hooks yourself.
			 *
			 * One callback function can be registered to multiple hooks and the same hook multiple times.
			 *
			 * @param {string} name The name of the hook.
			 * @param {HookCallback} callback The callback function which is given environment variables.
			 * @public
			 */
			add: function (name, callback) {
				var hooks = _.hooks.all;

				hooks[name] = hooks[name] || [];

				hooks[name].push(callback);
			},

			/**
			 * Runs a hook invoking all registered callbacks with the given environment variables.
			 *
			 * Callbacks will be invoked synchronously and in the order in which they were registered.
			 *
			 * @param {string} name The name of the hook.
			 * @param {Object<string, any>} env The environment variables of the hook passed to all callbacks registered.
			 * @public
			 */
			run: function (name, env) {
				var callbacks = _.hooks.all[name];

				if (!callbacks || !callbacks.length) {
					return;
				}

				for (var i = 0, callback; (callback = callbacks[i++]);) {
					callback(env);
				}
			}
		},

		Token: Token
	};


	// Typescript note:
	// The following can be used to import the Token type in JSDoc:
	//
	//   @typedef {InstanceType<import("./prism-core")["Token"]>} Token

	/**
	 * Creates a new token.
	 *
	 * @param {string} type See {@link Token#type type}
	 * @param {string | TokenStream} content See {@link Token#content content}
	 * @param {string|string[]} [alias] The alias(es) of the token.
	 * @param {string} [matchedStr=""] A copy of the full string this token was created from.
	 * @class
	 * @global
	 * @public
	 */
	function Token(type, content, alias, matchedStr) {
		/**
		 * The type of the token.
		 *
		 * This is usually the key of a pattern in a {@link Grammar}.
		 *
		 * @type {string}
		 * @see GrammarToken
		 * @public
		 */
		this.type = type;
		/**
		 * The strings or tokens contained by this token.
		 *
		 * This will be a token stream if the pattern matched also defined an `inside` grammar.
		 *
		 * @type {string | TokenStream}
		 * @public
		 */
		this.content = content;
		/**
		 * The alias(es) of the token.
		 *
		 * @type {string|string[]}
		 * @see GrammarToken
		 * @public
		 */
		this.alias = alias;
		// Copy of the full string this token was created from
		this.length = (matchedStr || '').length | 0;
	}

	/**
	 * A token stream is an array of strings and {@link Token Token} objects.
	 *
	 * Token streams have to fulfill a few properties that are assumed by most functions (mostly internal ones) that process
	 * them.
	 *
	 * 1. No adjacent strings.
	 * 2. No empty strings.
	 *
	 *    The only exception here is the token stream that only contains the empty string and nothing else.
	 *
	 * @typedef {Array<string | Token>} TokenStream
	 * @global
	 * @public
	 */

	/**
	 * Converts the given token or token stream to an HTML representation.
	 *
	 * The following hooks will be run:
	 * 1. `wrap`: On each {@link Token}.
	 *
	 * @param {string | Token | TokenStream} o The token or token stream to be converted.
	 * @param {string} language The name of current language.
	 * @returns {string} The HTML representation of the token or token stream.
	 * @memberof Token
	 * @static
	 */
	Token.stringify = function stringify(o, language) {
		if (typeof o == 'string') {
			return o;
		}
		if (Array.isArray(o)) {
			var s = '';
			o.forEach(function (e) {
				s += stringify(e, language);
			});
			return s;
		}

		var env = {
			type: o.type,
			content: stringify(o.content, language),
			tag: 'span',
			classes: ['token', o.type],
			attributes: {},
			language: language
		};

		var aliases = o.alias;
		if (aliases) {
			if (Array.isArray(aliases)) {
				Array.prototype.push.apply(env.classes, aliases);
			} else {
				env.classes.push(aliases);
			}
		}

		_.hooks.run('wrap', env);

		var attributes = '';
		for (var name in env.attributes) {
			attributes += ' ' + name + '="' + (env.attributes[name] || '').replace(/"/g, '&quot;') + '"';
		}

		return '<' + env.tag + ' class="' + env.classes.join(' ') + '"' + attributes + '>' + env.content + '</' + env.tag + '>';
	};

	/**
	 * @param {RegExp} pattern
	 * @param {number} pos
	 * @param {string} text
	 * @param {boolean} lookbehind
	 * @returns {RegExpExecArray | null}
	 */
	function matchPattern(pattern, pos, text, lookbehind) {
		pattern.lastIndex = pos;
		var match = pattern.exec(text);
		if (match && lookbehind && match[1]) {
			// change the match to remove the text matched by the Prism lookbehind group
			var lookbehindLength = match[1].length;
			match.index += lookbehindLength;
			match[0] = match[0].slice(lookbehindLength);
		}
		return match;
	}

	/**
	 * @param {string} text
	 * @param {LinkedList<string | Token>} tokenList
	 * @param {any} grammar
	 * @param {LinkedListNode<string | Token>} startNode
	 * @param {number} startPos
	 * @param {RematchOptions} [rematch]
	 * @returns {void}
	 * @private
	 *
	 * @typedef RematchOptions
	 * @property {string} cause
	 * @property {number} reach
	 */
	function matchGrammar(text, tokenList, grammar, startNode, startPos, rematch) {
		for (var token in grammar) {
			if (!grammar.hasOwnProperty(token) || !grammar[token]) {
				continue;
			}

			var patterns = grammar[token];
			patterns = Array.isArray(patterns) ? patterns : [patterns];

			for (var j = 0; j < patterns.length; ++j) {
				if (rematch && rematch.cause == token + ',' + j) {
					return;
				}

				var patternObj = patterns[j];
				var inside = patternObj.inside;
				var lookbehind = !!patternObj.lookbehind;
				var greedy = !!patternObj.greedy;
				var alias = patternObj.alias;

				if (greedy && !patternObj.pattern.global) {
					// Without the global flag, lastIndex won't work
					var flags = patternObj.pattern.toString().match(/[imsuy]*$/)[0];
					patternObj.pattern = RegExp(patternObj.pattern.source, flags + 'g');
				}

				/** @type {RegExp} */
				var pattern = patternObj.pattern || patternObj;

				for ( // iterate the token list and keep track of the current token/string position
					var currentNode = startNode.next, pos = startPos;
					currentNode !== tokenList.tail;
					pos += currentNode.value.length, currentNode = currentNode.next
				) {

					if (rematch && pos >= rematch.reach) {
						break;
					}

					var str = currentNode.value;

					if (tokenList.length > text.length) {
						// Something went terribly wrong, ABORT, ABORT!
						return;
					}

					if (str instanceof Token) {
						continue;
					}

					var removeCount = 1; // this is the to parameter of removeBetween
					var match;

					if (greedy) {
						match = matchPattern(pattern, pos, text, lookbehind);
						if (!match || match.index >= text.length) {
							break;
						}

						var from = match.index;
						var to = match.index + match[0].length;
						var p = pos;

						// find the node that contains the match
						p += currentNode.value.length;
						while (from >= p) {
							currentNode = currentNode.next;
							p += currentNode.value.length;
						}
						// adjust pos (and p)
						p -= currentNode.value.length;
						pos = p;

						// the current node is a Token, then the match starts inside another Token, which is invalid
						if (currentNode.value instanceof Token) {
							continue;
						}

						// find the last node which is affected by this match
						for (
							var k = currentNode;
							k !== tokenList.tail && (p < to || typeof k.value === 'string');
							k = k.next
						) {
							removeCount++;
							p += k.value.length;
						}
						removeCount--;

						// replace with the new match
						str = text.slice(pos, p);
						match.index -= pos;
					} else {
						match = matchPattern(pattern, 0, str, lookbehind);
						if (!match) {
							continue;
						}
					}

					// eslint-disable-next-line no-redeclare
					var from = match.index;
					var matchStr = match[0];
					var before = str.slice(0, from);
					var after = str.slice(from + matchStr.length);

					var reach = pos + str.length;
					if (rematch && reach > rematch.reach) {
						rematch.reach = reach;
					}

					var removeFrom = currentNode.prev;

					if (before) {
						removeFrom = addAfter(tokenList, removeFrom, before);
						pos += before.length;
					}

					removeRange(tokenList, removeFrom, removeCount);

					var wrapped = new Token(token, inside ? _.tokenize(matchStr, inside) : matchStr, alias, matchStr);
					currentNode = addAfter(tokenList, removeFrom, wrapped);

					if (after) {
						addAfter(tokenList, currentNode, after);
					}

					if (removeCount > 1) {
						// at least one Token object was removed, so we have to do some rematching
						// this can only happen if the current pattern is greedy

						/** @type {RematchOptions} */
						var nestedRematch = {
							cause: token + ',' + j,
							reach: reach
						};
						matchGrammar(text, tokenList, grammar, currentNode.prev, pos, nestedRematch);

						// the reach might have been extended because of the rematching
						if (rematch && nestedRematch.reach > rematch.reach) {
							rematch.reach = nestedRematch.reach;
						}
					}
				}
			}
		}
	}

	/**
	 * @typedef LinkedListNode
	 * @property {T} value
	 * @property {LinkedListNode<T> | null} prev The previous node.
	 * @property {LinkedListNode<T> | null} next The next node.
	 * @template T
	 * @private
	 */

	/**
	 * @template T
	 * @private
	 */
	function LinkedList() {
		/** @type {LinkedListNode<T>} */
		var head = { value: null, prev: null, next: null };
		/** @type {LinkedListNode<T>} */
		var tail = { value: null, prev: head, next: null };
		head.next = tail;

		/** @type {LinkedListNode<T>} */
		this.head = head;
		/** @type {LinkedListNode<T>} */
		this.tail = tail;
		this.length = 0;
	}

	/**
	 * Adds a new node with the given value to the list.
	 *
	 * @param {LinkedList<T>} list
	 * @param {LinkedListNode<T>} node
	 * @param {T} value
	 * @returns {LinkedListNode<T>} The added node.
	 * @template T
	 */
	function addAfter(list, node, value) {
		// assumes that node != list.tail && values.length >= 0
		var next = node.next;

		var newNode = { value: value, prev: node, next: next };
		node.next = newNode;
		next.prev = newNode;
		list.length++;

		return newNode;
	}
	/**
	 * Removes `count` nodes after the given node. The given node will not be removed.
	 *
	 * @param {LinkedList<T>} list
	 * @param {LinkedListNode<T>} node
	 * @param {number} count
	 * @template T
	 */
	function removeRange(list, node, count) {
		var next = node.next;
		for (var i = 0; i < count && next !== list.tail; i++) {
			next = next.next;
		}
		node.next = next;
		next.prev = node;
		list.length -= i;
	}
	/**
	 * @param {LinkedList<T>} list
	 * @returns {T[]}
	 * @template T
	 */
	function toArray(list) {
		var array = [];
		var node = list.head.next;
		while (node !== list.tail) {
			array.push(node.value);
			node = node.next;
		}
		return array;
	}

	return _;

}());

var prism = Prism;
Prism.default = Prism;

/* This content is auto-generated to include some prismjs language components: */

/* "prismjs/components/prism-markup" */

prism.languages.markup = {
  'comment': {
    pattern: /<!--(?:(?!<!--)[\s\S])*?-->/,
    greedy: true
  },
  'prolog': {
    pattern: /<\?[\s\S]+?\?>/,
    greedy: true
  },
  'doctype': {
    // https://www.w3.org/TR/xml/#NT-doctypedecl
    pattern: /<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,
    greedy: true,
    inside: {
      'internal-subset': {
        pattern: /(^[^\[]*\[)[\s\S]+(?=\]>$)/,
        lookbehind: true,
        greedy: true,
        inside: null // see below

      },
      'string': {
        pattern: /"[^"]*"|'[^']*'/,
        greedy: true
      },
      'punctuation': /^<!|>$|[[\]]/,
      'doctype-tag': /^DOCTYPE/i,
      'name': /[^\s<>'"]+/
    }
  },
  'cdata': {
    pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
    greedy: true
  },
  'tag': {
    pattern: /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,
    greedy: true,
    inside: {
      'tag': {
        pattern: /^<\/?[^\s>\/]+/,
        inside: {
          'punctuation': /^<\/?/,
          'namespace': /^[^\s>\/:]+:/
        }
      },
      'special-attr': [],
      'attr-value': {
        pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,
        inside: {
          'punctuation': [{
            pattern: /^=/,
            alias: 'attr-equals'
          }, /"|'/]
        }
      },
      'punctuation': /\/?>/,
      'attr-name': {
        pattern: /[^\s>\/]+/,
        inside: {
          'namespace': /^[^\s>\/:]+:/
        }
      }
    }
  },
  'entity': [{
    pattern: /&[\da-z]{1,8};/i,
    alias: 'named-entity'
  }, /&#x?[\da-f]{1,8};/i]
};
prism.languages.markup['tag'].inside['attr-value'].inside['entity'] = prism.languages.markup['entity'];
prism.languages.markup['doctype'].inside['internal-subset'].inside = prism.languages.markup; // Plugin to make entity title show the real entity, idea by Roman Komarov

prism.hooks.add('wrap', function (env) {
  if (env.type === 'entity') {
    env.attributes['title'] = env.content.replace(/&amp;/, '&');
  }
});
Object.defineProperty(prism.languages.markup.tag, 'addInlined', {
  /**
   * Adds an inlined language to markup.
   *
   * An example of an inlined language is CSS with `<style>` tags.
   *
   * @param {string} tagName The name of the tag that contains the inlined language. This name will be treated as
   * case insensitive.
   * @param {string} lang The language key.
   * @example
   * addInlined('style', 'css');
   */
  value: function addInlined(tagName, lang) {
    var includedCdataInside = {};
    includedCdataInside['language-' + lang] = {
      pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
      lookbehind: true,
      inside: prism.languages[lang]
    };
    includedCdataInside['cdata'] = /^<!\[CDATA\[|\]\]>$/i;
    var inside = {
      'included-cdata': {
        pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
        inside: includedCdataInside
      }
    };
    inside['language-' + lang] = {
      pattern: /[\s\S]+/,
      inside: prism.languages[lang]
    };
    var def = {};
    def[tagName] = {
      pattern: RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g, function () {
        return tagName;
      }), 'i'),
      lookbehind: true,
      greedy: true,
      inside: inside
    };
    prism.languages.insertBefore('markup', 'cdata', def);
  }
});
Object.defineProperty(prism.languages.markup.tag, 'addAttribute', {
  /**
   * Adds an pattern to highlight languages embedded in HTML attributes.
   *
   * An example of an inlined language is CSS with `style` attributes.
   *
   * @param {string} attrName The name of the tag that contains the inlined language. This name will be treated as
   * case insensitive.
   * @param {string} lang The language key.
   * @example
   * addAttribute('style', 'css');
   */
  value: function (attrName, lang) {
    prism.languages.markup.tag.inside['special-attr'].push({
      pattern: RegExp(/(^|["'\s])/.source + '(?:' + attrName + ')' + /\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source, 'i'),
      lookbehind: true,
      inside: {
        'attr-name': /^[^\s=]+/,
        'attr-value': {
          pattern: /=[\s\S]+/,
          inside: {
            'value': {
              pattern: /(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,
              lookbehind: true,
              alias: [lang, 'language-' + lang],
              inside: prism.languages[lang]
            },
            'punctuation': [{
              pattern: /^=/,
              alias: 'attr-equals'
            }, /"|'/]
          }
        }
      }
    });
  }
});
prism.languages.html = prism.languages.markup;
prism.languages.mathml = prism.languages.markup;
prism.languages.svg = prism.languages.markup;
prism.languages.xml = prism.languages.extend('markup', {});
prism.languages.ssml = prism.languages.xml;
prism.languages.atom = prism.languages.xml;
prism.languages.rss = prism.languages.xml;
/* "prismjs/components/prism-bash" */

(function (Prism) {
  // $ set | grep '^[A-Z][^[:space:]]*=' | cut -d= -f1 | tr '\n' '|'
  // + LC_ALL, RANDOM, REPLY, SECONDS.
  // + make sure PS1..4 are here as they are not always set,
  // - some useless things.
  var envVars = '\\b(?:BASH|BASHOPTS|BASH_ALIASES|BASH_ARGC|BASH_ARGV|BASH_CMDS|BASH_COMPLETION_COMPAT_DIR|BASH_LINENO|BASH_REMATCH|BASH_SOURCE|BASH_VERSINFO|BASH_VERSION|COLORTERM|COLUMNS|COMP_WORDBREAKS|DBUS_SESSION_BUS_ADDRESS|DEFAULTS_PATH|DESKTOP_SESSION|DIRSTACK|DISPLAY|EUID|GDMSESSION|GDM_LANG|GNOME_KEYRING_CONTROL|GNOME_KEYRING_PID|GPG_AGENT_INFO|GROUPS|HISTCONTROL|HISTFILE|HISTFILESIZE|HISTSIZE|HOME|HOSTNAME|HOSTTYPE|IFS|INSTANCE|JOB|LANG|LANGUAGE|LC_ADDRESS|LC_ALL|LC_IDENTIFICATION|LC_MEASUREMENT|LC_MONETARY|LC_NAME|LC_NUMERIC|LC_PAPER|LC_TELEPHONE|LC_TIME|LESSCLOSE|LESSOPEN|LINES|LOGNAME|LS_COLORS|MACHTYPE|MAILCHECK|MANDATORY_PATH|NO_AT_BRIDGE|OLDPWD|OPTERR|OPTIND|ORBIT_SOCKETDIR|OSTYPE|PAPERSIZE|PATH|PIPESTATUS|PPID|PS1|PS2|PS3|PS4|PWD|RANDOM|REPLY|SECONDS|SELINUX_INIT|SESSION|SESSIONTYPE|SESSION_MANAGER|SHELL|SHELLOPTS|SHLVL|SSH_AUTH_SOCK|TERM|UID|UPSTART_EVENTS|UPSTART_INSTANCE|UPSTART_JOB|UPSTART_SESSION|USER|WINDOWID|XAUTHORITY|XDG_CONFIG_DIRS|XDG_CURRENT_DESKTOP|XDG_DATA_DIRS|XDG_GREETER_DATA_DIR|XDG_MENU_PREFIX|XDG_RUNTIME_DIR|XDG_SEAT|XDG_SEAT_PATH|XDG_SESSION_DESKTOP|XDG_SESSION_ID|XDG_SESSION_PATH|XDG_SESSION_TYPE|XDG_VTNR|XMODIFIERS)\\b';
  var commandAfterHeredoc = {
    pattern: /(^(["']?)\w+\2)[ \t]+\S.*/,
    lookbehind: true,
    alias: 'punctuation',
    // this looks reasonably well in all themes
    inside: null // see below

  };
  var insideString = {
    'bash': commandAfterHeredoc,
    'environment': {
      pattern: RegExp('\\$' + envVars),
      alias: 'constant'
    },
    'variable': [// [0]: Arithmetic Environment
    {
      pattern: /\$?\(\([\s\S]+?\)\)/,
      greedy: true,
      inside: {
        // If there is a $ sign at the beginning highlight $(( and )) as variable
        'variable': [{
          pattern: /(^\$\(\([\s\S]+)\)\)/,
          lookbehind: true
        }, /^\$\(\(/],
        'number': /\b0x[\dA-Fa-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee]-?\d+)?/,
        // Operators according to https://www.gnu.org/software/bash/manual/bashref.html#Shell-Arithmetic
        'operator': /--|\+\+|\*\*=?|<<=?|>>=?|&&|\|\||[=!+\-*/%<>^&|]=?|[?~:]/,
        // If there is no $ sign at the beginning highlight (( and )) as punctuation
        'punctuation': /\(\(?|\)\)?|,|;/
      }
    }, // [1]: Command Substitution
    {
      pattern: /\$\((?:\([^)]+\)|[^()])+\)|`[^`]+`/,
      greedy: true,
      inside: {
        'variable': /^\$\(|^`|\)$|`$/
      }
    }, // [2]: Brace expansion
    {
      pattern: /\$\{[^}]+\}/,
      greedy: true,
      inside: {
        'operator': /:[-=?+]?|[!\/]|##?|%%?|\^\^?|,,?/,
        'punctuation': /[\[\]]/,
        'environment': {
          pattern: RegExp('(\\{)' + envVars),
          lookbehind: true,
          alias: 'constant'
        }
      }
    }, /\$(?:\w+|[#?*!@$])/],
    // Escape sequences from echo and printf's manuals, and escaped quotes.
    'entity': /\\(?:[abceEfnrtv\\"]|O?[0-7]{1,3}|U[0-9a-fA-F]{8}|u[0-9a-fA-F]{4}|x[0-9a-fA-F]{1,2})/
  };
  Prism.languages.bash = {
    'shebang': {
      pattern: /^#!\s*\/.*/,
      alias: 'important'
    },
    'comment': {
      pattern: /(^|[^"{\\$])#.*/,
      lookbehind: true
    },
    'function-name': [// a) function foo {
    // b) foo() {
    // c) function foo() {
    // but not “foo {”
    {
      // a) and c)
      pattern: /(\bfunction\s+)[\w-]+(?=(?:\s*\(?:\s*\))?\s*\{)/,
      lookbehind: true,
      alias: 'function'
    }, {
      // b)
      pattern: /\b[\w-]+(?=\s*\(\s*\)\s*\{)/,
      alias: 'function'
    }],
    // Highlight variable names as variables in for and select beginnings.
    'for-or-select': {
      pattern: /(\b(?:for|select)\s+)\w+(?=\s+in\s)/,
      alias: 'variable',
      lookbehind: true
    },
    // Highlight variable names as variables in the left-hand part
    // of assignments (“=” and “+=”).
    'assign-left': {
      pattern: /(^|[\s;|&]|[<>]\()\w+(?=\+?=)/,
      inside: {
        'environment': {
          pattern: RegExp('(^|[\\s;|&]|[<>]\\()' + envVars),
          lookbehind: true,
          alias: 'constant'
        }
      },
      alias: 'variable',
      lookbehind: true
    },
    'string': [// Support for Here-documents https://en.wikipedia.org/wiki/Here_document
    {
      pattern: /((?:^|[^<])<<-?\s*)(\w+)\s[\s\S]*?(?:\r?\n|\r)\2/,
      lookbehind: true,
      greedy: true,
      inside: insideString
    }, // Here-document with quotes around the tag
    // → No expansion (so no “inside”).
    {
      pattern: /((?:^|[^<])<<-?\s*)(["'])(\w+)\2\s[\s\S]*?(?:\r?\n|\r)\3/,
      lookbehind: true,
      greedy: true,
      inside: {
        'bash': commandAfterHeredoc
      }
    }, // “Normal” string
    {
      // https://www.gnu.org/software/bash/manual/html_node/Double-Quotes.html
      pattern: /(^|[^\\](?:\\\\)*)"(?:\\[\s\S]|\$\([^)]+\)|\$(?!\()|`[^`]+`|[^"\\`$])*"/,
      lookbehind: true,
      greedy: true,
      inside: insideString
    }, {
      // https://www.gnu.org/software/bash/manual/html_node/Single-Quotes.html
      pattern: /(^|[^$\\])'[^']*'/,
      lookbehind: true,
      greedy: true
    }, {
      // https://www.gnu.org/software/bash/manual/html_node/ANSI_002dC-Quoting.html
      pattern: /\$'(?:[^'\\]|\\[\s\S])*'/,
      greedy: true,
      inside: {
        'entity': insideString.entity
      }
    }],
    'environment': {
      pattern: RegExp('\\$?' + envVars),
      alias: 'constant'
    },
    'variable': insideString.variable,
    'function': {
      pattern: /(^|[\s;|&]|[<>]\()(?:add|apropos|apt|apt-cache|apt-get|aptitude|aspell|automysqlbackup|awk|basename|bash|bc|bconsole|bg|bzip2|cal|cat|cfdisk|chgrp|chkconfig|chmod|chown|chroot|cksum|clear|cmp|column|comm|composer|cp|cron|crontab|csplit|curl|cut|date|dc|dd|ddrescue|debootstrap|df|diff|diff3|dig|dir|dircolors|dirname|dirs|dmesg|docker|docker-compose|du|egrep|eject|env|ethtool|expand|expect|expr|fdformat|fdisk|fg|fgrep|file|find|fmt|fold|format|free|fsck|ftp|fuser|gawk|git|gparted|grep|groupadd|groupdel|groupmod|groups|grub-mkconfig|gzip|halt|head|hg|history|host|hostname|htop|iconv|id|ifconfig|ifdown|ifup|import|install|ip|jobs|join|kill|killall|less|link|ln|locate|logname|logrotate|look|lpc|lpr|lprint|lprintd|lprintq|lprm|ls|lsof|lynx|make|man|mc|mdadm|mkconfig|mkdir|mke2fs|mkfifo|mkfs|mkisofs|mknod|mkswap|mmv|more|most|mount|mtools|mtr|mutt|mv|nano|nc|netstat|nice|nl|node|nohup|notify-send|npm|nslookup|op|open|parted|passwd|paste|pathchk|ping|pkill|pnpm|podman|podman-compose|popd|pr|printcap|printenv|ps|pushd|pv|quota|quotacheck|quotactl|ram|rar|rcp|reboot|remsync|rename|renice|rev|rm|rmdir|rpm|rsync|scp|screen|sdiff|sed|sendmail|seq|service|sftp|sh|shellcheck|shuf|shutdown|sleep|slocate|sort|split|ssh|stat|strace|su|sudo|sum|suspend|swapon|sync|tac|tail|tar|tee|time|timeout|top|touch|tr|traceroute|tsort|tty|umount|uname|unexpand|uniq|units|unrar|unshar|unzip|update-grub|uptime|useradd|userdel|usermod|users|uudecode|uuencode|v|vcpkg|vdir|vi|vim|virsh|vmstat|wait|watch|wc|wget|whereis|which|who|whoami|write|xargs|xdg-open|yarn|yes|zenity|zip|zsh|zypper)(?=$|[)\s;|&])/,
      lookbehind: true
    },
    'keyword': {
      pattern: /(^|[\s;|&]|[<>]\()(?:case|do|done|elif|else|esac|fi|for|function|if|in|select|then|until|while)(?=$|[)\s;|&])/,
      lookbehind: true
    },
    // https://www.gnu.org/software/bash/manual/html_node/Shell-Builtin-Commands.html
    'builtin': {
      pattern: /(^|[\s;|&]|[<>]\()(?:\.|:|alias|bind|break|builtin|caller|cd|command|continue|declare|echo|enable|eval|exec|exit|export|getopts|hash|help|let|local|logout|mapfile|printf|pwd|read|readarray|readonly|return|set|shift|shopt|source|test|times|trap|type|typeset|ulimit|umask|unalias|unset)(?=$|[)\s;|&])/,
      lookbehind: true,
      // Alias added to make those easier to distinguish from strings.
      alias: 'class-name'
    },
    'boolean': {
      pattern: /(^|[\s;|&]|[<>]\()(?:false|true)(?=$|[)\s;|&])/,
      lookbehind: true
    },
    'file-descriptor': {
      pattern: /\B&\d\b/,
      alias: 'important'
    },
    'operator': {
      // Lots of redirections here, but not just that.
      pattern: /\d?<>|>\||\+=|=[=~]?|!=?|<<[<-]?|[&\d]?>>|\d[<>]&?|[<>][&=]?|&[>&]?|\|[&|]?/,
      inside: {
        'file-descriptor': {
          pattern: /^\d/,
          alias: 'important'
        }
      }
    },
    'punctuation': /\$?\(\(?|\)\)?|\.\.|[{}[\];\\]/,
    'number': {
      pattern: /(^|\s)(?:[1-9]\d*|0)(?:[.,]\d+)?\b/,
      lookbehind: true
    }
  };
  commandAfterHeredoc.inside = Prism.languages.bash;
  /* Patterns in command substitution. */

  var toBeCopied = ['comment', 'function-name', 'for-or-select', 'assign-left', 'string', 'environment', 'function', 'keyword', 'builtin', 'boolean', 'file-descriptor', 'operator', 'punctuation', 'number'];
  var inside = insideString.variable[1].inside;

  for (var i = 0; i < toBeCopied.length; i++) {
    inside[toBeCopied[i]] = Prism.languages.bash[toBeCopied[i]];
  }

  Prism.languages.shell = Prism.languages.bash;
})(prism);
/* "prismjs/components/prism-clike" */


prism.languages.clike = {
  'comment': [{
    pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
    lookbehind: true,
    greedy: true
  }, {
    pattern: /(^|[^\\:])\/\/.*/,
    lookbehind: true,
    greedy: true
  }],
  'string': {
    pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
    greedy: true
  },
  'class-name': {
    pattern: /(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,
    lookbehind: true,
    inside: {
      'punctuation': /[.\\]/
    }
  },
  'keyword': /\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,
  'boolean': /\b(?:false|true)\b/,
  'function': /\b\w+(?=\()/,
  'number': /\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,
  'operator': /[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,
  'punctuation': /[{}[\];(),.:]/
};
/* "prismjs/components/prism-c" */

prism.languages.c = prism.languages.extend('clike', {
  'comment': {
    pattern: /\/\/(?:[^\r\n\\]|\\(?:\r\n?|\n|(?![\r\n])))*|\/\*[\s\S]*?(?:\*\/|$)/,
    greedy: true
  },
  'string': {
    // https://en.cppreference.com/w/c/language/string_literal
    pattern: /"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"/,
    greedy: true
  },
  'class-name': {
    pattern: /(\b(?:enum|struct)\s+(?:__attribute__\s*\(\([\s\S]*?\)\)\s*)?)\w+|\b[a-z]\w*_t\b/,
    lookbehind: true
  },
  'keyword': /\b(?:_Alignas|_Alignof|_Atomic|_Bool|_Complex|_Generic|_Imaginary|_Noreturn|_Static_assert|_Thread_local|__attribute__|asm|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|inline|int|long|register|return|short|signed|sizeof|static|struct|switch|typedef|typeof|union|unsigned|void|volatile|while)\b/,
  'function': /\b[a-z_]\w*(?=\s*\()/i,
  'number': /(?:\b0x(?:[\da-f]+(?:\.[\da-f]*)?|\.[\da-f]+)(?:p[+-]?\d+)?|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?)[ful]{0,4}/i,
  'operator': />>=?|<<=?|->|([-+&|:])\1|[?:~]|[-+*/%&|^!=<>]=?/
});
prism.languages.insertBefore('c', 'string', {
  'char': {
    // https://en.cppreference.com/w/c/language/character_constant
    pattern: /'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n]){0,32}'/,
    greedy: true
  }
});
prism.languages.insertBefore('c', 'string', {
  'macro': {
    // allow for multiline macro definitions
    // spaces after the # character compile fine with gcc
    pattern: /(^[\t ]*)#\s*[a-z](?:[^\r\n\\/]|\/(?!\*)|\/\*(?:[^*]|\*(?!\/))*\*\/|\\(?:\r\n|[\s\S]))*/im,
    lookbehind: true,
    greedy: true,
    alias: 'property',
    inside: {
      'string': [{
        // highlight the path of the include statement as a string
        pattern: /^(#\s*include\s*)<[^>]+>/,
        lookbehind: true
      }, prism.languages.c['string']],
      'char': prism.languages.c['char'],
      'comment': prism.languages.c['comment'],
      'macro-name': [{
        pattern: /(^#\s*define\s+)\w+\b(?!\()/i,
        lookbehind: true
      }, {
        pattern: /(^#\s*define\s+)\w+\b(?=\()/i,
        lookbehind: true,
        alias: 'function'
      }],
      // highlight macro directives as keywords
      'directive': {
        pattern: /^(#\s*)[a-z]+/,
        lookbehind: true,
        alias: 'keyword'
      },
      'directive-hash': /^#/,
      'punctuation': /##|\\(?=[\r\n])/,
      'expression': {
        pattern: /\S[\s\S]*/,
        inside: prism.languages.c
      }
    }
  }
});
prism.languages.insertBefore('c', 'function', {
  // highlight predefined macros as constants
  'constant': /\b(?:EOF|NULL|SEEK_CUR|SEEK_END|SEEK_SET|__DATE__|__FILE__|__LINE__|__TIMESTAMP__|__TIME__|__func__|stderr|stdin|stdout)\b/
});
delete prism.languages.c['boolean'];
/* "prismjs/components/prism-cpp" */

(function (Prism) {
  var keyword = /\b(?:alignas|alignof|asm|auto|bool|break|case|catch|char|char16_t|char32_t|char8_t|class|co_await|co_return|co_yield|compl|concept|const|const_cast|consteval|constexpr|constinit|continue|decltype|default|delete|do|double|dynamic_cast|else|enum|explicit|export|extern|final|float|for|friend|goto|if|import|inline|int|int16_t|int32_t|int64_t|int8_t|long|module|mutable|namespace|new|noexcept|nullptr|operator|override|private|protected|public|register|reinterpret_cast|requires|return|short|signed|sizeof|static|static_assert|static_cast|struct|switch|template|this|thread_local|throw|try|typedef|typeid|typename|uint16_t|uint32_t|uint64_t|uint8_t|union|unsigned|using|virtual|void|volatile|wchar_t|while)\b/;
  var modName = /\b(?!<keyword>)\w+(?:\s*\.\s*\w+)*\b/.source.replace(/<keyword>/g, function () {
    return keyword.source;
  });
  Prism.languages.cpp = Prism.languages.extend('c', {
    'class-name': [{
      pattern: RegExp(/(\b(?:class|concept|enum|struct|typename)\s+)(?!<keyword>)\w+/.source.replace(/<keyword>/g, function () {
        return keyword.source;
      })),
      lookbehind: true
    }, // This is intended to capture the class name of method implementations like:
    //   void foo::bar() const {}
    // However! The `foo` in the above example could also be a namespace, so we only capture the class name if
    // it starts with an uppercase letter. This approximation should give decent results.
    /\b[A-Z]\w*(?=\s*::\s*\w+\s*\()/, // This will capture the class name before destructors like:
    //   Foo::~Foo() {}
    /\b[A-Z_]\w*(?=\s*::\s*~\w+\s*\()/i, // This also intends to capture the class name of method implementations but here the class has template
    // parameters, so it can't be a namespace (until C++ adds generic namespaces).
    /\b\w+(?=\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>\s*::\s*\w+\s*\()/],
    'keyword': keyword,
    'number': {
      pattern: /(?:\b0b[01']+|\b0x(?:[\da-f']+(?:\.[\da-f']*)?|\.[\da-f']+)(?:p[+-]?[\d']+)?|(?:\b[\d']+(?:\.[\d']*)?|\B\.[\d']+)(?:e[+-]?[\d']+)?)[ful]{0,4}/i,
      greedy: true
    },
    'operator': />>=?|<<=?|->|--|\+\+|&&|\|\||[?:~]|<=>|[-+*/%&|^!=<>]=?|\b(?:and|and_eq|bitand|bitor|not|not_eq|or|or_eq|xor|xor_eq)\b/,
    'boolean': /\b(?:false|true)\b/
  });
  Prism.languages.insertBefore('cpp', 'string', {
    'module': {
      // https://en.cppreference.com/w/cpp/language/modules
      pattern: RegExp(/(\b(?:import|module)\s+)/.source + '(?:' + // header-name
      /"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|<[^<>\r\n]*>/.source + '|' + // module name or partition or both
      /<mod-name>(?:\s*:\s*<mod-name>)?|:\s*<mod-name>/.source.replace(/<mod-name>/g, function () {
        return modName;
      }) + ')'),
      lookbehind: true,
      greedy: true,
      inside: {
        'string': /^[<"][\s\S]+/,
        'operator': /:/,
        'punctuation': /\./
      }
    },
    'raw-string': {
      pattern: /R"([^()\\ ]{0,16})\([\s\S]*?\)\1"/,
      alias: 'string',
      greedy: true
    }
  });
  Prism.languages.insertBefore('cpp', 'keyword', {
    'generic-function': {
      pattern: /\b(?!operator\b)[a-z_]\w*\s*<(?:[^<>]|<[^<>]*>)*>(?=\s*\()/i,
      inside: {
        'function': /^\w+/,
        'generic': {
          pattern: /<[\s\S]+/,
          alias: 'class-name',
          inside: Prism.languages.cpp
        }
      }
    }
  });
  Prism.languages.insertBefore('cpp', 'operator', {
    'double-colon': {
      pattern: /::/,
      alias: 'punctuation'
    }
  });
  Prism.languages.insertBefore('cpp', 'class-name', {
    // the base clause is an optional list of parent classes
    // https://en.cppreference.com/w/cpp/language/class
    'base-clause': {
      pattern: /(\b(?:class|struct)\s+\w+\s*:\s*)[^;{}"'\s]+(?:\s+[^;{}"'\s]+)*(?=\s*[;{])/,
      lookbehind: true,
      greedy: true,
      inside: Prism.languages.extend('cpp', {})
    }
  });
  Prism.languages.insertBefore('inside', 'double-colon', {
    // All untokenized words that are not namespaces should be class names
    'class-name': /\b[a-z_]\w*\b(?!\s*::)/i
  }, Prism.languages.cpp['base-clause']);
})(prism);
/* "prismjs/components/prism-css" */


(function (Prism) {
  var string = /(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;
  Prism.languages.css = {
    'comment': /\/\*[\s\S]*?\*\//,
    'atrule': {
      pattern: /@[\w-](?:[^;{\s]|\s+(?![\s{]))*(?:;|(?=\s*\{))/,
      inside: {
        'rule': /^@[\w-]+/,
        'selector-function-argument': {
          pattern: /(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,
          lookbehind: true,
          alias: 'selector'
        },
        'keyword': {
          pattern: /(^|[^\w-])(?:and|not|only|or)(?![\w-])/,
          lookbehind: true
        } // See rest below

      }
    },
    'url': {
      // https://drafts.csswg.org/css-values-3/#urls
      pattern: RegExp('\\burl\\((?:' + string.source + '|' + /(?:[^\\\r\n()"']|\\[\s\S])*/.source + ')\\)', 'i'),
      greedy: true,
      inside: {
        'function': /^url/i,
        'punctuation': /^\(|\)$/,
        'string': {
          pattern: RegExp('^' + string.source + '$'),
          alias: 'url'
        }
      }
    },
    'selector': {
      pattern: RegExp('(^|[{}\\s])[^{}\\s](?:[^{};"\'\\s]|\\s+(?![\\s{])|' + string.source + ')*(?=\\s*\\{)'),
      lookbehind: true
    },
    'string': {
      pattern: string,
      greedy: true
    },
    'property': {
      pattern: /(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,
      lookbehind: true
    },
    'important': /!important\b/i,
    'function': {
      pattern: /(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,
      lookbehind: true
    },
    'punctuation': /[(){};:,]/
  };
  Prism.languages.css['atrule'].inside.rest = Prism.languages.css;
  var markup = Prism.languages.markup;

  if (markup) {
    markup.tag.addInlined('style', 'css');
    markup.tag.addAttribute('style', 'css');
  }
})(prism);
/* "prismjs/components/prism-css-extras" */


(function (Prism) {
  var string = /("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/;
  var selectorInside;
  Prism.languages.css.selector = {
    pattern: Prism.languages.css.selector.pattern,
    lookbehind: true,
    inside: selectorInside = {
      'pseudo-element': /:(?:after|before|first-letter|first-line|selection)|::[-\w]+/,
      'pseudo-class': /:[-\w]+/,
      'class': /\.[-\w]+/,
      'id': /#[-\w]+/,
      'attribute': {
        pattern: RegExp('\\[(?:[^[\\]"\']|' + string.source + ')*\\]'),
        greedy: true,
        inside: {
          'punctuation': /^\[|\]$/,
          'case-sensitivity': {
            pattern: /(\s)[si]$/i,
            lookbehind: true,
            alias: 'keyword'
          },
          'namespace': {
            pattern: /^(\s*)(?:(?!\s)[-*\w\xA0-\uFFFF])*\|(?!=)/,
            lookbehind: true,
            inside: {
              'punctuation': /\|$/
            }
          },
          'attr-name': {
            pattern: /^(\s*)(?:(?!\s)[-\w\xA0-\uFFFF])+/,
            lookbehind: true
          },
          'attr-value': [string, {
            pattern: /(=\s*)(?:(?!\s)[-\w\xA0-\uFFFF])+(?=\s*$)/,
            lookbehind: true
          }],
          'operator': /[|~*^$]?=/
        }
      },
      'n-th': [{
        pattern: /(\(\s*)[+-]?\d*[\dn](?:\s*[+-]\s*\d+)?(?=\s*\))/,
        lookbehind: true,
        inside: {
          'number': /[\dn]+/,
          'operator': /[+-]/
        }
      }, {
        pattern: /(\(\s*)(?:even|odd)(?=\s*\))/i,
        lookbehind: true
      }],
      'combinator': />|\+|~|\|\|/,
      // the `tag` token has been existed and removed.
      // because we can't find a perfect tokenize to match it.
      // if you want to add it, please read https://github.com/PrismJS/prism/pull/2373 first.
      'punctuation': /[(),]/
    }
  };
  Prism.languages.css['atrule'].inside['selector-function-argument'].inside = selectorInside;
  Prism.languages.insertBefore('css', 'property', {
    'variable': {
      pattern: /(^|[^-\w\xA0-\uFFFF])--(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*/i,
      lookbehind: true
    }
  });
  var unit = {
    pattern: /(\b\d+)(?:%|[a-z]+(?![\w-]))/,
    lookbehind: true
  }; // 123 -123 .123 -.123 12.3 -12.3

  var number = {
    pattern: /(^|[^\w.-])-?(?:\d+(?:\.\d+)?|\.\d+)/,
    lookbehind: true
  };
  Prism.languages.insertBefore('css', 'function', {
    'operator': {
      pattern: /(\s)[+\-*\/](?=\s)/,
      lookbehind: true
    },
    // CAREFUL!
    // Previewers and Inline color use hexcode and color.
    'hexcode': {
      pattern: /\B#[\da-f]{3,8}\b/i,
      alias: 'color'
    },
    'color': [{
      pattern: /(^|[^\w-])(?:AliceBlue|AntiqueWhite|Aqua|Aquamarine|Azure|Beige|Bisque|Black|BlanchedAlmond|Blue|BlueViolet|Brown|BurlyWood|CadetBlue|Chartreuse|Chocolate|Coral|CornflowerBlue|Cornsilk|Crimson|Cyan|DarkBlue|DarkCyan|DarkGoldenRod|DarkGr[ae]y|DarkGreen|DarkKhaki|DarkMagenta|DarkOliveGreen|DarkOrange|DarkOrchid|DarkRed|DarkSalmon|DarkSeaGreen|DarkSlateBlue|DarkSlateGr[ae]y|DarkTurquoise|DarkViolet|DeepPink|DeepSkyBlue|DimGr[ae]y|DodgerBlue|FireBrick|FloralWhite|ForestGreen|Fuchsia|Gainsboro|GhostWhite|Gold|GoldenRod|Gr[ae]y|Green|GreenYellow|HoneyDew|HotPink|IndianRed|Indigo|Ivory|Khaki|Lavender|LavenderBlush|LawnGreen|LemonChiffon|LightBlue|LightCoral|LightCyan|LightGoldenRodYellow|LightGr[ae]y|LightGreen|LightPink|LightSalmon|LightSeaGreen|LightSkyBlue|LightSlateGr[ae]y|LightSteelBlue|LightYellow|Lime|LimeGreen|Linen|Magenta|Maroon|MediumAquaMarine|MediumBlue|MediumOrchid|MediumPurple|MediumSeaGreen|MediumSlateBlue|MediumSpringGreen|MediumTurquoise|MediumVioletRed|MidnightBlue|MintCream|MistyRose|Moccasin|NavajoWhite|Navy|OldLace|Olive|OliveDrab|Orange|OrangeRed|Orchid|PaleGoldenRod|PaleGreen|PaleTurquoise|PaleVioletRed|PapayaWhip|PeachPuff|Peru|Pink|Plum|PowderBlue|Purple|Red|RosyBrown|RoyalBlue|SaddleBrown|Salmon|SandyBrown|SeaGreen|SeaShell|Sienna|Silver|SkyBlue|SlateBlue|SlateGr[ae]y|Snow|SpringGreen|SteelBlue|Tan|Teal|Thistle|Tomato|Transparent|Turquoise|Violet|Wheat|White|WhiteSmoke|Yellow|YellowGreen)(?![\w-])/i,
      lookbehind: true
    }, {
      pattern: /\b(?:hsl|rgb)\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*\)\B|\b(?:hsl|rgb)a\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*,\s*(?:0|0?\.\d+|1)\s*\)\B/i,
      inside: {
        'unit': unit,
        'number': number,
        'function': /[\w-]+(?=\()/,
        'punctuation': /[(),]/
      }
    }],
    // it's important that there is no boundary assertion after the hex digits
    'entity': /\\[\da-f]{1,8}/i,
    'unit': unit,
    'number': number
  });
})(prism);
/* "prismjs/components/prism-javascript" */


prism.languages.javascript = prism.languages.extend('clike', {
  'class-name': [prism.languages.clike['class-name'], {
    pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,
    lookbehind: true
  }],
  'keyword': [{
    pattern: /((?:^|\})\s*)catch\b/,
    lookbehind: true
  }, {
    pattern: /(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
    lookbehind: true
  }],
  // Allow for all non-ASCII characters (See http://stackoverflow.com/a/2008444)
  'function': /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
  'number': {
    pattern: RegExp(/(^|[^\w$])/.source + '(?:' + ( // constant
    /NaN|Infinity/.source + '|' + // binary integer
    /0[bB][01]+(?:_[01]+)*n?/.source + '|' + // octal integer
    /0[oO][0-7]+(?:_[0-7]+)*n?/.source + '|' + // hexadecimal integer
    /0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source + '|' + // decimal bigint
    /\d+(?:_\d+)*n/.source + '|' + // decimal number (integer or float) but no bigint
    /(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source) + ')' + /(?![\w$])/.source),
    lookbehind: true
  },
  'operator': /--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/
});
prism.languages.javascript['class-name'][0].pattern = /(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/;
prism.languages.insertBefore('javascript', 'keyword', {
  'regex': {
    // eslint-disable-next-line regexp/no-dupe-characters-character-class
    pattern: /((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)\/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/,
    lookbehind: true,
    greedy: true,
    inside: {
      'regex-source': {
        pattern: /^(\/)[\s\S]+(?=\/[a-z]*$)/,
        lookbehind: true,
        alias: 'language-regex',
        inside: prism.languages.regex
      },
      'regex-delimiter': /^\/|\/$/,
      'regex-flags': /^[a-z]+$/
    }
  },
  // This must be declared before keyword because we use "function" inside the look-forward
  'function-variable': {
    pattern: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,
    alias: 'function'
  },
  'parameter': [{
    pattern: /(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,
    lookbehind: true,
    inside: prism.languages.javascript
  }, {
    pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,
    lookbehind: true,
    inside: prism.languages.javascript
  }, {
    pattern: /(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,
    lookbehind: true,
    inside: prism.languages.javascript
  }, {
    pattern: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,
    lookbehind: true,
    inside: prism.languages.javascript
  }],
  'constant': /\b[A-Z](?:[A-Z_]|\dx?)*\b/
});
prism.languages.insertBefore('javascript', 'string', {
  'hashbang': {
    pattern: /^#!.*/,
    greedy: true,
    alias: 'comment'
  },
  'template-string': {
    pattern: /`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,
    greedy: true,
    inside: {
      'template-punctuation': {
        pattern: /^`|`$/,
        alias: 'string'
      },
      'interpolation': {
        pattern: /((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,
        lookbehind: true,
        inside: {
          'interpolation-punctuation': {
            pattern: /^\$\{|\}$/,
            alias: 'punctuation'
          },
          rest: prism.languages.javascript
        }
      },
      'string': /[\s\S]+/
    }
  },
  'string-property': {
    pattern: /((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,
    lookbehind: true,
    greedy: true,
    alias: 'property'
  }
});
prism.languages.insertBefore('javascript', 'operator', {
  'literal-property': {
    pattern: /((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,
    lookbehind: true,
    alias: 'property'
  }
});

if (prism.languages.markup) {
  prism.languages.markup.tag.addInlined('script', 'javascript'); // add attribute support for all DOM events.
  // https://developer.mozilla.org/en-US/docs/Web/Events#Standard_events

  prism.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source, 'javascript');
}

prism.languages.js = prism.languages.javascript;
/* "prismjs/components/prism-coffeescript" */

(function (Prism) {
  // Ignore comments starting with { to privilege string interpolation highlighting
  var comment = /#(?!\{).+/;
  var interpolation = {
    pattern: /#\{[^}]+\}/,
    alias: 'variable'
  };
  Prism.languages.coffeescript = Prism.languages.extend('javascript', {
    'comment': comment,
    'string': [// Strings are multiline
    {
      pattern: /'(?:\\[\s\S]|[^\\'])*'/,
      greedy: true
    }, {
      // Strings are multiline
      pattern: /"(?:\\[\s\S]|[^\\"])*"/,
      greedy: true,
      inside: {
        'interpolation': interpolation
      }
    }],
    'keyword': /\b(?:and|break|by|catch|class|continue|debugger|delete|do|each|else|extend|extends|false|finally|for|if|in|instanceof|is|isnt|let|loop|namespace|new|no|not|null|of|off|on|or|own|return|super|switch|then|this|throw|true|try|typeof|undefined|unless|until|when|while|window|with|yes|yield)\b/,
    'class-member': {
      pattern: /@(?!\d)\w+/,
      alias: 'variable'
    }
  });
  Prism.languages.insertBefore('coffeescript', 'comment', {
    'multiline-comment': {
      pattern: /###[\s\S]+?###/,
      alias: 'comment'
    },
    // Block regexp can contain comments and interpolation
    'block-regex': {
      pattern: /\/{3}[\s\S]*?\/{3}/,
      alias: 'regex',
      inside: {
        'comment': comment,
        'interpolation': interpolation
      }
    }
  });
  Prism.languages.insertBefore('coffeescript', 'string', {
    'inline-javascript': {
      pattern: /`(?:\\[\s\S]|[^\\`])*`/,
      inside: {
        'delimiter': {
          pattern: /^`|`$/,
          alias: 'punctuation'
        },
        'script': {
          pattern: /[\s\S]+/,
          alias: 'language-javascript',
          inside: Prism.languages.javascript
        }
      }
    },
    // Block strings
    'multiline-string': [{
      pattern: /'''[\s\S]*?'''/,
      greedy: true,
      alias: 'string'
    }, {
      pattern: /"""[\s\S]*?"""/,
      greedy: true,
      alias: 'string',
      inside: {
        interpolation: interpolation
      }
    }]
  });
  Prism.languages.insertBefore('coffeescript', 'keyword', {
    // Object property
    'property': /(?!\d)\w+(?=\s*:(?!:))/
  });
  delete Prism.languages.coffeescript['template-string'];
  Prism.languages.coffee = Prism.languages.coffeescript;
})(prism);
/* "prismjs/components/prism-yaml" */


(function (Prism) {
  // https://yaml.org/spec/1.2/spec.html#c-ns-anchor-property
  // https://yaml.org/spec/1.2/spec.html#c-ns-alias-node
  var anchorOrAlias = /[*&][^\s[\]{},]+/; // https://yaml.org/spec/1.2/spec.html#c-ns-tag-property

  var tag = /!(?:<[\w\-%#;/?:@&=+$,.!~*'()[\]]+>|(?:[a-zA-Z\d-]*!)?[\w\-%#;/?:@&=+$.~*'()]+)?/; // https://yaml.org/spec/1.2/spec.html#c-ns-properties(n,c)

  var properties = '(?:' + tag.source + '(?:[ \t]+' + anchorOrAlias.source + ')?|' + anchorOrAlias.source + '(?:[ \t]+' + tag.source + ')?)'; // https://yaml.org/spec/1.2/spec.html#ns-plain(n,c)
  // This is a simplified version that doesn't support "#" and multiline keys
  // All these long scarry character classes are simplified versions of YAML's characters

  var plainKey = /(?:[^\s\x00-\x08\x0e-\x1f!"#%&'*,\-:>?@[\]`{|}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]|[?:-]<PLAIN>)(?:[ \t]*(?:(?![#:])<PLAIN>|:<PLAIN>))*/.source.replace(/<PLAIN>/g, function () {
    return /[^\s\x00-\x08\x0e-\x1f,[\]{}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]/.source;
  });
  var string = /"(?:[^"\\\r\n]|\\.)*"|'(?:[^'\\\r\n]|\\.)*'/.source;
  /**
   *
   * @param {string} value
   * @param {string} [flags]
   * @returns {RegExp}
   */

  function createValuePattern(value, flags) {
    flags = (flags || '').replace(/m/g, '') + 'm'; // add m flag

    var pattern = /([:\-,[{]\s*(?:\s<<prop>>[ \t]+)?)(?:<<value>>)(?=[ \t]*(?:$|,|\]|\}|(?:[\r\n]\s*)?#))/.source.replace(/<<prop>>/g, function () {
      return properties;
    }).replace(/<<value>>/g, function () {
      return value;
    });
    return RegExp(pattern, flags);
  }

  Prism.languages.yaml = {
    'scalar': {
      pattern: RegExp(/([\-:]\s*(?:\s<<prop>>[ \t]+)?[|>])[ \t]*(?:((?:\r?\n|\r)[ \t]+)\S[^\r\n]*(?:\2[^\r\n]+)*)/.source.replace(/<<prop>>/g, function () {
        return properties;
      })),
      lookbehind: true,
      alias: 'string'
    },
    'comment': /#.*/,
    'key': {
      pattern: RegExp(/((?:^|[:\-,[{\r\n?])[ \t]*(?:<<prop>>[ \t]+)?)<<key>>(?=\s*:\s)/.source.replace(/<<prop>>/g, function () {
        return properties;
      }).replace(/<<key>>/g, function () {
        return '(?:' + plainKey + '|' + string + ')';
      })),
      lookbehind: true,
      greedy: true,
      alias: 'atrule'
    },
    'directive': {
      pattern: /(^[ \t]*)%.+/m,
      lookbehind: true,
      alias: 'important'
    },
    'datetime': {
      pattern: createValuePattern(/\d{4}-\d\d?-\d\d?(?:[tT]|[ \t]+)\d\d?:\d{2}:\d{2}(?:\.\d*)?(?:[ \t]*(?:Z|[-+]\d\d?(?::\d{2})?))?|\d{4}-\d{2}-\d{2}|\d\d?:\d{2}(?::\d{2}(?:\.\d*)?)?/.source),
      lookbehind: true,
      alias: 'number'
    },
    'boolean': {
      pattern: createValuePattern(/false|true/.source, 'i'),
      lookbehind: true,
      alias: 'important'
    },
    'null': {
      pattern: createValuePattern(/null|~/.source, 'i'),
      lookbehind: true,
      alias: 'important'
    },
    'string': {
      pattern: createValuePattern(string),
      lookbehind: true,
      greedy: true
    },
    'number': {
      pattern: createValuePattern(/[+-]?(?:0x[\da-f]+|0o[0-7]+|(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?|\.inf|\.nan)/.source, 'i'),
      lookbehind: true
    },
    'tag': tag,
    'important': anchorOrAlias,
    'punctuation': /---|[:[\]{}\-,|>?]|\.\.\./
  };
  Prism.languages.yml = Prism.languages.yaml;
})(prism);
/* "prismjs/components/prism-markdown" */


(function (Prism) {
  // Allow only one line break
  var inner = /(?:\\.|[^\\\n\r]|(?:\n|\r\n?)(?![\r\n]))/.source;
  /**
   * This function is intended for the creation of the bold or italic pattern.
   *
   * This also adds a lookbehind group to the given pattern to ensure that the pattern is not backslash-escaped.
   *
   * _Note:_ Keep in mind that this adds a capturing group.
   *
   * @param {string} pattern
   * @returns {RegExp}
   */

  function createInline(pattern) {
    pattern = pattern.replace(/<inner>/g, function () {
      return inner;
    });
    return RegExp(/((?:^|[^\\])(?:\\{2})*)/.source + '(?:' + pattern + ')');
  }

  var tableCell = /(?:\\.|``(?:[^`\r\n]|`(?!`))+``|`[^`\r\n]+`|[^\\|\r\n`])+/.source;
  var tableRow = /\|?__(?:\|__)+\|?(?:(?:\n|\r\n?)|(?![\s\S]))/.source.replace(/__/g, function () {
    return tableCell;
  });
  var tableLine = /\|?[ \t]*:?-{3,}:?[ \t]*(?:\|[ \t]*:?-{3,}:?[ \t]*)+\|?(?:\n|\r\n?)/.source;
  Prism.languages.markdown = Prism.languages.extend('markup', {});
  Prism.languages.insertBefore('markdown', 'prolog', {
    'front-matter-block': {
      pattern: /(^(?:\s*[\r\n])?)---(?!.)[\s\S]*?[\r\n]---(?!.)/,
      lookbehind: true,
      greedy: true,
      inside: {
        'punctuation': /^---|---$/,
        'front-matter': {
          pattern: /\S+(?:\s+\S+)*/,
          alias: ['yaml', 'language-yaml'],
          inside: Prism.languages.yaml
        }
      }
    },
    'blockquote': {
      // > ...
      pattern: /^>(?:[\t ]*>)*/m,
      alias: 'punctuation'
    },
    'table': {
      pattern: RegExp('^' + tableRow + tableLine + '(?:' + tableRow + ')*', 'm'),
      inside: {
        'table-data-rows': {
          pattern: RegExp('^(' + tableRow + tableLine + ')(?:' + tableRow + ')*$'),
          lookbehind: true,
          inside: {
            'table-data': {
              pattern: RegExp(tableCell),
              inside: Prism.languages.markdown
            },
            'punctuation': /\|/
          }
        },
        'table-line': {
          pattern: RegExp('^(' + tableRow + ')' + tableLine + '$'),
          lookbehind: true,
          inside: {
            'punctuation': /\||:?-{3,}:?/
          }
        },
        'table-header-row': {
          pattern: RegExp('^' + tableRow + '$'),
          inside: {
            'table-header': {
              pattern: RegExp(tableCell),
              alias: 'important',
              inside: Prism.languages.markdown
            },
            'punctuation': /\|/
          }
        }
      }
    },
    'code': [{
      // Prefixed by 4 spaces or 1 tab and preceded by an empty line
      pattern: /((?:^|\n)[ \t]*\n|(?:^|\r\n?)[ \t]*\r\n?)(?: {4}|\t).+(?:(?:\n|\r\n?)(?: {4}|\t).+)*/,
      lookbehind: true,
      alias: 'keyword'
    }, {
      // ```optional language
      // code block
      // ```
      pattern: /^```[\s\S]*?^```$/m,
      greedy: true,
      inside: {
        'code-block': {
          pattern: /^(```.*(?:\n|\r\n?))[\s\S]+?(?=(?:\n|\r\n?)^```$)/m,
          lookbehind: true
        },
        'code-language': {
          pattern: /^(```).+/,
          lookbehind: true
        },
        'punctuation': /```/
      }
    }],
    'title': [{
      // title 1
      // =======
      // title 2
      // -------
      pattern: /\S.*(?:\n|\r\n?)(?:==+|--+)(?=[ \t]*$)/m,
      alias: 'important',
      inside: {
        punctuation: /==+$|--+$/
      }
    }, {
      // # title 1
      // ###### title 6
      pattern: /(^\s*)#.+/m,
      lookbehind: true,
      alias: 'important',
      inside: {
        punctuation: /^#+|#+$/
      }
    }],
    'hr': {
      // ***
      // ---
      // * * *
      // -----------
      pattern: /(^\s*)([*-])(?:[\t ]*\2){2,}(?=\s*$)/m,
      lookbehind: true,
      alias: 'punctuation'
    },
    'list': {
      // * item
      // + item
      // - item
      // 1. item
      pattern: /(^\s*)(?:[*+-]|\d+\.)(?=[\t ].)/m,
      lookbehind: true,
      alias: 'punctuation'
    },
    'url-reference': {
      // [id]: http://example.com "Optional title"
      // [id]: http://example.com 'Optional title'
      // [id]: http://example.com (Optional title)
      // [id]: <http://example.com> "Optional title"
      pattern: /!?\[[^\]]+\]:[\t ]+(?:\S+|<(?:\\.|[^>\\])+>)(?:[\t ]+(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\)))?/,
      inside: {
        'variable': {
          pattern: /^(!?\[)[^\]]+/,
          lookbehind: true
        },
        'string': /(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\))$/,
        'punctuation': /^[\[\]!:]|[<>]/
      },
      alias: 'url'
    },
    'bold': {
      // **strong**
      // __strong__
      // allow one nested instance of italic text using the same delimiter
      pattern: createInline(/\b__(?:(?!_)<inner>|_(?:(?!_)<inner>)+_)+__\b|\*\*(?:(?!\*)<inner>|\*(?:(?!\*)<inner>)+\*)+\*\*/.source),
      lookbehind: true,
      greedy: true,
      inside: {
        'content': {
          pattern: /(^..)[\s\S]+(?=..$)/,
          lookbehind: true,
          inside: {} // see below

        },
        'punctuation': /\*\*|__/
      }
    },
    'italic': {
      // *em*
      // _em_
      // allow one nested instance of bold text using the same delimiter
      pattern: createInline(/\b_(?:(?!_)<inner>|__(?:(?!_)<inner>)+__)+_\b|\*(?:(?!\*)<inner>|\*\*(?:(?!\*)<inner>)+\*\*)+\*/.source),
      lookbehind: true,
      greedy: true,
      inside: {
        'content': {
          pattern: /(^.)[\s\S]+(?=.$)/,
          lookbehind: true,
          inside: {} // see below

        },
        'punctuation': /[*_]/
      }
    },
    'strike': {
      // ~~strike through~~
      // ~strike~
      // eslint-disable-next-line regexp/strict
      pattern: createInline(/(~~?)(?:(?!~)<inner>)+\2/.source),
      lookbehind: true,
      greedy: true,
      inside: {
        'content': {
          pattern: /(^~~?)[\s\S]+(?=\1$)/,
          lookbehind: true,
          inside: {} // see below

        },
        'punctuation': /~~?/
      }
    },
    'code-snippet': {
      // `code`
      // ``code``
      pattern: /(^|[^\\`])(?:``[^`\r\n]+(?:`[^`\r\n]+)*``(?!`)|`[^`\r\n]+`(?!`))/,
      lookbehind: true,
      greedy: true,
      alias: ['code', 'keyword']
    },
    'url': {
      // [example](http://example.com "Optional title")
      // [example][id]
      // [example] [id]
      pattern: createInline(/!?\[(?:(?!\])<inner>)+\](?:\([^\s)]+(?:[\t ]+"(?:\\.|[^"\\])*")?\)|[ \t]?\[(?:(?!\])<inner>)+\])/.source),
      lookbehind: true,
      greedy: true,
      inside: {
        'operator': /^!/,
        'content': {
          pattern: /(^\[)[^\]]+(?=\])/,
          lookbehind: true,
          inside: {} // see below

        },
        'variable': {
          pattern: /(^\][ \t]?\[)[^\]]+(?=\]$)/,
          lookbehind: true
        },
        'url': {
          pattern: /(^\]\()[^\s)]+/,
          lookbehind: true
        },
        'string': {
          pattern: /(^[ \t]+)"(?:\\.|[^"\\])*"(?=\)$)/,
          lookbehind: true
        }
      }
    }
  });
  ['url', 'bold', 'italic', 'strike'].forEach(function (token) {
    ['url', 'bold', 'italic', 'strike', 'code-snippet'].forEach(function (inside) {
      if (token !== inside) {
        Prism.languages.markdown[token].inside.content.inside[inside] = Prism.languages.markdown[inside];
      }
    });
  });
  Prism.hooks.add('after-tokenize', function (env) {
    if (env.language !== 'markdown' && env.language !== 'md') {
      return;
    }

    function walkTokens(tokens) {
      if (!tokens || typeof tokens === 'string') {
        return;
      }

      for (var i = 0, l = tokens.length; i < l; i++) {
        var token = tokens[i];

        if (token.type !== 'code') {
          walkTokens(token.content);
          continue;
        }
        /*
         * Add the correct `language-xxxx` class to this code block. Keep in mind that the `code-language` token
         * is optional. But the grammar is defined so that there is only one case we have to handle:
         *
         * token.content = [
         *     <span class="punctuation">```</span>,
         *     <span class="code-language">xxxx</span>,
         *     '\n', // exactly one new lines (\r or \n or \r\n)
         *     <span class="code-block">...</span>,
         *     '\n', // exactly one new lines again
         *     <span class="punctuation">```</span>
         * ];
         */


        var codeLang = token.content[1];
        var codeBlock = token.content[3];

        if (codeLang && codeBlock && codeLang.type === 'code-language' && codeBlock.type === 'code-block' && typeof codeLang.content === 'string') {
          // this might be a language that Prism does not support
          // do some replacements to support C++, C#, and F#
          var lang = codeLang.content.replace(/\b#/g, 'sharp').replace(/\b\+\+/g, 'pp'); // only use the first word

          lang = (/[a-z][\w-]*/i.exec(lang) || [''])[0].toLowerCase();
          var alias = 'language-' + lang; // add alias

          if (!codeBlock.alias) {
            codeBlock.alias = [alias];
          } else if (typeof codeBlock.alias === 'string') {
            codeBlock.alias = [codeBlock.alias, alias];
          } else {
            codeBlock.alias.push(alias);
          }
        }
      }
    }

    walkTokens(env.tokens);
  });
  Prism.hooks.add('wrap', function (env) {
    if (env.type !== 'code-block') {
      return;
    }

    var codeLang = '';

    for (var i = 0, l = env.classes.length; i < l; i++) {
      var cls = env.classes[i];
      var match = /language-(.+)/.exec(cls);

      if (match) {
        codeLang = match[1];
        break;
      }
    }

    var grammar = Prism.languages[codeLang];

    if (!grammar) {
      if (codeLang && codeLang !== 'none' && Prism.plugins.autoloader) {
        var id = 'md-' + new Date().valueOf() + '-' + Math.floor(Math.random() * 1e16);
        env.attributes['id'] = id;
        Prism.plugins.autoloader.loadLanguages(codeLang, function () {
          var ele = document.getElementById(id);

          if (ele) {
            ele.innerHTML = Prism.highlight(ele.textContent, Prism.languages[codeLang], codeLang);
          }
        });
      }
    } else {
      env.content = Prism.highlight(textContent(env.content), grammar, codeLang);
    }
  });
  var tagPattern = RegExp(Prism.languages.markup.tag.pattern.source, 'gi');
  /**
   * A list of known entity names.
   *
   * This will always be incomplete to save space. The current list is the one used by lowdash's unescape function.
   *
   * @see {@link https://github.com/lodash/lodash/blob/2da024c3b4f9947a48517639de7560457cd4ec6c/unescape.js#L2}
   */

  var KNOWN_ENTITY_NAMES = {
    'amp': '&',
    'lt': '<',
    'gt': '>',
    'quot': '"'
  }; // IE 11 doesn't support `String.fromCodePoint`

  var fromCodePoint = String.fromCodePoint || String.fromCharCode;
  /**
   * Returns the text content of a given HTML source code string.
   *
   * @param {string} html
   * @returns {string}
   */

  function textContent(html) {
    // remove all tags
    var text = html.replace(tagPattern, ''); // decode known entities

    text = text.replace(/&(\w{1,8}|#x?[\da-f]{1,8});/gi, function (m, code) {
      code = code.toLowerCase();

      if (code[0] === '#') {
        var value;

        if (code[1] === 'x') {
          value = parseInt(code.slice(2), 16);
        } else {
          value = Number(code.slice(1));
        }

        return fromCodePoint(value);
      } else {
        var known = KNOWN_ENTITY_NAMES[code];

        if (known) {
          return known;
        } // unable to decode


        return m;
      }
    });
    return text;
  }

  Prism.languages.md = Prism.languages.markdown;
})(prism);
/* "prismjs/components/prism-graphql" */


prism.languages.graphql = {
  'comment': /#.*/,
  'description': {
    pattern: /(?:"""(?:[^"]|(?!""")")*"""|"(?:\\.|[^\\"\r\n])*")(?=\s*[a-z_])/i,
    greedy: true,
    alias: 'string',
    inside: {
      'language-markdown': {
        pattern: /(^"(?:"")?)(?!\1)[\s\S]+(?=\1$)/,
        lookbehind: true,
        inside: prism.languages.markdown
      }
    }
  },
  'string': {
    pattern: /"""(?:[^"]|(?!""")")*"""|"(?:\\.|[^\\"\r\n])*"/,
    greedy: true
  },
  'number': /(?:\B-|\b)\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,
  'boolean': /\b(?:false|true)\b/,
  'variable': /\$[a-z_]\w*/i,
  'directive': {
    pattern: /@[a-z_]\w*/i,
    alias: 'function'
  },
  'attr-name': {
    pattern: /\b[a-z_]\w*(?=\s*(?:\((?:[^()"]|"(?:\\.|[^\\"\r\n])*")*\))?:)/i,
    greedy: true
  },
  'atom-input': {
    pattern: /\b[A-Z]\w*Input\b/,
    alias: 'class-name'
  },
  'scalar': /\b(?:Boolean|Float|ID|Int|String)\b/,
  'constant': /\b[A-Z][A-Z_\d]*\b/,
  'class-name': {
    pattern: /(\b(?:enum|implements|interface|on|scalar|type|union)\s+|&\s*|:\s*|\[)[A-Z_]\w*/,
    lookbehind: true
  },
  'fragment': {
    pattern: /(\bfragment\s+|\.{3}\s*(?!on\b))[a-zA-Z_]\w*/,
    lookbehind: true,
    alias: 'function'
  },
  'definition-mutation': {
    pattern: /(\bmutation\s+)[a-zA-Z_]\w*/,
    lookbehind: true,
    alias: 'function'
  },
  'definition-query': {
    pattern: /(\bquery\s+)[a-zA-Z_]\w*/,
    lookbehind: true,
    alias: 'function'
  },
  'keyword': /\b(?:directive|enum|extend|fragment|implements|input|interface|mutation|on|query|repeatable|scalar|schema|subscription|type|union)\b/,
  'operator': /[!=|&]|\.{3}/,
  'property-query': /\w+(?=\s*\()/,
  'object': /\w+(?=\s*\{)/,
  'punctuation': /[!(){}\[\]:=,]/,
  'property': /\w+/
};
prism.hooks.add('after-tokenize', function afterTokenizeGraphql(env) {
  if (env.language !== 'graphql') {
    return;
  }
  /**
   * get the graphql token stream that we want to customize
   *
   * @typedef {InstanceType<import("./prism-core")["Token"]>} Token
   * @type {Token[]}
   */


  var validTokens = env.tokens.filter(function (token) {
    return typeof token !== 'string' && token.type !== 'comment' && token.type !== 'scalar';
  });
  var currentIndex = 0;
  /**
   * Returns whether the token relative to the current index has the given type.
   *
   * @param {number} offset
   * @returns {Token | undefined}
   */

  function getToken(offset) {
    return validTokens[currentIndex + offset];
  }
  /**
   * Returns whether the token relative to the current index has the given type.
   *
   * @param {readonly string[]} types
   * @param {number} [offset=0]
   * @returns {boolean}
   */


  function isTokenType(types, offset) {
    offset = offset || 0;

    for (var i = 0; i < types.length; i++) {
      var token = getToken(i + offset);

      if (!token || token.type !== types[i]) {
        return false;
      }
    }

    return true;
  }
  /**
   * Returns the index of the closing bracket to an opening bracket.
   *
   * It is assumed that `token[currentIndex - 1]` is an opening bracket.
   *
   * If no closing bracket could be found, `-1` will be returned.
   *
   * @param {RegExp} open
   * @param {RegExp} close
   * @returns {number}
   */


  function findClosingBracket(open, close) {
    var stackHeight = 1;

    for (var i = currentIndex; i < validTokens.length; i++) {
      var token = validTokens[i];
      var content = token.content;

      if (token.type === 'punctuation' && typeof content === 'string') {
        if (open.test(content)) {
          stackHeight++;
        } else if (close.test(content)) {
          stackHeight--;

          if (stackHeight === 0) {
            return i;
          }
        }
      }
    }

    return -1;
  }
  /**
   * Adds an alias to the given token.
   *
   * @param {Token} token
   * @param {string} alias
   * @returns {void}
   */


  function addAlias(token, alias) {
    var aliases = token.alias;

    if (!aliases) {
      token.alias = aliases = [];
    } else if (!Array.isArray(aliases)) {
      token.alias = aliases = [aliases];
    }

    aliases.push(alias);
  }

  for (; currentIndex < validTokens.length;) {
    var startToken = validTokens[currentIndex++]; // add special aliases for mutation tokens

    if (startToken.type === 'keyword' && startToken.content === 'mutation') {
      // any array of the names of all input variables (if any)
      var inputVariables = [];

      if (isTokenType(['definition-mutation', 'punctuation']) && getToken(1).content === '(') {
        // definition
        currentIndex += 2; // skip 'definition-mutation' and 'punctuation'

        var definitionEnd = findClosingBracket(/^\($/, /^\)$/);

        if (definitionEnd === -1) {
          continue;
        } // find all input variables


        for (; currentIndex < definitionEnd; currentIndex++) {
          var t = getToken(0);

          if (t.type === 'variable') {
            addAlias(t, 'variable-input');
            inputVariables.push(t.content);
          }
        }

        currentIndex = definitionEnd + 1;
      }

      if (isTokenType(['punctuation', 'property-query']) && getToken(0).content === '{') {
        currentIndex++; // skip opening bracket

        addAlias(getToken(0), 'property-mutation');

        if (inputVariables.length > 0) {
          var mutationEnd = findClosingBracket(/^\{$/, /^\}$/);

          if (mutationEnd === -1) {
            continue;
          } // give references to input variables a special alias


          for (var i = currentIndex; i < mutationEnd; i++) {
            var varToken = validTokens[i];

            if (varToken.type === 'variable' && inputVariables.indexOf(varToken.content) >= 0) {
              addAlias(varToken, 'variable-input');
            }
          }
        }
      }
    }
  }
});
/* "prismjs/components/prism-sql" */

prism.languages.sql = {
  'comment': {
    pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|(?:--|\/\/|#).*)/,
    lookbehind: true
  },
  'variable': [{
    pattern: /@(["'`])(?:\\[\s\S]|(?!\1)[^\\])+\1/,
    greedy: true
  }, /@[\w.$]+/],
  'string': {
    pattern: /(^|[^@\\])("|')(?:\\[\s\S]|(?!\2)[^\\]|\2\2)*\2/,
    greedy: true,
    lookbehind: true
  },
  'identifier': {
    pattern: /(^|[^@\\])`(?:\\[\s\S]|[^`\\]|``)*`/,
    greedy: true,
    lookbehind: true,
    inside: {
      'punctuation': /^`|`$/
    }
  },
  'function': /\b(?:AVG|COUNT|FIRST|FORMAT|LAST|LCASE|LEN|MAX|MID|MIN|MOD|NOW|ROUND|SUM|UCASE)(?=\s*\()/i,
  // Should we highlight user defined functions too?
  'keyword': /\b(?:ACTION|ADD|AFTER|ALGORITHM|ALL|ALTER|ANALYZE|ANY|APPLY|AS|ASC|AUTHORIZATION|AUTO_INCREMENT|BACKUP|BDB|BEGIN|BERKELEYDB|BIGINT|BINARY|BIT|BLOB|BOOL|BOOLEAN|BREAK|BROWSE|BTREE|BULK|BY|CALL|CASCADED?|CASE|CHAIN|CHAR(?:ACTER|SET)?|CHECK(?:POINT)?|CLOSE|CLUSTERED|COALESCE|COLLATE|COLUMNS?|COMMENT|COMMIT(?:TED)?|COMPUTE|CONNECT|CONSISTENT|CONSTRAINT|CONTAINS(?:TABLE)?|CONTINUE|CONVERT|CREATE|CROSS|CURRENT(?:_DATE|_TIME|_TIMESTAMP|_USER)?|CURSOR|CYCLE|DATA(?:BASES?)?|DATE(?:TIME)?|DAY|DBCC|DEALLOCATE|DEC|DECIMAL|DECLARE|DEFAULT|DEFINER|DELAYED|DELETE|DELIMITERS?|DENY|DESC|DESCRIBE|DETERMINISTIC|DISABLE|DISCARD|DISK|DISTINCT|DISTINCTROW|DISTRIBUTED|DO|DOUBLE|DROP|DUMMY|DUMP(?:FILE)?|DUPLICATE|ELSE(?:IF)?|ENABLE|ENCLOSED|END|ENGINE|ENUM|ERRLVL|ERRORS|ESCAPED?|EXCEPT|EXEC(?:UTE)?|EXISTS|EXIT|EXPLAIN|EXTENDED|FETCH|FIELDS|FILE|FILLFACTOR|FIRST|FIXED|FLOAT|FOLLOWING|FOR(?: EACH ROW)?|FORCE|FOREIGN|FREETEXT(?:TABLE)?|FROM|FULL|FUNCTION|GEOMETRY(?:COLLECTION)?|GLOBAL|GOTO|GRANT|GROUP|HANDLER|HASH|HAVING|HOLDLOCK|HOUR|IDENTITY(?:COL|_INSERT)?|IF|IGNORE|IMPORT|INDEX|INFILE|INNER|INNODB|INOUT|INSERT|INT|INTEGER|INTERSECT|INTERVAL|INTO|INVOKER|ISOLATION|ITERATE|JOIN|KEYS?|KILL|LANGUAGE|LAST|LEAVE|LEFT|LEVEL|LIMIT|LINENO|LINES|LINESTRING|LOAD|LOCAL|LOCK|LONG(?:BLOB|TEXT)|LOOP|MATCH(?:ED)?|MEDIUM(?:BLOB|INT|TEXT)|MERGE|MIDDLEINT|MINUTE|MODE|MODIFIES|MODIFY|MONTH|MULTI(?:LINESTRING|POINT|POLYGON)|NATIONAL|NATURAL|NCHAR|NEXT|NO|NONCLUSTERED|NULLIF|NUMERIC|OFF?|OFFSETS?|ON|OPEN(?:DATASOURCE|QUERY|ROWSET)?|OPTIMIZE|OPTION(?:ALLY)?|ORDER|OUT(?:ER|FILE)?|OVER|PARTIAL|PARTITION|PERCENT|PIVOT|PLAN|POINT|POLYGON|PRECEDING|PRECISION|PREPARE|PREV|PRIMARY|PRINT|PRIVILEGES|PROC(?:EDURE)?|PUBLIC|PURGE|QUICK|RAISERROR|READS?|REAL|RECONFIGURE|REFERENCES|RELEASE|RENAME|REPEAT(?:ABLE)?|REPLACE|REPLICATION|REQUIRE|RESIGNAL|RESTORE|RESTRICT|RETURN(?:ING|S)?|REVOKE|RIGHT|ROLLBACK|ROUTINE|ROW(?:COUNT|GUIDCOL|S)?|RTREE|RULE|SAVE(?:POINT)?|SCHEMA|SECOND|SELECT|SERIAL(?:IZABLE)?|SESSION(?:_USER)?|SET(?:USER)?|SHARE|SHOW|SHUTDOWN|SIMPLE|SMALLINT|SNAPSHOT|SOME|SONAME|SQL|START(?:ING)?|STATISTICS|STATUS|STRIPED|SYSTEM_USER|TABLES?|TABLESPACE|TEMP(?:ORARY|TABLE)?|TERMINATED|TEXT(?:SIZE)?|THEN|TIME(?:STAMP)?|TINY(?:BLOB|INT|TEXT)|TOP?|TRAN(?:SACTIONS?)?|TRIGGER|TRUNCATE|TSEQUAL|TYPES?|UNBOUNDED|UNCOMMITTED|UNDEFINED|UNION|UNIQUE|UNLOCK|UNPIVOT|UNSIGNED|UPDATE(?:TEXT)?|USAGE|USE|USER|USING|VALUES?|VAR(?:BINARY|CHAR|CHARACTER|YING)|VIEW|WAITFOR|WARNINGS|WHEN|WHERE|WHILE|WITH(?: ROLLUP|IN)?|WORK|WRITE(?:TEXT)?|YEAR)\b/i,
  'boolean': /\b(?:FALSE|NULL|TRUE)\b/i,
  'number': /\b0x[\da-f]+\b|\b\d+(?:\.\d*)?|\B\.\d+\b/i,
  'operator': /[-+*\/=%^~]|&&?|\|\|?|!=?|<(?:=>?|<|>)?|>[>=]?|\b(?:AND|BETWEEN|DIV|ILIKE|IN|IS|LIKE|NOT|OR|REGEXP|RLIKE|SOUNDS LIKE|XOR)\b/i,
  'punctuation': /[;[\]()`,.]/
};
/* "prismjs/components/prism-js-templates" */

(function (Prism) {
  var templateString = Prism.languages.javascript['template-string']; // see the pattern in prism-javascript.js

  var templateLiteralPattern = templateString.pattern.source;
  var interpolationObject = templateString.inside['interpolation'];
  var interpolationPunctuationObject = interpolationObject.inside['interpolation-punctuation'];
  var interpolationPattern = interpolationObject.pattern.source;
  /**
   * Creates a new pattern to match a template string with a special tag.
   *
   * This will return `undefined` if there is no grammar with the given language id.
   *
   * @param {string} language The language id of the embedded language. E.g. `markdown`.
   * @param {string} tag The regex pattern to match the tag.
   * @returns {object | undefined}
   * @example
   * createTemplate('css', /\bcss/.source);
   */

  function createTemplate(language, tag) {
    if (!Prism.languages[language]) {
      return undefined;
    }

    return {
      pattern: RegExp('((?:' + tag + ')\\s*)' + templateLiteralPattern),
      lookbehind: true,
      greedy: true,
      inside: {
        'template-punctuation': {
          pattern: /^`|`$/,
          alias: 'string'
        },
        'embedded-code': {
          pattern: /[\s\S]+/,
          alias: language
        }
      }
    };
  }

  Prism.languages.javascript['template-string'] = [// styled-jsx:
  //   css`a { color: #25F; }`
  // styled-components:
  //   styled.h1`color: red;`
  createTemplate('css', /\b(?:styled(?:\([^)]*\))?(?:\s*\.\s*\w+(?:\([^)]*\))*)*|css(?:\s*\.\s*(?:global|resolve))?|createGlobalStyle|keyframes)/.source), // html`<p></p>`
  // div.innerHTML = `<p></p>`
  createTemplate('html', /\bhtml|\.\s*(?:inner|outer)HTML\s*\+?=/.source), // svg`<path fill="#fff" d="M55.37 ..."/>`
  createTemplate('svg', /\bsvg/.source), // md`# h1`, markdown`## h2`
  createTemplate('markdown', /\b(?:markdown|md)/.source), // gql`...`, graphql`...`, graphql.experimental`...`
  createTemplate('graphql', /\b(?:gql|graphql(?:\s*\.\s*experimental)?)/.source), // sql`...`
  createTemplate('sql', /\bsql/.source), // vanilla template string
  templateString].filter(Boolean);
  /**
   * Returns a specific placeholder literal for the given language.
   *
   * @param {number} counter
   * @param {string} language
   * @returns {string}
   */

  function getPlaceholder(counter, language) {
    return '___' + language.toUpperCase() + '_' + counter + '___';
  }
  /**
   * Returns the tokens of `Prism.tokenize` but also runs the `before-tokenize` and `after-tokenize` hooks.
   *
   * @param {string} code
   * @param {any} grammar
   * @param {string} language
   * @returns {(string|Token)[]}
   */


  function tokenizeWithHooks(code, grammar, language) {
    var env = {
      code: code,
      grammar: grammar,
      language: language
    };
    Prism.hooks.run('before-tokenize', env);
    env.tokens = Prism.tokenize(env.code, env.grammar);
    Prism.hooks.run('after-tokenize', env);
    return env.tokens;
  }
  /**
   * Returns the token of the given JavaScript interpolation expression.
   *
   * @param {string} expression The code of the expression. E.g. `"${42}"`
   * @returns {Token}
   */


  function tokenizeInterpolationExpression(expression) {
    var tempGrammar = {};
    tempGrammar['interpolation-punctuation'] = interpolationPunctuationObject;
    /** @type {Array} */

    var tokens = Prism.tokenize(expression, tempGrammar);

    if (tokens.length === 3) {
      /**
       * The token array will look like this
       * [
       *     ["interpolation-punctuation", "${"]
       *     "..." // JavaScript expression of the interpolation
       *     ["interpolation-punctuation", "}"]
       * ]
       */
      var args = [1, 1];
      args.push.apply(args, tokenizeWithHooks(tokens[1], Prism.languages.javascript, 'javascript'));
      tokens.splice.apply(tokens, args);
    }

    return new Prism.Token('interpolation', tokens, interpolationObject.alias, expression);
  }
  /**
   * Tokenizes the given code with support for JavaScript interpolation expressions mixed in.
   *
   * This function has 3 phases:
   *
   * 1. Replace all JavaScript interpolation expression with a placeholder.
   *    The placeholder will have the syntax of a identify of the target language.
   * 2. Tokenize the code with placeholders.
   * 3. Tokenize the interpolation expressions and re-insert them into the tokenize code.
   *    The insertion only works if a placeholder hasn't been "ripped apart" meaning that the placeholder has been
   *    tokenized as two tokens by the grammar of the embedded language.
   *
   * @param {string} code
   * @param {object} grammar
   * @param {string} language
   * @returns {Token}
   */


  function tokenizeEmbedded(code, grammar, language) {
    // 1. First filter out all interpolations
    // because they might be escaped, we need a lookbehind, so we use Prism

    /** @type {(Token|string)[]} */
    var _tokens = Prism.tokenize(code, {
      'interpolation': {
        pattern: RegExp(interpolationPattern),
        lookbehind: true
      }
    }); // replace all interpolations with a placeholder which is not in the code already


    var placeholderCounter = 0;
    /** @type {Object<string, string>} */

    var placeholderMap = {};

    var embeddedCode = _tokens.map(function (token) {
      if (typeof token === 'string') {
        return token;
      } else {
        var interpolationExpression = token.content;
        var placeholder;

        while (code.indexOf(placeholder = getPlaceholder(placeholderCounter++, language)) !== -1) {
          /* noop */
        }

        placeholderMap[placeholder] = interpolationExpression;
        return placeholder;
      }
    }).join(''); // 2. Tokenize the embedded code


    var embeddedTokens = tokenizeWithHooks(embeddedCode, grammar, language); // 3. Re-insert the interpolation

    var placeholders = Object.keys(placeholderMap);
    placeholderCounter = 0;
    /**
     *
     * @param {(Token|string)[]} tokens
     * @returns {void}
     */

    function walkTokens(tokens) {
      for (var i = 0; i < tokens.length; i++) {
        if (placeholderCounter >= placeholders.length) {
          return;
        }

        var token = tokens[i];

        if (typeof token === 'string' || typeof token.content === 'string') {
          var placeholder = placeholders[placeholderCounter];
          var s = typeof token === 'string' ? token :
          /** @type {string} */
          token.content;
          var index = s.indexOf(placeholder);

          if (index !== -1) {
            ++placeholderCounter;
            var before = s.substring(0, index);
            var middle = tokenizeInterpolationExpression(placeholderMap[placeholder]);
            var after = s.substring(index + placeholder.length);
            var replacement = [];

            if (before) {
              replacement.push(before);
            }

            replacement.push(middle);

            if (after) {
              var afterTokens = [after];
              walkTokens(afterTokens);
              replacement.push.apply(replacement, afterTokens);
            }

            if (typeof token === 'string') {
              tokens.splice.apply(tokens, [i, 1].concat(replacement));
              i += replacement.length - 1;
            } else {
              token.content = replacement;
            }
          }
        } else {
          var content = token.content;

          if (Array.isArray(content)) {
            walkTokens(content);
          } else {
            walkTokens([content]);
          }
        }
      }
    }

    walkTokens(embeddedTokens);
    return new Prism.Token(language, embeddedTokens, 'language-' + language, code);
  }
  /**
   * The languages for which JS templating will handle tagged template literals.
   *
   * JS templating isn't active for only JavaScript but also related languages like TypeScript, JSX, and TSX.
   */


  var supportedLanguages = {
    'javascript': true,
    'js': true,
    'typescript': true,
    'ts': true,
    'jsx': true,
    'tsx': true
  };
  Prism.hooks.add('after-tokenize', function (env) {
    if (!(env.language in supportedLanguages)) {
      return;
    }
    /**
     * Finds and tokenizes all template strings with an embedded languages.
     *
     * @param {(Token | string)[]} tokens
     * @returns {void}
     */


    function findTemplateStrings(tokens) {
      for (var i = 0, l = tokens.length; i < l; i++) {
        var token = tokens[i];

        if (typeof token === 'string') {
          continue;
        }

        var content = token.content;

        if (!Array.isArray(content)) {
          if (typeof content !== 'string') {
            findTemplateStrings([content]);
          }

          continue;
        }

        if (token.type === 'template-string') {
          /**
           * A JavaScript template-string token will look like this:
           *
           * ["template-string", [
           *     ["template-punctuation", "`"],
           *     (
           *         An array of "string" and "interpolation" tokens. This is the simple string case.
           *         or
           *         ["embedded-code", "..."] This is the token containing the embedded code.
           *                                  It also has an alias which is the language of the embedded code.
           *     ),
           *     ["template-punctuation", "`"]
           * ]]
           */
          var embedded = content[1];

          if (content.length === 3 && typeof embedded !== 'string' && embedded.type === 'embedded-code') {
            // get string content
            var code = stringContent(embedded);
            var alias = embedded.alias;
            var language = Array.isArray(alias) ? alias[0] : alias;
            var grammar = Prism.languages[language];

            if (!grammar) {
              // the embedded language isn't registered.
              continue;
            }

            content[1] = tokenizeEmbedded(code, grammar, language);
          }
        } else {
          findTemplateStrings(content);
        }
      }
    }

    findTemplateStrings(env.tokens);
  });
  /**
   * Returns the string content of a token or token stream.
   *
   * @param {string | Token | (string | Token)[]} value
   * @returns {string}
   */

  function stringContent(value) {
    if (typeof value === 'string') {
      return value;
    } else if (Array.isArray(value)) {
      return value.map(stringContent).join('');
    } else {
      return stringContent(value.content);
    }
  }
})(prism);
/* "prismjs/components/prism-typescript" */


(function (Prism) {
  Prism.languages.typescript = Prism.languages.extend('javascript', {
    'class-name': {
      pattern: /(\b(?:class|extends|implements|instanceof|interface|new|type)\s+)(?!keyof\b)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?:\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>)?/,
      lookbehind: true,
      greedy: true,
      inside: null // see below

    },
    'builtin': /\b(?:Array|Function|Promise|any|boolean|console|never|number|string|symbol|unknown)\b/
  }); // The keywords TypeScript adds to JavaScript

  Prism.languages.typescript.keyword.push(/\b(?:abstract|declare|is|keyof|readonly|require)\b/, // keywords that have to be followed by an identifier
  /\b(?:asserts|infer|interface|module|namespace|type)\b(?=\s*(?:[{_$a-zA-Z\xA0-\uFFFF]|$))/, // This is for `import type *, {}`
  /\btype\b(?=\s*(?:[\{*]|$))/); // doesn't work with TS because TS is too complex

  delete Prism.languages.typescript['parameter'];
  delete Prism.languages.typescript['literal-property']; // a version of typescript specifically for highlighting types

  var typeInside = Prism.languages.extend('typescript', {});
  delete typeInside['class-name'];
  Prism.languages.typescript['class-name'].inside = typeInside;
  Prism.languages.insertBefore('typescript', 'function', {
    'decorator': {
      pattern: /@[$\w\xA0-\uFFFF]+/,
      inside: {
        'at': {
          pattern: /^@/,
          alias: 'operator'
        },
        'function': /^[\s\S]+/
      }
    },
    'generic-function': {
      // e.g. foo<T extends "bar" | "baz">( ...
      pattern: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>(?=\s*\()/,
      greedy: true,
      inside: {
        'function': /^#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/,
        'generic': {
          pattern: /<[\s\S]+/,
          // everything after the first <
          alias: 'class-name',
          inside: typeInside
        }
      }
    }
  });
  Prism.languages.ts = Prism.languages.typescript;
})(prism);
/* "prismjs/components/prism-js-extras" */


(function (Prism) {
  Prism.languages.insertBefore('javascript', 'function-variable', {
    'method-variable': {
      pattern: RegExp('(\\.\\s*)' + Prism.languages.javascript['function-variable'].pattern.source),
      lookbehind: true,
      alias: ['function-variable', 'method', 'function', 'property-access']
    }
  });
  Prism.languages.insertBefore('javascript', 'function', {
    'method': {
      pattern: RegExp('(\\.\\s*)' + Prism.languages.javascript['function'].source),
      lookbehind: true,
      alias: ['function', 'property-access']
    }
  });
  Prism.languages.insertBefore('javascript', 'constant', {
    'known-class-name': [{
      // standard built-ins
      // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects
      pattern: /\b(?:(?:Float(?:32|64)|(?:Int|Uint)(?:8|16|32)|Uint8Clamped)?Array|ArrayBuffer|BigInt|Boolean|DataView|Date|Error|Function|Intl|JSON|(?:Weak)?(?:Map|Set)|Math|Number|Object|Promise|Proxy|Reflect|RegExp|String|Symbol|WebAssembly)\b/,
      alias: 'class-name'
    }, {
      // errors
      pattern: /\b(?:[A-Z]\w*)Error\b/,
      alias: 'class-name'
    }]
  });
  /**
   * Replaces the `<ID>` placeholder in the given pattern with a pattern for general JS identifiers.
   *
   * @param {string} source
   * @param {string} [flags]
   * @returns {RegExp}
   */

  function withId(source, flags) {
    return RegExp(source.replace(/<ID>/g, function () {
      return /(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/.source;
    }), flags);
  }

  Prism.languages.insertBefore('javascript', 'keyword', {
    'imports': {
      // https://tc39.es/ecma262/#sec-imports
      pattern: withId(/(\bimport\b\s*)(?:<ID>(?:\s*,\s*(?:\*\s*as\s+<ID>|\{[^{}]*\}))?|\*\s*as\s+<ID>|\{[^{}]*\})(?=\s*\bfrom\b)/.source),
      lookbehind: true,
      inside: Prism.languages.javascript
    },
    'exports': {
      // https://tc39.es/ecma262/#sec-exports
      pattern: withId(/(\bexport\b\s*)(?:\*(?:\s*as\s+<ID>)?(?=\s*\bfrom\b)|\{[^{}]*\})/.source),
      lookbehind: true,
      inside: Prism.languages.javascript
    }
  });
  Prism.languages.javascript['keyword'].unshift({
    pattern: /\b(?:as|default|export|from|import)\b/,
    alias: 'module'
  }, {
    pattern: /\b(?:await|break|catch|continue|do|else|finally|for|if|return|switch|throw|try|while|yield)\b/,
    alias: 'control-flow'
  }, {
    pattern: /\bnull\b/,
    alias: ['null', 'nil']
  }, {
    pattern: /\bundefined\b/,
    alias: 'nil'
  });
  Prism.languages.insertBefore('javascript', 'operator', {
    'spread': {
      pattern: /\.{3}/,
      alias: 'operator'
    },
    'arrow': {
      pattern: /=>/,
      alias: 'operator'
    }
  });
  Prism.languages.insertBefore('javascript', 'punctuation', {
    'property-access': {
      pattern: withId(/(\.\s*)#?<ID>/.source),
      lookbehind: true
    },
    'maybe-class-name': {
      pattern: /(^|[^$\w\xA0-\uFFFF])[A-Z][$\w\xA0-\uFFFF]+/,
      lookbehind: true
    },
    'dom': {
      // this contains only a few commonly used DOM variables
      pattern: /\b(?:document|(?:local|session)Storage|location|navigator|performance|window)\b/,
      alias: 'variable'
    },
    'console': {
      pattern: /\bconsole(?=\s*\.)/,
      alias: 'class-name'
    }
  }); // add 'maybe-class-name' to tokens which might be a class name

  var maybeClassNameTokens = ['function', 'function-variable', 'method', 'method-variable', 'property-access'];

  for (var i = 0; i < maybeClassNameTokens.length; i++) {
    var token = maybeClassNameTokens[i];
    var value = Prism.languages.javascript[token]; // convert regex to object

    if (Prism.util.type(value) === 'RegExp') {
      value = Prism.languages.javascript[token] = {
        pattern: value
      };
    } // keep in mind that we don't support arrays


    var inside = value.inside || {};
    value.inside = inside;
    inside['maybe-class-name'] = /^[A-Z][\s\S]*/;
  }
})(prism);
/* "prismjs/components/prism-jsx" */


(function (Prism) {
  var javascript = Prism.util.clone(Prism.languages.javascript);
  var space = /(?:\s|\/\/.*(?!.)|\/\*(?:[^*]|\*(?!\/))\*\/)/.source;
  var braces = /(?:\{(?:\{(?:\{[^{}]*\}|[^{}])*\}|[^{}])*\})/.source;
  var spread = /(?:\{<S>*\.{3}(?:[^{}]|<BRACES>)*\})/.source;
  /**
   * @param {string} source
   * @param {string} [flags]
   */

  function re(source, flags) {
    source = source.replace(/<S>/g, function () {
      return space;
    }).replace(/<BRACES>/g, function () {
      return braces;
    }).replace(/<SPREAD>/g, function () {
      return spread;
    });
    return RegExp(source, flags);
  }

  spread = re(spread).source;
  Prism.languages.jsx = Prism.languages.extend('markup', javascript);
  Prism.languages.jsx.tag.pattern = re(/<\/?(?:[\w.:-]+(?:<S>+(?:[\w.:$-]+(?:=(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s{'"/>=]+|<BRACES>))?|<SPREAD>))*<S>*\/?)?>/.source);
  Prism.languages.jsx.tag.inside['tag'].pattern = /^<\/?[^\s>\/]*/;
  Prism.languages.jsx.tag.inside['attr-value'].pattern = /=(?!\{)(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s'">]+)/;
  Prism.languages.jsx.tag.inside['tag'].inside['class-name'] = /^[A-Z]\w*(?:\.[A-Z]\w*)*$/;
  Prism.languages.jsx.tag.inside['comment'] = javascript['comment'];
  Prism.languages.insertBefore('inside', 'attr-name', {
    'spread': {
      pattern: re(/<SPREAD>/.source),
      inside: Prism.languages.jsx
    }
  }, Prism.languages.jsx.tag);
  Prism.languages.insertBefore('inside', 'special-attr', {
    'script': {
      // Allow for two levels of nesting
      pattern: re(/=<BRACES>/.source),
      alias: 'language-javascript',
      inside: {
        'script-punctuation': {
          pattern: /^=(?=\{)/,
          alias: 'punctuation'
        },
        rest: Prism.languages.jsx
      }
    }
  }, Prism.languages.jsx.tag); // The following will handle plain text inside tags

  var stringifyToken = function (token) {
    if (!token) {
      return '';
    }

    if (typeof token === 'string') {
      return token;
    }

    if (typeof token.content === 'string') {
      return token.content;
    }

    return token.content.map(stringifyToken).join('');
  };

  var walkTokens = function (tokens) {
    var openedTags = [];

    for (var i = 0; i < tokens.length; i++) {
      var token = tokens[i];
      var notTagNorBrace = false;

      if (typeof token !== 'string') {
        if (token.type === 'tag' && token.content[0] && token.content[0].type === 'tag') {
          // We found a tag, now find its kind
          if (token.content[0].content[0].content === '</') {
            // Closing tag
            if (openedTags.length > 0 && openedTags[openedTags.length - 1].tagName === stringifyToken(token.content[0].content[1])) {
              // Pop matching opening tag
              openedTags.pop();
            }
          } else {
            if (token.content[token.content.length - 1].content === '/>') ; else {
              // Opening tag
              openedTags.push({
                tagName: stringifyToken(token.content[0].content[1]),
                openedBraces: 0
              });
            }
          }
        } else if (openedTags.length > 0 && token.type === 'punctuation' && token.content === '{') {
          // Here we might have entered a JSX context inside a tag
          openedTags[openedTags.length - 1].openedBraces++;
        } else if (openedTags.length > 0 && openedTags[openedTags.length - 1].openedBraces > 0 && token.type === 'punctuation' && token.content === '}') {
          // Here we might have left a JSX context inside a tag
          openedTags[openedTags.length - 1].openedBraces--;
        } else {
          notTagNorBrace = true;
        }
      }

      if (notTagNorBrace || typeof token === 'string') {
        if (openedTags.length > 0 && openedTags[openedTags.length - 1].openedBraces === 0) {
          // Here we are inside a tag, and not inside a JSX context.
          // That's plain text: drop any tokens matched.
          var plainText = stringifyToken(token); // And merge text with adjacent text

          if (i < tokens.length - 1 && (typeof tokens[i + 1] === 'string' || tokens[i + 1].type === 'plain-text')) {
            plainText += stringifyToken(tokens[i + 1]);
            tokens.splice(i + 1, 1);
          }

          if (i > 0 && (typeof tokens[i - 1] === 'string' || tokens[i - 1].type === 'plain-text')) {
            plainText = stringifyToken(tokens[i - 1]) + plainText;
            tokens.splice(i - 1, 1);
            i--;
          }

          tokens[i] = new Prism.Token('plain-text', plainText, null, plainText);
        }
      }

      if (token.content && typeof token.content !== 'string') {
        walkTokens(token.content);
      }
    }
  };

  Prism.hooks.add('after-tokenize', function (env) {
    if (env.language !== 'jsx' && env.language !== 'tsx') {
      return;
    }

    walkTokens(env.tokens);
  });
})(prism);
/* "prismjs/components/prism-diff" */


(function (Prism) {
  Prism.languages.diff = {
    'coord': [// Match all kinds of coord lines (prefixed by "+++", "---" or "***").
    /^(?:\*{3}|-{3}|\+{3}).*$/m, // Match "@@ ... @@" coord lines in unified diff.
    /^@@.*@@$/m, // Match coord lines in normal diff (starts with a number).
    /^\d.*$/m] // deleted, inserted, unchanged, diff

  };
  /**
   * A map from the name of a block to its line prefix.
   *
   * @type {Object<string, string>}
   */

  var PREFIXES = {
    'deleted-sign': '-',
    'deleted-arrow': '<',
    'inserted-sign': '+',
    'inserted-arrow': '>',
    'unchanged': ' ',
    'diff': '!'
  }; // add a token for each prefix

  Object.keys(PREFIXES).forEach(function (name) {
    var prefix = PREFIXES[name];
    var alias = [];

    if (!/^\w+$/.test(name)) {
      // "deleted-sign" -> "deleted"
      alias.push(/\w+/.exec(name)[0]);
    }

    if (name === 'diff') {
      alias.push('bold');
    }

    Prism.languages.diff[name] = {
      pattern: RegExp('^(?:[' + prefix + '].*(?:\r\n?|\n|(?![\\s\\S])))+', 'm'),
      alias: alias,
      inside: {
        'line': {
          pattern: /(.)(?=[\s\S]).*(?:\r\n?|\n)?/,
          lookbehind: true
        },
        'prefix': {
          pattern: /[\s\S]/,
          alias: /\w+/.exec(name)[0]
        }
      }
    };
  }); // make prefixes available to Diff plugin

  Object.defineProperty(Prism.languages.diff, 'PREFIXES', {
    value: PREFIXES
  });
})(prism);
/* "prismjs/components/prism-git" */


prism.languages.git = {
  /*
   * A simple one line comment like in a git status command
   * For instance:
   * $ git status
   * # On branch infinite-scroll
   * # Your branch and 'origin/sharedBranches/frontendTeam/infinite-scroll' have diverged,
   * # and have 1 and 2 different commits each, respectively.
   * nothing to commit (working directory clean)
   */
  'comment': /^#.*/m,

  /*
   * Regexp to match the changed lines in a git diff output. Check the example below.
   */
  'deleted': /^[-–].*/m,
  'inserted': /^\+.*/m,

  /*
   * a string (double and simple quote)
   */
  'string': /("|')(?:\\.|(?!\1)[^\\\r\n])*\1/,

  /*
   * a git command. It starts with a random prompt finishing by a $, then "git" then some other parameters
   * For instance:
   * $ git add file.txt
   */
  'command': {
    pattern: /^.*\$ git .*$/m,
    inside: {
      /*
       * A git command can contain a parameter starting by a single or a double dash followed by a string
       * For instance:
       * $ git diff --cached
       * $ git log -p
       */
      'parameter': /\s--?\w+/
    }
  },

  /*
   * Coordinates displayed in a git diff command
   * For instance:
   * $ git diff
   * diff --git file.txt file.txt
   * index 6214953..1d54a52 100644
   * --- file.txt
   * +++ file.txt
   * @@ -1 +1,2 @@
   * -Here's my tetx file
   * +Here's my text file
   * +And this is the second line
   */
  'coord': /^@@.*@@$/m,

  /*
   * Match a "commit [SHA1]" line in a git log output.
   * For instance:
   * $ git log
   * commit a11a14ef7e26f2ca62d4b35eac455ce636d0dc09
   * Author: lgiraudel
   * Date:   Mon Feb 17 11:18:34 2014 +0100
   *
   *     Add of a new line
   */
  'commit-sha1': /^commit \w{40}$/m
};
/* "prismjs/components/prism-go" */

prism.languages.go = prism.languages.extend('clike', {
  'string': {
    pattern: /(^|[^\\])"(?:\\.|[^"\\\r\n])*"|`[^`]*`/,
    lookbehind: true,
    greedy: true
  },
  'keyword': /\b(?:break|case|chan|const|continue|default|defer|else|fallthrough|for|func|go(?:to)?|if|import|interface|map|package|range|return|select|struct|switch|type|var)\b/,
  'boolean': /\b(?:_|false|iota|nil|true)\b/,
  'number': [// binary and octal integers
  /\b0(?:b[01_]+|o[0-7_]+)i?\b/i, // hexadecimal integers and floats
  /\b0x(?:[a-f\d_]+(?:\.[a-f\d_]*)?|\.[a-f\d_]+)(?:p[+-]?\d+(?:_\d+)*)?i?(?!\w)/i, // decimal integers and floats
  /(?:\b\d[\d_]*(?:\.[\d_]*)?|\B\.\d[\d_]*)(?:e[+-]?[\d_]+)?i?(?!\w)/i],
  'operator': /[*\/%^!=]=?|\+[=+]?|-[=-]?|\|[=|]?|&(?:=|&|\^=?)?|>(?:>=?|=)?|<(?:<=?|=|-)?|:=|\.\.\./,
  'builtin': /\b(?:append|bool|byte|cap|close|complex|complex(?:64|128)|copy|delete|error|float(?:32|64)|u?int(?:8|16|32|64)?|imag|len|make|new|panic|print(?:ln)?|real|recover|rune|string|uintptr)\b/
});
prism.languages.insertBefore('go', 'string', {
  'char': {
    pattern: /'(?:\\.|[^'\\\r\n]){0,10}'/,
    greedy: true
  }
});
delete prism.languages.go['class-name'];
/* "prismjs/components/prism-markup-templating" */

(function (Prism) {
  /**
   * Returns the placeholder for the given language id and index.
   *
   * @param {string} language
   * @param {string|number} index
   * @returns {string}
   */
  function getPlaceholder(language, index) {
    return '___' + language.toUpperCase() + index + '___';
  }

  Object.defineProperties(Prism.languages['markup-templating'] = {}, {
    buildPlaceholders: {
      /**
       * Tokenize all inline templating expressions matching `placeholderPattern`.
       *
       * If `replaceFilter` is provided, only matches of `placeholderPattern` for which `replaceFilter` returns
       * `true` will be replaced.
       *
       * @param {object} env The environment of the `before-tokenize` hook.
       * @param {string} language The language id.
       * @param {RegExp} placeholderPattern The matches of this pattern will be replaced by placeholders.
       * @param {(match: string) => boolean} [replaceFilter]
       */
      value: function (env, language, placeholderPattern, replaceFilter) {
        if (env.language !== language) {
          return;
        }

        var tokenStack = env.tokenStack = [];
        env.code = env.code.replace(placeholderPattern, function (match) {
          if (typeof replaceFilter === 'function' && !replaceFilter(match)) {
            return match;
          }

          var i = tokenStack.length;
          var placeholder; // Check for existing strings

          while (env.code.indexOf(placeholder = getPlaceholder(language, i)) !== -1) {
            ++i;
          } // Create a sparse array


          tokenStack[i] = match;
          return placeholder;
        }); // Switch the grammar to markup

        env.grammar = Prism.languages.markup;
      }
    },
    tokenizePlaceholders: {
      /**
       * Replace placeholders with proper tokens after tokenizing.
       *
       * @param {object} env The environment of the `after-tokenize` hook.
       * @param {string} language The language id.
       */
      value: function (env, language) {
        if (env.language !== language || !env.tokenStack) {
          return;
        } // Switch the grammar back


        env.grammar = Prism.languages[language];
        var j = 0;
        var keys = Object.keys(env.tokenStack);

        function walkTokens(tokens) {
          for (var i = 0; i < tokens.length; i++) {
            // all placeholders are replaced already
            if (j >= keys.length) {
              break;
            }

            var token = tokens[i];

            if (typeof token === 'string' || token.content && typeof token.content === 'string') {
              var k = keys[j];
              var t = env.tokenStack[k];
              var s = typeof token === 'string' ? token : token.content;
              var placeholder = getPlaceholder(language, k);
              var index = s.indexOf(placeholder);

              if (index > -1) {
                ++j;
                var before = s.substring(0, index);
                var middle = new Prism.Token(language, Prism.tokenize(t, env.grammar), 'language-' + language, t);
                var after = s.substring(index + placeholder.length);
                var replacement = [];

                if (before) {
                  replacement.push.apply(replacement, walkTokens([before]));
                }

                replacement.push(middle);

                if (after) {
                  replacement.push.apply(replacement, walkTokens([after]));
                }

                if (typeof token === 'string') {
                  tokens.splice.apply(tokens, [i, 1].concat(replacement));
                } else {
                  token.content = replacement;
                }
              }
            } else if (token.content
            /* && typeof token.content !== 'string' */
            ) {
                walkTokens(token.content);
              }
          }

          return tokens;
        }

        walkTokens(env.tokens);
      }
    }
  });
})(prism);
/* "prismjs/components/prism-handlebars" */


(function (Prism) {
  Prism.languages.handlebars = {
    'comment': /\{\{![\s\S]*?\}\}/,
    'delimiter': {
      pattern: /^\{\{\{?|\}\}\}?$/,
      alias: 'punctuation'
    },
    'string': /(["'])(?:\\.|(?!\1)[^\\\r\n])*\1/,
    'number': /\b0x[\dA-Fa-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee][+-]?\d+)?/,
    'boolean': /\b(?:false|true)\b/,
    'block': {
      pattern: /^(\s*(?:~\s*)?)[#\/]\S+?(?=\s*(?:~\s*)?$|\s)/,
      lookbehind: true,
      alias: 'keyword'
    },
    'brackets': {
      pattern: /\[[^\]]+\]/,
      inside: {
        punctuation: /\[|\]/,
        variable: /[\s\S]+/
      }
    },
    'punctuation': /[!"#%&':()*+,.\/;<=>@\[\\\]^`{|}~]/,
    'variable': /[^!"#%&'()*+,\/;<=>@\[\\\]^`{|}~\s]+/
  };
  Prism.hooks.add('before-tokenize', function (env) {
    var handlebarsPattern = /\{\{\{[\s\S]+?\}\}\}|\{\{[\s\S]+?\}\}/g;
    Prism.languages['markup-templating'].buildPlaceholders(env, 'handlebars', handlebarsPattern);
  });
  Prism.hooks.add('after-tokenize', function (env) {
    Prism.languages['markup-templating'].tokenizePlaceholders(env, 'handlebars');
  });
  Prism.languages.hbs = Prism.languages.handlebars;
})(prism);
/* "prismjs/components/prism-json" */
// https://www.json.org/json-en.html


prism.languages.json = {
  'property': {
    pattern: /(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?=\s*:)/,
    lookbehind: true,
    greedy: true
  },
  'string': {
    pattern: /(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?!\s*:)/,
    lookbehind: true,
    greedy: true
  },
  'comment': {
    pattern: /\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/,
    greedy: true
  },
  'number': /-?\b\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,
  'punctuation': /[{}[\],]/,
  'operator': /:/,
  'boolean': /\b(?:false|true)\b/,
  'null': {
    pattern: /\bnull\b/,
    alias: 'keyword'
  }
};
prism.languages.webmanifest = prism.languages.json;
/* "prismjs/components/prism-less" */

/* FIXME :
 :extend() is not handled specifically : its highlighting is buggy.
 Mixin usage must be inside a ruleset to be highlighted.
 At-rules (e.g. import) containing interpolations are buggy.
 Detached rulesets are highlighted as at-rules.
 A comment before a mixin usage prevents the latter to be properly highlighted.
 */

prism.languages.less = prism.languages.extend('css', {
  'comment': [/\/\*[\s\S]*?\*\//, {
    pattern: /(^|[^\\])\/\/.*/,
    lookbehind: true
  }],
  'atrule': {
    pattern: /@[\w-](?:\((?:[^(){}]|\([^(){}]*\))*\)|[^(){};\s]|\s+(?!\s))*?(?=\s*\{)/,
    inside: {
      'punctuation': /[:()]/
    }
  },
  // selectors and mixins are considered the same
  'selector': {
    pattern: /(?:@\{[\w-]+\}|[^{};\s@])(?:@\{[\w-]+\}|\((?:[^(){}]|\([^(){}]*\))*\)|[^(){};@\s]|\s+(?!\s))*?(?=\s*\{)/,
    inside: {
      // mixin parameters
      'variable': /@+[\w-]+/
    }
  },
  'property': /(?:@\{[\w-]+\}|[\w-])+(?:\+_?)?(?=\s*:)/,
  'operator': /[+\-*\/]/
});
prism.languages.insertBefore('less', 'property', {
  'variable': [// Variable declaration (the colon must be consumed!)
  {
    pattern: /@[\w-]+\s*:/,
    inside: {
      'punctuation': /:/
    }
  }, // Variable usage
  /@@?[\w-]+/],
  'mixin-usage': {
    pattern: /([{;]\s*)[.#](?!\d)[\w-].*?(?=[(;])/,
    lookbehind: true,
    alias: 'function'
  }
});
/* "prismjs/components/prism-makefile" */

prism.languages.makefile = {
  'comment': {
    pattern: /(^|[^\\])#(?:\\(?:\r\n|[\s\S])|[^\\\r\n])*/,
    lookbehind: true
  },
  'string': {
    pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
    greedy: true
  },
  'builtin-target': {
    pattern: /\.[A-Z][^:#=\s]+(?=\s*:(?!=))/,
    alias: 'builtin'
  },
  'target': {
    pattern: /^(?:[^:=\s]|[ \t]+(?![\s:]))+(?=\s*:(?!=))/m,
    alias: 'symbol',
    inside: {
      'variable': /\$+(?:(?!\$)[^(){}:#=\s]+|(?=[({]))/
    }
  },
  'variable': /\$+(?:(?!\$)[^(){}:#=\s]+|\([@*%<^+?][DF]\)|(?=[({]))/,
  // Directives
  'keyword': /-include\b|\b(?:define|else|endef|endif|export|ifn?def|ifn?eq|include|override|private|sinclude|undefine|unexport|vpath)\b/,
  'function': {
    pattern: /(\()(?:abspath|addsuffix|and|basename|call|dir|error|eval|file|filter(?:-out)?|findstring|firstword|flavor|foreach|guile|if|info|join|lastword|load|notdir|or|origin|patsubst|realpath|shell|sort|strip|subst|suffix|value|warning|wildcard|word(?:list|s)?)(?=[ \t])/,
    lookbehind: true
  },
  'operator': /(?:::|[?:+!])?=|[|@]/,
  'punctuation': /[:;(){}]/
};
/* "prismjs/components/prism-objectivec" */

prism.languages.objectivec = prism.languages.extend('c', {
  'string': {
    pattern: /@?"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"/,
    greedy: true
  },
  'keyword': /\b(?:asm|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|in|inline|int|long|register|return|self|short|signed|sizeof|static|struct|super|switch|typedef|typeof|union|unsigned|void|volatile|while)\b|(?:@interface|@end|@implementation|@protocol|@class|@public|@protected|@private|@property|@try|@catch|@finally|@throw|@synthesize|@dynamic|@selector)\b/,
  'operator': /-[->]?|\+\+?|!=?|<<?=?|>>?=?|==?|&&?|\|\|?|[~^%?*\/@]/
});
delete prism.languages.objectivec['class-name'];
prism.languages.objc = prism.languages.objectivec;
/* "prismjs/components/prism-ocaml" */
// https://ocaml.org/manual/lex.html

prism.languages.ocaml = {
  'comment': {
    pattern: /\(\*[\s\S]*?\*\)/,
    greedy: true
  },
  'char': {
    pattern: /'(?:[^\\\r\n']|\\(?:.|[ox]?[0-9a-f]{1,3}))'/i,
    greedy: true
  },
  'string': [{
    pattern: /"(?:\\(?:[\s\S]|\r\n)|[^\\\r\n"])*"/,
    greedy: true
  }, {
    pattern: /\{([a-z_]*)\|[\s\S]*?\|\1\}/,
    greedy: true
  }],
  'number': [// binary and octal
  /\b(?:0b[01][01_]*|0o[0-7][0-7_]*)\b/i, // hexadecimal
  /\b0x[a-f0-9][a-f0-9_]*(?:\.[a-f0-9_]*)?(?:p[+-]?\d[\d_]*)?(?!\w)/i, // decimal
  /\b\d[\d_]*(?:\.[\d_]*)?(?:e[+-]?\d[\d_]*)?(?!\w)/i],
  'directive': {
    pattern: /\B#\w+/,
    alias: 'property'
  },
  'label': {
    pattern: /\B~\w+/,
    alias: 'property'
  },
  'type-variable': {
    pattern: /\B'\w+/,
    alias: 'function'
  },
  'variant': {
    pattern: /`\w+/,
    alias: 'symbol'
  },
  // For the list of keywords and operators,
  // see: http://caml.inria.fr/pub/docs/manual-ocaml/lex.html#sec84
  'keyword': /\b(?:as|assert|begin|class|constraint|do|done|downto|else|end|exception|external|for|fun|function|functor|if|in|include|inherit|initializer|lazy|let|match|method|module|mutable|new|nonrec|object|of|open|private|rec|sig|struct|then|to|try|type|val|value|virtual|when|where|while|with)\b/,
  'boolean': /\b(?:false|true)\b/,
  'operator-like-punctuation': {
    pattern: /\[[<>|]|[>|]\]|\{<|>\}/,
    alias: 'punctuation'
  },
  // Custom operators are allowed
  'operator': /\.[.~]|:[=>]|[=<>@^|&+\-*\/$%!?~][!$%&*+\-.\/:<=>?@^|~]*|\b(?:and|asr|land|lor|lsl|lsr|lxor|mod|or)\b/,
  'punctuation': /;;|::|[(){}\[\].,:;#]|\b_\b/
};
/* "prismjs/components/prism-python" */

prism.languages.python = {
  'comment': {
    pattern: /(^|[^\\])#.*/,
    lookbehind: true,
    greedy: true
  },
  'string-interpolation': {
    pattern: /(?:f|fr|rf)(?:("""|''')[\s\S]*?\1|("|')(?:\\.|(?!\2)[^\\\r\n])*\2)/i,
    greedy: true,
    inside: {
      'interpolation': {
        // "{" <expression> <optional "!s", "!r", or "!a"> <optional ":" format specifier> "}"
        pattern: /((?:^|[^{])(?:\{\{)*)\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}])+\})+\})+\}/,
        lookbehind: true,
        inside: {
          'format-spec': {
            pattern: /(:)[^:(){}]+(?=\}$)/,
            lookbehind: true
          },
          'conversion-option': {
            pattern: /![sra](?=[:}]$)/,
            alias: 'punctuation'
          },
          rest: null
        }
      },
      'string': /[\s\S]+/
    }
  },
  'triple-quoted-string': {
    pattern: /(?:[rub]|br|rb)?("""|''')[\s\S]*?\1/i,
    greedy: true,
    alias: 'string'
  },
  'string': {
    pattern: /(?:[rub]|br|rb)?("|')(?:\\.|(?!\1)[^\\\r\n])*\1/i,
    greedy: true
  },
  'function': {
    pattern: /((?:^|\s)def[ \t]+)[a-zA-Z_]\w*(?=\s*\()/g,
    lookbehind: true
  },
  'class-name': {
    pattern: /(\bclass\s+)\w+/i,
    lookbehind: true
  },
  'decorator': {
    pattern: /(^[\t ]*)@\w+(?:\.\w+)*/m,
    lookbehind: true,
    alias: ['annotation', 'punctuation'],
    inside: {
      'punctuation': /\./
    }
  },
  'keyword': /\b(?:_(?=\s*:)|and|as|assert|async|await|break|case|class|continue|def|del|elif|else|except|exec|finally|for|from|global|if|import|in|is|lambda|match|nonlocal|not|or|pass|print|raise|return|try|while|with|yield)\b/,
  'builtin': /\b(?:__import__|abs|all|any|apply|ascii|basestring|bin|bool|buffer|bytearray|bytes|callable|chr|classmethod|cmp|coerce|compile|complex|delattr|dict|dir|divmod|enumerate|eval|execfile|file|filter|float|format|frozenset|getattr|globals|hasattr|hash|help|hex|id|input|int|intern|isinstance|issubclass|iter|len|list|locals|long|map|max|memoryview|min|next|object|oct|open|ord|pow|property|range|raw_input|reduce|reload|repr|reversed|round|set|setattr|slice|sorted|staticmethod|str|sum|super|tuple|type|unichr|unicode|vars|xrange|zip)\b/,
  'boolean': /\b(?:False|None|True)\b/,
  'number': /\b0(?:b(?:_?[01])+|o(?:_?[0-7])+|x(?:_?[a-f0-9])+)\b|(?:\b\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\B\.\d+(?:_\d+)*)(?:e[+-]?\d+(?:_\d+)*)?j?(?!\w)/i,
  'operator': /[-+%=]=?|!=|:=|\*\*?=?|\/\/?=?|<[<=>]?|>[=>]?|[&|^~]/,
  'punctuation': /[{}[\];(),.:]/
};
prism.languages.python['string-interpolation'].inside['interpolation'].inside.rest = prism.languages.python;
prism.languages.py = prism.languages.python;
/* "prismjs/components/prism-reason" */

prism.languages.reason = prism.languages.extend('clike', {
  'string': {
    pattern: /"(?:\\(?:\r\n|[\s\S])|[^\\\r\n"])*"/,
    greedy: true
  },
  // 'class-name' must be matched *after* 'constructor' defined below
  'class-name': /\b[A-Z]\w*/,
  'keyword': /\b(?:and|as|assert|begin|class|constraint|do|done|downto|else|end|exception|external|for|fun|function|functor|if|in|include|inherit|initializer|lazy|let|method|module|mutable|new|nonrec|object|of|open|or|private|rec|sig|struct|switch|then|to|try|type|val|virtual|when|while|with)\b/,
  'operator': /\.{3}|:[:=]|\|>|->|=(?:==?|>)?|<=?|>=?|[|^?'#!~`]|[+\-*\/]\.?|\b(?:asr|land|lor|lsl|lsr|lxor|mod)\b/
});
prism.languages.insertBefore('reason', 'class-name', {
  'char': {
    pattern: /'(?:\\x[\da-f]{2}|\\o[0-3][0-7][0-7]|\\\d{3}|\\.|[^'\\\r\n])'/,
    greedy: true
  },
  // Negative look-ahead prevents from matching things like String.capitalize
  'constructor': /\b[A-Z]\w*\b(?!\s*\.)/,
  'label': {
    pattern: /\b[a-z]\w*(?=::)/,
    alias: 'symbol'
  }
}); // We can't match functions property, so let's not even try.

delete prism.languages.reason.function;
/* "prismjs/components/prism-sass" */

(function (Prism) {
  Prism.languages.sass = Prism.languages.extend('css', {
    // Sass comments don't need to be closed, only indented
    'comment': {
      pattern: /^([ \t]*)\/[\/*].*(?:(?:\r?\n|\r)\1[ \t].+)*/m,
      lookbehind: true,
      greedy: true
    }
  });
  Prism.languages.insertBefore('sass', 'atrule', {
    // We want to consume the whole line
    'atrule-line': {
      // Includes support for = and + shortcuts
      pattern: /^(?:[ \t]*)[@+=].+/m,
      greedy: true,
      inside: {
        'atrule': /(?:@[\w-]+|[+=])/
      }
    }
  });
  delete Prism.languages.sass.atrule;
  var variable = /\$[-\w]+|#\{\$[-\w]+\}/;
  var operator = [/[+*\/%]|[=!]=|<=?|>=?|\b(?:and|not|or)\b/, {
    pattern: /(\s)-(?=\s)/,
    lookbehind: true
  }];
  Prism.languages.insertBefore('sass', 'property', {
    // We want to consume the whole line
    'variable-line': {
      pattern: /^[ \t]*\$.+/m,
      greedy: true,
      inside: {
        'punctuation': /:/,
        'variable': variable,
        'operator': operator
      }
    },
    // We want to consume the whole line
    'property-line': {
      pattern: /^[ \t]*(?:[^:\s]+ *:.*|:[^:\s].*)/m,
      greedy: true,
      inside: {
        'property': [/[^:\s]+(?=\s*:)/, {
          pattern: /(:)[^:\s]+/,
          lookbehind: true
        }],
        'punctuation': /:/,
        'variable': variable,
        'operator': operator,
        'important': Prism.languages.sass.important
      }
    }
  });
  delete Prism.languages.sass.property;
  delete Prism.languages.sass.important; // Now that whole lines for other patterns are consumed,
  // what's left should be selectors

  Prism.languages.insertBefore('sass', 'punctuation', {
    'selector': {
      pattern: /^([ \t]*)\S(?:,[^,\r\n]+|[^,\r\n]*)(?:,[^,\r\n]+)*(?:,(?:\r?\n|\r)\1[ \t]+\S(?:,[^,\r\n]+|[^,\r\n]*)(?:,[^,\r\n]+)*)*/m,
      lookbehind: true,
      greedy: true
    }
  });
})(prism);
/* "prismjs/components/prism-scss" */


prism.languages.scss = prism.languages.extend('css', {
  'comment': {
    pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/,
    lookbehind: true
  },
  'atrule': {
    pattern: /@[\w-](?:\([^()]+\)|[^()\s]|\s+(?!\s))*?(?=\s+[{;])/,
    inside: {
      'rule': /@[\w-]+/ // See rest below

    }
  },
  // url, compassified
  'url': /(?:[-a-z]+-)?url(?=\()/i,
  // CSS selector regex is not appropriate for Sass
  // since there can be lot more things (var, @ directive, nesting..)
  // a selector must start at the end of a property or after a brace (end of other rules or nesting)
  // it can contain some characters that aren't used for defining rules or end of selector, & (parent selector), or interpolated variable
  // the end of a selector is found when there is no rules in it ( {} or {\s}) or if there is a property (because an interpolated var
  // can "pass" as a selector- e.g: proper#{$erty})
  // this one was hard to do, so please be careful if you edit this one :)
  'selector': {
    // Initial look-ahead is used to prevent matching of blank selectors
    pattern: /(?=\S)[^@;{}()]?(?:[^@;{}()\s]|\s+(?!\s)|#\{\$[-\w]+\})+(?=\s*\{(?:\}|\s|[^}][^:{}]*[:{][^}]))/,
    inside: {
      'parent': {
        pattern: /&/,
        alias: 'important'
      },
      'placeholder': /%[-\w]+/,
      'variable': /\$[-\w]+|#\{\$[-\w]+\}/
    }
  },
  'property': {
    pattern: /(?:[-\w]|\$[-\w]|#\{\$[-\w]+\})+(?=\s*:)/,
    inside: {
      'variable': /\$[-\w]+|#\{\$[-\w]+\}/
    }
  }
});
prism.languages.insertBefore('scss', 'atrule', {
  'keyword': [/@(?:content|debug|each|else(?: if)?|extend|for|forward|function|if|import|include|mixin|return|use|warn|while)\b/i, {
    pattern: /( )(?:from|through)(?= )/,
    lookbehind: true
  }]
});
prism.languages.insertBefore('scss', 'important', {
  // var and interpolated vars
  'variable': /\$[-\w]+|#\{\$[-\w]+\}/
});
prism.languages.insertBefore('scss', 'function', {
  'module-modifier': {
    pattern: /\b(?:as|hide|show|with)\b/i,
    alias: 'keyword'
  },
  'placeholder': {
    pattern: /%[-\w]+/,
    alias: 'selector'
  },
  'statement': {
    pattern: /\B!(?:default|optional)\b/i,
    alias: 'keyword'
  },
  'boolean': /\b(?:false|true)\b/,
  'null': {
    pattern: /\bnull\b/,
    alias: 'keyword'
  },
  'operator': {
    pattern: /(\s)(?:[-+*\/%]|[=!]=|<=?|>=?|and|not|or)(?=\s)/,
    lookbehind: true
  }
});
prism.languages.scss['atrule'].inside.rest = prism.languages.scss;
/* "prismjs/components/prism-stylus" */

(function (Prism) {
  var unit = {
    pattern: /(\b\d+)(?:%|[a-z]+)/,
    lookbehind: true
  }; // 123 -123 .123 -.123 12.3 -12.3

  var number = {
    pattern: /(^|[^\w.-])-?(?:\d+(?:\.\d+)?|\.\d+)/,
    lookbehind: true
  };
  var inside = {
    'comment': {
      pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/,
      lookbehind: true
    },
    'url': {
      pattern: /\burl\((["']?).*?\1\)/i,
      greedy: true
    },
    'string': {
      pattern: /("|')(?:(?!\1)[^\\\r\n]|\\(?:\r\n|[\s\S]))*\1/,
      greedy: true
    },
    'interpolation': null,
    // See below
    'func': null,
    // See below
    'important': /\B!(?:important|optional)\b/i,
    'keyword': {
      pattern: /(^|\s+)(?:(?:else|for|if|return|unless)(?=\s|$)|@[\w-]+)/,
      lookbehind: true
    },
    'hexcode': /#[\da-f]{3,6}/i,
    'color': [/\b(?:AliceBlue|AntiqueWhite|Aqua|Aquamarine|Azure|Beige|Bisque|Black|BlanchedAlmond|Blue|BlueViolet|Brown|BurlyWood|CadetBlue|Chartreuse|Chocolate|Coral|CornflowerBlue|Cornsilk|Crimson|Cyan|DarkBlue|DarkCyan|DarkGoldenRod|DarkGr[ae]y|DarkGreen|DarkKhaki|DarkMagenta|DarkOliveGreen|DarkOrange|DarkOrchid|DarkRed|DarkSalmon|DarkSeaGreen|DarkSlateBlue|DarkSlateGr[ae]y|DarkTurquoise|DarkViolet|DeepPink|DeepSkyBlue|DimGr[ae]y|DodgerBlue|FireBrick|FloralWhite|ForestGreen|Fuchsia|Gainsboro|GhostWhite|Gold|GoldenRod|Gr[ae]y|Green|GreenYellow|HoneyDew|HotPink|IndianRed|Indigo|Ivory|Khaki|Lavender|LavenderBlush|LawnGreen|LemonChiffon|LightBlue|LightCoral|LightCyan|LightGoldenRodYellow|LightGr[ae]y|LightGreen|LightPink|LightSalmon|LightSeaGreen|LightSkyBlue|LightSlateGr[ae]y|LightSteelBlue|LightYellow|Lime|LimeGreen|Linen|Magenta|Maroon|MediumAquaMarine|MediumBlue|MediumOrchid|MediumPurple|MediumSeaGreen|MediumSlateBlue|MediumSpringGreen|MediumTurquoise|MediumVioletRed|MidnightBlue|MintCream|MistyRose|Moccasin|NavajoWhite|Navy|OldLace|Olive|OliveDrab|Orange|OrangeRed|Orchid|PaleGoldenRod|PaleGreen|PaleTurquoise|PaleVioletRed|PapayaWhip|PeachPuff|Peru|Pink|Plum|PowderBlue|Purple|Red|RosyBrown|RoyalBlue|SaddleBrown|Salmon|SandyBrown|SeaGreen|SeaShell|Sienna|Silver|SkyBlue|SlateBlue|SlateGr[ae]y|Snow|SpringGreen|SteelBlue|Tan|Teal|Thistle|Tomato|Transparent|Turquoise|Violet|Wheat|White|WhiteSmoke|Yellow|YellowGreen)\b/i, {
      pattern: /\b(?:hsl|rgb)\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*\)\B|\b(?:hsl|rgb)a\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*,\s*(?:0|0?\.\d+|1)\s*\)\B/i,
      inside: {
        'unit': unit,
        'number': number,
        'function': /[\w-]+(?=\()/,
        'punctuation': /[(),]/
      }
    }],
    'entity': /\\[\da-f]{1,8}/i,
    'unit': unit,
    'boolean': /\b(?:false|true)\b/,
    'operator': [// We want non-word chars around "-" because it is
    // accepted in property names.
    /~|[+!\/%<>?=]=?|[-:]=|\*[*=]?|\.{2,3}|&&|\|\||\B-\B|\b(?:and|in|is(?: a| defined| not|nt)?|not|or)\b/],
    'number': number,
    'punctuation': /[{}()\[\];:,]/
  };
  inside['interpolation'] = {
    pattern: /\{[^\r\n}:]+\}/,
    alias: 'variable',
    inside: {
      'delimiter': {
        pattern: /^\{|\}$/,
        alias: 'punctuation'
      },
      rest: inside
    }
  };
  inside['func'] = {
    pattern: /[\w-]+\([^)]*\).*/,
    inside: {
      'function': /^[^(]+/,
      rest: inside
    }
  };
  Prism.languages.stylus = {
    'atrule-declaration': {
      pattern: /(^[ \t]*)@.+/m,
      lookbehind: true,
      inside: {
        'atrule': /^@[\w-]+/,
        rest: inside
      }
    },
    'variable-declaration': {
      pattern: /(^[ \t]*)[\w$-]+\s*.?=[ \t]*(?:\{[^{}]*\}|\S.*|$)/m,
      lookbehind: true,
      inside: {
        'variable': /^\S+/,
        rest: inside
      }
    },
    'statement': {
      pattern: /(^[ \t]*)(?:else|for|if|return|unless)[ \t].+/m,
      lookbehind: true,
      inside: {
        'keyword': /^\S+/,
        rest: inside
      }
    },
    // A property/value pair cannot end with a comma or a brace
    // It cannot have indented content unless it ended with a semicolon
    'property-declaration': {
      pattern: /((?:^|\{)([ \t]*))(?:[\w-]|\{[^}\r\n]+\})+(?:\s*:\s*|[ \t]+)(?!\s)[^{\r\n]*(?:;|[^{\r\n,]$(?!(?:\r?\n|\r)(?:\{|\2[ \t])))/m,
      lookbehind: true,
      inside: {
        'property': {
          pattern: /^[^\s:]+/,
          inside: {
            'interpolation': inside.interpolation
          }
        },
        rest: inside
      }
    },
    // A selector can contain parentheses only as part of a pseudo-element
    // It can span multiple lines.
    // It must end with a comma or an accolade or have indented content.
    'selector': {
      pattern: /(^[ \t]*)(?:(?=\S)(?:[^{}\r\n:()]|::?[\w-]+(?:\([^)\r\n]*\)|(?![\w-]))|\{[^}\r\n]+\})+)(?:(?:\r?\n|\r)(?:\1(?:(?=\S)(?:[^{}\r\n:()]|::?[\w-]+(?:\([^)\r\n]*\)|(?![\w-]))|\{[^}\r\n]+\})+)))*(?:,$|\{|(?=(?:\r?\n|\r)(?:\{|\1[ \t])))/m,
      lookbehind: true,
      inside: {
        'interpolation': inside.interpolation,
        'comment': inside.comment,
        'punctuation': /[{},]/
      }
    },
    'func': inside.func,
    'string': inside.string,
    'comment': {
      pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/,
      lookbehind: true,
      greedy: true
    },
    'interpolation': inside.interpolation,
    'punctuation': /[{}()\[\];:.]/
  };
})(prism);
/* "prismjs/components/prism-tsx" */


(function (Prism) {
  var typescript = Prism.util.clone(Prism.languages.typescript);
  Prism.languages.tsx = Prism.languages.extend('jsx', typescript); // doesn't work with TS because TS is too complex

  delete Prism.languages.tsx['parameter'];
  delete Prism.languages.tsx['literal-property']; // This will prevent collisions between TSX tags and TS generic types.
  // Idea by https://github.com/karlhorky
  // Discussion: https://github.com/PrismJS/prism/issues/2594#issuecomment-710666928

  var tag = Prism.languages.tsx.tag;
  tag.pattern = RegExp(/(^|[^\w$]|(?=<\/))/.source + '(?:' + tag.pattern.source + ')', tag.pattern.flags);
  tag.lookbehind = true;
})(prism);
/* "prismjs/components/prism-wasm" */


prism.languages.wasm = {
  'comment': [/\(;[\s\S]*?;\)/, {
    pattern: /;;.*/,
    greedy: true
  }],
  'string': {
    pattern: /"(?:\\[\s\S]|[^"\\])*"/,
    greedy: true
  },
  'keyword': [{
    pattern: /\b(?:align|offset)=/,
    inside: {
      'operator': /=/
    }
  }, {
    pattern: /\b(?:(?:f32|f64|i32|i64)(?:\.(?:abs|add|and|ceil|clz|const|convert_[su]\/i(?:32|64)|copysign|ctz|demote\/f64|div(?:_[su])?|eqz?|extend_[su]\/i32|floor|ge(?:_[su])?|gt(?:_[su])?|le(?:_[su])?|load(?:(?:8|16|32)_[su])?|lt(?:_[su])?|max|min|mul|neg?|nearest|or|popcnt|promote\/f32|reinterpret\/[fi](?:32|64)|rem_[su]|rot[lr]|shl|shr_[su]|sqrt|store(?:8|16|32)?|sub|trunc(?:_[su]\/f(?:32|64))?|wrap\/i64|xor))?|memory\.(?:grow|size))\b/,
    inside: {
      'punctuation': /\./
    }
  }, /\b(?:anyfunc|block|br(?:_if|_table)?|call(?:_indirect)?|data|drop|elem|else|end|export|func|get_(?:global|local)|global|if|import|local|loop|memory|module|mut|nop|offset|param|result|return|select|set_(?:global|local)|start|table|tee_local|then|type|unreachable)\b/],
  'variable': /\$[\w!#$%&'*+\-./:<=>?@\\^`|~]+/,
  'number': /[+-]?\b(?:\d(?:_?\d)*(?:\.\d(?:_?\d)*)?(?:[eE][+-]?\d(?:_?\d)*)?|0x[\da-fA-F](?:_?[\da-fA-F])*(?:\.[\da-fA-F](?:_?[\da-fA-D])*)?(?:[pP][+-]?\d(?:_?\d)*)?)\b|\binf\b|\bnan(?::0x[\da-fA-F](?:_?[\da-fA-D])*)?\b/,
  'punctuation': /[()]/
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (prism);


/***/ }),

/***/ "./node_modules/prism-react-renderer/themes/duotoneDark/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/prism-react-renderer/themes/duotoneDark/index.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Duotone Dark
// Author: Simurai, adapted from DuoTone themes for Atom (http://simurai.com/projects/2016/01/01/duotone-themes)
// Conversion: Bram de Haan (http://atelierbram.github.io/Base2Tone-prism/output/prism/prism-base2tone-evening-dark.css)
// Generated with Base16 Builder (https://github.com/base16-builder/base16-builder)
var theme = {
  plain: {
    backgroundColor: "#2a2734",
    color: "#9a86fd"
  },
  styles: [{
    types: ["comment", "prolog", "doctype", "cdata", "punctuation"],
    style: {
      color: "#6c6783"
    }
  }, {
    types: ["namespace"],
    style: {
      opacity: 0.7
    }
  }, {
    types: ["tag", "operator", "number"],
    style: {
      color: "#e09142"
    }
  }, {
    types: ["property", "function"],
    style: {
      color: "#9a86fd"
    }
  }, {
    types: ["tag-id", "selector", "atrule-id"],
    style: {
      color: "#eeebff"
    }
  }, {
    types: ["attr-name"],
    style: {
      color: "#c4b9fe"
    }
  }, {
    types: ["boolean", "string", "entity", "url", "attr-value", "keyword", "control", "directive", "unit", "statement", "regex", "atrule", "placeholder", "variable"],
    style: {
      color: "#ffcc99"
    }
  }, {
    types: ["deleted"],
    style: {
      textDecorationLine: "line-through"
    }
  }, {
    types: ["inserted"],
    style: {
      textDecorationLine: "underline"
    }
  }, {
    types: ["italic"],
    style: {
      fontStyle: "italic"
    }
  }, {
    types: ["important", "bold"],
    style: {
      fontWeight: "bold"
    }
  }, {
    types: ["important"],
    style: {
      color: "#c4b9fe"
    }
  }]
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (theme);


/***/ }),

/***/ "./node_modules/prism-react-renderer/themes/github/index.js":
/*!******************************************************************!*\
  !*** ./node_modules/prism-react-renderer/themes/github/index.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Original: https://raw.githubusercontent.com/PrismJS/prism-themes/master/themes/prism-ghcolors.css
var theme = {
  plain: {
    color: "#393A34",
    backgroundColor: "#f6f8fa"
  },
  styles: [{
    types: ["comment", "prolog", "doctype", "cdata"],
    style: {
      color: "#999988",
      fontStyle: "italic"
    }
  }, {
    types: ["namespace"],
    style: {
      opacity: 0.7
    }
  }, {
    types: ["string", "attr-value"],
    style: {
      color: "#e3116c"
    }
  }, {
    types: ["punctuation", "operator"],
    style: {
      color: "#393A34"
    }
  }, {
    types: ["entity", "url", "symbol", "number", "boolean", "variable", "constant", "property", "regex", "inserted"],
    style: {
      color: "#36acaa"
    }
  }, {
    types: ["atrule", "keyword", "attr-name", "selector"],
    style: {
      color: "#00a4db"
    }
  }, {
    types: ["function", "deleted", "tag"],
    style: {
      color: "#d73a49"
    }
  }, {
    types: ["function-variable"],
    style: {
      color: "#6f42c1"
    }
  }, {
    types: ["tag", "selector", "keyword"],
    style: {
      color: "#00009f"
    }
  }]
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (theme);


/***/ }),

/***/ "./node_modules/prism-react-renderer/themes/vsDark/index.js":
/*!******************************************************************!*\
  !*** ./node_modules/prism-react-renderer/themes/vsDark/index.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Converted automatically using ./tools/themeFromVsCode
var theme = {
  plain: {
    color: "#9CDCFE",
    backgroundColor: "#1E1E1E"
  },
  styles: [{
    types: ["prolog"],
    style: {
      color: "rgb(0, 0, 128)"
    }
  }, {
    types: ["comment"],
    style: {
      color: "rgb(106, 153, 85)"
    }
  }, {
    types: ["builtin", "changed", "keyword", "interpolation-punctuation"],
    style: {
      color: "rgb(86, 156, 214)"
    }
  }, {
    types: ["number", "inserted"],
    style: {
      color: "rgb(181, 206, 168)"
    }
  }, {
    types: ["constant"],
    style: {
      color: "rgb(100, 102, 149)"
    }
  }, {
    types: ["attr-name", "variable"],
    style: {
      color: "rgb(156, 220, 254)"
    }
  }, {
    types: ["deleted", "string", "attr-value", "template-punctuation"],
    style: {
      color: "rgb(206, 145, 120)"
    }
  }, {
    types: ["selector"],
    style: {
      color: "rgb(215, 186, 125)"
    }
  }, {
    // Fix tag color
    types: ["tag"],
    style: {
      color: "rgb(78, 201, 176)"
    }
  }, {
    // Fix tag color for HTML
    types: ["tag"],
    languages: ["markup"],
    style: {
      color: "rgb(86, 156, 214)"
    }
  }, {
    types: ["punctuation", "operator"],
    style: {
      color: "rgb(212, 212, 212)"
    }
  }, {
    // Fix punctuation color for HTML
    types: ["punctuation"],
    languages: ["markup"],
    style: {
      color: "#808080"
    }
  }, {
    types: ["function"],
    style: {
      color: "rgb(220, 220, 170)"
    }
  }, {
    types: ["class-name"],
    style: {
      color: "rgb(78, 201, 176)"
    }
  }, {
    types: ["char"],
    style: {
      color: "rgb(209, 105, 105)"
    }
  }]
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (theme);


/***/ }),

/***/ "./node_modules/@lekoarts/themes-utils/dist/index.mjs":
/*!************************************************************!*\
  !*** ./node_modules/@lekoarts/themes-utils/dist/index.mjs ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "calculateLinesToHighlight": () => (/* binding */ d),
/* harmony export */   "getLanguage": () => (/* binding */ c),
/* harmony export */   "kebabCase": () => (/* reexport default export from named module */ lodash_kebabcase__WEBPACK_IMPORTED_MODULE_0__),
/* harmony export */   "mdxResolverPassthrough": () => (/* binding */ h),
/* harmony export */   "preToCodeBlock": () => (/* binding */ p),
/* harmony export */   "slugify": () => (/* binding */ m)
/* harmony export */ });
/* harmony import */ var lodash_kebabcase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash.kebabcase */ "./node_modules/lodash.kebabcase/index.js");
var c=(e="")=>e.split("language-").pop(),p=e=>{var n;if((n=e==null?void 0:e.children)!=null&&n.props){let{children:s,className:t="",...a}=e.children.props,g=t.match(/language-([\0-\uFFFF]*)/);return{codeString:s.trim(),className:t,language:g!==null?g[1]:"",...a}}},d=e=>{if(!e)return()=>!1;let n=e.split(",").map(s=>s.split("-").map(t=>parseInt(t,10)));return s=>{let t=s+1;return n.some(([a,g])=>g?t>=a&&t<=g:t===a)}},h=e=>async(n,s,t,a)=>{let g=a.schema.getType("Mdx"),r=t.nodeModel.getNodeById({id:n.parent}),l=g.getFields()[e].resolve;return await l(r,s,t,a)},m=(e,n)=>{let s=e.slug?e.slug:lodash_kebabcase__WEBPACK_IMPORTED_MODULE_0__(e.title);return`/${n}/${s}`.replace(/\/\/+/g,"/")};


/***/ }),

/***/ "./public/page-data/sq/d/2450661609.json":
/*!***********************************************!*\
  !*** ./public/page-data/sq/d/2450661609.json ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"data":{"site":{"siteMetadata":{"siteTitle":"HZN TEAM","siteTitleAlt":"Somos HZN, Creamos nichos :)","siteHeadline":"Blog sobre HZN","siteUrl":"https://hzn.com.es","siteDescription":"Os contamos nuestros pasos en el mundo de los nichos","siteImage":"/banner.jpg","author":"@hznteam"}}}}');

/***/ }),

/***/ "./public/page-data/sq/d/3090400250.json":
/*!***********************************************!*\
  !*** ./public/page-data/sq/d/3090400250.json ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"data":{"minimalBlogConfig":{"basePath":"/","blogPath":"/blog","postsPath":"content/posts","pagesPath":"content/pages","tagsPath":"/tags","externalLinks":[{"name":"Twitter","url":"https://twitter.com/hznteam"},{"name":"Homepage","url":"https://hzn.com.es"}],"navigation":[{"title":"Blog","slug":"/blog"},{"title":"About","slug":"/about"}],"showLineNumbers":false,"showCopyButton":true}}}');

/***/ })

};
;
//# sourceMappingURL=component---node-modules-lekoarts-gatsby-theme-minimal-blog-core-src-templates-post-query-tsx-content-file-path-home-borja-proyectos-hznteam-github-io-content-posts-hola-nicheros-index-mdxhead.js.map