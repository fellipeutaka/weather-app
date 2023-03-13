import { useEffect, useReducer } from "react";

import { getCurrentPosition } from "@weather/utils/getCurrentPosition";

type State = {
  coords: GeolocationCoordinates | null;
  error: GeolocationPositionError | null;
  isLoading: boolean;
};

const initialState: State = {
  coords: null,
  error: null,
  isLoading: true,
};

type Action =
  | { type: "SET_COORDS"; payload: GeolocationCoordinates }
  | { type: "SET_ERROR"; payload: GeolocationPositionError };

function reducer(state: State, action: Action) {
  switch (action.type) {
    case "SET_COORDS":
      return { coords: action.payload, error: null, isLoading: false };
    case "SET_ERROR":
      return { error: action.payload, coords: null, isLoading: false };
    default:
      return state;
  }
}

export function useCoords() {
  const [{ coords, error, isLoading }, action] = useReducer(
    reducer,
    initialState
  );

  useEffect(() => {
    getCurrentPosition()
      .then(({ coords }) => {
        action({ type: "SET_COORDS", payload: coords });
      })
      .catch((err) => {
        if (err instanceof GeolocationPositionError) {
          action({ type: "SET_ERROR", payload: err });
        }
      });
  }, []);

  return {
    coords,
    error,
    isLoading,
  };
}
