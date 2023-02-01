import { createStore } from "vuex";

const store = createStore({
  state: {
    token: null,
    user: null,

    
    clients: [],
    payments:[],
    schools:[],
    students:[],
    voters:[],

    
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    },
    setToken(state, token) {
      state.token = token;
    },
    removeToken(state) {
      state.token = null;
    },
    removeUser(state) {
      state.user = null;
    },
    
    setSchools(state, schools) {
      state.schools = schools;
    },
    setStudents(state, students) {
      state.students = students;
    },
    setVoters(state,voters){
      state.voters = voters

    },
    setClients(state, clients) {
      state.clients = clients;
    },
    setPayments(state, payments) {
      state.payments = payments;
    },
    


   
  },
  actions: {
    clearToken(context) {
      context.commit("removeToken");
    },
    clearUser(context) {
      context.commit("removeUser");
    },
    addToken(context) {
      context.commit("setToken");
    },

    async LoadStudents(context) {
      const url = `http://localhost:5000/get/students`;

      const response = await fetch(url, {
        mode: "cors",
        // credentials: "include",
        headers: {
          "Access-Control-Allow-Origin": true,
        },
      });
      const responseData = await response.json();
      if (!response.ok) {
        //
      }
      const students = [];
      for (const key in responseData) {
        const student = {
          id: key,
          student_name: responseData[key].student_name,
          parent_name: responseData[key].parent_name,
          phone_number: responseData[key].phone_number,
          school_name: responseData[key].school_name,
          admission_number: responseData[key].admission_number,
          id_number: responseData[key].id_number,
          tracking_code: responseData[key].tracking_code,
          Ward: responseData[key].Ward,
          school_level: responseData[key].school_level,
          needy_status: responseData[key].needy_status,
          reg_date: responseData[key].reg_date,
          class: responseData[key].student_class,
          
        };
        students.push(student);
      }
      context.commit("setStudents", students);
    },
    async LoadVoters(context) {
      const url = `http://localhost:5000/get/voters`;

      const response = await fetch(url, {
        mode: "cors",
        // credentials: "include",
        headers: {
          "Access-Control-Allow-Origin": true,
        },
      });
      const responseData = await response.json();
      if (!response.ok) {
        //
      }
      const voters = [];
      for (const key in responseData) {
        const voter = {
          id: key,
          id_number: responseData[key].id_number,
          names: responseData[key].names,
          ward: responseData[key].ward,
          polling_station: responseData[key].polling_station,
          admission_number: responseData[key].admission_number,
         
          
        };
        voters.push(voter);
      }
      context.commit("setVoters", voters);
    },

    async getStudents(context) {
      const url = `http://localhost:5000/get/students/:code`;

      const response = await fetch(url, {
        mode: "cors",
        // credentials: "include",
        headers: {
          "Access-Control-Allow-Origin": true,
        },
      });
      const responseData = await response.json();
      if (!response.ok) {
        //
      }
      const trips = [];
      for (const key in responseData) {
        const trip = {
          id: key,
          vehicle: responseData[key].vehicle,
          route: responseData[key].route,      
          weight: responseData[key].weight,
          date: responseData[key].date,
          amount: responseData[key].amount
        };
        trips.push(trip);
      }
      context.commit("VehicleTrips", trips);
    },

    async studentForms(context) {
      const url = `http://localhost:5000/get/students/:code`;

      const response = await fetch(url, {
        mode: "cors",
        // credentials: "include",
        headers: {
          "Access-Control-Allow-Origin": true,
        },
      });
      const responseData = await response.json();
      if (!response.ok) {
        //
      }
      const deductions = [];
      for (const key in responseData) {
        const deduction = {
          id: key,
          vehicle: responseData[key].vehicle,
          type: responseData[key].type,      
          money: responseData[key].money,
          notes: responseData[key].notes,
          date: responseData[key].date
        };
        deductions.push(deduction);
      }
      context.commit("Vehicledeductions", deductions);
    },
    
    async LoadSchools(context) {
      const url = `http://localhost:5000/get/schools`;

      const response = await fetch(url, {
        mode: "cors",
        // credentials: "include",
        headers: {
          "Access-Control-Allow-Origin": true,
        },
      });
      const responseData = await response.json();
      if (!response.ok) {
        //
      }
      const courts = [];
      for (const key in responseData) {
        const court = {
          id: key,
          name: responseData[key].name,
          area: responseData[key].area,
          reg_date: responseData[key].reg_date,
        };
        courts.push(court);
      }
      context.commit("setCourts", courts);
    },
    

    async ClientPayments(context) {
      const url = `http://localhost:5000/get/payments`;

      const response = await fetch(url, {
        mode: "cors",
        // credentials: "include",
        headers: {
          "Access-Control-Allow-Origin": true,
        },
      });
      const responseData = await response.json();
      if (!response.ok) {
        //
      }
      const payments = [];
      for (const key in responseData) {
        const payment = {
          id: key,
          client_Id: responseData[key].client_id,
          
          payment_date: responseData[key].payment_date,
          amount: responseData[key].amount,
        };
        payments.push(payment);
      }
      context.commit("setClientpayments", payments);
    },
    async LoadPayments(context) {
      const url = `http://localhost:5000/get/payments`;

      const response = await fetch(url, {
        mode: "cors",
        // credentials: "include",
        headers: {
          "Access-Control-Allow-Origin": true,
        },
      });
      const responseData = await response.json();
      if (!response.ok) {
        //
      }
      console.log(responseData)
      const payments = [];
      for (const key in responseData) {
        const payment = {
          id: key,
          client_id: responseData[key].client_id,
          name: responseData[key].name,
          amount: responseData[key].amount,
          date: responseData[key].payment_date,
        };
        payments.push(payment);
      }
      context.commit("setPayments", payments);
    },
  },
  getters: {
    isLoggedIn() {
      return !!localStorage.getItem("token");
    },

    clients: (state) => state.clients,
    revenues: (state) => state.revenues,
    allstudents: (state) => state.students,
    payments: (state) => state.payments,
    voters: (state)=>state.voters,
    // ClientPayments: (state) => state.clientPayments,
    clientPaymentGetter: (state) => (client)=>state.clientpaymentz.filter(pay=>pay.client_id==client),
    PaymentGetter: (state) => (client)=>state.payments.filter(pay=>pay.client_id==client),
    clientName: (state) => (client)=> state.clients.filter(pay=>pay.client_id==client),
    // clientName: (state) => (client)=> state.clients.filter(pay=pay.client_id=client)
    formGetter: (state) => (code)=>state.students.filter(snumber=>snumber.tracking_code==code),
    studentGetter: (state) => (sid)=>state.students.filter(snumber=>snumber.id_number==sid),
    voterGetter: (state)=>(vid)=>state.voters.filter(vnumber=>vnumber.id_number==vid),

  },


  //
});
export default store;
