class Task {
    constructor (_id, _name, _deadline, _isFinish){
        this._id = ++ id
        this._name = _name
        this._deadline = _deadline
        this._isFinish = false
    }
    get id(){
        return this._id
    }    
    get name (){
        return this._name
    }
    get deadline (){
        return this._ddeadline
    }
    // deadline() {
    //     this._date - (new Date().getDate())
    //     return deadline
    // }
}
export default Task