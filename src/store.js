// src/store.js
import { configureStore, createSlice } from '@reduxjs/toolkit'
import profileContent from './data/profileContent'

// 簡單實作的 deepMerge（不依賴外部 lib）
function isObject(item) {
  return item && typeof item === 'object' && !Array.isArray(item)
}
function deepMerge(target, source) {
  const output = { ...target }
  if (isObject(target) && isObject(source)) {
    Object.keys(source).forEach((key) => {
      if (isObject(source[key])) {
        output[key] = deepMerge(target[key] || {}, source[key])
      } else {
        output[key] = source[key]
      }
    })
  }
  return output
}

// Profile slice
const profileSlice = createSlice({
  name: 'profile',
  initialState: profileContent,
  reducers: {
    // 深層合併更新（推薦使用）
    setProfile(state, action) {
      // 使用 deep merge 回傳新物件（immutability）
      return deepMerge(state, action.payload)
    },
    // 完整替換（如果你想直接從 API 塞回完整 profile）
    replaceProfile(_state, action) {
      return { ...action.payload }
    },
    // reset 回到初始資料
    resetProfile() {
      return profileContent
    },
    // 方便更新單一欄位（簡短 action）
    updateField(state, action) {
      const { key, value } = action.payload
      // 返回新物件以免不小心 mutate 深層
      return { ...state, [key]: value }
    }
  }
})

// Counter slice（維持原本簡單功能）
const counterSlice = createSlice({
  name: 'counter',
  initialState: { value: 0 },
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    reset: (state) => {
      state.value = 0
    }
  }
})

export const {
  setProfile,
  replaceProfile,
  resetProfile,
  updateField
} = profileSlice.actions
export const { increment, decrement, reset } = counterSlice.actions

const store = configureStore({
  reducer: {
    profile: profileSlice.reducer,
    counter: counterSlice.reducer
  }
})

/** Selectors */
export const selectProfile = (state) => state.profile
export const selectCounterValue = (state) => state.counter.value

export default store
