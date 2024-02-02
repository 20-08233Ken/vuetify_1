<template>
  <div style="display: flex; width: 100%;height: 40rem;">
      <v-table class="w-100">
        <thead>
          <tr 
            style="background-color: #E1F5FE; font-size: 15px; "
            
          >
            <th class="text-center">
              <b>Program</b>
            </th>
            <th class="text-center">
              <b>Exam Date</b>
            </th>
            <th class="text-center">
              <b>No. of Passers</b>
            </th>
            <th class="text-center">
              <b>No. of Takers</b>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="item in exam_takers"
            :key="item.program"
            id ="table-row"
          >
            <td >{{ item.program }}</td>
            <td >{{ item.exam_date }}</td>
            <td>{{ item.takers }}</td>
            <td>{{ item.passers }}</td>
          </tr>
        </tbody>
      </v-table>
  </div>
</template>

<style scoped>

    #table-row > td,
    {
        padding: 1rem 0;
        
    }
    #table-row > td:nth-child(1){
      padding-left: 1em;
    }

    #table-row > td:nth-child(2){
      width: 20%;
      text-align: center;
    }
    #table-row > td:nth-child(3),
    #table-row > td:nth-child(4)
    {
      text-align: center;
      width: 10%;
    }
</style>

<script>
  export default {
    data () {
      return {
        exam_takers: [
        {
          program: 'Bachelor of Science in Mechanical Engineering',
          exam_date: '20-02-2023',
          takers: 180,
          passers: 100,
        },
        {
          program: 'Bachelor of Electrical Engineering',
          exam_date: '18-03-2023',
          takers: 150,
          passers: 85,
        },
        {
          program: 'Bachelor of Civil Engineering',
          exam_date: '25-04-2023',
          takers: 220,
          passers: 150,
        },
        {
          program: 'Bachelor of Aerospace Engineering',
          exam_date: '12-05-2023',
          takers: 120,
          passers: 70,
        },
        {
          program: 'Bachelor of Computer Engineering',
          exam_date: '08-06-2023',
          takers: 200,
          passers: 130,
        },
        {
          program: 'Bachelor of Computer Engineering',
          exam_date: '08-06-2023',
          takers: 200,
          passers: 130,
        },
        {
          program: 'Bachelor of Computer Engineering',
          exam_date: '08-06-2023',
          takers: 200,
          passers: 130,
        },
        {
          program: 'Bachelor of Computer Engineering',
          exam_date: '08-06-2023',
          takers: 200,
          passers: 130,
        },
      ],
      }
    },
  }
</script>