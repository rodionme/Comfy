<template lang="pug">
  section#page-404.page-container.not-found-page
    main.page-content.not-found
      h1.not-found__title 404
      p.not-found__message Извините, страница по этому адресу не найдена
      router-link(to="/") На главную

</template>


<script>
  export default {
    name: 'page404',

    data () {
      return {};
    },
  };

</script>


<style lang="scss">
  .not-found-page {}

  .not-found {
    flex-direction: column;
    align-items: center;

    &__title {}

    &__message {}
  }

</style>
