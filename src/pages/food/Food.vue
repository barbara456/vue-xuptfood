<template>
  <div>
    <food-header></food-header>
    <food-search :foods='foods'></food-search>
    <food-list
      :foods='foods'
      :hot='hotFoods'
      :letter='letter'
    ></food-list>
    <food-alphabet
      :foods="foods"
      @change="handleLetterChange"
    ></food-alphabet>
  </div>
</template>

<script>
import ApiUrl from '@/config/api_url'
import axios from 'axios'
import FoodHeader from'./components/Header'
import FoodSearch from'./components/Search'
import FoodList from'./components/List'
import FoodAlphabet from'./components/Alphabet'

export default {
  name: 'Food',
  components:{
    FoodHeader,
    FoodSearch,
    FoodList,
    FoodAlphabet
  },
  data(){
    return{
      foods:{},
      hotFoods:[],
      letter:''
    }
  },
  methods:{
    getFoodInfo(){
      axios.get(ApiUrl.api + 'food.json?food=')
      .then(this.handleGetFoodInfoSucc)
    },
    handleGetFoodInfoSucc(res){
      res=res.data
      if(res.ret&&res.data){
        const data=res.data
        this.foods=data.foods
        this.hotFoods=data.hotFoods
      }
    },
    handleLetterChange(letter){
      this.letter=letter
    }
  },
  mounted(){
    this.getFoodInfo()
  }
  }
</script>

<style lang="stylus" scoped>

</style>
