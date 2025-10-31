import { createAsyncThunk, createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit/react";


interface User {
    id: string;
    name: string;
    email: string;
    address: string;
}

interface UsersState {
    UsersAPIData: any[];
    users: User[];
}

const initialState: UsersState = {
    UsersAPIData: [],
    users: []
};


export const fetchAPIUsers = createAsyncThunk('usersget', async () => {
    const response = await fetch('https://fakestoreapi.com/products');
    const data = await response.json();
    console.log("Fetching users from API...", data);
    return data;
});



const userSlice = createSlice({
    name: 'users',
    initialState,


    reducers: {


        addUser: (state, action: PayloadAction<{ name: string; email: string; address: string }>) => {


            const newUser = {

                id: nanoid(),
                name: action.payload.name,
                email: action.payload.email,
                address: action.payload.address
            }

            state.users.push(newUser);

        },


        removeUser: (state, action: PayloadAction<string>) => {
            state.users = state.users.filter(user => user.id !== action.payload);


        }





    },

    extraReducers: (builder) => {
        builder.addCase(fetchAPIUsers.fulfilled, (state, action: PayloadAction<any[]>) => {

            state.UsersAPIData = action.payload;
        });
    }



})



export const { addUser, removeUser } = userSlice.actions;
export default userSlice.reducer;