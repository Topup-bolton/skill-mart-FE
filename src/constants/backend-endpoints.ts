const BackendEndpoints = {
    //laborer managemnt
    ADD_NEW_LABORER:"api/v1/user/adduser",
    GET_ALL_ACTIVE_LABORERS: "api/v1/user/findAllActiveUsers",
    DELETE_LABORER: "api/v1/user/removeUserById",
    UPDATE_LABORER:"api/v1/user/alterUserById",
    FIND_USER_BY_SERVICE_TYPE: "api/v1/user/findAllByServiceType",

    //service area
    ADD_NEW_SERVICE_AREA:"api/v1/serviceArea/addServiceArea",
    GET_ALL_SERVICE_AREAS:"api/v1/serviceArea/findAllServiceArea",
    DELETE_SERVICE_AREA: "api/v1/serviceArea/removeServiceAreaById",


    //service type
     ADD_NEW_SERVICE_TYPE:"api/v1/serviceType/addServiceType",
     GET_ALL_SERVICE_TYPES:"api/v1/serviceType/findAllServiceType",
     DELETE_SERVICE_TYPE: "api/v1/serviceType/removeServiceTypeById",

} 

export default BackendEndpoints;
