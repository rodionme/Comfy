import ArticleService from '@/services/article.service';
import { FETCH_EDITED_ARTICLE } from '@/store/actionTypes';
import { SET_EDITED_ARTICLE } from '@/store/mutationTypes';

export const state = {
  article: {},
};

export const actions = {
  [FETCH_EDITED_ARTICLE] ({ commit }, slug) {
    return ArticleService.getArticle(slug)
      .then(({ data }) => {
        commit(SET_EDITED_ARTICLE, data.article);
      })
      .catch((error) => {
        throw new Error(error);
      });
  },
};

export const mutations = {
  [SET_EDITED_ARTICLE] (currentState, article) {
    currentState.article = article;
  },
};

export default {
  state,
  actions,
  mutations,
};
