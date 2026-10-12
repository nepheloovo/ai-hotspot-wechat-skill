# ai-hotspot-wechat-skill

可部署到个人 GitHub 的公众号写作 Skill：以「小渡」口吻写 AI 热点 / 大事件图文。

仓库建议名：`ai-hotspot-wechat-skill`

## 安装（任选一种）

把本目录放到 Agent 能读到的 skills 路径，例如：

```bash
# 通用（Codex 等常读）
cp -R . ~/.agents/skills/ai-hotspot-wechat

# 或作为项目级 skill
mkdir -p .agents/skills
cp -R . .agents/skills/ai-hotspot-wechat
```

核心文件是 `SKILL.md`。装好后对 Agent 说：「用小渡写一篇某某热点的公众号」即可触发。

## 本仓库包含

- `SKILL.md` — 写作流程与风格约束（初稿）
- `README.md` — 本说明

落地页与演示另行处理，不在本 skill 必做范围内。
