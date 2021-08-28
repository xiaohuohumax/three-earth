import THREE from "../../three";

class Model { // 模型类
    constructor() {
        this.modelGroup = new THREE.Group();
        this.modelGroup.castShadow = true;
        this.init();
    }
    // 渲染动画
    renderAnimation() { }
    // 渲染
    render({ }) {
    }

    // 初始化
    init() { }
}

export default Model;