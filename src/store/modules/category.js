import CategoryService from '@/services/category.service';
import { FETCH_CATEGORY } from '@/store/actionTypes';
import { SET_CATEGORY } from '@/store/mutationTypes';

export const state = {
  category: {},
};

export const actions = {
  [FETCH_CATEGORY] ({ commit }, slug) {
    return CategoryService.getCategory(slug)
      .then(({ data }) => {
        commit(SET_CATEGORY, data.category);
      })
      .catch((error) => {
        throw new Error(error);
      });
  },
};

export const mutations = {
  [SET_CATEGORY] (currentState, category) {
    currentState.category = category;
  },
};

export default {
  state,
  actions,
  mutations,
};
