import {
  REGISTER_NEW_USER,
  SEND_MESSAGE,
  FETCH_MESSAGES,
} from "../actiontypes";

export const registerNewUser = (payload) => ({
  type: REGISTER_NEW_USER,
  payload,
});

export const sendMessage = (payload) => ({
  type: SEND_MESSAGE,
  payload,
});

export const fetchMessages = () => ({
  type: FETCH_MESSAGES,
});
