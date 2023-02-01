<template>
  <base-card>
    <h2>Apply CDF</h2>
    <form @submit.prevent="createClient">
      <div class="form-control">
        <label for="name"> Student Name </label>
        <input type="text" id="name" v-model="formData.student_name" />
      </div>
      <div class="form-control">
        <label for="name"> Student Id Number/Nemis number </label>
        <input type="text" id="name" v-model="formData.id_number" />
      </div>
      <div class="form-control">
        <label for="name"> Parent name </label>
        <input type="text" id="name" v-model="formData.parent_name" />
      </div>

      <div class="form-control">
        <label for="name"> Phone number </label>
        <input type="text" id="name" v-model="formData.phone_number" />
      </div>

      <div class="form-control">
        <div class="field">
          <label class="label">Ward</label>
          <div class="select">
            <select v-model="formData.ward">
              <option disabled value="">Please select one</option>
              <option>Itibo</option>
              <option>Ekerenyo</option>
              <option>Magwagwa</option>
              <option>Bokeira</option>
              <option>Bomwagamo</option>
            </select>
          </div>
        </div>
      </div>

      <div class="form-control">
        <label for="name"> School Name </label>
        <input type="text" id="name" v-model="formData.school_name" />
      </div>
      <div class="form-control">
        <div class="field">
          <label class="label">School Level</label>

          <section>

          <p>School Level:{{ formData.school_level }}</p>
    <input v-model="formData.school_level" 
           type="radio" 
           value="Boarding Secondary" 
           name="bs" />
    <label for="bs">Boarding Secondary</label>
    <input v-model="formData.school_level" 
           type="radio" 
           value="College" 
           name="al" />
    <label for="c">College</label>
    <input v-model="formData.school_level"
             type="radio"
             value="University"
             name="u" />
    <label for="u">University</label>
          </section>

          <!-- <div class="select">
            <select v-model="formData.school_level">
              <option disabled value="">Please select one</option>
              <option>Secondary</option>
              <option>College</option>
              <option>University</option>
              
            </select>
          </div> -->
        </div>
      </div>
      <div class="form-control">
        <label for="name"> Admision number </label>
        <input type="text" id="name" v-model="formData.admission_number" />
      </div>
      <div class="form-control">
        <label for="name"> student_class </label>
        <input type="text" id="name" v-model="formData.student_class" />
      </div>

      <div class="form-control">
        <div class="field">
          <label class="label">Needy Status</label>
          <div class="select">
            <select v-model="formData.needy_status">
              <option disabled value="">Please select one</option>
              <option>Has both parents</option>
              <option>Has one parent</option>
              <option>Total orphan</option>
            </select>
          </div>
        </div>
      </div>

      <!-- <div class="form-control">
          <label for="registered_by"> reg by</label>
          <input type="text"  id="registered_by" v-model="formData.registered_by" />
        </div> -->

      <base-button>Submit</base-button>
    </form>
  </base-card>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      user: "",

      formData: {
        student_name: "",
        parent_name: "",
        phone_number: "",
        ward: "",
        school_name: "",
        admission_number: "",
        student_class:"",
        needy_status: "",
        id_number: "",
      },
    };
  },
  computed: {
    courts() {
      return this.$store.getters.allCourts;
    },
  },
  created() {
    this.$store.dispatch("LoadCourts");
  },
  //  mounted() {
  // let user = localStorage.getItem('user');
  // this.user = JSON.parse(user)

  // },
  methods: {
    async createClient() {
      const response = await axios.post(
        "http://localhost:5000/student/registration/",
        this.formData
      );
      console.log(response);

      this.$router.replace("/");
      console.log(this.formData);
    },
  },
};
</script>

<style scoped>
.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input[type="checkbox"] + label {
  font-weight: normal;
  display: inline;
  margin: 0 0 0 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  border: 1px solid #ccc;
  font: inherit;
}

input:focus,
textarea:focus {
  background-color: #f0e6fd;
  outline: none;
  border-color: #3d008d;
}

input[type="checkbox"] {
  display: inline;
  width: auto;
  border: none;
}

input[type="checkbox"]:focus {
  outline: #3d008d solid 1px;
}

h3 {
  margin: 0.5rem 0;
  font-size: 1rem;
}

.invalid label {
  color: red;
}

.invalid input,
.invalid textarea {
  border: 1px solid red;
}
</style>

<script></script>
