<script setup>


    import Header from '../header.vue';
    import Input1 from '../Input/Input1.vue';
    import Table1 from '../Table/Table1.vue';
    import Subnav from '../Subnav.vue';
</script>

<template>

    <div id="form1-main" class="w-100">
        <Header> </Header>

        <v-card
            id ="home-card"
            class="d-flex flex-column mx-auto pe-2 mt-8 pt-10 pb-15 "
            elevation="2"
        >
        <div class ="d-flex flex-column w-100 align-center" style="gap: 2rem;" >
            <Subnav/>
        </div>
        </v-card>

        <v-card
            id ="form1-card"
            class="d-flex flex-column align-center mx-auto  mt-8 py-15 px-15"
            elevation="2"
        >

            <v-card-title class="font-weight-bold text-red-darken-4"> Passed first-time licensure exam takers</v-card-title>
            <v-card-subtitle class="text-grey-darken-3"> College of Engineering</v-card-subtitle>
            <v-card-subtitle class="text-grey-darken-3"> Firstname M. Lastname</v-card-subtitle>

            <v-card class="rounded-0 mt-8 ml-4 " elevation = "0" color ="red-darken-4" id ="form1-monitor-title">
                <v-card-title class="text-body-1 ml-4"> Monitoring</v-card-title>
            </v-card>


            <!-- Monitor -->

            <div class="d-flex ml-4 mt-8" id ="form1-monitor">
                    <span class="w-50">
                        <h3 class="text-body-1 font-weight-bold text-center text-green-accent-4">
                            Submitted
                        </h3>

                        <v-card-text>
                            <v-icon color="green-accent-3 mr-4">mdi-check-circle</v-icon>
                            Bachelor of Science in Computer Engineer
                        </v-card-text>
                    </span>

                    <span class="w-50">
                        <h3 class="text-body-1 font-weight-bold text-center text-red-darken-3">
                            Pending
                        </h3>

                        <v-card-text>
                            <v-icon color="red-darken-4 mr-4">mdi-window-close</v-icon>
                            Bachelor of Science in Computer Engineer
                        </v-card-text>
                    </span>
            </div>


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
                            <Input1/>  
                        </div>
                         
                    </v-window-item>

                    <v-window-item value="two">
                        <div class="d-flex flex-column align-center w-100 mt-8">
                            <Table1/>  
                        </div>
                    </v-window-item>
                </v-window>
                </v-card-text>
            </v-card>


            <v-card class="rounded-0 mt-8 ml-4 " elevation = "0" color ="red-darken-4" id ="form1-monitor-title">
                <v-card-title class="text-body-1 ml-4"> Submit</v-card-title>
            </v-card>

           
                <div class="d-flex flex-column mt-8 ml-4 align-center mt-8" id ="form1-monitor-title" >
                    <Vueform class="w-100" >
                        <FileElement
                        name="file"
                        label="Upload Support File"
                        :drop="true"
                        />
                        
                    <ButtonElement
                        name="submit"
                        button-label="Submit"
                        :submits="true"
                        align="right"
                        :full="true"
                    
                    />
                    </Vueform>         
                </div>
  

        </v-card>
    </div>
   
    
</template>

<style scoped>
    #form1-card{
        width: 60%;
    }

    #form1-monitor-title,
    #form1-monitor,
    #form-table-title
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