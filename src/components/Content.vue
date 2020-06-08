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
                        <section class="article typo">
                            <div class="article-entry" itemprop="articleBody">
                                <article v-html="dat.content"></article>
                            </div>
                            <div class="art-item-footer">
					            <span class="art-item-left">
                                    <i class="icon icon-chevron-thin-left"></i>
                                    上一篇：
                                    <router-link :to="'/content/' + dat.previousID">{{ dat.previous }}</router-link>
                                </span>
                                <span class="art-item-right">
                                    下一篇：
                                    <router-link :to="'/content/' + dat.nextID">{{ dat.next }}</router-link>
                                    <i class="icon icon-chevron-thin-right"></i>
                                </span>
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
