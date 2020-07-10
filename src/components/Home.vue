<template>
  <div class="home" style="margin-top:10px;margin-bottom:10px;">
    <div class="l_body">
      <div class='container clearfix'>
        <div class='l_main'>
          <section class="post-list">
            <center v-show="!list || !list.length" >
              <a-spin size="large" tip="Loading..."></a-spin>
            </center>
            <div v-for="i in list" :key="i.bID" class='post-wrapper'>
              <article class="post">
                <section class="meta">
                  <h2>
                    <router-link :to="'/post/' + i.slug">
                      {{ i.title }}
                    </router-link>
                  </h2>
                  <time>
                    {{new Date(i.createOnUtc).toLocaleDateString()}}
                  </time>
                </section>
                <section style="margin-bottom:30px;">
                  <article v-html="i.contentAbstract"></article>
                </section>
              </article>
            </div>
          </section>


          <nav id="page-nav" style="margin-top:30px;">
            <!-- 此处设计预加载 -->
            <router-link :to="'/?page=' + (page>1?page-1:1)" class="prev" rel="prev">
              {{(page&lt;=1? "": "Previous")}}
            </router-link>
            <router-link :to="'/?page=' + (page>=TotalCount? TotalCount: page+1)" class="next" rel="next">
              {{(page>=TotalCount? "": "Next")}}
            </router-link>
          </nav>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "home",
  components: {},
    data() {
        return {
            page: 1,
            TotalCount: 1,
            list: []
        }
    },
    created() {
        this.getData()
    },
    methods: {
        getData() {
            var that = this
            var urlPage = that.$route.query.page
            if (urlPage) {
                that.page = urlPage
            }
            this.$api.get('Blog?page=' + that.page, null, r => {
            // this.$api.get('Blog', null, r => {
                this.list = r.response.data
                this.page = r.response.page
                this.TotalCount = r.response.pageCount
            })
        }
    },
    watch: {
        '$route'(to, from) {
            this.list=[]
            this.page = to.query.page
            this.getData()
        }
    }
};
</script>