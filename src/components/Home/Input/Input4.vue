
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

    <v-text-field v-model="in_operation" label="Year of Initial Operation" variant="outlined" type="number"></v-text-field>
    <v-select
      label="Status" 
      v-model="status"
      :items="['Level 1','Level 2','Level 3','Level 4','Level 5 ']"
      variant="outlined"
    
    ></v-select>


    <h3 class="my-4 text-red-accent-4">Period of Validity</h3>
  
    <div class="d-flex w-100 justify-center" style="gap: 1em;">
      <span class="d-flex" style="width: 50%;">
        <v-text-field v-model="from_valid" label="From" variant="outlined" type="date"></v-text-field>
      </span>

      <span class="d-flex" style="width: 50%;">
        <v-text-field v-model="to_valid" label="To" variant="outlined" type="date"></v-text-field>
      </span>
    </div>

    <v-select
      label="Remarks" 
      v-model="remarks"
      :items="['Accreditable', 'Not Accreditable']"
      variant="outlined"
    
    ></v-select>




   
 
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
            in_operation:'',
            status:'',
            from_valid:'',
            to_valid:'',
            remarks:'',

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
        console.log(this.in_operation)
        console.log(this.status)
        console.log(this.from_valid)
        console.log(this.to_valid)
        console.log(this.remarks)


        this.selected_camp =''
        this.selected_dep =''
        this.selected_prog =''
        this.in_operation =''
        this.status =''
        this.from_valid =''
        this.to_valid =''
        this.remarks =''

      },
      itemProps(item){
        return{
          title:item.program
        }
      }
      }
    }
</script>