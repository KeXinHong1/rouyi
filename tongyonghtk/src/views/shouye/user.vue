<template>
  <div class="common-layout">
    <el-container>
      <el-container>
        <el-aside :style="{ width: dongtai.flag ? '63px' : '200px' }">
          <div class="top1">
            <img src="@/assets/logo.png" alt="" class="logo" />
            imooc-admin
          </div>
          <el-menu
            :collapse-transition="false"
            active-text-color="#ffd04b"
            background-color="#545c64"
            class="el-menu-vertical-demo"
            :collapse="dongtai.flag"
            default-active="2"
            text-color="#fff"
          >
            <el-sub-menu index="1">
              <template #title>
                <el-icon><location /></el-icon>
                <span>Navigator One</span>
              </template>
              <el-menu-item-group title="Group One">
                <el-menu-item index="1-1">item one</el-menu-item>
                <el-menu-item index="1-2">item one</el-menu-item>
              </el-menu-item-group>
              <el-menu-item-group title="Group Two">
                <el-menu-item index="1-3">item three</el-menu-item>
              </el-menu-item-group>
              <el-sub-menu index="1-4">
                <template #title>item four</template>
                <el-menu-item index="1-4-1">item one</el-menu-item>
              </el-sub-menu>
            </el-sub-menu>
            <el-menu-item index="2">
              <el-icon><icon-menu /></el-icon>
              <span>Navigator Two</span>
            </el-menu-item>
            <el-menu-item index="3" disabled>
              <el-icon><document /></el-icon>
              <span>Navigator Three</span>
            </el-menu-item>
            <el-menu-item index="4">
              <el-icon><setting /></el-icon>
              <span>Navigator Four</span>
            </el-menu-item>
          </el-menu>
        </el-aside>

        <el-main>
          <div class="big">
            <el-card class="box-card">
              <b>
                <svg-icon
                  class="language"
                  :iconClass="
                    dongtai.flag ? 'hamburger-closed' : 'hamburger-opened'
                  "
                  @click="dongtai.flag = !dongtai.flag"
                /> </b
              >个人中心
              <br />
              <!-- <el-tag class="ml-2" type="success">Tag 2</el-tag>
      <el-tag class="ml-2" type="success">Tag 2</el-tag> -->
              <br />
              <el-button style="color: white; background: #333">
                <el-radio label="2" size="large" style="color: white"
                  >个人中心</el-radio
                ></el-button
              >
              <el-tag class="mx-1" closable type="info"> 员工管理 </el-tag>
            </el-card>
            <router-view />
          </div>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script setup>
import { reactive, ref } from 'vue'
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
  User,
  Fold
} from '@element-plus/icons-vue'
const dongtai = reactive({
  flag: false
})
</script>
<style>
.common-layout {
  width: 100%;
  height: 938px;
  overflow: hidden;
}
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #333;
  color: #333;
  text-align: center;
  /* line-height: 200px; */
  height: 888px;
}

.el-main {
  background-color: #edeae2;
  color: #333;
  /* text-align: center; */
  /* line-height: 160px;
     */
  height: 888px;
}

body > .el-container {
  margin-bottom: 40px;
}
.top1 {
  height: 48px;
  line-height: 48px;
  color: #eee;
  background-color: #333;
  text-align: center;
}
.logo {
  width: 40px;
  height: 40px;
  /* float: left; */
}
/* .big{
    width:100%;
    height:100%;
    background-color: #333;
  } */
.language {
  width: 1.4em;
  height: 1.4em;
  margin-top: 0px;
  float: left;
}
</style>
