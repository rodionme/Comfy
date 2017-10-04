<template lang="pug">
  section.navbar
    .navbar__content
      button.button.add-article(@click="onAddArticleClick", type="button") Добавить статью

      .searchbar
        form.searchbar__form(@submit.prevent="onSearchFormSubmit", action="/", method="GET")
          input.searchbar__field(v-model="searchQuery", type="text", placeholder="Введите название статьи")

          .searchbar__suggestions.search-suggestions(v-if="isSearchResultsOn")
            ul.search-suggestions__list
              li.search-suggestions__item(v-for="article of articles", :key="article.id")
                router-link.search-suggestions__item-link(:to="{ name: 'article', params: { id: article.id }}") {{ article.title }}

          button.button.searchbar__button.search-article(type="submit") Искать

</template>


<script>
  import router from '@/router';
  import { FETCH_ARTICLES } from '@/store/actionTypes';

  export default {
    name: 'Navbar',

    data () {
      return {
        searchQuery: '',
        isSearchResultsOn: false,
      };
    },

    methods: {
      onAddArticleClick () {
        router.push('editor');
      },

      onSearchFormSubmit () {
        this.$store.dispatch(FETCH_ARTICLES, this.searchQuery)
          .then(
            () => { this.isSearchResultsOn = true },
            () => { this.isSearchResultsOn = false }
          );
      }
    },

    computed: {
      articles () {
        return this.$store.state.navbar.articles;
      },
    },
  };

</script>


<style lang="scss">
  .navbar {
    width: 100%;
    padding: 20px $side-padding;
    background-color: $light-purple;

    &__content {
      display: flex;
      justify-content: space-between;
      max-width: $base-screen-width;
      height: 36px;
      margin-right: auto;
      margin-left: auto;
    }
  }

  .add-article {
    height: 100%;
    font-size: 18px;
    color: #f6f6f6;
    background-color: $dark-purple;
  }

  .searchbar {
    .searchbar__form {
      position: relative;
      display: flex;
      height: 100%;
    }

    &__field {
      width: 300px;
      height: 100%;
      padding-right: 10px;
      padding-left: 10px;
      border: none;
      font-size: 18px;
      line-height: 36px;
    }

    &__suggestions {
      position: absolute;
      top: 100%;
      left: 0;
      width: 300px;
    }

    &__button {
      height: 100%;
      margin-left: 10px;
      font-size: 18px;
      color: #f6f6f6;
      background-color: $dark-purple;
    }
  }

  .search-suggestions {
    max-height: 400px;
    overflow: auto;
    padding: 10px;
    background-color: #ddd;

    &__list {
      list-style: none;
      margin-top: 10px;
      margin-bottom: 10px;
      padding-left: 16px;
    }

    &__item {
      margin-top: 10px;
      margin-bottom: 10px;
    }

    &__item-link {}
  }

  .search-article {}

</style>
