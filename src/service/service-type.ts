import BackendEndpoints from "../constants/backend-endpoints.ts";
import { ServiceAreaModel } from "../models/service-area";
import { ServiceTypeModel } from "../models/service-type.ts";
import AxiosService from "../service/axios-service.ts";
import { DisplayErrorNotification } from "../utill/display-error-message.ts";


export const createServiceType = async (serviceType: string): Promise<any> => {
    try {
        const apiResponse = await AxiosService.post<any>(
            BackendEndpoints.ADD_NEW_SERVICE_TYPE+`?serviceType=${serviceType}`,
        )
        return apiResponse.data;
    } catch (apiError:any) {
        const errorMessage =apiError.response.data.message
        DisplayErrorNotification(errorMessage);
        throw apiError;
    }
}

export const getAllServiceTypes = async (): Promise<ServiceTypeModel> => {
    try {
        const apiResponse = await AxiosService.get<ServiceTypeModel>(
            BackendEndpoints.GET_ALL_SERVICE_TYPES,
        )
        return apiResponse.data;
    } catch (apiError) {
        throw apiError;
    }
}