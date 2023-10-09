
function App() {
  const handleClick = (course)=> {
    console.log(course.title);
  }
  const Button = (title, href,onClick)=>{
    return (
      <button>{title}</button>
    )
  }
  return (
    <div className="App">
        {courses.map(course =>(
                <CourseItem
                    key={course.id}
                    // title={course.title}
                    // image={course.thumbnail_cdn}
                    // description={course.description}
                    // studentsCount={course.students_count}
                    toto = {course}
                    button = {handleClick}
                />
            ))}
           <Button title = "click me"
              href = "https: //fullstack.edu.vn/"
              onClick ={()=> console.log(Math.random())}/>  
    </div>
  );
}
export default App
