<template>
 <div id="app" style="background:rgb(244,244,244);height:100%">
    <a-layout>
      <a-affix>
        <a-layout-header style="background:rgb(227,227,227);padding-bottom:0px;padding-top:3px;height:46px;line-height:40px">
          <router-link class="header-container-logo" to="/">
            <img src="/android-chrome-192x192.png" style="width: 30px;" />
          </router-link>
          <span class="header-container-userinfo">
            <template v-if="!sysUserName"></template>
            <template v-else>
              <a href="/manager" class="header-container-banner-item-btn">{{ sysUserName }}</a>
              <a href="/editor" role="button" tabindex="-1"><span>写文章</span></a>
              <span class="header-container-logout" @click="logout">注销</span>
            </template>
          </span>
          <span class="header-container-banner">
            <router-link class="header-container-banner-item-btn" to="/">CD-Yang</router-link>
            <router-link class="header-container-banner-item-btn" to="/about">关于</router-link>
            <!-- <a class="header-container-banner-item-btn" href="/tools">工具</a> -->
            <!-- <a class="header-container-banner-item-btn" href="/admin">Admin管理后台</a> -->
          </span>
        </a-layout-header>
      </a-affix>
      <a-layout style="height:100%">
        <!-- <a-layout-sider>Sider</a-layout-sider> -->
        <a-layout-content>
          <router-view />
        </a-layout-content>
        <!-- <a-layout-sider>Sider</a-layout-sider> -->
      </a-layout>
      <a-layout-footer style="background:rgb(227,227,227);width:100%;text-align:center;padding:5px 0px;">
        <div class="beian"><a href="http://www.beian.miit.gov.cn/" rel="noopener" target="_blank">沪ICP备20008178号 </a></div>
        <div class="copyright">&copy;
          <span itemprop="copyrightYear">2020</span>
          <span class="with-love">
            <i class="fa fa-user"></i>
          </span>
          <span class="author" itemprop="copyrightHolder" style="margin-left: 15px;">CD Yang</span>
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

.header-container-banner-item-btn {
  margin-left: 30px;
  color: #000;
}
</style>
