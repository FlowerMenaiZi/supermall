<template>
  <div class="goods">
    <goods-lits-item v-for="item in goods" :goodsItem="item"/>
  </div>
</template>

<script>
  import GoodsLitsItem from "./GoodsLitsItem";
  export default {
    name: "GoodsList",
    components:{
      GoodsLitsItem
    },
    props:{
      goods:{
        type:Array,
        default(){
          return [];
        }
      }
    }
  }
</script>

<style scoped>
.goods{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
</style>
