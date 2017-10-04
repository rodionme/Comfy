<template lang="pug">
  section#page-article.page-container.article-page
    main.page-content
      article.article
        h1.article__title {{ article.title }}

        .article__content(v-html="article.content")

</template>


<script>
  import { FETCH_ARTICLE } from '@/store/actionTypes';

  export default {
    name: 'Article',

    beforeMount () {
      this.$store.dispatch(FETCH_ARTICLE, this.getIdFromUrl());
    },

    data () {
      return {};
    },

    methods: {
      getIdFromUrl () {
        return window.location.hash.split('/')[2];
      }
    },

    computed: {
      article () {
        return this.$store.state.article.article;
      },
    },
  };

</script>


<style lang="scss">
  .article-page {}

  .article {
    overflow: auto;
    padding: 20px $side-padding;

    &__title {
      margin-top: 20px;
      margin-bottom: 20px;
    }

    &__content {
      p {
        margin-top: 16px;
        margin-bottom: 16px;
      }
    }
  }

</style>
