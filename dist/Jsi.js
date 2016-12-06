(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.Jsi = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Jsi = function () {
    function Jsi(doc) {
        _classCallCheck(this, Jsi);

        if (doc === undefined) {
            doc = document;
        }
        this.doc = doc;
        this.created = new Map();

        this.eltEvent = new Map();
        this.eltEvent.set('onclick', 'click');
        this.eltEvent.set('onchange', 'change');
        this.eltEvent.set('onfocus', 'focus');
        this.eltEvent.set('onblur', 'blur');
        this.eltEvent.set('onkeyup', 'keyup');
        this.eltEvent.set('onkeypress', 'keypress');
        this.eltEvent.set('onsubmit', 'submit');
        this.eltEvent.set('onanimationend', 'animationend');
        this.eltEvent.set('ontransitionend', 'transitionend');
        this.eltEvent.set('oncopy', 'copy');
        this.eltEvent.set('oncut', 'cut');
        this.eltEvent.set('ondblclick', 'dblclick');
        this.eltEvent.set('oninvalid', 'invalid');
        this.eltEvent.set('onmousedown', 'mousedown');
        this.eltEvent.set('onmouseup', 'mouseup');
        this.eltEvent.set('onmouseenter', 'mouseenter');
        this.eltEvent.set('onmouseleave', 'mouseleave');
        this.eltEvent.set('onmousemove', 'mousemove');
        this.eltEvent.set('onmouseout', 'mouseout');
        this.eltEvent.set('onmouseover', 'mouseover');
        this.eltEvent.set('onpaste', 'paste');
        this.eltEvent.set('onresize', 'resize');
        this.eltEvent.set('onscroll', 'scroll');
        this.eltEvent.set('onselect', 'select');
        this.eltEvent.set('ontouchstart', 'touchstart');
        this.eltEvent.set('ontouchmove', 'touchmove');
        this.eltEvent.set('ontouchend', 'touchend');
        this.eltEvent.set('ondrag', 'drag');
        this.eltEvent.set('ondragend', 'dragend');
        this.eltEvent.set('ondragenter', 'dragenter');
        this.eltEvent.set('ondragleave', 'dragleave');
        this.eltEvent.set('ondragover', 'dragover');
        this.eltEvent.set('ondragstart', 'dragstart');
        this.eltEvent.set('ondrop', 'drop');
        this.eltEvent.set('oninput', 'input');
        this.eltEvent.set('onloadstart', 'loadstart');
        this.eltEvent.set('onprogress', 'progress');
        this.eltEvent.set('onsuspend', 'suspend');
        this.eltEvent.set('onabort', 'abort');
        this.eltEvent.set('onerror', 'error');
        this.eltEvent.set('onemptied', 'emptied');
        this.eltEvent.set('onstalled', 'stalled');
        this.eltEvent.set('onloadedmetadata', 'loadedmetadata');
        this.eltEvent.set('onloadeddata', 'loadeddata');
        this.eltEvent.set('oncanplay', 'canplay');
        this.eltEvent.set('oncanplaythrough', 'canplaythrough');
        this.eltEvent.set('onplaying', 'playing');
        this.eltEvent.set('onwaiting', 'waiting');
        this.eltEvent.set('onseeking', 'seeking');
        this.eltEvent.set('onseeked', 'seeked');
        this.eltEvent.set('onended', 'ended');
        this.eltEvent.set('ondurationchange', 'durationchange');
        this.eltEvent.set('ontimeupdate', 'timeupdate');
        this.eltEvent.set('onplay', 'play');
        this.eltEvent.set('onpause', 'pause');
        this.eltEvent.set('onratechange', 'ratechange');
        this.eltEvent.set('onresize', 'resize');
        this.eltEvent.set('onvolumechange', 'volumechange');
    }

    /**
    * document.getElementById shorcut
    * @param {string} id the element id
    * @return {object} DOMElement
    */


    _createClass(Jsi, [{
        key: 'id',
        value: function id(_id) {
            return this.doc.getElementById(_id);
        }
        /**
        * document.querySelectorAll shorcut
        * @param {string} query the selector
        * @return {DOMNodeList}
        */

    }, {
        key: 'query',
        value: function query(_query) {
            var res = this.doc.querySelectorAll(_query);
            if (res.length > 0) {
                return res;
            } else {
                return null;
            }
        }

        /**
        * document.querySelector shorcut
        * @param {string} query the selector
        * @return {DOMElement}
        */

    }, {
        key: 'queryFirst',
        value: function queryFirst(query) {
            return this.doc.querySelector(query);
        }
    }, {
        key: 'select',
        value: function select(q) {
            var res = this.id(q);
            if (res === null) {
                res = this.queryFirst(q);
            }
            return res;
        }

        /**
        * append an element to a parent
        * @param {DOMElement|string} parent the element to append to or its id
        * @param {DOMElement|object} elt or template object to append to parent
        * @return {DOMElement} object
        */

    }, {
        key: 'append',
        value: function append(parent, elt, getParent) {
            if (elt.tag !== undefined || elt.isTextNode !== undefined) {
                elt = this.create(elt);
            }
            if ((typeof parent === 'undefined' ? 'undefined' : _typeof(parent)) != 'object') {
                parent = this.select(parent);
            }

            if (parent !== null && parent !== undefined) {
                var res = parent.appendChild(elt);
                if (getParent !== undefined) {
                    res = parent;
                }
                return res;
            }
            throw parent + ' cannot be found';
        }

        /**
        * append an element before another
        * @param elt mixed the element to append to or its id
        * @param n_elt mixed DOMElement or template object to append to parent
        * @return object DOMElement
        */

    }, {
        key: 'appendBefore',
        value: function appendBefore(elt, n_elt) {
            if (n_elt.tag !== undefined) {
                n_elt = this.create(n_elt);
            }
            if ((typeof elt === 'undefined' ? 'undefined' : _typeof(elt)) != 'object') {
                elt = this.select(elt);
            }

            if (elt !== null && elt !== undefined) {
                return elt.parentNode.insertBefore(n_elt, elt);
            }

            throw elt + ' cannot be found';
        }

        /**
        * append an element after another
        * @param elt mixed the element to append to or its id
        * @param n_elt mixed DOMElement or template object to append to parent
        * @return object DOMElement
        */

    }, {
        key: 'appendAfter',
        value: function appendAfter(elt, n_elt) {
            if (n_elt.tag !== undefined) {
                n_elt = this.create(n_elt);
            }
            if ((typeof elt === 'undefined' ? 'undefined' : _typeof(elt)) != 'object') {
                elt = this.select(elt);
            }

            if (elt !== null && elt !== undefined) {
                return elt.parentNode.insertBefore(n_elt, elt.nextSibling);
            }

            throw elt + ' cannot be found';
        }

        /**
        * append an element to a parent as its first child
        * @param parent mixed the element to append to or its id
        * @param elt mixed DOMElement or template object to append to parent
        * @return object DOMElement
        */

    }, {
        key: 'prepend',
        value: function prepend(parent, elt) {
            if (elt.tag !== undefined) {
                elt = this.create(elt);
            }
            if ((typeof parent === 'undefined' ? 'undefined' : _typeof(parent)) != 'object') {
                parent = this.select(parent);
            }

            if (parent !== null && parent !== undefined) {
                if (parent.childNodes.length === 0) {
                    return this.append(parent, elt);
                } else {
                    return parent.insertBefore(elt, parent.firstChild);
                }
            }

            throw parent + ' cannot be found';
        }

        /**
        * replace an element
        * @return object DOMElement
        */

    }, {
        key: 'replace',
        value: function replace(elt, n_elt) {
            if (n_elt.tag !== undefined) {
                n_elt = this.create(n_elt);
            }
            if ((typeof elt === 'undefined' ? 'undefined' : _typeof(elt)) != 'object') {
                elt = this.select(elt);
            }

            if (elt !== null && elt !== undefined) {
                var parent = elt.parentNode;
                return parent.replaceChild(n_elt, elt);
            }

            throw elt + ' cannot be found';
        }

        /*
        * destroy a Dom element
        * @param elt mixed id of the element or element itself
        */

    }, {
        key: 'remove',
        value: function remove(elt) {
            if ((typeof elt === 'undefined' ? 'undefined' : _typeof(elt)) != 'object') {
                elt = this.select(elt);
            }

            if (elt !== null && elt !== undefined) {
                return elt.parentNode.removeChild(elt);
            }

            return false;
        }

        /**
        * empty Dom element from it's children.
        */

    }, {
        key: 'empty',
        value: function empty(elt) {
            if ((typeof elt === 'undefined' ? 'undefined' : _typeof(elt)) != 'object') {
                elt = this.select(elt);
            }

            if (elt !== null && elt !== undefined) {
                while (elt.lastChild) {
                    elt.removeChild(elt.lastChild);
                }

                return elt;
            }
        }

        /**
        * create a text node
        * @param content string the content of the text node
        */

    }, {
        key: 'textNode',
        value: function textNode(content) {
            return this.doc.createTextNode(content);
        }

        /**
        * create an element from a template object
        * @param {object} c the template object to be created
        * @return {object} DOMElement
        *       <pre>
        *       {
        *	        "tag":"type of element",
        *	        "attr":{
        *		        "attribute1":"value of attr 1",
        *		        "...":"..."
        *	        },
        *	        "inner":"the text content of the node"
        *       }
        *       </pre>
        */

    }, {
        key: 'create',
        value: function create(c) {
            var elt = null;
            if (c.isTextNode !== undefined) {
                elt = this.textNode(c.content);
            } else {
                // check if the element tag has already been created to clone it
                if (!this.created.has(c.tag)) {
                    this.created.set(c.tag, this.doc.createElement(c.tag));
                }
                elt = this.created.get(c.tag).cloneNode();

                // create element attribute
                if (c.attr !== undefined) {
                    for (var key in c.attr) {
                        // handle element event or certain specific attribute
                        if (this.eltEvent.has(key)) {
                            elt.addEventListener(this.eltEvent.get(key), c.attr[key]);
                        } else {
                            switch (key) {
                                case 'checked':
                                    elt.checked = c.attr[key];
                                    break;
                                case 'className':
                                    elt.setAttribute('class', c.attr[key]);
                                    break;
                                default:
                                    elt.setAttribute(key, c.attr[key]);
                                    break;
                            }
                        }
                    }
                }

                // in some case you want to be able to force innerHTML value, 
                // /!\ THIS IS BAAAAAAD !
                if (c.innerForce !== undefined) {
                    elt.innerHTML = c.innerForce;
                }

                // append elements if there are some 
                if (c.append !== undefined) {
                    for (var ap in c.append) {
                        elt = this.append(elt, c.append[ap], true);
                    }
                }

                // create inner text content node and append it
                if (c.inner !== undefined) {
                    elt.appendChild(this.textNode(c.inner));
                }

                if (c.initCallback !== undefined && typeof c.initCallback === 'function') {
                    c.initCallback(elt);
                }
            }

            return elt;
        }
    }, {
        key: 'eltFromString',
        value: function eltFromString(elt) {
            var el = elt;
            try {
                elt = new Range().createContextualFragment(el);
            } catch (e) {
                var range = this.doc.createRange();
                var div = this.doc.createElement('div');
                range.selectNode(this.doc.getElementsByTagName("div").item(0));
                elt = range.createContextualFragment(el);
            }
            return elt;
        }
    }, {
        key: 'reverseCreate',
        value: function reverseCreate(elt) {
            var n_elt = {};

            if (elt.nodeName === '#text') {
                n_elt.isTextNode = true;
                n_elt.content = elt.nodeValue;
            } else {
                n_elt.tag = elt.nodeName.toLowerCase();

                if (elt.attributes !== undefined) {
                    if (elt.attributes.length > 0) {
                        n_elt.attr = {};
                        for (var i = elt.attributes.length - 1; i >= 0; i--) {
                            n_elt.attr[elt.attributes.item(i).name] = elt.attributes.item(i).value;
                        }
                    }
                }

                if (elt.childNodes !== undefined) {
                    if (elt.childNodes.length > 0) {
                        n_elt.append = [];
                        for (var _i = 0; _i <= elt.childNodes.length - 1; _i++) {
                            n_elt.append.push(this.reverseCreate(elt.childNodes.item(_i)));
                        }
                    }
                }
            }

            return n_elt;
        }
    }, {
        key: 'reverseCreateFromString',
        value: function reverseCreateFromString(elt) {
            return this.reverseCreate(this.eltFromString(elt));
        }
    }]);

    return Jsi;
}();

module.exports = Jsi;

},{}]},{},[1])(1)
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJlczYvanNpLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7SUNBTSxHO0FBQ0YsaUJBQVksR0FBWixFQUFnQjtBQUFBOztBQUNaLFlBQUksUUFBUSxTQUFaLEVBQXVCO0FBQ25CLGtCQUFNLFFBQU47QUFDSDtBQUNELGFBQUssR0FBTCxHQUFXLEdBQVg7QUFDQSxhQUFLLE9BQUwsR0FBZSxJQUFJLEdBQUosRUFBZjs7QUFFQSxhQUFLLFFBQUwsR0FBZ0IsSUFBSSxHQUFKLEVBQWhCO0FBQ0EsYUFBSyxRQUFMLENBQWMsR0FBZCxDQUFrQixTQUFsQixFQUE2QixPQUE3QjtBQUNBLGFBQUssUUFBTCxDQUFjLEdBQWQsQ0FBa0IsVUFBbEIsRUFBOEIsUUFBOUI7QUFDQSxhQUFLLFFBQUwsQ0FBYyxHQUFkLENBQWtCLFNBQWxCLEVBQTZCLE9BQTdCO0FBQ0EsYUFBSyxRQUFMLENBQWMsR0FBZCxDQUFrQixRQUFsQixFQUE0QixNQUE1QjtBQUNBLGFBQUssUUFBTCxDQUFjLEdBQWQsQ0FBa0IsU0FBbEIsRUFBNkIsT0FBN0I7QUFDQSxhQUFLLFFBQUwsQ0FBYyxHQUFkLENBQWtCLFlBQWxCLEVBQWdDLFVBQWhDO0FBQ0EsYUFBSyxRQUFMLENBQWMsR0FBZCxDQUFrQixVQUFsQixFQUE4QixRQUE5QjtBQUNBLGFBQUssUUFBTCxDQUFjLEdBQWQsQ0FBa0IsZ0JBQWxCLEVBQW9DLGNBQXBDO0FBQ0EsYUFBSyxRQUFMLENBQWMsR0FBZCxDQUFrQixpQkFBbEIsRUFBcUMsZUFBckM7QUFDQSxhQUFLLFFBQUwsQ0FBYyxHQUFkLENBQWtCLFFBQWxCLEVBQTRCLE1BQTVCO0FBQ0EsYUFBSyxRQUFMLENBQWMsR0FBZCxDQUFrQixPQUFsQixFQUEyQixLQUEzQjtBQUNBLGFBQUssUUFBTCxDQUFjLEdBQWQsQ0FBa0IsWUFBbEIsRUFBZ0MsVUFBaEM7QUFDQSxhQUFLLFFBQUws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YSxXQUFiLEVBQVo7O0FBRUEsb0JBQUksSUFBSSxVQUFKLEtBQW1CLFNBQXZCLEVBQWtDO0FBQzlCLHdCQUFJLElBQUksVUFBSixDQUFlLE1BQWYsR0FBdUIsQ0FBM0IsRUFBOEI7QUFDMUIsOEJBQU0sSUFBTixHQUFhLEVBQWI7QUFDQSw2QkFBSyxJQUFJLElBQUksSUFBSSxVQUFKLENBQWUsTUFBZixHQUF3QixDQUFyQyxFQUF3QyxLQUFLLENBQTdDLEVBQWdELEdBQWhELEVBQXFEO0FBQ2pELGtDQUFNLElBQU4sQ0FBVyxJQUFJLFVBQUosQ0FBZSxJQUFmLENBQW9CLENBQXBCLEVBQXVCLElBQWxDLElBQTBDLElBQUksVUFBSixDQUFlLElBQWYsQ0FBb0IsQ0FBcEIsRUFBdUIsS0FBakU7QUFDSDtBQUNKO0FBQ0o7O0FBRUQsb0JBQUksSUFBSSxVQUFKLEtBQW1CLFNBQXZCLEVBQWtDO0FBQzlCLHdCQUFJLElBQUksVUFBSixDQUFlLE1BQWYsR0FBdUIsQ0FBM0IsRUFBOEI7QUFDMUIsOEJBQU0sTUFBTixHQUFlLEVBQWY7QUFDQSw2QkFBSyxJQUFJLEtBQUksQ0FBYixFQUFnQixNQUFLLElBQUksVUFBSixDQUFlLE1BQWYsR0FBd0IsQ0FBN0MsRUFBZ0QsSUFBaEQsRUFBcUQ7QUFDakQsa0NBQU0sTUFBTixDQUFhLElBQWIsQ0FBa0IsS0FBSyxhQUFMLENBQW1CLElBQUksVUFBSixDQUFlLElBQWYsQ0FBb0IsRUFBcEIsQ0FBbkIsQ0FBbEI7QUFDSDtBQUNKO0FBQ0o7QUFDSjs7QUFFRCxtQkFBTyxLQUFQO0FBQ0g7OztnREFFdUIsRyxFQUFJO0FBQ3hCLG1CQUFPLEtBQUssYUFBTCxDQUFtQixLQUFLLGFBQUwsQ0FBbUIsR0FBbkIsQ0FBbkIsQ0FBUDtBQUNIOzs7Ozs7QUFHTCxPQUFPLE9BQVAsR0FBaUIsR0FBakIiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiY2xhc3MgSnNpe1xuICAgIGNvbnN0cnVjdG9yKGRvYyl7XG4gICAgICAgIGlmIChkb2MgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgZG9jID0gZG9jdW1lbnQ7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5kb2MgPSBkb2M7XG4gICAgICAgIHRoaXMuY3JlYXRlZCA9IG5ldyBNYXAoKTtcblxuICAgICAgICB0aGlzLmVsdEV2ZW50ID0gbmV3IE1hcCgpO1xuICAgICAgICB0aGlzLmVsdEV2ZW50LnNldCgnb25jbGljaycsICdjbGljaycpO1xuICAgICAgICB0aGlzLmVsdEV2ZW50LnNldCgnb25jaGFuZ2UnLCAnY2hhbmdlJyk7XG4gICAgICAgIHRoaXMuZWx0RXZlbnQuc2V0KCdvbmZvY3VzJywgJ2ZvY3VzJyk7XG4gICAgICAgIHRoaXMuZWx0RXZlbnQuc2V0KCdvbmJsdXInLCAnYmx1cicpO1xuICAgICAgICB0aGlzLmVsdEV2ZW50LnNldCgnb25rZXl1cCcsICdrZXl1cCcpO1xuICAgICAgICB0aGlzLmVsdEV2ZW50LnNldCgnb25rZXlwcmVzcycsICdrZXlwcmVzcycpO1xuICAgICAgICB0aGlzLmVsdEV2ZW50LnNldCgnb25zdWJtaXQnLCAnc3VibWl0Jyk7XG4gICAgICAgIHRoaXMuZWx0RXZlbnQuc2V0KCdvbmFuaW1hdGlvbmVuZCcsICdhbmltYXRpb25lbmQnKTtcbiAgICAgICAgdGhpcy5lbHRFdmVudC5zZXQoJ29udHJhbnNpdGlvbmVuZCcsICd0cmFuc2l0aW9uZW5kJyk7XG4gICAgICAgIHRoaXMuZWx0RXZlbnQuc2V0KCdvbmNvcHknLCAnY29weScpO1xuICAgICAgICB0aGlzLmVsdEV2ZW50LnNldCgnb25jdXQnLCAnY3V0Jyk7XG4gICAgICAgIHRoaXMuZWx0RXZlbnQuc2V0KCdvbmRibGNsaWNrJywgJ2RibGNsaWNrJyk7XG4gICAgICAgIHRoaXMuZWx0RXZlbnQuc2V0KCdvbmludmFsaWQnLCAnaW52YWxpZCcpO1xuICAgICAgICB0aGlzLmVsdEV2ZW50LnNldCgnb25tb3VzZWRvd24nLCAnbW91c2Vkb3duJyk7XG4gICAgICAgIHRoaXMuZWx0RXZlbnQuc2V0KCdvbm1vdXNldXAnLCAnbW91c2V1cCcpO1xuICAgICAgICB0aGlzLmVsdEV2ZW50LnNldCgnb25tb3VzZWVudGVyJywgJ21vdXNlZW50ZXInKTtcbiAgICAgICAgdGhpcy5lbHRFdmVudC5zZXQoJ29ubW91c2VsZWF2ZScsICdtb3VzZWxlYXZlJyk7XG4gICAgICAgIHRoaXMuZWx0RXZlbnQuc2V0KCdvbm1vdXNlbW92ZScsICdtb3VzZW1vdmUnKTtcbiAgICAgICAgdGhpcy5lbHRFdmVudC5zZXQoJ29ubW91c2VvdXQnLCAnbW91c2VvdXQnKTtcbiAgICAgICAgdGhpcy5lbHRFdmVudC5zZXQoJ29ubW91c2VvdmVyJywgJ21vdXNlb3ZlcicpO1xuICAgICAgICB0aGlzLmVsdEV2ZW50LnNldCgnb25wYXN0ZScsICdwYXN0ZScpO1xuICAgICAgICB0aGlzLmVsdEV2ZW50LnNldCgnb25yZXNpemUnLCAncmVzaXplJyk7XG4gICAgICAgIHRoaXMuZWx0RXZlbnQuc2V0KCdvbnNjcm9sbCcsICdzY3JvbGwnKTtcbiAgICAgICAgdGhpcy5lbHRFdmVudC5zZXQoJ29uc2VsZWN0JywgJ3NlbGVjdCcpO1xuICAgICAgICB0aGlzLmVsdEV2ZW50LnNldCgnb250b3VjaHN0YXJ0JywgJ3RvdWNoc3RhcnQnKTtcbiAgICAgICAgdGhpcy5lbHRFdmVudC5zZXQoJ29udG91Y2htb3ZlJywgJ3RvdWNobW92ZScpO1xuICAgICAgICB0aGlzLmVsdEV2ZW50LnNldCgnb250b3VjaGVuZCcsICd0b3VjaGVuZCcpO1xuICAgICAgICB0aGlzLmVsdEV2ZW50LnNldCgnb25kcmFnJywgJ2RyYWcnKTtcbiAgICAgICAgdGhpcy5lbHRFdmVudC5zZXQoJ29uZHJhZ2VuZCcsICdkcmFnZW5kJyk7XG4gICAgICAgIHRoaXMuZWx0RXZlbnQuc2V0KCdvbmRyYWdlbnRlcicsICdkcmFnZW50ZXInKTtcbiAgICAgICAgdGhpcy5lbHRFdmVudC5zZXQoJ29uZHJhZ2xlYXZlJywgJ2RyYWdsZWF2ZScpO1xuICAgICAgICB0aGlzLmVsdEV2ZW50LnNldCgnb25kcmFnb3ZlcicsICdkcmFnb3ZlcicpO1xuICAgICAgICB0aGlzLmVsdEV2ZW50LnNldCgnb25kcmFnc3RhcnQnLCAnZHJhZ3N0YXJ0Jyk7XG4gICAgICAgIHRoaXMuZWx0RXZlbnQuc2V0KCdvbmRyb3AnLCAnZHJvcCcpO1xuICAgICAgICB0aGlzLmVsdEV2ZW50LnNldCgnb25pbnB1dCcsICdpbnB1dCcpO1xuICAgICAgICB0aGlzLmVsdEV2ZW50LnNldCgnb25sb2Fkc3RhcnQnLCAnbG9hZHN0YXJ0Jyk7XG4gICAgICAgIHRoaXMuZWx0RXZlbnQuc2V0KCdvbnByb2dyZXNzJywgJ3Byb2dyZXNzJyk7XG4gICAgICAgIHRoaXMuZWx0RXZlbnQuc2V0KCdvbnN1c3BlbmQnLCAnc3VzcGVuZCcpO1xuICAgICAgICB0aGlzLmVsdEV2ZW50LnNldCgnb25hYm9ydCcsICdhYm9ydCcpO1xuICAgICAgICB0aGlzLmVsdEV2ZW50LnNldCgnb25lcnJvcicsICdlcnJvcicpO1xuICAgICAgICB0aGlzLmVsdEV2ZW50LnNldCgnb25lbXB0aWVkJywgJ2VtcHRpZWQnKTtcbiAgICAgICAgdGhpcy5lbHRFdmVudC5zZXQoJ29uc3RhbGxlZCcsICdzdGFsbGVkJyk7XG4gICAgICAgIHRoaXMuZWx0RXZlbnQuc2V0KCdvbmxvYWRlZG1ldGFkYXRhJywgJ2xvYWRlZG1ldGFkYXRhJyk7XG4gICAgICAgIHRoaXMuZWx0RXZlbnQuc2V0KCdvbmxvYWRlZGRhdGEnLCAnbG9hZGVkZGF0YScpO1xuICAgICAgICB0aGlzLmVsdEV2ZW50LnNldCgnb25jYW5wbGF5JywgJ2NhbnBsYXknKTtcbiAgICAgICAgdGhpcy5lbHRFdmVudC5zZXQoJ29uY2FucGxheXRocm91Z2gnLCAnY2FucGxheXRocm91Z2gnKTtcbiAgICAgICAgdGhpcy5lbHRFdmVudC5zZXQoJ29ucGxheWluZycsICdwbGF5aW5nJyk7XG4gICAgICAgIHRoaXMuZWx0RXZlbnQuc2V0KCdvbndhaXRpbmcnLCAnd2FpdGluZycpO1xuICAgICAgICB0aGlzLmVsdEV2ZW50LnNldCgnb25zZWVraW5nJywgJ3NlZWtpbmcnKTtcbiAgICAgICAgdGhpcy5lbHRFdmVudC5zZXQoJ29uc2Vla2VkJywgJ3NlZWtlZCcpO1xuICAgICAgICB0aGlzLmVsdEV2ZW50LnNldCgnb25lbmRlZCcsICdlbmRlZCcpO1xuICAgICAgICB0aGlzLmVsdEV2ZW50LnNldCgnb25kdXJhdGlvbmNoYW5nZScsICdkdXJhdGlvbmNoYW5nZScpO1xuICAgICAgICB0aGlzLmVsdEV2ZW50LnNldCgnb250aW1ldXBkYXRlJywgJ3RpbWV1cGRhdGUnKTtcbiAgICAgICAgdGhpcy5lbHRFdmVudC5zZXQoJ29ucGxheScsICdwbGF5Jyk7XG4gICAgICAgIHRoaXMuZWx0RXZlbnQuc2V0KCdvbnBhdXNlJywgJ3BhdXNlJyk7XG4gICAgICAgIHRoaXMuZWx0RXZlbnQuc2V0KCdvbnJhdGVjaGFuZ2UnLCAncmF0ZWNoYW5nZScpO1xuICAgICAgICB0aGlzLmVsdEV2ZW50LnNldCgnb25yZXNpemUnLCAncmVzaXplJyk7XG4gICAgICAgIHRoaXMuZWx0RXZlbnQuc2V0KCdvbnZvbHVtZWNoYW5nZScsICd2b2x1bWVjaGFuZ2UnKTtcblxuICAgIH1cblxuICAgIC8qKlxuICAgICogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQgc2hvcmN1dFxuICAgICogQHBhcmFtIHtzdHJpbmd9IGlkIHRoZSBlbGVtZW50IGlkXG4gICAgKiBAcmV0dXJuIHtvYmplY3R9IERPTUVsZW1lbnRcbiAgICAqL1xuICAgIGlkKGlkKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRvYy5nZXRFbGVtZW50QnlJZChpZCk7XG4gICAgfVxuICAgIC8qKlxuICAgICogZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCBzaG9yY3V0XG4gICAgKiBAcGFyYW0ge3N0cmluZ30gcXVlcnkgdGhlIHNlbGVjdG9yXG4gICAgKiBAcmV0dXJuIHtET01Ob2RlTGlzdH1cbiAgICAqL1xuICAgIHF1ZXJ5KHF1ZXJ5KSB7XG4gICAgICAgIGxldCByZXMgPSB0aGlzLmRvYy5xdWVyeVNlbGVjdG9yQWxsKHF1ZXJ5KTtcbiAgICAgICAgaWYgKHJlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVzO1xuICAgICAgICB9XG4gICAgICAgIGVsc2V7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICogZG9jdW1lbnQucXVlcnlTZWxlY3RvciBzaG9yY3V0XG4gICAgKiBAcGFyYW0ge3N0cmluZ30gcXVlcnkgdGhlIHNlbGVjdG9yXG4gICAgKiBAcmV0dXJuIHtET01FbGVtZW50fVxuICAgICovXG4gICAgcXVlcnlGaXJzdChxdWVyeSkge1xuICAgICAgICByZXR1cm4gdGhpcy5kb2MucXVlcnlTZWxlY3RvcihxdWVyeSk7XG4gICAgfVxuXG4gICAgc2VsZWN0KHEpe1xuICAgICAgICBsZXQgcmVzID0gdGhpcy5pZChxKTtcbiAgICAgICAgaWYgKHJlcyA9PT0gbnVsbCkge1xuICAgICAgICAgICAgcmVzID0gdGhpcy5xdWVyeUZpcnN0KHEpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgKiBhcHBlbmQgYW4gZWxlbWVudCB0byBhIHBhcmVudFxuICAgICogQHBhcmFtIHtET01FbGVtZW50fHN0cmluZ30gcGFyZW50IHRoZSBlbGVtZW50IHRvIGFwcGVuZCB0byBvciBpdHMgaWRcbiAgICAqIEBwYXJhbSB7RE9NRWxlbWVudHxvYmplY3R9IGVsdCBvciB0ZW1wbGF0ZSBvYmplY3QgdG8gYXBwZW5kIHRvIHBhcmVudFxuICAgICogQHJldHVybiB7RE9NRWxlbWVudH0gb2JqZWN0XG4gICAgKi9cbiAgICBhcHBlbmQocGFyZW50LCBlbHQsIGdldFBhcmVudCkge1xuICAgICAgICBpZiAoZWx0LnRhZyAhPT0gdW5kZWZpbmVkIHx8IGVsdC5pc1RleHROb2RlICE9PSB1bmRlZmluZWQgKSB7XG4gICAgICAgICAgICBlbHQgPSB0aGlzLmNyZWF0ZShlbHQpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2YgcGFyZW50ICE9ICdvYmplY3QnKSB7XG4gICAgICAgICAgICBwYXJlbnQgPSB0aGlzLnNlbGVjdChwYXJlbnQpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHBhcmVudCAhPT0gbnVsbCAmJiBwYXJlbnQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgbGV0IHJlcyA9IHBhcmVudC5hcHBlbmRDaGlsZChlbHQpO1xuICAgICAgICAgICAgaWYgKGdldFBhcmVudCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgcmVzID0gcGFyZW50O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHJlcztcbiAgICAgICAgfVxuICAgICAgICB0aHJvdyBwYXJlbnQgKyAnIGNhbm5vdCBiZSBmb3VuZCc7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgKiBhcHBlbmQgYW4gZWxlbWVudCBiZWZvcmUgYW5vdGhlclxuICAgICogQHBhcmFtIGVsdCBtaXhlZCB0aGUgZWxlbWVudCB0byBhcHBlbmQgdG8gb3IgaXRzIGlkXG4gICAgKiBAcGFyYW0gbl9lbHQgbWl4ZWQgRE9NRWxlbWVudCBvciB0ZW1wbGF0ZSBvYmplY3QgdG8gYXBwZW5kIHRvIHBhcmVudFxuICAgICogQHJldHVybiBvYmplY3QgRE9NRWxlbWVudFxuICAgICovXG4gICAgYXBwZW5kQmVmb3JlKGVsdCwgbl9lbHQpIHtcbiAgICAgICAgaWYgKG5fZWx0LnRhZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBuX2VsdCA9IHRoaXMuY3JlYXRlKG5fZWx0KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIGVsdCAhPSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgZWx0ID0gdGhpcy5zZWxlY3QoZWx0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlbHQgIT09IG51bGwgJiYgZWx0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJldHVybiBlbHQucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUobl9lbHQsIGVsdCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aHJvdyBlbHQgKyAnIGNhbm5vdCBiZSBmb3VuZCc7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgKiBhcHBlbmQgYW4gZWxlbWVudCBhZnRlciBhbm90aGVyXG4gICAgKiBAcGFyYW0gZWx0IG1peGVkIHRoZSBlbGVtZW50IHRvIGFwcGVuZCB0byBvciBpdHMgaWRcbiAgICAqIEBwYXJhbSBuX2VsdCBtaXhlZCBET01FbGVtZW50IG9yIHRlbXBsYXRlIG9iamVjdCB0byBhcHBlbmQgdG8gcGFyZW50XG4gICAgKiBAcmV0dXJuIG9iamVjdCBET01FbGVtZW50XG4gICAgKi9cbiAgICBhcHBlbmRBZnRlcihlbHQsIG5fZWx0KSB7XG4gICAgICAgIGlmIChuX2VsdC50YWcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgbl9lbHQgPSB0aGlzLmNyZWF0ZShuX2VsdCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiBlbHQgIT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIGVsdCA9IHRoaXMuc2VsZWN0KGVsdCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZWx0ICE9PSBudWxsICYmIGVsdCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm4gZWx0LnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKG5fZWx0LCBlbHQubmV4dFNpYmxpbmcpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhyb3cgZWx0ICsgJyBjYW5ub3QgYmUgZm91bmQnO1xuICAgIH1cblxuICAgIC8qKlxuICAgICogYXBwZW5kIGFuIGVsZW1lbnQgdG8gYSBwYXJlbnQgYXMgaXRzIGZpcnN0IGNoaWxkXG4gICAgKiBAcGFyYW0gcGFyZW50IG1peGVkIHRoZSBlbGVtZW50IHRvIGFwcGVuZCB0byBvciBpdHMgaWRcbiAgICAqIEBwYXJhbSBlbHQgbWl4ZWQgRE9NRWxlbWVudCBvciB0ZW1wbGF0ZSBvYmplY3QgdG8gYXBwZW5kIHRvIHBhcmVudFxuICAgICogQHJldHVybiBvYmplY3QgRE9NRWxlbWVudFxuICAgICovXG4gICAgcHJlcGVuZChwYXJlbnQsIGVsdCkge1xuICAgICAgICBpZiAoZWx0LnRhZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBlbHQgPSB0aGlzLmNyZWF0ZShlbHQpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2YgcGFyZW50ICE9ICdvYmplY3QnKSB7XG4gICAgICAgICAgICBwYXJlbnQgPSB0aGlzLnNlbGVjdChwYXJlbnQpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHBhcmVudCAhPT0gbnVsbCAmJiBwYXJlbnQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgaWYgKHBhcmVudC5jaGlsZE5vZGVzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmFwcGVuZChwYXJlbnQsIGVsdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNle1xuICAgICAgICAgICAgICAgIHJldHVybiBwYXJlbnQuaW5zZXJ0QmVmb3JlKGVsdCwgcGFyZW50LmZpcnN0Q2hpbGQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGhyb3cgcGFyZW50ICsgJyBjYW5ub3QgYmUgZm91bmQnO1xuICAgIH1cblxuICAgIC8qKlxuICAgICogcmVwbGFjZSBhbiBlbGVtZW50XG4gICAgKiBAcmV0dXJuIG9iamVjdCBET01FbGVtZW50XG4gICAgKi9cbiAgICByZXBsYWNlKGVsdCwgbl9lbHQpIHtcbiAgICAgICAgaWYgKG5fZWx0LnRhZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBuX2VsdCA9IHRoaXMuY3JlYXRlKG5fZWx0KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIGVsdCAhPSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgZWx0ID0gdGhpcy5zZWxlY3QoZWx0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlbHQgIT09IG51bGwgJiYgZWx0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGxldCBwYXJlbnQgPSBlbHQucGFyZW50Tm9kZTtcbiAgICAgICAgICAgIHJldHVybiBwYXJlbnQucmVwbGFjZUNoaWxkKG5fZWx0LCBlbHQpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhyb3cgZWx0ICsgJyBjYW5ub3QgYmUgZm91bmQnO1xuICAgIH1cblxuICAgIC8qXG4gICAgKiBkZXN0cm95IGEgRG9tIGVsZW1lbnRcbiAgICAqIEBwYXJhbSBlbHQgbWl4ZWQgaWQgb2YgdGhlIGVsZW1lbnQgb3IgZWxlbWVudCBpdHNlbGZcbiAgICAqL1xuICAgIHJlbW92ZShlbHQpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBlbHQgIT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIGVsdCA9IHRoaXMuc2VsZWN0KGVsdCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZWx0ICE9PSBudWxsICYmIGVsdCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm4gZWx0LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZWx0KTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICogZW1wdHkgRG9tIGVsZW1lbnQgZnJvbSBpdCdzIGNoaWxkcmVuLlxuICAgICovXG4gICAgZW1wdHkoZWx0KSB7XG4gICAgICAgIGlmICh0eXBlb2YgZWx0ICE9ICdvYmplY3QnKSB7XG4gICAgICAgICAgICBlbHQgPSB0aGlzLnNlbGVjdChlbHQpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVsdCAhPT0gbnVsbCAmJiBlbHQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgd2hpbGUoZWx0Lmxhc3RDaGlsZCl7XG4gICAgICAgICAgICAgICAgZWx0LnJlbW92ZUNoaWxkKGVsdC5sYXN0Q2hpbGQpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gZWx0O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgKiBjcmVhdGUgYSB0ZXh0IG5vZGVcbiAgICAqIEBwYXJhbSBjb250ZW50IHN0cmluZyB0aGUgY29udGVudCBvZiB0aGUgdGV4dCBub2RlXG4gICAgKi9cbiAgICB0ZXh0Tm9kZShjb250ZW50KXtcbiAgICAgICAgcmV0dXJuIHRoaXMuZG9jLmNyZWF0ZVRleHROb2RlKGNvbnRlbnQpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICogY3JlYXRlIGFuIGVsZW1lbnQgZnJvbSBhIHRlbXBsYXRlIG9iamVjdFxuICAgICogQHBhcmFtIHtvYmplY3R9IGMgdGhlIHRlbXBsYXRlIG9iamVjdCB0byBiZSBjcmVhdGVkXG4gICAgKiBAcmV0dXJuIHtvYmplY3R9IERPTUVsZW1lbnRcbiAgICAqICAgICAgIDxwcmU+XG4gICAgKiAgICAgICB7XG4gICAgKlx0ICAgICAgICBcInRhZ1wiOlwidHlwZSBvZiBlbGVtZW50XCIsXG4gICAgKlx0ICAgICAgICBcImF0dHJcIjp7XG4gICAgKlx0XHQgICAgICAgIFwiYXR0cmlidXRlMVwiOlwidmFsdWUgb2YgYXR0ciAxXCIsXG4gICAgKlx0XHQgICAgICAgIFwiLi4uXCI6XCIuLi5cIlxuICAgICpcdCAgICAgICAgfSxcbiAgICAqXHQgICAgICAgIFwiaW5uZXJcIjpcInRoZSB0ZXh0IGNvbnRlbnQgb2YgdGhlIG5vZGVcIlxuICAgICogICAgICAgfVxuICAgICogICAgICAgPC9wcmU+XG4gICAgKi9cbiAgICBjcmVhdGUoYykge1xuICAgICAgICBsZXQgZWx0ID0gbnVsbDtcbiAgICAgICAgaWYgKGMuaXNUZXh0Tm9kZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBlbHQgPSB0aGlzLnRleHROb2RlKGMuY29udGVudCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZXtcbiAgICAgICAgICAgIC8vIGNoZWNrIGlmIHRoZSBlbGVtZW50IHRhZyBoYXMgYWxyZWFkeSBiZWVuIGNyZWF0ZWQgdG8gY2xvbmUgaXRcbiAgICAgICAgICAgIGlmICghdGhpcy5jcmVhdGVkLmhhcyhjLnRhZykpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNyZWF0ZWQuc2V0KGMudGFnLCB0aGlzLmRvYy5jcmVhdGVFbGVtZW50KGMudGFnKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHQgPSB0aGlzLmNyZWF0ZWQuZ2V0KGMudGFnKS5jbG9uZU5vZGUoKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8gY3JlYXRlIGVsZW1lbnQgYXR0cmlidXRlXG4gICAgICAgICAgICBpZihjLmF0dHIgIT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBmb3IobGV0IGtleSBpbiBjLmF0dHIpXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAvLyBoYW5kbGUgZWxlbWVudCBldmVudCBvciBjZXJ0YWluIHNwZWNpZmljIGF0dHJpYnV0ZVxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5lbHRFdmVudC5oYXMoa2V5KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZWx0LmFkZEV2ZW50TGlzdGVuZXIodGhpcy5lbHRFdmVudC5nZXQoa2V5KSwgYy5hdHRyW2tleV0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2V7XG4gICAgICAgICAgICAgICAgICAgICAgICBzd2l0Y2goa2V5KXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ2NoZWNrZWQnOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsdC5jaGVja2VkID0gYy5hdHRyW2tleV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdjbGFzc05hbWUnOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsdC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJyxjLmF0dHJba2V5XSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsdC5zZXRBdHRyaWJ1dGUoa2V5LGMuYXR0cltrZXldKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gaW4gc29tZSBjYXNlIHlvdSB3YW50IHRvIGJlIGFibGUgdG8gZm9yY2UgaW5uZXJIVE1MIHZhbHVlLCBcbiAgICAgICAgICAgIC8vIC8hXFwgVEhJUyBJUyBCQUFBQUFBRCAhXG4gICAgICAgICAgICBpZiAoYy5pbm5lckZvcmNlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBlbHQuaW5uZXJIVE1MID0gYy5pbm5lckZvcmNlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBhcHBlbmQgZWxlbWVudHMgaWYgdGhlcmUgYXJlIHNvbWUgXG4gICAgICAgICAgICBpZiAoYy5hcHBlbmQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGFwIGluIGMuYXBwZW5kKSB7XG4gICAgICAgICAgICAgICAgICAgIGVsdCA9IHRoaXMuYXBwZW5kKGVsdCwgYy5hcHBlbmRbYXBdLCB0cnVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vIGNyZWF0ZSBpbm5lciB0ZXh0IGNvbnRlbnQgbm9kZSBhbmQgYXBwZW5kIGl0XG4gICAgICAgICAgICBpZiAoYy5pbm5lciAhPT0gdW5kZWZpbmVkKXtcbiAgICAgICAgICAgICAgICBlbHQuYXBwZW5kQ2hpbGQodGhpcy50ZXh0Tm9kZShjLmlubmVyKSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChjLmluaXRDYWxsYmFjayAhPT0gdW5kZWZpbmVkICYmIHR5cGVvZiBjLmluaXRDYWxsYmFjayA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgIGMuaW5pdENhbGxiYWNrKGVsdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZWx0O1xuICAgIH1cblxuICAgIGVsdEZyb21TdHJpbmcoZWx0KSB7XG4gICAgICAgIGxldCBlbCA9IGVsdDtcbiAgICAgICAgdHJ5e1xuICAgICAgICAgICAgZWx0ID0gbmV3IFJhbmdlKCkuY3JlYXRlQ29udGV4dHVhbEZyYWdtZW50KGVsKTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaChlKXtcbiAgICAgICAgICAgIGxldCByYW5nZSA9IHRoaXMuZG9jLmNyZWF0ZVJhbmdlKCk7XG4gICAgICAgICAgICBsZXQgZGl2ID0gdGhpcy5kb2MuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICByYW5nZS5zZWxlY3ROb2RlKHRoaXMuZG9jLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiZGl2XCIpLml0ZW0oMCkpO1xuICAgICAgICAgICAgZWx0ID0gcmFuZ2UuY3JlYXRlQ29udGV4dHVhbEZyYWdtZW50KGVsKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZWx0O1xuICAgIH1cblxuICAgIHJldmVyc2VDcmVhdGUoZWx0KXtcbiAgICAgICAgbGV0IG5fZWx0ID0ge307XG5cbiAgICAgICAgaWYgKGVsdC5ub2RlTmFtZSA9PT0gJyN0ZXh0Jykge1xuICAgICAgICAgICAgbl9lbHQuaXNUZXh0Tm9kZSA9IHRydWU7XG4gICAgICAgICAgICBuX2VsdC5jb250ZW50ID0gZWx0Lm5vZGVWYWx1ZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNle1xuICAgICAgICAgICAgbl9lbHQudGFnID0gZWx0Lm5vZGVOYW1lLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmIChlbHQuYXR0cmlidXRlcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgaWYgKGVsdC5hdHRyaWJ1dGVzLmxlbmd0aCA+MCkge1xuICAgICAgICAgICAgICAgICAgICBuX2VsdC5hdHRyID0ge307XG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSBlbHQuYXR0cmlidXRlcy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbl9lbHQuYXR0cltlbHQuYXR0cmlidXRlcy5pdGVtKGkpLm5hbWVdID0gZWx0LmF0dHJpYnV0ZXMuaXRlbShpKS52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYgKGVsdC5jaGlsZE5vZGVzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBpZiAoZWx0LmNoaWxkTm9kZXMubGVuZ3RoID4wKSB7XG4gICAgICAgICAgICAgICAgICAgIG5fZWx0LmFwcGVuZCA9IFtdO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8PSBlbHQuY2hpbGROb2Rlcy5sZW5ndGggLSAxOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5fZWx0LmFwcGVuZC5wdXNoKHRoaXMucmV2ZXJzZUNyZWF0ZShlbHQuY2hpbGROb2Rlcy5pdGVtKGkpKSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbl9lbHQ7XG4gICAgfVxuXG4gICAgcmV2ZXJzZUNyZWF0ZUZyb21TdHJpbmcoZWx0KXtcbiAgICAgICAgcmV0dXJuIHRoaXMucmV2ZXJzZUNyZWF0ZSh0aGlzLmVsdEZyb21TdHJpbmcoZWx0KSk7XG4gICAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEpzaTsiXX0=
