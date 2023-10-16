import { createSlice} from '@reduxjs/toolkit'

const taskSlice = createSlice({ //create un nouveau object
    // Ici, nous centraliserons et traitrons les différents donnees
    name: 'tasks',
    initialState: {
        tasks :[
            {id : 1,  text : "toto", done :false},
            {id : 2,  text : "tata", done :true},
        ],
        counterTask : 1
    },
    reducers: { // un object avec tous les fonctions de reducers = task
        //Le state est le  contenu initialisé dans initialState
        // action : élément envoyé à notre store {type : "nom de l'action : task/addTask", payload : qui envoie par le store} pour récupérer les données du state
        // payload : est on obj contenant les paramètres de la fonction/ l'endroit accueilli tous les données du store {id, text, done}
        
        addTask: (state, action) => {
            const newTask = {
                id :Date.now(),
                text : action.payload,//payload est le texte de la tâche est un argrement
                done : false
            }
            state.tasks.push(newTask)
            state.counterTask += 1
        },
        deleteTask: (state, action) => {
            state.tasks = state.tasks.filter(task => task.id!== action.payload) //action.payload est le id du task à supprimer(delete)
        },
        //changer le status de la tâche => 1. trouver la tâche à 2. modifier de status
        toggleTask: (state, action) => {
            const task = state.tasks.find(task => task.id === action.payload) 
            task.done =!task.done 
        },
    },
})
export const {addTask, deleteTask, toggleTask} = taskSlice.actions //action est le type de l'action qui est envoyé à notre store
export default taskSlice.reducer   