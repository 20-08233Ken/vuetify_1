<template>
    <h2 class="text-red-darken-4 mx-auto">Performance Result</h2>
    <p class="text-subtitle-1 text-grey-darken-1 mx-auto">Higher and Advance Education</p>

    <h4 class="mt-8 d-flex justify-center w-100 py-3 text-white" style="background-color: #B71C1C;"> Performance Indicator </h4>

    <v-card id = "subnav-1" elevation="0" class="ma-6 d-flex flex-wrap">
        
        <div class="d-flex flex-wrap">
            <router-link  to ="/form1" id ="subnav" class="d-flex mx-2" style="text-decoration: none;width: 30%;">
            <span class="d-flex align-center w-100">
                <img id ="img-1" src="../../assets/img/icons8-license-50.png" alt="">
                <h5 class="text-subtitle-1 font-weight-black text-red-darken-4" >HC Outcome Indicator 1 
                    <span class="w-100 d-flex flex-column"><p class="text-caption text-grey-darken-2" id ="sub-title">Percentage of first-time licensure exam-takers that pass the licensure exams   </p></span>
                </h5>
            </span>
            </router-link>

            <router-link  to ="/form2" id ="subnav" class="d-flex mx-2" style="text-decoration: none; ;width: 30%;">
            <span class="d-flex align-center w-100">
                <img id ="img-2" src="../../assets/img/icons8-graduate-64.png" alt="">
                <h5 class="text-subtitle-1 font-weight-black text-red-darken-4">HE Outcome Indicator 2 
                    <span class="w-100 d-flex flex-column"><p class="text-caption text-grey-darken-2" id ="sub-title"> Percentage of graduates (2 years prior)  that are employed</p></span>
                </h5>
            </span>
            </router-link>

            <!-- <router-link  to ="/form3" id ="subnav" class="d-flex mx-2" style="text-decoration: none;width: 30%;">
            <span class="d-flex align-center">
                <img id ="img-3" src="../../assets/img/icons8-college-50.png" alt="">
                <h5 class="text-subtitle-1 font-weight-black text-red-darken-4" >HE Output Indicator 1 
                    <span class="w-100 d-flex flex-column"><p class="text-caption text-grey-darken-2" id ="sub-title">Percentage of undergraduate student population enrolled in CHED-identified and RDC-identified priority programs</p></span>
                </h5>
            </span>
             </router-link> -->

             <router-link  to ="/form7" id ="subnav" class="d-flex mx-2" style="text-decoration: none;width: 30%;">
                    <span class="d-flex align-center w-100 ">
                        <img id ="img-7" src="../../assets/img/icons8-credit-50.png" alt="">
                        <h5 class="text-subtitle-1 font-weight-black text-red-darken-4" >HE Output Indicator 1 
                            <span class="w-100 d-flex flex-column"><p class="text-caption text-grey-darken-2" id ="sub-title"> Percentage of undergraduate student population enrolled in CHED-identified and RDC-identified priority programs</p></span>
                        </h5>
                    </span>
                </router-link>



                <router-link  to ="/form4" id ="subnav" class="d-flex mx-2" style="text-decoration: none;width: 30%;">
                <span class="d-flex align-center  w-100">
                    <img id ="img-4" src="../../assets/img/icons8-credit-50.png" alt="">
                    <h5 class="text-subtitle-1 font-weight-black text-red-darken-4" >HE Output Indicator 2 
                        <span class="w-100 d-flex flex-column"><p class="text-caption text-grey-darken-2" id ="sub-title">Percentage of undergraduate programs with accreditation</p></span>
                    </h5>
                </span>
                </router-link>

                <router-link  to ="/form5" id ="subnav" class="d-flex mx-2" style="text-decoration: none; ;width: 30%;">
                <span class="d-flex align-center  w-100">
                    <img id ="img-5" src="../../assets/img/icons8-research-50.png" alt="">
                    <h5 class="text-subtitle-1 font-weight-black text-red-darken-4">AE Outcome Indicator 1
                        <span class="w-100 d-flex flex-column"><p class="text-caption text-grey-darken-2" id ="sub-title">Percentage of graduate school faculty engaged in research work</p></span>
                    </h5>
                </span>
                </router-link>

                <router-link  to ="/form6" id ="subnav" class="d-flex mx-2" style="text-decoration: none;width: 30%;">
                <span class="d-flex align-center  w-100">
                    <img id ="img-6" src="../../assets/img/icons8-graduate-64.png" alt="">
                    <h5 class="text-subtitle-1 font-weight-black text-red-darken-4" >AE Output Indicator 1 
                        <span class="w-100 d-flex flex-column"><p class="text-caption text-grey-darken-2" id ="sub-title">Percentage of graduate students enrolled in research  degree programs</p></span>
                    </h5>
                </span>
                    </router-link>


                <router-link  to ="/form7" id ="subnav" class="d-flex mx-2" style="text-decoration: none;width: 30%;">
                    <span class="d-flex align-center  w-100">
                        <img id ="img-7" src="../../assets/img/icons8-credit-50.png" alt="">
                        <h5 class="text-subtitle-1 font-weight-black text-red-darken-4" >AE Output Indicator 2 
                            <span class="w-100 d-flex flex-column"><p class="text-caption text-grey-darken-2" id ="sub-title"> Percentage of accredited graduate programs</p></span>
                        </h5>
                    </span>
                </router-link>

            </div>

    </v-card>
</template>

<style scoped>
#sub-title{
    white-space: nowrap; 
     width: 50%; 
    overflow: hidden;
    text-overflow: ellipsis; 
  
}
#subnav{
    margin-top: 2rem;
}
#subnav:hover{
 
    background-color: aliceblue;
}
    #subnav-1 > div > span{
      
        width: 30%;
        height: 5rem;
        padding: 2rem 0;
        /* border: 1px solid red; */
    }

    #subnav > span > h5{
        width: 100%;
       
    }

    #img-1
    {
        width: 7%;
        margin: 0 .7rem;
    }

    
    #img-2
    {
        width: 7%;
        margin: 0 .7rem;
    }


    #img-3
    {
        width: 4%;
        margin: 0 .7rem;
    }
    #img-4
    {
        width: 8%; 
        margin: 0 .7rem;
    }
    #img-5
    {
        width: 7%;
        margin: 0 .7rem;
    }
    #img-6
    {
        width: 8%;
        margin: 0 .7rem;
    }
    #img-7
    {
        width: 8%;
        margin: 0 .7rem;
    }

    
</style>