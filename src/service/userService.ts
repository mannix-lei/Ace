import { IUserList, IUserModel } from '@/model/user';
import instance from './index';

/**
 * 查询用户列表
 */
export const getUserList = async () => {
	const { data } = await instance.get<IUserList[]>('/api/getUserList');
	return data;
};

/**
 * 添加用户
 * @param user
 */
export const addUser = async (user: IUserModel) => {
	const data = await instance.post<IUserModel>('/api/addUser', user);
	return data;
};
