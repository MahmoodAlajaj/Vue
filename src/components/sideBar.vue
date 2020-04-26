<template>
  <div id="sidenav" class="sidenav">
    <a href="#about">
      <font-awesome-icon icon=" cartplus" />My Shop
    </a>
    <hr />
    <a href="#services">
      <font-awesome-icon icon="user" />My Profile
    </a>
    <hr />
    <a href="#clients">
      <font-awesome-icon icon="cogs" />Setting
    </a>
    <hr />
    <a href="#contact">
      <font-awesome-icon icon="bullhorn" />Notification
    </a>
    <hr />
    <a href="#contact">
      <font-awesome-icon icon="square" />Pilling
    </a>
    <hr />
  </div>
</template>

<script>
export default {};
</script>

<style>
.sidenav {
  margin-top: 47px;
  height: 100%;
  width: 220px;
  position: fixed;
  z-index: 0;
  top: 0;
  left: 0;
  background-color: #0568aa;
  overflow-x: hidden;
  padding-top: 20px;
  -webkit-box-shadow: 2px 2px 5px 0px rgba(104, 104, 110, 1);
  -moz-box-shadow: 2px 2px 5px 0px rgba(104, 104, 110, 1);
  box-shadow: 2px 2px 5px 0px rgba(104, 104, 110, 1);
}

.sidenav a {
  padding: 6px 8px 6px 16px;
  text-decoration: none;
  font-size: 25px;
  color: white;
  display: block;
}

.sidenav a:hover {
  -webkit-transform: scale(1.2);
  -ms-transform: scale(1.2);
  transform: scale(1.2);
}
</style>
