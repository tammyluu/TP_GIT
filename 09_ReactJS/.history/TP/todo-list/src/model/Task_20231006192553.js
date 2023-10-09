class Task {
    static count = 0
    constructor (_id, _name, _deadline, _isFinish){
        this._id = ++Task.count
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
    u
}
export default Task