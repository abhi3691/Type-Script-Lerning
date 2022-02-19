"use strict";
var list;
(function (list) {
    list[list["one"] = 1] = "one";
    list[list["two"] = 2] = "two";
    list[list["three"] = 3] = "three";
})(list || (list = {}));
console.log(list[2]);
