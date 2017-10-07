<template lang="pug">
  section#page-article.page-container.article-page
    main.page-content
      article.article
        header.article__header
          h1.article__title {{ article.title }}
          button.button.edit-article-button(@click="onEditArticleClick", type="button") Отредактировать

        .article__content(v-html="article.content")

</template>


<script>
  import router from '@/router';
  import { FETCH_ARTICLE } from '@/store/actionTypes';

  export default {
    name: 'Article',

    beforeMount () {
      this.$store.dispatch(FETCH_ARTICLE, this.getSlugFromUrl()).catch(() => { router.replace('/404') });
    },

    methods: {
      getSlugFromUrl () {
        return window.location.pathname.split('/')[2];
      },

      onEditArticleClick () {
        router.push({ name: 'edit-article', params: { slug: this.article.slug } });
      },
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

  .edit-article-button {
    height: 36px;
    font-size: 18px;
    color: #f6f6f6;
    background-color: $dark-purple;
  }

  .article {
    width: 100%;
    overflow: auto;
    padding: 20px $side-padding;

    &__header {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

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
