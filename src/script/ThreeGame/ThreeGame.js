import THREE from "../three";
import Model from './interface/Model';

class ThreeGame {
    createScene() {
        // 场景
        this.scene = new THREE.Scene();
        // 坐标轴
        // this.scene.add(new THREE.AxesHelper(1000));
    }

    createCamera() {
        // 相机
        this.camrea = new THREE.PerspectiveCamera(
            75,
            window.innerWidth / window.innerHeight,
            0.1,
            2000
        );

        this.camrea.position.x = 300;
        this.camrea.position.y = 900;
        this.camrea.position.z = 1100;

        // this.camrea.lookAt(0, 0, 0);


        // this.camrea.position.x = 100;
        // this.camrea.position.y = 20;
        // this.camrea.position.z = 100;

        this.camrea.lookAt(0, 0, 0);
    }
    createRenderer() {
        // 渲染器
        this.renderer = new THREE.WebGLRenderer({
            alpha: true, // 背景色透明显示渐变色
            antialias: true, // 抗锯齿
        });

        // 设置宽高
        this.renderer.setSize(this.windowWidth, this.windowHeight);

        // 开启阴影效果
        this.renderer.shadowMap.enabled = true;
    }


    bindDom(dom) {
        // 绑定dom
        this.dom = dom;
        dom.appendChild(this.renderer.domElement);
    }

    setScreenSzie() {
        // 屏幕宽高
        this.windowWidth = window.innerWidth;
        this.windowHeight = window.innerHeight;
    }

    addEventListener() {
        // 添加监视
        window.addEventListener(
            "resize",
            () => this.updateRendererAndCamera(),
            false
        );
    }
    updateRendererAndCamera() {
        //更新渲染器和相机
        this.setScreenSzie();
        this.renderer.setSize(this.windowWidth, this.windowHeight);
        this.camrea.aspect = this.windowWidth / this.windowHeight;
        this.camrea.updateProjectionMatrix();
    }

    createLight() {
        // 设置光源
        // 点光源
        var point = new THREE.SpotLight(0xDDDDDD, 2, 3000, 90, 1.4, 1.5);

        point.position.set(0, 1200, 200); //点光源位置
        point.castShadow = true;

        point.shadow.mapSize.width = 2048;
        point.shadow.mapSize.height = 2048;

        this.scene.add(point); //点光源添加到场景中

        // 环境光
        var ambient = new THREE.AmbientLight(0xe74f09, 0.3);
        ambient.position.set(800, 800, 800); //点光源位置

        this.scene.add(ambient);
    }

    startRender() {
        // 开始渲染
        this.renderFlag = true; // 渲染标识
        let _this = this;

        let loop = () => {
            _this.renderer.render(_this.scene, _this.camrea);
            if (!_this.renderFlag) {
                return;
            }
            _this.renderAnimation();
            requestAnimationFrame(loop);
        };
        loop();
    }

    renderAnimation() {
        // 渲染动画
        this.models.forEach((model) => {
            model.renderAnimation();
        });
    }
    addModel(model) {
        // 添加模型
        if (model instanceof Model) {
            this.models.push(model);
            model.render({ ...this });

            // 添加模型
            this.scene.add(model.modelGroup);
        }
    }

    stopRender() {
        // 停止渲染
        this.renderFlag = false;
    }

    constructor() {
        // 对象模型
        this.models = [];
        this.setScreenSzie();
        this.createScene();
        this.createCamera();
        this.createRenderer();
        this.createLight();
        this.addEventListener();
    }
}


export default ThreeGame;