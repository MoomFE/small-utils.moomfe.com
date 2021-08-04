---
sidebar: auto
---

# 验证器

## 数字

### hasMumbers
- 判断字符串是否包含数字
```js
import { hasMumbers } from '@moomfe/small-utils/validator';

hasMumbers('666'); // -> true
hasMumbers('6A6'); // -> true
hasMumbers('AAA'); // -> false
```

### isMumbers
- 判断字符串从开头到结尾是否都是数字
```js
import { isMumbers } from '@moomfe/small-utils/validator';

isMumbers('666'); // -> true
isMumbers('6A6'); // -> false
isMumbers('AAA'); // -> false
```

### 其他
```js
import {
  // 判断字符串是否包含数字的正则字符串
  hasMumbersRegStr,
  // 判断字符串是否包含数字的正则
  hasMumbersReg,
  // 判断字符串从开头到结尾是否都是数字的正则字符串
  isMumbersRegStr,
  // 判断字符串从开头到结尾是否都是数字的正则
  isMumbersReg
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