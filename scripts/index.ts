import { createStrapi } from "@strapi/strapi";

async function  main() {
    // const strapi = await createStrapi();
    // await strapi.start();

    console.log("🌱 Running Seeder...");

    // Thêm dữ liệu vào collection type 'ai-app'
    const aiAppData = [
      { name: "App 1", description: "AI App 1 Description", like: 10 },
      { name: "App 2", description: "AI App 2 Description", like: 25 },
    ];

    for (const data of aiAppData) {
      console.log(data)
    }
}

main();
