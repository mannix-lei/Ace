import { Component, Vue } from 'vue-property-decorator';
import draggable from 'vuedraggable';

interface IStaff {
	id: number;
	name: string;
}
@Component({
	components: {
		draggable,
	},
})
export default class Home extends Vue {
	public fooList: IStaff[] = [
		{
			id: 23432,
			name: 'fadsf',
		},
		{
			id: 23433,
			name: 'fadsf',
		},
		{
			id: 23434,
			name: 'fadsf',
		},
		{
			id: 23435,
			name: 'fadsf',
		},
		{
			id: 23436,
			name: 'fadsf',
		},
		{
			id: 23437,
			name: 'fadsf',
		},
		{
			id: 23438,
			name: 'fadsf',
		},
	];
    public barList: IStaff[] = [{
        id: 143534,
        name: '324324',
    }];
    
    public log(evt: any) {
        window.console.log(evt);
    }
}
