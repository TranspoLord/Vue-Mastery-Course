const app = Vue.createApp({
    data(){
        return {
            name: "Anthony",
            age: 27,
            img: "https://en.wikipedia.org/wiki/Waterfall#/media/File:Geli_Ali_Beg_Waterfall_2023.jpg"
        };
    },
    methods: {
        outputRandomNumber(){
            return Math.random();
        }
    }
});

app.mount('#assignment');