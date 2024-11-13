import AxiosService from "../service/axios-service.ts";
import BackendEndpoints from "../constants/backend-endpoints";
import { GetLaborerModel, LaborerModel } from "../models/laboror-model.ts";

export const createNewLaborer = async (reqBody: LaborerModel): Promise<LaborerModel> => {
    try {
        const apiResponse = await AxiosService.post<LaborerModel>(
            BackendEndpoints.ADD_NEW_LABORER,
            reqBody
        )
        return apiResponse.data;
    } catch (apiError) {
        throw apiError;
    }
}

export const getAllLaborers = async (): Promise<GetLaborerModel> => {
    try {
        const apiResponse = await AxiosService.get<GetLaborerModel>(
            BackendEndpoints.GET_ALL_LABORERS,
        )
        return apiResponse.data;
    } catch (apiError) {
        throw apiError;
    }
}