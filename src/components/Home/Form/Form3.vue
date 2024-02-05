<script setup>

// import Header from "../Home/Header.vue"
// import Header from "../../Home/header.vue"
// import Input3 from "../../Home/Input3.vue"
// import Table2 from "../Table2.vue";
// import Subnav from "../../Subnav.vue"

    import Header from "../Header.vue"
    import Input3 from "../Input/Input3.vue";
    import Table3 from "../Table/Table3.vue";
    import Subnav from "../Subnav.vue";
    import Subnav2 from '../Subnav2.vue';
</script>

<template>

    <div id="form1-main" class="w-100">
        <Header> </Header>

        <v-card
            class="d-flex flex-column mx-auto  mt-8 py-15 px-15"
            id ="nav-card"
        >
            <Subnav2/>
       
        </v-card>

        <v-card
            id ="form1-card"
            class="d-flex flex-column align-center mx-auto  mt-8 py-15 px-15"
            elevation="2"
        >

            <v-card-title class="font-weight-bold text-red-darken-4"> CHED-identified and RDC-identified priority programs </v-card-title>
            <v-card-subtitle class="text-grey-darken-3"> College of Engineering</v-card-subtitle>
            <v-card-subtitle class="text-grey-darken-3"> Firstname M. Lastname</v-card-subtitle>

  



            <!-- Form and Table -->
            <v-card
                class=" ml-4 mt-8 rounded-0 "
                id ="form-table-title"
                elevation="0"
            >
                <v-tabs
                v-model="tab"
                bg-color="red-darken-4"
                >
                <v-tab value="one">Form</v-tab>
                <v-tab value="two">Table</v-tab>
                <!-- <v-tab value="three">Item Three</v-tab> -->
                </v-tabs>

                <v-card-text>
                    <v-window v-model="tab">
                        <v-window-item value="one">
                            <div class="d-flex flex-column align-center w-100 mt-8">
                                <Input3/>  
                            </div>
                            
                        </v-window-item>

                        <v-window-item value="two">
                            <div class="d-flex flex-column align-center w-100 mt-8">
                                <Table3/>  
                            </div>
                        </v-window-item>
                    </v-window>
                </v-card-text>
            </v-card>
            

           
  

        </v-card>
    </div>
   
    
</template>

<style scoped>
    #form1-card{
        width: 60%;
    }

    #form-table-title,
    #form1-monitor-title
    {
        width: 80%;
        /* border: 1px solid red; */
    }

    span{
        /* border: 1px solid red; */
    }

    #form-table-title{

    }
</style>
<script>
  export default {
    data: () => ({
      tab: null,
    }),
  }
</script>