import THREE from "../../three";

class Module {
    //组件类
    init() { }
    constructor() {
        this.moduleGroup = new THREE.Group();
        this.init();
        this.bindKey();
    }
    renderAnimation() {
    }
    bindKey() { };
}

export default Module;