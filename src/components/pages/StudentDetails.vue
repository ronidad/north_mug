<template>
  <the-headersider></the-headersider>
  <base-card>
    <h2>Student details</h2>

    <table>
      <tr>
        <td>
          <base-card>
            <b-table> <strong>Student Name: </strong> </b-table>
            <b-table>{{ studentdetails[0].student_name }} </b-table>
          </base-card>
        </td>
        <td>
          <base-card>
            <b-table> <strong>Parent Name: </strong> </b-table>
            <b-table>{{ studentdetails[0].parent_name }}</b-table>
          </base-card>
        </td>
        <td>
          <base-card>
            <b-table> <strong>Phone Number: </strong> </b-table>
            <b-table>{{ studentdetails[0].phone_number }} </b-table>
          </base-card>
        </td>
      </tr>
      <tr>
        <td>
          <base-card
            ><b-table> <strong>School: </strong> </b-table>
            <b-table>{{ studentdetails[0].school_name }} </b-table></base-card
          >
        </td>
        <td>
          <base-card
            ><b-table> <strong>Admission Number: </strong> </b-table>
            <b-table>{{
              studentdetails[0].admission_number
            }}</b-table></base-card
          >
        </td>
        <td>
          <base-card
            ><b-table> <strong>School Level: </strong> </b-table>
            <b-table>{{ studentdetails[0].school_level }}</b-table></base-card
          >
        </td>
      </tr>
      <tr>
        <td>
          <base-card
            ><b-table> <strong>Class: </strong> </b-table>
            <b-table>{{ studentdetails[0].class }} </b-table></base-card
          >
        </td>
        <td>
          <base-card
            ><b-table> <strong>Ward: </strong> </b-table>
            <b-table>{{ studentdetails[0].Ward }}</b-table></base-card
          >
        </td>
        <td>
          <base-card
            ><b-table> <strong>Needy status: </strong> </b-table>
            <b-table>{{ studentdetails[0].needy_status }}</b-table></base-card
          >
        </td>
      </tr>
    </table>

    <div>
      <b-table> <strong>remarks: </strong> </b-table>
      <div v-if="voterdetails.length">   <div>{{ voterdetails[0].names }} is a voter at
        {{ voterdetails[0].polling_station }} in {{ voterdetails[0].ward }} Ward</div></div>
      <div v-else>Voter details not found</div>
   
      <div class="form-control">
        <div class="field">
          <label class="label">Amount awarded</label>
          <div class="select">
            <select >
              <option disabled value="">Please select one</option>
              <option>5000</option>
              <option>7000</option>
              <option>10000</option>
              <option>12000</option>
              
            </select>
          </div>
          <div> <input type="textarea"> </div>
        </div>
      </div>

      <base-button>Approve Bursary</base-button>
    </div>
  </base-card>
</template>

<script>
export default {
  data() {
    return {
      student: "",
      student_id: "",
    };
  },
  created() {
    (this.student_id = this.$route.params.id),
      this.$store.dispatch("LoadStudents");
    this.$store.dispatch("LoadVoters");
  },
  computed: {
    studentdetails() {
      return this.$store.getters.studentGetter(this.student_id);
    },
    voterdetails() {
      return this.$store.getters.voterGetter(this.studentdetails[0].id_number|this.studentdetails[0].admission_number);
    },
  },
};
</script>
