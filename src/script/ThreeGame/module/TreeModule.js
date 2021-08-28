import Module from '../interface/Module';
import THREE from "../../three";
import tools from "../../tools";

class TreeModule extends Module {
    // 树
    init() {
        // 树干
        let treeBodyBox = new THREE.CylinderGeometry(1.4, 2.1, 30, 25);

        let treeBodyMa = new THREE.MeshLambertMaterial({
            color: 0x00b8ff,
        });

        this.treeBodyMesh = new THREE.Mesh(treeBodyBox, treeBodyMa);
        this.treeBodyMesh.castShadow = true;
        this.treeBodyMesh.receiveShadow = true;

        this.moduleGroup.add(this.treeBodyMesh);

        // 第一树叶
        let leafBottomBox = new THREE.IcosahedronGeometry(10);
        let leafBottomMa = new THREE.MeshLambertMaterial({
            color: 0x00b8ff,
        });

        this.leafBottomMesh = new THREE.Mesh(leafBottomBox, leafBottomMa);
        this.leafBottomMesh.castShadow = true;
        this.leafBottomMesh.receiveShadow = true;

        this.leafBottomMesh.position.setY(10)
        this.moduleGroup.add(this.leafBottomMesh);

        // 第二树叶
        let leafCenterBox = new THREE.DodecahedronGeometry(5);
        let leafCenterMa = new THREE.MeshLambertMaterial({
            color: 0x00b8ff,
        });

        this.leafCenterMesh = new THREE.Mesh(leafCenterBox, leafCenterMa);
        this.leafCenterMesh.castShadow = true;
        this.leafCenterMesh.receiveShadow = true;

        this.leafCenterMesh.position.setY(20)
        this.moduleGroup.add(this.leafCenterMesh);


        // 第三树叶
        let leafTopBox = new THREE.OctahedronGeometry(4);
        let leafTopMa = new THREE.MeshLambertMaterial({
            color: 0x00b8ff,
        });

        this.leafTopMesh = new THREE.Mesh(leafTopBox, leafTopMa);
        this.leafTopMesh.castShadow = true;
        this.leafTopMesh.receiveShadow = true;

        this.leafTopMesh.position.setY(26)
        this.moduleGroup.add(this.leafTopMesh);

        // 随机大小
        let treeRandom = tools.randomNumber(10, 40) / 10;
        this.moduleGroup.scale.set(treeRandom, treeRandom, treeRandom);
    }
}

export default TreeModule;