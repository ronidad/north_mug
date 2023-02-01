

<template>
    <div id="body">


        
  
        <body>
            
            <div class="bg-image" 
     style="background-image: url('https://mdbootstrap.com/img/new/slides/045.webp');
            height: 100vh">
	</div>
          <div id="body_img">
          <!-- <img src="../../assets/NMC.png" alt="North Mugirango CDF"> -->
        
        
      </div>
    </body>
      </div>
    </template>
  
  <script>
  
//   export default {
//     name: 'PageHome',
//     components: {
      
//     }
//   }
  </script>
  
  <style scoped>
  #body{
    width: 150vw; height: 100vw;
    background-color: #eaf8d0c9;
    position: fixed;
    margin-top: 59px; left: -250px;
    z-index: 999;
    justify-content: center;
    align-items: center;
  
  }
  
  #header_img{
    height: 100%; width: 35%;
    display: flex; justify-content: center; align-items: center;
  }
  #body_img > img{
    background-size: 70%;
    height: 60%;
    cursor: pointer;
  }
  
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@200&family=Roboto+Condensed:wght@300&display=swap');
  
  
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
  
  
  </style>
  