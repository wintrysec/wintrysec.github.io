import{_ as a}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as i,c as l,a as n,b as d,d as c,e as s,r}from"./app.0655d585.js";const t={},o=s(`<div class="custom-container tip"><p class="custom-container-title">信息收集的深度，直接关系到内网渗透结果的成败</p><p><strong>进入内网后，红队一般会在本机以及内部网络 开展进一步信息收集和情报刺探工作</strong></p><p>包括收集当前计算机的网络连接、进程列表、命令执行历史记录、 数据库信息、当前用户信息、管理员登录信息、总结密码规律、补丁更新频率等信息；</p><p>同时对内网的其他机器的IP、主机名、开放端口服务等情况进行情报刺探。</p><p>再利用内网机器不及时修复漏洞、不做安全防护、同口令等弱点来进行横向渗透扩大战果。</p><p>对于含有域的内网，红队专家会在扩大战果的同时，去寻找域管理员登录的蛛丝马迹。</p><p>一旦发现某台服务器有域管理员登录，就可以利用Mimikatz等工具去尝试获得登录账号密码明文；</p><p>或者Hashdump工具去导出 NTLM哈希，继而实现对域控服务器的渗透控制。</p><p>在内网漫游过程中，红队会重点关注邮件服务器、OA系统、集中运维管理平台、统一认证系统、域控等；</p><p>尝试突破核心系统权限、控制核心业务、获取核心数据，最终完成目标突破工作。</p></div><h2 id="判断系统是否docker" tabindex="-1"><a class="header-anchor" href="#判断系统是否docker" aria-hidden="true">#</a> 判断系统是否Docker</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#是否存在以下文件 .dockerenv</span>
<span class="token function">ls</span> <span class="token parameter variable">-alh</span> /.dockerenv

<span class="token function">cat</span> /proc/1/cgroup
:devices:/kubepods/burstable/podc 	<span class="token comment">#Docker</span>
:devices:/							<span class="token comment">#虚拟机或物理机</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="判断是否在域内" tabindex="-1"><a class="header-anchor" href="#判断是否在域内" aria-hidden="true">#</a> 判断是否在域内</h2><div class="language-powershell line-numbers-mode" data-ext="powershell"><pre class="language-powershell"><code>ipconfig <span class="token operator">/</span>all
<span class="token comment">#如果在域内，一般DNS即域控</span>

net config workstation
<span class="token comment">#其中工作站域显示域名，登录域表明当前是域用户还是本地用户</span>

net time <span class="token operator">/</span>domain
<span class="token comment">#1）如果存在域会从域控返回时间，并在第一行返回域控及域名</span>
<span class="token comment">#2）当前服务器在域内但是当前用户非域用户，会返回System error 5，表示权限不够</span>
<span class="token comment">#3）找不到域 WORKGROUP 的域控制器，当前网络环境为工作组</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="用户权限" tabindex="-1"><a class="header-anchor" href="#用户权限" aria-hidden="true">#</a> 用户权限</h2><div class="language-powershell line-numbers-mode" data-ext="powershell"><pre class="language-powershell"><code>whoami <span class="token operator">/</span>all
<span class="token comment">#查当前用户在目标系统中的具体权限</span>

quser
<span class="token comment">#查当前机器中正在线的用户,注意管理员此时在不在</span>

net user     
<span class="token comment">#查当前机器中所有的用户名</span>

net localgroup
<span class="token comment">#查当前机器中所有的组名,了解不同组的职能,如,IT,HR,ADMIN,</span>

net localgroup <span class="token string">&quot;Administrators&quot;</span>
<span class="token comment">#查指定组中的成员列表</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="操作当前机器的远程桌面-rdp" tabindex="-1"><a class="header-anchor" href="#操作当前机器的远程桌面-rdp" aria-hidden="true">#</a> 操作当前机器的远程桌面（RDP）</h2><p><strong>开启和关闭RDP，需要管理员权限</strong></p><div class="language-powershell line-numbers-mode" data-ext="powershell"><pre class="language-powershell"><code><span class="token comment">#开启</span>
wmic RDTOGGLE WHERE ServerName=<span class="token string">&#39;%COMPUTERNAME%&#39;</span> call SetAllowTSConnections 1   

<span class="token comment">#关闭</span>
wmic RDTOGGLE WHERE ServerName=<span class="token string">&#39;%COMPUTERNAME%&#39;</span> call SetAllowTSConnections 0   

<span class="token comment">#下边的命令查询RDP服务的端口，返回一个十六进制的端口</span>
REG QUERY <span class="token string">&quot;HKEY_LOCAL_MACHINE\\SYSTEM\\CurrentControlSet\\Control\\Terminal Server\\WinStations\\RDP-Tcp&quot;</span> <span class="token operator">/</span>V PortNumber
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="系统基本信息" tabindex="-1"><a class="header-anchor" href="#系统基本信息" aria-hidden="true">#</a> 系统基本信息</h2><div class="language-powershell line-numbers-mode" data-ext="powershell"><pre class="language-powershell"><code>ipconfig <span class="token operator">/</span>all   
<span class="token comment">#获取本机网络配置</span>

net statistics workstation
<span class="token comment">#查看主机开机时间</span>

<span class="token function">echo</span> <span class="token operator">%</span>PROCESSOR_ARCHITECTURE%
<span class="token comment">#可查看系统的体系结构，是x86还是AMD64等</span>

systeminfo
<span class="token comment">#查看系统的基本信息（系统版本、软件及补丁的安装情况，是否在域内）</span>

tasklist
<span class="token comment">#查看本机进程列表，分析是否存在VPN杀软等进程</span>

wmic servcie list brief
<span class="token comment">#查看本机服务信息</span>

wmic startup get command<span class="token punctuation">,</span>caption   
<span class="token comment">#查看程序启动信息</span>

schtasks <span class="token operator">/</span>query <span class="token operator">/</span>fo LIST <span class="token operator">/</span>v
<span class="token comment">#查看系统计划任务</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="网络信息" tabindex="-1"><a class="header-anchor" href="#网络信息" aria-hidden="true">#</a> 网络信息</h2><div class="language-powershell line-numbers-mode" data-ext="powershell"><pre class="language-powershell"><code>netstat <span class="token operator">-</span>ano
<span class="token comment">#查看本机所有的tcp,udp端口连接及其对应的pid</span>

net share
<span class="token comment">#查看本机共享列表，和可访问的域共享列表</span>

wmic share get name<span class="token punctuation">,</span>path<span class="token punctuation">,</span>status
<span class="token comment">#利用wmic查找共享列表</span>

REG QUERY <span class="token string">&quot;HKEY_CURRENT_USER\\Software\\Microsoft\\Windows\\CurrentVersion\\Internet Settings&quot;</span>
<span class="token comment">#查看代理配置情况</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="主机发现" tabindex="-1"><a class="header-anchor" href="#主机发现" aria-hidden="true">#</a> 主机发现</h2><p>网段划分：通过内网业务判断网络架构，DMZ、办公网、核心业务网</p><h3 id="查看各种历史记录" tabindex="-1"><a class="header-anchor" href="#查看各种历史记录" aria-hidden="true">#</a> 查看各种历史记录</h3><p>1、查看bash历史记录</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">history</span>
<span class="token function">cat</span> ~/.bash_history
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>2、查看hosts文件（看域名绑定），linux &amp; windows</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">cat</span> /etc/hosts
<span class="token builtin class-name">type</span> c:<span class="token punctuation">\\</span>Windows<span class="token punctuation">\\</span>system32<span class="token punctuation">\\</span>drivers<span class="token punctuation">\\</span>etc<span class="token punctuation">\\</span>hosts
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>3、查看mstsc对内和对外连接记录</p>`,22),p={href:"https://github.com/Heart-Sky/ListRDPConnections",target:"_blank",rel:"noopener noreferrer"},v=s(`<p>可能发现跨段的连接，还能定位运维人员主机</p><p>4、浏览器浏览记录</p><p>查看浏览器中访问过的内网应用</p><p>二次开发相关工具-深入研究实现原理</p><h3 id="被动主机发现-不扫描" tabindex="-1"><a class="header-anchor" href="#被动主机发现-不扫描" aria-hidden="true">#</a> 被动主机发现-不扫描</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#查看路由表</span>
<span class="token function">netstat</span> <span class="token parameter variable">-r</span>

<span class="token comment">#arp可以轻易bypass掉各类应用层防火墙，除非是专业的arp防火墙</span>
arp <span class="token parameter variable">-a</span>

<span class="token comment">#SPN扫描服务 （域）</span>
每个重要的服务在域中都有对用的SPN，所以不必使用端口扫描
只需利用SPN扫描就能找到大部分应用服务器

<span class="token comment">#查看当前域内的所有SPN（系统命令）</span>
setspn <span class="token parameter variable">-q</span> */*
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="端口扫描" tabindex="-1"><a class="header-anchor" href="#端口扫描" aria-hidden="true">#</a> 端口扫描</h3><p>一开始先低并发扫描内网机器，千万不要上来就fscan一把梭（傻逼行为）</p><p>先对C段做主机发现，扫描高危端口（22,445,3306,1443,1521,5432,6379,80,443,8000,8080）</p><p>通过主机端口和数据库端口高频Web端口找到能获取权限的主机 ，拓展权限。</p><p>下一步才能对内网发起大规模扫描，否则会被管理员发现，权限会掉内网渗透就止步于此失败了。</p>`,11);function m(u,b){const e=r("ExternalLinkIcon");return i(),l("div",null,[o,n("p",null,[n("a",p,[d("https://github.com/Heart-Sky/ListRDPConnections"),c(e)])]),v])}const g=a(t,[["render",m],["__file","横向移动-内网信息收集.html.vue"]]);export{g as default};
