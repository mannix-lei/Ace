export const validateEmail = (_rule: object, value: string, callback: (err?: Error) => void) => {
	if (!value) {
		callback();
	} else {
		if (!/^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/.test(value)) {
			callback(new Error('请输入正确邮箱格式'));
		} else {
			callback();
		}
	}
};

export const validateEmailRequired = (_rule: object, value: string, callback: (err?: Error) => void) => {
	if (!value) {
		callback(new Error('请填写邮箱'));
	} else {
		if (!/^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/.test(value)) {
			callback(new Error('请输入正确邮箱格式'));
		} else {
			callback();
		}
	}
};

export const validateMobile = (_rule: object, value: string, callback: (err?: Error) => void) => {
	if (!value) {
		callback();
	} else {
		if (!/^1[3456789]\d{9}$/.test(value)) {
			callback(new Error('请输入正确手机号'));
		} else {
			callback();
		}
	}
};

export const validateMobileRequired = (_rule: object, value: string, callback: (err?: Error) => void) => {
	if (!value) {
		callback(new Error('请填写手机号'));
	} else {
		if (!/^1[3456789]\d{9}$/.test(value)) {
			callback(new Error('请输入正确手机号'));
		} else {
			callback();
		}
	}
};
