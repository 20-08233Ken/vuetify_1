<template>
        <div>
            <v-toolbar class=" bg-red-darken-4 pa-2 w-100 py-3">
                        <v-btn class="ml-10">
                            <v-icon icon="mdi-menu"/>
                        </v-btn>
                        <img id ="univ-logo" src="../../assets/img/school.png" alt="">
                        <v-toolbar-title class="d-flex-row align-center">
                        
                        <router-link to="/" style="text-decoration: none;" class="text-white">
                            University MIS
                        </router-link>

                        </v-toolbar-title>
            </v-toolbar>
        </div>
</template>


<style>

    #univ-logo{
        width: 3%;
        height: auto;
    }

</style>