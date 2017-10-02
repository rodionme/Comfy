<template lang="pug">
  section.navbar
    .navbar__content
      button.button.add-article(type="button") Добавить статью

      .searchbar
        form.searchbar__form(action="/", method="GET")
          input.searchbar__field(type="text", placeholder="Введите название статьи")

          .searchbar__suggestions.search-suggestions.invisible
            ul.search-suggestions__list
              li.search-suggestions__item
                a.search-suggestions__item-link(href="#") Статья один
              li.search-suggestions__item
                a.search-suggestions__item-link(href="#") Статья два
              li.search-suggestions__item
                a.search-suggestions__item-link(href="#") Статья с очень-преочень длинным названием, которое вряд ли поместится на одной строчке без ее переноса на другую строку
              li.search-suggestions__item
                a.search-suggestions__item-link(href="#") Статья четыре
              li.search-suggestions__item
                a.search-suggestions__item-link(href="#") Статья пять
              li.search-suggestions__item
                a.search-suggestions__item-link(href="#") Статья шесть
              li.search-suggestions__item
                a.search-suggestions__item-link(href="#") Статья семь
              li.search-suggestions__item
                a.search-suggestions__item-link(href="#") Статья восемь
              li.search-suggestions__item
                a.search-suggestions__item-link(href="#") Статья девять
              li.search-suggestions__item
                a.search-suggestions__item-link(href="#") Статья десять
              li.search-suggestions__item
                a.search-suggestions__item-link(href="#") Статья одиннадцать

          button.button.searchbar__button.search-article(type="submit") Искать

</template>


<script>
  export default {
    name: 'Navbar',
    data () {
      return {};
    }
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

      &.invisible {
        display: none;
      }
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
