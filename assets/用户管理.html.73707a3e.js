import{_ as d}from"./_plugin-vue_export-helper.cdc0426e.js";import{o,c as r,d as c,w as n,a as e,b as s,e as m,r as u}from"./app.a5c8fdbc.js";const p={},b=e("h2",{id:"添加用户",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#添加用户","aria-hidden":"true"},"#"),s(" 添加用户")],-1),v=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token comment"},"#添加用户admin,并设置密码为admin@123"),s(`
`),e("span",{class:"token function"},"useradd"),s(` admin
`),e("span",{class:"token builtin class-name"},"echo"),s(" admin@123"),e("span",{class:"token operator"},"|"),e("span",{class:"token function"},"passwd"),s(),e("span",{class:"token parameter variable"},"--stdin"),s(` admin

`),e("span",{class:"token comment"},"#参数"),s(`
`),e("span",{class:"token parameter variable"},"-g"),s(),e("span",{class:"token comment"},"#指定用户组"),s(`
`),e("span",{class:"token parameter variable"},"-s"),s(),e("span",{class:"token comment"},"#指定缺省shell(登陆后的shell)"),s(`
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),h=e("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell"},[e("pre",{class:"language-powershell"},[e("code",null,[e("span",{class:"token comment"},"#添加一个用户名为admin的普通用户"),s(`
net user admin @admin`),e("span",{class:"token punctuation"},"."),s("123 "),e("span",{class:"token operator"},"/"),s(`add

`),e("span",{class:"token comment"},"#加入管理员组"),s(`
net localgroup Administrators admin `),e("span",{class:"token operator"},"/"),s(`add
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),k=e("h2",{id:"删除用户",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#删除用户","aria-hidden":"true"},"#"),s(" 删除用户")],-1),g=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token function"},"userdel"),s(),e("span",{class:"token parameter variable"},"-f"),s(),e("span",{class:"token parameter variable"},"-r"),s(` admin
`),e("span",{class:"token comment"},"#强制删除用户admin,-r同时删除用户目录相关文件"),s(`
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),_=e("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell"},[e("pre",{class:"language-powershell"},[e("code",null,[s("net user admin "),e("span",{class:"token operator"},"/"),e("span",{class:"token function"},"del"),s(`
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"})])],-1),x=e("h2",{id:"用户组",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#用户组","aria-hidden":"true"},"#"),s(" 用户组")],-1),f=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token function"},"groupadd"),s(` admins
`),e("span",{class:"token function"},"groupdel"),s(` admins
`),e("span",{class:"token comment"},"#添加用户组和删除用户组"),s(`
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),w=e("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell"},[e("pre",{class:"language-powershell"},[e("code",null,[s("net localgroup	"),e("span",{class:"token comment"},"#查当前机器中所有的组名,了解不同组的职能"),s(`
net localgroup `),e("span",{class:"token string"},'"Administrators"'),s("	"),e("span",{class:"token comment"},"#查指定组中的成员列表"),s(`
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),A=e("h2",{id:"修改用户信息",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#修改用户信息","aria-hidden":"true"},"#"),s(" 修改用户信息")],-1),L=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token function"},"usermod"),s(`
	`),e("span",{class:"token parameter variable"},"-e"),s("	"),e("span",{class:"token comment"},"#有效期"),s(`
	`),e("span",{class:"token parameter variable"},"-L"),s("	"),e("span",{class:"token comment"},"#锁定用户"),s(`
	`),e("span",{class:"token parameter variable"},"-u"),s("	"),e("span",{class:"token comment"},"#修改用户ID"),s(`

`),e("span",{class:"token function"},"passwd"),s("	"),e("span",{class:"token comment"},"#后面单跟用户名改密码"),s(`
	`),e("span",{class:"token parameter variable"},"-l"),s("	"),e("span",{class:"token comment"},"#锁定用户不能改密码"),s(`
	`),e("span",{class:"token parameter variable"},"-d"),s("	"),e("span",{class:"token comment"},"#清除用户密码"),s(`
	`),e("span",{class:"token parameter variable"},"-S"),s("	"),e("span",{class:"token comment"},"#查询用户密码状态"),s(`
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),I=e("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell"},[e("pre",{class:"language-powershell"},[e("code",null,[e("span",{class:"token comment"},"#激活用户"),s(`
net user guest `),e("span",{class:"token operator"},"/"),s(`active:yes

`),e("span",{class:"token comment"},"#修改用户密码"),s(`
net user admin admin123
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),W=e("h2",{id:"用户登录信息查询",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#用户登录信息查询","aria-hidden":"true"},"#"),s(" 用户登录信息查询")],-1),q=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token function"},"id"),s("		"),e("span",{class:"token comment"},"#打印用户UID和GID (权限信息)"),s(`
`),e("span",{class:"token function"},"who"),s("		"),e("span",{class:"token comment"},"#查看当前登录的用户（tty本地登录、pts远程登录）"),s(`
w		`),e("span",{class:"token comment"},"#查看用户用什么方式从哪个IP什么时间登录的"),s(`
`),e("span",{class:"token function"},"uptime"),s("	"),e("span",{class:"token comment"},"#查看登陆多久、多少用户，负载"),s(`
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),D=e("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell"},[e("pre",{class:"language-powershell"},[e("code",null,[s("whoami "),e("span",{class:"token operator"},"/"),s("all	"),e("span",{class:"token comment"},"#查当前用户在目标系统中的具体权限"),s(`
query user	`),e("span",{class:"token comment"},"#查当前机器中正在线的用户"),s(`
quser		`),e("span",{class:"token comment"},"#查当前机器中正在线的用户"),s(`
net user	`),e("span",{class:"token comment"},"#查当前机器中所有的用户名"),s(`
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),C=m(`<h2 id="linux下账户文件信息" tabindex="-1"><a class="header-anchor" href="#linux下账户文件信息" aria-hidden="true">#</a> Linux下账户文件信息</h2><p><strong>账户信息文件</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">cat</span> /etc/passwd

root:x:0:0:root:/root:/bin/bash
<span class="token comment">#用户名：密码：用户ID：组ID：用户说明(描述)：用户主(家)目录：缺省shell(登陆后的shell)</span>
<span class="token comment">#注意：无密码只允许本机登陆，远程不允许登陆</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>账户密码文件</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">cat</span> /etc/shadow

root:<span class="token variable">$Gs1qhL2p3ZetrE4</span>.kMHx6qgbTcjQSt.Ft7ql1WpkopY/:16809:0:99999:7:::
<span class="token comment">#用户名：加密密码：密码最后一次修改日期：两次密码的修改时间间隔：密码有效期：密码到期的警告天数：密码过期宽限天数：账号失效时间：保留</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>账户组信息文件</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">cat</span> /etc/group

root:x:0:
<span class="token comment">#组名：口令：组标识号：组内用户列表</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7);function N(T,V){const i=u("CodeTabs");return o(),r("div",null,[b,c(i,{id:"3",data:[{title:"Linux"},{title:"Windows"}],"tab-id":"shell"},{tab0:n(({title:a,value:l,isActive:t})=>[v]),tab1:n(({title:a,value:l,isActive:t})=>[h]),_:1}),k,c(i,{id:"14",data:[{title:"Linux"},{title:"Windows"}],"tab-id":"shell"},{tab0:n(({title:a,value:l,isActive:t})=>[g]),tab1:n(({title:a,value:l,isActive:t})=>[_]),_:1}),x,c(i,{id:"25",data:[{title:"Linux"},{title:"Windows"}],"tab-id":"shell"},{tab0:n(({title:a,value:l,isActive:t})=>[f]),tab1:n(({title:a,value:l,isActive:t})=>[w]),_:1}),A,c(i,{id:"36",data:[{title:"Linux"},{title:"Windows"}],"tab-id":"shell"},{tab0:n(({title:a,value:l,isActive:t})=>[L]),tab1:n(({title:a,value:l,isActive:t})=>[I]),_:1}),W,c(i,{id:"47",data:[{title:"Linux"},{title:"Windows"}],"tab-id":"shell"},{tab0:n(({title:a,value:l,isActive:t})=>[q]),tab1:n(({title:a,value:l,isActive:t})=>[D]),_:1}),C])}const S=d(p,[["render",N],["__file","用户管理.html.vue"]]);export{S as default};
