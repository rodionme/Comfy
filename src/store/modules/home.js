import CategoryService from '@/services/category.service';
import ArticleService from '@/services/article.service';
import { FETCH_CATEGORIES, FETCH_RANDOM_ARTICLE, FETCH_LATEST_ARTICLES } from '@/store/actionTypes';
import { SET_CATEGORIES, SET_RANDOM_ARTICLE, SET_LATEST_ARTICLES } from '@/store/mutationTypes';

export const state = {
  categories: [],
  randomArticle: {},
  latestArticles: []
};

export const actions = {
  [FETCH_CATEGORIES] ({ commit }) {
    return CategoryService.getCategories()
      .then(({ data }) => {
        commit(SET_CATEGORIES, data.categories);
      })
      .catch((error) => {
        throw new Error(error);
      });
  },

  [FETCH_RANDOM_ARTICLE] ({ commit }) {
    return ArticleService.getRandomArticle()
      .then(({ data }) => {
        commit(SET_RANDOM_ARTICLE, data.randomArticle);
      })
      .catch((error) => {
        throw new Error(error);
      });
  },

  [FETCH_LATEST_ARTICLES] ({ commit }) {
    return ArticleService.getLatestArticles()
      .then(({ data }) => {
        commit(SET_LATEST_ARTICLES, data.latestArticles);
      })
      .catch((error) => {
        throw new Error(error);
      });
  },
};

export const mutations = {
  [SET_CATEGORIES] (currentState, categories) {
    currentState.categories = categories;
  },

  [SET_RANDOM_ARTICLE] (currentState, randomArticle) {
    currentState.randomArticle = randomArticle;
  },

  [SET_LATEST_ARTICLES] (currentState, latestArticles) {
    currentState.latestArticles = latestArticles;
  },
};

export default {
  state,
  actions,
  mutations,
};
