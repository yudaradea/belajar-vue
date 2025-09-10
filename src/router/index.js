import { createRouter, createWebHistory } from 'vue-router';

import Home from '../views/Home.vue';
import Calculator from '../views/Calculator.vue';
import ToDoList from '../views/ToDoList.vue';
import NotFound from '../views/NotFound.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/calculator',
    name: 'Calculator',
    component: Calculator,
  },
  {
    path: '/todolist',
    name: 'ToDoList',
    component: ToDoList,
  },
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
