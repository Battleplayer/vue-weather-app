<script setup lang="ts"></script>

<template>
  <div class="bubbles">
    <span></span>
    <span id="bubble2"></span>
    <span id="bubble3"></span>
  </div>
</template>

<style scoped lang="scss">
.bubbles span {
  display: inline-block;
  vertical-align: middle;
  width: 15px;
  height: 15px;
  margin: 50px auto;
  background: var(--project-color-terra-rosa);
  border-radius: 50%;
  animation: bubbly 0.9s infinite alternate;
}

#bubble2 {
  animation-delay: 0.27s;
}

#bubble3 {
  animation-delay: 0.54s;
}

@keyframes bubbly {
  0% {
    width: 15px;
    height: 15px;
    opacity: 1;
    transform: translateY(0);
  }
  100% {
    width: 50px;
    height: 50px;
    opacity: 0.1;
    transform: translateY(-32px);
  }
}
</style>
