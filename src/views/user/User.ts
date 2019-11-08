import { IUserList } from '@/model/user';
import { Component, Vue } from 'vue-property-decorator';
import { delUser, getUserList } from '../../service/userService';

@Component({})
export default class User extends Vue {
	public userList: IUserList[] = [];
	public async created() {
		await this.initUserList();
	}
	public async initUserList() {
		const data = await getUserList();
		this.userList = data;
	}
	public addUser() {
		this.$router.push('/add');
	}
	public async delUser(id: number) {
		await delUser(id);
		await this.initUserList();
	}

	public editUser(id: number) {
		this.$router.push(`/add?id=${id}`);
	}
}
