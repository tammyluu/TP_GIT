const courses = [
    {name: 'html, css'},
    { name : 'Responsive'},
    {name: 'React'}
 ]
 const jsx = (
    <ul>
        {courses.map(course =>
            <li>{course.name}</li>
           )}
    </ul>
 )
 ReactDOM.render(jsx, document.get)