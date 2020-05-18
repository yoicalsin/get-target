"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @author Yoni Calsin <helloyonicb@gmail.com>
 * @description builder's extractor of a class, for handling of decorators
 * @param object Class or function constructor !
 */
exports.getTarget = (object) => object instanceof Function ? object : object.constructor;
