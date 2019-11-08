import { IUserModel } from '@/model/user';
import { addUser, editUser, getUserInfoById } from '@/service/userService';
import { validateEmailRequired, validateMobileRequired } from '@/utils/validators';
import { Form } from 'element-ui';
import { Component, Vue } from 'vue-property-decorator';

@Component({})
export default class AddUser extends Vue {
	public userForm: IUserModel = {
		name: '',
		password: '',
		mobile: '',
		email: '',
	};
	public id: number = -1;
	public userInfo: any = {};

	public userRules = {
		name: [{ required: true, message: '请填写姓名' }],
		password: [{ required: true, message: '请填写密码' }],
		mobile: [{ required: true, validator: validateMobileRequired }],
		email: [{ required: true, validator: validateEmailRequired }],
	};

	public created() {
		this.id = this.$route.query.id ? Number(this.$route.query.id) : -1;
		if (this.$route.query.id) {
			this.getUserInfo(this.id);
		}
	}

	// 新增用户
	public async submitForm(val: string) {
		(this.$refs[val] as Form).validate(async (valid) => {
			if (valid) {
				if (this.id > -1) {
					Object.assign(this.userInfo, this.userForm);
					await editUser(this.userInfo);
				} else {
					await addUser(this.userForm);
				}
				this.$router.go(-1);
			}
		});
	}

	// 重制表单
	public resetForm(val: string) {
		(this.$refs[val] as Form).resetFields();
	}

	public async getUserInfo(id: number) {
		const data = await getUserInfoById(id);
		this.userInfo = data;
		const { name, email, mobile, password } = this.userInfo;
		this.userForm.name = name;
		this.userForm.email = email;
		this.userForm.mobile = mobile;
		this.userForm.password = password;
	}
}
