# 07-simple-todo-list 进度笔记

## 已完成 ✅

- 在 `before/vite-project/` 搭建 Vite + React 项目（JavaScript，未启用 React Compiler）。
- **添加 todo**：输入框受控（`value` + `onChange`）+ 按钮追加 + 添加后清空。
- **勾选完成**：受控 checkbox（`checked` + `onChange`），`toggleTodo` 用不可变更新
  （`{ ...item, completed }` 只改完成状态，其余字段保留）。
- **Bonus（拆组件）已提前完成**：`components/ListItem.jsx` 负责单个列表项渲染。
- **删除 todo**（README 任务 3）：`App.jsx` 的 `deleteTodo(id)` 用
  `setListItem(prev => prev.filter(item => item.id !== id))`，通过 props 传给
  `ListItem`，按钮 `onClick={() => deleteTodo(id)}` 包一层箭头函数。

## 全部完成 ✅

README 的三个任务 + Bonus 均已实现，`npm run build` 验证通过。

## 对照参考答案（`after/`）

`after/` 组件名为 `TodoItem`、用 `crypto.randomUUID()`、`deleteTodo` 用 `filter`，
与 `before/vite-project` 的实现思路一致，仅命名不同。

## 关键知识点回顾

- 受控组件：`value` + `onChange`。
- 状态提升：state 在 `App`，操作函数通过 props 传给子组件。
- 不可变更新：`map` / `filter` / 展开运算符，不要 `push` 或直接改原对象。
- 列表 `key` 用 `item.id`，不要用数组下标。
- 回调带参：`() => deleteTodo(id)` 包一层，避免渲染时立即执行。
