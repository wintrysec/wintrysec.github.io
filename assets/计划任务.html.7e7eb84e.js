import{_ as s}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as n,c as a,e}from"./app.f0041ddc.js";const t={},o=e(`<h2 id="crontab计划任务-linux系统" tabindex="-1"><a class="header-anchor" href="#crontab计划任务-linux系统" aria-hidden="true">#</a> crontab计划任务（Linux系统）</h2><p>我们经常使用的是crontab命令是cron table的简写，它是cron的配置文件，也可以叫它作业列表，我们可以在以下文件夹内找到相关配置文件</p><table><thead><tr><th style="text-align:left;">路径</th><th style="text-align:left;">解释</th></tr></thead><tbody><tr><td style="text-align:left;">/var/spool/cron/</td><td style="text-align:left;">目录下存放的是每个用户包括root的crontab任务，每个任务以创建者的名字命名</td></tr><tr><td style="text-align:left;">/etc/crontab</td><td style="text-align:left;">这个文件负责调度各种管理和维护任务</td></tr><tr><td style="text-align:left;">/etc/cron.d/</td><td style="text-align:left;">这个目录用来存放任何要执行的crontab文件或脚本</td></tr></tbody></table><p>我们还可以把脚本放在以下目录中，让它每小时/天/星期、月执行一次</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>/etc/cron.hourly
/etc/cron.daily
/etc/cron.weekly
/etc/cron.monthly
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="使用方法示例" tabindex="-1"><a class="header-anchor" href="#使用方法示例" aria-hidden="true">#</a> 使用方法示例</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#api开机自启</span>
<span class="token function">chmod</span> +x /home/startapi.sh
<span class="token builtin class-name">echo</span> <span class="token string">&quot;* * * * * root /home/startapi.sh&quot;</span> <span class="token operator">&gt;&gt;</span> /etc/crontab

<span class="token comment">#定时清除mongod.log(每60分钟)</span>
<span class="token function">mv</span> /home/install/delmongolog.sh /etc/delmongolog.sh
<span class="token function">chmod</span> <span class="token number">755</span> /etc/delmongolog.sh
<span class="token builtin class-name">echo</span> <span class="token string">&quot;*/60 * * * * root /etc/delmongolog.sh&quot;</span> <span class="token operator">&gt;&gt;</span> /etc/crontab

systemctl start crond
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="schtasks命令-windows系统" tabindex="-1"><a class="header-anchor" href="#schtasks命令-windows系统" aria-hidden="true">#</a> schtasks命令（Windows系统）</h2><p><strong>查询计划任务</strong></p><div class="language-powershell line-numbers-mode" data-ext="powershell"><pre class="language-powershell"><code>schtasks <span class="token operator">/</span>query <span class="token operator">/</span>fo LIST <span class="token operator">/</span>v
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>创建计划任务</strong></p><div class="language-powershell line-numbers-mode" data-ext="powershell"><pre class="language-powershell"><code><span class="token comment">#每20分钟运行一次该任务</span>
schtasks <span class="token operator">/</span>create <span class="token operator">/</span><span class="token function">sc</span> minute <span class="token operator">/</span>mo 20 <span class="token operator">/</span>tn <span class="token string">&quot;Test Script&quot;</span> <span class="token operator">/</span>tr C:\\Users\\Public\\Music\\test<span class="token punctuation">.</span>exe

<span class="token comment">#/tr &lt;Taskrun&gt;	指定任务运行的程序或命令。 </span>
<span class="token comment">#键入可执行文件、脚本文件或批处理文件的完全限定路径和文件名。</span>
<span class="token comment">#路径名称不得超过 262 个字符。 </span>
<span class="token comment">#如果不添加路径， schtasks 假定该文件位于 &lt;systemroot&gt;\\System32 目录中</span>

<span class="token comment">#每小时运行一次</span>
schtasks <span class="token operator">/</span>create <span class="token operator">/</span><span class="token function">sc</span> hourly <span class="token operator">/</span>mo 1 <span class="token operator">/</span>tn MyApp <span class="token operator">/</span>tr c:\\apps\\myapp<span class="token punctuation">.</span>exe

<span class="token comment">#每天上午8:00运行一次，直到2023 年 12 月 20日</span>
schtasks <span class="token operator">/</span>create <span class="token operator">/</span>tn MyApp <span class="token operator">/</span>tr c:\\apps\\myapp<span class="token punctuation">.</span>exe <span class="token operator">/</span><span class="token function">sc</span> daily <span class="token operator">/</span>st 08:00 <span class="token operator">/</span>ed 20/12/2023
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>删除计划任务</strong></p><p>从计划中删除计划任务，不会删除任务运行的程序或中断正在运行的程序</p><div class="language-powershell line-numbers-mode" data-ext="powershell"><pre class="language-powershell"><code>schtasks <span class="token operator">/</span>delete <span class="token operator">/</span>tn <span class="token function">Start</span> Mail <span class="token operator">/</span>s Svr16 <span class="token operator">/</span>f
<span class="token comment">#使用 /s 参数来标识远程计算机, /f 参数禁止显示确认消息</span>

schtasks <span class="token operator">/</span>delete <span class="token operator">/</span>tn <span class="token operator">*</span> <span class="token operator">/</span>f
<span class="token comment">#从本地计算机的计划中删除所有任务，包括其他用户计划的任务</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>立即启动计划任务</strong></p><p>运行操作将忽略计划，但使用任务中保存的程序文件位置、用户帐户和密码来立即运行任务。</p><p>运行任务不会影响任务计划，也不会更改为任务计划的下一个运行时间。</p><div class="language-powershell line-numbers-mode" data-ext="powershell"><pre class="language-powershell"><code>schtasks <span class="token operator">/</span>run <span class="token operator">/</span>tn <span class="token string">&quot;Test Script&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>结束计划任务</strong></p><p>停止计划任务启动的程序实例</p><div class="language-powershell line-numbers-mode" data-ext="powershell"><pre class="language-powershell"><code>schtasks <span class="token operator">/</span><span class="token keyword">end</span> <span class="token operator">/</span>tn <span class="token string">&quot;My Notepad&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,22),l=[o];function r(c,p){return n(),a("div",null,l)}const u=s(t,[["render",r],["__file","计划任务.html.vue"]]);export{u as default};
