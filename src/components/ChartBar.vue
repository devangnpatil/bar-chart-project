<template>
  <div class="chart-bar-wrapper" v-bind:style="setHeightWidthToChart">
    <div class="chart-bar-section">
        <div class="bar-section">
            <!-- <div v-tooltip.top=" `${bar.value}`" class="bar" v-for="bar in chartBarData" :style="{height: ((bar.value/calculateRange)*30) +'px', background: bar.color}"> -->
            <div :data-tooltip="`${bar.value}`" class="bar" v-for="bar in chartBarData" :style="{height: ((bar.value/calculateRange)*30) +'px', background: bar.color}">
              <span class="bar-name">{{bar.name}}</span>
            </div>
        </div>
        <div class="y-axis-section" v-bind:style="chartHeightObject">
          <div class="y-axis-line-data" v-for="range in rangeArray">
            <div class="y-axis-value" :data-range="range"></div>
            <span class="y-dash"></span>
          </div>
        </div>

    </div>
  </div>
</template>

<script>
import { bus } from '../main';
// import { VTooltip } from 'v-tooltip'
import { debuglog } from 'util';
export default {
  name: 'ChartBar',
  props: {
    chartBarData: Array
  },
  data(){
    return {
      rangeArray:[],
      calculateRange:'',
      chartHeightObject:{
        height:'300px'
      },
      setHeightWidthToChart:{
        height:'',
        width: ''
      }
    }
  },
  methods:{
    setYAxis(){
      let maxValue = Math.max.apply(null, this.chartBarData.map(function(item) { return item.value; }))
      let calculateRange = Math.floor(maxValue/10);
      this.calculateRange = calculateRange
      for(let i=0; i<=10; i++){
        this.rangeArray.push(calculateRange*i);
      }
    },
  },
  mounted(){
    this.setYAxis()
  },

  created(){
        bus.$on('chartDataChange', (data) => {
          this.setHeightWidthToChart.height = data.height + '%';
          this.setHeightWidthToChart.width = data.width + '%';
          this.chartHeightObject.height = data.height + '%';
          // this.calculateRange = data.height
          console.log(this.chartHeightObject.height);
        });

        
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
*{
  box-sizing: border-box;
}

.chart-bar-wrapper{
  width: 90%;
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
  font-size: 1em;
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

.bar-section::after{
    content: "Player Name";
    padding: 10px;
    position: absolute;
    bottom: -6em;
    font-weight:  bold;
}

.chart-bar-section::after{
    content: "Runs";
    padding: 10px;
    position: absolute;
    top: 50%;
    left: -7em;
    font-weight:  bold;
    transform: rotate(-90deg);
}

/* Tool tip */

[data-tooltip] {
  position: relative;
  z-index: 2;
  cursor: pointer;
}

/* Hide the tooltip content by default */
[data-tooltip]:before,
[data-tooltip]:after {
  visibility: hidden;
  opacity: 0;
  pointer-events: none;
}

/* Position tooltip above the element */
[data-tooltip]:before {
  position: absolute;
  bottom: 100%;
  left: 100%;
  margin-bottom: 5px;
  margin-left: -100px;
  padding: 7px;
  width: 100px;
  -webkit-border-radius: 3px;
  -moz-border-radius: 3px;
  border-radius: 3px;
  background-color: #000;
  background-color: hsla(0, 0%, 20%, 0.9);
  color: #fff;
  content: attr(data-tooltip);
  text-align: center;
  font-size: 14px;
  line-height: 1.2;
}

/* Triangle hack to make tooltip look like a speech bubble */
[data-tooltip]:after {
  position: absolute;
  bottom: 100%;
  left: 50%;
  margin-left: -5px;
  width: 0;
  border-top: 5px solid #000;
  border-top: 5px solid hsla(0, 0%, 20%, 0.9);
  border-right: 5px solid transparent;
  border-left: 5px solid transparent;
  content: " ";
  font-size: 0;
  line-height: 0;
}

/* Show tooltip content on hover */
[data-tooltip]:hover:before,
[data-tooltip]:hover:after {
  visibility: visible;
  -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)";
  filter: progid: DXImageTransform.Microsoft.Alpha(Opacity=100);
  opacity: 1;
}

</style>
