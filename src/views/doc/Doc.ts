import { Component, Vue } from 'vue-property-decorator';
import draggable from 'vuedraggable';

@Component({
	components: {
		draggable,
	},
})
export default class Doc extends Vue {
	public list1: any = [
		{ name: 'John', id: 1 },
		{ name: 'Joao', id: 2 },
		{ name: 'Jean', id: 3 },
		{ name: 'Gerard', id: 4 },
	];
	public list2: any = [
		{ name: 'Juan', id: 5 },
		{ name: 'Edgard', id: 6 },
		{ name: 'Johnson', id: 7 },
    ];
    
    public log(evt: any) {
        window.console.log(evt);
    }
}
