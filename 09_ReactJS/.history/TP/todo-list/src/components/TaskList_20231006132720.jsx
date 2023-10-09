const TaskList = () =>{
    return
    <>
    <div>
        <form action="#">
        <div>
                <label htmlFor="name">Name: </label>
                <input type="text" ref={dogNameInputRef} required />
            </div>
            <div>
                <label htmlFor="birthDate">Birth date: </label>
                <input type="date" ref={dogBirthdateInputRef} required />
            </div>

        </form>
    </div>
    </>
}
export default TaskList