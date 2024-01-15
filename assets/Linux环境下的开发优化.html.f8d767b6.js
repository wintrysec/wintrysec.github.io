import{_ as p}from"./_plugin-vue_export-helper.cdc0426e.js";import{o,c as r,d,w as a,e,r as m,a as n,b as s}from"./app.d54d0fba.js";const u={},v=e(`<h2 id="文件内容乱码怎么办" tabindex="-1"><a class="header-anchor" href="#文件内容乱码怎么办" aria-hidden="true">#</a> 文件内容乱码怎么办？</h2><p>由于windows上文件的结束符和linux上的不同，那么在windows上编写的文件在Linux上就会报错： /bin/sh ^M: bad interpreter: No such file or directory</p><p>解决办法：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">find</span> / <span class="token parameter variable">-name</span> <span class="token string">&quot;*.sh&quot;</span> <span class="token operator">|</span> <span class="token function">xargs</span> dos2unix
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="文件名乱码怎么解决" tabindex="-1"><a class="header-anchor" href="#文件名乱码怎么解决" aria-hidden="true">#</a> 文件名乱码怎么解决？</h2><p>在windows上使用ftp上传文件到Linux上，中文名称在Linux系统中显示为乱码。</p><p>原因在于，Windows 的文件名中文编码默认为GBK，压缩或者上传后，文件名还会是GBK编码，而Linux中默认文件名编码为UTF8。由于编码不一致所以导致了文件名乱码的问题，解决这个问题需要对文件名进行转码：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>yum <span class="token function">install</span> convmv
convmv <span class="token parameter variable">-f</span> gbk <span class="token parameter variable">-t</span> utf-8 <span class="token parameter variable">-r</span> <span class="token parameter variable">--notest</span> /home/wwwroot
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="因mongodb日志过大导致存储空间不足" tabindex="-1"><a class="header-anchor" href="#因mongodb日志过大导致存储空间不足" aria-hidden="true">#</a> 因MongoDB日志过大导致存储空间不足</h2>`,9),b=n("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token comment"},"#找到占用空间大的文件，并删除 "),s(`
`),n("span",{class:"token builtin class-name"},"cd"),s(" /"),n("span",{class:"token punctuation"},";"),n("span",{class:"token function"},"df"),s(),n("span",{class:"token parameter variable"},"-h"),s(`
`),n("span",{class:"token function"},"find"),s(" / "),n("span",{class:"token parameter variable"},"-xdev"),s(),n("span",{class:"token parameter variable"},"-size"),s(" +1000M "),n("span",{class:"token parameter variable"},"-exec"),s(),n("span",{class:"token function"},"ls"),s(),n("span",{class:"token parameter variable"},"-l"),s(),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token punctuation"},"\\"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),k=n("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token function"},"cat"),s(),n("span",{class:"token operator"},">"),s(" /home/delmongolog.sh "),n("span",{class:"token operator"},"<<"),n("span",{class:"token string"},[s(`EOF
#!/bin/bash
kill -SIGUSR1 `),n("span",{class:"token variable"},[n("span",{class:"token variable"},"`"),s("pidof mongod"),n("span",{class:"token variable"},"`")]),s(";cd /var/log/mongodb/;rm -rf "),n("span",{class:"token variable"},[n("span",{class:"token variable"},"`"),n("span",{class:"token function"},"ls"),s(),n("span",{class:"token operator"},"|"),s(),n("span",{class:"token function"},"grep"),s(" log."),n("span",{class:"token variable"},"`")]),s(`
EOF`)]),s(`

`),n("span",{class:"token comment"},"#定时清除mongod.log"),s(`
`),n("span",{class:"token function"},"mv"),s(` /home/delmongolog.sh /etc/delmongolog.sh
`),n("span",{class:"token function"},"chmod"),s(),n("span",{class:"token number"},"755"),s(` /etc/delmongolog.sh
`),n("span",{class:"token builtin class-name"},"echo"),s(),n("span",{class:"token string"},'"*/60 * * * * root /etc/delmongolog.sh"'),s(),n("span",{class:"token operator"},">>"),s(` /etc/crontab
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),h=e(`<h2 id="自己签发tls证书" tabindex="-1"><a class="header-anchor" href="#自己签发tls证书" aria-hidden="true">#</a> 自己签发TLS证书</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>openssl genrsa <span class="token parameter variable">-des3</span> <span class="token parameter variable">-out</span> ssl.key <span class="token number">2048</span> 
openssl rsa <span class="token parameter variable">-in</span> ssl.key <span class="token parameter variable">-out</span> ssl.key
openssl req <span class="token parameter variable">-new</span> <span class="token parameter variable">-key</span> ssl.key <span class="token parameter variable">-out</span> ssl.csr 
openssl x509 <span class="token parameter variable">-req</span> <span class="token parameter variable">-days</span> <span class="token number">3650</span> <span class="token parameter variable">-in</span> ssl.csr <span class="token parameter variable">-signkey</span> ssl.key <span class="token parameter variable">-out</span> ssl.pem
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="无网络安装依赖" tabindex="-1"><a class="header-anchor" href="#无网络安装依赖" aria-hidden="true">#</a> 无网络安装依赖</h2><h3 id="yum包" tabindex="-1"><a class="header-anchor" href="#yum包" aria-hidden="true">#</a> Yum包</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#1、用可联网的机器下载软件和依赖包 </span>
yumdownloader <span class="token parameter variable">--resolve</span> yum-utils gcc <span class="token function">make</span> redis

<span class="token comment">#2、把下载好的包放在未联网机器上 </span>
<span class="token function">rpm</span> <span class="token parameter variable">-iv</span> redis
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="pip包" tabindex="-1"><a class="header-anchor" href="#pip包" aria-hidden="true">#</a> pip包</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#1、下载指定包到文件夹 </span>
pip download <span class="token parameter variable">-d</span> install/pip_packages/ <span class="token parameter variable">-r</span> requirements.txt

<span class="token comment">#2、安装指定的离线包 </span>
pip <span class="token function">install</span> --no-index --find-links<span class="token operator">=</span><span class="token string">&quot;install/pip_packages/&quot;</span> <span class="token parameter variable">-r</span> requirements.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="linux同时打开文件数" tabindex="-1"><a class="header-anchor" href="#linux同时打开文件数" aria-hidden="true">#</a> Linux同时打开文件数</h2><p>Golang开发的端口扫描器，在Windows上运行正常可以扫描到20个开放端口，但是在Linux上只能扫描到2个开放端口，而且非偶发现象，且代码一致。</p><p>分析原因发现是<code>net.DialTimeout</code>这个函数最终其实就是调用<code>linux socket</code>，而linux中任何东西都是文件，同时linux默认允许同时打开的文件数是1024。</p><p>可以用如下命令查看：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">ulimit</span> <span class="token parameter variable">-a</span>

<span class="token comment">#结果示例</span>
core <span class="token function">file</span> size          <span class="token punctuation">(</span>blocks, -c<span class="token punctuation">)</span> <span class="token number">0</span>
data seg size           <span class="token punctuation">(</span>kbytes, -d<span class="token punctuation">)</span> unlimited
scheduling priority             <span class="token punctuation">(</span>-e<span class="token punctuation">)</span> <span class="token number">0</span>
<span class="token function">file</span> size               <span class="token punctuation">(</span>blocks, -f<span class="token punctuation">)</span> unlimited
pending signals                 <span class="token punctuation">(</span>-i<span class="token punctuation">)</span> <span class="token number">7823</span>
max locked memory       <span class="token punctuation">(</span>kbytes, -l<span class="token punctuation">)</span> <span class="token number">64</span>
max memory size         <span class="token punctuation">(</span>kbytes, -m<span class="token punctuation">)</span> unlimited
<span class="token function">open</span> files                      <span class="token punctuation">(</span>-n<span class="token punctuation">)</span> <span class="token number">1024</span>        <span class="token comment">#默认允许打开的最大文件数</span>
pipe size            <span class="token punctuation">(</span><span class="token number">512</span> bytes, -p<span class="token punctuation">)</span> <span class="token number">8</span>
POSIX message queues     <span class="token punctuation">(</span>bytes, -q<span class="token punctuation">)</span> <span class="token number">819200</span>
real-time priority              <span class="token punctuation">(</span>-r<span class="token punctuation">)</span> <span class="token number">0</span>
stack size              <span class="token punctuation">(</span>kbytes, -s<span class="token punctuation">)</span> <span class="token number">8192</span>
cpu <span class="token function">time</span>               <span class="token punctuation">(</span>seconds, -t<span class="token punctuation">)</span> unlimited
max user processes              <span class="token punctuation">(</span>-u<span class="token punctuation">)</span> <span class="token number">7823</span>
virtual memory          <span class="token punctuation">(</span>kbytes, -v<span class="token punctuation">)</span> unlimited
<span class="token function">file</span> locks                      <span class="token punctuation">(</span>-x<span class="token punctuation">)</span> unlimited
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以看到open files那一行，默认是1024，所以当启动远远大于1024个协程时（如代码中设置的2000），就有可能同时打开超过1024个文件，导致socket链接建立失败。</p><details class="custom-container details"><summary>如何解决这个问题？</summary><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">echo</span> <span class="token string">&quot;* soft nofile 65533&quot;</span> <span class="token operator">&gt;&gt;</span> /etc/security/limits.conf
<span class="token builtin class-name">echo</span> <span class="token string">&quot;* hard nofile 65533&quot;</span> <span class="token operator">&gt;&gt;</span> /etc/security/limits.conf
<span class="token builtin class-name">echo</span> session required /lib/security/pam_limits.so <span class="token operator">&gt;&gt;</span> /etc/pam.d/login
<span class="token comment">#重启系统</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>告诉Linux在用户完成系统登录后，应该调用<code>pam_limits.so</code>模块来设置系统对该用户可使用的各种资源数量的最大限制(包括用户可打开的最大文件数限制)，而<code>pam_limits.so</code>模块就会从<code>/etc/security/limits.conf</code>文件中读取配置来设置这些限制值。</p></details><h2 id="linux网络内核优化" tabindex="-1"><a class="header-anchor" href="#linux网络内核优化" aria-hidden="true">#</a> Linux网络内核优化</h2><p>内核参数<code>/etc/sysctl.conf</code>是用来控制linux网络的配置文件，对于依赖网络的程序非常重要</p><details class="custom-container details"><summary>直接使用的优化配置</summary><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">cat</span> <span class="token operator">&gt;</span> /etc/sysctl.conf <span class="token operator">&lt;&lt;</span><span class="token string">EOF
net.ipv4.ip_local_port_range = 1024 65535
net.core.rmem_default = 2097152
net.core.rmem_max = 5242880
net.core.wmem_default = 2097152
net.core.wmem_max = 5242880
net.ipv4.tcp_mem = 280521 374030 561042
net.ipv4.tcp_rmem = 1048576 2097152 5242880
net.ipv4.tcp_wmem = 1048576 2097152 5242880
net.ipv4.tcp_tw_recycle = 1
net.ipv4.tcp_tw_reuse = 1
net.ipv4.tcp_timestamps = 1
net.ipv4.tcp_keepalive_time = 1200
net.ipv4.tcp_fin_timeout = 30
net.ipv4.tcp_syncookies = 1
net.ipv4.tcp_max_tw_buckets = 50000
net.ipv4.tcp_synack_retries = 1
net.ipv4.tcp_syn_retries = 1
fs.file-max = 10240000
net.ipv4.tcp_sack = 1
net.ipv4.tcp_window_scaling = 0
net.core.netdev_max_backlog = 30000
net.core.somaxconn = 32768
net.ipv4.tcp_max_orphans = 32768
net.ipv4.tcp_max_syn_backlog = 8912
EOF</span>
<span class="token function">sysctl</span> <span class="token parameter variable">-p</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h3 id="网络缓存大小" tabindex="-1"><a class="header-anchor" href="#网络缓存大小" aria-hidden="true">#</a> 网络缓存大小</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#本地端口使用范围</span>
net.ipv4.ip_local_port_range <span class="token operator">=</span> <span class="token number">1024</span> <span class="token number">65535</span>

<span class="token comment">#内核网络接收缓存大小</span>
net.core.rmem_default <span class="token operator">=</span> <span class="token number">2097152</span>
net.core.rmem_max <span class="token operator">=</span> <span class="token number">5242880</span>

<span class="token comment">#内核网络发送缓存大小</span>
net.core.wmem_default <span class="token operator">=</span> <span class="token number">2097152</span>
net.core.wmem_max <span class="token operator">=</span> <span class="token number">5242880</span>

<span class="token comment">#TCP缓存,最小值,默认值,最大值</span>
net.ipv4.tcp_mem <span class="token operator">=</span> <span class="token number">280521</span> <span class="token number">374030</span> <span class="token number">561042</span>
<span class="token comment">#TCP接收缓存,最小值,默认值,最大值</span>
net.ipv4.tcp_rmem <span class="token operator">=</span> <span class="token number">1048576</span> <span class="token number">2097152</span> <span class="token number">5242880</span>
<span class="token comment">#TCP发送缓存,最小值,默认值,最大值</span>
net.ipv4.tcp_wmem <span class="token operator">=</span> <span class="token number">1048576</span> <span class="token number">2097152</span> <span class="token number">5242880</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="time-wait问题优化" tabindex="-1"><a class="header-anchor" href="#time-wait问题优化" aria-hidden="true">#</a> TIME_WAIT问题优化</h3><p>启用快速回收和连接复用</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>net.ipv4.tcp_tw_recycle <span class="token operator">=</span> <span class="token number">1</span>		<span class="token comment">#启用连接回收</span>
net.ipv4.tcp_tw_reuse <span class="token operator">=</span> <span class="token number">1</span>		<span class="token comment">#复用已经分配的连接资源</span>
net.ipv4.tcp_timestamps <span class="token operator">=</span> <span class="token number">1</span>		<span class="token comment">#记录标记时间戳，上边两个配置需要此配置的支持</span>

net.ipv4.tcp_keepalive_time <span class="token operator">=</span> <span class="token number">1200</span>
<span class="token comment">#表示当keepalive起用的时候，TCP发送keepalive消息的频度；缺省是2小时，改为20分钟</span>

net.ipv4.tcp_fin_timeout <span class="token operator">=</span> <span class="token number">30</span>
<span class="token comment">#对于本端断开的socket连接,TCP保持在FINWAIT状态的时间(秒)系統默认的TIMEOUT 时间</span>

net.ipv4.tcp_syncookies <span class="token operator">=</span> <span class="token number">1</span>
<span class="token comment">#当出现SYN等待队列溢出时，启用cookies来处理，可防范少量SYN攻击，默认为0，表示关闭</span>

net.ipv4.tcp_max_tw_buckets <span class="token operator">=</span> <span class="token number">50000</span>
<span class="token comment">#time Wait最多数量,默认为180000</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="tcp连接优化" tabindex="-1"><a class="header-anchor" href="#tcp连接优化" aria-hidden="true">#</a> TCP连接优化</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#SYN/ACK重试次数默认为5，调低可以加快回收半连接，减少资源消耗，但是网络不好时会无法连接</span>
net.ipv4.tcp_synack_retries <span class="token operator">=</span> <span class="token number">1</span>
net.ipv4.tcp_syn_retries <span class="token operator">=</span> <span class="token number">1</span>

<span class="token comment">#增大服务器文件描述符数量</span>
fs.file-max <span class="token operator">=</span> <span class="token number">10240000</span>

<span class="token comment">#重复发包，TCP重连机制</span>
net.ipv4.tcp_sack <span class="token operator">=</span> <span class="token number">1</span>
net.ipv4.tcp_window_scaling <span class="token operator">=</span> <span class="token number">0</span>

<span class="token comment">#在每个网络接口接收数据包的速率比内核处理这些包的速率快时,允许送到队列的数据包的最大数目。</span>
net.core.netdev_max_backlog <span class="token operator">=</span> <span class="token number">30000</span>

<span class="token comment">#定义了系统中每一个端口最大的监听队列的长度,这是个全局的参数。</span>
net.core.somaxconn <span class="token operator">=</span> <span class="token number">32768</span>
net.ipv4.tcp_max_orphans <span class="token operator">=</span> <span class="token number">32768</span>

net.ipv4.tcp_max_syn_backlog <span class="token operator">=</span> <span class="token number">8912</span>
<span class="token comment">#表示SYN队列的长度，默认为1024，加大队列长度为8192，可以容纳更多等待连接的网络连接数。</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,24);function _(g,x){const i=m("CodeTabs");return o(),r("div",null,[v,d(i,{id:"23",data:[{title:"手动处理"},{title:"自动处理"}],"tab-id":"shell"},{tab0:a(({title:l,value:t,isActive:c})=>[b]),tab1:a(({title:l,value:t,isActive:c})=>[k]),_:1}),h])}const w=p(u,[["render",_],["__file","Linux环境下的开发优化.html.vue"]]);export{w as default};
