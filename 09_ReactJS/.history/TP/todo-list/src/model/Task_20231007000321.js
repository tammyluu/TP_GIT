class Task {
    static count = 0
    constructor (_id, _name, _deadline, _isFinish){
        this._id = Task.count +1
        this._name = _name
        this._deadline = _deadline
        this._isFinished = false
    }
    get id(){
        return this._id
    }    
    get name (){
        return this._name
    }
    get deadline (){
        return this._deadline
    }
    isFinished (){
        return this._isFinished
    }
}
export default Task