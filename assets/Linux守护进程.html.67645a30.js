import{_ as l}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as d,c as a,a as n,b as i,d as r,e,r as t}from"./app.5109c2cc.js";const v="/assets/linux_deamon.e9f095c4.png",c={},u=e('<h2 id="守护进程概述" tabindex="-1"><a class="header-anchor" href="#守护进程概述" aria-hidden="true">#</a> 守护进程概述</h2><p>守护进程（daemon）就是一直在后台运行的进程,一般是为了保护我们的程序/服务的正常运行，当程序被关闭、异常退出等时再次启动程序/恢复服务。</p><p>需要让程序在后台不间断的运行可以这样做</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">nohup</span> <span class="token variable"><span class="token variable">`</span>./api<span class="token variable">`</span></span> <span class="token operator">&amp;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>反引号的作用是执行完此条命令终端不卡住。</p><p>也可以写成Daemon程序，例如 Apache 、MongoDB等，守护进程的名称通常以d结尾，比如sshd、httpd、mongod等。</p><p>守护进程脱离终端而存在。当你执行命令<code>ps -o pid,ppid,cmd -p 7390</code> 时，守护进程的 PPID （父进程 ID）都是 1，TTY （终端）则是<code>???</code>。</p><h2 id="golang实现守护进程" tabindex="-1"><a class="header-anchor" href="#golang实现守护进程" aria-hidden="true">#</a> Golang实现守护进程</h2><p>守护进程创建流程</p><p><img src="'+v+'" alt="linux_deamon" loading="lazy"></p><p>1、frok创建子进程，并exit使父进程退出</p><p>既然是服务进程，意味着是可以独立运行的，不会因为父进程退出而销毁，在 Linux 系统中有一个进程号为 1 的 init 进程，这个进程一直存在与系统中，当我们的子进程从父进程脱离后，子进程变为孤儿进程，随之系统的 init 进程会接管对这个进程的控制。</p><p>2、重启session会话</p><p>使用setsid重新开启一个session会话，使当前进程脱离原会话、原进程组、原终端的控制</p><p>3、改变工作目录</p><p>进程活动时，其工作目录所在的文件系统不能卸载，一般需要将守护进程工作目录改变到根目录</p><p>4、umask 重设文件权限掩码</p><p>从父进程继承文件创建的掩码，可能修改守护进程所创建的文件的权限，需要清除重设</p><p>5、关闭文件描述符</p><p>从父进程继承了打开的文件描述符，若不关闭将会造成资源浪费，及其它未知错误</p><p>6、重定向标准输入、输出、错误描述符至NULL</p><p>守护进程在后台运行，不会与用户发生直接的交互，我们希望限制终端的输入输出，因此将文件描述符 0, 1, 2 定位到 <code>/dev/null</code></p>',22),o={href:"https://github.com/sevlyar/go-daemon",target:"_blank",rel:"noopener noreferrer"},p=e(`<p>或者自己编码实现：</p><div class="language-golang line-numbers-mode" data-ext="golang"><pre class="language-golang"><code>func Daemon() {
	//父进程为init，已经是一个守护进程
	if syscall.Getppid() == 1 {
		fmt.Println(&quot;process is already a daemon&quot;)
	}
 
	/* 
     *fork 一个子进程 若成功pid在父进程中返回子进程号，在子进程中返回0
     *其中syscall.Syscall函数为系统调用，内部实现为汇编语言
     *推测函数四个入参为：第一个是系统函数宏定义，其余三个为保留参数，
     *三个返回值为：前两个为保留函数返回值，最后一个为调用结果
     *例如系统函数fork没有入参,返回值为一个pid 故后三个参数传入0（nil）
    */
	pid, _, err := syscall.Syscall(syscall.SYS_FORK, 0, 0, 0)
	if err != 0 {
		log.Fatalf(&quot;fork error! %v\\n&quot;, err)
	}
 
	//创建子进程失败
	if pid &lt; 0 {
		log.Fatalf(&quot;fork fail!&quot;)
	}
 
	// 父进程：创建子进程成功，退出，使子进程交由init进程托管
	if pid &gt; 0 {
		os.Exit(0)
	}
 
	//重设文件权限掩码为0,避免继承父进程的文件掩码
	_ = syscall.Umask(0)
 
 
    //创建一个新会话, 使当前进程脱离原会话、原进程组、原终端的控制
	sid, s_errno := syscall.Setsid()
	if s_errno != nil {
		dlog.Fatalf(&quot;Error: syscall.Setsid errno: %d&quot;, s_errno)
	}
 
	if sid &lt; 0 {
		fmt.Println(&quot;Error: syscall.Setsid fail&quot;)
		return -1
	}
 
	//让根目录成为子进程的工作目录，避免继承父进程的工作目录
	os.Chdir(&quot;/&quot;)
 
    //重定向标准输入、输出、错误描述符至NULL,限制终端输入输出
	f, op_err := os.OpenFile(&quot;/dev/null&quot;, os.O_RDWR, 0)
	if op_err != nil {
		log.Fatalf(&quot;Error: open /dev/null fail, err:%v\\n&quot;, op_err)
	}
 
	fd := f.Fd()
	dup_err := syscall.Dup2(int(fd), int(os.Stdin.Fd()))
	if dup_err != nil {
		log.Fatalf(&quot;Error: syscall.Dup2 err: %v&quot;, dup_err )
	}
 
	dup_err = syscall.Dup2(int(fd), int(os.Stdout.Fd()))
	if dup_err != nil {
		log.Fatalf(&quot;Error: syscall.Dup2 err: %v&quot;, dup_err )
	}
 
	dup_err = syscall.Dup2(int(fd), int(os.Stderr.Fd()))
	if dup_err != nil {
		log.Fatalf(&quot;Error: syscall.Dup2 err: %v&quot;, dup_err )
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="systemd" tabindex="-1"><a class="header-anchor" href="#systemd" aria-hidden="true">#</a> systemd</h2><p>Linux系统有自己的守护进程管理工具 Systemd 。</p><p>它是操作系统的一部分，直接与内核交互，性能出色，功能极其强大。</p><p>我们完全可以将程序交给 Systemd ，让系统统一管理，成为真正意义上的系统服务。</p><div class="custom-container tip"><p class="custom-container-title">提示</p><p>但是对于调用扫描器这类的程序，使用systemd或者init.d开机自启动的话会导致扫描结果不准确</p><p>解决方法就是自己实现</p></div><p>例如以下是一个将FRP设置为服务的操作</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token function">cat</span> <span class="token operator">&gt;</span> /usr/lib/systemd/system/frp.service <span class="token operator">&lt;&lt;</span> <span class="token string">EOF
[Unit]
Description=Systemd Service For FRP
After=network.target

[Service]
User=nobody
Group=nogroup
ExecStart=/usr/bin/frps -c /etc/frp/frps.ini
Restart=on-failure
RestartSec=5s
LimitNOFILE=1048576

[Install]
WantedBy=multi-user.target
EOF</span>

<span class="token function">chmod</span> +x /usr/bin/frps
systemctl start frp.service
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9);function m(b,f){const s=t("ExternalLinkIcon");return d(),a("div",null,[u,n("p",null,[i("有一个第三方库可以快速实现："),n("a",o,[i("https://github.com/sevlyar/go-daemon"),r(s)])]),p])}const h=l(c,[["render",m],["__file","Linux守护进程.html.vue"]]);export{h as default};
