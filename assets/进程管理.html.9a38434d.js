import{_ as o}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as r,c as m,d as c,w as e,e as u,a as n,b as s,r as d}from"./app.ed2888ea.js";const p={},b=u('<h2 id="进程状态" tabindex="-1"><a class="header-anchor" href="#进程状态" aria-hidden="true">#</a> 进程状态</h2><p><strong>Linux上进程有5种状态:</strong></p><div class="custom-container tip"><p class="custom-container-title">提示</p><ul><li><strong>R 运行 runnable</strong> (正在运行或在运行队列中等待)</li><li><strong>S 中断 sleeping</strong> (休眠中, 受阻, 在等待某个条件的形成或接受到信号)</li><li><strong>D 不可中断</strong> (收到信号不唤醒和不可运行, 进程必须等待直到有中断发生)</li><li><strong>Z 僵死</strong> (进程已终止, 但进程描述符存在, 直到父进程调用wait4()系统调用后释放)</li><li><strong>T 停止</strong> (进程收到SIGSTOP, SIGSTP, SIGTIN, SIGTOU信号后停止运行运行)</li></ul></div><h2 id="查看进程列表" tabindex="-1"><a class="header-anchor" href="#查看进程列表" aria-hidden="true">#</a> 查看进程列表</h2>',4),v=n("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token function"},"ps"),s(` aux

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

`),n("span",{class:"token comment"},"#命令(top)"),s(`
M    `),n("span",{class:"token comment"},"#按内存的使用排序"),s(`
P    `),n("span",{class:"token comment"},"#按CPU使用排序"),s(`
N    `),n("span",{class:"token comment"},"#以PID的大小排序"),s(`
R    `),n("span",{class:"token comment"},"#对排序进行反转"),s(`
f    `),n("span",{class:"token comment"},"#自定义显示字段"),s(`
`),n("span",{class:"token number"},"1"),s("    "),n("span",{class:"token comment"},"#显示所有CPU的负载"),s(`

`),n("span",{class:"token function"},"top"),s(),n("span",{class:"token parameter variable"},"-H"),s(),n("span",{class:"token parameter variable"},"-p"),s(` pid
`),n("span",{class:"token comment"},"#显示某个进程所有活跃的线程消耗情况"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),k=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[s(`tasklist

`),n("span",{class:"token comment"},"#过滤查询"),s(`
tasklist `),n("span",{class:"token punctuation"},"|"),s(" findstr "),n("span",{class:"token string"},'"api"'),s(`

`),n("span",{class:"token comment"},"#动态查看进程信息"),s(`
打开任务管理器 `),n("span",{class:"token operator"},"-"),s(`> 再打开资源监视器
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),h=n("h2",{id:"杀死进程",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#杀死进程","aria-hidden":"true"},"#"),s(" 杀死进程")],-1),_=n("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token function"},"kill"),s(),n("span",{class:"token parameter variable"},"-s"),s(),n("span",{class:"token number"},"9"),s(" pid	"),n("span",{class:"token comment"},"#彻底杀死指定pid的进程"),s(`
`),n("span",{class:"token function"},"kill"),s(),n("span",{class:"token parameter variable"},"-u"),s(" apache	"),n("span",{class:"token comment"},"#杀死指定用户所有进程"),s(`


编号 信号名
`),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),s(" SIGHUP	"),n("span",{class:"token comment"},"#重新加载配置"),s(`
`),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},")"),s(" SIGINT	"),n("span",{class:"token comment"},"#键盘中断^C"),s(`
`),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},")"),s(" SIGQUIT	"),n("span",{class:"token comment"},"#键盘退出"),s(`
`),n("span",{class:"token number"},"9"),n("span",{class:"token punctuation"},")"),s(" SIGKILL	"),n("span",{class:"token comment"},"#强制终止"),s(`
`),n("span",{class:"token number"},"15"),n("span",{class:"token punctuation"},")"),s(" SIGTERM	"),n("span",{class:"token comment"},"#终止（正常结束），缺省信号"),s(`
`),n("span",{class:"token number"},"18"),n("span",{class:"token punctuation"},")"),s(" SIGCONT	"),n("span",{class:"token comment"},"#继续"),s(`
`),n("span",{class:"token number"},"19"),n("span",{class:"token punctuation"},")"),s(" SIGSTOP	"),n("span",{class:"token comment"},"#停止"),s(`
`),n("span",{class:"token number"},"20"),n("span",{class:"token punctuation"},")"),s(" SIGTSTP "),n("span",{class:"token comment"},"#暂停^Z"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),g=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[s("taskkill "),n("span",{class:"token operator"},"/"),s("F "),n("span",{class:"token operator"},"/"),s("T "),n("span",{class:"token operator"},"/"),s("im 123"),n("span",{class:"token punctuation"},"."),s(`exe

`),n("span",{class:"token operator"},"/"),s("F		"),n("span",{class:"token comment"},"#指定强制终止进程"),s(`
`),n("span",{class:"token operator"},"/"),s("T		"),n("span",{class:"token comment"},"#终止指定的进程和由它启用的子进程"),s(`
`),n("span",{class:"token operator"},"/"),s("IM		"),n("span",{class:"token comment"},"#指定要终止的进程的映像名称"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1);function S(T,f){const i=d("CodeTabs");return r(),m("div",null,[b,c(i,{id:"38",data:[{title:"Linux"},{title:"Windows"}],"tab-id":"shell"},{tab0:e(({title:a,value:l,isActive:t})=>[v]),tab1:e(({title:a,value:l,isActive:t})=>[k]),_:1}),h,c(i,{id:"49",data:[{title:"Linux"},{title:"Windows"}],"tab-id":"shell"},{tab0:e(({title:a,value:l,isActive:t})=>[_]),tab1:e(({title:a,value:l,isActive:t})=>[g]),_:1})])}const P=o(p,[["render",S],["__file","进程管理.html.vue"]]);export{P as default};
