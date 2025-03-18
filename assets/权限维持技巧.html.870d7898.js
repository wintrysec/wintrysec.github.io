import{_ as o}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as n,c as a,a as e,b as t,d as r,e as c,r as p}from"./app.b2d7a8da.js";const _={},d=c('<h2 id="概述" tabindex="-1"><a class="header-anchor" href="#概述" aria-hidden="true">#</a> 概述</h2><p>先说下我们常常听大佬们说的C2和C&amp;C，其实就是远控（Command&amp;Control 命令执行和控制）</p><p>而权限维持中我们常用的C2工具就是 CobaltStrike和MSF这些，优点是功能强大；</p><p>有很多后渗透利用的功能很方便，缺点就是树大招风特征被各大杀软分析，免杀费劲。</p><p>目标防护较弱或者免杀能力强的师傅们可以忽略，其他人可以自己找冷门 开源的C2自己改。</p><p>其实权限维持中最重要的还是你构建的内网通道不能断，我们可以不用C2也能做内网渗透；</p><p>但是通道断了，千辛万苦打的入口点就没了，内网渗透也就失败了。</p><p>这个反向代理的通道是肯定躲不过流量设备（带外联检测功能）的监控的，所以我们可以在目标主机上搭建正向连接的VPN，或者多拓展几个内网权限多搭反向代理。</p><h2 id="无视杀软的远控" tabindex="-1"><a class="header-anchor" href="#无视杀软的远控" aria-hidden="true">#</a> 无视杀软的远控</h2>',9),l={href:"https://github.com/rustdesk/rustdesk",target:"_blank",rel:"noopener noreferrer"},i=e("p",null,[t("RustDesk的配置目录在"),e("code",null,"C:\\Users\\test\\AppData\\Roaming\\RustDesk\\config"),t("目录；")],-1),u=e("p",null,"其中ID和密码在RustDesk.toml文件里。",-1),h=e("p",null,"如果是第一次在目标上运行RustDesk，RustDesk不会立即将密码保存到配置文件；",-1),k=e("p",null,"而此时你把鼠标放在显示密码时则会保存到文件。",-1),m=e("p",null,"我们只需运行RustDesk，生成配置文件后结束RustDesk进程，然后修改配置文件里password为指定密码，再运行RustDesk即可，管理员权限运行的可以关闭杀软。",-1);function f(C,D){const s=p("ExternalLinkIcon");return n(),a("div",null,[d,e("p",null,[e("a",l,[t("https://github.com/rustdesk/rustdesk"),r(s)]),t(" 下载PC端，控制端和被控端都是同一个应用")]),i,u,h,k,m])}const b=o(_,[["render",f],["__file","权限维持技巧.html.vue"]]);export{b as default};
