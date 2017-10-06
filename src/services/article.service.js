import Vue from 'vue';
import CONSTANTS from '@/constants/App.constants';

export default {
  getArticle (slug) {
    return Vue.axios.get(`${CONSTANTS.API_URL}/articles/${slug}`)
      .catch((error) => {
        throw new Error(error);
      });
  },

  createArticle (article) {
    return Vue.axios.post(`${CONSTANTS.API_URL}/articles`, { article })
      .catch((error) => {
        throw new Error(error);
      });
  },

  updateArticle (article) {
    return Vue.axios.put(`${CONSTANTS.API_URL}/articles/${article.slug}`, { article })
      .catch((error) => {
        throw new Error(error);
      });
  },

  getLatestArticles (latest) {
    return Vue.axios.get(`${CONSTANTS.API_URL}/articles`, { params: { latest } })
      .catch((error) => {
        throw new Error(error);
      });
  },

  getRandomArticle (random) {
    return Vue.axios.get(`${CONSTANTS.API_URL}/articles`, { params: { random } })
      .catch((error) => {
        throw new Error(error);
      });
  },
};
