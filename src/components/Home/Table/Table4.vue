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
         <b>Year of Initial Operation</b>
        </th>
        <th class="text-left" id="t-header">
          <b>Status</b>
        </th>
        <th class="text-left" id="t-header">
          <b>Period of validity<br> To</b>
        </th>
        <th class="text-left" id="t-header">
          <b>Period of validity<br> From</b>
        </th>
        <th class="text-left" id="t-header">
          <b>Remarks</b>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="item in undergrad_accr"
        :key="item.name"
      >
        <td>{{ item.program}}</td>
        <td>{{ item.in_operation }}</td>
        <td>{{ item.status }}</td>
        <td>{{ item.to_valid }}</td>
        <td>{{ item.from_valid }}</td>
        <td>{{ item.remarks }}</td>


 
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
        undergrad_accr: [
        {
          program: 'Bachelor of Science in Mechanical Engineering',
          in_operation: 123,
          status: "Level 1",
          from_valid:"2022-04-12",
          to_valid: "2023-01-14",
          remarks:"Accredited"
        },
        {
          program: 'Bachelor of Science in Mechanical Engineering',
          in_operation: 123,
          status: "Level 1",
          from_valid:"2022-04-12",
          to_valid: "2023-01-14",
          remarks:"Accredited"
        },
        {
          program: 'Bachelor of Science in Mechanical Engineering',
          in_operation: 123,
          status: "Level 1",
          from_valid:"2022-04-12",
          to_valid: "2023-01-14",
          remarks:"Accredited"
        },
        {
          program: 'Bachelor of Science in Mechanical Engineering',
          in_operation: 123,
          status: "Level 1",
          from_valid:"2022-04-12",
          to_valid: "2023-01-14",
          remarks:"Accredited"
        },
        {
          program: 'Bachelor of Science in Mechanical Engineering',
          in_operation: 123,
          status: "Level 1",
          from_valid:"2022-04-12",
          to_valid: "2023-01-14",
          remarks:"Accredited"
        },
        {
          program: 'Bachelor of Science in Mechanical Engineering',
          in_operation: 123,
          status: "Level 1",
          from_valid:"2022-04-12",
          to_valid: "2023-01-14",
          remarks:"Accredited"
        },
        {
          program: 'Bachelor of Science in Mechanical Engineering',
          in_operation: 123,
          status: "Level 1",
          from_valid:"2022-04-12",
          to_valid: "2023-01-14",
          remarks:"Accredited"
        },
        {
          program: 'Bachelor of Science in Mechanical Engineering',
          in_operation: 123,
          status: "Level 1",
          from_valid:"2022-04-12",
          to_valid: "2023-01-14",
          remarks:"Accredited"
        },
        {
          program: 'Bachelor of Science in Mechanical Engineering',
          in_operation: 123,
          status: "Level 1",
          from_valid:"2022-04-12",
          to_valid: "2023-01-14",
          remarks:"Accredited"
        },
        {
          program: 'Bachelor of Science in Mechanical Engineering',
          in_operation: 123,
          status: "Level 1",
          from_valid:"2022-04-12",
          to_valid: "2023-01-14",
          remarks:"Accredited"
        },
      ],
      }
    },
  }
</script>