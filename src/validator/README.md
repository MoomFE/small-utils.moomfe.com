---
sidebar: auto
---

# 验证器

## 数字

### hasNumbers
- 判断字符串是否包含数字
```js
import { hasNumbers } from '@moomfe/small-utils/validator';

hasNumbers('666'); // -> true
hasNumbers('6A6'); // -> true
hasNumbers('AAA'); // -> false
```

### isNumbers
- 判断字符串从开头到结尾是否都是数字
```js
import { isNumbers } from '@moomfe/small-utils/validator';

isNumbers('666'); // -> true
isNumbers('6A6'); // -> false
isNumbers('AAA'); // -> false
```

### 其他
```js
import {
  // 判断字符串是否包含数字的正则字符串
  hasNumbersRegStr,
  // 判断字符串是否包含数字的正则
  hasNumbersReg,
  // 判断字符串从开头到结尾是否都是数字的正则字符串
  isNumbersRegStr,
  // 判断字符串从开头到结尾是否都是数字的正则
  isNumbersReg
} from '@moomfe/small-utils/validator';
```


## 移动电话号码

### isMobile
- 判断字符串是否是移动电话号码
```js
import { isMobile } from '@moomfe/small-utils/validator';

isMobile('16666666666'); // -> true
isMobile('12345678901'); // -> false
isMobile('016666666666'); // -> false
isMobile('8616666666666'); // -> false
isMobile('+8616666666666'); // -> false
```

### isCompleteMobile
- 判断字符串是否是完整的移动电话号码 ( 添加在手机号前加 0, 86, +86 的可选判断 )
```js
import { isCompleteMobile } from '@moomfe/small-utils/validator';

isCompleteMobile('16666666666'); // -> true
isCompleteMobile('016666666666'); // -> true
isCompleteMobile('8616666666666'); // -> true
isCompleteMobile('+8616666666666'); // -> true
isCompleteMobile('12345678901'); // -> false
isCompleteMobile('116666666666'); // -> false
isCompleteMobile('8716666666666'); // -> false
isCompleteMobile('+8716666666666'); // -> false
```

### 其他
```js
import {
  // 判断字符串是否是移动电话号码的正则字符串
  isMobileRegStr,
  // 判断字符串是否是移动电话号码的正则
  isMobileReg,
  // 判断字符串是否是完整的移动电话号码的正则字符串 ( 添加在手机号前加 0, 86, +86 的可选判断 )
  isCompleteMobileRegStr,
  // 判断字符串是否是完整的移动电话号码的正则 ( 添加在手机号前加 0, 86, +86 的可选判断 )
  isCompleteMobileReg
} from '@moomfe/small-utils/validator';
```


## 电子邮件地址

### isEmail
- 判断字符串是否是电子邮件地址
```js
import { isEmail } from '@moomfe/small-utils/validator';

isEmail('123456789@xxx.com'); // -> true
isEmail('abcdefghi@xxx.com'); // -> true
isEmail('123456789'); // -> false
isEmail('123456789@'); // -> false
isEmail('123456789@xxx'); // -> false
isEmail('123456789@xxx.'); // -> false
```

### 其他
```js
import {
  // 判断字符串是否是电子邮件地址的正则字符串
  isEmailRegStr,
  // 判断字符串是否是电子邮件地址的正则
  isEmailReg
} from '@moomfe/small-utils/validator';
```


## 18 位身份证号码

### isCitizenID
- 判断字符串是否是 18 位身份证号码
```js
import { isCitizenID } from '@moomfe/small-utils/validator';

isCitizenID('360602199901239999'); // -> true
isCitizenID('360609999999999999'); // -> false
```

### 其他
```js
import {
  // 判断字符串是否是 18 位身份证号码的正则字符串
  isCitizenIDRegStr,
  // 判断字符串是否是 18 位身份证号码的正则
  isCitizenIDReg
} from '@moomfe/small-utils/validator';
```
