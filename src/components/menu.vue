<template>
  <div class="navbar">
    <p class="pull-left">LOGO</p>
    <p class="pull-right">
      <span>
        <font-awesome-icon icon="times" />
        <font-awesome-icon icon="circle" />
        <font-awesome-icon icon="square" />
      </span>
    </p>
  </div>
</template>

<script>
export default {};
</script>

<style>
.navbar {
  z-index: 1;
  top: 0;
  left: 0;
  overflow: hidden;
  background: rgb(240, 249, 255);
  background: radial-gradient(
    circle,
    rgba(240, 249, 255, 1) 0%,
    rgba(83, 152, 198, 1) 55%,
    rgba(5, 104, 170, 1) 99%,
    rgba(250, 250, 250, 1) 202040%
  );
  position: fixed;
  color: white;
  width: 100%;
}

.pull-left {
  float: left;
  display: block;
  color: #f2f2f2;
  text-align: center;

  text-decoration: none;
  font-size: 17px;
}
.pull-right {
  float: right;
  display: block;
  color: #f2f2f2;
  text-align: center;

  text-decoration: none;
  font-size: 17px;
}
</style>
