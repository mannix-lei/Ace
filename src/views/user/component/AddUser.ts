import { IUserModel } from '@/model/user';
import { addUser } from '@/service/userService';
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

	public userRules = {
		name: [{ required: true, message: '请填写姓名' }],
		password: [{ required: true, message: '请填写密码' }],
		mobile: [{ required: true, message: '请填写联系方式' }],
		email: [{ required: true, message: '请填写邮箱' }],
	};

	// 新增用户
	public async submitForm(val: string) {
		(this.$refs[val] as Form).validate(async (valid) => {
			if (valid) {
				await addUser(this.userForm);
			}
		});
	}

	// 重制表单
	public resetForm(val: string) {
		(this.$refs[val] as Form).resetFields();
	}
}
