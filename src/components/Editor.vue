<template lang="pug">
  section#page-edit-article.page-container.edit-article-page
    main.page-content
      .edit-article
        form.edit-article__form
          label.label.edit-article__title-label(for="title") Название статьи
          input.edit-article__title#title(v-model="article.title", type="text")

          label.label.edit-article__content-label(for="content") Содержимое статьи
          textarea.edit-article__content#content(v-model="article.content")

          button.button.edit-article__button(type="submit") Сохранить

</template>


<script>
  import { FETCH_ARTICLE } from '@/store/actionTypes';

  export default {
    name: 'Editor',

    beforeMount () {
      let articleId = this.getIdFromUrl();

      if (articleId) {
        this.$store.dispatch(FETCH_ARTICLE, articleId);
      }
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
  .edit-article-page {}

  .edit-article {
    overflow: auto;
    width: 100%;
    padding: 20px $side-padding;

    &__form {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      max-width: 600px;
    }

    &__title-label {
      margin-top: 20px;
      font-size: 16px;
    }

    &__title {
      width: 100%;
      height: 36px;
      margin-top: 10px;
      margin-bottom: 10px;
      padding-right: 10px;
      padding-left: 10px;
      border: 1px solid #ccc;
      font-size: 18px;
      line-height: 36px;
    }

    &__content-label {
      margin-top: 20px;
      font-size: 16px;
    }

    &__content {
      width: 100%;
      height: 300px;
      flex-shrink: 0;
      resize: vertical;
      margin-top: 10px;
      margin-bottom: 10px;
      padding: 10px;
      border: 1px solid #ccc;
      font-size: 18px;
      line-height: 1.4;
      font-family: inherit;
    }

    &__button {
      align-self: flex-end;
      flex-shrink: 0;
      height: 36px;
      margin-top: 20px;
      font-size: 18px;
      color: #f6f6f6;
      background-color: $dark-purple;
    }
  }

</style>
