import{_ as r}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as c,c as o,d,w as e,e as p,r as m,a as n,b as s}from"./app.c527752f.js";const u={},v=p(`<h2 id="网络状态" tabindex="-1"><a class="header-anchor" href="#网络状态" aria-hidden="true">#</a> 网络状态</h2><div class="custom-container info"><p class="custom-container-title">相关信息</p><p><strong>LISTEN</strong> 在监听状态中</p><p><strong>ESTABLISHED</strong> 已经建立连接的联机状态</p><p><strong>TIME_WAIT</strong> 目前为等待状态</p><p><strong>CLOSE_WAIT</strong> 被动关闭的一方,收到FIN包后,协议层回复ACK（阻塞住了）</p><p><strong>FIN_WAIT_2</strong> 主动关闭的一方等待对方关闭</p></div><h2 id="netstat命令-linux" tabindex="-1"><a class="header-anchor" href="#netstat命令-linux" aria-hidden="true">#</a> netstat命令-Linux</h2><p>打印网络连接、路由表、网络接口统计信息</p><table><thead><tr><th style="text-align:left;">参数</th><th style="text-align:left;">释义</th></tr></thead><tbody><tr><td style="text-align:left;">-a</td><td style="text-align:left;">#显示所有socket，包括正在监听的</td></tr><tr><td style="text-align:left;">-n</td><td style="text-align:left;">#使用数字形式的IP</td></tr><tr><td style="text-align:left;">-t</td><td style="text-align:left;">#查看tcp连接信息</td></tr><tr><td style="text-align:left;">-p</td><td style="text-align:left;">#显示进程及对应ID号</td></tr><tr><td style="text-align:left;">-l</td><td style="text-align:left;">#显示正在监听的sockets接口信息</td></tr><tr><td style="text-align:left;">-u</td><td style="text-align:left;">#查看udp连接信息</td></tr><tr><td style="text-align:left;">-s</td><td style="text-align:left;">#显示各种协议统计信息</td></tr></tbody></table><h2 id="netstat命令-windows" tabindex="-1"><a class="header-anchor" href="#netstat命令-windows" aria-hidden="true">#</a> netstat命令-Windows</h2><p>netstat 用于显示与IP 、TCP 、UDP 和ICMP 协议相关的统计数据</p><table><thead><tr><th style="text-align:left;">参数</th><th style="text-align:left;">释义</th></tr></thead><tbody><tr><td style="text-align:left;">-a</td><td style="text-align:left;">#显示所有连接和监听端口</td></tr><tr><td style="text-align:left;">-n</td><td style="text-align:left;">#以数字形式显示地址和端口号，显示所有已建立的有效连接</td></tr><tr><td style="text-align:left;">-o</td><td style="text-align:left;">#显示进程 PID</td></tr><tr><td style="text-align:left;">-p</td><td style="text-align:left;">#proto ,指定协议TCP、UDP</td></tr><tr><td style="text-align:left;">-r</td><td style="text-align:left;">#打印路由表，同 route print</td></tr></tbody></table><h2 id="ss命令-linux" tabindex="-1"><a class="header-anchor" href="#ss命令-linux" aria-hidden="true">#</a> ss命令（Linux）</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>ss <span class="token parameter variable">-l</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>ss的优势在于它能够显示更多更详细的有关TCP和连接状态的信息，而且比netstat更快速更高效</p><h2 id="连接数汇总" tabindex="-1"><a class="header-anchor" href="#连接数汇总" aria-hidden="true">#</a> 连接数汇总</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#查看当前TCP连接的状态和对应的连接数量 </span>
<span class="token function">netstat</span> <span class="token parameter variable">-n</span> <span class="token operator">|</span> <span class="token function">awk</span> <span class="token string">&#39;/^tcp/ {++S[$NF]} END {for(a in S) print a, S[a]}&#39;</span>

<span class="token comment">#等同于以下命令</span>
<span class="token function">netstat</span> <span class="token parameter variable">-antp</span> <span class="token operator">|</span><span class="token function">grep</span> ESTABLISHED <span class="token operator">|</span><span class="token function">wc</span> <span class="token parameter variable">-l</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="linux网络代理" tabindex="-1"><a class="header-anchor" href="#linux网络代理" aria-hidden="true">#</a> Linux网络代理</h2><p>开启socks5代理</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token parameter variable">--name</span> ss5_proxy <span class="token parameter variable">-p</span> <span class="token number">1080</span>:1080 <span class="token parameter variable">-e</span> <span class="token assign-left variable"><span class="token environment constant">USER</span></span><span class="token operator">=</span>admin <span class="token parameter variable">-e</span> <span class="token assign-left variable">PASS</span><span class="token operator">=</span>admin123 <span class="token parameter variable">--restart</span><span class="token operator">=</span>always imdevops/ss5_proxy:latest
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>配置全局代理（HTTP）</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#开启代理</span>
<span class="token function">vi</span> /etc/profile

<span class="token builtin class-name">export</span> <span class="token assign-left variable">proxy</span><span class="token operator">=</span><span class="token string">&quot;http://192.168.1.2:12345&quot;</span>
<span class="token builtin class-name">export</span> <span class="token assign-left variable">http_proxy</span><span class="token operator">=</span><span class="token variable">$proxy</span>
<span class="token builtin class-name">export</span> <span class="token assign-left variable">https_proxy</span><span class="token operator">=</span><span class="token variable">$proxy</span>

<span class="token builtin class-name">source</span> /etc/profile

<span class="token comment">#关闭代理</span>
<span class="token builtin class-name">unset</span> http_proxy
<span class="token builtin class-name">unset</span> https_proxy

<span class="token builtin class-name">source</span> /etc/profile
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="防火墙管理" tabindex="-1"><a class="header-anchor" href="#防火墙管理" aria-hidden="true">#</a> 防火墙管理</h2><p>配置防火墙需要管理员权限</p>`,20),b=n("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token comment"},"#查看防火墙状态"),s(`
firewall-cmd `),n("span",{class:"token parameter variable"},"--state"),s(`


systemctl start firewall.service	`),n("span",{class:"token comment"},"#开启防火墙"),s(`
systemctl stop firewall.service		`),n("span",{class:"token comment"},"#停止防火墙"),s(`
systemctl disable firewall.service	`),n("span",{class:"token comment"},"#禁止开机启动"),s(`

`),n("span",{class:"token comment"},"#SELinux是「Security-Enhanced Linux」的简称，是Linux的一个扩张强制访问控制安全模块"),s(`
getenforce	`),n("span",{class:"token comment"},"#查看selinux状态"),s(`
setenforce `),n("span",{class:"token number"},"0"),n("span",{class:"token comment"},"#临时关闭SELinux"),s(`
`),n("span",{class:"token comment"},"#永久关闭SELinux"),s(`
`),n("span",{class:"token function"},"vim"),s(` /etc/selinux/config
	`),n("span",{class:"token assign-left variable"},"SELINUX"),n("span",{class:"token operator"},"="),s(`disabled
	
`),n("span",{class:"token comment"},"#给防火墙添加放行规则"),s(`
firewall-cmd `),n("span",{class:"token parameter variable"},"--permanent"),s(),n("span",{class:"token parameter variable"},"--zone"),n("span",{class:"token operator"},"="),s("public --add-service"),n("span",{class:"token operator"},"="),s(`api服务
firewall-cmd `),n("span",{class:"token parameter variable"},"--reload"),s("	"),n("span",{class:"token comment"},"#重载防火墙配置"),s(`


`),n("span",{class:"token comment"},"#Ubuntu查看当前 UFW 的状态"),s(`
`),n("span",{class:"token function"},"sudo"),s(` ufw status verbose

`),n("span",{class:"token comment"},"#拒绝所有入站流量"),s(`
`),n("span",{class:"token function"},"sudo"),s(` ufw default deny incoming

`),n("span",{class:"token comment"},"#允许来自特定IP的SSH访问"),s(`
`),n("span",{class:"token function"},"sudo"),s(" ufw allow from "),n("span",{class:"token number"},"192.168"),s(".1.100 to any port "),n("span",{class:"token number"},"22"),s(`

`),n("span",{class:"token comment"},"#允许所有出站流量"),s(`
`),n("span",{class:"token function"},"sudo"),s(` ufw default allow outgoing
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),k=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token comment"},"#显示所有动态入站规则"),s(`
netsh advfirewall firewall show rule name=all `),n("span",{class:"token function"},"dir"),s("=in "),n("span",{class:"token function"},"type"),s(`=dynamic

`),n("span",{class:"token comment"},"#关闭防火墙"),s(`
netsh advfirewall `),n("span",{class:"token function"},"set"),s(` allprofiles state off

`),n("span",{class:"token comment"},"#允许入站"),s(`
netsh advfirewall firewall add rule name=`),n("span",{class:"token string"},'"pass nc"'),s(),n("span",{class:"token function"},"dir"),s("=in action=allow program="),n("span",{class:"token string"},'"c:\\nc.exe"'),s(`

`),n("span",{class:"token comment"},"#允许出站"),s(`
netsh advfirewall firewall add rule name=`),n("span",{class:"token string"},'"Allow nc"'),s(),n("span",{class:"token function"},"dir"),s("=out action=allow program="),n("span",{class:"token string"},'"c:\\nc.exe"'),s(`

`),n("span",{class:"token comment"},"#3389端口放行"),s(`
netsh advfirewall firewall add rule name=`),n("span",{class:"token string"},'"remote Desktop"'),s(" protocol=TCP "),n("span",{class:"token function"},"dir"),s(`=in localport=3389 action=allow

`),n("span",{class:"token comment"},"#自定义防火墙日志存储位置"),s(`
netsh advfirewall `),n("span",{class:"token function"},"set"),s(" currentprofile logging filename "),n("span",{class:"token string"},'"c:\\windows\\temp\\fw.log"'),s(`

`),n("span",{class:"token comment"},"#Server 2003及之前的版本"),s(`
netsh firewall `),n("span",{class:"token function"},"set"),s(" opmode disable   "),n("span",{class:"token comment"},"#关闭防火墙"),s(`
netsh firewall add allowedprogram c:\\nc`),n("span",{class:"token punctuation"},"."),s("exe "),n("span",{class:"token string"},'"allow nc"'),s(" enable   "),n("span",{class:"token comment"},"#允许指定程序的全部连接"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1);function f(h,g){const a=m("CodeTabs");return c(),o("div",null,[v,d(a,{id:"184",data:[{title:"Linux"},{title:"Windows"}],"tab-id":"shell"},{tab0:e(({title:t,value:l,isActive:i})=>[b]),tab1:e(({title:t,value:l,isActive:i})=>[k]),_:1})])}const w=r(u,[["render",f],["__file","网络管理.html.vue"]]);export{w as default};
