<template>
  <el-menu mode="vertical" theme="dark" :default-active="$route.path">
    <sidebar-item :routes="routes"></sidebar-item>
  </el-menu>
</template>

<script>
import SidebarItem from "./SidebarItem";
export default {
  components: { SidebarItem },
  data() {
    return {
      routes: this.$router.options.routes
    };
  },
  created() {
    //这里没有直接使用this.$router.options.routes，是因为addRoute的路由规则，在这里this.$router.options.routes获取不到
    //有兴趣的可以看一下源码，是为什么获取不到，但是却又有规则了
    //另外在开发的时候，可能由于是热部署，也会不断重复的给nodes添加元素，造成导航条有重复的，简单解决，可以设置一个开关
    let isLoadNodes = sessionStorage.getItem("isLoadNodes");
    if (!isLoadNodes) {
      let data = JSON.parse(window.sessionStorage.getItem("userInfo"));
      this.routes.push(...data);
      console.log(this.nodes);
      sessionStorage.setItem("isLoadNodes", "true");
    }
  }
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.el-menu {
  min-height: 100%;
}
</style>
