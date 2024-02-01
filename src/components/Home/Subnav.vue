<script setup>


</script>   


<template>
        
        <div class="align-self-center" style="width: 90%">
                <h2 class="text-red-darken-3">Peformance Result</h2>
                <h3>Higher and Advanced Education</h3>
        </div>
        
        <div class="" id="card-cont">
            <!-- 1 -->
            <router-link to ="/form1" id ="subnav">
                <v-card   
                    elevation = 5
                    class="py-4 px-2 rounded-0"
                    id ="subnav-card"
                    style="height: 5rem;"

                >
                    
                    <v-card-title class="text-subtitle-1 d-flex justify-center align-center mx-auto" style="line-height: normal;" id="card-text" >
                        Passed first-time licensure <br>exam takers
                    </v-card-title>
                </v-card>
            </router-link>

            <!-- 2 -->
            <router-link to ="/form2" id ="subnav" style="text-decoration: none;height: 5rem;">
                <v-card   
                    elevation = 5
                    class="py-4 px-2 rounded-0"
                    id ="subnav-card"
                    style="height: 5rem;"
                >
                    <v-card-title class="text-subtitle-1 d-flex justify-center align-center mx-auto" style="line-height: normal;">
                        Employed Graduates
                    </v-card-title>
                </v-card>
            </router-link>
            
            <!-- 3 -->
            <router-link to ="/form3" id ="subnav" style="text-decoration: none;height: 5rem;">
                <v-card   
                    elevation = 5
                    class="py-4 px-2 rounded-0"
                    id ="subnav-card"
                    style="height: 5rem;"
                >
                    <v-card-title class="text-subtitle-1 d-flex justify-center align-center mx-auto text-center" style="line-height: normal;">
                        CHED-identified and RDC-<br>identified priority programs
                    </v-card-title>
                </v-card>
            </router-link>
        </div>
    


        <div class="d-flex  justify-center w-100" id="card-cont">
            
            <!-- 4 -->
            <router-link to ="/form4" id ="subnav" style="text-decoration: none;height: 5rem;">
                <v-card   
                    elevation = 5
                    class="py-4 px-2 rounded-0"
                    id ="subnav-card"
                    style="height: 5rem;"
                >
                    <v-card-title class="text-subtitle-1 d-flex justify-center align-center mx-auto text-center" style="line-height: normal;" >
                        Undergraduate Programs with <br>Accreditation
                    </v-card-title>
                </v-card>
            </router-link>

            <!-- 5 -->
            <router-link to ="/form5" id ="subnav" style="text-decoration: none;height: 5rem;">
                <v-card   
                    elevation = 5
                    class="py-4 px-2 rounded-0"
                    id ="subnav-card"
                    style="height: 5rem;"
                >
                    <v-card-title class="text-subtitle-1 d-flex justify-center align-center mx-auto text-center" style="line-height: normal;">
                        Graduate School Faculty <br>Research Work
                    </v-card-title>
                </v-card>
            </router-link>

            <!-- 6 -->
            <router-link to ="/form6" id ="subnav" style="text-decoration: none;height: 5rem;">
                <v-card   
                    elevation = 5
                    class="py-4 px-2 rounded-0"
                    id ="subnav-card"
                    style="height: 5rem;"
                >
                    <v-card-title class="text-subtitle-1 d-flex justify-center align-center mx-auto text-center" style="line-height: normal;">
                        Graduate Programs with <br>Accreditation
                    </v-card-title>
                </v-card>
            </router-link>
        </div>



        <div class="d-flex  justify-center w-100" style="gap:3.5rem;">    
            <!-- 7 -->
            <router-link to ="/form7" id ="subnav" >
                <v-card   
                    elevation = 5
                    class="py-4 px-2 rounded-0"
                    id ="subnav-card"
                    style="height: 5rem;"
                >
                    <v-card-title class="d-flex justify-center align-center mx-auto text-center" style="line-height: normal;" id="card-text" >
                        Graduate Students Enrolled in <br>Research Degree Program
                    </v-card-title>
                </v-card>
            </router-link>
        </div>

</template>


<style scoped>
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    #subnav{
        width: 25%;
        text-decoration: none;
        height: 5rem;
        border-left: 5px solid #94080D;
    }

    #subnav-card:hover{
        background-color: #94080D;
        color: white;
        
    }

    #card-cont{
        display: flex;
        justify-content: center;
        width: 100%;
        gap:1.5rem;
    }

    #card-text{
        display: flex;

        font-size: 16px;
    }

    @media only screen and (max-width: 1600px){
        /* #card-text{
            font-size: 12px;
        } */
        /* #card-cont{
            display: flex;
            width: 100%;
            flex-direction: column;
            align-items: center;
          
        }
        #subnav{
            width: 90%;
            

        } */


    }

   

</style>