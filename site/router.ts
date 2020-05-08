import { createRouter, createWebHashHistory } from "vue-router";
const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../site/views/index.vue"),
      children: [
        {
          path: "/",
          name: "docs-start",
          component: () => import("../site/docs/start.md"),
        },
        {
          path: "/docs/theme",
          name: "docs-theme",
          component: () => import("../site/docs/theme.md"),
        },
        {
          path: "/docs/changelog",
          name: "docs-changelog",
          component: () => import("../CHANGELOG.md"),
        },
        {
          path: "/component/button",
          name: "component-button",
          component: () => import("@/components/button/README.md"),
        },
        {
          path: "/component/color",
          name: "component-color",
          component: () => import("@/components/color/README.md"),
        },
        {
          path: "/component/icon",
          name: "component-icon",
          component: () => import("@/components/icons/README.md"),
        },
      ],
    },
  ],
});

export default router;
