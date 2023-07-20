import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface DiaryState {
  diaryEntries: [];
  error: boolean;
  submitText: string;
  description: string;
  submitted: boolean;
}

const initialState: DiaryState = {
  diaryEntries: [],
  error: false,
  submitText: '',
  description: '',
  submitted: false,
}

const diarySlice = createSlice({
  name: 'diary',
  initialState,
  reducers: {
    addDiaryEntry: (state, action) => {
      state.diaryEntries = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    setSubmitText: (state, action) => {
      state.submitText = action.payload;
    },
    setDescription: (state, action) => {
      state.description = action.payload;
    },
    setSubmitted: (state, action) => {
      state.submitted = action.payload;
    },
    clearError: (state) => {
      state.error = false;
    },
    fetchCards: () => { },
  },
});

export const { addDiaryEntry, setError, setSubmitText, setDescription, setSubmitted, clearError, fetchCards } = diarySlice.actions;
export default diarySlice.reducer;