/**
 * 用户数据模型
 */
export interface LoginParams {
    userName: string;
    password: string;
}

export default class UserModel {
    async login(params: LoginParams) {
        const { userName, password } = params;
        const dbInstance = (global as any).dbInstance;
        // 访问用户集合
        const userCollection = dbInstance?.collection("users");
        // 查询用户是否存在
        const user: any[] = await userCollection.find({ userName: userName }).toArray();
        if (user && user.length > 0) {
            return user[0];
        } else {
            throw(new Error("用户名或密码错误"));
        }
    }
}