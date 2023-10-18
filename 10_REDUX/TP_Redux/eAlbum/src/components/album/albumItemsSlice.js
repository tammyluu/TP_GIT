import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import {BASE_DB_URL} from '../firebaseConfig'


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
        const response = await fetch(BASE_DB_URL + "/eAlbums.json", {
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
const albumItemsSlice = createSlice({
    name: "albumItems",
    initialState: {
        albums: []
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchAlbum.fulfilled, (state, action) => {
            state.albums = action.payload
            console.log(state.albums)
        })
    }
})
export default albumItemsSlice.reducer