const initialState = [
  {
    name: "Brainey",
    age: 200,
    height: "5cm",
    id: 0,
  },
];

export const reducer = (state = initialState, action) => { 
  switch (action.type) {
    case FETCH_SMURF_SUCCESS:
      return state;

      default:
          return state;


  }
};
