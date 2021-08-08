(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{535:function(s,a,t){"use strict";t.r(a);var n=t(2),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h3",{attrs:{id:"docker笔记-三-使用docker安装常用应用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#docker笔记-三-使用docker安装常用应用"}},[s._v("#")]),s._v(" Docker笔记（三）：使用Docker安装常用应用")]),s._v(" "),t("h3",{attrs:{id:"_1、安装mysql"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1、安装mysql"}},[s._v("#")]),s._v(" 1、安装MySql")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 1.拉取mysql镜像到本地")]),s._v("\n\tdocker pull mysql:tag "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("tag不加默认最新版本"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\t\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 2.运行mysql服务")]),s._v("\n\tdocker run --name mysql -e "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("MYSQL_ROOT_PASSWORD")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("root -d mysql:tag  \t\t\t\t\t\t  --没有暴露外部端口外部不能连接\n\tdocker run --name mysql -e "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("MYSQL_ROOT_PASSWORD")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("root -p "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3306")]),s._v(":3306 -d  mysql:tag  --没有暴露外部端口\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 3.进入mysql容器")]),s._v("\n\tdocker "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exec")]),s._v(" -it 容器名称"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("容器id "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("bash")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 4.外部查看mysql日志")]),s._v("\n\tdocker logs 容器名称"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("容器id\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 5.使用自定义配置参数")]),s._v("\n\tdocker run --name mysql -v /root/mysql/conf.d:/etc/mysql/conf.d -e "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("MYSQL_ROOT_PASSWORD")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("root -d mysql:tag\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 6.将容器数据位置与宿主机位置挂载保证数据安全")]),s._v("\n\tdocker run --name mysql -v /root/mysql/data:/var/lib/mysql -v /root/mysql/conf.d:/etc/mysql/conf.d -e "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("MYSQL_ROOT_PASSWORD")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("root -p "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3306")]),s._v(":3306 -d mysql:tag\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 7.通过其他客户端访问 如在window系统|macos系统使用客户端工具访问")]),s._v("\n\t\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 8.将mysql数据库备份为sql文件")]),s._v("\n\tdocker "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exec")]),s._v(" mysql"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("容器id "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sh")]),s._v(" -c "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'exec mysqldump --all-databases -uroot -p\""),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$MYSQL_ROOT_PASSWORD")]),s._v("\"'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" /root/all-databases.sql  --导出全部数据\n\tdocker "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exec")]),s._v(" mysql "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sh")]),s._v(" -c "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'exec mysqldump --databases 库表 -uroot -p\""),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$MYSQL_ROOT_PASSWORD")]),s._v("\"'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" /root/all-databases.sql  --导出指定库数据\n\tdocker "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exec")]),s._v(" mysql "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sh")]),s._v(" -c "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'exec mysqldump --no-data --databases 库表 -uroot -p\""),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$MYSQL_ROOT_PASSWORD")]),s._v("\"'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" /root/all-databases.sql  --导出指定库数据不要数据\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 9.执行sql文件到mysql中")]),s._v("\n\tdocker "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exec")]),s._v(" -i mysql "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sh")]),s._v(" -c "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'exec mysql -uroot -p\""),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$MYSQL_ROOT_PASSWORD")]),s._v("\"'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v(" /root/xxx.sql\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br")])]),t("h3",{attrs:{id:"_2、安装redis"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2、安装redis"}},[s._v("#")]),s._v(" 2、安装Redis")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 1.在docker hub搜索redis镜像")]),s._v("\n\tdocker search redis\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 2.拉取redis镜像到本地")]),s._v("\n\tdocker pull redis\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 3.启动redis服务运行容器")]),s._v("\n\tdocker run --name redis -d redis:tag "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("没有暴露外部端口"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\tdocker run --name redis -p "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("6379")]),s._v(":6379 -d redis:tag "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("暴露外部宿主机端口为6379进行连接"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" \n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 4.查看启动日志")]),s._v("\n\tdocker logs -t -f 容器id"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("容器名称\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 5.进入容器内部查看")]),s._v("\n\tdocker "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exec")]),s._v(" -it 容器id"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("名称 "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("bash")]),s._v("  \n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 6.加载外部自定义配置启动redis容器")]),s._v("\n\t默认情况下redis官方镜像中没有redis.conf配置文件 需要去官网下载指定版本的配置文件\n\t"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(". "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" http://download.redis.io/releases/redis-5.0.8.tar.gz  下载官方安装包\n\t"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(". 将官方安装包中配置文件进行复制到宿主机指定目录中如 /root/redis/redis.conf文件\n\t"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(". 修改需要自定义的配置\n\t\t "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("bind")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),s._v(".0.0 开启远程权限\n\t\t appenonly "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("yes")]),s._v(" 开启aof持久化\n\t"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(". 加载配置启动\n\tdocker run --name redis -v /root/redis:/usr/local/etc/redis -p "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("6379")]),s._v(":6379 -d redis redis-server /usr/local/etc/redis/redis.conf  \n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 7.将数据目录挂在到本地保证数据安全")]),s._v("\n\tdocker run --name redis -v /root/redis/data:/data -v /root/redis/redis.conf:/usr/local/etc/redis/redis.conf -p "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("6379")]),s._v(":6379 -d redis redis-server \t\t\t\t\t/usr/local/etc/redis/redis.conf \n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br")])]),t("h3",{attrs:{id:"_3、安装es"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3、安装es"}},[s._v("#")]),s._v(" 3、安装ES")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 1.dockerhub 拉取镜像")]),s._v("\n\tdocker pull elasticsearch:6.4.2\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 2.查看docker镜像")]),s._v("\n\tdocker images\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 3.运行docker镜像")]),s._v("\n\tdocker run -p "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("9200")]),s._v(":9200 -p "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("9300")]),s._v(":9300 elasticsearch:6.4.2\n\t\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 1.在centos虚拟机中，修改配置sysctl.conf")]),s._v("\n\t"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" /etc/sysctl.conf\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 2.加入如下配置")]),s._v("\n\tvm.max_map_count"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("262144")]),s._v(" \n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 3.启用配置")]),s._v("\n\tsysctl -p\n\t注：这一步是为了防止启动容器时，报出如下错误：\n\tbootstrap checks failed max virtual memory areas vm.max_map_count "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("65530")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" likely too low, increase to at least "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("262144")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n\t\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 0.复制容器中data目录到宿主机中")]),s._v("\n\tdocker "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v(" 容器id:/usr/share/share/elasticsearch/data /root/es\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 1.运行ES容器 指定jvm内存大小并指定ik分词器位置")]),s._v("\n\tdocker run -d --name es -p "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("9200")]),s._v(":9200 -p "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("9300")]),s._v(":9300 -e "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ES_JAVA_OPTS")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"-Xms128m -Xmx128m"')]),s._v(" -v /root/es/plugins:/usr/share/elasticsearch/plugins -v /root/es/data:/usr/share/elasticsearch/data elasticsearch:6.4.2\n\t\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 1.下载对应版本的IK分词器")]),s._v("\n\t"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" https://github.com/medcl/elasticsearch-analysis-ik/releases/download/v6.4.2/elasticsearch-analysis-ik-6.4.2.zip\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 2.解压到plugins文件夹中")]),s._v("\n\tyum "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" -y "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("unzip")]),s._v("\n\t"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("unzip")]),s._v(" -d ik elasticsearch-analysis-ik-6.4.2.zip\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 3.添加自定义扩展词和停用词")]),s._v("\n\t"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" plugins/elasticsearch/config\n\t"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" IKAnalyzer.cfg.xml\n\t"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("properties"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n\t\t"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("comment"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("IK Analyzer 扩展配置"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("/comment"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n\t\t"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v("--用户可以在这里配置自己的扩展字典 --"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n\t\t"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("entry "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("key")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"ext_dict"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("ext_dict.dic"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("/entry"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n\t\t"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v("--用户可以在这里配置自己的扩展停止词字典--"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n\t\t"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("entry "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("key")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"ext_stopwords"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("ext_stopwords.dic"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("/entry"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n\t"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("/properties"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 4.在ik分词器目录下config目录中创建ext_dict.dic文件   编码一定要为UTF-8才能生效")]),s._v("\n\t"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" ext_dict.dic 加入扩展词即可\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 5. 在ik分词器目录下config目录中创建ext_stopword.dic文件 ")]),s._v("\n\t"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" ext_stopwords.dic 加入停用词即可\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 6.重启容器生效")]),s._v("\n\tdocker restart 容器id\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 7.将此容器提交成为一个新的镜像")]),s._v("\n\tdocker commit -a"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"xiaochen"')]),s._v(" -m"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"es with IKAnalyzer"')]),s._v(" 容器id xiaochen/elasticsearch:6.4.2\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 1.下载kibana镜像到本地")]),s._v("\n\tdocker pull kibana:6.4.2\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 2.启动kibana容器")]),s._v("\n\tdocker run -d --name kibana -e "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ELASTICSEARCH_URL")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("http://10.15.0.3:9200 -p "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5601")]),s._v(":5601 kibana:6.4.2\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br"),t("span",{staticClass:"line-number"},[s._v("29")]),t("br"),t("span",{staticClass:"line-number"},[s._v("30")]),t("br"),t("span",{staticClass:"line-number"},[s._v("31")]),t("br"),t("span",{staticClass:"line-number"},[s._v("32")]),t("br"),t("span",{staticClass:"line-number"},[s._v("33")]),t("br"),t("span",{staticClass:"line-number"},[s._v("34")]),t("br"),t("span",{staticClass:"line-number"},[s._v("35")]),t("br"),t("span",{staticClass:"line-number"},[s._v("36")]),t("br"),t("span",{staticClass:"line-number"},[s._v("37")]),t("br"),t("span",{staticClass:"line-number"},[s._v("38")]),t("br"),t("span",{staticClass:"line-number"},[s._v("39")]),t("br"),t("span",{staticClass:"line-number"},[s._v("40")]),t("br"),t("span",{staticClass:"line-number"},[s._v("41")]),t("br"),t("span",{staticClass:"line-number"},[s._v("42")]),t("br"),t("span",{staticClass:"line-number"},[s._v("43")]),t("br"),t("span",{staticClass:"line-number"},[s._v("44")]),t("br"),t("span",{staticClass:"line-number"},[s._v("45")]),t("br"),t("span",{staticClass:"line-number"},[s._v("46")]),t("br"),t("span",{staticClass:"line-number"},[s._v("47")]),t("br"),t("span",{staticClass:"line-number"},[s._v("48")]),t("br"),t("span",{staticClass:"line-number"},[s._v("49")]),t("br"),t("span",{staticClass:"line-number"},[s._v("50")]),t("br"),t("span",{staticClass:"line-number"},[s._v("51")]),t("br"),t("span",{staticClass:"line-number"},[s._v("52")]),t("br"),t("span",{staticClass:"line-number"},[s._v("53")]),t("br"),t("span",{staticClass:"line-number"},[s._v("54")]),t("br")])])])}),[],!1,null,null,null);a.default=e.exports}}]);