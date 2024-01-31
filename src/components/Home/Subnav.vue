<script setup>

    import Form1 from './Form/Form1.vue';
    import Form2 from './Form/Form2.vue';
    import Form3 from './Form/Form3.vue';
</script>   


<template>
        
        <div class="align-self-center" style="width: 90%">
                <h2 class="text-red-darken-3">Peformance Result</h2>
                <h3>Higher and Advanced Education</h3>
        </div>
        
        <div class="d-flex  justify-center w-100" style="gap:3.5rem;">
            <!-- 1 -->
            <router-link to ="/form1" id ="subnav">
                <v-card   
                    elevation = 5
                    class="py-4 px-2 rounded-0"
                    id ="subnav-card"
                    style="height: 5rem;"
                >
                    
                    <v-card-title class="text-subtitle-1 d-flex justify-center align-center mx-auto" style="line-height: normal;" >
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
    


        <div class="d-flex  justify-center w-100" style="gap:3.5rem;">
            
            <!-- 4 -->
            <router-link to ="/form3" id ="subnav" style="text-decoration: none;height: 5rem;">
                <v-card   
                    elevation = 5
                    class="py-4 px-2 rounded-0"
                    id ="subnav-card"
                    style="height: 5rem;"
                >
                    <v-card-title class="text-subtitle-1 d-flex justify-center align-center mx-auto text-center" style="line-height: normal;">
                        Undergraduate Programs with <br>Accreditation
                    </v-card-title>
                </v-card>
            </router-link>

            <!-- 5 -->
            <router-link to ="/form2" id ="subnav" style="text-decoration: none;height: 5rem;">
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
            <router-link to ="/form2" id ="subnav" style="text-decoration: none;height: 5rem;">
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

   

</style>