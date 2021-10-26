## 卡片式社交 webapp

### 使用
```
npm i
npm run dev
```


### 技术栈

前端：
    - vue3
    - vite
    - bootstrap
    - vuex
    - router
    - axios

后段：
    - nodejs
    - express
    - mysql


#### 前端UI

<img src="/assert/Screenshot_20211026-133749.png" alt="截图1" title="截图1" style="width:100px">
<img src="/assert/Screenshot_20211026-133801.png" alt="截图1" title="截图1" style="width:100px">
<img src="/assert/Screenshot_20211026-134405.png" alt="截图1" title="截图1" style="width:100px">
<img src="/assert/Screenshot_20211026-134653.png" alt="截图1" title="截图1" style="width:100px">

@video[录屏](assert/MP4_20211026_142859.mp4)

#### 代码布局

前段
```
Readme.md
assert
index.html 
manifest.json
package.json
public
src 
| - App.vue  
| - assert // img、svg存放文件夹
| - axios
    |- http.js //通过post、get与后段通信，拦截请求响应，捆绑token信息
| - components // 定义需要复用组件
    |- Card.vue
    |- Icon.vue
    |- route.vue
    |- userImg.vue
| - main.js //主js
| - registerServiceWorker.js
| - router
    |- index.js //路由
| - scss
| - store
    |- index.js // 存放应用的 当前Posts、token等
| - utils
    |- utils.js
| - views // 定义 各种类型的卡片 Card view
    |- Login.vue
    |- feeds.vue
    |- loadCard.vue
    |- logIn.vue
    |- navBar.vue
    |- newPost.vue
    |- postDetail.vue
    |- userInfo.vue
vite.config.js
vue.config.js
```
#### 后段接口

后段源码：
[接口文档](https://www.notion.so/5254027326a04eafa05a100402c35386)

#### 数据库 sql文件
