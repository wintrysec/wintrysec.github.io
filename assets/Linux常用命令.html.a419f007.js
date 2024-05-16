import{_ as t}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as e,c as n,e as a}from"./app.02b19a3e.js";const s={},d=a(`<h2 id="基础命令" tabindex="-1"><a class="header-anchor" href="#基础命令" aria-hidden="true">#</a> 基础命令</h2><table><thead><tr><th style="text-align:left;">命令</th><th>释义</th></tr></thead><tbody><tr><td style="text-align:left;">pwd</td><td>#查看当前所在目录</td></tr><tr><td style="text-align:left;">cd</td><td>#进入某个目录</td></tr><tr><td style="text-align:left;">ls -al</td><td>#查看某目录下的文件信息</td></tr><tr><td style="text-align:left;">touch</td><td>#创建文件</td></tr><tr><td style="text-align:left;">mkdir</td><td>#创建目录, -p 多级目录创建</td></tr><tr><td style="text-align:left;">cp mv rm</td><td>#移动文件（复制、移动、重命名）</td></tr><tr><td style="text-align:left;">find / -name xx*</td><td>#查找文件</td></tr><tr><td style="text-align:left;">cat</td><td>#查看文件内容</td></tr><tr><td style="text-align:left;">more</td><td>#(逐页阅读,空格下一页，b返回上一页)</td></tr><tr><td style="text-align:left;">head -n 2 xx.txt</td><td>#查看前两行</td></tr><tr><td style="text-align:left;">tail -n 3 ca.*</td><td>#查看ca开头的文件的后3行</td></tr><tr><td style="text-align:left;">grep</td><td>#正则匹配，搜索文本</td></tr><tr><td style="text-align:left;">echo</td><td>#用于在shell中打印shell变量的值，或者直接输出指定的字符串</td></tr></tbody></table><h2 id="系统信息" tabindex="-1"><a class="header-anchor" href="#系统信息" aria-hidden="true">#</a> 系统信息</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#查看系统版本</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),l=[d];function i(r,c){return e(),n("div",null,l)}const v=t(s,[["render",i],["__file","Linux常用命令.html.vue"]]);export{v as default};
