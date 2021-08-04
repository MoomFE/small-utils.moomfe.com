---
sidebar: auto
---

# 工具方法

## isPlainObject
- 判断传入对象是否是纯粹的对象
```js
  import { isPlainObject } from '@moomfe/small-utils/utils';

  isPlainObject({}); // -> true
  isPlainObject(Object.create(null)); // -> true
  isPlainObject([]); // -> false
```

## isNumber
- 判断传入对象是否是 Number 类型, 并且不为 NaN
```js
  import { isNumber } from '@moomfe/small-utils/utils';

  isNumber(666); // -> true
  isNumber(new Number(666)); // -> true
  isNumber(NaN); // -> false
  isNumber('666'); // -> false
```

## isNumeric
- 判断传入参数是否是数字, 支持判断数字字符串
```js
  import { isNumeric } from '@moomfe/small-utils/utils';

  isNumeric(666); // -> true
  isNumeric('666'); // -> true
  isNumeric(new Number(666)); // -> true
  isNumeric(NaN); // -> false
```

## isString
- 判断传入对象是否是 String 类型
```js
  import { isString } from '@moomfe/small-utils/utils';

  isString('666'); // -> true
  isString(new String('666')); // -> true
  isString(666); // -> false
```

## isObject
- 判断传入参数是否是 Object 类型, 并且不为 null
```js
  import { isObject } from '@moomfe/small-utils/utils';

  isObject({}); // -> true
  isObject([]); // -> true
  isObject(() => {}); // -> false
  isObject(function() {}); // -> false
  isObject(666); // -> false
```

## isFunction
  - 判断传入参数是否是 Function 类型
```js
  import { isFunction } from '@moomfe/small-utils/utils';

  isFunction(() => {}); // -> true
  isFunction(function() {}); // -> true
  isFunction(666); // -> false
```

## isReference
- 判断传入参数是否是引用类型
```js
  import { isReference } from '@moomfe/small-utils/utils';

  isReference({}); // -> true
  isReference([]); // -> true
  isReference(() => {}); // -> true
  isReference(true); // -> false
  isReference(false); // -> false
  isReference(null); // -> false
  isReference(undefined); // -> false
  isReference(666); // -> false
  isReference(666n); // -> false
  isReference('666'); // -> false
  isReference(Symbol('666')); // -> false
```

## isPrimitive
- 判断传入参数是否是原始类型 ( `isReference` 方法的反向 )
```js
  import { isPrimitive } from '@moomfe/small-utils/utils';

  isPrimitive(true); // -> true
  isPrimitive(false); // -> true
  isPrimitive(null); // -> true
  isPrimitive(undefined); // -> true
  isPrimitive(666); // -> true
  isPrimitive(666n); // -> true
  isPrimitive('666'); // -> true
  isPrimitive(Symbol('666')); // -> true
  isPrimitive({}); // -> false
  isPrimitive([]); // -> false
  isPrimitive(() => {}); // -> false
```

## isPromise
- 判断传入参数是否是类似于 Promise 的对象
```js
  import { isPromise } from '@moomfe/small-utils/utils';

  isPromise(new Promise(() => {})) // -> true
  isPromise(Promise.resolve()) // -> true
  isPromise(Promise.reject()) // -> true
  isPromise({ then() {}, catch() {} }) // -> true
  isPromise({ then: true, catch: true }) // -> false
  isPromise({ then: true }) // -> false
  isPromise({}) // -> false
  isPromise(null) // -> false
```