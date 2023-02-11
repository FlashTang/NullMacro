(function ($global) { "use strict";
var Main = function() { };
Main.main = function() {
	var a = { b : { }};
	if(!NullTools.hasNull(a,["b","c","d"])) {
		a.b.c.d.a = 2;
	}
	if(!NullTools.hasNull(a,["b","c","d","a"])) {
		a.b.c.d.a();
	}
	if(!NullTools.hasNull(a,["b"])) {
		a.b.d = 3;
	}
};
var NullTools = function() { };
NullTools.hasNull = function(value,keys) {
	var _g = 0;
	while(_g < keys.length) {
		var s = keys[_g];
		++_g;
		if(Reflect.getProperty(value,s) == null) {
			return true;
		}
	}
	return false;
};
var Reflect = function() { };
Reflect.getProperty = function(o,field) {
	var tmp;
	if(o == null) {
		return null;
	} else {
		var tmp1;
		if(o.__properties__) {
			tmp = o.__properties__["get_" + field];
			tmp1 = tmp;
		} else {
			tmp1 = false;
		}
		if(tmp1) {
			return o[tmp]();
		} else {
			return o[field];
		}
	}
};
var haxe_iterators_ArrayIterator = function(array) {
	this.current = 0;
	this.array = array;
};
haxe_iterators_ArrayIterator.prototype = {
	hasNext: function() {
		return this.current < this.array.length;
	}
	,next: function() {
		return this.array[this.current++];
	}
};
Main.main();
})({});
