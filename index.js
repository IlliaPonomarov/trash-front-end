let app = Vue.createApp({

    data: function(){
        return{
            greeting: 'Hello World!',
            isVisible: true,
            isVisible2: true
        }
    },


  })

    app.component('login-form', {
        template: `
            <form @submit.prevent.stop="handleSubmit">
                <h2 style="margin: 10px">{{ title }}</h2>
                <input type="email"/>
                <input type="password"/>
                <button>Log in</button>
            </form>
        `,

        data(){
            return{
                title: 'Login Form'
            }
        },

        methods:{
            handleSubmit(){
               
                console.log('submmited')
            }
        }


    })

app.mount('#app')


