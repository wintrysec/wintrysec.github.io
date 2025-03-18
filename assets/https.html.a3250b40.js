import{_ as p}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as r,c as n,a as t,b as a,d as h,e,r as i}from"./app.b2d7a8da.js";const c="/assets/760273-20200703103352702-23339693.8bccbf26.png",o="/assets/760273-20200703103411620-1153057540.d69b5c2b.png",d="/assets/760273-20200703103609171-1974463194.ae605f0c.png",l="/assets/760273-20200703103712955-1022109427.dc02a84d.png",S={},T=e('<h2 id="https和http的区别" tabindex="-1"><a class="header-anchor" href="#https和http的区别" aria-hidden="true">#</a> HTTPS和HTTP的区别</h2><p>http和https使用连接方式不同，默认端口也不一样，http是80，https是443。</p><p>HTTPS是HTTP协议的安全版本，HTTP协议的数据传输是明文的，不安全。</p><p>HTTPS使用了SSL/TLS协议进行了加密处理。</p><h4 id="ssl-tls是同一个东西的不同阶段" tabindex="-1"><a class="header-anchor" href="#ssl-tls是同一个东西的不同阶段" aria-hidden="true">#</a> SSL/TLS是同一个东西的不同阶段</h4><div class="custom-container info"><p class="custom-container-title">相关信息</p><p>SSL（Secure Sockets Layer） 安全套接层是在上世纪90年代中期，由网景公司设计的。</p><p>到了1999年，SSL 因为应用广泛，已经成为互联网上的事实标准。IETF 就在那年把 SSL 标准化。</p><p>标准化之后的名称改为 TLS（Transport Layer Security）传输层安全协议。</p></div><h2 id="https加密方式" tabindex="-1"><a class="header-anchor" href="#https加密方式" aria-hidden="true">#</a> HTTPS加密方式</h2><p><strong>HTTPS利用对称加密与非对称加密算法结合的方式</strong></p><h4 id="对称加密" tabindex="-1"><a class="header-anchor" href="#对称加密" aria-hidden="true">#</a> 对称加密</h4><p>通信双方使用同一个密钥，该密钥既用于数据加密（发送方），也用于数据解密（接收方）</p><p>特点是速度高，可加密内容较大，用来加密会话过程中的消息（比如DES和AES加密算法）</p><h4 id="非对称加密" tabindex="-1"><a class="header-anchor" href="#非对称加密" aria-hidden="true">#</a> 非对称加密</h4><p>通信双方使用两个密钥，发送方使用公钥对数据进行加密，数据接收方使用私钥对数据进行解密</p><p>速度慢，但能提供更好的身份认证技术，用来加密对称加密的密钥 （比如RSA加密算法）</p><h2 id="https连接建立过程" tabindex="-1"><a class="header-anchor" href="#https连接建立过程" aria-hidden="true">#</a> HTTPS连接建立过程</h2><p><strong>HTTPS</strong>使用携带公钥信息的数字证书来保证公钥的安全性和完整性，并非直接传输公钥信息</p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/81aaac03524544cdbd554396b0506fa5~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.image?" alt="image.png" loading="lazy"></p>',17),m={href:"https://juejin.cn/post/7067433233876516871",target:"_blank",rel:"noopener noreferrer"},_=e('<div class="custom-container info"><p class="custom-container-title">相关信息</p><p>1、客户端发送支持的加密协议版本（TLS）</p><p>2、服务器从中筛选合适的加密协议版本</p><p>3、服务器端返回证书，证书中有公钥</p><p>4、客户端使用根证书验证证书合法性</p><p>5、客户端生成对称密钥，通过证书中的公钥加密，发送到服务端</p><p>6、服务端使用私钥解密，获取对称密钥，使用对称密钥加密数据</p><p>7、客户端解密数据，SSL加密通信建立，开始通信......</p></div><h2 id="https单向认证和双向认证" tabindex="-1"><a class="header-anchor" href="#https单向认证和双向认证" aria-hidden="true">#</a> HTTPS单向认证和双向认证</h2><h3 id="https单项认证" tabindex="-1"><a class="header-anchor" href="#https单项认证" aria-hidden="true">#</a> HTTPS单项认证</h3><p>https单向认证至客户端连接到某个域名或IP时，客户端需要验证服务器的身份。</p><p>服务器的身份一般通过证书的方式进行验证，服务器的证书一般都会在权威的CA机构进行签名，客户端收到服务器证书后，会获取服务器证书对应的ca机构的证书，并用CA证书进行解密。</p><p><img src="'+c+'" alt="https连接及协商过程" loading="lazy"></p><p><img src="'+o+'" alt="https连接抓包过程" loading="lazy"></p><h3 id="https双向认证" tabindex="-1"><a class="header-anchor" href="#https双向认证" aria-hidden="true">#</a> HTTPS双向认证</h3><p>https双向认证指除了客户端需要验证服务器之外，服务器也需要验证客户端</p><p><img src="'+d+'" alt="https双向认证流程" loading="lazy"></p><p><img src="'+l+'" alt="https双向认证抓包" loading="lazy"></p>',11);function f(u,g){const s=i("ExternalLinkIcon");return r(),n("div",null,[T,t("p",null,[a("图片来源："),t("a",m,[a("https://juejin.cn/post/7067433233876516871"),h(s)])]),_])}const L=p(S,[["render",f],["__file","https.html.vue"]]);export{L as default};
