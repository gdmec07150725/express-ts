/**
 * 服务初始化逻辑
 */
import serviceLoader from "./service";
import mongodbLoader from "./mongodb";

export default async ({ expressApp }: any) => {
  await mongodbLoader();
  console.log("MongoDB Intialized");
  await serviceLoader({ app: expressApp });
  console.log("service Intialized");
};
