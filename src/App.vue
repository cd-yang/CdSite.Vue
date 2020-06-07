<template>
  <div id="app">
    <!-- <header style="width:100%;background: none;height: 0;"> -->
    <header style="width:100%;background: none;">
      <div class="header-container">
        <div class="header-container-content">
          <a class="header-container-logo" href="/" rel="noopener noreferrer">
            <img src="/mstile-150x150.png" style="width: 60px;" />
          </a>
          <div class="header-container-userinfo">
            <template v-if="!sysUserName"></template>
            <template v-else>
              <a href="/manager" class="header-container-banner-item-btn">{{ sysUserName }}</a>
              <a href="/editor" role="button" tabindex="-1"><span>写文章</span></a>
              <span class="header-container-logout" @click="logout">注销</span>
            </template>
          </div>
          <div class="header-container-banner">
            <div class>
              <div class="header-container-banner-item">
                <a class="header-container-banner-item-btn" href="/">首页</a>
                <a class="header-container-banner-item-btn" href="/tools">工具</a>
                <!-- <a class="header-container-banner-item-btn" href="/admin">Admin管理后台</a> -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
    <div id="nav"></div>
    <router-view />
  </div>
</template>

<script>
// import applicationUserManager from "./Auth/applicationusermanager";
// import userAuth from "./Auth/UserAuth";

export default {
  name: "app",
  // mixins: [userAuth],
  data: function() {
    return {
      sysUserName: ""
    };
  },
  updated() {
    // this.sysUserName = window.localStorage.getItem("USER_NAME") || "";
  },
  created() {
    // this.sysUserName = window.localStorage.getItem("USER_NAME") || "";
  },
  watch: {
    $route: async function(to, from) {
      //这里使用Id4授权认证，用Jwt，请删之；
      // await this.refreshUserInfo();
    }
  },
  methods: {
    // async login() {
    //   try {
    //     await applicationUserManager.login();
    //   } catch (error) {
    //     console.log(error);
    //     this.$root.$emit("show-snackbar", { message: error });
    //   }
    // },
    // async logout() {
    //   try {
    //     window.localStorage.removeItem("USER_NAME");
    //     await applicationUserManager.logout();
    //     this.$store.commit("saveToken", "");
    //   } catch (error) {
    //     console.log(error);
    //     this.$root.$emit("show-snackbar", { message: error });
    //   }
    // }
  }
};
</script>

<style lang="css">
/* @import "./style/stylehome.css";
@import "./style/base.css";
@import "./style/m.css"; */
</style>


