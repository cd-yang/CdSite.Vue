<template>
    <div>
        <div class="l_body">
            <div class="container clearfix">
                <div class="l_main">
                    <article itemscope="" itemprop="blogPost" style="margin-top:10px;">
                        <strong style="margin-bottom:10px;font-weight: bolder">
                            <h2 class="title">{{dat.title}}</h2>
                            <time>
                                {{new Date(this.dat.createOnUtc).toLocaleDateString()}}
                            </time>
                        </strong>
                        <!-- <hr style="border:1 dashed #987cb9" width="80%" color=#987cb9 SIZE=1> -->
                        <section>
                            <div>
                                <article v-html="dat.content"></article>
                            </div>
                            <div style="margin-bottom:20px">
                              <template v-if="dat.previousSlug">
                                <span class="post-item-previous">
                                    <router-link :to="'/post/' + dat.previousSlug">上一篇：{{ dat.previous }}</router-link>
                                </span>
                              </template>

                              <template v-if="dat.nextSlug">
                                <span style="float:right;margin-bottom:5px">
                                    <router-link :to="'/post/' + dat.nextSlug">下一篇：{{ dat.next }}</router-link>
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
