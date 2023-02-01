

<template>
  <div id="header">

      <header>
        <div id="header_img">
        <img src="../../assets/NMC.png" alt="North Mugirango CDF">
      
      <nav>
        <!-- <h1><router-link to="/">Roberms</router-link></h1> -->
        <ul> 
          <li v-if="isLoggedIn">
            <router-link to="/Dashboard">Dashboard</router-link>
          </li>
          <li v-else>
          <router-link to="/dashboard">Dashboard</router-link>
          
         
          <router-link to="/apply/cdf">Apply</router-link>
          
          </li>
          <li v-if="isLoggedIn">
            <base-button @click="handleLogout">logout</base-button>
         </li>
          <!-- <li v-if="isLoggedIn">
            <router-link to="/register">sign Uo</router-link>
          </li> -->
         
  
          <!-- <li v-if="isLoggedIn">
            <base-button @click="logout">logout</base-button>
          </li> -->
        </ul>
      </nav>
    </div>
    </header>
    </div>
  </template>

<script>

// export default {
//   name: 'PageHeader',
//   components: {
    
//   }
// }
</script>

<style scoped>
#header{
  width: 100vw; height: 60px;
  background-color: #F1F1F1;
  position: fixed;
  top: 1px; left: 0;
  z-index: 999;
  justify-content: center;
  align-items: center;

}
header a {
  text-decoration: none;
  /* color: #f391e3; */
  display: inline-block;
  padding: 0.75rem 1.5rem;
  border: 1px solid transparent;
}
#header_img{
  height: 100%; width: 35%;
  display: flex; justify-content: center; align-items: center;
}
#header_img > img{
  background-size: 50%;
  height: 60%;
  cursor: pointer;
}

@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@200&family=Roboto+Condensed:wght@300&display=swap');
#header_banner{
  position: fixed;
  margin-top: -35px;
  width: 100%; height: 35px;
  display: flex; justify-content: center; align-items: center;
  text-align: center;
  gap: 5px;
  background-color: black;
  color: white;
  font-family: 0.9em;
  font-family: 'Roboto Condensed', sans-serif;
}
#header_banner_bold{
  font-weight: bold;
  cursor: bold;
}

/* Slightly Resized Screen Styles */
@media screen and (max-width: 1200px) {
  #header_img{
    width: 40%;
  }
}

/* Half-Screen Styles */
@media screen and (max-width: 900px) {
  #header_img{
    width: 50%;
  }
}

/* Mobile Styles */
@media screen and (max-width: 768px) {
  #header_img{
    justify-content: flex-end;
    width: 55%;
  }
}
header ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

li {
  margin: 0 0.5rem;
}

</style>
