import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export interface Profile {
    fullname: string;
    phoneNumber: string;
    city: string;
    address: string;
    postal: string;
}

interface ProfileState {
    items:Profile | null;
}

const savedProfile = localStorage.getItem("profile");

const initialState: ProfileState = {
    items:  savedProfile ? JSON.parse(savedProfile) : null 
}

const profileSlice = createSlice({
    name:"profile",
    initialState,
    reducers: {
        setupProfile: (state,action:PayloadAction<Profile>) => {
            state.items=action.payload
        }
    }
})

export const { setupProfile } = profileSlice.actions;
export default profileSlice.reducer;