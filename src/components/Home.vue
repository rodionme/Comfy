<template lang="pug">
  section#page-index.page-container.index-page
    main.page-content
      aside.categories
        h3.categories__title Категории

        ul.categories__list
          li.categories__item(v-for="category of categories", :key="category.id")
            router-link.categories__item-link(:to="{ name: 'category', params: { slug: category.slug }}") {{ category.title }}

      section.index-page__articles
        .random-article-wrapper
          h3.random-article-wrapper__title Случайная статья

          article.random-article-wrapper__article.random-article
            h4.random-article__title
              router-link.random-article__link(v-if="randomArticle.id", :to="{ name: 'article', params: { slug: randomArticle.slug }}") {{ randomArticle.title }}

            .random-article__content(v-html="randomArticle.content")

        .latest-articles
          h3.latest-article__title Последние добавленные

          ul.latest-articles__list
            li.latest-articles__item(v-for="article of latestArticles", :key="article.id")
              router-link.latest-articles__item-link(:to="{ name: 'article', params: { slug: article.slug }}") {{ article.title }}

</template>


<script>
  import router from '@/router';
  import { FETCH_CATEGORIES, FETCH_RANDOM_ARTICLE, FETCH_LATEST_ARTICLES } from '../store/actionTypes';

  export default {
    name: 'Home',

    beforeMount () {
      this.$store.dispatch(FETCH_CATEGORIES).catch(() => { router.replace('/404') });
      this.$store.dispatch(FETCH_RANDOM_ARTICLE, 1).catch(() => { router.replace('/404') });
      this.$store.dispatch(FETCH_LATEST_ARTICLES, 10).catch(() => { router.replace('/404') });
    },

    data () {
      return {};
    },

    computed: {
      categories () {
        return this.$store.state.home.categories;
      },

      randomArticle () {
        return this.$store.state.home.randomArticle;
      },

      latestArticles () {
        return this.$store.state.home.latestArticles;
      },
    },
  };

</script>


<style lang="scss">
  .index-page {
    &__articles {
      display: flex;
      flex-direction: column;
      overflow: auto;
      width: 100%;
    }
  }

  .categories {
    width: 300px;
    flex-shrink: 0;
    overflow: auto;
    padding: 10px 20px 10px $side-padding;
    border-right: 1px solid #aaa;

    &__title {
      margin-top: 10px;
      margin-bottom: 10px;
    }

    &__list {
      list-style: none;
      margin-top: 10px;
      margin-bottom: 10px;
      padding-left: 16px;
    }

    &__item {
      margin-top: 6px;
      margin-bottom: 6px;
    }

    &__item-link {}
  }

  .random-article-wrapper {
    padding: 10px $side-padding 10px 20px;

    &__title {
      margin-top: 10px;
      margin-bottom: 10px;
    }

    &__article {}
  }

  .random-article {
    &__title {
      margin-top: 20px;
      margin-bottom: 20px;
    }

    &__link {}

    &__content {
      p {
        margin-top: 16px;
        margin-bottom: 16px;
      }
    }
  }

  .latest-articles {
    flex-grow: 1;
    padding: 10px $side-padding 10px 20px;
    border-top: 1px solid #aaa;

    &__title {
      margin-top: 10px;
      margin-bottom: 10px;
    }

    &__list {
      list-style: none;
      margin-top: 10px;
      margin-bottom: 10px;
      padding-left: 16px;
    }

    &__item {
      margin-top: 8px;
      margin-bottom: 8px;
    }

    &__item-link {}
  }

</style>
