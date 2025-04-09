import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import sourceData from '@/data.json';

const routes = [
  { path: '/', name: 'Home', component: Home, alias: '/home' },
  // { path: '/home', redirect: { name: 'Home' } },
  {
    path: '/protected',
    name: 'protected',
    components: {
      default: () => import('@/views/Protected.vue'),
      LeftSidebar: () => import('@/components/LeftSidebar.vue'),
    },
    meta: {
      requaresAuth: true,
    },
  },
  {
    path: '/invoices',
    name: 'invoices',
    components: {
      default: () => import('@/views/Invoices.vue'),
      LeftSidebar: () => import('@/components/LeftSidebar.vue'),
    },
    meta: {
      requaresAuth: true,
    },
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/Login.vue'),
  },
  { path: '/example/:id(\\d+)', component: () => import('@/views/Login.vue') },
  {
    path: '/destination/:id/:slug',
    name: 'destination.show',
    component: () => import('@/views/DestinationShow.vue'),
    props: (route) => ({ ...route.params, id: parseInt(route.params.id) }),
    beforeEnter(to, from) {
      const exist = sourceData.destinations.find((i) => i.id === parseInt(to.params.id));
      if (!exist)
        return {
          name: 'NotFound',
          params: { pathMatch: to.path.split('/').slice(1) },
          query: to.query,
          hash: to.hash,
        };
    },
    children: [
      {
        path: ':experienceSlug',
        name: 'experience.show',
        component: () => import('@/views/ExperienceShow.vue'),
        props: (route) => ({ ...route.params, id: parseInt(route.params.id) }),
      },
    ],
  },
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: () => import('@/views/NotFound.vue') },
];

const router = createRouter({
  history: createWebHistory('/vue-school-travel-app/'),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return savedPosition || new Promise((resolve) => setTimeout(() => resolve({ top: 0 }), 300));
  },
  linkActiveClass: 'vue-active-link',
});
router.beforeEach((to, from) => {
  if (to.meta.requaresAuth && !window.user) {
    return { name: 'login', query: { redirect: to.fullPath } };
  }
});
export default router;
