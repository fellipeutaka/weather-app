import { useEffect, useReducer } from "react";

import { getCurrentPosition } from "@/utils/getCurrentPosition";

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

const errorMessages = {
  0: "You need to allow to access your location to use the application",
  1: "An error occurred while trying to get your location",
  2: "An error occurred while trying to get your location",
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

  const errorMessage = errorMessages[error?.code as keyof typeof errorMessages];

  return {
    coords,
    error,
    errorMessage,
    isLoading,
  };
}
