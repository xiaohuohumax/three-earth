import Model from '../interface/Model';
import THREE from "../../three";
import AirplaneModule from "../module/AirplaneModule";
class AirplaneModel extends Model {
    render({ scene }) {
        this.airplaneModule = new AirplaneModule();
        this.modelGroup.add(this.airplaneModule.moduleGroup);
    }
    renderAnimation() {
        this.airplaneModule.renderAnimation();
        this.modelGroup.position.setY(this.earthRadis);
    }
    init() {
        // ε°ηεεΎ
        this.earthRadis = 450;
    }
}

export default AirplaneModel;