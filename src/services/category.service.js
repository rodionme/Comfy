import Vue from 'vue';
import CONSTANTS from '@/constants/App.constants';

export default {
  getCategories () {
    return Vue.axios.get(`${CONSTANTS.API_URL}/categories`)
      .catch((error) => {
        throw new Error(error);
      });
  },

  getCategory (id) {
    return Vue.axios.get(`${CONSTANTS.API_URL}/category/${id}`)
      .catch((error) => {
        throw new Error(error);
      });
  }
};
