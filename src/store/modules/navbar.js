import SearchService from '@/services/search.service';
import { FETCH_ARTICLES } from '@/store/actionTypes';
import { SET_ARTICLES } from '@/store/mutationTypes';

export const state = {
  articles: [],
};

export const actions = {
  [FETCH_ARTICLES] ({ commit }, query) {
    return SearchService.getArticles(query)
      .then(({ data }) => {
        commit(SET_ARTICLES, data.articles);
      })
      .catch((error) => {
        throw new Error(error);
      });
  },
};

export const mutations = {
  [SET_ARTICLES] (currentState, articles) {
    currentState.articles = articles;
  },
};

export default {
  state,
  actions,
  mutations,
};
