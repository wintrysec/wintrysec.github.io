import{_ as i}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as t,c as p,a as s,b as n,d as l,e as a,r}from"./app.1994d791.js";const c={},o=a(`<div class="custom-container tip"><p class="custom-container-title">提示</p><p>因为dirsearch需要3.7或更高版本的python，所以需要先解决环境问题</p><p>Windows直接下载高版本的python安装即可，Centos7参考以下方法</p></div><h2 id="源码安装python" tabindex="-1"><a class="header-anchor" href="#源码安装python" aria-hidden="true">#</a> 源码安装python</h2><h4 id="一、安装开发者工具编译器和依赖" tabindex="-1"><a class="header-anchor" href="#一、安装开发者工具编译器和依赖" aria-hidden="true">#</a> 一、安装开发者工具编译器和依赖</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>yum <span class="token parameter variable">-y</span> groupinstall <span class="token string">&quot;Development tools&quot;</span>
yum <span class="token function">install</span> <span class="token parameter variable">-y</span> bzip2-devel expat-devel gdbm-devel readline-devel sqlite-devel psmisc libffi-devel
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="二、安装ssl模块" tabindex="-1"><a class="header-anchor" href="#二、安装ssl模块" aria-hidden="true">#</a> 二、安装SSL模块</h4><p>下载最新版源码解压</p>`,6),d={href:"https://www.openssl.org/source/openssl-1.1.1s.tar.gz",target:"_blank",rel:"noopener noreferrer"},u=a(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">tar</span> <span class="token parameter variable">-zxf</span> openssl-1.1.1s.tar.gz<span class="token punctuation">;</span><span class="token builtin class-name">cd</span> openssl-1.1.1s
./config <span class="token parameter variable">--prefix</span><span class="token operator">=</span>/usr/local/openssl
<span class="token function">make</span> <span class="token operator">&amp;&amp;</span> <span class="token function">make</span> <span class="token function">install</span>

<span class="token comment">#替换掉旧版本的openssl</span>
<span class="token function">mv</span> /usr/bin/openssl /usr/bin/openssl.old
<span class="token function">mv</span> /usr/lib64/openssl /usr/lib64/openssl.old
<span class="token function">mv</span> /usr/lib64/libssl.so /usr/lib64/libssl.so.old
<span class="token function">ln</span> <span class="token parameter variable">-s</span> /usr/local/openssl/bin/openssl /usr/bin/openssl
<span class="token function">ln</span> <span class="token parameter variable">-s</span> /usr/local/openssl/include/openssl /usr/include/openssl
<span class="token function">ln</span> <span class="token parameter variable">-s</span> /usr/local/openssl/lib/libssl.so /usr/lib64/libssl.so
<span class="token builtin class-name">echo</span> <span class="token string">&quot;/usr/local/openssl/lib&quot;</span> <span class="token operator">&gt;&gt;</span> /etc/ld.so.conf
ldconfig <span class="token parameter variable">-v</span>

<span class="token comment">#查看openssl版本</span>
openssl version
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="三、安装python" tabindex="-1"><a class="header-anchor" href="#三、安装python" aria-hidden="true">#</a> 三、安装Python</h4><p>下载python源码，然后上传到centos7服务器上</p>`,3),m={href:"https://www.python.org/ftp/python/3.7.10/Python-3.7.10.tgz",target:"_blank",rel:"noopener noreferrer"},v=a(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">tar</span> <span class="token parameter variable">-xzf</span> Python-3.7.10.tgz
<span class="token function">mkdir</span> /usr/local/python3/
<span class="token builtin class-name">cd</span> Python-3.7.10
<span class="token function">make</span> clean
./configure --with-openssl<span class="token operator">=</span>/usr/local/openssl <span class="token parameter variable">--prefix</span><span class="token operator">=</span>/usr/local/python3
<span class="token function">make</span> <span class="token operator">&amp;&amp;</span> <span class="token function">make</span> <span class="token function">install</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="三、替换旧版本设置" tabindex="-1"><a class="header-anchor" href="#三、替换旧版本设置" aria-hidden="true">#</a> 三、替换旧版本设置</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">rm</span> <span class="token parameter variable">-f</span> /usr/bin/python3
<span class="token function">rm</span> <span class="token parameter variable">-f</span> /usr/bin/pip
<span class="token function">ln</span> <span class="token parameter variable">-s</span> /usr/local/python3/bin/python3.7 /usr/bin/python3
<span class="token function">ln</span> <span class="token parameter variable">-s</span> /usr/local/python3/bin/pip3.7 /usr/bin/pip
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="安装dirsearch" tabindex="-1"><a class="header-anchor" href="#安装dirsearch" aria-hidden="true">#</a> 安装dirsearch</h2><p>将dirsearch的压缩包上传到服务器解压</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">unzip</span> dirsearch-0.4.3.zip<span class="token punctuation">;</span><span class="token function">rm</span> <span class="token parameter variable">-rf</span> dirsearch-0.4.3.zip
<span class="token function">mv</span> dirsearch-0.4.3/ dirsearch<span class="token punctuation">;</span><span class="token builtin class-name">cd</span> dirsearch
pip <span class="token function">install</span> setuptools <span class="token parameter variable">-i</span> https://pypi.tuna.tsinghua.edu.cn/simple
python3 setup.py <span class="token function">install</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>设置不用python前缀，在系统的任何目录都能直接使用</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">ln</span> <span class="token parameter variable">-s</span> /hack/dirsearch/dirsearch.py /usr/bin/dirsearch
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="使用方法" tabindex="-1"><a class="header-anchor" href="#使用方法" aria-hidden="true">#</a> 使用方法</h2><h4 id="简单扫描" tabindex="-1"><a class="header-anchor" href="#简单扫描" aria-hidden="true">#</a> 简单扫描</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>dirsearch <span class="token parameter variable">-u</span> http://xxx.com/
dirsearch <span class="token parameter variable">-u</span> http://xxx.com/ <span class="token parameter variable">-t</span> <span class="token number">99</span> <span class="token parameter variable">-x</span> <span class="token number">404</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="常用选项" tabindex="-1"><a class="header-anchor" href="#常用选项" aria-hidden="true">#</a> 常用选项</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token parameter variable">-u</span>		<span class="token comment">#指定目标URL</span>
<span class="token parameter variable">-l</span>		<span class="token comment">#指定目标URL列表文件，多个站点一起扫描</span>
<span class="token parameter variable">-w</span>		<span class="token comment">#指定字典文件，多个字典用逗号分隔</span>
<span class="token parameter variable">-e</span>		<span class="token comment">#指定扩展  -e php,jsp,asp,html,js</span>
<span class="token parameter variable">-t</span>		<span class="token comment">#设置线程 默认25</span>
<span class="token parameter variable">-m</span>		<span class="token comment">#HTTP请求方法,默认GET</span>
<span class="token parameter variable">-x</span>		<span class="token comment">#排除某种HTTP状态码</span>

<span class="token parameter variable">--delay</span><span class="token operator">=</span>DELAY	<span class="token comment">#每个请求之间延时</span>
<span class="token parameter variable">--proxy</span><span class="token operator">=</span>PROXY	<span class="token comment">#设置代理</span>
--proxy-auth<span class="token operator">=</span>xx	<span class="token comment">#代理凭证</span>
<span class="token parameter variable">--retries</span><span class="token operator">=</span>RETRIES<span class="token comment">#请求失败重试次数</span>

<span class="token parameter variable">--crawl</span>	<span class="token comment">#在响应中抓取新路径</span>
<span class="token parameter variable">-o</span> <span class="token environment constant">PATH</span>	<span class="token comment">#输出文件路径</span>
<span class="token parameter variable">--format</span><span class="token operator">=</span>FORMAT	<span class="token comment">#报告格式，simple, plain, json, xml,md, csv, html, sqlite</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="使用代理-clash" tabindex="-1"><a class="header-anchor" href="#使用代理-clash" aria-hidden="true">#</a> 使用代理（Clash）</h4><p>因为目录扫描属于明显的攻击行为，经常会被WAF拦截封禁IP，所以代理是至关重要的。</p><p>这里介绍的是使用clash让系统全局代理</p>`,16),b={href:"https://github.com/Dreamacro/clash/releases",target:"_blank",rel:"noopener noreferrer"},h=a(`<p>1）初始化安装</p><p>将下载压缩包解压（用7zip这个工具），把可执行的二进制PE文件上传到服务器</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#给上传的文件添加可执行权限</span>
<span class="token function">chmod</span> +x clash

<span class="token comment">#启动clash，同时会生成配置文件并自动下载Country.mmdb文件</span>
./clash <span class="token parameter variable">-d</span> <span class="token builtin class-name">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2）图形化管理页面</p>`,4),k={href:"http://clash.razord.top/#/proxies",target:"_blank",rel:"noopener noreferrer"},g=a(`<div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token comment">#config.yaml</span>
<span class="token key atrule">mode</span><span class="token punctuation">:</span> Global
<span class="token key atrule">mixed-port</span><span class="token punctuation">:</span> <span class="token number">7890</span>	<span class="token comment">#混合代理端口 http和socks</span>
<span class="token key atrule">external-controller</span><span class="token punctuation">:</span> <span class="token string">&#39;0.0.0.0:9999&#39;</span>	<span class="token comment">#外部管理监听</span>
<span class="token key atrule">secret</span><span class="token punctuation">:</span> <span class="token string">&#39;xx1234&#39;</span>	<span class="token comment">#外部管理监听的密钥</span>

<span class="token comment">#具体的代理服务器也是在这里配置，参考Windows下的配置文件即可</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3）开启Linux系统代理</p><p>让http和https的流量都经过代理转发</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#这是临时的,只在当前终端管用</span>
<span class="token builtin class-name">export</span> <span class="token assign-left variable">proxy</span><span class="token operator">=</span><span class="token string">&quot;http://127.0.0.1:7890&quot;</span>
<span class="token builtin class-name">export</span> <span class="token assign-left variable">http_proxy</span><span class="token operator">=</span><span class="token variable">$proxy</span>
<span class="token builtin class-name">export</span> <span class="token assign-left variable">https_proxy</span><span class="token operator">=</span><span class="token variable">$proxy</span>
<span class="token builtin class-name">export</span> <span class="token assign-left variable">ftp_proxy</span><span class="token operator">=</span><span class="token variable">$proxy</span>
<span class="token builtin class-name">export</span> <span class="token assign-left variable">no_proxy</span><span class="token operator">=</span><span class="token string">&quot;localhost, 127.0.0.1, ::1&quot;</span>

<span class="token comment">#取消代理</span>
<span class="token builtin class-name">unset</span> http_proxy
<span class="token builtin class-name">unset</span> https_proxy
<span class="token builtin class-name">unset</span> ftp_proxy
<span class="token builtin class-name">unset</span> no_proxy

<span class="token comment">#验证代理可用否</span>
<span class="token function">curl</span> cip.cc
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>4）Clash作为服务运行</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">cat</span> <span class="token operator">&gt;</span> /etc/systemd/system/clash.service <span class="token operator">&lt;&lt;</span><span class="token string">EOF
[Unit]
Description=Clash daemon.
After=network.target

[Service]
Type=simple
Restart=always
ExecStart=/root/Pentest_Tools/Clash/clash -d /root/Pentest_Tools/Clash

[Install]
WantedBy=multi-user.target
EOF</span>

systemctl daemon-reload
systemctl <span class="token builtin class-name">enable</span> clash
systemctl start clash
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="目录字典" tabindex="-1"><a class="header-anchor" href="#目录字典" aria-hidden="true">#</a> 目录字典</h4><p>目录字典位置 <code>db/dicc.txt</code></p><p>默认自带的字典已经很好了，也可以和其它字典进行组合去重后扩展字典范围。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#自带的字典有9000多行</span>
<span class="token punctuation">[</span>root@VM-4-5-centos db<span class="token punctuation">]</span><span class="token comment"># wc -l dicc.txt </span>
<span class="token number">9482</span> dicc.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10);function f(x,y){const e=r("ExternalLinkIcon");return t(),p("div",null,[o,s("p",null,[s("a",d,[n("https://www.openssl.org/source/openssl-1.1.1s.tar.gz"),l(e)])]),u,s("p",null,[s("a",m,[n("https://www.python.org/ftp/python/3.7.10/Python-3.7.10.tgz"),l(e)])]),v,s("p",null,[n("软件下载地址："),s("a",b,[n("https://github.com/Dreamacro/clash/releases"),l(e)])]),h,s("p",null,[n("使用外部控制管理 "),s("a",k,[n("http://clash.razord.top/#/proxies"),l(e)])]),g])}const z=i(c,[["render",f],["__file","dirsearch.html.vue"]]);export{z as default};
