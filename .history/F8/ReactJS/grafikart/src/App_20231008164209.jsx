
const title = 'bonjour'
 const style ={color :"red", backgroundColor : "darkblue"}
 const showTitle = true
 const todos = ["To do", "Doing", "Test", "Done"]
 const hanleClick =(e)=>{
  console.log(e);
  alert('Veuillez remplir cette champs!!')
 }
 const Title = ({color,hidden}) =>{ //propriéte color
  console.log(hidden);
  
  const  props = {
    id :'mon id',
    className : 'maClasse'
  }
  
  return <h1 style={{color : color}} {...props}>Welcome to Vietnam</h1> 
 }
function App() {
 
  return (
    <>
      <div>
      {/* {showTitle ? 
       <h1  id="title" className="title" style={style}>{title}</h1>:
        <h1 style={{color : "green"}}>Sans tittle</h1> } */}
        <Title color = "orange" hidden/>
       <input onClick={hanleClick} type="text" />
       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa blanditiis laboriosam ullam? Nobis porro, dolore iste perferendis doloremque aspernatur laboriosam laborum saepe eaque sint ullam nihil voluptates, non accusamus. Dolorum.</p>
       <ul>
        {todos.map(todo =>(
          <li key={todo}>{todo}</li>
        ))}
       </ul>
      </div>
     
    </>
  )
}

export default App