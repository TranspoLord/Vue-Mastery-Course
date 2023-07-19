const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
    };
  },
  methods: {
    increment() {
      this.counter++;
    },
    deincrement() {
      this.counter--;
    },
    setName(event) {
      this.name = event.target.value;
    },
    submitForm() {
      alert('Submitted!');
    },
  }
});

app.mount('#events');
