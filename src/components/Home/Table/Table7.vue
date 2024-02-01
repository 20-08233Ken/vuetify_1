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
          { title: 'Requiring Thesis/Dissertation', align: 'end', key: 'req_thesis' },
          { title: 'Not Requiring Thesis/Dissertation', align: 'end', key: 'nreq_thesis' },
         
        ],
        boats: [
          {
            campus: 'Pablo Borbon',
            department: 'College of Engineering',
            program: "Bachelor of Science in Civil Engineer",
            req_thesis:32,
            nreq_thesis:32
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