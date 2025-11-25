// src/store.js
import { configureStore, createSlice } from '@reduxjs/toolkit'

const profileSlice = createSlice({
  name: 'profile',
  initialState: {
    name: 'CAI,YAO-TING',
    title: 'Software Engineer',
    bio: 'I graduated with a Master’s degree in Computer Science and Engineering from National Kaohsiung University of Science and Technology. Through my academic and research experience, I gradually built a solid foundation in programming and various technological applications, especially in artificial intelligence and web development. In my future career, I hope to apply what I have learned to real-world projects, continue improving my skills, and become a reliable engineer who contributes to the team and grows together with others.',
    skills: ['Python', 'Power BI', 'R', 'PostgreSQL','React', 'Redux', 'HTML', 'CSS'],
    
    // Projects
    projects: [
      {
        id: 1,
        title: 'Project One : [MIMIC IV 2.1 Specific Disease & Medication SQL Example Webpage]',
        desc: 'This webpage provides the necessary MIMIC IV 2.1 data tables related to specific diseases and medications. It is designed to help you better understand the column information in these medical datasets for similar academic research. You can use the menu to switch to SQL examples for querying the medical data. Please note that these examples are for reference and academic research purposes only.',
        homeUrl: 'https://mimic-iv-disease-medication-sql-ting-uwu.streamlit.app/',
        projectUrl: 'https://github.com/yaoting0116/MIMIC-IV-Disease-Medication-SQL'
      },
      {
        id: 2,
        title: 'Project Two : [MIMIC IV Data Analysis]',
        desc: '\nThis page showcases my analysis results based on data filtered using SQL queries. It provides insights drawn from the filtered MIMIC IV 2.1 dataset to support academic research in the fields of diseases and medications. For more detailed information, please visit the GitHub repository.\n\n\n',
        homeUrl: 'https://mimic-iv-disease-medication-sql-ting-uwu.streamlit.app/Study_of_Disease_&_Drug',
        projectUrl: 'https://github.com/yaoting0116/mimic-iv-drug-data-analysis'
      }
    ],

    // 新增論文/專題欄位
    thesisTitle: 'Exploring the Impact of Cardiovascular Disease-Related Medications on Severe Mental Illness Using an Open-Source Medical Database',
    thesisUrl: 'https://hdl.handle.net/11296/u9589n'
  },
  reducers: {
    setProfile(state, action) {
      return { ...state, ...action.payload }
    }
  }
})

const counterSlice = createSlice({
  name: 'counter',
  initialState: { value: 0 },
  reducers: {
    increment: (state) => { state.value += 1 },
    decrement: (state) => { state.value -= 1 },
    reset: (state) => { state.value = 0 }
  }
})

export const { setProfile } = profileSlice.actions
export const { increment, decrement, reset } = counterSlice.actions

const store = configureStore({
  reducer: {
    profile: profileSlice.reducer,
    counter: counterSlice.reducer
  }
})

export default store
