import { REGISTER_NEW_USER, SEND_MESSAGE } from "../actiontypes";

const initialState = {
  // users: [{ name: "Ore", id: "098765456" }],
  // messageStack: [{ text: "Hi", from: { name: "Ore", id: "098765456" } }],

  users: [],
  messageStack: [],
};

export default function gReducer(state = initialState, action) {
  switch (action.type) {
    case REGISTER_NEW_USER:
      return {
        ...state,
        users: [...state.users, action.payload],
      };

    case SEND_MESSAGE:
      return {
        ...state,
        messageStack: [...state.messageStack, action.payload],
      };

    default:
      return state;
  }
}
