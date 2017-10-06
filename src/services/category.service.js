import Vue from 'vue';
import CONSTANTS from '@/constants/App.constants';

export default {
  getCategories () {
    return Vue.axios.get(`${CONSTANTS.API_URL}/categories`)
      .catch((error) => {
        throw new Error(error);
      });
  },

  getCategory (slug) {
    return Vue.axios.get(`${CONSTANTS.API_URL}/categories/${slug}`)
      .catch((error) => {
        throw new Error(error);
      });
  }
};
