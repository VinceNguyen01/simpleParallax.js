/*!
 * simpleParallax - simpleParallax is a simple JavaScript library that gives your website parallax animations on any images or videos, 
 * @date: 29-05-2024 11:58:47, 
 * @version: 5.6.2,
 * @link: https://simpleparallax.com/
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("simpleParallax", [], factory);
	else if(typeof exports === 'object')
		exports["simpleParallax"] = factory();
	else
		root["simpleParallax"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ simpleParallax_SimpleParallax; });

// CONCATENATED MODULE: ./src/helpers/isSupportedBrowser.js
// need closest support
// https://developer.mozilla.org/en-US/docs/Web/API/Element/closest#Polyfill
// need Intersection Observer support
// https://github.com/w3c/IntersectionObserver/tree/master/polyfill

const isSupportedBrowser = () => Element.prototype.closest && 'IntersectionObserver' in window;
/* harmony default export */ var helpers_isSupportedBrowser = (isSupportedBrowser);
// CONCATENATED MODULE: ./src/helpers/viewport.js
class Viewport {
  constructor() {
    this.positions = {
      top: 0,
      bottom: 0,
      height: 0
    };
  }
  setViewportTop(container) {
    // if this is a custom container, user the scrollTop
    this.positions.top = container ? container.scrollTop : window.pageYOffset;
    return this.positions;
  }
  setViewportBottom() {
    this.positions.bottom = this.positions.top + this.positions.height;
    return this.positions;
  }
  setViewportAll(container) {
    // if this is a custom container, user the scrollTop
    this.positions.top = container ? container.scrollTop : window.pageYOffset;
    // if this is a custom container, get the height from the custom container itself
    this.positions.height = container ? container.clientHeight : document.documentElement.clientHeight;
    this.positions.bottom = this.positions.top + this.positions.height;
    return this.positions;
  }
}
const viewport = new Viewport();

// CONCATENATED MODULE: ./src/helpers/convertToArray.js
// check whether the element is a Node List, a HTML Collection or an array
// return an array of nodes
const convertToArray = elements => {
  if (NodeList.prototype.isPrototypeOf(elements) || HTMLCollection.prototype.isPrototypeOf(elements)) return Array.from(elements);
  if (typeof elements === 'string' || elements instanceof String) return document.querySelectorAll(elements);
  return [elements];
};
/* harmony default export */ var helpers_convertToArray = (convertToArray);
// CONCATENATED MODULE: ./src/helpers/cssTransform.js
// Detect css transform
const cssTransform = () => {
  const prefixes = 'transform webkitTransform mozTransform oTransform msTransform'.split(' ');
  let transform;
  let i = 0;
  while (transform === undefined) {
    transform = document.createElement('div').style[prefixes[i]] !== undefined ? prefixes[i] : undefined;
    i += 1;
  }
  return transform;
};
/* harmony default export */ var helpers_cssTransform = (cssTransform());
// CONCATENATED MODULE: ./src/helpers/isImageLoaded.js
// check if media is fully loaded
const isImageLoaded = media => {
  // if the media is a video, return true
  if (media.tagName.toLowerCase() !== 'img' && media.tagName.toLowerCase() !== 'picture') {
    return true;
  }

  // check if media is set as the parameter
  if (!media) {
    return false;
  }

  // check if media has been 100% loaded
  if (!media.complete) {
    return false;
  }

  // check if the media is displayed
  if (typeof media.naturalWidth !== 'undefined' && media.naturalWidth === 0) {
    return false;
  }
  return true;
};
/* harmony default export */ var helpers_isImageLoaded = (isImageLoaded);
// CONCATENATED MODULE: ./src/instances/parallax.js



class parallax_ParallaxInstance {
  constructor(element, options) {
    // set the element & settings
    this.element = element;
    this.elementContainer = element;
    this.settings = options;
    this.isVisible = true;
    this.isInit = false;
    this.oldTranslateValue = -1;
    this.init = this.init.bind(this);
    this.customWrapper = this.settings.customWrapper && this.element.closest(this.settings.customWrapper) ? this.element.closest(this.settings.customWrapper) : null;

    // check if images has not been loaded yet
    if (helpers_isImageLoaded(element)) {
      this.init();
    } else {
      this.element.addEventListener('load', () => {
        // timeout to ensure the image is fully loaded into the DOM
        setTimeout(() => {
          this.init(true);
        }, 50);
      });
    }
  }
  init(asyncInit) {
    // for some reason, <picture> are init an infinite time on windows OS
    if (this.isInit) return;
    if (asyncInit) {
      // in case the image is lazy loaded, the rangemax should be cleared
      // so it will be updated in the next getTranslateValue()
      this.rangeMax = null;
    }

    // check if element has not been already initialized with simpleParallax
    if (this.element.closest('.simpleParallax')) return;
    if (this.settings.overflow === false) {
      // if overflow option is set to false
      // wrap the element into a div to apply overflow
      this.wrapElement(this.element);
    }

    // apply the transform style on the image
    this.setTransformCSS();

    // get the current element offset
    this.getElementOffset();

    // init the Intesection Observer
    this.intersectionObserver();

    // get its translated value
    this.getTranslateValue();

    // apply its translation even if not visible for the first init
    this.animate();

    // if a delay has been set
    if (this.settings.delay > 0) {
      // apply a timeout to avoid buggy effect
      setTimeout(() => {
        // apply the transition style on the image
        this.setTransitionCSS();

        //add isInit class
        this.elementContainer.classList.add('simple-parallax-initialized');
      }, 10);
    } else {
      //add isInit class
      this.elementContainer.classList.add('simple-parallax-initialized');
    }

    // for some reason, <picture> are init an infinite time on windows OS
    this.isInit = true;
  }

  // if overflow option is set to false
  // wrap the element into a .simpleParallax div and apply overflow hidden to hide the image excedant (result of the scale)
  wrapElement() {
    // check is current image is in a <picture> tag
    const elementToWrap = this.element.closest('picture') || this.element;

    // create a .simpleParallax wrapper container
    // if there is a custom wrapper
    // override the wrapper with it
    let wrapper = this.customWrapper || document.createElement('div');
    wrapper.classList.add('simpleParallax');
    wrapper.style.overflow = 'hidden';

    // append the image inside the new wrapper
    if (!this.customWrapper) {
      elementToWrap.parentNode.insertBefore(wrapper, elementToWrap);
      wrapper.appendChild(elementToWrap);
    }
    this.elementContainer = wrapper;
  }

  // unwrap the element from .simpleParallax wrapper container
  unWrapElement() {
    const wrapper = this.elementContainer;

    // if there is a custom wrapper, we jusy need to remove the class and style
    if (this.customWrapper) {
      wrapper.classList.remove('simpleParallax');
      wrapper.style.overflow = '';
    } else {
      wrapper.replaceWith(...wrapper.childNodes);
    }
  }

  // apply default style on element
  setTransformCSS() {
    if (this.settings.overflow === false) {
      // if overflow option is set to false
      // add scale style so the image can be translated without getting out of its container
      this.element.style[helpers_cssTransform] = `scale(${this.settings.scale})`;
    }

    // add will-change CSS property to improve perfomance
    this.element.style.willChange = 'transform';
  }

  // apply the transition effet
  setTransitionCSS() {
    // add transition option
    this.element.style.transition = `transform ${this.settings.delay}s ${this.settings.transition}`;
  }

  // remove style of the element
  unSetStyle() {
    // remove will change inline style
    this.element.style.willChange = '';
    this.element.style[helpers_cssTransform] = '';
    this.element.style.transition = '';
  }

  // get the current element offset
  getElementOffset() {
    // get position of the element
    const positions = this.elementContainer.getBoundingClientRect();
    // get height
    this.elementHeight = positions.height;
    // get offset top
    this.elementTop = positions.top + viewport.positions.top;
    // if there is a custom container
    if (this.settings.customContainer) {
      // we need to do some calculation to get the position from the parent rather than the viewport
      const parentPositions = this.settings.customContainer.getBoundingClientRect();
      this.elementTop = positions.top - parentPositions.top + viewport.positions.top;
    }
    // get offset bottom
    this.elementBottom = this.elementHeight + this.elementTop;
  }

  // build the Threshold array to cater change for every pixel scrolled
  buildThresholdList() {
    const thresholds = [];
    for (let i = 1.0; i <= this.elementHeight; i++) {
      const ratio = i / this.elementHeight;
      thresholds.push(ratio);
    }
    return thresholds;
  }

  // create the Intersection Observer
  intersectionObserver() {
    const options = {
      root: null,
      threshold: this.buildThresholdList()
    };
    this.observer = new IntersectionObserver(this.intersectionObserverCallback.bind(this), options);
    this.observer.observe(this.element);
  }

  // Intersection Observer Callback to set the element at visible state or not
  intersectionObserverCallback(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        this.isVisible = true;
      } else {
        this.isVisible = false;
      }
    });
  }

  // check if the current element is visible in the Viewport
  // for browser that not support Intersection Observer API
  checkIfVisible() {
    return this.elementBottom > viewport.positions.top && this.elementTop < viewport.positions.bottom;
  }

  // calculate the range between image will be translated
  getRangeMax() {
    // get the real height of the image without scale
    const elementImageHeight = this.element.clientHeight;

    // range is calculate with the image height by the scale
    this.rangeMax = elementImageHeight * this.settings.scale - elementImageHeight;
  }

  // get the percentage and the translate value to apply on the element
  getTranslateValue() {
    // calculate the % position of the element comparing to the viewport
    // rounding percentage to a 1 number float to avoid unn unnecessary calculation
    let percentage = ((viewport.positions.bottom - this.elementTop) / ((viewport.positions.height + this.elementHeight) / 100)).toFixed(1);

    // sometime the percentage exceeds 100 or goes below 0
    percentage = Math.min(100, Math.max(0, percentage));

    // if a maxTransition has been set, we round the percentage to that number
    if (this.settings.maxTransition !== 0 && percentage > this.settings.maxTransition) {
      percentage = this.settings.maxTransition;
    }

    // sometime the same percentage is returned
    // if so we don't do anything
    if (this.oldPercentage === percentage) {
      return false;
    }

    // if not range max is set, recalculate it
    if (!this.rangeMax) {
      this.getRangeMax();
    }

    // transform this % into the max range of the element
    // rounding translateValue to a non float int - as minimum pixel for browser to render is 1 (no 0.5)
    this.translateValue = (percentage / 100 * this.rangeMax - this.rangeMax / 2).toFixed(0);

    // sometime the same translate value is returned
    // if so we don't do anything
    if (this.oldTranslateValue === this.translateValue) {
      return false;
    }

    // store the current percentage
    this.oldPercentage = percentage;
    this.oldTranslateValue = this.translateValue;
    return true;
  }

  // animate the image
  animate() {
    let translateValueY = 0;
    let translateValueX = 0;
    let inlineCss;
    if (this.settings.orientation.includes('left') || this.settings.orientation.includes('right')) {
      // if orientation option is left or right
      // use horizontal axe - X axe
      translateValueX = `${this.settings.orientation.includes('left') ? this.translateValue * -1 : this.translateValue}px`;
    }
    if (this.settings.orientation.includes('up') || this.settings.orientation.includes('down')) {
      // if orientation option is up or down
      // use vertical axe - Y axe
      translateValueY = `${this.settings.orientation.includes('up') ? this.translateValue * -1 : this.translateValue}px`;
    }

    // set style to apply to the element
    if (this.settings.overflow === false) {
      // if overflow option is set to false
      // add the scale style
      inlineCss = `translate3d(${translateValueX}, ${translateValueY}, 0) scale(${this.settings.scale})`;
    } else {
      inlineCss = `translate3d(${translateValueX}, ${translateValueY}, 0)`;
    }

    // add style on the element using the adequate CSS transform
    this.element.style[helpers_cssTransform] = inlineCss;
  }
}
/* harmony default export */ var parallax = (parallax_ParallaxInstance);
// CONCATENATED MODULE: ./src/simpleParallax.js




let isInit = false;
let instances = [];
let frameID;
let resizeID;
class simpleParallax_SimpleParallax {
  constructor(elements, options, clonedWindow) {
    if (!elements) return;

    // check if the browser support simpleParallax
    if (!helpers_isSupportedBrowser()) return;
    this.elements = helpers_convertToArray(elements);
    this.defaults = {
      delay: 0,
      orientation: 'up',
      scale: 1.3,
      overflow: false,
      transition: 'cubic-bezier(0,0,0,1)',
      customContainer: '',
      customWrapper: '',
      maxTransition: 0
    };
    this.settings = Object.assign(this.defaults, options);
    if (this.settings.customContainer) {
      [this.customContainer] = helpers_convertToArray(this.settings.customContainer);
    }
    this.lastPosition = -1;
    this.resizeIsDone = this.resizeIsDone.bind(this);
    this.refresh = this.refresh.bind(this);
    this.proceedRequestAnimationFrame = this.proceedRequestAnimationFrame.bind(this);
    this.clonedWindow = clonedWindow;
    this.init();
  }
  init() {
    viewport.setViewportAll(this.customContainer);
    instances = [...this.elements.map(element => new parallax(element, this.settings)), ...instances];

    // update the instance length
    // instancesLength = instances.length;

    // only if this is the first simpleParallax init
    if (!isInit) {
      // init the frame
      this.proceedRequestAnimationFrame();
      this.clonedWindow.addEventListener('resize', this.resizeIsDone);
      isInit = true;
    }
  }

  // wait for resize to be completely done
  resizeIsDone() {
    clearTimeout(resizeID);
    resizeID = setTimeout(this.refresh, 200);
  }

  // animation frame
  proceedRequestAnimationFrame() {
    // get the offset top of the viewport
    viewport.setViewportTop(this.customContainer);
    if (this.lastPosition === viewport.positions.top) {
      // if last position if the same than the curent one
      // callback the animationFrame and exit the current loop
      frameID = this.clonedWindow.requestAnimationFrame(this.proceedRequestAnimationFrame);
      return;
    }

    // get the offset bottom of the viewport
    viewport.setViewportBottom();

    // proceed with the current element
    instances.forEach(instance => {
      this.proceedElement(instance);
    });

    // callback the animationFrame
    frameID = this.clonedWindow.requestAnimationFrame(this.proceedRequestAnimationFrame);

    // store the last position
    this.lastPosition = viewport.positions.top;
  }

  // proceed the element
  proceedElement(instance) {
    let isVisible = false;

    // if this is a custom container
    // use old function to check if element visible
    if (this.customContainer) {
      isVisible = instance.checkIfVisible();
      // else, use response from Intersection Observer API Callback
    } else {
      isVisible = instance.isVisible;
    }

    // if element not visible, stop it
    if (!isVisible) return;

    // if percentage is equal to the last one, no need to continue
    if (!instance.getTranslateValue()) {
      return;
    }

    // animate the image
    instance.animate();
  }
  refresh() {
    // re-get all the viewport positions
    viewport.setViewportAll(this.customContainer);
    instances.forEach(instance => {
      // re-get the current element offset
      instance.getElementOffset();

      // re-get the range if the current element
      instance.getRangeMax();
    });

    // force the request animation frame to fired
    this.lastPosition = -1;
  }
  destroy() {
    const instancesToDestroy = [];

    // remove all instances that need to be destroyed from the instances array
    instances = instances.filter(instance => {
      if (this.elements.includes(instance.element)) {
        // push instance that need to be destroyed into instancesToDestroy
        instancesToDestroy.push(instance);
        return false;
      }
      return instance;
    });
    instancesToDestroy.forEach(instance => {
      // unset style
      instance.unSetStyle();
      if (this.settings.overflow === false) {
        // if overflow option is set to false
        // unwrap the element from .simpleParallax wrapper container
        instance.unWrapElement();
      }
    });

    // if no instances left, remove the raf and resize event = simpleParallax fully destroyed
    if (!instances.length) {
      // cancel the animation frame
      this.clonedWindow.cancelAnimationFrame(frameID);

      // detach the resize event
      this.clonedWindow.removeEventListener('resize', this.refresh);

      // Reset isInit
      isInit = false;
    }
  }
}

/***/ })
/******/ ])["default"];
});