import{_ as d}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as p,c as u,a as n,b as s,d as e,w as t,e as v,r as i}from"./app.c527752f.js";const b={},m=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"left"}},[n("strong",null,"网址")]),n("th",{style:{"text-align":"left"}},[n("strong",null,"功能")])])],-1),k={style:{"text-align":"left"}},h={href:"https://cloud.projectdiscovery.io/public/http",target:"_blank",rel:"noopener noreferrer"},_=n("td",{style:{"text-align":"left"}},"模板库",-1),g={style:{"text-align":"left"}},f={href:"https://docs.projectdiscovery.io/templates/introduction",target:"_blank",rel:"noopener noreferrer"},x=n("td",{style:{"text-align":"left"}},"模板编写文档",-1),y={style:{"text-align":"left"}},T={href:"https://www.jyshare.com/front-end/854/?optionGlobl=global",target:"_blank",rel:"noopener noreferrer"},j=n("td",{style:{"text-align":"left"}},"正则表达式在线测试",-1),I=n("h2",{id:"基本用法",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#基本用法","aria-hidden":"true"},"#"),s(" 基本用法")],-1),N=n("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[s("nuclei "),n("span",{class:"token parameter variable"},"-duc"),s(),n("span",{class:"token parameter variable"},"-vv"),s(),n("span",{class:"token parameter variable"},"--stats"),s(),n("span",{class:"token parameter variable"},"-p"),s(" socks5://127.0.0.1:1080 "),n("span",{class:"token parameter variable"},"-je"),s(" vulns-res.json "),n("span",{class:"token parameter variable"},"-tags"),s(" seeyon "),n("span",{class:"token parameter variable"},"-u"),s(` 
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"})])],-1),S=n("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[s("nuclei "),n("span",{class:"token parameter variable"},"-duc"),s(),n("span",{class:"token parameter variable"},"-vv"),s(),n("span",{class:"token parameter variable"},"--stats"),s(),n("span",{class:"token parameter variable"},"-tags"),s(" shrio "),n("span",{class:"token parameter variable"},"-u"),s(" xx "),n("span",{class:"token parameter variable"},"-debug"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"})])],-1),w=v(`<h2 id="选项参数" tabindex="-1"><a class="header-anchor" href="#选项参数" aria-hidden="true">#</a> 选项参数</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>目标:
   -u, <span class="token parameter variable">-target</span> string<span class="token punctuation">[</span><span class="token punctuation">]</span>          主机地址
   -l, <span class="token parameter variable">-list</span> string              主机地址文件（每行一个）

POC模板:
   <span class="token parameter variable">-tags</span> string<span class="token punctuation">[</span><span class="token punctuation">]</span>                基于标签运行模板，用逗号分隔
   <span class="token parameter variable">-t</span>    string<span class="token punctuation">[</span><span class="token punctuation">]</span>                要运行的模板文件或模板目录，用逗号分隔
   
   <span class="token parameter variable">-validate</span>                     验证所有模板语法
   -nss, -no-strict-syntax       禁止对模板进行严格语法检查


OUTPUT:
   -o, <span class="token parameter variable">-output</span> string            输出文件位置
   -j, <span class="token parameter variable">-jsonl</span>                    <span class="token function">write</span> output <span class="token keyword">in</span> JSONL<span class="token punctuation">(</span>ines<span class="token punctuation">)</span> <span class="token function">format</span>
   -je, -json-export string      <span class="token function">file</span> to <span class="token builtin class-name">export</span> results <span class="token keyword">in</span> JSON <span class="token function">format</span>

CONFIGURATIONS:
   <span class="token parameter variable">-config</span> string                 配置文件路径（默认当前用户目录下）
   -fr, -follow-redirects         为HTTP模板启用重定向跟随 
   -dr, -disable-redirects        禁用http模板的重定向
   -fh2, -force-http2             对请求强制使用HTTP2连接
   -sip, -source-ip string        指定网络扫描的源IP地址

INTERACTSH:
   -iserver, -interactsh-server string  自己托管的交互服务类似DNSlog服务器 <span class="token punctuation">(</span>default: oast.pro,oast.live,oast.site,oast.online,oast.fun,oast.me<span class="token punctuation">)</span>
   -itoken, -interactsh-token string    交互服务器的身份验证令牌
   -interactions-cache-size int         保留在交互缓存中的请求数（默认 <span class="token number">5000</span>）
   -interactions-eviction int           从缓存中驱逐请求之前等待的秒数（默认 <span class="token number">60</span>） 
   -interactions-poll-duration int      在每个交互轮询请求之前等待的秒数（默认 <span class="token number">5</span>）
   -interactions-cooldown-period int    退出前交互轮询的额外时间（默认 <span class="token number">5</span>）
   -ni, -no-interactsh                  禁用用于 OAST 测试的 interactsh 服务器，排除基于 OAST 的模板 

RATE-LIMIT:
   -rl, -rate-limit int               每秒发送的最大请求数（默认 <span class="token number">150</span>）
   -rlm, -rate-limit-minute int       每分钟发送的最大请求数 
   -bs, -bulk-size int                每个模板要并行分析的最大主机数（默认 <span class="token number">25</span>）1
   -c, <span class="token parameter variable">-concurrency</span> int               要并行执行的最大模板数（默认 <span class="token number">25</span>） <span class="token number">10</span>

OPTIMIZATIONS:                                                                                            
   <span class="token parameter variable">-timeout</span> int                        超时时间 <span class="token punctuation">(</span>default <span class="token number">10</span><span class="token punctuation">)</span>      
   <span class="token parameter variable">-retries</span> int                        请求失败重试次数 <span class="token punctuation">(</span>default <span class="token number">1</span><span class="token punctuation">)</span>

HEADLESS: 
   -p, <span class="token parameter variable">-proxy</span> string<span class="token punctuation">[</span><span class="token punctuation">]</span>       要使用的 http/socks5 代理列表（逗号分隔或文件输入） 
   <span class="token parameter variable">-vv</span>                       显示为扫描加载的模板                                                                                                                                                                  
   -duc,                     扫描器运行前不检查更新      
   -debug,                   打印HTTP请求响应详细信息 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2);function O(A,C){const a=i("ExternalLinkIcon"),l=i("CodeTabs");return p(),u("div",null,[n("table",null,[m,n("tbody",null,[n("tr",null,[n("td",k,[n("a",h,[s("https://cloud.projectdiscovery.io/public/http"),e(a)])]),_]),n("tr",null,[n("td",g,[n("a",f,[s("https://docs.projectdiscovery.io/templates/introduction"),e(a)])]),x]),n("tr",null,[n("td",y,[n("a",T,[s("正则表达式在线测试 | 菜鸟工具"),e(a)])]),j])])]),I,e(l,{id:"41",data:[{title:"使用代理"},{title:"不用代理"}],"tab-id":"shell"},{tab0:t(({title:r,value:c,isActive:o})=>[N]),tab1:t(({title:r,value:c,isActive:o})=>[S]),_:1}),w])}const H=d(b,[["render",O],["__file","nuclei.html.vue"]]);export{H as default};
