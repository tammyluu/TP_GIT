import RecipeItem from "./RecipeItem"
import { useSelector } from "react-redux";

const RecipeList = () =>{
    const recipes = useSelector(state => state.recipes.recipes)

    return(
        <>
        <form>
            <h2>Recipes List</h2>
            <button className="btn btn-success"><i className="bi bi-plus-circle"></i>Add</button>
            <hr />
           
            <table className="table mt-5">
                <thead>
                        <tr>
                            <th scope="col">Ingrdients</th>
                            <th scope="col">Instruction</th>
                        </tr>    
                </thead>
            </table>
            
            <hr />
            <tbody className="table-group-divider">
                { recipes.map((recipe,i) =>(
                    <RecipeItem key={i} recipe={recipe}/>
                ))} 
            </tbody>
            <button className="btn btn-warning"><i className="bi bi-pencil-square"></i>Edite</button>
            <button className="btn btn-danger"><i className="bi bi-trash3-fill"></i>Delete</button>
        </form>
        
        
        </>
    )
}
export default RecipeList