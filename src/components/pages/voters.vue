<template>
  <the-headersider></the-headersider>

<h3>Enter parent/student ID number or names to check if he/she is a registered voter </h3>  
<input type="text" v-model="search" placeholder="Search Voter" />

<table class="table table-striped table-bordered">
  <thead>
    <tr>
      <th><h3>ID number</h3></th>
      <th><h3>Voter name</h3></th>
      <th><h3>Ward</h3></th>
      <th><h3>Polling station</h3></th>
      
    </tr>
  </thead>
  <tbody>
    <tr v-for="voter in filteredVoters" :key="voter.id">
      <td>{{ voter.id_number }}</td>
      <td>{{ voter.names }}</td>
      <td>{{ voter.ward }}</td>
      <td>{{ voter.polling_station}}</td>
    
      <!-- <td> <router-link :to="`/student/:{student.id_number}`" class="btn btnn-primary">Details</router-link> </td> -->
    </tr>
  </tbody>
</table>
<router-link to="/">Go back</router-link>
</template>
<script>
export default {
data() {
  return {
    search: "",
  };
},
computed: {
  students() {
    return this.$store.getters.allstudents;
  },
  voters(){
      return this.$store.getters.voters;
  },
  filteredStudents() {
    return this.students
      .filter(
        (student) =>
          student.student_name
            .toLowerCase()
            .includes(this.search.toLowerCase()) |
          student.admission_number
            .toLowerCase()
            .includes(this.search.toLowerCase()) |
          student.id_number
            .toLowerCase()
            .includes(this.search.toLowerCase()) |
          student.phone_number.includes(this.search) |
          student.parent_name
            .toLowerCase()
            .includes(this.search.toLowerCase())
      )
      .slice(0, 10);
  },
  filteredVoters() {
    return this.voters.filter((voter)=>voter.names.toLowerCase().includes(this.search.toLowerCase())|voter.id_number.toString().includes(this.search.toLowerCase())).slice(0,10)
      
     
  },
},
created() {
  this.$store.dispatch("LoadVoters");
},
};
</script>
<style scoped>
input {
/* display: block; */
width: 350px;
margin: 20px auto;
padding: 10px 45px;
background: white no-repeat 15px center;
background-size: 15px 15px;
font-size: 16px;
border: none;
border-radius: 5px;
box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
  rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
}
</style>