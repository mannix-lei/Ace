import { IUserList, IUserListModel, IUserModel } from '@/model/user';
import { IQuery } from '../model/user';
import instance from './index';

/**
 * 查询用户列表
 */
export const getUserList = async (query: IQuery) => {
	const { data } = await instance.get<IUserListModel>('/api/getUserList', {
		params: {
			...query,
		},
	});
	return data;
};

/**
 * 添加用户
 * @param user
 */
export const addUser = async (user: IUserModel) => {
	const data = await instance.post<IUserModel>('/api/addUser', {
		user,
	});
	return data;
};

/**
 * 删除用户
 * @param id
 */
export const delUser = async (id: number) => {
	const data = await instance.post('/api/delUser', {
		id,
	});
	return data;
};

/**
 * 根据id查询用户信息
 * @param id
 */
export const getUserInfoById = async (id: number) => {
	const { data } = await instance.get<IUserList>('/api/getUserInfoById', {
		params: {
			id,
		},
	});
	return data;
};

/**
 * 编辑用户
 * @param user
 */
export const editUser = async (user: IUserList) => {
	const { data } = await instance.post<IUserList>('/api/updateUser', {
		user,
	});
	return data;
};
