import Vue from 'vue';
import CONSTANTS from '@/constants/App.constants';

export default {
  getArticle (id) {
    return Vue.axios.get(`${CONSTANTS.API_URL}/article/${id}`)
      .catch((error) => {
        throw new Error(error);
      });
  },

  getLatestArticles () {
    return Vue.axios.get(`${CONSTANTS.API_URL}/latest-articles`)
      .catch((error) => {
        throw new Error(error);
      });
  },

  getRandomArticle () {
    return Vue.axios.get(`${CONSTANTS.API_URL}/random-article`)
      .catch((error) => {
        throw new Error(error);
      });
  }
};
