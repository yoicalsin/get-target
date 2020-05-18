## Get Target

builder's extractor of a class, for handling of decorators

<a href="https://github.com/yoicalsin/get-target"><img src="https://img.shields.io/spiget/stars/1000?color=brightgreen&label=Star&logo=github" /></a>
<a href="https://www.npmjs.com/get-target" target="_blank">
<img src="https://img.shields.io/npm/v/get-target" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/get-target" target="_blank">
<img src="https://img.shields.io/npm/l/get-target" alt="Package License" /></a>
<a href="https://www.npmjs.com/get-target" target="_blank">
<img src="https://img.shields.io/npm/dm/get-target" alt="NPM Downloads" /></a>
<a href="https://github.com/yoicalsin/get-target" target="_blank">
<img src="https://s3.amazonaws.com/assets.coveralls.io/badges/coveralls_95.svg" alt="Coverage" /></a>
<a href="https://github.com/yoicalsin/get-target"><img src="https://img.shields.io/badge/Github%20Page-get.target-yellow?style=flat-square&logo=github" /></a>
<a href="https://github.com/yoicalsin"><img src="https://img.shields.io/badge/Author-Yoni%20Calsin-blueviolet?style=flat-square&logo=appveyor" /></a>
<a href="https://twitter.com/yoicalsin" target="_blank">
<img src="https://img.shields.io/twitter/follow/yoicalsin.svg?style=social&label=Follow"></a>

## 🏆 Installation

```bash
# Using npm
npm install --save get-target

# Using yarn
yarn add --save get-target
```

## 🏳‍🌈 Usage

```ts
import getTarget from 'get-target';

// For class decorator
function Module(options) {
   return target => {
      target = getTarget(target);
      // Here you can use your builder to store in ReflecMetadata !
   };
}

// For param decorator
function Param(options) {
   return (target, property, index) => {
      target = getTarget(target);
      // Here you can use your builder to store in ReflecMetadata !
   };
}
```

## ⭐ Support for

`get-target` is an open source project licensed by [MIT](LICENSE). You can grow thanks to the sponsors and the support of the amazing sponsors. If you want to join them, [contact me here](mailto:helloyonicb@gmail.com).

## 🎩 Stay in touch

-  Github [@yoicalsin](https://github.com/yoicalsin)
-  Twitter [@yoicalsin](https://twitter.com/yoicalsin)
-  Instagram [@yoicalsin](https://instagram.com/yoicalsin)
-  Medium [@yoicalsin](https://medium.com/yoicalsin)

## Contributors

Thanks to the wonderful people who collaborate with me !

## 📜 License

`get-target` under [License MIT.](LICENSE)
