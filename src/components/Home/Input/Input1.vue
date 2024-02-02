
<template>
  <form id="form_input" class="w-100">

    <v-select
      label="Program" 
      v-model="selected"
      :items ="json_program"
      :item-props="itemProps"
      variant="outlined"
    
    ></v-select>

    <v-text-field v-model="exam_date" label="Exam Date" variant="outlined" type="date"></v-text-field>
    <v-text-field v-model="passers" label="Number of Takers" variant="outlined" type="number"></v-text-field>
    <v-text-field v-model="takers" label="Number of Passers" variant="outlined" type="number"></v-text-field>

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
            selected:'',
            exam_date:'',
            passers:null,
            takers:null,

            
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
            ]
        }
      },
      methods: {
         addData(){

        console.log(this.selected.program)
        console.log(this.exam_date)
        console.log(this.passers)
        console.log(this.takers)

        this.selected =''
        this.exam_date =''
        this.passers =''
        this.takers =''

      },
      itemProps(item){
        return{
          title:item.program
        }
      }
      }
    }
</script>