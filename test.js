/*------------------------------ function countBs()
function countBs(str, c) {
    var count = 0;
    for(var i = 0; i < str.length; i++) {
        if (str.charAt(i) == c) {
            count++;
        }
    }
    return count;
}

var result = countBs('ssSB,BT,BB', 's');
console.log(result);*/


/*------------------------------- "==" and "==="
var a = {a:1};
var b = {a:1};
var c = a;

console.log(a == b);
console.log(a === b);

console.log(a == c);
console.log(a === c);

console.log(a.a == b.a);
console.log(a.a === b.a);
*/


/*-------------------------------- function range(s,end, step)
function range(start, end, step) {

    var step = step || 1;
    var result = [];
    for(var i = start; i <= end; i+=step) {
        result.push(i);
    }

    return result;
}

function sum(list) {
    var result = 0;
    for(var i = 0; i < list.length; i++) {
        result += list[i];
    }
    return result;
}

console.log(range(1,10).reverse());
console.log(sum(range(1,10)));  */

/*---------------------------------- forEach()
function forEach(array, action) {
    for(var i = 0; i < array.length; i++) {
        action(array[i]);
    }
}

var numbers = [1, 2, 3, 4, 5];
var sum = 0;

forEach(numbers, function (number) {
    sum += number;
});

console.log(sum);*/

/*-------------------------------- innerFunctin & outerFunction
var a = 'outerA';
b = 'outerB';
function outer(callback) {
    var a = 'innerA';
    var b = 'innerB';
    callback(a);
}

function inner(result) {
    console.log(result);*/
/*    console.log(typeof this);
    console.log(this === outer);
    console.log(this === global);
    console.log(this === inner);
    console.log(this.b);*/
// }

// outer(inner);
/*console.log(this);            // {}
console.log(this === global); // false
console.log(this.c);          // undefined

console.log(b);               // outerB
console.log(global.b);        // undefined

global.b = 'globalBBBB';
console.log(this.b === b);    // false
console.log(this.b === global.b);   // true

console.log(this.outer === outer); // false
console.log(global.b === b);
console.log(global.a === a);*/

/*console.log(global);
console.log(global.global);*/


/*----------------------------------- JSON.stringify/parse()
var test = {name:'test', age:'18'};
console.log(JSON.stringify(test));

var a = JSON.stringify(test);

console.log(JSON.parse(a));*/


/*function reduce(arr, combine, start) {

    var result = start || 0;

    for(var i = 0; i < arr.length; i++) {
        result = combine(result, arr[i]);
    }

    return result;
}

var arr = [1, 3, 5, 7, 9];

var test = reduce(
            arr,
            function (a, b) {
                return a + b;
            },
            4
        );

console.log(test);*/


/*function average(arr) {

    function plus(a, b) {
        return a + b:
    }

    return arr.reduce(plus) / arr.length;
}

function age(p) {

    return p.died - p.born;
}

function male(p) {
    return p.sex == 'm';
}

function female(p) {
    return p.sex == 'f';
}
average(zubu.filter(male).map(age));
average(zubu.filter(female).map(age));*/

/*function fun_testbind(a, b) {
    console.log(a);
    console.log(b || 'bbbb...');
}

var test = fun_testbind.bind(null, 'hello');
console.log(test);*/


/*var arr = [[1,3,5,7],[2,4,6,8]];

var result = arr.reduce(function (a, b) {
    return a.concat(b);
});

console.log(result);*/


//------------------------- arr.every(), arr.some()
/*var arr = [1,3,5,7,9];
var result = arr.every(function (index) {
    return index > 1;
});

var result2 = arr.some(function (index) {
    return index > 10;
});

console.log(result);
console.log(result2);*/

/*------------------------------------ global & var & this

console.log(this);          // {}

function test(word) {
    console.log(word);
    console.log(this.toString());      // {...many...}
}

test('hello world');        // > hello world > undefined 

var a = 'global a ?';
this.a = 'new global a';
console.log(a);
console.log(this.toString());          // { a: 'new global a'} 
console.log(global.a);      // undefined

b = 'global b';
console.log(global.b);      // global b
*/


/* ------------------------------- 变量作用域 全局 原型
// console.log(Object.getPrototypeOf(this)==Object.prototype);
// console.log(Object.getPrototypeOf(Object.prototype));

var type = 'outer_type';
var testProto = {
    speak: function () {
        console.log(this === testProto); // ture > false
        console.log(this === obj_test); // false > true
        console.log(this.type); // testProto or obj_test  
        console.log(type); // outer_type > outer_type
    }
};

var obj_test = Object.create(testProto);
obj_test.type = 'obj_test';
testProto.type = "testProto";
testProto.speak();
obj_test.speak();
*/

/*----------------------------------- bind(this) && self = this
// *** var self = this; ***
// var a = 'outer_a';
// var test = {
//     prop: 10,
//     plusProp: function (array) {
//         var self = this;
//         var a = 'inner_a';
//         console.log(self === test);
//         return array.map(function (index) {
//             console.log(a);
//             console.log(self === test);
//             console.log(this === global);
//             return self.prop + index;
//         });
//     }
// };
// var result = test.plusProp([1,3]);
// console.log(result); 

// *** function (){}.bind(this); ***
// var a = 'outer_a';
// var test = {
//     prop: 10,
//     plusProp: function (array) {
//         var a = 'inner_a';
//         console.log(this === test);
//         return array.map(function (index) {
//             console.log(a);
//             console.log(this === test);
//             console.log(this === global);
//             return this.prop + index;
//         }.bind(this));
//     }
// };
// var result = test.plusProp([1,3]);
// console.log(result);

// *** array.map(fun,this); ****
var a = 'outer_a';
var test = {
    prop: 10,
    plusProp: function (array) {
        var a = 'inner_a';
        console.log(this === test);
        return array.map(function (index) {
            console.log(a);
            console.log(this === test);
            console.log(this === global);
            return this.prop + index;
        },this); // map(fun, this);
    }
};
var result = test.plusProp([1,3]);
console.log(result);
*/


/*------------------- "use strict"

// *** 严格模式的使用规则 ***
// 'use strict';
// function test () {
//     'use strict';
//     for(counter = 0; counter < 10; counter++) {
//         console.log("happy happy");
//     } 
//  }
//  test();

//  function Person (name) {
//       this.name = name; 
//  }
//  var ferdinand = Person("Ferdinand"); 
//  console.log(ferdinand);    // Person 当做函数运行（没有设置返回值）-> undefined
//  console.log(name);     // this.name === global.name
//  console.log(window.name); // node.js -> global

// *** 测试 *** 
function Vector (x, y) {

     this.x = x;
     this.y = y; 
}

Vector.prototype.plus = function(other){
     return new Vector(this.x + other.x, this.y + other.y); 
};

function testVector () {
     var p1 = new Vector(10, 20);
     var p2 = new Vector(-10, 5);
     var p3 = p1.plus(p2);

     if (p1.x !== 10) {
          return "fail: x property";
      } 
     if (p1.y !== 20) {
         return "fail: y property";
     }
     if (p3.x !== 0) {
         return "fail: x from plus";
     }
     // ..... p2.x p2.y p3.y
     
     return "Everything ok";
}

console.log(testVector());

// *** 调试 ***
function numberToString (n, base) {

    var result = "", sign = "";
    if (n < 0) {
        sign = "-";
    }
    
    console.log('result:' + result + ', sign:' + sign);

    do {
        result = String(n % base) + result;
        console.log("result:" + result);
        n = Math.floor(n / base);
        console.log("n:" + n);
    } while (n > 0);

    return sign + result;

}
console.log(numberToString(13, 2));

// *** 异常 ***
function maybeerror() {

    try {
        if (1/0) {
            console.log('test test');
        }
    } catch (err) {
        console.log('something is wrong' + err);
    }

}

*/

/* ------------------------—正则表达式 --------------------------


// 使用正则表达式构造函传入模式（字符串）数构造一个正则表达式对象
var re1 = new RegExp('abc');
// 使用斜杠将模式包围生成字面值
// 模式中包含斜杠时需在斜杠前加上反斜杠
var re2 = /\/abc\n/;

// 匹配测试
console.log('匹配测试方法-- test');
console.log(re1.test('abce'));
console.log(re2.test('/abc\n'));

//匹配字符集 【】，‘-’字符用来表示范围
var re3 = /[2345]/; // 匹配字符集中的任意一个
var re4 = /[7-9]/;  // 表示 7-9
console.log('匹配字符集--【】');
console.log(re3.test('23'));
console.log(re4.test('8'));

// 通用字符组的快捷写法
// \d 任意数字字符
// \w 任意字母和数字符号（单词符号）
// \s 任意空白符号（空格，制表符，换行符等类似符号）
// \D 非数字符号
// \W 非字母和数字符号
// \S 非空白符号
// .  除换行符外的任意符号
// ^  脱字符，反向除外的意思
var re5 = /./;
console.log(re5.test('\n'));  // false
var re6 = /[^789]/;
console.log(re6.test('0'));

// 部分模式重复
// + 表示表达式元素至少重复一次
// * 表示表达式元素至少重复零次
// ？ 表示表达式元素可选，出现 0 次或 1 次
// {number[,number]} 表示表达式元素出现的次数或范围间的次数 {,5} 0-5, {5,} 5++;

// var re7 = /2* /;
console.log(re7.test(' '));
var re8 = /3?/;
console.log(re8.test('')); // true
var re9 = /\d{1,2}-\d{1,2}-\d{4} \d{1,2}:\d{1,2}/;
console.log(re9.test('20-12-2016 2:10'));

// 子表达式分组 （）
console.log(/la+(la+)+/.test('laalaalalala'));

// Reg.exec() 返回一个表示匹配字符串信息的对象，否则返回 null
console.log(/\d+/.exec('haha 23'));
// [ '23', index: 5, input: 'haha 23' ]
// 该对象实际上是一个字符串数组
// 首元素是与模式匹配的的字符串 ，相当于字符串的 match 方法， 如：console.log('one 100'.match('\d+')) // ["100",...]
// index 属性表示成功匹配的起始位置
// 若正则表达式包含圆括号包围的子表达式，则会其次返回子表达式匹配的最后一项
var re10 = /'([^']*)/;
console.log(re10.exec("he said 'hello'"));
// [ '\'hello', 'hello', index: 8, input: 'he said \'hello\'' ]
console.log(/bad(ly)?/.exec("bad"));
// [ 'bad', undefined, index: 0, input: 'bad']
console.log(/(\d)+/.exec('123'));
// [ '123', '3', index: 0, input: '123' ]  // 省略了匹配结果 1，2

var el = document.getElementById('shoppingList');
if (el.addEventListener) {
    el.addEventListener('click', function(event) {
        removeList(event);
    }, false);
} else {
    el.attachEvent('onclick', function(event) {
        removeList(event);
    });
}

function removeList(e) {
    var target, parentNode, grandParentNode;
    if (!e) {
        e = window.event;
    }

    target = e.target || e.srcElement;
    parentNode = target.parentNode;
    grandParentNode.removeChild(parentNode);

    if (e.preventPropogation) {
        e.preventPropogation()
    } else {
        e.returnValue = false;
    }
}


*/
