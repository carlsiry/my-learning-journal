
## 临时笔记

### Javascript 的数据类型

```
0 == false  // true
0 === false // false
```

```
// NaN : not a number
typeof NaN // number
isNaN(NaN) // true
NaN == NaN // false
NaN == false // false
NaN === false // false
NaN == null // false
NaN === null // false
NaN == undefined // false
NaN === undefined // false
```

```
// null : empty object
null == null    // true 用于检测对象是否为空
null === null   // true
null == undefined // true  注意这里
null === undefined // false

null == false   // false
null === false  // false
!null == true    // true 非操作会对 操作数 进行 Boolean() 函数转换
!null == true    // true

```

```
undefined == undefined    // true
undefined === undefined   // true
undefined == null         // true
undefined === null        // false
undefined == false        // false
undefined === false       // false
```
