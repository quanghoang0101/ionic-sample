import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { retrieveNotes } from "./coredata"

export const fetchNotes = createAsyncThunk(
  "todos/fetchNotes",
  async (offset: number) => {
    const response = await retrieveNotes(offset)
    let notes: Note[] = JSON.parse(response)
    console.log(`>>>>>>>>>> CORE DATA RESPONE: ${response}`)
    return notes
  },
)

interface Note {
  title: string
  content: string
  timestamp: string
}

interface TodosState {
  entities: Note[]
  loading: "idle" | "pending" | "succeeded" | "failed"
}

const initialState = {
  entities: [],
  loading: "idle",
} satisfies TodosState as TodosState

export const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.entities.push(action.payload)
    },
    clearTodos: state => {
      state.entities = []
      console.log(`>>>>>>>>>> CLEAR TODOS: ${state.entities}`)
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchNotes.pending, state => {
        state.loading = "pending"
      })
      .addCase(fetchNotes.fulfilled, (state, action) => {
        state.loading = "succeeded"
        state.entities = [...state.entities, ...action.payload]
      })
      .addCase(fetchNotes.rejected, state => {
        state.loading = "failed"
      })
  },
})

export const { addTodo, clearTodos } = todoSlice.actions

export default todoSlice.reducer
