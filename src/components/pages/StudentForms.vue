<template>
    <the-headersider></the-headersider>
  
    <section>
       
      
      
      <base-card>
      <h4>User: {{}}</h4>
      <br>
     
      <table class="table table-striped table-bordered centre">
          <thead>
              <tr >
                  
                  <th><h3>Name</h3></th>
                  <th><h3>School</h3></th>
                  <th><h3>Registration Number</h3></th>
                  <th><h3>ward</h3></th>
              </tr>
              </thead> 
              <tbody>
                  <tr v-for="student in studentForm" :key="student.id">
                      <td>{{student.student_name}}</td>
                      <td>{{ student.school_name}}</td>
                      <td>{{ student.admission_number}}</td>
                      <td>{{ student.Ward}}</td>
                      
                  </tr>
              </tbody>
      </table>
      <br>
      Student details
      </base-card>
      
  
  
  <button @click="convert">Download form</button>
  
    </section>
  </template>
  
  <script>

  
  import jsPDF from "jspdf";
  
  export default {
      data(){
          return {
              revenues: null,
              deductions: null
          }
  
      },
    
    computed: {
     
      studentForm (){
          return this.$store.getters.formGetter(this.$route.query.tc)
          
  
      },
      sname(){
        return this.studentForm[0].student_name

      },
      pname(){
        return this.studentForm[0].parent_name

      },
      school(){
        return this.studentForm[0].school_name

      },
      Ward(){
        return this.studentForm[0].Ward

      },
      pnumber(){
        return this.studentForm[0].phone_number

      },
      anumber(){
        return this.studentForm[0].admission_number

      },
      snumber(){
        return this.studentForm[0].tracking_code

      },
      schlevel(){
        return this.studentForm[0].school_level

      },
      
  
  
    },
    created() {
      this.$store.dispatch('LoadStudents');  
      
  
      
      
    },
    methods: {
    convert() {

       var pdf = new jsPDF();
      

       const OctaImage = "data:image/png;base64,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"
        
 
        pdf.text('North Mugirango CDF application for ' + this.sname ,50,25);
        pdf.setFontSize(9);
        pdf.text('You have passed the first stage of application for CDF. Kindly verify the information and take the form to your chief and school admin',10,45 )
        pdf.setFontSize(12);
        pdf.text('Name: ' + this.sname ,10,60);
        pdf.text('Ward: ' + this.Ward +' Ward' ,10,70);
        pdf.text('Parent name: ' + this.pname ,10,80);
        pdf.text('Admission Number: ' + this.anumber ,10,90);
        pdf.text('Id number: ' + this.inumber ,10,100);
        
        pdf.text('School stamp and signature: .....................................................' ,10,130);

        pdf.setFontSize(15);
        // pdf.text(this.sname ,70,60);


        
        pdf.line(0,36,400,36);
        pdf.addImage(OctaImage,'PNG',0,0,50,35)
        

  





        

       
        // pdf.text(this.sname ,80,25);
        
        pdf.save(this.sname+'.pdf');
      }

  },
  

  
    
   
  
    
  
   
    
  };
  </script>
  
  <style scoped>
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  
  .controls {
    display: flex;
    justify-content: space-between;
  }
  
  </style>
  
  
  
  