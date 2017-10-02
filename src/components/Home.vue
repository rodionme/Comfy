<template lang="pug">
  section#page-index.page-container.index-page
    main.page-content
      aside.categories
        h3.categories__title Категории

        ul.categories__list
          li.categories__item(v-for="category of categories", :key="category.id")
            router-link.categories__item-link(:to="{ name: 'category', params: { id: category.id }}") {{ category.title }}

      section.index-page__articles
        .random-article-wrapper
          h3.random-article-wrapper__title Случайная статья

          article.random-article-wrapper__article.random-article
            h4.random-article__title
              router-link.random-article__link(:to="{ name: 'article', params: { id: randomArticle.id }}") {{ randomArticle.title }}

            .random-article__content(v-html="randomArticle.content")

        .latest-articles
          h3.latest-article__title Последние добавленные

          ul.latest-articles__list
            li.latest-articles__item(v-for="article of latestArticles", :key="article.id")
              router-link.latest-articles__item-link(:to="{ name: 'article', params: { id: article.id }}") {{ article.title }}

</template>


<script>
  const categories = [
    { id: 1, title: 'География' },
    { id: 2, title: 'Искусство' },
    { id: 3, title: 'История' },
    { id: 4, title: 'Музыка' },
    { id: 5, title: 'Наука' },
    { id: 6, title: 'Общество' },
    { id: 7, title: 'Персоналии' },
    { id: 8, title: 'Религия' },
    { id: 9, title: 'Спорт' },
    { id: 10, title: 'Техника' },
    { id: 11, title: 'Философия' },
  ];

  const randomArticle = {
    id: 1,
    title: 'Днепр (город)',
    content: `
      <p>Днепр (Днипро́[5], укр. Дніпро́; до 1796 и с 1802 по 1926 — Екатериносла́в, с 1796 по 1802 — Новоросси́йск,
         с 1926 по 2016 — Днепропетро́вск, укр. Дніпропетро́вськ) — город, областной центр Днепропетровской области
         Украины, центр Днепровской агломерации[6]. Четвёртый город по численности населения на Украине после
         Киева, Харькова и Одессы.</p>
      <p>Город был первоначально задуман как третья[7][8][9] столица Российской империи, после Москвы и
         Санкт-Петербурга, и как центр Новороссии[7]. Один из крупнейших промышленных центров Советской Украины,
         Днепропетровск был одним из ключевых центров оборонной и космической промышленности Советского Союза.
         Из-за своей военной промышленности Днепропетровск был закрытым для посещения иностранцами городом
         вплоть до 1990-х годов. Особенно были развиты чёрная металлургия, металлообрабатывающие цеха,
         машиностроение и другие тяжёлые отрасли промышленности.</p>
      <p>По данным на 1 января 2017 года, в городе проживало 976 525 человек наличного населения, в границах
         горсовета — включая пгт Авиаторское — 978 943 человека[3], на 1 ноября 2015 года — 974 341 постоянный
         житель и 984 466 человек наличного населения, в границах горсовета — 976 755 постоянных жителей и 986
         887 человек наличного населения[10]. В 1976—2011 годах численность населения Днепропетровска превышала
         миллион человек.</p>`
  };

  const latestArticles = [
    { id: 1, title: 'Статья один' },
    { id: 2, title: 'Статья два' },
    { id: 3, title: 'Статья с очень-преочень длинным названием, которое вряд ли поместится на одной строчке без ее переноса на другую строку' },
    { id: 4, title: 'Статья четыре' },
    { id: 5, title: 'Статья пять' },
  ];

  export default {
    name: 'Home',
    data () {
      return {
        categories,
        randomArticle,
        latestArticles
      };
    }
  };

</script>


<style lang="scss">
  .index-page {
    &__articles {
      display: flex;
      flex-direction: column;
      overflow: auto;
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
