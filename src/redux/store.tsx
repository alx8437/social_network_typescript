import {v1} from "uuid";
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";

//State types
export type MessagePropsType = {
    id: string
    message: string
}
export type DialogItemPropsType = {
    id: string
    name: string
}
export type PostPropsType = {
    id: string
    message: string
    likesCount: number
}
export type DialogsPage = {
    dialogs: Array<DialogItemPropsType>
    messages: Array<MessagePropsType>
    newTextMessage: string
}
export  type ProfilePage = {
    posts: Array<PostPropsType>
    newPostText: string
}
export type StateType = {
    dialogsPage: DialogsPage
    profilePage: ProfilePage
}

//Action Creates Type
export type AddPostActionType = {
    type: "ADD-POST"
}
export type UpdateTextPost = {
    type: "UPDATE-TEXT-POST"
    newTextPost: string
}
export type AddMessageActionType = {
    type: "ADD-MESSAGE"
}
export type UpdateTextMessage = {
    type: "UPDATE-TEXT-MESSAGE"
    newTextMessage: string
}

export type ActionTypes = AddPostActionType | UpdateTextPost | AddMessageActionType | UpdateTextMessage



//Store types
export type StoreType = {
    _state: StateType
    _rerenderEntireTree: () => void
    subscribe: (observer: () => void) => void
    getState: () => StateType
    dispatch: (action: UpdateTextPost | AddMessageActionType |
        AddPostActionType | UpdateTextMessage) => void
}

let store: StoreType = {
    _state: {
        dialogsPage: {
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
            newTextMessage: ""
        },
        profilePage: {
            posts: [
                {id: v1(), message: "Hello, i like this course", likesCount: 15},
                {id: v1(), message: "It's a nice course, yes!", likesCount: 20},
                {id: v1(), message: "Hi!", likesCount: 2},
            ],
            newPostText: ""
        }
    },
    _rerenderEntireTree() {},

    getState() {
        return this._state
    },
    subscribe(observer: () => void) {
        this._rerenderEntireTree = observer
    },

    dispatch(action) {
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._state.profilePage = profileReducer(this._state.profilePage, action)

        this._rerenderEntireTree()
    }
}




export default store








