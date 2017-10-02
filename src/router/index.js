import Vue from 'vue';
import Router from 'vue-router';

import Home from '@/components/Home.vue';
import Category from '@/components/Category.vue';
import Article from '@/components/Article.vue';
import Editor from '@/components/Editor.vue';

Vue.use(Router);

export default new Router({
  routes: [
    { path: '/', name: 'home', component: Home },
    { path: '/category/:id', name: 'category', component: Category },
    { path: '/article/:id', name: 'article', component: Article },
    { path: '/editor', name: 'create-article', component: Editor },
    { path: '/editor/:id', name: 'edit-article', component: Editor },
    { path: '*', redirect: { name: 'home' } },
  ]
});
