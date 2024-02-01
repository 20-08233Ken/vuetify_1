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
          { title: 'Program', align: 'start', key: 'program' },
          { title: 'Exam Date', align: 'end', key: 'exam_date' },
          { title: 'Number of Takers', align: 'end', key: 'takers' },
          { title: 'Number of Passers', align: 'end', key: 'passers' },
         
        ],
        boats: [
          {
            program: 'Speedster',
            exam_date: 35,
            takers: 22,
            passers: 300000,
          
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

