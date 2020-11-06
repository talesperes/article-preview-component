"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.navigatorShare = void 0;

var navigatorShare = function navigatorShare(id) {
  var hasShare = navigator.share;
  var shareData = {
    title: 'Article Preview Component',
    url: id
  };
  if (hasShare) navigator.share(shareData);else navigator.clipboard.writeText("".concat(shareData.title, " - ").concat(shareData.url));
};

exports.navigatorShare = navigatorShare;