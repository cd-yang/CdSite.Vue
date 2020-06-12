<template>
 <div id="app">
    <a-layout>
      <a-layout-header>
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
                <!-- <a class="header-container-banner-item-btn" href="/">首页</a> -->
                <!-- <a class="header-container-banner-item-btn" href="/tools">工具</a> -->
                <!-- <a class="header-container-banner-item-btn" href="/admin">Admin管理后台</a> -->
              </div>
            </div>
          </div>
        </div>
      </div>
      </a-layout-header>
      <a-layout>
        <!-- <a-layout-sider>Sider</a-layout-sider> -->
        <a-layout-content>
          <router-view />
        </a-layout-content>
        <!-- <a-layout-sider>Sider</a-layout-sider> -->
      </a-layout>
      <a-layout-footer>
      <div class="footer-inner">
        <div class="beian"><a href="http://www.beian.miit.gov.cn/" rel="noopener" target="_blank">沪ICP备20008178号 </a></div>
        <div class="copyright">&copy;
          <span itemprop="copyrightYear">2020</span>
          <span class="with-love">
            <i class="fa fa-user"></i>
          </span>
          <span class="author" itemprop="copyrightHolder" style="margin-left: 15px;">CD Yang</span>
        </div>
      </div>
      </a-layout-footer>
    </a-layout>
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

<style>
#app .ant-layout-header,
#app .ant-layout-footer {
  /* background: #7dbcea;
  color: #fff; */
  background: transparent;
  align-self: center;
}
#app .ant-layout-footer {
  line-height: 1.5;
}
#app .ant-layout-sider {
  /* background: #3ba0e9;
  color: #fff; */
  background: transparent;
  color: #000;
  line-height: 120px;
}
#app .ant-layout-content {
  /* background: rgba(16, 142, 233, 1);
  color: #fff; */
  background: transparent;
  color: #000;
  min-height: 120px;
}
#app > .ant-layout {
  margin-bottom: 48px;
}
#app > .ant-layout:last-child {
  margin: 0;
}
</style>
