import {v1} from "uuid";
import {DialogsStateType, MessagePropsType} from "../rootStateTypes";

export enum ACTION_TYPES_DIALOGS {
    ADD_MESSAGE = "Dialogs/ADD_MESSAGE",
}

export type AddMessageActionType = {
    type: ACTION_TYPES_DIALOGS.ADD_MESSAGE,
    newTextMessage: string
}

const initialState: DialogsStateType = {
    dialogs: [
        {id: v1(), name: "Alex"},
        {id: v1(), name: "Sveta"},
        {id: v1(), name: "Andrey"},
        {id: v1(), name: "Victor"},
        {id: v1(), name: "Georgy"}
    ],
    messages: [
        {id: v1(), message: "Hi"},
        {id: v1(), message: "How are you"},
        {id: v1(), message: "I learn React!"},
        {id: v1(), message: "I am too"},
        {id: v1(), message: "It's grate!"},
    ],
}

const dialogsReducer = (state: DialogsStateType = initialState, action: DialogsActionsType): DialogsStateType => {
    switch (action.type) {
        case ACTION_TYPES_DIALOGS.ADD_MESSAGE:
            const newMessage: MessagePropsType = {
                id: v1(),
                message: action.newTextMessage,
            };
            return {
                ...state,
                messages: [...state.messages, newMessage],
            }
        default:
            return state
    }
}

export const addMessageAC = (newTextMessage: string): AddMessageActionType => {
    return {
        type: ACTION_TYPES_DIALOGS.ADD_MESSAGE,
        newTextMessage,
    }
}


export type DialogsActionsType = AddMessageActionType

export default dialogsReducer;