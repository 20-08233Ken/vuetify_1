<template>
  <v-table
    fixed-header
    height="600px"
  >
    <thead >
      <tr>
        <th class="text-left" id="t-header">
          <b>Program</b>
        </th>
        <th class="text-left" id="t-header">
         <b>Name</b>
        </th>
        <th class="text-left" id="t-header">
          <b>PLANTILLA Position</b>
        </th>
        <th class="text-left" id="t-header">
          <b>Faculty Engagement</b>
        </th>
        <th class="text-left" id="t-header">
          <b>Duration</b>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="item in grad_research"
        :key="item.name"
      >
        <td>{{ item.program}}</td>
        <td>{{ item.fname + " " + item.mname + " "+item.lname }}</td>
        <td>{{ item.position }}</td>
        <td>{{ item.engagement }}</td>
        <td>{{ item.duration }}</td>
 
      </tr>
    </tbody>
  </v-table>
</template>

<style>
    #t-header{
      background-color: #E1F5FE;
      padding: 1em 1em;
    }
</style>
<script>
  export default {
    data () {
      return {
        grad_research: [
        {
          program: 'Bachelor of Science in Mechanical Engineering',
          fname: "Ken",
          mname: "L.",
          lname: "Rolloque",
          position: "Associate Director",
          engagement: "Level 1",
          duration:"23"
        },
        {
          program: 'Bachelor of Science in Mechanical Engineering',
          fname: "Ken",
          mname: "L.",
          lname: "Rolloque",
          position: "Associate Director",
          engagement: "Level 1",
          duration:"23"
        },
        {
          program: 'Bachelor of Science in Mechanical Engineering',
          fname: "Ken",
          mname: "L.",
          lname: "Rolloque",
          position: "Associate Director",
          engagement: "Level 1",
          duration:"23"
        },
        {
          program: 'Bachelor of Science in Mechanical Engineering',
          fname: "Ken",
          mname: "L.",
          lname: "Rolloque",
          position: "Associate Director",
          engagement: "Level 1",
          duration:"23"
        },
        {
          program: 'Bachelor of Science in Mechanical Engineering',
          fname: "Ken",
          mname: "L.",
          lname: "Rolloque",
          position: "Associate Director",
          engagement: "Level 1",
          duration:"23"
        },
        {
          program: 'Bachelor of Science in Mechanical Engineering',
          fname: "Ken",
          mname: "L.",
          lname: "Rolloque",
          position: "Associate Director",
          engagement: "Level 1",
          duration:"23"
        },
        {
          program: 'Bachelor of Science in Mechanical Engineering',
          fname: "Ken",
          mname: "L.",
          lname: "Rolloque",
          position: "Associate Director",
          engagement: "Level 1",
          duration:"23"
        },
        {
          program: 'Bachelor of Science in Mechanical Engineering',
          fname: "Ken",
          mname: "L.",
          lname: "Rolloque",
          position: "Associate Director",
          engagement: "Level 1",
          duration:"23"
        },
        {
          program: 'Bachelor of Science in Mechanical Engineering',
          fname: "Ken",
          mname: "L.",
          lname: "Rolloque",
          position: "Associate Director",
          engagement: "Level 1",
          duration:"23"
        },
        {
          program: 'Bachelor of Science in Mechanical Engineering',
          fname: "Ken",
          mname: "L.",
          lname: "Rolloque",
          position: "Associate Director",
          engagement: "Level 1",
          duration:"23"
        },
        {
          program: 'Bachelor of Science in Mechanical Engineering',
          fname: "Ken",
          mname: "L.",
          lname: "Rolloque",
          position: "Associate Director",
          engagement: "Level 1",
          duration:"23"
        },
      ],
      }
    },
  }
</script>