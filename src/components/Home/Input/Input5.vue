
<template>
  <form id="form_input" class="w-100">

    <!-- <v-select
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

    <v-text-field v-model="json_campus[0].campus" disabled label="Campus" variant="outlined" type="text"></v-text-field>
    <v-text-field v-model="json_department[0].department" disabled label="Department" variant="outlined" type="text"></v-text-field>


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


    <v-text-field v-model="p_position" label="PLANTILLA Position" variant="outlined" type="text"></v-text-field>

    <v-select
      label="Faculty Engagement" 
      v-model="faculty_eng"
      :items="json_engagement"
      :item-props="engagementProps"
      variant="outlined"
    
    ></v-select>

    <v-text-field v-model="duration" label="Duration" variant="outlined" type="text"></v-text-field>



   
 
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
            p_position:'',
            faculty_eng:'',
            duration:'',
            json_engagement:[
                {
                  index: "A",
                  engagement:"Pursuing advanced research degree program (Ph.D.)"
                },
                {
                  index: "B",
                  engagement:"Actively pursuing research within the last (3) years"
                },
                {
                  index: "C",
                  engagement:"Producing technologies for commercialization or livelihood improvement"
                },
                {
                  index: "D",
                  engagement:"Research work resulted in an extension program"
                },
                {
                  index: "E",
                  engagement:"None of the above"
                },
            ],
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
        console.log(this.p_position)
        console.log(this.faculty_eng.index)
        console.log(this.duration)

        this.selected_camp =''
        this.selected_dep =''
        this.selected_prog =''
        this.p_position =''
        this.faculty_eng = ''
        this.duration =''
      },
      itemProps(item){
        return{
          title:item.program
        }
      },
      engagementProps(item){
        return{
          title:item.index,
          subtitle:item.engagement
        }
      }
      }
    }
</script>