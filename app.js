const app = Vue.createApp({
    template: '',
    data() {
        return {
            firstName: 'John',
            lastName: 'Doe',
            email: 'john@doe.com',
            gender: 'male',
            phone: '0100000000',
            address: '123 Easy Street',
            picture: 'https://randomuser.me/api/portraits/men/10.jpg',
        }
    },
    methods: {
        async getUser(){
            const data = await fetch('https://randomuser.me/api/')
            const {results} = await data.json();
            // console.log(results[0].location.street);
            this.firstName = results[0].name.first;
            this.lastName = results[0].name.last;
            this.email = results[0].email;
            this.gender = results[0].gender;
            this.picture = results[0].picture.large;
            this.phone = results[0].phone;
            this.address = results[0].location.street.number+' '+results[0].location.street.name;
        }
    }
})

app.mount('#app')