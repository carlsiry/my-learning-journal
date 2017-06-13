## spring MVC 的 DispatherServlet

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

    // 这个DispatherServlet会默认加载 WEB-INFO目录下的配置文件
    mySpringMVC-servlet.xml

    // 或者自定义这个配置文件的位置
    <servlet>
        <servlet-name>mySpringMVC</servlet-name>
        <!-- ... -->
        <init-param>
            <param-name>contextConfigLocation</param-name>
            <param-value>/WEB-INF/config/simple-config.xml</param-value>
        </init-param>
    </servlet>

    // 容器配置文件
    <context-param>
        <param-name>contextConfigLocation</param-name>
        <param-value>/WEB-INF/application-annotation.xml</param-value>
    </context-param>
    <listener>
      <listener-class>org.springframework.web.context.ContextLoaderListener</listener-class>
    </listener>


### 一对多配置
    <class name="pojo.dom" table="宿舍表">
        <id name="id" column="id">
            <generator class="native"></generator>
        </id>
        <property name="no" column="宿舍号" type="string"></property>
        <set name="students">
            <key column="宿舍_id"></key>
            <one-to-many class="pojo.student" />
        </set>
    </class>
### 多队一配置
    <class name="pojo.student" table="学生表">
        <id name="id" column="id">
            <generator class="native"></generator>
        </id>
        <property name="stuId" column="学号"></property>
        <many-to-one name="dom" column="宿舍_id" class="pojo.dom"></many-to-one>
    </class>

### ServiceDao

@Service
public class studentServiceDao {
    @Autowired
    studentDao studentDao;
    public void saveStudent(student stu) throws Exception{
        studentDao.save(stu);
    }
    public studentDao getStudentDao() {
        return studentDao;
    }
    public void setStudentDao(studentDao studentDao) {
        this.studentDao = studentDao;
    }
}

// 注解豆类
@Component
public class domServiceDao {
    //删除指定id的宿舍，并且将该宿舍中的学生宿舍设为null
    public void delete(Long domId){
        domDao domDao;
        studentDao studentDao;
        String hql="delete from pojo.dom where id==domId";
        Query query=getSession().createQuery(hql);
        dom d=(dom)query.uniqueResult();
        if(d != null){
            studentDao.delete(d.getStudents());
            domDao.delete(d);
        }
    }
}

@Component
public class studentServiceDao {
    //获得所有宿舍为null的学生
    public List<student> getAll(){
        String hql="from pojo.student s where s.dom is null";
        Query query=getSession().createQuery(hql);
        return query.list();
    }
}

### spring容器管理ServiceDao


### 控制器的注解配置

// studentAction
@Controller
@RequestMapping("/student")
public class studentAction {
    @Autowired
    studentServiceDao stuDao;
    @RequestMapping("/add")
    @ResponseBody
    public student add(student stu) throws Exception{
        stuDao.saveStudent(stu);
        return stu;
    }
    public studentServiceDao getStuDao() {
        return stuDao;
    }
    public void setStuDao(studentServiceDao stuDao) {
        this.stuDao = stuDao;
    }
}


@Controller
@RequestMapping("/student")
public class studentController {
  protected studentServiceDao stuDao;
  @RequestMapping("/getStudent")
  public String getStudent(){
      stuDao.getAll();
    return "students";
  }
}

###

id=${student.id }<br>
name=${student.name }<br>
age=${student.age }<br>
stuId=${student.stuId }<br>



### 事物增强

    <!-- 定义事务的增强 -->
    <tx:advice id="txAdvice" transaction-manager="txManage">
        <tx:attributes>
            <tx:method name="*" propagation="REQUIRED" rollback-for="Exception" />
        </tx:attributes>
    </tx:advice>
    <!--    将事务的增强和切点做绑定  -->
    <aop:config>
        <aop:pointcut expression="execution(* services..*.*(..))"
            id="servicesDao" />
        <aop:advisor advice-ref="txAdvice" pointcut-ref="servicesDao" />
    </aop:config>





-----------------------------------------------------

spring mvc 学习笔记


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
