import{_ as e}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as t,c as n,e as a}from"./app.a5c8fdbc.js";const s={},d=a(`<h2 id="系统信息" tabindex="-1"><a class="header-anchor" href="#系统信息" aria-hidden="true">#</a> 系统信息</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#查看系统版本</span>
<span class="token function">cat</span> /etc/*release

<span class="token comment">#Ubuntu</span>
lsb_release <span class="token parameter variable">-a</span>

<span class="token comment">#Centos</span>
<span class="token function">cat</span> /etc/redhat-release

<span class="token comment">#查看系统内核版本</span>
<span class="token function">uname</span> <span class="token parameter variable">-a</span>

<span class="token comment">#查看CPU信息</span>
lscpu

<span class="token comment">#查看内存使用情况</span>
<span class="token function">free</span> <span class="token parameter variable">-m</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="判断系统是否docker" tabindex="-1"><a class="header-anchor" href="#判断系统是否docker" aria-hidden="true">#</a> 判断系统是否Docker</h2><p>1、是否存在<code>.dockerenv</code>文件</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">ls</span> <span class="token parameter variable">-alh</span> /.dockerenv
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>2、查看proc</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">cat</span> /proc/1/cgroup

:devices:/kubepods/burstable/podc 	<span class="token comment">#Docker</span>
:devices:/							<span class="token comment">#虚拟机或物理机</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="基础命令" tabindex="-1"><a class="header-anchor" href="#基础命令" aria-hidden="true">#</a> 基础命令</h2><table><thead><tr><th>释义</th><th style="text-align:left;">命令</th></tr></thead><tbody><tr><td>#查看当前所在目录</td><td style="text-align:left;">pwd</td></tr><tr><td>#进入某个目录</td><td style="text-align:left;">cd</td></tr><tr><td>#查看某目录下的文件信息</td><td style="text-align:left;">ls -al</td></tr><tr><td>#创建文件</td><td style="text-align:left;">touch</td></tr><tr><td>#创建目录, -p 多级目录创建</td><td style="text-align:left;">mkdir</td></tr><tr><td>#移动文件（复制、移动、重命名）</td><td style="text-align:left;">cp mv rm</td></tr><tr><td>#查找文件</td><td style="text-align:left;">find / -name xx*</td></tr><tr><td>#查看文件内容</td><td style="text-align:left;">cat</td></tr><tr><td>#(逐页阅读,空格下一页，b返回上一页)</td><td style="text-align:left;">more</td></tr><tr><td>#查看前两行</td><td style="text-align:left;">head -n 2 xx.txt</td></tr><tr><td>#查看ca开头的文件的后3行</td><td style="text-align:left;">tail -n 3 ca.*</td></tr><tr><td>#正则匹配，搜索文本</td><td style="text-align:left;">grep</td></tr><tr><td>#用于在shell中打印shell变量的值，或者直接输出指定的字符串</td><td style="text-align:left;">echo</td></tr></tbody></table>`,9),l=[d];function i(r,c){return t(),n("div",null,l)}const m=e(s,[["render",i],["__file","Linux常用命令.html.vue"]]);export{m as default};
