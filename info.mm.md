# 信息收集
## 组织架构（[天眼查](https://www.tianyancha.com/)）
- 分支机构（[IPC备案](https://beian.miit.gov.cn/#/Integrated/recordQuery) 查域名）
- 域名 [Whois查询](https://www.hostinger.com.hk/whois)
- 微信小程序、APP
- 供应链-软件开发商（社工、获取源码）
## 子域名资产
- 子域名枚举
  - 开源工具：被动收集+DNS爆破
  - [FindSubs](https://github.com/wintrysec/FindSubs)
- CDN绕过
  - 识别CDN-[多地ping](https://www.itdog.cn/ping/)
  - title="网站标题"
  - cert="一级域名"
  - 让服务器主动请求 (邮件原文、SSRF)
## IP资产
- IP反查旁站
  - [查旁站](https://chapangzhan.com/)
  - [Webscan](https://c.webscan.cc/)
  - [DNSgrep](https://www.dnsgrep.cn/ip)
- C段资产扫描
- 目标开放的端口服务
- Web指纹（目标使用的开发框架）
- 目录扫描（用于发现备份文件、源码泄露、网站后台）
- 未授权接口
  - 网页js源码搜 location.href 跳转
  - URLFinder工具
## 敏感信息
- 文档信息
  - [凌风云](https://www.lingfengyun.com/)
  - Google（filetype:doc）
- 系统源码（Github）"xxx.com" in:file,path
- Google hacker
  - intitle:网站标题
  - allintitle:标题1 标题2
  - intext:网页内容
  - 奥林匹克 site:.gov（在顶级域名搜索某内容）
  - 加双引号精准搜索