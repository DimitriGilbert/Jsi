(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.Jsi = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

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
  * @param c object the template object to be created
  * @return object DOMElement
  *<exemple>
  *{
  *	"tag":"type of element",
  *	"attr":{
  *		"attribute1":"value of attr 1",
  *		"...":"..."
  *	},
  *	"inner":"the text content of the node"
  *}
  *</exemple>
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
					this.created.set(c.tagdocument.createElement(c.tag));
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
	}]);

	return Jsi;
}();

module.exports = Jsi;

},{}]},{},[1])(1)
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Vzci9saWIvbm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2Jyb3dzZXItcGFjay9fcHJlbHVkZS5qcyIsImVzNi9qc2kuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7OztJQ0FNO0FBQ0wsVUFESyxHQUNMLENBQVksR0FBWixFQUFnQjt3QkFEWCxLQUNXOztBQUNmLE1BQUksUUFBUSxTQUFSLEVBQW1CO0FBQ3RCLFNBQU0sUUFBTixDQURzQjtHQUF2QjtBQUdBLE9BQUssR0FBTCxHQUFXLEdBQVgsQ0FKZTtBQUtmLE9BQUssT0FBTCxHQUFlLElBQUksR0FBSixFQUFmLENBTGU7O0FBT2YsT0FBSyxRQUFMLEdBQWdCLElBQUksR0FBSixFQUFoQixDQVBlO0FBUWYsT0FBSyxRQUFMLENBQWMsR0FBZCxDQUFrQixTQUFsQixFQUE2QixPQUE3QixFQVJlO0FBU2YsT0FBSyxRQUFMLENBQWMsR0FBZCxDQUFrQixVQUFsQixFQUE4QixRQUE5QixFQVRlO0FBVWYsT0FBSyxRQUFMLENBQWMsR0FBZCxDQUFrQixTQUFsQixFQUE2QixPQUE3QixFQVZlO0FBV2YsT0FBSyxRQUFMLENBQWMsR0FBZCxDQUFrQixTQUFsQixFQUE2QixPQUE3QixFQVhlO0FBWWYsT0FBSyxRQUFMLENBQWMsR0FBZCxDQUFrQixZQUFsQixFQUFnQyxVQUFoQyxFQVplO0FBYWYsT0FBSyxRQUFMLENBQWMsR0FBZCxDQUFrQixVQUFsQixFQUE4QixRQUE5QixFQWJlO0FBY2YsT0FBSyxRQUFMLENBQWMsR0FBZCxDQUFrQixnQkFBbEIsRUFBb0MsY0FBcEMsRUFkZTtBQWVmLE9BQUssUUFBTCxDQUFjLEdBQWQsQ0FBa0IsaUJBQWxCLEVBQXFDLGVBQXJDLEVBZmU7QUFnQmYsT0FBSyxRQUFMLENBQWMsR0FBZCxDQUFrQixRQUFsQixFQUE0QixNQUE1QixFQWhCZTtBQWlCZixPQUFLLFFBQUwsQ0FBYyxHQUFkLENBQWtCLE9B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Q0FERTtJQUFILENBR0EsT0FBTSxDQUFOLEVBQVE7QUFDUCxRQUFJLFFBQVEsS0FBSyxHQUFMLENBQVMsV0FBVCxFQUFSLENBREc7QUFFUCxRQUFJLE1BQU0sS0FBSyxHQUFMLENBQVMsYUFBVCxDQUF1QixLQUF2QixDQUFOLENBRkc7QUFHUCxVQUFNLFVBQU4sQ0FBaUIsS0FBSyxHQUFMLENBQVMsb0JBQVQsQ0FBOEIsS0FBOUIsRUFBcUMsSUFBckMsQ0FBMEMsQ0FBMUMsQ0FBakIsRUFITztBQUlQLFVBQU0sTUFBTSx3QkFBTixDQUErQixFQUEvQixDQUFOLENBSk87SUFBUjtBQU1BLFVBQU8sR0FBUCxDQVhrQjs7OztRQXBUZDs7O0FBbVVOLE9BQU8sT0FBUCxHQUFpQixHQUFqQiIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJjbGFzcyBKc2l7XG5cdGNvbnN0cnVjdG9yKGRvYyl7XG5cdFx0aWYgKGRvYyA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRkb2MgPSBkb2N1bWVudDtcblx0XHR9XG5cdFx0dGhpcy5kb2MgPSBkb2M7XG5cdFx0dGhpcy5jcmVhdGVkID0gbmV3IE1hcCgpO1xuXG5cdFx0dGhpcy5lbHRFdmVudCA9IG5ldyBNYXAoKTtcblx0XHR0aGlzLmVsdEV2ZW50LnNldCgnb25jbGljaycsICdjbGljaycpO1xuXHRcdHRoaXMuZWx0RXZlbnQuc2V0KCdvbmNoYW5nZScsICdjaGFuZ2UnKTtcblx0XHR0aGlzLmVsdEV2ZW50LnNldCgnb25mb2N1cycsICdmb2N1cycpO1xuXHRcdHRoaXMuZWx0RXZlbnQuc2V0KCdvbmtleXVwJywgJ2tleXVwJyk7XG5cdFx0dGhpcy5lbHRFdmVudC5zZXQoJ29ua2V5cHJlc3MnLCAna2V5cHJlc3MnKTtcblx0XHR0aGlzLmVsdEV2ZW50LnNldCgnb25zdWJtaXQnLCAnc3VibWl0Jyk7XG5cdFx0dGhpcy5lbHRFdmVudC5zZXQoJ29uYW5pbWF0aW9uZW5kJywgJ2FuaW1hdGlvbmVuZCcpO1xuXHRcdHRoaXMuZWx0RXZlbnQuc2V0KCdvbnRyYW5zaXRpb25lbmQnLCAndHJhbnNpdGlvbmVuZCcpO1xuXHRcdHRoaXMuZWx0RXZlbnQuc2V0KCdvbmNvcHknLCAnY29weScpO1xuXHRcdHRoaXMuZWx0RXZlbnQuc2V0KCdvbmN1dCcsICdjdXQnKTtcblx0XHR0aGlzLmVsdEV2ZW50LnNldCgnb25kYmxjbGljaycsICdkYmxjbGljaycpO1xuXHRcdHRoaXMuZWx0RXZlbnQuc2V0KCdvbmludmFsaWQnLCAnaW52YWxpZCcpO1xuXHRcdHRoaXMuZWx0RXZlbnQuc2V0KCdvbm1vdXNlZG93bicsICdtb3VzZWRvd24nKTtcblx0XHR0aGlzLmVsdEV2ZW50LnNldCgnb25tb3VzZXVwJywgJ21vdXNldXAnKTtcblx0XHR0aGlzLmVsdEV2ZW50LnNldCgnb25tb3VzZWVudGVyJywgJ21vdXNlZW50ZXInKTtcblx0XHR0aGlzLmVsdEV2ZW50LnNldCgnb25tb3VzZWxlYXZlJywgJ21vdXNlbGVhdmUnKTtcblx0XHR0aGlzLmVsdEV2ZW50LnNldCgnb25tb3VzZW1vdmUnLCAnbW91c2Vtb3ZlJyk7XG5cdFx0dGhpcy5lbHRFdmVudC5zZXQoJ29ubW91c2VvdXQnLCAnbW91c2VvdXQnKTtcblx0XHR0aGlzLmVsdEV2ZW50LnNldCgnb25tb3VzZW92ZXInLCAnbW91c2VvdmVyJyk7XG5cdFx0dGhpcy5lbHRFdmVudC5zZXQoJ29ucGFzdGUnLCAncGFzdGUnKTtcblx0XHR0aGlzLmVsdEV2ZW50LnNldCgnb25yZXNpemUnLCAncmVzaXplJyk7XG5cdFx0dGhpcy5lbHRFdmVudC5zZXQoJ29uc2Nyb2xsJywgJ3Njcm9sbCcpO1xuXHRcdHRoaXMuZWx0RXZlbnQuc2V0KCdvbnNlbGVjdCcsICdzZWxlY3QnKTtcblx0XHR0aGlzLmVsdEV2ZW50LnNldCgnb250b3VjaHN0YXJ0JywgJ3RvdWNoc3RhcnQnKTtcblx0XHR0aGlzLmVsdEV2ZW50LnNldCgnb250b3VjaG1vdmUnLCAndG91Y2htb3ZlJyk7XG5cdFx0dGhpcy5lbHRFdmVudC5zZXQoJ29udG91Y2hlbmQnLCAndG91Y2hlbmQnKTtcblx0fVxuXG5cdC8qKlxuXHQqIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkIHNob3JjdXRcblx0KiBAcGFyYW0ge3N0cmluZ30gaWQgdGhlIGVsZW1lbnQgaWRcblx0KiBAcmV0dXJuIHtvYmplY3R9IERPTUVsZW1lbnRcblx0Ki9cblx0aWQoaWQpIHtcblx0XHRyZXR1cm4gdGhpcy5kb2MuZ2V0RWxlbWVudEJ5SWQoaWQpO1xuXHR9XG5cdC8qKlxuXHQqIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwgc2hvcmN1dFxuXHQqIEBwYXJhbSB7c3RyaW5nfSBxdWVyeSB0aGUgc2VsZWN0b3Jcblx0KiBAcmV0dXJuIHtET01Ob2RlTGlzdH1cblx0Ki9cblx0cXVlcnkocXVlcnkpIHtcblx0XHR2YXIgcmVzID0gdGhpcy5kb2MucXVlcnlTZWxlY3RvckFsbChxdWVyeSk7XG5cdFx0aWYgKHJlcy5sZW5ndGggPiAwKSB7XG5cdFx0XHRyZXR1cm4gcmVzO1xuXHRcdH1cblx0XHRlbHNle1xuXHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0fVxuXHR9XG5cblx0LyoqXG5cdCogZG9jdW1lbnQucXVlcnlTZWxlY3RvciBzaG9yY3V0XG5cdCogQHBhcmFtIHtzdHJpbmd9IHF1ZXJ5IHRoZSBzZWxlY3RvclxuXHQqIEByZXR1cm4ge0RPTUVsZW1lbnR9XG5cdCovXG5cdHF1ZXJ5Rmlyc3QocXVlcnkpIHtcblx0XHRyZXR1cm4gdGhpcy5kb2MucXVlcnlTZWxlY3RvcihxdWVyeSk7XG5cdH1cblxuXHRzZWxlY3QocSl7XG5cdFx0bGV0IHJlcyA9IHRoaXMuaWQocSk7XG5cdFx0aWYgKHJlcyA9PT0gbnVsbCkge1xuXHRcdFx0cmVzID0gdGhpcy5xdWVyeUZpcnN0KHEpO1xuXHRcdH1cblx0XHRyZXR1cm4gcmVzO1xuXHR9XG5cblx0LyoqXG5cdCogYXBwZW5kIGFuIGVsZW1lbnQgdG8gYSBwYXJlbnRcblx0KiBAcGFyYW0ge0RPTUVsZW1lbnR8c3RyaW5nfSBwYXJlbnQgdGhlIGVsZW1lbnQgdG8gYXBwZW5kIHRvIG9yIGl0cyBpZFxuXHQqIEBwYXJhbSB7RE9NRWxlbWVudHxvYmplY3R9IGVsdCBvciB0ZW1wbGF0ZSBvYmplY3QgdG8gYXBwZW5kIHRvIHBhcmVudFxuXHQqIEByZXR1cm4ge0RPTUVsZW1lbnR9IG9iamVjdFxuXHQqL1xuXHRhcHBlbmQocGFyZW50LCBlbHQsIGdldFBhcmVudCkge1xuXHRcdGlmIChlbHQudGFnICE9PSB1bmRlZmluZWQgfHwgZWx0LmlzVGV4dE5vZGUgIT09IHVuZGVmaW5lZCApIHtcblx0XHRcdGVsdCA9IHRoaXMuY3JlYXRlKGVsdCk7XG5cdFx0fVxuXHRcdGlmICh0eXBlb2YgcGFyZW50ICE9ICdvYmplY3QnKSB7XG5cdFx0XHRwYXJlbnQgPSB0aGlzLnNlbGVjdChwYXJlbnQpO1xuXHRcdH1cblxuXHRcdGlmIChwYXJlbnQgIT09IG51bGwgJiYgcGFyZW50ICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdGxldCByZXMgPSBwYXJlbnQuYXBwZW5kQ2hpbGQoZWx0KTtcblx0XHRcdGlmIChnZXRQYXJlbnQgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHRyZXMgPSBwYXJlbnQ7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gcmVzO1xuXHRcdH1cblx0XHR0aHJvdyBwYXJlbnQgKyAnIGNhbm5vdCBiZSBmb3VuZCc7XG5cdH1cblxuXHQvKipcblx0KiBhcHBlbmQgYW4gZWxlbWVudCBiZWZvcmUgYW5vdGhlclxuXHQqIEBwYXJhbSBlbHQgbWl4ZWQgdGhlIGVsZW1lbnQgdG8gYXBwZW5kIHRvIG9yIGl0cyBpZFxuXHQqIEBwYXJhbSBuX2VsdCBtaXhlZCBET01FbGVtZW50IG9yIHRlbXBsYXRlIG9iamVjdCB0byBhcHBlbmQgdG8gcGFyZW50XG5cdCogQHJldHVybiBvYmplY3QgRE9NRWxlbWVudFxuXHQqL1xuXHRhcHBlbmRCZWZvcmUoZWx0LCBuX2VsdCkge1xuXHRcdGlmIChuX2VsdC50YWcgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0bl9lbHQgPSB0aGlzLmNyZWF0ZShuX2VsdCk7XG5cdFx0fVxuXHRcdGlmICh0eXBlb2YgZWx0ICE9ICdvYmplY3QnKSB7XG5cdFx0XHRlbHQgPSB0aGlzLnNlbGVjdChlbHQpO1xuXHRcdH1cblxuXHRcdGlmIChlbHQgIT09IG51bGwgJiYgZWx0ICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdHJldHVybiBlbHQucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUobl9lbHQsIGVsdCk7XG5cdFx0fVxuXG5cdFx0dGhyb3cgZWx0ICsgJyBjYW5ub3QgYmUgZm91bmQnO1xuXHR9XG5cblx0LyoqXG5cdCogYXBwZW5kIGFuIGVsZW1lbnQgYWZ0ZXIgYW5vdGhlclxuXHQqIEBwYXJhbSBlbHQgbWl4ZWQgdGhlIGVsZW1lbnQgdG8gYXBwZW5kIHRvIG9yIGl0cyBpZFxuXHQqIEBwYXJhbSBuX2VsdCBtaXhlZCBET01FbGVtZW50IG9yIHRlbXBsYXRlIG9iamVjdCB0byBhcHBlbmQgdG8gcGFyZW50XG5cdCogQHJldHVybiBvYmplY3QgRE9NRWxlbWVudFxuXHQqL1xuXHRhcHBlbmRBZnRlcihlbHQsIG5fZWx0KSB7XG5cdFx0aWYgKG5fZWx0LnRhZyAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRuX2VsdCA9IHRoaXMuY3JlYXRlKG5fZWx0KTtcblx0XHR9XG5cdFx0aWYgKHR5cGVvZiBlbHQgIT0gJ29iamVjdCcpIHtcblx0XHRcdGVsdCA9IHRoaXMuc2VsZWN0KGVsdCk7XG5cdFx0fVxuXG5cdFx0aWYgKGVsdCAhPT0gbnVsbCAmJiBlbHQgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0cmV0dXJuIGVsdC5wYXJlbnROb2RlLmluc2VydEJlZm9yZShuX2VsdCwgZWx0Lm5leHRTaWJsaW5nKTtcblx0XHR9XG5cblx0XHR0aHJvdyBlbHQgKyAnIGNhbm5vdCBiZSBmb3VuZCc7XG5cdH1cblxuXHQvKipcblx0KiBhcHBlbmQgYW4gZWxlbWVudCB0byBhIHBhcmVudCBhcyBpdHMgZmlyc3QgY2hpbGRcblx0KiBAcGFyYW0gcGFyZW50IG1peGVkIHRoZSBlbGVtZW50IHRvIGFwcGVuZCB0byBvciBpdHMgaWRcblx0KiBAcGFyYW0gZWx0IG1peGVkIERPTUVsZW1lbnQgb3IgdGVtcGxhdGUgb2JqZWN0IHRvIGFwcGVuZCB0byBwYXJlbnRcblx0KiBAcmV0dXJuIG9iamVjdCBET01FbGVtZW50XG5cdCovXG5cdHByZXBlbmQocGFyZW50LCBlbHQpIHtcblx0XHRpZiAoZWx0LnRhZyAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRlbHQgPSB0aGlzLmNyZWF0ZShlbHQpO1xuXHRcdH1cblx0XHRpZiAodHlwZW9mIHBhcmVudCAhPSAnb2JqZWN0Jykge1xuXHRcdFx0cGFyZW50ID0gdGhpcy5zZWxlY3QocGFyZW50KTtcblx0XHR9XG5cblx0XHRpZiAocGFyZW50ICE9PSBudWxsICYmIHBhcmVudCAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRpZiAocGFyZW50LmNoaWxkTm9kZXMubGVuZ3RoID09PSAwKSB7XG5cdFx0XHRcdHJldHVybiB0aGlzLmFwcGVuZChwYXJlbnQsIGVsdCk7XG5cdFx0XHR9XG5cdFx0XHRlbHNle1xuXHRcdFx0XHRyZXR1cm4gcGFyZW50Lmluc2VydEJlZm9yZShlbHQsIHBhcmVudC5maXJzdENoaWxkKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHR0aHJvdyBwYXJlbnQgKyAnIGNhbm5vdCBiZSBmb3VuZCc7XG5cdH1cblxuXHQvKipcblx0KiByZXBsYWNlIGFuIGVsZW1lbnRcblx0KiBAcmV0dXJuIG9iamVjdCBET01FbGVtZW50XG5cdCovXG5cdHJlcGxhY2UoZWx0LCBuX2VsdCkge1xuXHRcdGlmIChuX2VsdC50YWcgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0bl9lbHQgPSB0aGlzLmNyZWF0ZShuX2VsdCk7XG5cdFx0fVxuXHRcdGlmICh0eXBlb2YgZWx0ICE9ICdvYmplY3QnKSB7XG5cdFx0XHRlbHQgPSB0aGlzLnNlbGVjdChlbHQpO1xuXHRcdH1cblxuXHRcdGlmIChlbHQgIT09IG51bGwgJiYgZWx0ICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdGxldCBwYXJlbnQgPSBlbHQucGFyZW50Tm9kZTtcblx0XHRcdHJldHVybiBwYXJlbnQucmVwbGFjZUNoaWxkKG5fZWx0LCBlbHQpO1xuXHRcdH1cblxuXHRcdHRocm93IGVsdCArICcgY2Fubm90IGJlIGZvdW5kJztcblx0fVxuXG5cdC8qXG5cdCogZGVzdHJveSBhIERvbSBlbGVtZW50XG5cdCogQHBhcmFtIGVsdCBtaXhlZCBpZCBvZiB0aGUgZWxlbWVudCBvciBlbGVtZW50IGl0c2VsZlxuXHQqL1xuXHRyZW1vdmUoZWx0KSB7XG5cdFx0aWYgKHR5cGVvZiBlbHQgIT0gJ29iamVjdCcpIHtcblx0XHRcdGVsdCA9IHRoaXMuc2VsZWN0KGVsdCk7XG5cdFx0fVxuXG5cdFx0aWYgKGVsdCAhPT0gbnVsbCAmJiBlbHQgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0cmV0dXJuIGVsdC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGVsdCk7XG5cdFx0fVxuXHRcdFxuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXG5cdC8qKlxuXHQqIGVtcHR5IERvbSBlbGVtZW50IGZyb20gaXQncyBjaGlsZHJlbi5cblx0Ki9cblx0ZW1wdHkoZWx0KSB7XG5cdFx0aWYgKHR5cGVvZiBlbHQgIT0gJ29iamVjdCcpIHtcblx0XHRcdGVsdCA9IHRoaXMuc2VsZWN0KGVsdCk7XG5cdFx0fVxuXG5cdFx0aWYgKGVsdCAhPT0gbnVsbCAmJiBlbHQgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0d2hpbGUoZWx0Lmxhc3RDaGlsZCl7XG5cdFx0XHRcdGVsdC5yZW1vdmVDaGlsZChlbHQubGFzdENoaWxkKTtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIGVsdDtcblx0XHR9XG5cdH1cblxuXHQvKipcblx0KiBjcmVhdGUgYSB0ZXh0IG5vZGVcblx0KiBAcGFyYW0gY29udGVudCBzdHJpbmcgdGhlIGNvbnRlbnQgb2YgdGhlIHRleHQgbm9kZVxuXHQqL1xuXHR0ZXh0Tm9kZShjb250ZW50KXtcblx0XHRyZXR1cm4gdGhpcy5kb2MuY3JlYXRlVGV4dE5vZGUoY29udGVudCk7XG5cdH1cblxuXHQvKipcblx0KiBjcmVhdGUgYW4gZWxlbWVudCBmcm9tIGEgdGVtcGxhdGUgb2JqZWN0XG5cdCogQHBhcmFtIGMgb2JqZWN0IHRoZSB0ZW1wbGF0ZSBvYmplY3QgdG8gYmUgY3JlYXRlZFxuXHQqIEByZXR1cm4gb2JqZWN0IERPTUVsZW1lbnRcblx0KjxleGVtcGxlPlxuXHQqe1xuXHQqXHRcInRhZ1wiOlwidHlwZSBvZiBlbGVtZW50XCIsXG5cdCpcdFwiYXR0clwiOntcblx0Klx0XHRcImF0dHJpYnV0ZTFcIjpcInZhbHVlIG9mIGF0dHIgMVwiLFxuXHQqXHRcdFwiLi4uXCI6XCIuLi5cIlxuXHQqXHR9LFxuXHQqXHRcImlubmVyXCI6XCJ0aGUgdGV4dCBjb250ZW50IG9mIHRoZSBub2RlXCJcblx0Kn1cblx0KjwvZXhlbXBsZT5cblx0Ki9cblx0Y3JlYXRlKGMpIHtcblx0XHR2YXIgZWx0ID0gbnVsbDtcblx0XHRpZiAoYy5pc1RleHROb2RlICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdGVsdCA9IHRoaXMudGV4dE5vZGUoYy5jb250ZW50KTtcblx0XHR9XG5cdFx0ZWxzZXtcblx0XHRcdC8vIGNoZWNrIGlmIHRoZSBlbGVtZW50IHRhZyBoYXMgYWxyZWFkeSBiZWVuIGNyZWF0ZWQgdG8gY2xvbmUgaXRcblx0XHRcdGlmICghdGhpcy5jcmVhdGVkLmhhcyhjLnRhZykpIHtcblx0XHRcdFx0dGhpcy5jcmVhdGVkLnNldChjLnRhZ2RvY3VtZW50LmNyZWF0ZUVsZW1lbnQoYy50YWcpKTtcblx0XHRcdH1cblx0XHRcdGVsdCA9IHRoaXMuY3JlYXRlZC5nZXQoYy50YWcpLmNsb25lTm9kZSgpO1xuXHRcdFx0XG5cdFx0XHQvLyBjcmVhdGUgZWxlbWVudCBhdHRyaWJ1dGVcblx0XHRcdGlmKGMuYXR0ciAhPT0gdW5kZWZpbmVkKVxuXHRcdFx0e1xuXHRcdFx0XHRmb3IodmFyIGtleSBpbiBjLmF0dHIpXG5cdFx0XHRcdHtcblx0XHRcdFx0XHQvLyBoYW5kbGUgZWxlbWVudCBldmVudCBvciBjZXJ0YWluIHNwZWNpZmljIGF0dHJpYnV0ZVxuXHRcdFx0XHRcdGlmICh0aGlzLmVsdEV2ZW50LmhhcyhrZXkpKSB7XG5cdFx0XHRcdFx0XHRlbHQuYWRkRXZlbnRMaXN0ZW5lcih0aGlzLmVsdEV2ZW50LmdldChrZXkpLCBjLmF0dHJba2V5XSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGVsc2V7XG5cdFx0XHRcdFx0XHRzd2l0Y2goa2V5KXtcblx0XHRcdFx0XHRcdFx0Y2FzZSAnY2hlY2tlZCc6XG5cdFx0XHRcdFx0XHRcdFx0ZWx0LmNoZWNrZWQgPSBjLmF0dHJba2V5XTtcblx0XHRcdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRcdFx0Y2FzZSAnY2xhc3NOYW1lJzpcblx0XHRcdFx0XHRcdFx0XHRlbHQuc2V0QXR0cmlidXRlKCdjbGFzcycsYy5hdHRyW2tleV0pO1xuXHRcdFx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRcdFx0XHRcdGVsdC5zZXRBdHRyaWJ1dGUoa2V5LGMuYXR0cltrZXldKTtcblx0XHRcdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0Ly8gaW4gc29tZSBjYXNlIHlvdSB3YW50IHRvIGJlIGFibGUgdG8gZm9yY2UgaW5uZXJIVE1MIHZhbHVlLCBcblx0XHRcdC8vIC8hXFwgVEhJUyBJUyBCQUFBQUFBRCAhXG5cdFx0XHRpZiAoYy5pbm5lckZvcmNlICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0ZWx0LmlubmVySFRNTCA9IGMuaW5uZXJGb3JjZTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gYXBwZW5kIGVsZW1lbnRzIGlmIHRoZXJlIGFyZSBzb21lIFxuXHRcdFx0aWYgKGMuYXBwZW5kICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0Zm9yICh2YXIgYXAgaW4gYy5hcHBlbmQpIHtcblx0XHRcdFx0XHRlbHQgPSB0aGlzLmFwcGVuZChlbHQsIGMuYXBwZW5kW2FwXSwgdHJ1ZSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdFxuXHRcdFx0Ly8gY3JlYXRlIGlubmVyIHRleHQgY29udGVudCBub2RlIGFuZCBhcHBlbmQgaXRcblx0XHRcdGlmIChjLmlubmVyICE9PSB1bmRlZmluZWQpe1xuXHRcdFx0XHRlbHQuYXBwZW5kQ2hpbGQodGhpcy50ZXh0Tm9kZShjLmlubmVyKSk7XG5cdFx0XHR9XG5cblx0XHRcdGlmIChjLmluaXRDYWxsYmFjayAhPT0gdW5kZWZpbmVkICYmIHR5cGVvZiBjLmluaXRDYWxsYmFjayA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdFx0XHRjLmluaXRDYWxsYmFjayhlbHQpO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiBlbHQ7XG5cdH1cblxuXHRlbHRGcm9tU3RyaW5nKGVsdCkge1xuXHRcdHZhciBlbCA9IGVsdDtcblx0XHR0cnl7XG5cdFx0XHRlbHQgPSBuZXcgUmFuZ2UoKS5jcmVhdGVDb250ZXh0dWFsRnJhZ21lbnQoZWwpO1xuXHRcdH1cblx0XHRjYXRjaChlKXtcblx0XHRcdHZhciByYW5nZSA9IHRoaXMuZG9jLmNyZWF0ZVJhbmdlKCk7XG5cdFx0XHR2YXIgZGl2ID0gdGhpcy5kb2MuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdFx0XHRyYW5nZS5zZWxlY3ROb2RlKHRoaXMuZG9jLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiZGl2XCIpLml0ZW0oMCkpO1xuXHRcdFx0ZWx0ID0gcmFuZ2UuY3JlYXRlQ29udGV4dHVhbEZyYWdtZW50KGVsKTtcblx0XHR9XG5cdFx0cmV0dXJuIGVsdDtcblx0fVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEpzaTsiXX0=
