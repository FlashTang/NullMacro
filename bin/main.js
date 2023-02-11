(function ($global) { "use strict";
var Main = function() { };
Main.main = function() {
	var a = { b : { }};
	if(a != null) {
		if(a.b != null) {
			if(a.b.c != null) {
				if(a.b.c.d != null) {
					a.b.c.d.a = 2;
				}
			}
		}
	}
	if(a != null) {
		if(a.b != null) {
			if(a.b.c != null) {
				if(a.b.c.d != null) {
					if(a.b.c.d.a != null) {
						a.b.c.d.a();
					}
				}
			}
		}
	}
	if(a != null) {
		if(a.b != null) {
			a.b.d = 3;
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
