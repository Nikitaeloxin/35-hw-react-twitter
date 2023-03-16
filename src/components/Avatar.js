import React, {useContext} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {changeAvatar, changeName} from "../actions/userActions";



const Avatar = ({size}) => {
    const {name,avatar} = useSelector(state=>state.user);
    const dispatch = useDispatch();
    return (
        <img
            className={`user-avatar ${size ?? ''}`}
            src={avatar} alt={name}
            onClick={() => {
                const url = prompt('Enter new avatar url');
                dispatch(changeAvatar(url))
            }}
            onContextMenu={
                e => {
                    e.preventDefault();
                    const newName = prompt('Enter new name');
                    dispatch(changeName(newName))
                }
            }
        />
    );
};

export default Avatar;