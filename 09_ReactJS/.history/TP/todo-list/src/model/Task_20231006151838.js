class Task {
    constructor (_id, _name, _date, _isFinish){
        this._id = ++ id
        this._name = _name
        this._date = _date
        this._isFinish = false
    }
    get id(){
        return this._id
    }    
    get name (){
        return this._name
    }
    get date (){
        const deadline = this._date - (new Date().getDate())
        return during
    }
}
export default Task