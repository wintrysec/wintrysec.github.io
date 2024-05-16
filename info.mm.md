# 信息收集
## 组织架构
- 分支机构、对外投资 - [爱企查](https://aiqicha.baidu.com/) 
- 根域名信息 
  - [Whois查询](https://www.861.cn/Domain/whois.aspx)
  - [ICP备案查询](https://beian.miit.gov.cn/#/Integrated/recordQuery)
- 移动端安全（微信小程序、APP）
- 供应链-软件开发商（获取源码）

## 子域名资产收集
- 子域名枚举 - [Defender](https://ti.defender.microsoft.com/search/data/subdomains?query=wgpsec.org)
- CDN绕过
  - 识别CDN - [多地ping](https://www.itdog.cn/ping/)
  - FOFA（cert="根域名"、title="xx"、icon_hash="xx"）
  - 让服务器主动请求 (邮件原文、SSRF)
  
## IP资产梳理
- C段IP资产扫描，拓展攻击面
- 端口扫描用于发现目标开放的服务
- Web应用指纹（目标使用的开发框架和中间件）
- 目录扫描（用于发现备份文件、源码泄露、网站后台）
- 未授权接口
  - FindSomething工具
  - URLFinder工具
## 敏感信息
- 文档信息
  - [凌风云](https://www.lingfengyun.com/)
  - [语雀](https://www.yuque.com/search?tab=public&q=boe)
- 系统源码
  - [Github](https://github.com/) "xxx.com" in:file,path
  - [Gitee](https://search.gitee.com/?type=code&q=passwd)
- Google hacker
  - intitle:网站标题
  - allintitle:标题1 标题2
  - intext:网页内容
  - 奥林匹克 site:.gov（在顶级域名搜索某内容）
  - 加双引号精准搜索