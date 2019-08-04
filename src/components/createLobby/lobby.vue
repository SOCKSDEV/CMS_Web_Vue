<template>
  <el-container class="create-container-wrapper">
    <div style="width:100%"> 
      <div class="top-container">
        <el-button>{{nextText}}</el-button>
      </div>
      <div class="step-wrapper">
        <create></create>
      </div>
    </div>
  </el-container>
</template>
<script>
import create from "@/components/create.vue";
export default {
  components: { create },
  data() {
    return {
      stepList: ["create", "preview"],
      active: 1,
      nextText: "next"
    };
  }
};
</script>
<style>
.context .el-container {
  max-width: 960px;
}
.container {
  width: 100%;
}
.top-container {
  width: 100%;
  display: flex;
justify-content: flex-end;
  
}
.step-wrapper {
  width: 100%;
}
</style>
