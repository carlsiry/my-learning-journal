
## 从类路径中加载配置文件

ApplicationContext context = new ClassPathXmlApplicationContext(
    new Sting[] {'config.xml'});

## 通过构造器创建一个bean 实例、

`<bean name='product' class='test.bean.Product' />`

## 通过工厂方法创建豆类

`<bean id='product' class='' factory-method='getInstance'/>`

## 豆类销毁方法

`<bean id='product' class='' destory-methon='shutdown'/>`

## 通过构造器传递参数

    `<bean id='product' class='' factory-method='getInstance'>
            <constructor-arg name='name' value='zhangsan'/>
            <constructor-arg name='age' value='18'/>
    </bean>`

## setter 方式依赖注入

    `
    <bean id='product' class='..'>
        <property name='name' value='lisi'/>
        <property name='Address' ref='oneAddress'/>
    </bean>

    <bean id='oneAddress' class='..'>
        <property name='city' value='shanghai'/>
        <property name='state' value='NY'/>
    </bean>
    `

## spring MVC 的 DispatherServlet

```
    <servlet>
        <servlet-name>mySpringMVC</servlet-name>
        <servlet-class>
            org.springframework.web.servlet.DispatherServlet
        </servlet-class>
        load-on-startup 1
    </servlet>

    <servlet-mapping>
        <servlet-name>springMVC</servlet-name>
        <!-- 匹配所有请求路径 -->
        <url-pattern>/</url-pattern>
    </servlet-mapping>

    这个DispatherServlet会默认加载 WEB-INFO目录下的配置文件
    mySpringMVC-servlet.xml

    或者自定义这个配置文件的位置
    <servlet>
        <servlet-name>mySpringMVC</servlet-name>
        <!-- ... -->
        <init-param>
            <param-name>contextConfigLocation</init-param>
            <param-value>/WEB-INF/config/simple-config.xml</servlet>
        </init-param>
    </servlet>
```


## RequestMapping 注解的方式的控制器类

```
package com.example.controller;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
...
@Controller
publict class CustomerController {
    @RequestMapping(value='/custom_input')
    @RequestMapping('/custom_input',
                        method={RequestMethod.POST, RequestMethod.PUT})
    @RequestMapping('', method=RequestMethod.POST)
    // 如果没有指定method ，将可以使用任何方法处理请求
    public String inputCustomer() {
        // do something here
        return 'CustomerForm';
    }
}

@Controller
@RequestMapping('/customer')
public class CustomerController {
    @RequestMapping('delete',
                        method=RequestMethod.POST)
    public String deleteCustomere() {
        // do something here
    }
    // 这里将映射到 http://domain/context/delete
}
```
