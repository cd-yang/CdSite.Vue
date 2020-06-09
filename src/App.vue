<template>
  <div id="app">
    <!-- <header style="width:100%;background: none;height: 0;"> -->
    <header>
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
    </header>

    <router-view />

        
    <footer class="footer" style="margin: auto; width: 50%;">
      <div class="footer-inner">
        <div class="beian"><a href="http://www.beian.miit.gov.cn/" rel="noopener" target="_blank">沪ICP备20008178号 </a></div>
        <div class="copyright">&copy;
          <span itemprop="copyrightYear">2020</span>
          <span class="with-love">
            <i class="fa fa-user"></i>
          </span>
          <span class="author" itemprop="copyrightHolder" style="margin-left: 15px;">CD Yang</span>
        </div>

        <!-- <div class="busuanzi-count">
          <script async src="https://busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js"></script>
            <span class="post-meta-item" id="busuanzi_container_site_uv" style="display: none;">
              <span class="post-meta-item-icon">
                <i class="fa fa-user"></i>
              </span>
              <span class="site-uv" title="总访客量">
                <span id="busuanzi_value_site_uv"></span>
              </span>
            </span>
            <span class="post-meta-divider">|</span>
            <span class="post-meta-item" id="busuanzi_container_site_pv" style="display: none;">
              <span class="post-meta-item-icon">
                <i class="fa fa-eye"></i>
              </span>
              <span class="site-pv" title="总访问量">
                <span id="busuanzi_value_site_pv"></span>
              </span>
            </span>
        </div> -->
      </div>
    </footer>

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

header {
    width:100%;
    top:10px;
    position:sticky;
}

/* @import "./style/stylehome.css";
@import "./style/base.css";
@import "./style/m.css"; */
</style>


