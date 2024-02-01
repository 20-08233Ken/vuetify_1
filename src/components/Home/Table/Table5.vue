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
          { title: 'PLANTILLA Position', align: 'end', key: 'p_position' },
          { title: 'Faculty Engagement', align: 'end', key: 'faculty_engagement' },
          { title: 'Duration', align: 'end', key: 'duration' },

         
        ],
        boats: [
          {
            campus: 'Pablo Borbon',
            department: 'College of Engineering',
            program: "Bachelor of Science in Civil Engineer",
            p_position:"Position",
            faculty_engagement: "Engagement",
            duration:"01/14/2024",

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