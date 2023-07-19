const app = Vue.createApp({
    data() {  // data contains all the data that we want to use in this component
        return {
            courseGoalA: 'Finish the course and learn Vue!',
            courseGoalB: '<h2>Master Vue and build amazing apps!</h2>',
            vueLink: 'https://vuejs.org/',

            // Showing how to create vars
            var1: 'var1',
            var2: 2,
            var3: true
        };
    },
    methods: { // methods contains all the functions that we want to use in this component
        outputGoal() {
            const randomNumber = Math.random();
            if (randomNumber < 0.5) {
                return this.courseGoalA;
            } else {
                return this.courseGoalB;
            }
        }

    }


});

app.mount('#user-goal')