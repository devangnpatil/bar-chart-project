<template>
  <div id="app">
    <div class="small-size">
     <ChartForm/>
    </div>
    <!-- <div class="small-size">
      <h3>Small Size</h3>
      <ChartBar :chartBarData="chartBar"/>
      <hr />
    </div>
    <div class="medium-size">
      <h3>Medium Size</h3>
      <ChartBar :chartBarData="chartBar"/>
      <hr />
    </div> -->
    <div class="large-size">
      <h3>Player Chart</h3>
      <ChartBar :chartBarData="chartBar"/>
      <!-- <hr /> -->
    </div>
  </div>
</template>

<script>
import ChartBar from './components/ChartBar.vue'
import ChartForm from './components/ChartForm'

export default {
  name: 'app',
  components: {
    ChartForm,
    ChartBar
  },
  data(){
    return { 
      chartBar:[
        // {name:'India', value:100, color:"red"},
        // {name:'Aus', value:200, color:"blue"},
        // {name:'China', value:300, color:"green"},
        // {name:'India', value:100, color:"red"},
        // {name:'Aus', value:200, color:"blue"},
        // {name:'China', value:300, color:"green"}        

        {name:"Rohit", value:200, color:"#DC143C"},
        {name:"Rahul", value:178, color:"#FF8C00"},
        {name:"Virat", value:120, color:"#90EE90"},
        {name:"Hardik", value:30, color:"#20B2AA"},
        {name:"Dhoni", value:25, color:"#87CEFA"},
        {name:"Jadhav", value:35, color:"#FFB6C1"},
        {name:"Vijay", value:19, color:"#FAFAD2"},
        {name:"Shami", value:7, color:"#FFDAB9"},
        {name:"Kuldeep", value:0, color:"#778899"},
        {name:"Chahal", value:13, color:"#808080"},
        {name:"Bumrah", value:0, color:"#FFE4E1"}

        // {name:'Ind', value:10000, color:"red"},
        // {name:'Aus', value:1000, color:"red"},
        // {name:'Nz', value:4000, color:"red"},
        // {name:'USA', value:30000, color:"red"},
        // {name:'China', value:40000, color:"red"},
        // {name:'Banlga', value:50000, color:"red"},
      ]
    }
  },
  methods:{
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.large-size{
  width: 100%;
  margin: 0 auto;
}

.medium-size{
  width: 75%;
  margin: 0 auto;
}

.small-size{
  width: 50%;
  margin: 0 auto;
}
</style>
