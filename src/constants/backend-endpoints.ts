const BackendEndpoints = {
    //laborer managemnt
    ADD_NEW_LABORER:"api/v1/user/adduser",
    GET_ALL_ACTIVE_LABORERS: "api/v1/user/findAllActiveUsers",
    DELETE_LABORER: "api/v1/user/removeUserById",
    UPDATE_LABORER:"api/v1/user/alterUserById",
    FIND_USER_BY_NAME: "api/v1/user/findAllActiveLikeByFirstNameOrLastName"

} 

export default BackendEndpoints;
