/**
 * @author Yoni Calsin <helloyonicb@gmail.com>
 * @description builder's extractor of a class, for handling of decorators
 * @param object Class or function constructor !
 */
export const getTarget = (object: Object | Function) =>
   object instanceof Function ? object : object.constructor;
