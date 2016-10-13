# node-error
Error module handling sprintf error message formatting and errors chaining

## Install

```
npm install --save "@petitchevalroux/error"
```

## Sprintf formatting

```javascript
var Error = require("@petitchevalroux/error");
var error = new Error("this is a sample message with object:%j", {"foo":"bar"});
console.log(error.message);
```

### Output

```
this is a sample message with object:{"foo":"bar"}
```

For more on formatting using sprintf syntax see: [sprintf-js](https://www.npmjs.com/package/sprintf-js)

## Error chaining

```javascript
var Error = require("@petitchevalroux/error");
var error = new Error("error #%d",2, new Error("error #%d", 1));
console.log(error);
```

### Output

```
CustomError: error #2
    at CustomError.Exception (/tmp/test/node_modules/trace-error/dist/Exception.js:82:17)
    at CustomError.TraceError (/tmp/test/node_modules/trace-error/dist/TraceError.js:173:84)
    at new CustomError (/tmp/test/node_modules/@petitchevalroux/error/src/error.js:23:16)
    at Object.<anonymous> (/tmp/test/sample1.js:2:13)
    at Module._compile (module.js:570:32)
    at Object.Module._extensions..js (module.js:579:10)
    at Module.load (module.js:487:32)
    at tryModuleLoad (module.js:446:12)
    at Function.Module._load (module.js:438:3)
    at Module.runMain (module.js:604:10)
    CustomError: error #1
        at CustomError.Exception (/tmp/test/node_modules/trace-error/dist/Exception.js:82:17)
        at CustomError.TraceError (/tmp/test/node_modules/trace-error/dist/TraceError.js:173:84)
        at new CustomError (/tmp/test/node_modules/@petitchevalroux/error/src/error.js:23:16)
        at Object.<anonymous> (/tmp/test/sample1.js:2:38)
        at Module._compile (module.js:570:32)
        at Object.Module._extensions..js (module.js:579:10)
        at Module.load (module.js:487:32)
        at tryModuleLoad (module.js:446:12)
        at Function.Module._load (module.js:438:3)
        at Module.runMain (module.js:604:10)
```

For more on error chaining see: [TraceError](https://www.npmjs.com/package/trace-error)
