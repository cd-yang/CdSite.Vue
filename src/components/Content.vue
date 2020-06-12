<template>
    <div>
        <div class="l_body">
            <div class="container clearfix">
                <div class="l_main">
                    <article id="" class="post white-box article-type-post" itemscope="" itemprop="blogPost">
                        <section class="meta">
                            <h2 class="title">{{dat.title}}</h2>
                            <time>
                                {{new Date(this.dat.createOnUtc).toLocaleDateString()}}
                            </time>
                        </section>
                        <section>
                            <div>
                                <article v-html="dat.content"></article>
                            </div>
                            <div>
                              <template v-if="dat.previousId > 0">
                                <span class="post-item-previous">
                                    <router-link :to="'/content/' + dat.previousId">上一篇：{{ dat.previous }}</router-link>
                                </span>
                              </template>

                              <template v-if="dat.nextId > 0">
                                <span style="float:right;">
                                    <router-link :to="'/content/' + dat.nextId">下一篇：{{ dat.next }}</router-link>
                                </span>
                              </template>
                            </div>
                        </section>
                    </article>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
  components: { },
  data() {
    return {
      id: this.$route.params.id,
      dat: {},
    };
  },
  created() {
    this.getData();
  },
  methods: {
    getData() {
      this.$api.get("Blog/" + this.id, null, r => {
        this.dat = r.response;
      });
    }
  },
  watch: {
    $route(to) {
      this.dat = {};
      this.id = to.params.id;
      this.getData();
    }
  }
};
</script>

<style>
</style>
