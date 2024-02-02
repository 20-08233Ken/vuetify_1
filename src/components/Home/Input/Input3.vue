
<template>
  <form id="form_input" class="w-100">
<!-- 
    <v-select
      label="Campus" 
      v-model="selected_camp"
      :items="['Bachelor of Science in Computer Engineer', 'Bachelor of Science in Computer Engineer', 'Bachelor of Science in Computer Engineer']"
      variant="outlined"
    
    ></v-select>

    <v-select
      label="Department" 
      v-model="selected_dep"
      :items="['Bachelor of Science in Computer Engineer', 'Bachelor of Science in Computer Engineer', 'Bachelor of Science in Computer Engineer']"
      variant="outlined"
    
    ></v-select> -->

    <v-text-field v-model="json_campus[0].campus" label="Campus" variant="outlined" type="text" disabled></v-text-field>
    <v-text-field v-model="json_department[0].department" label="Campus" variant="outlined" type="text" disabled></v-text-field>
    <v-select
      label="Program" 
      v-model="selected_prog"
      :items="json_program"
      :item-props="itemProps"
      variant="outlined"
    
    ></v-select>

    <h3 class="my-4 text-red-accent-4">Number of Enrollments</h3>
  
    <v-text-field v-model="ched" label="CHED-IDENTIFIED /  RDC-IDENTIFIED PRIORITY PROGRAMS" variant="outlined" type="text"></v-text-field>
    <v-text-field v-model="neither" label="Neither" variant="outlined" type="text"></v-text-field>


   
 
  <v-file-input
    show-size
    counter
    multiple
    label="File input"
  ></v-file-input>


    <div class="d-flex w-100  justify-end" style=" gap: 1em;">
      <span class="w-25">     
        <v-btn
        block
        class="text-none text-subtitle-1"
        size="x-large"
        variant="flat"
        @click="addData"
      >
        Add
      </v-btn>
    </span>

    <span class="w-25"> 
      <v-btn
        block
        class="text-none text-subtitle-1"
        color="teal-accent-4"
        size="x-large"
        variant="flat"  
        disabled  
      >
        Submit
      </v-btn>
    </span>
    </div>


  </form>
</template>

<style scoped>

</style>

<script >
    import {ref} from "vue"

    export default{

      data(){
        return{
            selected_camp:'',
            selected_dep:'',
            selected_prog:'',
            ched:null,
            neither:null,

                    // Fetch From Database
          json_campus:[
              {
                campus:"Alangilan Campus"
              }
            ],
          
           json_department:[
              {
                department:"College of Engineering"
              }
            ],
            json_program:[
              {
                program:"Bachelor of Science in Ceramics Engineering"
              },
              {
                program:"Bachelor of Science in Chemical Engineering"
              },
              {
                program:"Bachelor of Science in Food Engineering"
              },
              {
                program:"Bachelor of Science in Metallurgical Engineering"
              },
            ],
   
        }
      },
      methods: {
         addData(){

        console.log(this.selected_camp)
        console.log(this.selected_dep)
        console.log(this.selected_prog.program)
        console.log(this.ched)
        console.log(this.neither)

        this.selected_camp =''
        this.selected_dep =''
        this.selected_prog =''
        this.ched =''
        this.neither =''

      },
        itemProps(item){
          return{
            title:item.program
          }
        }
      }
    }
</script>