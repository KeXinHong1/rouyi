<template>
  <div class="bj">
    <div class="biaodan">
      <el-form :model="loginform" :rules="loginRules">
        <div class="top">
          <h2 style="color: white; width: 200px">用户登录</h2>
          <span class="kg">
            <!-- asdad -->
             <el-tooltip
        class="box-item"
        effect="dark"
        content="国际化"
        placement="bottom"
      >
        <svg-icon class=" lan" iconClass="language"></svg-icon>
      </el-tooltip>
           
          </span>

        </div>
        <el-form-item prop="username">
          <svg-icon class="language" iconClass="user"></svg-icon>
          <el-input v-model.trim="loginform.username"></el-input>
        </el-form-item>

        <el-form-item prop="password">
          <svg-icon class="language" iconClass="password"></svg-icon>
          <el-input
            :type="passwordType"
            v-model.trim="loginform.password"
          ></el-input>
          <span class="show-pwd">
            <svg-icon class="language"
            :iconClass="passwordType === 'password' ? 'eye' : 'eye-open'"
            @click="onChangePwdType"
          />
          </span>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit(loginform)" class="dl"
            >登录</el-button
          >
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script setup>
import { Avatar, Lock, Hide, View } from '@element-plus/icons-vue'
import { reactive, ref } from 'vue'
import { validatePassword } from './rules'
import { login } from "@/api/user"
import md5 from 'md5'
import router from '@/router/index.js'
// import {useRouter} from 'vue-router'
const loginform = reactive({
  username: '',
  password: ''
})

const passwordType = ref('password')
const onChangePwdType = () => {
  if (passwordType.value === 'password') {
    passwordType.value = 'text'
  } else {
    passwordType.value = 'password'
  }
}

const loginRules = ref({
  username: [
    {
      required: true,
      trigger: 'blur',
      message: '用户名不能为空'
    }
  ],
  password: [
    {
      required: true,
      trigger: 'blur',
      validator: validatePassword()
    }
  ]
})

const onSubmit = async () => {
 try {
  await login({
   username: loginform.username,
   password: md5(loginform.password)
  })
  router.push('/user')
 } catch (error) {
  console.log(error)
 }
}
</script>

<style lang="scss" scoped>
.bj {
  position: relative;
  background-color: #2d3a4b;
  height: 100%;
}
.biaodan {
  width: 520px;
  height: 400px;
  // background: rgb(208, 209, 149);
  top: 50%;
  left: 50%;
  position: absolute;
  transform: translate(-50%, -50%);
  padding: 20px 20px;
}
::v-deep .el-form-item {
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  color: #454545;
}

::v-deep .el-input {
  display: inline-block;
  height: 47px;
  // width: 85%;
  width: 300px;
  .el-input__wrapper {
    background: transparent;
    box-shadow: none;
  }
  input {
    background: transparent;
    border: none;
    // background: rgba(0, 0, 0, 0.1);
    // background-color: rgba(0, 0, 0, 0.1);
    -webkit-appearance: none;
    border-radius: 0px;
    padding: 12px 5px 12px 15px;
    color: #eee;
    height: 47px;
    // caret-color:#fff;
  }
}
.dl {
  width: 100%;
}
.top {
  margin-top: -100px;
  position: absolute;
  width: 100%;
  // display: inline;
  height: 47px;
  color: white;
  // line-height: 47px;
}
.kg {
  // float: right;
  // margin-top: -30px;
  width: 35px;
  height: 35px;
  // background: white;
  // margin-top: -100px;
  position: absolute;
  right: 40px;
  top: -8px;
  background: #eee;
  border-radius: 2px;
}
.el-icon {
  font-size: 18px;
  color: rgb(114, 67, 67);
  padding: 0px 5px;
}
.show-pwd {
  position: absolute;
  right: 10px;
  margin-top: 10px;
}
.language{
  width: 1.2em;
  height: 1.2em;
  // background: red;
  z-index: 9999;
  margin-left: 10px;
}
.lan{
  width: 2em;
  height: 2em;
}
</style>
