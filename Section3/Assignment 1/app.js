const app = Vue.createApp({
    data() {
        return {
            enteredValue: '',
            tasks: [],
            showList: true
        };
    },
    computed: {
        buttonCaption() {
            return this.showList ? 'Hide List' : 'Show List';
        }
    },
    methods: {
        addTask() {
            this.tasks.push(this.enteredValue);
        },
        toggleList() {
            this.showList = !this.showList;
        }
    },

}).mount('#assignment');