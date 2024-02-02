
<template>
  <form id="form_input" class="w-100">

    <!-- <v-select
      label="Campus" 
      v-model="selected_camp"
      :items="['Bachelor of Science in Computer Engineer', 'Bachelor of Science in Computer Engineer', 'Bachelor of Science in Computer Engineer']"
      variant="outlined"
      disabled
    
    ></v-select> -->
    <v-text-field v-model="json_campus[0].campus" label="" variant="outlined" type="text" disabled></v-text-field>
    <v-text-field v-model="json_department[0].department" label="" variant="outlined" type="text" disabled></v-text-field>

    <!-- <v-select
      label="Department" 
      v-model="selected_dep"
      :items="['Bachelor of Science in Computer Engineer', 'Bachelor of Science in Computer Engineer', 'Bachelor of Science in Computer Engineer']"
      variant="outlined"
    
    ></v-select> -->

    <v-select
      label="Program" 
      v-model="selected_prog"
      :items="json_program"
      :item-props="itemProps"
      variant="outlined"
    
    ></v-select>

    <v-text-field v-model="lname" label="Firstname" variant="outlined" type="text"></v-text-field>
    <v-text-field v-model="fname" label="Lastname" variant="outlined" type="text"></v-text-field>
    <v-text-field v-model="mname" label="Middle Initial" variant="outlined" type="text"></v-text-field>

    <v-select
      label="Status" 
      v-model="status"
      :items="['Employed', 'Not Employed', 'Not Tracked']"
      variant="outlined"
    ></v-select>

    <v-text-field v-model="business" label="Company's Business / Type of Business" variant="outlined" type="text"></v-text-field>
 
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
          fname:'',
          lname:'',
          mname:'',
          status:'',
          business:'',

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
        console.log(this.selected_prog)
        console.log(this.fname)
        console.log(this.lname)
        console.log(this.mname)
        console.log(this.status)
        console.log(this.business)

        this.selected_camp = ''
        this.selected_dep = ''
        this.selected_prog = ''
        this.fname = ''
        this.lname = ''
       this.mname = ''
        this.status = ''
        this.business = ''

      },
      itemProps(item){
        return{
          title:item.program
        }
      }
      }
    }
</script>