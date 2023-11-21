
import UserModel, { LoginParams } from "../models/user";

class UserService {
    /// 登陆
    async login(params: LoginParams) {
        try {
            const userModelInstance: UserModel = new UserModel();
            const user = await userModelInstance.login(params);
            return user;
        } catch(error) {
            throw(error);
        }
    }
    /// 获取用户信息
    async getUserInfo(params: any) {
        
    }
}

export default new UserService;