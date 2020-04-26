<template>
  <div class="container">
    <div id="right-section">
      <p>{{num}}</p>
    </div>
    <div class="up-left">Title</div>
    <div class="up-right">Plane</div>
    <div class="bottom-right">Date</div>
    <div class="bottom-left">
      <span>
        <font-awesome-icon icon="times" />
        <font-awesome-icon icon="circle" />
        <font-awesome-icon icon="square" />
      </span>
    </div>
  </div>
</template>

<script>
export default {
  props: ["num"]
};
</script>

<style>
.bottom-right {
  position: absolute;
  bottom: 1px;
  right: 80px;
  color: #fff;
  width: 40px;

  padding: 20px;
}
.bottom-left {
  position: absolute;
  bottom: 1px;
  left: 0px;
  color: #fff;
  width: 75px;

  padding: 20px;
}
.up-left {
  position: absolute;
  top: 1px;
  left: 0px;
  color: #fff;
  width: 40px;

  padding: 20px;
}
.up-right {
  position: absolute;
  top: 1px;
  right: 80px;
  color: #fff;
  width: 40px;

  padding: 20px;
}
.container {
  border-radius: 20px;
  margin: 50px auto;
  width: 400px;
  height: 200px;
  position: relative;
  border: 5px solid #543864;
  background: #ff6363;
  font-family: Arial, sans-serif;
}

#right-section {
  border-top-right-radius: 17px;
  border-bottom-right-radius: 17px;
  float: right;
  background-color: #ffbd69;
  width: 80px;
  height: 100%;
  font-size: 18px;
  text-align: center;
}
</style>
