<template lang="pug">
  section#page-category.page-container.category-page
    main.page-content
      section.category
        h3.category__title Название категории

        .category__articles.category-articles
          ul.category-articles__list
            li.category-articles__item
              a.category-articles__item-link(href="#") Статья один
            li.category-articles__item
              a.category-articles__item-link(href="#") Статья два
            li.category-articles__item
              a.category-articles__item-link(href="#") Статья с очень-преочень длинным названием, которое вряд ли поместится на одной строчке без ее переноса на другую строку
            li.category-articles__item
              a.category-articles__item-link(href="#") Статья четыре
            li.category-articles__item
              a.category-articles__item-link(href="#") Статья пять
            li.category-articles__item
              a.category-articles__item-link(href="#") Статья шесть
            li.category-articles__item
              a.category-articles__item-link(href="#") Статья семь
            li.category-articles__item
              a.category-articles__item-link(href="#") Статья восемь
            li.category-articles__item
              a.category-articles__item-link(href="#") Статья девять
            li.category-articles__item
              a.category-articles__item-link(href="#") Статья десять
            li.category-articles__item
              a.category-articles__item-link(href="#") Статья одиннадцать

</template>


<script>
  export default {
    name: 'Category',
    data () {
      return {}
    }
  }

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
