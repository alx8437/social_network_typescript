import {v1} from "uuid";
import {PostPropsType, ProfileReducerType} from "../stateTypes";
import {ACTIONS_TYPE_PROFILE, ProfileActionsType} from "./profileActions";

const initialState: ProfileReducerType = {
    posts: [
        {id: v1(), message: "Hello, i like this course", likesCount: 15},
        {id: v1(), message: "It's a nice course, yes!", likesCount: 20},
        {id: v1(), message: "Hi!", likesCount: 2},
    ],
    newPostText: ""
}

const profileReducer = (state: ProfileReducerType = initialState, action: ProfileActionsType): ProfileReducerType => {
    switch (action.type) {
        case ACTIONS_TYPE_PROFILE.ADD_POST:
            const newPost: PostPropsType = {
                id: v1(),
                message: state.newPostText,
                likesCount: 3
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ""
            }
        case ACTIONS_TYPE_PROFILE.UPDATE_TEXT_POST:
            return {
                ...state,
                newPostText: action.newTextPost
            }
        default:
            return state
    }
}

export default profileReducer;