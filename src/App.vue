<template lang="pug">
  #app
    navbar
    router-view(:key="$route.fullPath")
</template>


<script>
  import Navbar from '@/components/Navbar.vue';

  export default {
    name: 'app',

    components: {
      Navbar
    },
  };

</script>


<style lang="scss">
  * {
    box-sizing: border-box;
  }

  html,
  body,
  #app {
    height: 100%;
  }

  body {
    margin: 0;
    font-size: $base-font-size;
    line-height: 1.4;
    font-family: sans-serif;
    background-color: #ddd;
  }

  a {
    color: #333;
  }

  .button {
    padding-right: 10px;
    padding-left: 10px;
    border: none;
    cursor: pointer;
    transition: .1s ease all;

    &:hover {
      opacity: .8;
    }
  }

  .label {}

  .page-container {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: $base-screen-width;
    min-width: 650px;
    flex-grow: 1;
    margin-right: auto;
    margin-left: auto;
    background-color: #fff;
    box-shadow: #aaa 0 0 10px 3px;
  }

  .page-content {
    display: flex;
    flex-grow: 1;
  }

  #app {
    display: flex;
    flex-direction: column;
  }

</style>
