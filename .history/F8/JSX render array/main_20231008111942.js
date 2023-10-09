
function App() {
 
  const Button = (title, href,onClick)=>{
    return (
      <button>{title}</button>
    )
  }
  return (
    <div className="App">
       
           <Button title = "click me"
              href = "https: //fullstack.edu.vn/"
              onClick ={()=> console.log(Math.random())}/>  
    </div>
  );
}
export default App
