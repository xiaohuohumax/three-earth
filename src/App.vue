<template>
  <div class="three-game w-screen h-screen overflow-hidden" ref="threeRoot"></div>

</template>

<script>
import { ref, onMounted } from "vue";
import ThreeGame from "./script/ThreeGame/ThreeGame";
import EarthModel from "./script/ThreeGame/model/EarthModel";
import AirplaneModel from "./script/ThreeGame/model/AirplaneModel";

export default {
  setup() {
    // dom
    let threeRoot = ref(null);
    // 产生对象
    let threeGame = new ThreeGame();

    onMounted(() => {
      // 绑定dom
      threeGame.bindDom(threeRoot.value);

      threeGame.addModel(new EarthModel());
      threeGame.addModel(new AirplaneModel());

      threeGame.startRender();
    });

    return { threeRoot };
  },
};
</script>

<style>
.three-game {
  background: linear-gradient(to bottom, #3d7eaa, #ffe47a);
}

.grid {
  grid-template-rows: repeat(3, 200px);
}
</style>
