# client
# server
# imports

# 路由
路由全部由基于angular的uiRouter完成。需要在imports

# 编码
所有源码存放在
## coffee
## jade
## stylus

# UI框架
整套UI框架的基础Web部件基于MaterialUI和angularUI的相关内容。

## components-based programming
All the ui are separated into components, there are lots of common compoents in components folder.
The drawback of this kind of programming is nested components variable control. For example, if you have a component called 'panel', under 'panel' you use 'userList' component and 'dailyCost' component, if you want to transport a value in 'panel' to its child components, you have to use binding which cause some inconveniences.


## 静态资源
所有公用静态资源，例如图片、公用的css、js等，从另外一个项目提供。
静态资源网站：http://static.iflying.com


## Bootstrap
此UI框架分为view、layout和component。
### 基本架构
view里面是具体的页面
### view
view里面根据业务分类进行划分。

### layout
### component

## Future Work
好用的Web视觉框架还有IonicFramework和Famous，这两个框架都能提供很好的移动端布局，并且Ionic对移动端的html加载进行了优化。当前移动端所有内容都基于MaterialUI进行flex布局，没有使用其他框架。
