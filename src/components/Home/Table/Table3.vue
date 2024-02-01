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
          { title: 'CHED-IDENTIFIED / RDC-IDENTIFIED PRIORITY PROGRAMS', align: 'end', key: 'ched' },
          { title: 'Neither', align: 'end', key: 'neither' },
         
        ],
        boats: [
          {
            campus: 'Pablo Borbon',
            department: 'College of Engineering',
            program: "Bachelor of Science in Civil Engineer",
            ched: 212,
            neither:32
          
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