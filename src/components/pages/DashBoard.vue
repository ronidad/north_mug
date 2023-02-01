<template>
<the-headersider></the-headersider>

<h4>Bursary managment system</h4>

<br>
<h3>Number of applicatnts:</h3>
<h3>Total approvals:</h3>
<h3>Pending cases:</h3>
<h3>Rejected cases</h3>







  
</template>
<script>

</script>

<style scoped>
.dashboard {
    background-color:azure;
    box-sizing: border-box;
    padding: 3px;
    display: grid;
    grid-template-rows: 1fr 4fr;
    grid-template-columns: 1fr 2fr 4fr;
    grid-gap: 0ch;
    height: 100vh;
    
    grid-template-areas: 
    /* "theader theader theader" */
    "sidebar sheader sheader"
    "sidebar smain smain"

    ;
    


}
.sidebar {
    grid-area: sidebar;
    background-color:rgb(113, 180, 47);

}
.sheader {
    grid-area: sheader;
    background-color: rgb(221, 216, 209);
}
.smain {
    grid-area: main;
    background-color:beige;
}
.theader {
    grid-area: theader;
    grid-area: theader;
}

</style>