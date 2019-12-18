import { Component, Vue } from 'vue-property-decorator';

@Component({})
export default class Home extends Vue {
	public judgeType: string = 'typeof | instanceof | constructor | prototype';
	public created() {
		window.addEventListener('scroll', this.debounce(this.handle, 1000), true);
	}

	public debounce(fn: () => void, wait: number) {
		let timeout: number | null = null;
		return () => {
			if (timeout !== null) {
				clearTimeout(timeout);
			}
			timeout = setTimeout(fn, wait);
		};
	}
	public handle() {
		console.log('====================================');
		console.log(Math.random());
		console.log('====================================');
	}
}
