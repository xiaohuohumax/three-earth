import Module from '../interface/Module';
import THREE from "../../three";
import tools from "../../tools";

class AirplaneModule extends Module {

    drawpPlaneBody() {
        // 飞机身体
        this.planeBody = new THREE.BoxGeometry(40, 60, 40);

        this.planeBodyMa = new THREE.MeshPhongMaterial({
            color: 0x00FF00,
        });

        this.planeBodyMesh = new THREE.Mesh(this.planeBody, this.planeBodyMa);

        this.planeBodyMesh.castShadow = true;
        this.moduleGroup.add(this.planeBodyMesh);
    }

    drawWing() {
        // 飞机机翼
        this.planeWing = new THREE.BoxGeometry(120, 40, 10);

        this.planeWingMa = new THREE.MeshPhongMaterial({
            color: 0xFF0000,
        });

        this.planeWingMesh = new THREE.Mesh(this.planeWing, this.planeWingMa);
        this.planeWingMesh.position.set(0, 5, 0);

        this.moduleGroup.add(this.planeWingMesh);
    }


    drawHeader() {
        // 飞机头部
        this.planeHeader = new THREE.BoxGeometry(40, 15, 40);
        // 螺旋桨轴
        this.planeHeaderShaft = new THREE.BoxGeometry(10, 10, 10);

        this.planeHeaderMa = new THREE.MeshPhongMaterial({
            color: 0x00F0F0,
        });

        this.planeHeaderMesh = new THREE.Mesh(this.planeHeader, this.planeHeaderMa);
        this.planeHeaderShaftMesh = new THREE.Mesh(this.planeHeaderShaft, this.planeHeaderMa);

        this.planeHeaderMesh.position.set(0, 40, 0);
        this.planeHeaderShaftMesh.position.set(0, 48, 0);

        this.moduleGroup.add(this.planeHeaderMesh);
        this.moduleGroup.add(this.planeHeaderShaftMesh);

    }
    drawPropeller() {
        // 螺旋桨
        this.planePropeller = new THREE.BoxGeometry(50, 6, 22);

        this.planePropellerMa = new THREE.MeshPhongMaterial({
            color: 0xee7124,
        });

        this.planePropellerMesh = new THREE.Mesh(this.planePropeller, this.planePropellerMa);

        this.planePropellerMesh.position.set(0, 55, 0);

        this.moduleGroup.add(this.planePropellerMesh);
    }

    drawTailplane() {
        // 飞机尾翼
        this.planeTailplane = new THREE.BoxGeometry(10, 20, 22);

        this.planeTailplaneMa = new THREE.MeshPhongMaterial({
            color: 0xFF0000,
        });

        this.planeTailplaneMesh = new THREE.Mesh(this.planeTailplane, this.planeTailplaneMa);

        this.planeTailplaneMesh.position.set(0, -25, 20);

        this.moduleGroup.rotation.set(Math.PI / 2 * 3, 0, -Math.PI / 2);

        this.moduleGroup.add(this.planeTailplaneMesh);
    }
    init() {
        this.drawpPlaneBody();
        this.drawWing();
        this.drawHeader();
        this.drawPropeller();
        this.drawTailplane();
        // 半振幅
        this.range = 50;

        // 离地高度
        this.realHeight = 120;

        // 当前y坐标
        this._planeY = 0;

        // 当前x坐标
        this.planX = 0;
    }
    renderAnimation() {
        // 螺旋桨
        this.planePropellerMesh.rotation.y += 0.5;
        // 飞机上下起伏 地球半径+ 离地高度 + 半振幅 + sin(planX) * 半振幅
        let y = this.realHeight + this.range + Math.sin(this.planX += 0.165) * this.range;

        // let y = this.realHeight + this.planeY;

        this.moduleGroup.position.set(0, y, 0);
    }
    get planeY() {
        return this._planeY;
    }
    set planeY(val) {
        this._planeY = val > this.range ? this.range : (val < -this.range ? -this.range : val);
    }
    // 绑定键盘
    bindKey() {
        window.addEventListener('keydown', (event) => {
            if (event.key == "w") {
                this.planeY += 2;
            } else if (event.key == "s") {
                this.planeY -= 2;
            }
        })
    }
}

export default AirplaneModule;