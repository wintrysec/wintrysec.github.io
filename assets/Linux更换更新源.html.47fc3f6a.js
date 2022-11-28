import{_ as s}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as e,c as n,e as a}from"./app.97ace05d.js";const r={},t=a(`<h2 id="centos-7" tabindex="-1"><a class="header-anchor" href="#centos-7" aria-hidden="true">#</a> Centos 7</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">-o</span> /etc/yum.repos.d/CentOS-Base.repo https://mirrors.aliyun.com/repo/Centos-7.repo
<span class="token function">curl</span> <span class="token parameter variable">-o</span> /etc/yum.repos.d/epel.repo http://mirrors.cloud.tencent.com/repo/epel-7.repo
yum clean all<span class="token punctuation">;</span>yum makecache
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="centos-8" tabindex="-1"><a class="header-anchor" href="#centos-8" aria-hidden="true">#</a> Centos 8</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#公网用户</span>
<span class="token function">mv</span> /etc/yum.repos.d/CentOS-Base.repo /etc/yum.repos.d/CentOS-Base.repo.backup
<span class="token function">wget</span> <span class="token parameter variable">-O</span> /etc/yum.repos.d/CentOS-Base.repo https://mirrors.aliyun.com/repo/Centos-vault-8.5.2111.repo
yum clean all <span class="token operator">&amp;&amp;</span> yum makecache

<span class="token comment">#阿里云ECS用户</span>
<span class="token function">mv</span> /etc/yum.repos.d/CentOS-Base.repo /etc/yum.repos.d/CentOS-Base.repo.backup
<span class="token function">wget</span> <span class="token parameter variable">-O</span> /etc/yum.repos.d/CentOS-Base.repo http://mirrors.cloud.aliyuncs.com/repo/Centos-vault-8.5.2111.repo
<span class="token function">sed</span> <span class="token parameter variable">-i</span> <span class="token string">&#39;s/mirrors.cloud.aliyuncs.com/url_tmp/g&#39;</span> /etc/yum.repos.d/CentOS-Base.repo <span class="token operator">&amp;&amp;</span> <span class="token function">sed</span> <span class="token parameter variable">-i</span> <span class="token string">&#39;s/mirrors.aliyun.com/mirrors.cloud.aliyuncs.com/g&#39;</span> /etc/yum.repos.d/CentOS-Base.repo <span class="token operator">&amp;&amp;</span> <span class="token function">sed</span> <span class="token parameter variable">-i</span> <span class="token string">&#39;s/url_tmp/mirrors.aliyun.com/g&#39;</span> /etc/yum.repos.d/CentOS-Base.repo
yum clean all <span class="token operator">&amp;&amp;</span> yum makecache
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="ubuntu" tabindex="-1"><a class="header-anchor" href="#ubuntu" aria-hidden="true">#</a> Ubuntu</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">cat</span> <span class="token operator">&gt;</span> /etc/apt/sources.list <span class="token operator">&lt;&lt;</span><span class="token string">EOF
deb https://mirrors.ustc.edu.cn/ubuntu/ focal main restricted universe multiverse
deb https://mirrors.ustc.edu.cn/ubuntu/ focal-security main restricted universe multiverse
deb https://mirrors.ustc.edu.cn/ubuntu/ focal-updates main restricted universe multiverse
deb https://mirrors.ustc.edu.cn/ubuntu/ focal-backports main restricted universe multiverse
EOF</span>
<span class="token function">sudo</span> <span class="token function">apt-get</span> update
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="kali-linux" tabindex="-1"><a class="header-anchor" href="#kali-linux" aria-hidden="true">#</a> Kali Linux</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">cat</span> <span class="token operator">&gt;</span> /etc/apt/sources.list <span class="token operator">&lt;&lt;</span><span class="token string">EOF
deb https://mirrors.ustc.edu.cn/kali kali-rolling main non-free contrib
deb-src https://mirrors.ustc.edu.cn/kali kali-rolling main non-free contrib
EOF</span>
<span class="token function">sudo</span> <span class="token function">apt-get</span> update
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8),i=[t];function c(l,o){return e(),n("div",null,i)}const d=s(r,[["render",c],["__file","Linux更换更新源.html.vue"]]);export{d as default};
