import { IUserList } from '@/model/user';
import { Form } from 'element-ui';
import { Component, Vue } from 'vue-property-decorator';
import { IQuery } from '../../model/user';
import { delUser, getUserList } from '../../service/userService';
import { validateEmail, validateMobile } from '../../utils/validators/index';

@Component({})
export default class User extends Vue {
	public userList: IUserList[] = [];

	public query = {
		email: '',
		name: '',
		mobile: '',
		pageNo: 1,
		pageSize: 5,
	};

	public totalRows: number = 0;

	public queryRules: object = {
		email: [{ validator: validateEmail, trigger: 'change' }],
		mobile: [{ validator: validateMobile, trigger: 'change' }],
	};

	public async created() {
		await this.initUserList(this.query);
	}
	public async initUserList(query: IQuery) {
		const data = await getUserList(query);
		this.userList = data.list;
		this.totalRows = data.totalRows;
	}
	public addUser() {
		this.$router.push('/add');
	}
	public async delUser(id: number) {
		this.$confirm('是否继续?', '提示', {
			confirmButtonText: '确定',
			cancelButtonText: '取消',
			type: 'warning',
		})
			.then(async () => {
				await delUser(id);
				await this.initUserList(this.query);
				this.$message({
					type: 'success',
					message: '删除成功!',
				});
			})
			.catch(() => {
				this.$message({
					type: 'info',
					message: '已取消删除',
				});
			});
	}

	public editUser(id: number) {
		this.$router.push(`/add?id=${id}`);
	}

	public async search(val: string) {
		(this.$refs[val] as Form).validate((valid) => {
			if (valid) {
				this.initUserList(this.query);
			}
		});
	}

	public resetForm(val: string) {
		(this.$refs[val] as Form).resetFields();
	}

	public async handleSizeChange(val: number) {
		this.query.pageSize = val;
		await this.initUserList(this.query);
	}

	public async handleCurrentChange(val: number) {
		this.query.pageNo = val;
		await this.initUserList(this.query);
	}
}
