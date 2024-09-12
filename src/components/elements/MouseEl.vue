<template>
  <div class="mouse-scroll-animation">
    <div class="mouse">
      <div class="mouse-wheel"></div>
    </div>
    <!-- Down arrows -->
    <div class="arrows">
      <span class="arrow"></span>
      <span class="arrow"></span>
      <span class="arrow"></span>
    </div>
  </div>
</template>

<script setup lang="ts">
// No JavaScript required for static animation
</script>

<style scoped>
.mouse-scroll-animation {
  display: block;
  margin: 0 auto;
  width: 24px;
  height: 50px;
}

.mouse {
  width: 30px;
  height: 50px;
  border: 2px solid #b1adad;
  border-radius: 50px;
  position: relative;
}

.mouse-wheel {
  width: 4px;
  height: 10px;
  background-color: #b1adad;
  border-radius: 2px;
  position: absolute;
  top: 10px;
  left: 50%;
  transform: translateX(-50%);
  animation: scroll 2s infinite;
}

.arrows {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.arrow {
  display: block;
  width: 5px;
  height: 5px;
  -ms-transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
  transform: rotate(45deg);
  border-right: 2px solid #b1adad;
  border-bottom: 2px solid #b1adad;
  margin: 0 0 3px 4px;
  width: 16px;
  height: 16px;
  -webkit-animation: mouse-scroll 1s infinite;
  -moz-animation: mouse-scroll 1s infinite;
  animation: mouse-scroll 1s infinite;
}

.arrow:nth-child(1) {
  margin-top: 1px;
  -webkit-animation-delay: 0.1s;
  -moz-animation-delay: 0.1s;
  -webkit-animation-direction: alternate;
  animation-direction: alternate;
  animation-delay: alternate;
}

.arrow:nth-child(2) {
  -webkit-animation-delay: 0.2s;
  -moz-animation-delay: 0.2s;
  -webkit-animation-direction: alternate;
  animation-delay: 0.2s;
  animation-direction: alternate;
  margin-top: -6px;
}

.arrow:nth-child(3) {
  -webkit-animation-delay: 0.3s;
  -moz-animation-delay: 0.3s;
  -webkit-animation-direction: alternate;
  animation-delay: 0.3s;
  animation-direction: alternate;
  margin-top: -6px;
}
@-webkit-keyframes mouse-scroll {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
  }
}
@-moz-keyframes mouse-scroll {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
  }
}
@-o-keyframes mouse-scroll {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
  }
}
@keyframes mouse-scroll {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
  }
}

@keyframes scroll {
  0% {
    opacity: 1;
    top: 10px;
  }
  50% {
    opacity: 0.5;
    top: 25px;
  }
  100% {
    opacity: 1;
    top: 10px;
  }
}
</style>
