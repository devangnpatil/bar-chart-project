<template>
  <div class="chart-bar-wrapper">
    <div class="chart-bar-section">
        <div class="bar-section">
            <div v-tooltip.top=" `${bar.value}`" class="bar" v-for="bar in chartBarData" :style="{height: ((bar.value/calculateRange)*30) +'px', background: bar.color}">
              <span class="bar-name">{{bar.name}}</span>
            </div>
        </div>
        <div class="y-axis-section" :style="{height:'300px'}">
          <div class="y-axis-line-data" v-for="range in rangeArray">
            <div class="y-axis-value" :data-range="range"></div>
            <span class="y-dash"></span>
          </div>
        </div>

    </div>
  </div>
</template>

<script>

import { VTooltip } from 'v-tooltip'

export default {
  name: 'ChartBar',
  props: {
    chartBarData: Array
  },
  data(){
    return {
      rangeArray:[],
      maxHeight: '',
      calculateRange:''
    }
  },
  computed:{
    setBarHeight: function(){
    }
  },
  methods:{
    setYAxis(){
      let maxValue = Math.max.apply(Math, this.chartBarData.map(function(item) { return item.value; }))
      let calculateRange = Math.floor(maxValue/10);
      this.calculateRange = calculateRange
      for(let i=0; i<=10; i++){
        this.rangeArray.push(calculateRange*i);
      }
    },
  },
  mounted(){
    this.setYAxis()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
*{
  box-sizing: border-box;
}

.chart-bar-wrapper{
  width: 100%;
  max-height: 500px;
  margin: 20px auto;
  border: 1px solid black;
  background: lightgray;
}

.chart-bar-section{
  /* padding: 30px;
  margin:30px; */
  margin: 3em;
  border-left: 1px solid black;
  border-bottom: 1px solid black;
  position: relative;
}

.bar-section{
  display: flex;
  /* flex-direction: column; */
  justify-content: space-around;
  align-items: flex-end;
  height: 300px;
  max-height: 300px;
}

.bar{
  border:1px solid black;
  border-bottom: none;
  margin: 0 10px;
  width: 10%;
  position:  relative;
  box-sizing: border-box;
}

/* .bar-name-section{
  position: relative;
} */

.bar-name{
  position: absolute;
  bottom: -1em;
  margin: -1em;
  font-size: 0.5em;
}

.y-axis-section{
  display: flex;
  flex-direction: column-reverse;
  text-align: left;
  position: absolute;
  bottom: 0;
  left: -2em;
  justify-content: space-between;
}

.y-axis-line-data{
  border-top: 1px solid black;
  font-size: 1em;
  position: relative;
}

.y-axis-value{
  position: absolute;
  top: -10px;
  left: -6px;
  
}

.y-axis-value::after{
  content:attr(data-range)
}

.y-dash{
  position: absolute;
  border-top: 1px solid black;
  padding: 5px;
  right: -36px
}

/* .y-axis-line-data::after{
  content: 'True'
} */

</style>
