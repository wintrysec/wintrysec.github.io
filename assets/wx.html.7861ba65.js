import{_ as e}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as p,c,a as n,b as s,d as o,e as a,r as i}from"./app.f0041ddc.js";const u="/assets/clip_image002.f28c44f7.gif",l="/assets/clip_image004.50a3d4a8.gif",r="/assets/image-20240531141711125.20bd97fc.png",d={},k=a('<h2 id="pc端小程序抓包渗透" tabindex="-1"><a class="header-anchor" href="#pc端小程序抓包渗透" aria-hidden="true">#</a> PC端小程序抓包渗透</h2><p>通过 Proxifier 将微信小程序客户端的流量发送到 burpsuite 代理。</p><p>1）BurpSuite 开启代理，监听端口为 127.0.0.1:8080</p><p>2）Proxifier 设置的代理服务器和代理规则</p><p>代理服务器：</p><p><img src="'+u+'" alt="img" loading="lazy"></p><p>代理规则：</p><p><img src="'+l+'" alt="img" loading="lazy"></p><h2 id="反编译获取源码" tabindex="-1"><a class="header-anchor" href="#反编译获取源码" aria-hidden="true">#</a> 反编译获取源码</h2><p>一键反编译PC端小程序</p><p><img src="'+r+`" alt="image-20240531141711125" loading="lazy"></p><h3 id="信息泄露" tabindex="-1"><a class="header-anchor" href="#信息泄露" aria-hidden="true">#</a> 信息泄露</h3><p>各类信息搜索关键字</p><table><thead><tr><th>信息内容</th><th>关键字</th></tr></thead><tbody><tr><td>用户凭证</td><td>passwd</td></tr><tr><td>用户凭证</td><td>password</td></tr><tr><td>网站URL</td><td>http://</td></tr><tr><td>网站URL</td><td>https://</td></tr><tr><td>API凭证</td><td>apikey</td></tr><tr><td>访问令牌</td><td>token</td></tr><tr><td>访问令牌</td><td>access_token</td></tr><tr><td>访问令牌</td><td>accesstoken</td></tr><tr><td>小程序ID</td><td>appid</td></tr><tr><td>云主机Key</td><td>accesskey、access_key</td></tr><tr><td>云主机Key</td><td>secretid</td></tr></tbody></table><p><strong>正则匹配</strong></p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>#IP地址
(<span class="token number">25</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token number">-5</span><span class="token punctuation">]</span>|<span class="token number">2</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token number">-4</span><span class="token punctuation">]</span>\\d|<span class="token punctuation">[</span><span class="token number">0</span><span class="token number">-1</span><span class="token punctuation">]</span>\\d<span class="token punctuation">{</span><span class="token number">2</span><span class="token punctuation">}</span>|<span class="token punctuation">[</span><span class="token number">1</span><span class="token number">-9</span><span class="token punctuation">]</span>?\\d)\\.(<span class="token number">25</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token number">-5</span><span class="token punctuation">]</span>|<span class="token number">2</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token number">-4</span><span class="token punctuation">]</span>\\d|<span class="token punctuation">[</span><span class="token number">0</span><span class="token number">-1</span><span class="token punctuation">]</span>\\d<span class="token punctuation">{</span><span class="token number">2</span><span class="token punctuation">}</span>|<span class="token punctuation">[</span><span class="token number">1</span><span class="token number">-9</span><span class="token punctuation">]</span>?\\d)\\.(<span class="token number">25</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token number">-5</span><span class="token punctuation">]</span>|<span class="token number">2</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token number">-4</span><span class="token punctuation">]</span>\\d|<span class="token punctuation">[</span><span class="token number">0</span><span class="token number">-1</span><span class="token punctuation">]</span>\\d<span class="token punctuation">{</span><span class="token number">2</span><span class="token punctuation">}</span>|<span class="token punctuation">[</span><span class="token number">1</span><span class="token number">-9</span><span class="token punctuation">]</span>?\\d)\\.(<span class="token number">25</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token number">-5</span><span class="token punctuation">]</span>|<span class="token number">2</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token number">-4</span><span class="token punctuation">]</span>\\d|<span class="token punctuation">[</span><span class="token number">0</span><span class="token number">-1</span><span class="token punctuation">]</span>\\d<span class="token punctuation">{</span><span class="token number">2</span><span class="token punctuation">}</span>|<span class="token punctuation">[</span><span class="token number">1</span><span class="token number">-9</span><span class="token punctuation">]</span>?\\d)

#手机号码
<span class="token number">0</span>?(<span class="token number">13</span>|<span class="token number">14</span>|<span class="token number">15</span>|<span class="token number">17</span>|<span class="token number">18</span>|<span class="token number">19</span>)<span class="token punctuation">[</span><span class="token number">0</span><span class="token number">-9</span><span class="token punctuation">]</span><span class="token punctuation">{</span><span class="token number">9</span><span class="token punctuation">}</span>

#邮箱地址
\\w<span class="token punctuation">[</span>-\\w.+<span class="token punctuation">]</span>*@(<span class="token punctuation">[</span>A-Za-z0<span class="token number">-9</span><span class="token punctuation">]</span><span class="token punctuation">[</span>-A-Za-z0<span class="token number">-9</span><span class="token punctuation">]</span>+\\.)+<span class="token punctuation">[</span>A-Za-z<span class="token punctuation">]</span><span class="token punctuation">{</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">14</span><span class="token punctuation">}</span>

#身份证
\\d<span class="token punctuation">{</span><span class="token number">17</span><span class="token punctuation">}</span><span class="token punctuation">[</span>\\d|x<span class="token punctuation">]</span>|\\d<span class="token punctuation">{</span><span class="token number">15</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="未授权访问" tabindex="-1"><a class="header-anchor" href="#未授权访问" aria-hidden="true">#</a> 未授权访问</h3><p>搜索接口路径，（GET和POST两种方法）尝试访问所有接口，看看是否有无需认证就能访问的接口。</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>#内部路径
<span class="token string">&quot;/.*/.*&quot;</span>
href=<span class="token string">&quot;.*&quot;</span>
src=<span class="token string">&quot;.*&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="appid和secret利用" tabindex="-1"><a class="header-anchor" href="#appid和secret利用" aria-hidden="true">#</a> Appid和Secret利用</h2><p>获取到的appid和secret可以到微信的官方接口去自由生成微信小程序的<code>AccessToken</code></p><div class="language-HTTP line-numbers-mode" data-ext="HTTP"><pre class="language-HTTP"><code>https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&amp;appid={{APPID}}&amp;secret={{APPSECRET}}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>拿到 AccessToken，相当于可以控制整个小程序了，并且 AccessToken 微信每天只能生成20次</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;access_token&quot;</span><span class="token operator">:</span> <span class="token string">&quot;70_qGt5fEExKvlXX1tC_e_r_aRYPj0j3_oxZlazJ7-NcC44omBfHwfjXKxTN7WJWl9dTGGxCL2vPd9M0u1DSQS5pjjhEUtz-PhJ2kX0GSFov2KOAnjf5FUhNJLk1UUWGWcAHALVL&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;expires_in&quot;</span><span class="token operator">:</span> <span class="token number">7200</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>access_token 后续利用，可以用发送图文文章/消息用于钓鱼。</p>`,25),m={href:"https://developers.weixin.qq.com/apiExplorer",target:"_blank",rel:"noopener noreferrer"},b=a('<h2 id="破解-sign-签名" tabindex="-1"><a class="header-anchor" href="#破解-sign-签名" aria-hidden="true">#</a> 破解 sign 签名</h2><h3 id="sign定义" tabindex="-1"><a class="header-anchor" href="#sign定义" aria-hidden="true">#</a> sign定义</h3><p>sign一般用于参数签名，用来验证数据的完整性和真实性。</p><p>为校验客户端数据传输合法性，防止用户篡改参数、伪装、重放以及数据泄露等常用sign签名校验。</p><p>sign标识生成方法一般是是将秘钥、时间戳、特殊字符、随机数等参数经过特定排序后使用某种加密算法进行加密，作为接口中的一个参数sign来传递，也可以将sign放到请求头中。</p><p>一般加密方法有：MD5、AES、SHA等。</p><h3 id="绕过签名思路" tabindex="-1"><a class="header-anchor" href="#绕过签名思路" aria-hidden="true">#</a> 绕过签名思路</h3><p>1、观察sign的格式，看是否弱加密，比如是base64解码；</p><p>2、将sign字段删除或直接置空sign的值，尝试绕过校验；</p><p>3、反编译出源代码，查找加密算法，找到sign的生成方式。</p>',10);function h(v,g){const t=i("ExternalLinkIcon");return p(),c("div",null,[k,n("p",null,[s("用微信调试工具发起真实请求，"),n("a",m,[s("https://developers.weixin.qq.com/apiExplorer"),o(t)])]),b])}const f=e(d,[["render",h],["__file","wx.html.vue"]]);export{f as default};
