import Vue from 'vue';
import Router from 'vue-router';

import Home from '@/components/Home.vue';
import Category from '@/components/Category.vue';
import Article from '@/components/Article.vue';
import Editor from '@/components/Editor.vue';
import Page404 from '@/components/404.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    { path: '/', name: 'home', component: Home },
    { path: '/category/:id', name: 'category', component: Category },
    { path: '/article/:id', name: 'article', component: Article },
    { path: '/editor', name: 'create-article', component: Editor },
    { path: '/editor/:id', name: 'edit-article', component: Editor },
    { path: '/404', name: 'page404', component: Page404 },
    { path: '*', redirect: { name: 'page404' } },
  ]
});
