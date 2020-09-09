(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{486:function(t,a,e){"use strict";e.r(a);var n=e(14),r=Object(n.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"skywalking"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#skywalking"}},[t._v("#")]),t._v(" SkyWalking")]),t._v(" "),e("p",[t._v("SkyWalking 是一个基于 Java 开发的分布式系统的应用程序性能监视工具，专为微服务、云原生架构和基于容器（Docker、K8s、Mesos）架构而设计。")]),t._v(" "),e("h2",{attrs:{id:"一、skywalking-简介"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#一、skywalking-简介"}},[t._v("#")]),t._v(" 一、SkyWalking 简介")]),t._v(" "),e("p",[t._v("SkyWalking 是观察性分析平台和应用性能管理系统。")]),t._v(" "),e("p",[t._v("提供分布式追踪、服务网格遥测分析、度量聚合和可视化一体化解决方案。")]),t._v(" "),e("p",[e("img",{attrs:{src:"http://dunwu.test.upcdn.net/snap/20200211152235.png",alt:"img"}})]),t._v(" "),e("h3",{attrs:{id:"skywalking-特性"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#skywalking-特性"}},[t._v("#")]),t._v(" SkyWalking 特性")]),t._v(" "),e("ul",[e("li",[t._v("多种监控手段，语言探针和 service mesh")]),t._v(" "),e("li",[t._v("多语言自动探针，Java，.NET Core 和 Node.JS")]),t._v(" "),e("li",[t._v("轻量高效，不需要大数据")]),t._v(" "),e("li",[t._v("模块化，UI、存储、集群管理多种机制可选")]),t._v(" "),e("li",[t._v("支持告警")]),t._v(" "),e("li",[t._v("优秀的可视化方案")])]),t._v(" "),e("h3",{attrs:{id:"skywalking-核心概念"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#skywalking-核心概念"}},[t._v("#")]),t._v(" SkyWalking 核心概念")]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("Service")]),t._v(" - 服务。代表一组为传入请求提供相同的行为的工作负载。 使用代理或 SDK 时，可以定义服务名称。")]),t._v(" "),e("li",[e("strong",[t._v("Service Instance")]),t._v(" - 服务实例。服务组中的每个工作负载都称为一个实例。就像 Kubernetes 中的 Pod 一样，它在 OS 中不必是单个进程。")]),t._v(" "),e("li",[e("strong",[t._v("Endpoint")]),t._v(" - 端点。它是特定服务中用于传入请求的路径，例如 HTTP URI 路径或 RPC 服务类+方法签名。")])]),t._v(" "),e("h2",{attrs:{id:"二、skywalking-架构"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#二、skywalking-架构"}},[t._v("#")]),t._v(" 二、SkyWalking 架构")]),t._v(" "),e("p",[t._v("从逻辑上讲，SkyWalking 分为四个部分：探针（Probes），平台后端，存储和 UI。")]),t._v(" "),e("p",[e("img",{attrs:{src:"http://dunwu.test.upcdn.net/snap/20200211153516.png",alt:"SkyWalking 架构"}})]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("探针（Probes）")]),t._v(" - 探针是指集成到目标系统中的代理或SDK库。它们负责收集数据（包括跟踪数据和统计数据）并将其按照 SkyWalking 的要求重新格式化为。")]),t._v(" "),e("li",[e("strong",[t._v("平台后端")]),t._v(" - 平台后端是一个提供后端服务的集群。它用于聚合、分析和驱动从探针到 UI 的流程。它还为传入格式（如 Zipkin 的格式），存储实现程序和集群管理提供可插入功能。 您甚至可以使用 Observability Analysis Language 自定义聚合和分析。")]),t._v(" "),e("li",[e("strong",[t._v("存储")]),t._v(" - 您可以选择一个 SkyWalking 已实现的存储，如由 Sharding-Sphere 管理的 ElasticSearch，H2 或 MySQL 集群，也可以自行实现一个存储。")]),t._v(" "),e("li",[e("strong",[t._v("UI")]),t._v(" - 用户界面很酷，对于 SkyWalking 最终用户而言非常强大。它也可以自定义以匹配您的自定义后端。")])]),t._v(" "),e("h2",{attrs:{id:"三、skywalking-安装"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#三、skywalking-安装"}},[t._v("#")]),t._v(" 三、SkyWalking 安装")]),t._v(" "),e("p",[t._v("进入 "),e("a",{attrs:{href:"http://skywalking.apache.org/downloads/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Apache SkyWalking 官方下载页面"),e("OutboundLink")],1),t._v("，选择安装版本，下载解压到本地。")]),t._v(" "),e("p",[e("img",{attrs:{src:"http://dunwu.test.upcdn.net/snap/20200211154612.png",alt:"SkyWalking 组件"}})]),t._v(" "),e("p",[t._v("安装分为三个部分：")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://github.com/apache/skywalking/blob/master/docs/en/setup/backend/backend-setup.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("Backend setup document"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://github.com/apache/skywalking/blob/master/docs/en/setup/backend/ui-setup.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("UI setup document"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://github.com/apache/skywalking-cli",target:"_blank",rel:"noopener noreferrer"}},[t._v("CLI set up document"),e("OutboundLink")],1)])]),t._v(" "),e("h2",{attrs:{id:"参考资料"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#参考资料"}},[t._v("#")]),t._v(" 参考资料")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://github.com/apache/skywalking",target:"_blank",rel:"noopener noreferrer"}},[t._v("SkyWalking Github"),e("OutboundLink")],1)])])])}),[],!1,null,null,null);a.default=r.exports}}]);