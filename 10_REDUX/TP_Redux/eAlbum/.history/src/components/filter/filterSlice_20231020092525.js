

export const FilterAlbums = createAsyncThunk (
    'albumItems/FilterAlbums',
    async (filter) => {
        const token = localStorage.getItem("token")
        const response = await fetch(BASE_DB_URL + `/eAlbums.json?auth=${token}`, {
            method: 'POSTG',
            headers: { 'Content-Type': 'application.json' },
            body: JSON.stringify(filter)
        })
    }
)