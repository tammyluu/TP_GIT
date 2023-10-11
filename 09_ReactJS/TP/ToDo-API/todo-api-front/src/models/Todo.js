 class Todo {
    static count = 0
    constructor( title,description){
        this.id = ++Todo.count
        this.title = title
        this.description = description

    }
    get id (){
        return this.id
    }
    get title (){
        return this.title
    }
    get description (){
        return this.description
    }
}
export default Todo