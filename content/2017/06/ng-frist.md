
## 学习 Angular  —— ng-book2

1. 搭建本地开发环境

```
# typescript support
> npm install -g typescript
# sublime text ts plugin
# command + shift + p : typescript
# install tool
> npm install -g @angular/cli
# config package managerment
> ng set --global packageManager=yarn
# create new projectName
> ng new angular2-hello-world
# run debug/test
> ng server
```

2. 定义组件: 包括 模板视图、控制器类、可添加自定义模型并加载数据

```
# create component cli command
> ng generate component hello-world
installing component
  create src/app/hello-world/hello-world.component.css
  create src/app/hello-world/hello-world.component.html
  create src/app/hello-world/hello-world.component.spec.ts
  create src/app/hello-world/hello-world.component.ts
  update src/app/app.module.ts

# define hello-world.compoent.ts
// 1. annotation just like decorate
@component({
  selector: 'app-hello-world',   // 0. view name(selector like html element name)
  templateUrl: './hello-world.html',
  // another method template string
  // template : `<p> ... </p>`,
  styleUrls: ['./hello-world.css', ]
}) // 2. control class
export class HelloWorldCompoent implements OnInit {
  constructor() { }
  ngOnInit() {
  }
}
```

3. 定义数据模型 —— 给组件添加数据

```
# define model
class Product {
  sku: string;
  name: string;
  price: number;
  department: string[];
  constructor(
    sku: string,
    name: string,
    price: number,
    department: string[],
  ) {
    this.sku = sku;
    this.name = name;
    this.price = price;
    this.department = department;
  }
}
# using in component
@Component({
  selector: 'product-item',
  template: `<li class="item"> {{product.name}} - <span>{{product.price}}</span></li>`,
  styleUrls: ['./product-item.css']
})
class ProductItemComponent {
  product: Product;
  constructor() {
    this.product = new Product(/*...*/);
  }
}
```

4. 组件间的输入

```
# two methods of define inputs
# 1. use annotation
import {Component, Input} from '@angular/core';
@Component({
  selector: 'product-item',
  template: `<li class="item"> {{product.name}} - <span>{{product.price}}</span></li>`,
  styleUrls: ['./product-item.css']
})
class ProductItemComponent {
  @Input() product: Product;
  constructor() {
    // this.product = new Product(/*...*/);
  }
}
# 2. use inputs config
@Component({
  selector: 'product-item',
  inputs: ['product'],
  // 可以里外名字不一样: inputs: ['innerName': 'outerName', '...']
  template: `<li class="item"> {{product.name}} - <span>{{product.price}}</span></li>`,
  styleUrls: ['./product-item.css']
})
class ProductItemComponent {
  product: Product;
  constructor() {
    this.product = new Product(/*...*/);
  }
}
# use in view
` <product-list>
    <product-item
      *ngFor="let item of productList"
      [product]="item" >
    </product-item>k
  <product-list>
`
```

5. 组件间的输出

```
# frist, config @Component's outputs
# second, set an EventEmitter in the instance properties
# third, emit event when its needs
import {Component, Input, EventEmitter} from '@angular/core';
@Component({
  selector: 'product-item',
  outputs: ['productSelected'],
  template: `
    <li class="item" (click)="liked()">
      {{product.name}} - <span>{{product.price}}</span>
    </li>`,
  styleUrls: ['./product-item.css']
})
class ProductItemComponent {
  @Input() product: Product;
  productSelected: EventEmitter<string>;
  constructor() {
    this.productSelected = new EventEmitter();
  }
  liked(): void {
    this.productSelected.emit("oh oh oh");
  }
}
```


6. HTTP 库

Angular 封装了一个异步请求的 HTTP 库（*单独的模块*），用来调用外部的 API。
并且推荐使用 *可观察对象* 的方式来处理这中异步请求代码。

- 导入使用

```
// 0. 导入 依赖模块 到 NgModule
import { HttpModule }  from '@angular/http';
@NgModule({
  //...
  imports:[ BrowserModule, HttpModule ],
  // bootstrap
  // providers
})

// 1. 导入 依赖
import { Http, Response, RequrestOptions, Headers } from '@angular/http';
```
