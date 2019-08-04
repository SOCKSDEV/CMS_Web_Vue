<template>
  <div>
    <el-menu>
      <el-submenu
        :class="{hideIcon:item.firstLevel.isHide}"
        :index="item.firstLevel.index"
        v-for="item in sideBarList"
      >
        <template slot="title">
          <span>{{item.firstLevel.text}}</span>
        </template>
        <el-menu-item :index="innerItem.link" v-for="innerItem in item.secondLevel">
          <router-link
            :to="innerItem.link"
            style="width:100%;height:100%;background-color:transparent;border:0px"
            tag="button"
          >{{innerItem.text}}</router-link>
        </el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>
<script>
export default {
  props: ["sideBarList"],

  data() {
    return {};
  }
};
</script>
<style>
.hideIcon .el-icon-arrow-down {
  display: none;
}
</style>
