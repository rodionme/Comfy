import Vue from 'vue';
import Vuex from 'vuex';

import home from './modules/home';
import category from './modules/category';
import article from './modules/article';
import navbar from './modules/navbar';
import editor from './modules/editor';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    home,
    category,
    article,
    navbar,
    editor,
  },
});
