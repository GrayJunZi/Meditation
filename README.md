# Meditation

Complete React Developer in 2022 (w/ Redux, Hooks, GraphQL)
---
使用 Redux、Hooks、GraphQL、Stripe、等构建大型电子商务应用

## 一、介绍

### 1. React 的诞生

Facebook 在 2013年正式发布了 React。它成为了世界上最受欢迎和工作需求最多的工具，Airbnb、Uber、Netflix、Twitter、Reddit、Pinterest、Paypal等非常大的公司所使用。

### 2. React 的核心概念

- 不直接操作DOM，由React来处理。
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

## 二、构建第一个React应用程序

### 1. 创建 React 单页应用程序

使用脚手架下载并创建最新版本React应用程序
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