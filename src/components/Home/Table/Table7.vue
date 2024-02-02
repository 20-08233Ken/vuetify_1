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
         <b>Requiring Thesis/Dissertation</b>
        </th>
        <th class="text-left" id="t-header">
          <b>Not Requiring Thesis/Dissertation</b>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="item in ched_json"
        :key="item.name"
      >
        <td>{{ item.program}}</td>
        <td>{{ item.ched }}</td>
        <td>{{ item.neither }}</td>


 
      </tr>
    </tbody>
  </v-table>
</template>

<style>
    #t-header{
      background-color: #E1F5FE;
    }
</style>
<script>
  export default {
    data () {
      return {
        ched_json: [
        {
          program: 'Bachelor of Science in Mechanical Engineering',
          ched: 123,
          neither: 32,
  
        },
        {
          program: 'Bachelor of Electrical Engineering',
          ched: 90,
          neither: 20,
        },
        {
          program: 'Bachelor of Civil Engineering',
          ched: 110,
          neither: 25,
        },
        {
          program: 'Bachelor of Computer Engineering',
          ched: 80,
          neither: 15,
        },
        {
          program: 'Bachelor of Aerospace Engineering',
          ched: 100,
          neither: 30,
        },
      ],
      }
    },
  }
</script>