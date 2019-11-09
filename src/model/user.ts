export interface IUserListModel {
	list: IUserList[];
	totalRows: number;
}
export interface IUserList {
	name: string;
	password: string;
	mobile: string;
	email: string;
	createTime: string;
	updateTime: string;
}

export interface IUserModel {
	name: string;
	password: string;
	mobile: string;
	email: string;
}

export interface IQuery {
	email: string;
	name: string;
	mobile: string;
	pageNo: number;
	pageSize: number;
}
