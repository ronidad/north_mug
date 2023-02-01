// import { Router } from "express";
import { createRouter, createWebHistory } from "vue-router";

// import pages
import LoginUser from "./components/pages/LoginUser.vue";
import RegisterUser from "./components/pages/RegisterUser.vue";
import HomePage from "./components/pages/HomePage.vue";
import UserProfile from "./components/pages/UserProfile.vue";
import DashBoard from "./components/pages/DashBoard"
import TestHome from "./components/pages/TestHome"


import schools from "./components/pages/schools"
import students from "./components/pages/students"
import ApplyCdf from "./components/pages/applyCdf"

import Reports from "./components/pages/reports"

import  ClientPayments from "./components/pages/ClientPayments"
import StudentForms from "./components/pages/StudentForms"
import StudentDetails from "./components/pages/StudentDetails"
import Voters from "./components/pages/voters"




const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: HomePage },
    { path: "/login", component: LoginUser },
    { path: "/register", component: RegisterUser },
    { path: "/profile", component: UserProfile },
    {path: "/dashboard", component:DashBoard},
    {path: "/apps", component:DashBoard},
    {path: "/test",component:TestHome},
    {path: "/reports",component:Reports},
   
    
    
    
  
    {path: "/schools", component: schools},
    {path: "/students", component: students},
    {path: "/student/:id", component: StudentDetails},
    {path: "/client/payments/:client", component: ClientPayments},
    {path: "/forms", component: StudentForms},
    {path:"/apply/cdf", component:ApplyCdf},
    {path: "/voters",component: Voters},
   
    

  ],
});

export default router;
