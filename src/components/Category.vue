<template lang="pug">
  section#page-category.page-container.category-page
    main.page-content
      section.category
        h3.category__title {{ category.title }}

        .category__articles.category-articles
          ul.category-articles__list
            li.category-articles__item(v-for="article of category.articles", :key="article.id")
              router-link.category-articles__item-link(:to="{ name: 'article', params: { id: article.id }}") {{ article.title }}

</template>


<script>
  import { FETCH_CATEGORY } from '@/store/actionTypes';

  export default {
    name: 'Category',

    beforeMount () {
      this.$store.dispatch(FETCH_CATEGORY, this.getIdFromUrl());
    },

    data () {
      return {};
    },

    methods: {
      getIdFromUrl () {
        return window.location.pathname.split('/')[2];
      }
    },

    computed: {
      category () {
        return this.$store.state.category.category;
      },
    },
  };

</script>


<style lang="scss">
  .category-page {}

  .category {
    overflow: auto;
    padding: 20px $side-padding;

    &__title {
      margin-top: 20px;
      margin-bottom: 20px;
    }

    &__articles {}
  }

  .category-articles {
    border-top: 1px solid #aaa;

    &__list {
      list-style: none;
      margin-top: 10px;
      margin-bottom: 10px;
      padding-left: 16px;
    }

    &__item {
      margin-top: 20px;
      margin-bottom: 20px;
    }

    &__item-link {}
  }

</style>
