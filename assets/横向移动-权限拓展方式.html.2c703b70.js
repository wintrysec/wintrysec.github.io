import{_ as r}from"./_plugin-vue_export-helper.cdc0426e.js";import{o,c as i,a as e,b as a,d as n,e as t,r as l}from"./app.a7565714.js";const d={},c=t(`<h2 id="翻阅配置文件" tabindex="-1"><a class="header-anchor" href="#翻阅配置文件" aria-hidden="true">#</a> 翻阅配置文件</h2><details class="custom-container details"><summary>各类站点数据库连接密码</summary><p>JSP站：<code>网站目录/WEB-INF/classes/database.properties</code></p><p>PHP站：find / -name *config.inc</p><p>ASP站：web.config</p></details><details class="custom-container details"><summary>MySQL数据库找密码</summary><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">find</span> / <span class="token parameter variable">-name</span> user.MYD

/var/lib/mysql/mysql/user.MYD
<span class="token comment">#下载下来解密MD5得到root密码</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><details class="custom-container details"><summary>常见中间件配置文件位置</summary><div class="language-http line-numbers-mode" data-ext="http"><pre class="language-http"><code><span class="token header"><span class="token header-name keyword">Tomcat</span><span class="token punctuation">:</span> <span class="token header-value">$CATALINA_HOME/conf/server.xml</span></span>
<span class="token header"><span class="token header-name keyword">Apache</span><span class="token punctuation">:</span> <span class="token header-value">/etc/httpd/conf/httpd.conf</span></span>
<span class="token header"><span class="token header-name keyword">Nginx</span><span class="token punctuation">:</span> <span class="token header-value">/etc/nginx/nginx.conf</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h2 id="获取历史连接凭证" tabindex="-1"><a class="header-anchor" href="#获取历史连接凭证" aria-hidden="true">#</a> 获取历史连接凭证</h2><p><strong>获取RDP连接凭证（保存过的）</strong></p>`,6),p={href:"https://github.com/AlessandroZ/LaZagne",target:"_blank",rel:"noopener noreferrer"},h=e("p",null,"lazagne.exe windows",-1),u=e("p",null,"#git密码也能获取到",-1),m=e("p",null,[e("strong",null,[a("获取历史连接"),e("strong",null,[e("strong",null,"wifi")]),a("密码")])],-1),g={href:"https://github.com/wangle201210/wifiPass",target:"_blank",rel:"noopener noreferrer"},_=e("p",null,"获取XShell连接凭证",-1),b={href:"https://github.com/dzxs/Xdecrypt",target:"_blank",rel:"noopener noreferrer"},f=e("p",null,[e("strong",null,"浏览器历史记录和凭据")],-1),k={href:"https://github.com/moonD4rk/HackBrowserData",target:"_blank",rel:"noopener noreferrer"},v=t('<h2 id="弱口令" tabindex="-1"><a class="header-anchor" href="#弱口令" aria-hidden="true">#</a> 弱口令</h2><p>1、密码喷洒：即用已知的密码去扫描网段里的机器去做密码碰撞</p><p>2、Web后台弱口令和网络设备默认口令</p><p>3、主机和数据库弱口令扫描（21,22,445,3389,1433,1521,3306,5432,6379,27017）</p><p>4、技巧：如果能进到邮箱或<code>wiki系统</code>翻找到初始口令的话可以批量获取主机权限</p><p>其中MySQL和PostgreSQL及Redis这些数据库都是有办法获取主机权限的</p><h2 id="系统漏洞" tabindex="-1"><a class="header-anchor" href="#系统漏洞" aria-hidden="true">#</a> 系统漏洞</h2><p><strong>MS17-010（CVE-2017-0143）</strong></p><p>MSF有两种方式：</p><ul><li>反弹shell：<strong>exploit/windows/smb/ms17_010_psexec</strong>，需要在主机上进行端口转发</li><li>直接执行命令：<strong>auxiliary/admin/smb/ms17_010_command</strong>，直接在主机上执行命令</li></ul><h2 id="web应用漏洞" tabindex="-1"><a class="header-anchor" href="#web应用漏洞" aria-hidden="true">#</a> Web应用漏洞</h2><p>重点关注<strong>Shiro反序列化</strong>、<strong>Weblogic</strong>、<strong>Struts2</strong>等可直接利用的组件漏洞</p><p>还有SQL注入、文件上传等能Getshell的Web安全漏洞</p><h2 id="重点目标系统" tabindex="-1"><a class="header-anchor" href="#重点目标系统" aria-hidden="true">#</a> 重点目标系统</h2><p><strong>Zabbix</strong>等监控系统，默认口令（Admin/zabbix）</p><p>通过<strong>堡垒机</strong>默认口令进入堡垒机，直接主机权限路径分刷满</p><p>查看<strong>wiki系统</strong>很多组织会在其中公示一些初始密码，拿来去做弱口令扫描</p><h2 id="凭证传递攻击" tabindex="-1"><a class="header-anchor" href="#凭证传递攻击" aria-hidden="true">#</a> 凭证传递攻击</h2><p>Hash传递攻击和票据传递攻击，是域渗透中的攻击方法</p><p>Hash传递攻击本地用户的话需要密码相同才能成功（域管理账户的话可以随意登录）</p><p>可以用CS直接去扫445然后抓了hash去传递（类似于明文密码喷洒）</p>',21);function x(w,y){const s=l("ExternalLinkIcon");return o(),i("div",null,[c,e("p",null,[e("a",p,[a("https://github.com/AlessandroZ/LaZagne"),n(s)])]),h,u,m,e("p",null,[e("a",g,[a("https://github.com/wangle201210/wifiPass"),n(s)])]),_,e("p",null,[e("a",b,[a("https://github.com/dzxs/Xdecrypt"),n(s)])]),f,e("p",null,[e("a",k,[a("https://github.com/moonD4rk/HackBrowserData"),n(s)])]),v])}const A=r(d,[["render",x],["__file","横向移动-权限拓展方式.html.vue"]]);export{A as default};
