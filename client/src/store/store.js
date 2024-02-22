export const initialPosition = {
  lat: 49.9613696,
  lng: 36.1562112,
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "current":
      return {
        lat: action.payload.lat,
        lng: action.payload.lng,
      };
    default:
      return state;
  }
};
