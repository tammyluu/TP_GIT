import { useRef, useState } from "react"

const ProductAlbum =( props) =>{
    const {displayInfos} =props
    // const tabProds = []
    // const [listProd, setListProd]= useState (tabProds)
    // const [name, setName] = useState('')
    // const [date, setDate] = useState('')
    // const [url, setUrl] = useState('')
    const nameRef = useRef()
    const dateRef = useRef()
    const urlRef = useRef()

    const addNewProduct = (e)=> {
        e.preventDefault()
        const name = nameRef.current.value
        const date = dateRef.current.value
        const url = urlRef.current.value
            displayInfos ({
                name,
                date,
                url
            })

    }
    const updatePhoto = (e) => {
        e.preventDefault()
        const 
    }
    
    return (
        <div className="col-4">
            <div class="card" >
           <form action="#" onSubmit={addNewProduct}>
           <img src="https://images.unsplash.com/photo-1603561591411-07134e71a2a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZGlhbW9uZCUyMHJpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" class="w-50 card-img-top" alt=""></img>
            <div class="card-body">
                <input type="text"ref={nameRef} placeholder="title" />
            </div>
            <div class="card-body">
                <input type="text" ref={urlRef} placeholder="url" />
            </div>
            <div class="card-body">
                <input type="date"ref={dateRef} placeholder="Date" />
            </div>
           </form>
            <div>
                <button className="btn btn-primary" onClick={displayInfos}>Add</button>
            </div>
        </div>
        </div>
    )
}


export default ProductAlbum