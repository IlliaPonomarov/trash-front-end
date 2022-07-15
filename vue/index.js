let app = Vue.createApp({

    data: function(){
        return{
            
        }
    },

  })

    app.component('login-form', {

       

        template: `
            <form @submit.prevent.stop="handleSubmit">
                <h2 style="margin: 10px">{{ title }}</h2>
                <custom-input v-model="email" :label="emailLabel" />
                <custom-input v-model="password" :label="passwordLabel" />
                <button>Log in</button>
            </form>
        `,

        components: ['custom-input'],

        data(){
            return{
                title: 'Login Form',
                email: '',
                password: '',
                emailLabel: 'Email',
                passwordLabel: 'Password'
            }
        },

        methods: {
            handleSubmit(){
               
                console.log(this.email)
                console.log(this.password) 
                    
                }
            }
        }

    )

    app.component( 'custom-input' , {
        props: ['label', 'modelValue'],

        template: `
        <label>{{ label }}</label>
        <input type="text" v-model="inputValue"/>
        `,

        computed: {
            inputValue: {
                get(){
                    return this.modelValue
                },

                set(value){
                    this.$emit('update:modelValue', value)
                }

            }
        },

        // data(){
        //     return{
        //         inputValue: ''
        //     }
        // }

    }
    )

app.mount('#app')


