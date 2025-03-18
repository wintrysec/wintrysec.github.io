import{_ as o}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as r,c as m,d as c,w as e,e as u,a as n,b as s,r as p}from"./app.b2d7a8da.js";const d={},b=u('<h2 id="进程状态" tabindex="-1"><a class="header-anchor" href="#进程状态" aria-hidden="true">#</a> 进程状态</h2><p><strong>Linux上进程有5种状态:</strong></p><div class="custom-container tip"><p class="custom-container-title">提示</p><ul><li><strong>R 运行 runnable</strong> (正在运行或在运行队列中等待)</li><li><strong>S 中断 sleeping</strong> (休眠中, 受阻, 在等待某个条件的形成或接受到信号)</li><li><strong>D 不可中断</strong> (收到信号不唤醒和不可运行, 进程必须等待直到有中断发生)</li><li><strong>Z 僵死</strong> (进程已终止, 但进程描述符存在, 直到父进程调用wait4()系统调用后释放)</li><li><strong>T 停止</strong> (进程收到SIGSTOP, SIGSTP, SIGTIN, SIGTOU信号后停止运行运行)</li></ul></div><h2 id="查看进程" tabindex="-1"><a class="header-anchor" href="#查看进程" aria-hidden="true">#</a> 查看进程</h2>',4),v=n("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token function"},"ps"),s(` aux

`),n("span",{class:"token comment"},"#参数释义"),s(`
a	`),n("span",{class:"token comment"},"#显示现行终端机下的所有程序，包括其他用户的程序"),s(`
u	`),n("span",{class:"token comment"},"#以用户为主的格式来显示程序状况"),s(`
x	`),n("span",{class:"token comment"},"#显示所有程序，不以终端机来区分"),s(`

`),n("span",{class:"token comment"},"#结果释义"),s(`
`),n("span",{class:"token environment constant"},"USER"),n("span",{class:"token builtin class-name"},":"),s(`      运行进程的用户
PID：      进程ID
%CPU:  　　CPU占用率
%MEM:      内存占用率
VSZ：      占用虚拟内存
RSS:       占用实际内存 驻留内存
TTY：      进程运行的终端
STAT：     进程状态     `),n("span",{class:"token function"},"man"),s(),n("span",{class:"token function"},"ps"),s(),n("span",{class:"token punctuation"},"("),s("/STATE"),n("span",{class:"token punctuation"},")"),s(`            
      R     运行
      S     可中断睡眠 Sleep
      D     不可中断睡眠
      T     停止的进程 
      Z     僵尸进程
      X     死掉的进程
      
      Ss     s进程的领导者，父进程
      S`),n("span",{class:"token operator"},"<"),s(" 　　 "),n("span",{class:"token operator"},"<"),s(`优先级较高的进程
      SN     N优先级较低的进程
      R+      +表示是前台的进程组
      Sl     以线程的方式运行    
START:     进程的启动时间
TIME：     进程占用CPU的总时间
COMMAND：  进程文件，进程名

`),n("span",{class:"token comment"},"#过滤查询"),s(`
`),n("span",{class:"token function"},"ps"),s(" aux "),n("span",{class:"token operator"},"|"),s(),n("span",{class:"token function"},"grep"),s(` api

`),n("span",{class:"token comment"},"#动态查看进程信息"),s(`
`),n("span",{class:"token function"},"top"),s(`
`),n("span",{class:"token function"},"htop"),s(`
atop

`),n("span",{class:"token comment"},"#根据进程名查找其PID"),s(`
pidof nginx

`),n("span",{class:"token comment"},"#搜索并列出符合指定条件的进程ID"),s(`
pgrep nginx

`),n("span",{class:"token comment"},"#查看指定用户打开的文件"),s(`
`),n("span",{class:"token function"},"lsof"),s(),n("span",{class:"token parameter variable"},"-u"),s(` 用户名

`),n("span",{class:"token comment"},"#列出特定PID对应的进程所打开的所有文件"),s(`
`),n("span",{class:"token function"},"lsof"),s(),n("span",{class:"token parameter variable"},"-p"),s(` PID1,PID2,^PID3

`),n("span",{class:"token comment"},"#查看指定进程的父进程ID"),s(`
`),n("span",{class:"token function"},"ps"),s(),n("span",{class:"token parameter variable"},"-o"),s(" pid,ppid,cmd "),n("span",{class:"token parameter variable"},"-p"),s(),n("span",{class:"token number"},"7390"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),k=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[s(`tasklist

`),n("span",{class:"token comment"},"#过滤查询"),s(`
tasklist `),n("span",{class:"token punctuation"},"|"),s(" findstr "),n("span",{class:"token string"},'"api"'),s(`

`),n("span",{class:"token comment"},"#动态查看进程信息"),s(`
打开任务管理器 `),n("span",{class:"token operator"},"-"),s(`> 再打开资源监视器
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),h=n("h2",{id:"杀死进程",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#杀死进程","aria-hidden":"true"},"#"),s(" 杀死进程")],-1),g=n("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[s(`编号 信号名
`),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),s(" SIGHUP	"),n("span",{class:"token comment"},"#重新加载配置"),s(`
`),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},")"),s(" SIGINT	"),n("span",{class:"token comment"},"#键盘中断^C"),s(`
`),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},")"),s(" SIGQUIT	"),n("span",{class:"token comment"},"#键盘退出"),s(`
`),n("span",{class:"token number"},"9"),n("span",{class:"token punctuation"},")"),s(" SIGKILL	"),n("span",{class:"token comment"},"#强制终止"),s(`
`),n("span",{class:"token number"},"15"),n("span",{class:"token punctuation"},")"),s(" SIGTERM	"),n("span",{class:"token comment"},"#终止（正常结束），缺省信号"),s(`
`),n("span",{class:"token number"},"18"),n("span",{class:"token punctuation"},")"),s(" SIGCONT	"),n("span",{class:"token comment"},"#继续"),s(`
`),n("span",{class:"token number"},"19"),n("span",{class:"token punctuation"},")"),s(" SIGSTOP	"),n("span",{class:"token comment"},"#停止"),s(`
`),n("span",{class:"token number"},"20"),n("span",{class:"token punctuation"},")"),s(" SIGTSTP "),n("span",{class:"token comment"},"#暂停^Z"),s(`

`),n("span",{class:"token comment"},"#彻底杀死指定pid的进程"),s(`
`),n("span",{class:"token function"},"kill"),s(),n("span",{class:"token parameter variable"},"-9"),s(` pid

`),n("span",{class:"token comment"},"#杀死指定进程名的所有进程"),s(`
`),n("span",{class:"token function"},"killall"),s(` nginx
`),n("span",{class:"token function"},"pkill"),s(),n("span",{class:"token parameter variable"},"-9"),s(),n("span",{class:"token parameter variable"},"-e"),s(` nginx

`),n("span",{class:"token comment"},"#指定用户，只影响该用户的进程"),s(`
`),n("span",{class:"token function"},"pkill"),s(),n("span",{class:"token parameter variable"},"-u"),s(` username processname

`),n("span",{class:"token comment"},"#kill+lsof 终止指定用户的所有进程"),s(`
`),n("span",{class:"token function"},"kill"),s(),n("span",{class:"token parameter variable"},"-9"),s(),n("span",{class:"token variable"},[n("span",{class:"token variable"},"`"),n("span",{class:"token function"},"lsof"),s(),n("span",{class:"token parameter variable"},"-t"),s(),n("span",{class:"token parameter variable"},"-u"),s(" 用户名"),n("span",{class:"token variable"},"`")]),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),f=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[s("taskkill "),n("span",{class:"token operator"},"/"),s("F "),n("span",{class:"token operator"},"/"),s("T "),n("span",{class:"token operator"},"/"),s("im 123"),n("span",{class:"token punctuation"},"."),s(`exe

`),n("span",{class:"token operator"},"/"),s("F		"),n("span",{class:"token comment"},"#指定强制终止进程"),s(`
`),n("span",{class:"token operator"},"/"),s("T		"),n("span",{class:"token comment"},"#终止指定的进程和由它启用的子进程"),s(`
`),n("span",{class:"token operator"},"/"),s("IM		"),n("span",{class:"token comment"},"#指定要终止的进程的映像名称"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1);function _(S,I){const t=p("CodeTabs");return r(),m("div",null,[b,c(t,{id:"38",data:[{title:"Linux"},{title:"Windows"}],"tab-id":"shell"},{tab0:e(({title:a,value:l,isActive:i})=>[v]),tab1:e(({title:a,value:l,isActive:i})=>[k]),_:1}),h,c(t,{id:"49",data:[{title:"Linux"},{title:"Windows"}],"tab-id":"shell"},{tab0:e(({title:a,value:l,isActive:i})=>[g]),tab1:e(({title:a,value:l,isActive:i})=>[f]),_:1})])}const P=o(d,[["render",_],["__file","进程管理.html.vue"]]);export{P as default};
