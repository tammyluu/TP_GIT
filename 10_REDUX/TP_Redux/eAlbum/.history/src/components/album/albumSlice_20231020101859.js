import { createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import { BASE_DB_URL } from '../../firebaseConfig'



export const fetchAlbum = createAsyncThunk (
    'albumItems/fetchAlbum',
    async () => {
        const response = await fetch(BASE_DB_URL + "/eAlbums.json")
        const data = await response.json()
        const albums =[]
        for (const key in data) {
            albums.push({id: key, ...data[key]})
        }
        return albums
    }
)
export const postAlbums = createAsyncThunk (
    'albumItems/postAlbums',
    async (newAlbum) => {
        const token = localStorage.getItem("token")
        const response = await fetch(BASE_DB_URL + `/eAlbums.json?auth=${token}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application.json' },
            body: JSON.stringify(newAlbum)
        })
        const data = await response.json()
        return {
            id: data.title,
          ...newAlbum
        }
    }
)
export const deleteAlbum = createAsyncThunk (
    'albumItems/deleteAlbums',
    async (album) => {
        const token = localStorage.getItem("token")
        const response = await fetch(BASE_DB_URL + `/eAlbums/${album}.json?auth=${token}`, {
            method: 'DELETE',
            headers: { 'Content-Type': 'application.json' },
        })
       const data = await response.json()
        return  album

    }
)
export const editAlbum = createAsyncThunk (
    'albumItems/editAlbums',
    async (patchAlbum) => {
        const token = localStorage.getItem("token")
        const response = await fetch(BASE_DB_URL + `/eAlbums/${patchAlbum.id}.json?auth=${token}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application.json' },
            body: JSON.stringify(patchAlbum)
        })
        const data = await response.json()
        return {
            id: data.title,
            ...patchAlbum
        }
    }
)
export const filteredAlbum = createAsyncThunk(
    'albumItems/filteredAlbum',
    async (filter) => {
        const token = localStorage.getItem("token")
        const response = await fetch(BASE_DB_URL + `/eAlbums.json?auth=${token}`, {
            method: 'GET',
            headers: { 'Content-Type': 'application.json' },
            body: JSON.stringify(filter)
        })
       const data = await response.json()
        return filter
    }
)
const albumSlice = createSlice({
    name: "albumItems",
    initialState: {
        formMode: "",
        albums: [],
        selectedAlbum: null
    
    },
    reducers: {
        setFormMode: (state, action) => {
            state.formMode = action.payload
            console.log(action.payload);
        },
         setSelectedAlbum: (state, action) => {
            state.selectedAlbum = action.payload
        }
        

    },
    extraReducers: (builder) => {
        builder.addCase(fetchAlbum.fulfilled, (state, action) => {
            state.albums = action.payload
            console.log(state.albums)
        })
        builder.addCase(postAlbums.fulfilled, (state, action) => {
            state.albums.push(action.payload)
            console.log(action.payload);
        })
        builder.addCase(editAlbum.fulfilled, (state, action) => {
           let foundAlbum = state.albums.find(album => album.id === action.payload.id)
            if(foundAlbum){
                state.albums = [...state.albums.filter(album => album.id!== action.payload.id), action.payload]
            }
        })

        builder.addCase(deleteAlbum.fulfilled, (state, action) => {
           
            let foundAlbum = state.albums.find(album => album.id === action.payload)
            console.log(action.payload);
            if (foundAlbum) {
                state.albums = state.albums.filter(album => album.id!== action.payload)
                console.log(foundAlbum)
            }
        })
        builder.addCase(filteredAlbum.fulfilled, (state, action) => {
            state.albums = action.alb
        })
    }
})
export default albumSlice.reducer
export const { setFormMode , setSelectedAlbum, selectedAlbum} = albumSlice.actions