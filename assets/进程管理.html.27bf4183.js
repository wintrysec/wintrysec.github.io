import{_ as r}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as d,c as p,d as c,w as e,e as o,a as n,b as s,r as m}from"./app.f4d16c82.js";const u={},v=o('<h2 id="进程状态" tabindex="-1"><a class="header-anchor" href="#进程状态" aria-hidden="true">#</a> 进程状态</h2><p><strong>Linux上进程有5种状态:</strong></p><div class="custom-container tip"><p class="custom-container-title">提示</p><ul><li><strong>R 运行 runnable</strong> (正在运行或在运行队列中等待)</li><li><strong>S 中断 sleeping</strong> (休眠中, 受阻, 在等待某个条件的形成或接受到信号)</li><li><strong>D 不可中断</strong> (收到信号不唤醒和不可运行, 进程必须等待直到有中断发生)</li><li><strong>Z 僵死</strong> (进程已终止, 但进程描述符存在, 直到父进程调用wait4()系统调用后释放)</li><li><strong>T 停止</strong> (进程收到SIGSTOP, SIGSTP, SIGTIN, SIGTOU信号后停止运行运行)</li></ul></div><h2 id="查看进程" tabindex="-1"><a class="header-anchor" href="#查看进程" aria-hidden="true">#</a> 查看进程</h2>',4),b=n("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token function"},"ps"),s(` aux

`),n("span",{class:"token comment"},"#参数释义"),s(`
a	`),n("span",{class:"token comment"},"#显示现行终端机下的所有程序，包括其他用户的程序"),s(`
u	`),n("span",{class:"token comment"},"#以用户为主的格式来显示程序状况"),s(`
x	`),n("span",{class:"token comment"},"#显示所有程序，不以终端机来区分"),s(`

`),n("span",{class:"token comment"},"#结果释义"),s(`
`),n("span",{class:"token environment constant"},"USER"),n("span",{class:"token builtin class-name"},":"),s(`      运行进程的用户
PID：      进程ID
%CPU:  　　CPU占用率
%MEM:      内存占用率
VSZ：      占用虚拟内存
RSS:       占用实际内存 驻留内存
TTY：      进程运行的终端
STAT：     进程状态     `),n("span",{class:"token function"},"man"),s(),n("span",{class:"token function"},"ps"),s(),n("span",{class:"token punctuation"},"("),s("/STATE"),n("span",{class:"token punctuation"},")"),s(`            
      R     运行
      S     可中断睡眠 Sleep
      D     不可中断睡眠
      T     停止的进程 
      Z     僵尸进程
      X     死掉的进程
      
      Ss     s进程的领导者，父进程
      S`),n("span",{class:"token operator"},"<"),s(" 　　 "),n("span",{class:"token operator"},"<"),s(`优先级较高的进程
      SN     N优先级较低的进程
      R+      +表示是前台的进程组
      Sl     以线程的方式运行    
START:     进程的启动时间
TIME：     进程占用CPU的总时间
COMMAND：  进程文件，进程名

`),n("span",{class:"token comment"},"#过滤查询"),s(`
`),n("span",{class:"token function"},"ps"),s(" aux "),n("span",{class:"token operator"},"|"),s(),n("span",{class:"token function"},"grep"),s(` api

`),n("span",{class:"token comment"},"#动态查看进程信息"),s(`
`),n("span",{class:"token function"},"top"),s(`
`),n("span",{class:"token function"},"htop"),s(`
atop

`),n("span",{class:"token comment"},"#根据进程名查找其PID"),s(`
pidof nginx

`),n("span",{class:"token comment"},"#搜索并列出符合指定条件的进程ID"),s(`
pgrep nginx

`),n("span",{class:"token comment"},"#查看指定用户打开的文件"),s(`
`),n("span",{class:"token function"},"lsof"),s(),n("span",{class:"token parameter variable"},"-u"),s(` 用户名

`),n("span",{class:"token comment"},"#列出特定PID对应的进程所打开的所有文件"),s(`
`),n("span",{class:"token function"},"lsof"),s(),n("span",{class:"token parameter variable"},"-p"),s(` PID1,PID2,^PID3

`),n("span",{class:"token comment"},"#查看指定进程的父进程ID"),s(`
`),n("span",{class:"token function"},"ps"),s(),n("span",{class:"token parameter variable"},"-o"),s(" pid,ppid,cmd "),n("span",{class:"token parameter variable"},"-p"),s(),n("span",{class:"token number"},"7390"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),k=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[s(`tasklist

`),n("span",{class:"token comment"},"#过滤查询"),s(`
tasklist `),n("span",{class:"token punctuation"},"|"),s(" findstr "),n("span",{class:"token string"},'"api"'),s(`

`),n("span",{class:"token comment"},"#动态查看进程信息"),s(`
打开任务管理器 `),n("span",{class:"token operator"},"-"),s(`> 再打开资源监视器
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),h=n("h2",{id:"杀死进程",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#杀死进程","aria-hidden":"true"},"#"),s(" 杀死进程")],-1),g=n("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[s(`编号 信号名
`),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),s(" SIGHUP	"),n("span",{class:"token comment"},"#重新加载配置"),s(`
`),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},")"),s(" SIGINT	"),n("span",{class:"token comment"},"#键盘中断^C"),s(`
`),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},")"),s(" SIGQUIT	"),n("span",{class:"token comment"},"#键盘退出"),s(`
`),n("span",{class:"token number"},"9"),n("span",{class:"token punctuation"},")"),s(" SIGKILL	"),n("span",{class:"token comment"},"#强制终止"),s(`
`),n("span",{class:"token number"},"15"),n("span",{class:"token punctuation"},")"),s(" SIGTERM	"),n("span",{class:"token comment"},"#终止（正常结束），缺省信号"),s(`
`),n("span",{class:"token number"},"18"),n("span",{class:"token punctuation"},")"),s(" SIGCONT	"),n("span",{class:"token comment"},"#继续"),s(`
`),n("span",{class:"token number"},"19"),n("span",{class:"token punctuation"},")"),s(" SIGSTOP	"),n("span",{class:"token comment"},"#停止"),s(`
`),n("span",{class:"token number"},"20"),n("span",{class:"token punctuation"},")"),s(" SIGTSTP "),n("span",{class:"token comment"},"#暂停^Z"),s(`

`),n("span",{class:"token comment"},"#彻底杀死指定pid的进程"),s(`
`),n("span",{class:"token function"},"kill"),s(),n("span",{class:"token parameter variable"},"-9"),s(` pid

`),n("span",{class:"token comment"},"#杀死指定进程名的所有进程"),s(`
`),n("span",{class:"token function"},"killall"),s(` nginx
`),n("span",{class:"token function"},"pkill"),s(),n("span",{class:"token parameter variable"},"-9"),s(),n("span",{class:"token parameter variable"},"-e"),s(` nginx

`),n("span",{class:"token comment"},"#指定用户，只影响该用户的进程"),s(`
`),n("span",{class:"token function"},"pkill"),s(),n("span",{class:"token parameter variable"},"-u"),s(` username processname

`),n("span",{class:"token comment"},"#kill+lsof 终止指定用户的所有进程"),s(`
`),n("span",{class:"token function"},"kill"),s(),n("span",{class:"token parameter variable"},"-9"),s(),n("span",{class:"token variable"},[n("span",{class:"token variable"},"`"),n("span",{class:"token function"},"lsof"),s(),n("span",{class:"token parameter variable"},"-t"),s(),n("span",{class:"token parameter variable"},"-u"),s(" 用户名"),n("span",{class:"token variable"},"`")]),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),f=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[s("taskkill "),n("span",{class:"token operator"},"/"),s("F "),n("span",{class:"token operator"},"/"),s("T "),n("span",{class:"token operator"},"/"),s("im 123"),n("span",{class:"token punctuation"},"."),s(`exe

`),n("span",{class:"token operator"},"/"),s("F		"),n("span",{class:"token comment"},"#指定强制终止进程"),s(`
`),n("span",{class:"token operator"},"/"),s("T		"),n("span",{class:"token comment"},"#终止指定的进程和由它启用的子进程"),s(`
`),n("span",{class:"token operator"},"/"),s("IM		"),n("span",{class:"token comment"},"#指定要终止的进程的映像名称"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),x=o(`<h2 id="僵尸进程" tabindex="-1"><a class="header-anchor" href="#僵尸进程" aria-hidden="true">#</a> 僵尸进程</h2><p>僵尸进程是父进程未调用<code>wait()</code>系列函数回收导致的</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 单独查看僵尸进程信息 PID、PPID、进程名</span>
<span class="token function">ps</span> <span class="token parameter variable">-eo</span> pid,ppid,stat,cmd <span class="token operator">|</span> <span class="token function">grep</span> <span class="token string">&#39;Z&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>处理方式</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 1 优雅重启父进程 </span>
systemctl restart 服务名

<span class="token comment"># 强制杀死父进程</span>
<span class="token function">kill</span> <span class="token parameter variable">-9</span> <span class="token operator">&lt;</span>父进程<span class="token environment constant">PPID</span><span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="lsof-一切皆文件" tabindex="-1"><a class="header-anchor" href="#lsof-一切皆文件" aria-hidden="true">#</a> LSOF 一切皆文件</h2><p><code>lsof</code>（<strong>L</strong>ist <strong>O</strong>pen <strong>F</strong>iles）是 Linux 和 Unix 系统中一个强大的工具，用于查看当前系统打开的文件和资源。由于在 Unix 系统中，一切皆文件（包括网络套接字、设备文件等），<code>lsof</code> 可以帮助你：</p><ul><li>查找文件被哪个进程占用</li><li>诊断网络连接问题</li><li>监控系统资源使用情况</li><li>识别僵尸进程</li><li>调试文件系统挂载问题</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 查看网络连接</span>
<span class="token function">lsof</span> <span class="token parameter variable">-i</span>

<span class="token comment"># 查看监听端口</span>
<span class="token function">lsof</span> <span class="token parameter variable">-iTCP</span> <span class="token parameter variable">-sTCP:LISTEN</span> <span class="token parameter variable">-n</span> <span class="token parameter variable">-P</span>

<span class="token comment"># 查看特定进程的文件</span>
<span class="token function">lsof</span> <span class="token parameter variable">-p</span> PID

<span class="token comment"># 查看已经删除文件还存在的进程</span>
<span class="token function">lsof</span> <span class="token operator">|</span> <span class="token function">grep</span> deleted

<span class="token comment"># 查找占用文件的进程</span>
<span class="token function">lsof</span> /path/to/file

<span class="token comment"># 查看特定用户的文件</span>
<span class="token function">lsof</span> <span class="token parameter variable">-u</span> user
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="文件锁" tabindex="-1"><a class="header-anchor" href="#文件锁" aria-hidden="true">#</a> 文件锁</h2><p><code>chattr</code>用于修改文件或目录的特殊属性，其基本语法为：<code>chattr [选项] [属性] 文件/目录</code>。</p><table><thead><tr><th style="text-align:left;">属性</th><th>含义</th><th>适用场景</th></tr></thead><tbody><tr><td style="text-align:left;"><strong>i</strong></td><td>设为不可变，无法删除、修改、重命名，只有 root 可设置或取消</td><td>保护系统关键配置文件，如<code>/etc/passwd</code></td></tr><tr><td style="text-align:left;"><strong>a</strong></td><td>仅允许追加内容，不能删除、修改现有内容，适合日志文件</td><td><code>/var/log/messages</code>等日志文件</td></tr><tr><td style="text-align:left;"><strong>u</strong></td><td>删除文件后数据仍保留，可恢复</td><td>重要数据文件，防止误删后无法恢复</td></tr><tr><td style="text-align:left;"><strong>s</strong></td><td>删除文件时彻底擦除数据，无法恢复</td><td>敏感文件，避免数据泄露</td></tr><tr><td style="text-align:left;"><strong>d</strong></td><td>备份时跳过该文件，不被 dump 命令备份</td><td>临时文件或无需备份的文件</td></tr></tbody></table><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 给文件添加不可变属性，无法修改和删除</span>
chattr +i /etc/fstab

<span class="token comment"># 查看文件的 “隐藏属性”</span>
lsattr /etc/fstab

<span class="token comment"># 递归查看目录下所有文件属性</span>
lsattr <span class="token parameter variable">-R</span> /var/log
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,13);function _(S,I){const i=m("CodeTabs");return d(),p("div",null,[v,c(i,{id:"38",data:[{title:"Linux"},{title:"Windows"}],"tab-id":"shell"},{tab0:e(({title:a,value:l,isActive:t})=>[b]),tab1:e(({title:a,value:l,isActive:t})=>[k]),_:1}),h,c(i,{id:"49",data:[{title:"Linux"},{title:"Windows"}],"tab-id":"shell"},{tab0:e(({title:a,value:l,isActive:t})=>[g]),tab1:e(({title:a,value:l,isActive:t})=>[f]),_:1}),x])}const D=r(u,[["render",_],["__file","进程管理.html.vue"]]);export{D as default};
