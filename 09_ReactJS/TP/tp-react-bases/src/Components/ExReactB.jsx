

const DisplayTab =() =>{
    const tabPersons = [
        {firstName : "Julia", lastName : "Robert", id : 1},
        {firstName : "Britney", lastName : "Spears", id : 2},
        {firstName : "Kylie", lastName : "Minogue", id : 3},
        {firstName : "Tom", lastName : "Cruise", id : 4}
    ]
    
    return (
     
        <>
        <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">First Name</th>
                <th scope="col">Last Name</th>
            </tr>
        </thead>    
            <tbody>
            <tr>
            {tabPersons.map((id, i) =><td key={i}>{id}</td>)}
            {tabPersons.map((firstName, i) =><td key={i}>{firstName}</td>)}
            {tabPersons.map((lastName, i) =><td key={i}>{lastName}</td>)}
                     
            </tr>
                      
            </tbody>
                   
        </>
            
        
    )
}


export default DisplayTab