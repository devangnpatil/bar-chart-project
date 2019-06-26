<template>
    <div class="form-wrapper">
        <form class="bar-chart-form">
            <div class="input-wrapper">
                <label for="Height">Enter Height</label>
                <input type="number" name="height" v-model="height"  value="" min="0" max="100"/>
                <span> %</span>
            </div>
            <div class="input-wrapper">
                <label for="width">Enter Width</label>
                <input type="number" name="width" v-model="width" value="" min="0" max="100" />
                <span> %</span>
            </div>
            <div class="input-wrapper">
                <button type="button" class="btn-submit" @click="handleSubmit">Submit</button>
                <button type="button" @click.prevent="handleReset">Reset</button>
            </div>
        </form>
    </div>
</template>

<script>
import { bus } from '../main';
export default {
    data(){
        return{
                height:'',
                width:''
        }
    },
    methods:{
        handleSubmit: function(e){
            e.preventDefault();
            bus.$emit('chartDataChange', {
                height: this.height,
                width: this.width
            });
        },

        handleReset(e){
            this.height = '';
            this.width = '';
        }
    },
    mounted(){
        
    }
}
</script>

<style scoped>
    .form-wrapper{
        border:1px solid black;
    }

    .form-wrapper .input-wrapper{
        padding: 10px;
    }

    .form-wrapper .input-wrapper label{
        padding-right: 10px
    }

    .form-wrapper .input-wrapper input{
        width: 100px;
    }

    .form-wrapper .input-wrapper button{
        margin: 5px;
        padding: 5px;
    }

    .btn-submit{
        background: forestgreen;
        color: #fff;
    }
</style>
