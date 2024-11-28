import BackendEndpoints from "../constants/backend-endpoints.ts";
import { ServiceAreaModel } from "../models/service-area";
import AxiosService from "../service/axios-service.ts";
import { DisplayErrorNotification } from "../utill/display-error-message.ts";


export const createServiceArea = async (serviceArea: string): Promise<any> => {
    try {
        const apiResponse = await AxiosService.post<any>(
            BackendEndpoints.ADD_NEW_SERVICE_AREA+`?serviceArea=${serviceArea}`,
        )
        return apiResponse.data;
    } catch (apiError:any) {
        const errorMessage =apiError.response.data.message
        DisplayErrorNotification(errorMessage);
        throw apiError;
    }
}

export const getAllServiceAreas = async (): Promise<ServiceAreaModel> => {
    try {
        const apiResponse = await AxiosService.get<ServiceAreaModel>(
            BackendEndpoints.GET_ALL_SERVICE_AREAS,
        )
        return apiResponse.data;
    } catch (apiError) {
        throw apiError;
    }
}