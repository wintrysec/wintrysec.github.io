import{_ as n}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as s,c as i,e}from"./app.91785a79.js";const a={},d=e(`<h2 id="一、systemd启动" tabindex="-1"><a class="header-anchor" href="#一、systemd启动" aria-hidden="true">#</a> 一、systemd启动</h2><div class="custom-container info"><p class="custom-container-title">相关信息</p><p>systemd提供更优秀的框架以表示系统服务间的依赖关系</p><p>并依此实现系统初始化时服务的并行启动，同时达到降低Shell的系统开销的效果</p><p>(1) 采用Socket激活式与总线激活式服务，以提高相互依赖的各服务的并行运行性能；</p><p>(2) 用Cgroups代替PID来追踪进程，因此即使是两次fork之后生成的守护进程也不会脱离systemd的控制</p></div><h3 id="示例-mongodb数据库开机自启动" tabindex="-1"><a class="header-anchor" href="#示例-mongodb数据库开机自启动" aria-hidden="true">#</a> 示例-mongodb数据库开机自启动</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">cat</span> <span class="token operator">&gt;</span> /usr/lib/systemd/system/mongod.service <span class="token operator">&lt;&lt;</span><span class="token string">EOF

[Unit]
Description=MongoDB Database Server
Documentation=https://docs.mongodb.org/manual
After=network.target

[Service]
User=mongod
Group=mongod
Environment=&quot;OPTIONS=-f /etc/mongod.conf&quot;
EnvironmentFile=-/etc/sysconfig/mongod
ExecStart=/usr/bin/mongod <span class="token variable">$OPTIONS</span>
ExecStartPre=/usr/bin/mkdir -p /var/run/mongodb
ExecStartPre=/usr/bin/chown mongod:mongod /var/run/mongodb
ExecStartPre=/usr/bin/chmod 0755 /var/run/mongodb
PermissionsStartOnly=true
PIDFile=/var/run/mongodb/mongod.pid
Type=forking

# file size
LimitFSIZE=infinity
# cpu time
LimitCPU=infinity
# virtual memory size
LimitAS=infinity
# open files
LimitNOFILE=64000
# processes/threads
LimitNPROC=64000
# locked memory
LimitMEMLOCK=infinity
# total threads (user+kernel)
TasksMax=infinity
TasksAccounting=false

[Install]
WantedBy=multi-user.target
EOF</span>

<span class="token comment">#设置mongod开机自启</span>
systemctl <span class="token builtin class-name">enable</span> mongod
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="二、自定义脚本启动" tabindex="-1"><a class="header-anchor" href="#二、自定义脚本启动" aria-hidden="true">#</a> 二、自定义脚本启动</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">cat</span> <span class="token operator">&gt;</span> /etc/init.d/startapi.sh <span class="token operator">&lt;&lt;</span><span class="token string">EOF
#!/bin/sh
#chkconfig: 2345 80 90
#description:auto_run
nohup /root/api &amp;
EOF</span>

<span class="token function">chmod</span> +x /etc/init.d/startapi.sh
<span class="token function">chkconfig</span> <span class="token parameter variable">--add</span> startapi.sh
<span class="token function">chkconfig</span> startapi.sh on

<span class="token comment">#移除此启动项</span>
<span class="token function">chkconfig</span> startapi.sh off
<span class="token function">chkconfig</span> <span class="token parameter variable">--del</span> startapi.sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="三、使用定时任务" tabindex="-1"><a class="header-anchor" href="#三、使用定时任务" aria-hidden="true">#</a> 三、使用定时任务</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">chmod</span> +x /home/startapi.sh
<span class="token builtin class-name">echo</span> <span class="token string">&quot;* * * * * root /home/startapi.sh&quot;</span> <span class="token operator">&gt;&gt;</span> /etc/crontab
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,8),l=[d];function r(t,c){return s(),i("div",null,l)}const m=n(a,[["render",r],["__file","开机启动项.html.vue"]]);export{m as default};
