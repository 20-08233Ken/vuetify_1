<style >
    @import url('../styles/home.css');
</style>

<script setup>
   import Header from "../components/Home/Header.vue"
   import Subnav2 from "../components/Home/Subnav2.vue";

</script>

<template>
    <div id = "home-main">
        <Header></Header>

        <v-card
            class="d-flex flex-column mx-auto pe-2 mt-8 py-15 px-15"
            id ="nav-card"
        >

         <Subnav2/>

        </v-card>

        <v-card
            id ="home-card"
            class="d-flex flex-column mx-auto pe-2 mt-8 py-15 px-15"
            elevation="2"
        >

        <v-card-title class="font-weight-bold text-red-darken-4"> Batangas State University Alangilan</v-card-title>
        <v-card-subtitle class="text-grey-darken-3"> College of Engineering</v-card-subtitle>
        <v-card-subtitle class="text-grey-darken-3"> Dean</v-card-subtitle>

            <v-card
                elevation="0"
                class="w-75 mt-8 "
            >
                <div class="d-flex w-100 flex-column">
                    <v-card-title class="d-flex align-center text-body-1 mb-4 text-green-accent-4 font-weight-bold" > 
                        <v-icon color="green-accent-3 mr-4">mdi-check-circle</v-icon>
                        Passed first-time licensure exam takers
                    </v-card-title>

                    <span id = "bttn-cont" >
                        
                        <v-btn id ="add-bttn" class="text-body-2 rounded-0 text-grey-darken-3" color="grey-lighten-2" elevation="0"> 
                            <router-link to = "/form1" style="text-decoration: none;" class="text-grey-darken-3"> Add </router-link>
                        </v-btn>
                        
                        <p class="text-grey-darken-1"> Record of first-time licensure exam takers that pass the licensure exams </p>
                    </span>
                    <span id = "bttn-cont">
                        <v-btn id ="add-bttn" class="text-body-2 rounded-0 text-grey-darken-3" color="grey-lighten-2" elevation="0"> View </v-btn>
                        <p class="text-grey-darken-1"> View uploaded record </p>
                    </span>
                    <span id = "bttn-cont">
                        <v-btn id ="add-bttn" class="text-body-2 rounded-0 text-grey-darken-3" color="grey-lighten-2" elevation="0"> Update </v-btn>
                        <p class="text-grey-darken-1"> Update uploaded record </p>
                    </span>

                    <hr>
                </div>

                <div class="d-flex w-100 flex-column">
                    <v-card-title class="d-flex align-center text-body-1 mb-4 text-green-accent-4 font-weight-bold" > 
                        <v-icon color="green-accent-3 mr-4">mdi-check-circle</v-icon>
                        Employed Graduates
                    </v-card-title>

                    <span id = "bttn-cont" >
                        <v-btn id ="add-bttn" class="text-body-2 rounded-0" color="grey-lighten-2" elevation="0"> Add </v-btn>
                        <p class="text-grey-darken-1"> Record of graduates that are employed </p>
                    </span>
                    <span id = "bttn-cont">
                        <v-btn id ="add-bttn" class="text-body-2 rounded-0" color="grey-lighten-2" elevation="0"> View </v-btn>
                        <p class="text-grey-darken-1"> View uploaded record </p>
                    </span>
                    <span id = "bttn-cont">
                        <v-btn id ="add-bttn" class="text-body-2 rounded-0" color="grey-lighten-2" elevation="0"> Update </v-btn>
                        <p class="text-grey-darken-1">Update uploaded record </p>
                    </span>

                    <hr>
                </div>

                <div class="d-flex w-100 flex-column">
                    <v-card-title class="d-flex align-center text-body-1 mb-4 text-green-accent-4 font-weight-bold" > 
                        <v-icon color="green-accent-3 mr-4">mdi-check-circle</v-icon>
                        CHED-identified and RDC-identified priority programs
                    </v-card-title>

                    <span id = "bttn-cont" >
                        <v-btn id ="add-bttn" class="text-body-2 rounded-0" color="grey-lighten-2" elevation="0"> Add </v-btn>
                        <p class="text-grey-darken-1"> Record of undergraduate students enrolled in CHED-identified and RDC-identified priority programs </p>
                    </span>
                    <span id = "bttn-cont">
                        <v-btn id ="add-bttn" class="text-body-2 rounded-0" color="grey-lighten-2" elevation="0"> View </v-btn>
                        <p class="text-grey-darken-1"> View uploaded record </p>
                    </span>
                    <span id = "bttn-cont">
                        <v-btn id ="add-bttn" class="text-body-2 rounded-0" color="grey-lighten-2" elevation="0"> Update </v-btn>
                        <p class="text-grey-darken-1"> Update uploaded record </p>
                    </span>

                    <hr>
                </div>

                <div class="d-flex w-100 flex-column">
                    <v-card-title class="d-flex align-center text-body-1 mb-4 text-green-accent-4 font-weight-bold" > 
                        <v-icon color="green-accent-3 mr-4">mdi-check-circle</v-icon>
                        Undergraduate Programs with Accreditation
                    </v-card-title>

                    <span id = "bttn-cont" >
                        <v-btn id ="add-bttn" class="text-body-2 rounded-0" color="grey-lighten-2" elevation="0"> Add </v-btn>
                        <p class="text-grey-darken-1"> Record of undergraduate programs with accreditation </p>
                    </span>
                    <span id = "bttn-cont">
                        <v-btn id ="add-bttn" class="text-body-2 rounded-0" color="grey-lighten-2" elevation="0"> View </v-btn>
                        <p class="text-grey-darken-1">View uploaded record </p>
                    </span>
                    <span id = "bttn-cont">
                        <v-btn id ="add-bttn" class="text-body-2 rounded-0" color="grey-lighten-2" elevation="0"> Update </v-btn>
                        <p class="text-grey-darken-1"> Update uploaded record </p>
                    </span>

                    <hr>
                </div>

                <div class="d-flex w-100 flex-column">
                    <v-card-title class="d-flex align-center text-body-1 mb-4 text-green-accent-4 font-weight-bold" > 
                        <v-icon color="green-accent-3 mr-4">mdi-check-circle</v-icon>
                        Graduate School Faculty Research Work
                    </v-card-title>

                    <span id = "bttn-cont" >
                        <v-btn id ="add-bttn" class="text-body-2 rounded-0" color="grey-lighten-2" elevation="0"> Add </v-btn>
                        <p class="text-grey-darken-1">Record of graduate school faculty engaged in research work </p>
                    </span>
                    <span id = "bttn-cont">
                        <v-btn id ="add-bttn" class="text-body-2 rounded-0" color="grey-lighten-2" elevation="0"> View </v-btn>
                        <p class="text-grey-darken-1"> View uploaded record </p>
                    </span>
                    <span id = "bttn-cont">
                        <v-btn id ="add-bttn" class="text-body-2 rounded-0" color="grey-lighten-2" elevation="0"> Update </v-btn>
                        <p class="text-grey-darken-1"> Update uploaded record </p>
                    </span>

                    <hr>
                </div>

                <div class="d-flex w-100 flex-column">
                    <v-card-title class="d-flex align-center text-body-1 mb-4 text-green-accent-4 font-weight-bold" > 
                        <v-icon color="green-accent-3 mr-4">mdi-check-circle</v-icon>
                        Graduate Programs with Accreditation
                    </v-card-title>

                    <span id = "bttn-cont" >
                        <v-btn id ="add-bttn" class="text-body-2 rounded-0" color="grey-lighten-2" elevation="0"> Add </v-btn>
                        <p class="text-grey-darken-1">Record of graduate school faculty engaged in research work </p>
                    </span>
                    <span id = "bttn-cont">
                        <v-btn id ="add-bttn" class="text-body-2 rounded-0" color="grey-lighten-2" elevation="0"> View </v-btn>
                        <p class="text-grey-darken-1"> View uploaded record </p>
                    </span>
                    <span id = "bttn-cont">
                        <v-btn id ="add-bttn" class="text-body-2 rounded-0" color="grey-lighten-2" elevation="0"> Update </v-btn>
                        <p class="text-grey-darken-1"> Update uploaded record </p>
                    </span>

                    <hr>
                </div>

                <div class="d-flex w-100 flex-column">
                    <v-card-title class="d-flex align-center text-body-1 mb-4 text-green-accent-4 font-weight-bold" > 
                        <v-icon color="green-accent-3 mr-4">mdi-check-circle</v-icon>
                        Graduate Students Enrolled in Research Degree Program
                    </v-card-title>

                    <span id = "bttn-cont" >
                        <v-btn id ="add-bttn" class="text-body-2 rounded-0" color="grey-lighten-2" elevation="0"> Add </v-btn>
                        <p class="text-grey-darken-1">Record of graduate school faculty engaged in research work </p>
                    </span>
                    <span id = "bttn-cont">
                        <v-btn id ="add-bttn" class="text-body-2 rounded-0" color="grey-lighten-2" elevation="0"> View </v-btn>
                        <p class="text-grey-darken-1"> View uploaded record </p>
                    </span>
                    <span id = "bttn-cont">
                        <v-btn id ="add-bttn" class="text-body-2 rounded-0" color="grey-lighten-2" elevation="0"> Update </v-btn>
                        <p class="text-grey-darken-1"> Update uploaded record </p>
                    </span>

                    <hr>
                </div>

                
            </v-card>





        </v-card>
    </div>
    
</template>


<style>
    #home-card,
    #nav-card{
        width: 60%;
    }
    #sub-header{
        display: flex;
        justify-content: space-around;
        width: 100%;
    }

    #bttn-cont{
        display: flex;
        align-items: center;
        gap: 1rem;
        margin-bottom: 1rem;
        margin-left: 3.4rem;
    }
    #add-bttn, #view-bttn, #update-bttn{
        width: 15%;
    }

    #bttn-cont > p {
        
        font-size: 14px;
    }
    hr{
        margin: 2rem 0;
  
    }


</style>