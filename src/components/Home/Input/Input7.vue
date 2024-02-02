
<template>
  <form id="form_input" class="w-100">


    <v-text-field v-model="json_campus[0].campus" disabled label="Campus" variant="outlined" type="text"></v-text-field>
    <v-text-field v-model="json_department[0].department" disabled label="Department" variant="outlined" type="text"></v-text-field>

    <v-select
      label="Program" 
      v-model="selected_prog"
      :items="json_program"
      :item-props="itemProps"
      variant="outlined"
    
    ></v-select>

    <h3 class="my-4 text-red-accent-4">Enrolled Students</h3>
  
    <v-text-field v-model="req_thesis" label="Requiring Thesis/Dissertation" variant="outlined" type="text"></v-text-field>
    <v-text-field v-model="nreq_thesis" label="Not Requiring Thesis/Dissertation" variant="outlined" type="text"></v-text-field>


   
 
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
    const selected = ref('')
    const exam_date = ref('')
    const passers = ref()
    const takers = ref()




    export default{

      data(){
        return{
            selected_camp:'',
            selected_dep:'',
            selected_prog:'',
            req_thesis:null,
            nreq_thesis:null,

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
        console.log(this.req_thesis)
        console.log(this.nreq_thesis)

        this.selected_camp =''
        this.selected_dep =''
        this.selected_prog =''
        this.req_thesis =''
        this.nreq_thesis =''
      },
        itemProps(item){
          return{
            title:item.program
          }
        }
      }
    }
</script>