export const CHANGE_NAME = 'CHANGE_NAME';
export const CHANGE_AVATAR = 'CHANGE_AVATAR';

export const changeName = name =>({
    type:CHANGE_NAME,
    payload: name
})

export const changeAvatar = url =>({
    type:CHANGE_AVATAR,
    payload: url
})
