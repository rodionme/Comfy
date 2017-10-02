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
  const category = {
    id: 1,
    title: 'Название категории',
    articles: [
      { id: 1, title: 'Статья один' },
      { id: 2, title: 'Статья два' },
      { id: 3, title: 'Статья с очень-преочень длинным названием, которое вряд ли поместится на одной строчке без ее переноса на другую строку' },
      { id: 4, title: 'Статья четыре' },
      { id: 5, title: 'Статья пять' },
      { id: 6, title: 'Статья шесть' },
      { id: 7, title: 'Статья семь' },
      { id: 8, title: 'Статья восемь' },
      { id: 9, title: 'Статья девять' },
      { id: 10, title: 'Статья десять' },
      { id: 11, title: 'Статья одиннадцать' },
    ]
  };

  export default {
    name: 'Category',
    data () {
      return {
        category
      };
    }
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
