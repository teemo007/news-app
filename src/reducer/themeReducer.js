export const initialState = {
  darkMode: true,
};

export const themeReducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE":
      return { darkMode: !state.darkMode };

    default:
      return state;
  }
};
