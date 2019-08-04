<template>
  <div>
    <el-card class="box-card">
      <div class="title-div">123456</div>
      <el-form ref="Information" :model="dataInfo" :rules="rules">
        <el-form-item label="Name" prop="name">
          <el-input v-model="dataInfo.name" />
        </el-form-item>

        <el-form-item label="Gender" prop="gender">
          <el-radio-group v-model="dataInfo.gender">
            <el-radio-button :label="item" v-for="item in genderList">{{item}}</el-radio-button>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="Education" prop="education">
          <el-select v-model="dataInfo.education" placeholder="choose education">
            <el-option v-for="item in educationList" :label="item" :value="item"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>
<script>
export default {
  created() {
    this.setInitial();
  },
  data() {
    return {
      genderList: ["boy", "girl"],
      educationList: ["primary", "junior", "senior", "master"],
      dataInfo: { name: "", gender: "", education: "" },
      rules: {
        name: [{ required: true, message: "请输入姓名", trigger: "blur" }],
        gender: [{ required: true, message: "请输入姓名", trigger: "blur" }]
      }
    };
  },
  methods: {
    setInitial() {
      this.dataInfo.gender = this.genderList[0];
    },
    sendClick() {
      this.$refs["Information"].validate(valid => {
        if (valid) {
          console.log(valid);
        } else {
          console.log(valid);
        }
      });
    }
  }
};
</script>

<style>
.title-div {
  width: 100%;
  background-color: #98fb98;
  height: 50px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  font-size: 24px;
  display: flex;
  align-items: center;
justify-content:center;
}
.box-card .el-card__body {
  padding: 0px;
}
</style>
