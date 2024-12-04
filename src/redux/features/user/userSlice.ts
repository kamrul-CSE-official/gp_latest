  import { createSlice, PayloadAction } from "@reduxjs/toolkit";
  import { IEmployee } from "@/types/globelTypes";
  
  interface IUserinfo {
    userData: IEmployee | null;  
  }
  
  const initialState: IUserinfo = {
    userData: null,
  };
  
  const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
      setUserData: (state, action: PayloadAction<IEmployee>) => {
        state.userData = action.payload;
      },
    },
  });
  
  export const { setUserData } = userSlice.actions;
  export default userSlice.reducer;
  