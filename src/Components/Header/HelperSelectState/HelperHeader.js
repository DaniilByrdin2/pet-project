export const SelectPhotoUser = ( state ) => {
    let userPhoto
    if ( state.ProfileData.Profile_Users !== null ) {
        userPhoto = state.ProfileData.Profile_Users.data.photos.small
    } else {
        userPhoto = ''
    }
    return userPhoto
}