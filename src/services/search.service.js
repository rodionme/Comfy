import Vue from 'vue';
import CONSTANTS from '@/constants/App.constants';

export default {
  getArticles (query) {
    return Vue.axios.get(`${CONSTANTS.API_URL}/articles`, { params: { query } })
      .catch((error) => {
        throw new Error(error);
      });
  },
};
