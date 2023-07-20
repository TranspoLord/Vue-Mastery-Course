const app = Vue.createApp({
    data() {
        return {
            userInput: '',
        };
    },
    methods: {
        showAlert() {
            alert('Alert!');
        },
        saveInput(event) {
            this.userInput = event.target.value;
        },
        confirmInput() {
            this.userInput = this.userInput;
        }
    }
});

app.mount('#assignment');