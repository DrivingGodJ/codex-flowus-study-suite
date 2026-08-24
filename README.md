# Codex FlowUs 学习规划套件

这是一套面向 Codex 的 FlowUs 学习规划插件。它不会简单地自动重写整页，而是把远端页面作为唯一事实来源：写入前重新读取、只修改必要内容、写入后独立验证。

## 包含的技能

- `flowus-study-planner`：调研课程并创建或迭代学习主线、备选资源、实践项目和检查清单。
- `flowus-rich-text-safe-edit`：只修改指定的富文本字段，保留链接、粗体、颜色和其他未涉及的格式。
- `flowus-media-upload`：通过 FlowUs CLI 上传受支持的图片或文件，并创建可正常显示的媒体块。

## 前置条件

- 支持插件功能的 Codex。
- 已安装并完成认证的兼容版 `flowus` CLI。

[next-space/flowus-skill](https://github.com/next-space/flowus-skill) 是一种可用实现，但它不会被打包进本仓库。安装和使用前，请单独检查该项目当前的许可证与使用条款。

## 安装

```bash
git clone https://github.com/DrivingGodJ/codex-flowus-study-suite.git
cd codex-flowus-study-suite
codex plugin marketplace add .
codex plugin add codex-flowus-study-suite@drivinggodj-study
```

请按照 FlowUs CLI 自身的说明完成登录。不要把令牌复制到对话或本仓库中。

## 核心原则

- 始终以当前远端页面为准。
- 除非用户明确要求，否则保留手工修改内容和检查项的勾选状态。
- 更新现有页面时采用块级最小差异，不进行整页覆盖。
- 遇到不受支持的删除、重排或文件类型时，停止对应操作并明确说明限制。
- 每次写入后都重新读取目标页面或块，独立验证实际结果。
- 不直接读取 FlowUs 凭据文件，不绕过客户端或接口的安全校验。

## 许可证与来源

本项目采用 MIT 许可证，不包含 FlowUs CLI 的源代码。详情见 [第三方声明](THIRD_PARTY_NOTICES.md)。
