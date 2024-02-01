import { createRouter,createWebHistory } from "vue-router";

// import LoginView from '../views/LoginView.vue'
// import HomeView from '../views/HomeView.vue'
// import Form1View from '../components/forms/form1.vue'

import Home from "../views/Home.vue"
import Form1 from "../components/Home/Form/Form1.vue"
import Form2 from '../components/Home/Form/Form2.vue'
import Form3 from '../components/Home/Form/Form3.vue'
import Form4 from '../components/Home/Form/Form4.vue'
import Form5 from '../components/Home/Form/Form5.vue'
import Form6 from '../components/Home/Form/Form6.vue'
import Form7 from '../components/Home/Form/Form7.vue'
import Login from "../views/Login.vue"

const router = createRouter ({

    history: createWebHistory(import.meta.env.BASE_URL),

    routes:[
        {
            path:'/',
            name:'home',
            component:Home

        }
        ,
        {
            path:'/form1',
            name:'form1',
            component:Form1

        },
        {
            path:'/form2',
            name:'form2',
            component:Form2
        },
        {
            path:'/form3',
            name:'form3',
            component:Form3
        },
        {
            path:'/form4',
            name:'form4',
            component:Form4
        }
        ,
        {
            path:'/form5',
            name:'form5',
            component:Form5
        }
        ,
        {
            path:'/form6',
            name:'form6',
            component:Form6
        } ,
        {
            path:'/form7',
            name:'form7',
            component:Form7
        }
        // {
        //     path:'/form1',
        //     name:'form',
        //     component:Form1View

        // }
    ]

})

export default router