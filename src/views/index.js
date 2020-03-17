export default {
  About: () => import(/* webpackChunkName: "About" */ '../views/About.vue'),
  Edit: () => import(/* webpackChunkName: "Edit" */ '../views/Edit.vue'),
  Home: () => import(/* webpackChunkName: "Home" */ '../views/Home.vue'),
};
