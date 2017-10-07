<template lang="pug">
  section#page-edit-article.page-container.edit-article-page
    main.page-content
      .edit-article
        form.edit-article__form(@submit.prevent="onArticleSave")
          label.label.edit-article__title-label(for="title") Название статьи
          input.edit-article__title#title(v-model="editedArticle.title", type="text")

          label.label.edit-article__category-label(for="title") Категория статьи
          select.edit-article__category(v-model="editedArticle.category")
            option(disabled, value="") Выберите один из вариантов
            option(v-for="category of categories", v-bind:value="category.slug") {{ category.title }}

          label.label.edit-article__content-label(for="content") Содержимое статьи
          textarea.edit-article__content#content(v-model="editedArticle.content")

          button.button.edit-article__button(type="submit") Сохранить

</template>


<script>
  import router from '@/router';
  import { FETCH_CATEGORIES, FETCH_EDITED_ARTICLE, ADD_ARTICLE, UPDATE_ARTICLE } from '@/store/actionTypes';

  export default {
    name: 'Editor',

    beforeMount () {
      this.$store.dispatch(FETCH_CATEGORIES).catch(() => { router.replace('/404') });

      if (this.getSlugFromUrl) {
        this.$store.dispatch(FETCH_EDITED_ARTICLE, this.getSlugFromUrl).catch(() => { router.replace('/404') });
      }
    },

    methods: {
      onArticleSave () {
        let actionType;

        if (this.getSlugFromUrl) {
          actionType = UPDATE_ARTICLE;
        } else {
          actionType = ADD_ARTICLE;
        }

        this.$store.dispatch(actionType, this.editedArticle)
          .then(response => {
            if (response && response.data && response.data.article && response.data.article.slug) {
              this.$router.push(`/article/${response.data.article.slug}`);
            }
          });
      },
    },

    computed: {
      getSlugFromUrl () {
        return window.location.pathname.split('/')[2];
      },

      categories () {
        return this.$store.state.home.categories;
      },

      article () {
        return this.$store.state.editor.article;
      },

      editedArticle () {
        return {
          slug: this.article.slug,
          id: this.article.id,
          title: this.article.title,
          category: this.article.category || '',
          content: this.article.content,
        };
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

    &__category-label {
      margin-top: 20px;
      font-size: 16px;
    }

    &__category {
      width: 100%;
      height: 36px;
      margin-top: 10px;
      margin-bottom: 10px;
      padding-right: 10px;
      padding-left: 10px;
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
