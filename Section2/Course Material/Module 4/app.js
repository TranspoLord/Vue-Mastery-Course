const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      fullname: ''
    };
  },
  computed: {
    fullname() { // computed properties are called when data is called
      if (this.name === '') {
        return '';
      }
      return this.name + ' ' + 'Lastname';
    }
  },
  watch: { // watchers are called everytime the data values change
    // name() {
    //     this.fullname = this.name + ' ' + 'Lastname';
    // }
    counter(value) {
      if (value > 50) {
        const that = this;
        setTimeout(function() {
          that.counter = 0;
        }, 2000);
      }
    }

  },
  methods: { // methods are called like functions
    outputFullname() {
      if (this.name === '') {
        return '';
      }
      return this.name + ' ' + 'Lastname';
    },
    setName(event) {
      this.name = event.target.value;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    },
    resetInput() {
      this.name = '';
    }
  }
});

app.mount('#events');
