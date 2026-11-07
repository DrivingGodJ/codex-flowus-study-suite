**简体中文** | [English](GUIDE.en.md)

# 使用、配置与开发指南

[返回作品展示](../README.md)

## 快速开始

需要支持插件的 Codex，以及已安装、已认证的兼容版 `flowus` CLI。[next-space/flowus-skill](https://github.com/next-space/flowus-skill) 是一种实现，使用前需单独检查其当前许可证和条款；本仓库不打包该 CLI。

```bash
git clone https://github.com/DrivingGodJ/codex-flowus-study-suite.git
cd codex-flowus-study-suite
codex plugin marketplace add .
codex plugin add codex-flowus-study-suite@drivinggodj-study
```

按 FlowUs CLI 自身说明完成登录。不要把令牌复制到对话或仓库中。

## 使用说明

可请求“为这门课整理学习计划”，或指定一个页面和需要修改的段落。远端页面始终是事实来源：

- 写入前重读页面，以块级最小差异更新，避免整页覆盖。
- 除非明确要求，保留手工内容与检查项勾选状态。
- 仅修改指定富文本字段，写入后重新读取目标页面或块验证结果。
- 不支持的删除、重排或文件类型会停止对应操作并说明限制。
- 不直接读取 FlowUs 凭据文件，不绕过客户端和接口校验。

## 开发与验证

仓库的离线检查使用 Node.js 测试运行器：

```bash
npm test
```

真实页面操作仍需在自己的已认证 FlowUs 环境验证。

## 文档与支持

- [更新记录](../CHANGELOG.md) · [参与贡献](../CONTRIBUTING.md) · [安全说明](../SECURITY.md)
- [问题反馈](https://github.com/DrivingGodJ/codex-flowus-study-suite/issues)

## 许可与致谢

[MIT License](../LICENSE)。本项目不包含 FlowUs CLI 源代码，见[第三方声明](../THIRD_PARTY_NOTICES.md)。
