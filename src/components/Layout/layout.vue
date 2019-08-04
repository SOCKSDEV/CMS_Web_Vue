<template>
  <div class="layout-wrapper">
    <sideBarMenu :sideBarList="sidebarList" class="sidebar-wrapper"></sideBarMenu>
    <div class="mainScreen">
      <navigatior class="navigatior"></navigatior>
      <div class="context">
          <router-view></router-view>
      </div>
    </div>
  </div>
</template>
<script>
import sideBarMenu from "@/components/Layout/sidebarMenu.vue";
import navigatior from "@/components/Layout/navigator.vue";
export default {
  created() {this.getSidebarList()},
  components: {
    sideBarMenu,
    navigatior
  },
  data() {
    return {
        sidebarList:[]
    };
  },
  methods: {
    getSidebarList() {
        this.sidebarList = [
        {
          firstLevel: { index: "1", text: "Home", isHide: true }
        },
        {
          firstLevel: { index: "2", text: "create", isHide: false },
          secondLevel: [{ link: "/create", index: "2-1", text: "1" }]
        },
         {
          firstLevel: { index: "3", text: "update", isHide: false },
          secondLevel: [{ link: "/create", index: "3-1", text: "2" }]
        }
      ]
    }
  }
};
</script>
<style>
.layout-wrapper {
  display: flex;
}
.sidebar-wrapper {
  width: 200px;
}
.mainScreen {
  flex: 1;
}
</style>
