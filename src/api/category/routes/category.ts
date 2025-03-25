/**
 * report router
 */

import { factories } from "@strapi/strapi";
import { checkPolicy } from "../../group-permission/middlewares";

export default {
  routes: [
    {
      method: "GET",
      path: "/category", // Endpoint tùy chỉnh
      handler: "category.find",
      config: {
        auth: false, // Bật/tắt xác thực
        middlewares: [checkPolicy],
      },
    },
    {
      method: "GET",
      path: "/category/:id", // Endpoint tùy chỉnh
      handler: "category.findById",
      config: {
        auth: false, // Bật/tắt xác thực
        middlewares: [checkPolicy],
      },
    },
    {
      method: "GET",
      path: "/login", // Endpoint tùy chỉnh
      handler: "category.login",
      config: {
        auth: false, // Bật/tắt xác thực
        middlewares: [checkPolicy],
      },
    },
  ],
};
