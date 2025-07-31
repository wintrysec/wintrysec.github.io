import{_ as t}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as c,c as l,a as n,b as s,d as i,e as a,r as p}from"./app.f4d16c82.js";const o={},r=a(`<h2 id="git手册" tabindex="-1"><a class="header-anchor" href="#git手册" aria-hidden="true">#</a> Git手册</h2><h3 id="基本设置" tabindex="-1"><a class="header-anchor" href="#基本设置" aria-hidden="true">#</a> 基本设置</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> config <span class="token parameter variable">--list</span>	<span class="token comment">#查看配置信息</span>
<span class="token function">git</span> config <span class="token parameter variable">--global</span> user.name <span class="token string">&quot;wintrysec&quot;</span>	<span class="token comment">#配置用户信息-用户名</span>
<span class="token function">git</span> config <span class="token parameter variable">--global</span> user.email <span class="token string">&quot;wintrysec@gmail.com&quot;</span>	<span class="token comment">#配置用户信息-邮箱</span>
<span class="token function">git</span> init 	<span class="token comment">#初始化版本控制</span>
<span class="token function">git</span> <span class="token function">add</span> <span class="token builtin class-name">.</span>	<span class="token comment">#添加文件追踪</span>
<span class="token function">git</span> commit <span class="token parameter variable">-m</span> <span class="token string">&quot;这里是说明消息&quot;</span>	<span class="token comment">#提交文件</span>
<span class="token function">git</span> status	<span class="token comment">#查看当前修改状态</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="远程仓库" tabindex="-1"><a class="header-anchor" href="#远程仓库" aria-hidden="true">#</a> 远程仓库</h3><p>1、创建 SSH Key</p><p>【C盘—-&gt;用户/user—-&gt;Administrator（自己的用户名）】</p><p>看看有没有 .ssh 目录，如果有，再看看这个目录下有没有 <code>id_rsa</code> 和 <code>id_rsa.pub</code></p><p>如果已经有了，可直接跳到下一步。</p><p>如果没有，打开 Shell（Windows下打开Git Bash），创建 SSH Key</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>ssh-keygen <span class="token parameter variable">-t</span> rsa <span class="token parameter variable">-C</span> <span class="token string">&quot;wintrysec@gmail.com&quot;</span>  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>2、登陆 GitHub，打开 “Settings”**</p><p>“SSH Keys” 页面，“New SSH key”，“粘贴公钥”</p><p>3、推送到远程仓库</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> push <span class="token parameter variable">-f</span> https://github.com/wintrysec/wintrysec.github.io.git master:gh-pages
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="更新远程仓库" tabindex="-1"><a class="header-anchor" href="#更新远程仓库" aria-hidden="true">#</a> 更新远程仓库</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> pull	<span class="token comment">#拉取更新，每次必做防止团队合作干掉别人上传的代码</span>
<span class="token function">git</span> <span class="token function">add</span> <span class="token parameter variable">-A</span>	<span class="token comment">#更新文件后添加追踪</span>
<span class="token function">git</span> commit <span class="token parameter variable">-m</span> <span class="token string">&quot;deploy&quot;</span>	<span class="token comment">#提交文件和说明消息</span>
<span class="token function">git</span> status	<span class="token comment">#查看当前修改状态</span>
<span class="token function">git</span> branch	<span class="token comment">#查看当前分支</span>
<span class="token function">git</span> push	<span class="token comment">#推送向远程仓库（已添加远程仓库情况下这样，否则用-f指定远程仓库）</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="docker微服务构建" tabindex="-1"><a class="header-anchor" href="#docker微服务构建" aria-hidden="true">#</a> Docker微服务构建</h2><div class="custom-container tip"><p class="custom-container-title">提示</p><p>Docker可以轻松的为应用创建一个轻量级、可移植、自给自足的容器，常用于Web应用自动化发布</p><p>与虚拟机相比，它以一种轻量级的方式实现了运行空间的隔离</p><p>如果物理机是一幢住宅楼，虚拟机就是大楼中的一户户套房，而容器技术就是套房里的一个个隔断。</p></div><h3 id="centos7安装docker" tabindex="-1"><a class="header-anchor" href="#centos7安装docker" aria-hidden="true">#</a> Centos7安装Docker</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># yum-config-manager需要用这个包,安装docker官方源</span>
yum <span class="token function">install</span> <span class="token parameter variable">-y</span> yum-utils
yum-config-manager --add-repo https://download.docker.com/linux/centos/docker-ce.repo
yum makecache
yum <span class="token parameter variable">-y</span> <span class="token function">install</span> docker-ce docker-ce-cli containerd.io docker-compose-plugin
systemctl start <span class="token function">docker</span>
systemctl <span class="token builtin class-name">enable</span> <span class="token function">docker</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><details class="custom-container details"><summary>镜像加速</summary><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">mkdir</span> <span class="token parameter variable">-p</span> /etc/docker/
<span class="token function">cat</span> <span class="token operator">&gt;</span>/etc/docker/daemon.json<span class="token operator">&lt;&lt;</span> <span class="token string">EOF
{
        &quot;registry-mirrors&quot;: [
            &quot;https://docker-0.unsee.tech&quot;
        ]
}
EOF</span>
systemctl daemon-reload <span class="token operator">&amp;&amp;</span> systemctl restart <span class="token function">docker</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h3 id="镜像" tabindex="-1"><a class="header-anchor" href="#镜像" aria-hidden="true">#</a> 镜像</h3><p>Docker 镜像是一个特殊的文件系统，除了提供容器运行时所需的程序、库、资源、配置等文件外；</p><p>还包含了一些为运行时准备的一些配置参数（如匿名卷、环境变量、用户等）</p><p>镜像不包含任何动态数据，其内容在构建之后也不会被改变。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> search ubuntu	<span class="token comment">#查找镜像</span>
<span class="token function">docker</span> pull ubuntu		<span class="token comment">#拉取镜像(就是下载)</span>
<span class="token function">docker</span> images	<span class="token comment">#查看所有Docker镜像</span>
<span class="token function">docker</span> <span class="token function">history</span>	<span class="token comment">#查看镜像历史（有哪些层）</span>
<span class="token function">docker</span> system <span class="token function">df</span>	<span class="token comment">#查看镜像、容器、数据卷所占用的空间</span>
<span class="token function">docker</span> rmi <span class="token parameter variable">-f</span> <span class="token function">id</span>	<span class="token comment">#删除镜像</span>
<span class="token function">docker</span> rmi <span class="token parameter variable">-f</span> <span class="token variable"><span class="token variable">\`</span><span class="token function">docker</span> images <span class="token parameter variable">-q</span><span class="token variable">\`</span></span>	<span class="token comment">#删除全部镜像</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="容器" tabindex="-1"><a class="header-anchor" href="#容器" aria-hidden="true">#</a> 容器</h3><details class="custom-container details"><summary>镜像和容器的区别</summary><p>镜像是静态的定义，容器是镜像运行时的实体，容器可以被创建、启动、停止、删除、暂停等；</p><p>容器的实质是进程，但与直接在宿主执行的进程不同，容器进程运行于属于自己的独立的命名空间</p><p>因此容器可以拥有自己的文件系统、自己的网络配置、自己的进程空间，甚至自己的用户ID空间</p><p>容器内的进程是运行在一个隔离的环境里，使用起来就好像是在一个独立于宿主的系统下操作一样</p></details><h4 id="容器命令选项" tabindex="-1"><a class="header-anchor" href="#容器命令选项" aria-hidden="true">#</a> 容器命令选项</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> <span class="token function">ps</span>			<span class="token comment">#查看所有启动的容器（若查看所有的容器包括已经关闭,添加-a参数即可）</span>
<span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">-it</span> ID <span class="token function">bash</span>	<span class="token comment">#进入一个正在运行的容器的shell，容器id前4位就行,或者容器名也行</span>
<span class="token builtin class-name">exit</span>	<span class="token comment">#退出容器</span>

<span class="token function">docker</span> inspect ID	<span class="token comment">#查看容器信息（数据卷等 -&gt; &quot;Mounts&quot;）</span>
<span class="token function">docker</span> stats ID	<span class="token comment">#查看Docker状态</span>
<span class="token function">docker</span> logs ID	<span class="token comment">#查看容器日志（报错和命令）</span>


<span class="token function">docker</span> stop ID	<span class="token comment">#停止容器运行，写容器名也行，start是开启</span>
<span class="token function">docker</span> <span class="token function">rm</span> ID	<span class="token comment">#删除容器</span>
<span class="token function">docker</span> <span class="token function">rm</span> <span class="token variable"><span class="token variable">\`</span><span class="token function">docker</span> <span class="token function">ps</span> <span class="token parameter variable">-a</span> <span class="token parameter variable">-q</span><span class="token variable">\`</span></span>	<span class="token comment">#删除所有已经关闭的容器，-f能把正在运行的也关闭</span>
<span class="token function">docker</span> update <span class="token parameter variable">--restart</span><span class="token operator">=</span>always 容器ID	<span class="token comment">#给某个容器添加宿主机开机自启动</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="启动一个容器" tabindex="-1"><a class="header-anchor" href="#启动一个容器" aria-hidden="true">#</a> 启动一个容器</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">-it</span> <span class="token parameter variable">-d</span> <span class="token parameter variable">--name</span> ubuntu_wintry <span class="token parameter variable">-p</span> <span class="token number">8088</span>:80 ubuntu 
<span class="token comment">#运行Docker镜像</span>
<span class="token comment">#-d 守护态运行，不直接把执行命令的结果输出在当前宿主机下</span>
<span class="token comment">#--name参数为自定义容器名</span>
<span class="token comment">#-p参数为指定端口映射、后者为容器的端口(我们访问Docker的宿主机8080端口)</span>
<span class="token comment">#成功后台运行后会返回一个容器的id，只需要记住前两位即可</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="与宿主机传输文件" tabindex="-1"><a class="header-anchor" href="#与宿主机传输文件" aria-hidden="true">#</a> 与宿主机传输文件</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#Docker到宿主机</span>
<span class="token function">docker</span> <span class="token function">cp</span> vpn:/opt/vpnserver/vpn_server.config /root/vpn_server.config

<span class="token comment">#宿主机到Docker</span>
<span class="token function">docker</span> <span class="token function">cp</span> vpn_server.config vpn:/opt/vpnserver/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="dockerfile定制镜像" tabindex="-1"><a class="header-anchor" href="#dockerfile定制镜像" aria-hidden="true">#</a> Dockerfile定制镜像</h3><p>Dockerfile用来创建一个自定义的镜像,包含了用户指定的软件依赖等，用于从无到有的构建镜；</p><p>把每一层修改、安装、构建、操作的命令都写入一个脚本，用这个脚本来构建、定制镜像。</p><p>可以解决镜像无法重复的问题、镜像构建透明性的问题、体积的问题。</p><h4 id="from指定基础镜像" tabindex="-1"><a class="header-anchor" href="#from指定基础镜像" aria-hidden="true">#</a> FROM指定基础镜像</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>FROM ubuntu   <span class="token comment">#指定基础镜像</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>除了选择现有镜像为基础镜像外，Docker 还存在一个特殊的镜像，名为 <strong>scratch</strong>；这个镜像是虚拟的概念，并不实际存在，它表示一个空白的镜像；如果以 <strong>scratch</strong> 为基础镜像的话，意味着你不以任何镜像为基础，接下来所写的指令将作为镜像第一层开始存在；对于 Linux 下静态编译的程序来说，并不需要有操作系统提供运行时支持，所需的一切库都已经在可执行文件里了；因此直接 <strong>FROM scratch</strong> 会让镜像体积更加小巧，使用 Go 语言开发的应用很多会使用这种方式来制作镜像。</p><h4 id="run执行命令" tabindex="-1"><a class="header-anchor" href="#run执行命令" aria-hidden="true">#</a> RUN执行命令</h4><p>Dockerfile 每一个 <strong>RUN</strong> 的行为，都会新建立一层构成新的镜像，这样会使镜像非常臃肿。</p><p>正确的写法应该这样：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>RUN <span class="token assign-left variable">buildDeps</span><span class="token operator">=</span><span class="token string">&#39;gcc libc6-dev make wget&#39;</span> <span class="token punctuation">\\</span>
  <span class="token operator">&amp;&amp;</span> <span class="token function">apt-get</span> update <span class="token punctuation">\\</span>
  <span class="token operator">&amp;&amp;</span> <span class="token function">apt-get</span> <span class="token function">install</span> <span class="token parameter variable">-y</span> <span class="token variable">$buildDeps</span> <span class="token punctuation">\\</span>
  <span class="token operator">&amp;&amp;</span> <span class="token function">wget</span> <span class="token parameter variable">-O</span> redis.tar.gz <span class="token string">&quot;http://download.redis.io/releases/redis-5.0.3.tar.gz&quot;</span> <span class="token punctuation">\\</span>
  <span class="token operator">&amp;&amp;</span> <span class="token function">mkdir</span> <span class="token parameter variable">-p</span> /usr/src/redis <span class="token punctuation">\\</span>
  <span class="token operator">&amp;&amp;</span> <span class="token function">tar</span> <span class="token parameter variable">-xzf</span> redis.tar.gz <span class="token parameter variable">-C</span> /usr/src/redis --strip-components<span class="token operator">=</span><span class="token number">1</span> <span class="token punctuation">\\</span>
  <span class="token operator">&amp;&amp;</span> <span class="token function">make</span> <span class="token parameter variable">-C</span> /usr/src/redis <span class="token punctuation">\\</span>
  <span class="token operator">&amp;&amp;</span> <span class="token function">make</span> <span class="token parameter variable">-C</span> /usr/src/redis <span class="token function">install</span> <span class="token punctuation">\\</span>
  <span class="token operator">&amp;&amp;</span> <span class="token function">rm</span> <span class="token parameter variable">-rf</span> /var/lib/apt/lists/* <span class="token punctuation">\\</span>
  <span class="token operator">&amp;&amp;</span> <span class="token function">rm</span> redis.tar.gz <span class="token punctuation">\\</span>
  <span class="token operator">&amp;&amp;</span> <span class="token function">rm</span> <span class="token parameter variable">-r</span> /usr/src/redis <span class="token punctuation">\\</span>
  <span class="token operator">&amp;&amp;</span> <span class="token function">apt-get</span> purge <span class="token parameter variable">-y</span> --auto-remove <span class="token variable">$buildDeps</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>首先这些命令只有一个目的，就是编译、安装 redis 可执行文件；因此没有必要建立很多层，这是一层能解决的事情。使用 &amp;&amp; 将各个所需命令串联起来，Dockerfile支持行尾添加 \\的命令换行方式，以及行首 #进行注释的格式。</p><p>最后添加了清理工作的命令，删除了为了编译构建所需要的软件，清理了所有下载、展开的文件，并且还清理了apt缓存文件。这是很重要的一步，镜像是多层存储，每一层的东西并不会在下一层被删除，会一直跟随着镜像因此镜像构建时，一定要确保每一层只添加真正需要添加的东西，任何无关的东西都应该清理掉</p><h4 id="构建镜像" tabindex="-1"><a class="header-anchor" href="#构建镜像" aria-hidden="true">#</a> 构建镜像</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> build <span class="token parameter variable">-t</span> ubuntu:v1 <span class="token builtin class-name">.</span>
<span class="token function">docker</span> build <span class="token punctuation">[</span>选项<span class="token punctuation">]</span> <span class="token operator">&lt;</span>上下文路径/URL/-<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="指令详解" tabindex="-1"><a class="header-anchor" href="#指令详解" aria-hidden="true">#</a> 指令详解</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>COPY package.json /usr/src/
<span class="token comment">#从构建上下文目录中复制文件到新的一层的镜像内的 &lt;目标路径&gt; 位置</span>

CMD <span class="token punctuation">[</span><span class="token string">&quot;nginx&quot;</span>, <span class="token string">&quot;-g&quot;</span>, <span class="token string">&quot;daemon off;&quot;</span><span class="token punctuation">]</span> 
<span class="token comment">#容器启动命令</span>
<span class="token comment">#直接执行 nginx 可执行文件，并且要求以前台形式运行，不能用service nginx start</span>

ENV <span class="token assign-left variable">VERSION</span><span class="token operator">=</span><span class="token number">1.0</span> <span class="token assign-left variable">NAME</span><span class="token operator">=</span><span class="token string">&quot;Vuln Range&quot;</span>
<span class="token comment">#ENV用来定义环境变量，用双引号把包含空格的引起来</span>

VOLUME /data
<span class="token comment">#匿名卷，运行时如果用户忘记了指定数据卷挂载位置，会自动挂载数据到/data目录</span>

<span class="token environment constant">USER</span> redis
<span class="token comment">#切换到指定用户，接下来会以这个用户权限执行RUN、CMD等命令</span>

<span class="token comment">#如果以 root 执行的脚本，在执行期间希望改变身份，比如希望以某个已经建立好的用户来运行某个服务进程</span>
<span class="token comment">#不要使用 su 或者 sudo，这些都需要比较麻烦的配置，而且在 TTY 缺失的环境下经常出错，建议使用 gosu</span>

<span class="token comment"># 建立 redis 用户，并使用 gosu 换另一个用户执行命令</span>
RUN <span class="token function">groupadd</span> <span class="token parameter variable">-r</span> redis <span class="token operator">&amp;&amp;</span> <span class="token function">useradd</span> <span class="token parameter variable">-r</span> <span class="token parameter variable">-g</span> redis redis

<span class="token comment">#下载 gosu</span>
RUN <span class="token function">wget</span> <span class="token parameter variable">-O</span> /usr/local/bin/gosu <span class="token string">&quot;https://github.com/tianon/gosu/releases/download/1.12/gosu-amd64&quot;</span> <span class="token punctuation">\\</span>
  <span class="token operator">&amp;&amp;</span> <span class="token function">chmod</span> +x /usr/local/bin/gosu <span class="token punctuation">\\</span>
  <span class="token operator">&amp;&amp;</span> gosu nobody <span class="token boolean">true</span>
  
<span class="token comment"># 设置 CMD，并以另外的用户执行</span>
CMD <span class="token punctuation">[</span> <span class="token string">&quot;exec&quot;</span>, <span class="token string">&quot;gosu&quot;</span>, <span class="token string">&quot;redis&quot;</span>, <span class="token string">&quot;redis-server&quot;</span> <span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="docker-compose" tabindex="-1"><a class="header-anchor" href="#docker-compose" aria-hidden="true">#</a> docker-compose</h3><p>默认的模板文件是 <code>docker-compose.yml</code></p><p>docker compose 是一个整合发布应用的利器，面向项目进行管理。</p><p>服务 (service)：一个应用容器，实际上可以运行多个相同镜像的实例</p><p>项目 (project)：由一组关联的应用容器组成的一个完整业务单元</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&#39;3&#39;</span>
<span class="token key atrule">services</span><span class="token punctuation">:</span>
<span class="token key atrule">db</span><span class="token punctuation">:</span>   <span class="token comment">#数据库服务</span>
   image<span class="token punctuation">:</span> mysql<span class="token punctuation">:</span><span class="token number">8.0</span>    <span class="token comment">#使用的镜像</span>
   command<span class="token punctuation">:</span>
     <span class="token punctuation">-</span><span class="token punctuation">-</span>default_authentication_plugin=mysql_native_password
     <span class="token punctuation">-</span><span class="token punctuation">-</span>character<span class="token punctuation">-</span>set<span class="token punctuation">-</span>server=utf8mb4
     <span class="token punctuation">-</span><span class="token punctuation">-</span>collation<span class="token punctuation">-</span>server=utf8mb4_unicode_ci
   volumes<span class="token punctuation">:</span> 
     <span class="token punctuation">-</span> db_data<span class="token punctuation">:</span>/var/lib/mysql  <span class="token comment">#用数据卷名称，设置数据卷所挂载路径</span>
   restart<span class="token punctuation">:</span> always
   environment<span class="token punctuation">:</span> 
     MYSQL_ROOT_PASSWORD<span class="token punctuation">:</span> root
     MYSQL_DATABASE<span class="token punctuation">:</span> web<span class="token punctuation">-</span>bug
<span class="token key atrule">web-bug</span><span class="token punctuation">:</span> <span class="token comment">#Web服务</span>
  depends_on<span class="token punctuation">:</span>
   <span class="token punctuation">-</span> db
  image<span class="token punctuation">:</span> wintrysec/web<span class="token punctuation">-</span>bug <span class="token comment">#使用的镜像</span>
  ports<span class="token punctuation">:</span>
   <span class="token punctuation">-</span> <span class="token string">&quot;80:80&quot;</span>
  restart<span class="token punctuation">:</span> always
  environment<span class="token punctuation">:</span> 
   DB_HOST<span class="token punctuation">:</span> db<span class="token punctuation">:</span><span class="token number">3306</span>
   DB_USER<span class="token punctuation">:</span> root
   DB_PASSWORD<span class="token punctuation">:</span> root
<span class="token key atrule">volumes</span><span class="token punctuation">:</span>  <span class="token comment">#如果上边挂载数据卷的路径为数据卷名称，必须在文件中配置数据卷</span>
  db_data<span class="token punctuation">:</span>
   <span class="token punctuation">-</span> <span class="token string">&quot;web-bug.sql&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>YAML 语言基本语法规则如下</p><ul><li>大小写敏感</li><li>使用缩进表示层级关系</li><li>缩进时不允许使用Tab键，只允许使用空格。</li><li>缩进的空格数目不重要，只要相同层级的元素左侧对齐即可</li><li>每个散列项<strong>冒号</strong>和<strong>值</strong>之间至少有一个空格！</li></ul>`,59),d={href:"http://nodeca.github.io/js-yaml/",target:"_blank",rel:"noopener noreferrer"},u=a(`<h3 id="网络管理" tabindex="-1"><a class="header-anchor" href="#网络管理" aria-hidden="true">#</a> 网络管理</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> network <span class="token function">ls</span>       <span class="token comment">#列出已有docker网络</span>
<span class="token function">docker</span> network prune <span class="token parameter variable">-f</span> <span class="token comment">#删除所有未使用的网络（即对应容器已经删除的网络）</span>
<span class="token function">docker</span> network inspect bridge   <span class="token comment">#显示一个或多个网络的详细信息</span>


<span class="token comment">#映射指到定地址的任意端口 (随机分配一个外部访问用的端口)</span>
<span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token parameter variable">-p</span> <span class="token number">127.0</span>.0.1::80 nginx

<span class="token comment">#查看端口映射配置</span>
<span class="token function">docker</span> port ID

<span class="token number">1</span>、创建一个Docker网络
<span class="token function">docker</span> network create <span class="token parameter variable">-d</span> bridge my-net

<span class="token number">2</span>、运行一个容器并连接到新建的 my-net 网络
<span class="token function">docker</span> run <span class="token parameter variable">-it</span> <span class="token parameter variable">--rm</span> <span class="token parameter variable">--name</span> busybox1 <span class="token parameter variable">--network</span> my-net busybox <span class="token function">sh</span>

<span class="token number">3</span>、打开新的终端，再运行一个容器并加入到 my-net 网络
<span class="token function">docker</span> run <span class="token parameter variable">-it</span> <span class="token parameter variable">--rm</span> <span class="token parameter variable">--name</span> busybox2 <span class="token parameter variable">--network</span> my-net busybox <span class="token function">sh</span>

<span class="token number">4</span>、证明容器互通，用其中一个容器，ping另外一个容器
容器访问控制
容器要想访问外部网络，需要本地系统的转发支持
<span class="token function">sysctl</span> <span class="token parameter variable">-w</span> <span class="token assign-left variable">net.ipv4.ip_forward</span><span class="token operator">=</span><span class="token number">1</span>     <span class="token comment">#开启转发</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="上传到docker-hub" tabindex="-1"><a class="header-anchor" href="#上传到docker-hub" aria-hidden="true">#</a> 上传到Docker Hub</h3>`,3),m={href:"https://hub.docker.com/repository/docker/wintrysec/wintrysec-lab",target:"_blank",rel:"noopener noreferrer"},v=a(`<p>2、使用Docker hub账号在验证本地登录</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> login
<span class="token comment">#登录信息信息,保存在~/.docker/config.json文件里</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>3、注意事项</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#容器保存为镜像</span>
<span class="token function">docker</span> commit ec0f alioth:v1.0

<span class="token comment">#导出镜像</span>
<span class="token function">docker</span> save <span class="token parameter variable">-o</span> alioth.tar alioth:v1.0

<span class="token comment">#离线机器加载docker镜像</span>
<span class="token function">docker</span> load <span class="token parameter variable">-i</span> alioth.tar
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> images
<span class="token comment">#查看本地镜像，如果 Docker ID/仓库名 不是属于你的账户是上传不了的</span>

<span class="token comment">#当然可以更改，命令如下</span>
<span class="token function">docker</span> tag 镜像ID 用户名称/Ubuntu:新的标签名<span class="token punctuation">(</span>tag<span class="token punctuation">)</span>

<span class="token comment">#用这种方式，把使用这个ID的&quot;容器&quot;保存成型个新镜像</span>
<span class="token function">docker</span> commit <span class="token parameter variable">-a</span> <span class="token string">&#39;新镜像&#39;</span> 容器ID 用户名称/镜像名:标签
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>4、将镜像推送到远程仓库</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> push 用户名/仓库名:tagname
<span class="token function">docker</span> push wintrysec/wintrysec-lab:tagname
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,7);function k(b,h){const e=p("ExternalLinkIcon");return c(),l("div",null,[r,n("p",null,[n("a",d,[s("在线书写YAML(自动检测语法)"),i(e)])]),u,n("p",null,[s("1、注册"),n("a",m,[s("Docker Hub"),i(e)]),s("账户")]),v])}const y=t(o,[["render",k],["__file","docker.html.vue"]]);export{y as default};
