import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentAccount: {
    id:1,
    username: "nidaesmer",
    fullname: "esmer",
    avatar:"https://pbs.twimg.com/profile_images/1725298684936470528/BTVfuz1o_400x400.jpg"
  },
  accounts: [
    {
      id:1,
      username: "nidaesmer",
      fullname: "esmer",
      avatar:"https://pbs.twimg.com/profile_images/1725298684936470528/BTVfuz1o_400x400.jpg"
    },
    {
      id:1,
      username: "nidaesmer",
      fullname: "random",
      avatar:"https://pbs.twimg.com/profile_images/1725298684936470528/BTVfuz1o_400x400.jpg"
    }
  ],
};

const auth = createSlice({
  name: "auth",
  initialState,
  reducers: {
    //state manipule etme metodları
    _addAccount: (state, action) => {
      state.accounts.push(action.payload);
    },
    _removeAccount: (state, action) => {
      state.accounts = state.accounts.filter(
        (account) => account.id !== action.payload
      );
      if (state.currentAccount && action.payload === state.currentAccount.id) {
        this.setCurrentAccount(false);
      }
    },
    _setCurrentAccount: (state, action) => {
      state.currentAccount = action.payload;
    },
  },
});
export const { _addAccount, _removeAccount, _setCurrentAccount } = auth.actions;
export default auth.reducer;
