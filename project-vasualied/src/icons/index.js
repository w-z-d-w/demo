import Vue from "vue";
import SvgIcon from "../components/Icon.vue";

// 全局注册svg-icon组件
Vue.component("icon", SvgIcon);

//自动加载svg文件夹中的图标
const req = require.context('./svg', false, /\.svg$/)
const requireAll = requireContext => requireContext.keys().map(requireContext)
requireAll(req)