class ElectricLamp{
    status;
    constructor(status,electric) {
        this.status = status;
        this.electric = electric;
    }
    getStatus(){
        return this.status
    }
    setStatus(status){
        this.status = status;
    }
    getElectric(){
        return this.electric
    }
    setElectric(electric){
        this.electric = electric;
    }
}