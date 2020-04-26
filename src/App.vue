<template>
<div id="#app">
    <app-Menu></app-Menu>
    <app-SideBar></app-SideBar>
    
    <div id="container">
      <appminMenu></appminMenu>
        <app-Card :num="1"></app-Card>
        <app-Card :num="2"></app-Card>
    </div>

</div>
</template>

<script>
import sidebar from './components/sideBar.vue'
import card from './components/card.vue'
import menu from './components/menu.vue'
import minMenu from './components/minMenu.vue'
export default {
components:{
  appSideBar:sidebar,
  appCard:card,
  appMenu:menu,
  appminMenu:minMenu,

}

};

</script>

<style>
#app{
  margin: 0;
  padding: 0;
  width:100%;
  height: 100%;
}
#container{
top:0;
left:0;
right: 0;
width: 100%;
margin-left:152px;
margin-top: 47px;




}

</style>
