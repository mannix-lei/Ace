import { IUserList } from '@/model/user';
import { Component, Vue } from 'vue-property-decorator';
import { getUserList } from '../../service/userService';

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
}
