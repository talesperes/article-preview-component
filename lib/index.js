"use strict";

var _share = require("./share.js");

var _navigator = require("./navigator.js");

var _uuid = require("./uuid.js");

_share.share.forEach(function (value) {
  if (value.actived) {
    var button = document.querySelector("#".concat(value.name));
    button.removeAttribute('disabled');
    button.addEventListener('click', function () {
      return (0, _navigator.navigatorShare)((0, _uuid.uuid)());
    });
  }
});