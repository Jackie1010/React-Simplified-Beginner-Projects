# 07-simple-todo-list 进度笔记

## 已完成 ✅

- 在 `before/vite-project/` 搭建 Vite + React 项目（JavaScript，未启用 React Compiler）。
- **添加 todo**：输入框受控（`value` + `onChange`）+ 按钮追加 + 添加后清空。
- **勾选完成**：受控 checkbox（`checked` + `onChange`），`toggleTodo` 用不可变更新
  （`{ ...item, completed }` 只改完成状态，其余字段保留）。
- **Bonus（拆组件）已提前完成**：`components/ListItem.jsx` 负责单个列表项渲染。

## 待完成 ⏳

1. **删除 todo**（README 任务 3，最后一项）：
   - 在 `App.jsx` 写 `deleteTodo(id)`，用 `setListItem(prev => prev.filter(item => item.id !== id))`。
   - 通过 props 传给 `ListItem`：`deleteTodo={deleteTodo}`。
   - `ListItem` 里按钮写 `onClick={() => deleteTodo(id)}`（箭头函数包一层，别写 `deleteTodo(id)`）。

2. 完成后在浏览器验证：添加 → 勾选划线 → 删除消失，三个都正常即完成。

3. 对照 `after/` 参考答案（其组件名为 `TodoItem`，思路一致）检查差异。

## 关键知识点回顾

- 受控组件：`value` + `onChange`。
- 状态提升：state 在 `App`，操作函数通过 props 传给子组件。
- 不可变更新：`map` / `filter` / 展开运算符，不要 `push` 或直接改原对象。
- 列表 `key` 用 `item.id`，不要用数组下标。
- 回调带参：`() => deleteTodo(id)` 包一层，避免渲染时立即执行。
