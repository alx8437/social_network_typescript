import React from 'react';
import styles from './Post.module.css';
import avatar from '../../../../assets/images/userNoPhoto.png'

export type PostPropsType = {
    id: number
    message: string
    likesCount: number
}

const Post = (props: PostPropsType) => {
    return (
        <div>
            <div className={styles.item}>
                <img src={avatar} alt="avatar" />
                <div className={styles.messageWrapper}>{props.message}</div>
            </div>
            <div>
                <span>like {props.likesCount}</span>
            </div>
        </div>
    )
};

export default Post;





