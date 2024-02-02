<template>
  <v-table
    fixed-header
    height="600px"
  >
    <thead >
      <tr>
        <th class="text-left" id="t-header">
          <b>Name</b>
        </th>
        <th class="text-left" id="t-header">
         <b>Program</b>
        </th>
        <th class="text-left" id="t-header">
          <b>Status</b>
        </th>
        <th class="text-left" id="t-header">
          <b>Company's Name</b>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="item in employed_grad"
        :key="item.name"
      >
        <td>{{ item.fname +" "+item.mname+" "+item.lname }}</td>
        <td>{{ item.program }}</td>
        <td>{{ item.status }}</td>
        <td>{{ item.company }}</td>

 
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
        employed_grad: [
        {
          program: 'Bachelor of Science in Mechanical Engineering',
          fname: 'Ken',
          lname: 'Rolloque',
          mname: 'L.',
          status: 'Employed',
          company: 'Company A',
        },
        {
          program: 'Bachelor of Electrical Engineering',
          fname: 'Jessica',
          lname: 'Smith',
          mname: 'M.',
          status: 'Employed',
          company: 'Company B',
        },
        {
          program: 'Bachelor of Civil Engineering',
          fname: 'Alex',
          lname: 'Johnson',
          mname: 'R.',
          status: 'Employed',
          company: 'Company C',
        },
        {
          program: 'Bachelor of Computer Engineering',
          fname: 'Ryan',
          lname: 'Garcia',
          mname: 'S.',
          status: 'Employed',
          company: 'Company D',
        },
        {
          program: 'Bachelor of Aerospace Engineering',
          fname: 'Emily',
          lname: 'Nguyen',
          mname: 'T.',
          status: 'Employed',
          company: 'Company E',
        },
        {
          program: 'Bachelor of Computer Engineering',
          fname: 'Ryan',
          lname: 'Garcia',
          mname: 'S.',
          status: 'Employed',
          company: 'Company D',
        },
        {
          program: 'Bachelor of Aerospace Engineering',
          fname: 'Emily',
          lname: 'Nguyen',
          mname: 'T.',
          status: 'Employed',
          company: 'Company E',
        },
        {
          program: 'Bachelor of Computer Engineering',
          fname: 'Ryan',
          lname: 'Garcia',
          mname: 'S.',
          status: 'Employed',
          company: 'Company D',
        },
        {
          program: 'Bachelor of Aerospace Engineering',
          fname: 'Emily',
          lname: 'Nguyen',
          mname: 'T.',
          status: 'Employed',
          company: 'Company E',
        },        {
          program: 'Bachelor of Computer Engineering',
          fname: 'Ryan',
          lname: 'Garcia',
          mname: 'S.',
          status: 'Employed',
          company: 'Company D',
        },
        {
          program: 'Bachelor of Aerospace Engineering',
          fname: 'Emily',
          lname: 'Nguyen',
          mname: 'T.',
          status: 'Employed',
          company: 'Company E',
        },
      ],
      }
    },
  }
</script>