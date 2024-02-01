<template>
    <v-data-table-virtual
    fixed-header
      :headers="headers"
      :items="virtualBoats"
      height="600"
      item-value="name"
    ></v-data-table-virtual>


  </template>
  <script>
  export default {
    data () {
      return {
        headers: [
          { title: 'Campus', align: 'start', key: 'campus' },
          { title: 'Department', align: 'end', key: 'department' },
          { title: 'Program', align: 'end', key: 'program' },
          { title: 'Year of Initilal Operation', align: 'end', key: 'initial_year' },
          { title: 'Status', align: 'end', key: 'status' },
          { title: 'Period of Validty (From)', align: 'end', key: 'f_validity' },
          { title: 'Period of Validty (To)', align: 'end', key: 't_validity' },
          { title: 'Remarks', align: 'end', key: 'remarks' },
         
        ],
        boats: [
          {
            campus: 'Pablo Borbon',
            department: 'College of Engineering',
            program: "Bachelor of Science in Civil Engineer",
            initial_year:"2024",
            status: "Level 3",
            f_validity:"01/14/2024",
            t_validity:"02/14/2024",
            remarks:"Accreditable"
          },
        ],
      }
    },

    computed: {
      virtualBoats () {
        return [...Array(10).keys()].map(i => {
          const boat = { ...this.boats[i % this.boats.length] }
          boat.name = `${boat.name} #${i}`
          return boat
        })
      },
    },
  }
</script>