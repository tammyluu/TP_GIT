

export const FilterAlbums = createAsyncThunk (
    'albumItems/FilterAlbums',
    async (filter) => {
        const token = localStorage.getItem("token")
        const response = await fetch(BASE_DB_URL + `/eAlbums.json?auth=${token}`, {
            method: 'GET',
            headers: { 'Content-Type': 'application.json' },
            body: JSON.stringify(filter)
        })
        const data = await response.json()
        return {
            id: data.title,
         ...filter
        }
    }
)
