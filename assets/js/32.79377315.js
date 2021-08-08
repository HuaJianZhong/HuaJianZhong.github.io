(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{543:function(t,s,a){"use strict";a.r(s);var n=a(2),r=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h3",{attrs:{id:"springcloud-一-springcloud整体架构概览"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#springcloud-一-springcloud整体架构概览"}},[t._v("#")]),t._v(" SpringCloud（一）：SpringCloud整体架构概览")]),t._v(" "),a("h3",{attrs:{id:"_1、什么是springcloud"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1、什么是springcloud"}},[t._v("#")]),t._v(" 1、什么是SpringCloud")]),t._v(" "),a("blockquote",[a("p",[t._v("springcloud为开发人员提供了在分布式系统中快速构建一些通用 模式的工具（例如配置管理、服务发现、断路器、智能路由、微代理、 控制总线）。分布式系统的协调导致了锅炉板模式，使用springcloud 开发人员可以快速地建立实现这些模式的服务和应用程序。")])]),t._v(" "),a("p",[a("img",{attrs:{src:"2021-07-22-SpringCloud%EF%BC%88%E4%B8%80%EF%BC%89%EF%BC%9ASpringCloud%E6%95%B4%E4%BD%93%E6%9E%B6%E6%9E%84%E6%A6%82%E8%A7%88.assets/20201015183751261.png",alt:"在这里插入图片描述"}})]),t._v(" "),a("h3",{attrs:{id:"_2、版本命名"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2、版本命名"}},[t._v("#")]),t._v(" 2、版本命名")]),t._v(" "),a("p",[t._v('SpringCloud是一个由许多子项目组成的综合项目，各子项目有不同的发布节奏。 为了管理SpringCloud与各子项目的版本依赖关系，发布了一个清单，其中包括了某个SpringCloud版本对应的子项目版本。 为了避免SpringCloud版本号与子项目版本号混淆，SpringCloud版本采用了名称而非版本号的命名，这些版本的名字采用了伦敦地铁站的名字，根据字母表的顺序来对应版本时间顺序，例如Angel是第一个版本, Brixton是第二个版本。 当SpringCloud的发布内容积累到临界点或者一个重大BUG被解决后，会发布一个"service releases"版本，简称SRX版本，比如Greenwich.SR2就是SpringCloud发布的Greenwich版本的第2个SRX版本。')]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("SpringCloud Version")]),t._v(" "),a("th",[t._v("SpringBoot Version")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("Hoxton")]),t._v(" "),a("td",[t._v("2.2.x")])]),t._v(" "),a("tr",[a("td",[t._v("Greenwich")]),t._v(" "),a("td",[t._v("2.1.x")])]),t._v(" "),a("tr",[a("td",[t._v("Finchley")]),t._v(" "),a("td",[t._v("2.0.x")])]),t._v(" "),a("tr",[a("td",[t._v("Edgware")]),t._v(" "),a("td",[t._v("1.5.x")])]),t._v(" "),a("tr",[a("td",[t._v("Dalston")]),t._v(" "),a("td",[t._v("1.5.x")])])])]),t._v(" "),a("h3",{attrs:{id:"_3、各组件简介"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3、各组件简介"}},[t._v("#")]),t._v(" 3、各组件简介")]),t._v(" "),a("h4",{attrs:{id:"spring-cloud-config"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#spring-cloud-config"}},[t._v("#")]),t._v(" Spring Cloud Config")]),t._v(" "),a("p",[t._v("集中配置管理工具，分布式系统中统一的外部配置管理，默认使用Git来存储配置，可以支持客户端配置的刷新及加密、解密操作。")]),t._v(" "),a("h4",{attrs:{id:"spring-cloud-netflix"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#spring-cloud-netflix"}},[t._v("#")]),t._v(" Spring Cloud Netflix")]),t._v(" "),a("p",[t._v("Netflix OSS 开源组件集成，包括Eureka、Hystrix、Ribbon、Feign、Zuul等核心组件。")]),t._v(" "),a("ul",[a("li",[t._v("Eureka：服务治理组件，包括服务端的注册中心和客户端的服务发现机制；")]),t._v(" "),a("li",[t._v("Ribbon：负载均衡的服务调用组件，具有多种负载均衡调用策略；")]),t._v(" "),a("li",[t._v("Hystrix：服务容错组件，实现了断路器模式，为依赖服务的出错和延迟提供了容错能力；")]),t._v(" "),a("li",[t._v("Feign：基于Ribbon和Hystrix的声明式服务调用组件；")]),t._v(" "),a("li",[t._v("Zuul：API网关组件，对请求提供路由及过滤功能。")])]),t._v(" "),a("h4",{attrs:{id:"spring-cloud-bus"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#spring-cloud-bus"}},[t._v("#")]),t._v(" Spring Cloud Bus")]),t._v(" "),a("p",[t._v("用于传播集群状态变化的消息总线，使用轻量级消息代理链接分布式系统中的节点，可以用来动态刷新集群中的服务配置。")]),t._v(" "),a("h4",{attrs:{id:"spring-cloud-consul"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#spring-cloud-consul"}},[t._v("#")]),t._v(" Spring Cloud Consul")]),t._v(" "),a("p",[t._v("基于Hashicorp Consul的服务治理组件。")]),t._v(" "),a("h4",{attrs:{id:"spring-cloud-security"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#spring-cloud-security"}},[t._v("#")]),t._v(" Spring Cloud Security")]),t._v(" "),a("p",[t._v("安全工具包，对Zuul代理中的负载均衡OAuth2客户端及登录认证进行支持。")]),t._v(" "),a("h4",{attrs:{id:"spring-cloud-sleuth"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#spring-cloud-sleuth"}},[t._v("#")]),t._v(" Spring Cloud Sleuth")]),t._v(" "),a("p",[t._v("SpringCloud应用程序的分布式请求链路跟踪，支持使用Zipkin、HTrace和基于日志（例如ELK）的跟踪。")]),t._v(" "),a("h4",{attrs:{id:"spring-cloud-stream"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#spring-cloud-stream"}},[t._v("#")]),t._v(" Spring Cloud Stream")]),t._v(" "),a("p",[t._v("轻量级事件驱动微服务框架，可以使用简单的声明式模型来发送及接收消息，主要实现为Apache Kafka及RabbitMQ。")]),t._v(" "),a("h4",{attrs:{id:"spring-cloud-gateway"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#spring-cloud-gateway"}},[t._v("#")]),t._v(" Spring Cloud Gateway")]),t._v(" "),a("p",[t._v("API网关组件，对请求提供路由及过滤功能。")]),t._v(" "),a("h4",{attrs:{id:"spring-cloud-openfeign"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#spring-cloud-openfeign"}},[t._v("#")]),t._v(" Spring Cloud OpenFeign")]),t._v(" "),a("p",[t._v("基于Ribbon和Hystrix的声明式服务调用组件，可以动态创建基于Spring MVC注解的接口实现用于服务调用，在SpringCloud 2.0中已经取代Feign成为了一等公民。")]),t._v(" "),a("h3",{attrs:{id:"_4、环境搭建"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4、环境搭建"}},[t._v("#")]),t._v(" 4、环境搭建")]),t._v(" "),a("div",{staticClass:"language-xml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-xml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!--定义springcloud使用版本号--\x3e")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("properties")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("java.version")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("1.8"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("java.version")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("spring-cloud.version")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("Hoxton.SR6"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("spring-cloud.version")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("properties")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!--全局管理springcloud版本,并不会引入具体依赖--\x3e")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("dependencyManagement")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("dependencies")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("dependency")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("groupId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("org.springframework.cloud"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("groupId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("artifactId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("spring-cloud-dependencies"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("artifactId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("version")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("${spring-cloud.version}"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("version")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("type")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("pom"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("type")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("scope")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("import"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("scope")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("dependency")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("dependencies")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("dependencyManagement")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br")])])])}),[],!1,null,null,null);s.default=r.exports}}]);