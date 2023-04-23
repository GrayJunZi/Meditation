# Meditation

## Complete React Developer in 2022 (w/ Redux, Hooks, GraphQL)

使用 Redux、Hooks、GraphQL、Stripe、等构建大型电子商务应用

## 一、介绍

### 1. React 的诞生

Facebook 在 2013 年正式发布了 React。它成为了世界上最受欢迎和工作需求最多的工具，Airbnb、Uber、Netflix、Twitter、Reddit、Pinterest、Paypal 等非常大的公司所使用。

### 2. React 的核心概念

- 不直接操作 DOM，由 React 来处理。
- 像乐高积木一样搭建网站。
- 单向数据流(Unidirectional data flow)

### 3. 为什么使用 React？

### 4. React 关键词

- Declarative
- JSX
- State
- Props
- Components
- VirtualDOM

## 二、构建第一个 React 应用程序

### 1. 创建 React 单页应用程序

使用脚手架下载并创建最新版本 React 应用程序

```bash
npx create-react-app monsters-rolodex
```

#### npm 与 npx 的区别？

`npm` 将软件包安装在电脑中，而 `npx` 将最新的软件包下载下来之后并立即执行它，然后将其从磁盘中删除。

使用 `npm` 命令全局安装 `cowsay`

```bash
npm install -g cowsay
```

运行 `cowsay`

```bash
cowsay hello
```

查看 `cowsay` 所在位置

```bash
npm list -g cowsay
```

卸载 `cowsay`

```bash
npm uninstall -g cowsay
```

使用 `npx` 安装 `cowsay`

```bash
npx cowsay hellow
```

### 2. 运行项目

进入 `monsters-rolodex` 文件夹

```bash
cd monsters-rolodex
```

#### React 命令脚本

运行项目

```bash
npm start
```

构建项目，将每种类型的代码压缩并分组到同一个文件中

```bash
npm build
```

测试项目

```bash
npm test
```

#### 项目结构

- `package.json` - 告诉应用程序项目中需要那些类库或包才能工作。
- `src` - 该文件夹是 React 应用程序编写实际代码的入口。
  1. `index.js` - 是我们要查看项目的第一个文件。
- `public` - 公共静态文件夹。
- `build` - 项目构建完成后的文件夹。

### 3. 绑定事件

```jsx
const handleClick = () => {
  console.log("clicked");
};

return (
  <div>
    <button onClick={handleClick}>点击</button>
  </div>
);
```

### 4. setState

修改数据

```jsx
this.setState({
  name: "GrayJunZi",
});
```

修改数据并执行回调函数

```jsx
this.setState(
  (state, props) => {
    console.log(state);
    console.log(props);
    return {
      name: "Gray",
    };
  },
  () => {
    console.log("调用回调函数", this.state);
  }
);
```

### 5. 生命周期

- `componentDidMount` - React第一次将组件渲染到页面上时触发的事件。它仅在组件生命周期中发生一次。

### 6. 组件

#### Props

### 7. 类组件生命周期方法

- `componentDidMount` - 组件装载事件
- `componentDidUpdate` - 组件更新事件
- `componentDidUnmount` - 组件卸载事件

### 8. 功能组件

- `useState`
- `useEffect`

### 9. DOM 和 虚拟DOM

## 三、电子商务项目

### 创建项目

```bash
npx create-react-app crwn-clothing
```

### 安装 sass

```bash
npm install sass
```

### 路由

安装路由组件
```bash
npm install react-router-dom@6
```

#### Outlet

### Context

