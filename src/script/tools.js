import THREE from "./three";

// 多面体类型
let geometryList = [
    (w) => new THREE.BoxGeometry(w, w, w),
    (w) => new THREE.OctahedronGeometry(w),
    (w) => new THREE.DodecahedronGeometry(w),
    (w) => new THREE.IcosahedronGeometry(w)
];


export default {
    randomNumber(start, end) {
        // 获取随机数
        return Math.floor(Math.random() * (end - start) + start);
    },
    getRandomPoint(width) {
        // 获取球面随机点
        let x = this.randomNumber(-width, width);
        let y = this.randomNumber(-width, width);
        let z = Math.sqrt(Math.pow(width, 2) - Math.pow(x, 2) - Math.pow(y, 2));

        return [x, y, (this.randomNumber(0, 100) > 50 ? -1 : 1) * z].sort(() => (0.5 - Math.random()));
    },
    getRandomGeometry(w) {
        // 随机获取多面体模型
        // 随机模型下标
        let randomIndex = this.randomNumber(0, geometryList.length);
        // 随机模型
        return geometryList[randomIndex](w);
    }
}