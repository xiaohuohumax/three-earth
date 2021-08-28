import Model from '../interface/Model';
import THREE from "../../three";
import tools from "../../tools";
import TreeModule from "../module/TreeModule";
import RockModule from "../module/RockModule";

class EarthModel extends Model {
    createEarth() {
        // 创建地球
        let bodyBox = new THREE.SphereGeometry(this.earthRadis, 40, 20);

        let materialBody = new THREE.MeshLambertMaterial({
            color: 0x00b8ff,
        });

        this.earthMesh = new THREE.Mesh(bodyBox, materialBody);
        this.earthMesh.receiveShadow = true;
        this.earthMesh.castShadow = true;

        this.modelGroup.add(this.earthMesh);
    }

    createRock() {
        let rockGroup = new THREE.Group();
        // 创建石头
        for (let x = 0; x < this.rockSum; x++) {
            let rockModule = new RockModule();

            rockModule.moduleGroup.position.set(...tools.getRandomPoint(this.earthRadis));

            rockModule.moduleGroup.rotation.set(...this.getRandomRotation())

            rockGroup.add(rockModule.moduleGroup);
        }
        this.modelGroup.add(rockGroup);
    }


    createTree() {
        // 生成树
        for (let index = 0; index < this.treeSum; index++) {
            let treeModule = new TreeModule();

            let treeAllGroup = new THREE.Group();

            treeAllGroup.add(treeModule.moduleGroup);

            treeModule.moduleGroup.position.setY(this.earthRadis + 10);

            treeAllGroup.rotation.set(...this.getRandomRotation());

            this.modelGroup.add(treeAllGroup);
        }
    }
    render({ scene }) {
        this.createEarth();

        this.createRock();

        this.createTree();
    }
    renderAnimation() {
        // 地球旋转
        this.modelGroup.rotation.z += 0.008;
    }

    getRandomRotation() {
        return [tools.randomNumber(0, 360), tools.randomNumber(0, 360), tools.randomNumber(0, 360)];
    }
    init() {
        // 半径
        this.earthRadis = 450;
        // 石头数量
        this.rockSum = 600;
        // 树的数量
        this.treeSum = 100;
    }
}

export default EarthModel;