import { IUserList } from '@/model/user';
import instance from './index';

export const getUserList = async () => {
	const { data } = await instance.get<IUserList[]>('/api/getUserList');
	return data;
};
