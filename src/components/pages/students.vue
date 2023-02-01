<template>
  <div>
  <the-headersider></the-headersider>

  <input type="text" v-model="search" placeholder="Search students" />

  <table class="table table-striped table-bordered">
    <thead>
      <tr>
        <th><h3>ID/Nemis number</h3></th>
        <th><h3>Student name</h3></th>
        <th><h3>Parent name</h3></th>
        <th><h3>phone number</h3></th>
        <th><h3>Admission number</h3></th>

        <th><h3>School</h3></th>
        <th><h3>Show details</h3></th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="student in filteredStudents" :key="student.id">
        <td>{{ student.id_number }}</td>
        <td>{{ student.student_name }}</td>
        <td>{{ student.parent_name }}</td>
        <td>{{ student.phone_number }}</td>
        <td>{{ student.admission_number }}</td>

        <td>{{ student.school_name }}</td>
        <td><router-link :to="'/student/' + student.id_number"> Show details</router-link></td>
        <!-- <td> <router-link :to="`/student/:{student.id_number}`" class="btn btnn-primary">Details</router-link> </td> -->
      </tr>
    </tbody>
  </table>
  <router-link to="/">Go back</router-link>
</div>
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
  },
  created() {
    this.$store.dispatch("LoadStudents");
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