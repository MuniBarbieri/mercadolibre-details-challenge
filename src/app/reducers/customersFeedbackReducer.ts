import {Reducer} from "react";

export interface customerFeedbackData {
  summary?: string;
  feedback?: string;
  isUp: boolean;
  isDown: boolean;
  id: number;
  totalThumbsUp: number;
  totalThumbsDown: number;
}

export interface CustomerFeedbackState {
  buyersFeedback: customerFeedbackData[];
}

export const initialState: CustomerFeedbackState = {
  buyersFeedback: [
    {
      summary: "Increible",
      feedback:
        "Increíble. Tamaño, calidad, todo. No sabemos dónde meterlo de lo grande que es. 100% satisfecho.",
      isUp: false,
      isDown: false,
      totalThumbsUp: 0,
      totalThumbsDown: 0,
      id: 1,
    },
    {
      summary: "Excelente",
      feedback: "Es hermoso y enorme! tal cual lo describe la publicación",
      isUp: false,
      isDown: false,
      totalThumbsUp: 0,
      totalThumbsDown: 0,
      id: 2,
    },
    {
      summary: "Increible",
      feedback: "Divino !!! quedo conforme la quinciañera con su regalo.",
      isUp: false,
      isDown: false,
      totalThumbsUp: 0,
      totalThumbsDown: 0,
      id: 3,
    },
  ],
};

export type FeedbackActions =
  | {type: "UPDATE_IS_UP"; payload: {id: number; totalThumbs?: number}}
  | {type: "UPDATE_IS_DOWN"; payload: {id: number; totalThumbs?: number}};

export const customersFeedbackReducer: Reducer<CustomerFeedbackState, FeedbackActions> = (
  state = initialState,
  action,
) => {
  switch (action.type) {
    case "UPDATE_IS_UP": {
      const index = state.buyersFeedback.findIndex((feedback) => feedback.id == action.payload.id);
      const newArray = [...state.buyersFeedback];

      if (newArray[index].isDown) {
        return {
          ...state,
          buyersFeedback: newArray,
        };
      }
      newArray[index].isUp = !newArray[index].isUp;

      newArray[index].totalThumbsUp == 0
        ? (newArray[index].totalThumbsUp = ++newArray[index].totalThumbsUp)
        : (newArray[index].totalThumbsUp = --newArray[index].totalThumbsUp);

      return {
        ...state,
        buyersFeedback: newArray,
      };
    }
    case "UPDATE_IS_DOWN": {
      const index = state.buyersFeedback.findIndex((feedback) => feedback.id == action.payload.id);
      const newArray = [...state.buyersFeedback];

      if (newArray[index].isUp) {
        return {
          ...state,
          buyersFeedback: newArray,
        };
      }

      newArray[index].isDown = !newArray[index].isDown;

      newArray[index].totalThumbsDown == 0
        ? (newArray[index].totalThumbsDown = ++newArray[index].totalThumbsDown)
        : (newArray[index].totalThumbsDown = --newArray[index].totalThumbsDown);

      return {
        ...state,
        buyersFeedback: newArray,
      };
    }
    default:
      return state;
  }
};
