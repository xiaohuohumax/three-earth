import Module from '../interface/Module';
import THREE from "../../three";
import tools from "../../tools";

class RockModule extends Module {
    init() {
        // 石头随机宽度
        this.rockWidthRandomSize = tools.randomNumber(10, 40);

        // 随机石头模型
        let rockBox = tools.getRandomGeometry(this.rockWidthRandomSize);

        let rockMaterial = new THREE.MeshLambertMaterial({
            color: 0x05986E,
            // opacity: 0.7,
            // transparent: true,
            // wireframe: true // 线框显示
        });

        let rockMesh = new THREE.Mesh(rockBox, rockMaterial);
        rockMesh.castShadow = true;
        rockMesh.receiveShadow = true;
        this.moduleGroup.add(rockMesh);
    }
}

export default RockModule;