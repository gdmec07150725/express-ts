/**
 * 初始化数据库
 */
const { MongoClient } = require("mongodb");

// Connection URL
// Todo: 根据环境不同，切换不同的数据库路径
const dbUrl: string = "mongodb://127.0.0.1:27017";

// DataBase Name
const dbName = "demo";
const client = new MongoClient(dbUrl, { maxPoolSize: 100 });

export default async (): Promise<any> => {
    try {
        if (!(global as any).dbInstance) {
            await client.connect();
            console.log("Connected successfully to database");
            (global as any).dbInstance = client.db(dbName);
        }
        return (global as any).dbInstance;
    } catch(error) {
        console.warn(error);
    }
}
