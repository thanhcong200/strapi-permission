/**
 * report router
 */
import { checkPolicy } from '../../group-permission/middlewares';

export default {
  routes: [
    {
      method: "GET",
      path: "/report", // Endpoint tùy chỉnh
      handler: "report.find",
      config: {
        auth: false, // Bật/tắt xác thực
        middlewares: [checkPolicy],
      },
    },
    {
      method: "GET",
      path: "/report/:id", // Endpoint tùy chỉnh
      handler: "report.findById",
      config: {
        auth: false, // Bật/tắt xác thực
        middlewares: [checkPolicy],
      },
    },
  ],
};
