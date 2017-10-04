import Vue from 'vue';
import CONSTANTS from '@/constants/App.constants';

export default {
  getArticles (query) {
    return Vue.axios.get(`${CONSTANTS.API_URL}/articles`, { params: { query } })
      .catch((error) => {
        throw new Error(error);
      });
  },

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
