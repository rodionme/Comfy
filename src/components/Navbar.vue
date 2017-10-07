<template lang="pug">
  section.navbar
    .navbar__content
      button.button.add-article-button(@click="onAddArticleClick", type="button") Добавить статью

      .searchbar(@focusout="onSearchBlur", @focusin="onSearchFocus", tabindex="0")
        form.searchbar__form(@submit.prevent="onSearchFormSubmit", action="/", method="GET")
          input.searchbar__field(v-model="searchQuery", type="text", placeholder="Введите название статьи")

          .searchbar__suggestions.search-suggestions(v-if="isSearchResultsOn")
            ul.search-suggestions__list
              li.search-suggestions__item(v-for="article of articles", :key="article.id")
                router-link.search-suggestions__item-link(:to="{ name: 'article', params: { slug: article.slug }}") {{ article.title }}

            .search-suggestions__no-results(v-if="!isSearchResultsExist")
              p.search-suggestions__no-results-text К сожалению, ничего не найдено

          button.button.searchbar__button.search-article-button(type="submit") Искать

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
        isSearchResultsExist: false,
      };
    },

    methods: {
      onAddArticleClick () {
        router.push('/editor');
      },

      onSearchFormSubmit () {
        this.$store.dispatch(FETCH_ARTICLES, this.searchQuery)
          .then(
            () => {
              this.isSearchResultsOn = true;
              this.isSearchResultsExist = !!this.articles.length;
            },
            () => { this.isSearchResultsOn = false }
          );
      },

      onSearchBlur () {
        let $event = arguments[0];

        if (!$event.relatedTarget || !$event.relatedTarget.classList.contains('search-suggestions__item-link')) {
          this.isSearchResultsOn = false;
        }
      },

      onSearchFocus () {
        if (this.articles.length) {
          this.isSearchResultsOn = true;
        }
      },
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
    position: relative;
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

  .add-article-button {
    height: 100%;
    flex-shrink: 0;
    font-size: 18px;
    color: #f6f6f6;
    background-color: $dark-purple;
  }

  .searchbar {
    outline: none;

    .searchbar__form {
      position: relative;
      display: flex;
      height: 100%;
    }

    &__field {
      width: 300px;
      height: 100%;
      margin-right: 10px;
      margin-left: 10px;
      padding-right: 10px;
      padding-left: 10px;
      border: none;
      font-size: 18px;
      line-height: 36px;
    }

    &__suggestions {
      position: absolute;
      top: 100%;
      left: 10px;
      width: 300px;
    }

    &__button {
      height: 100%;
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

    &__no-results {
      padding-right: 10px;
      padding-left: 10px;
    }

    &__no-results-text {}
  }

  .search-article-button {}

</style>
