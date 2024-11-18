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
            BackendEndpoints.GET_ALL_ACTIVE_LABORERS,
        )
        return apiResponse.data;
    } catch (apiError) {
        throw apiError;
    }
}

export const deleteLaborer = async (id:number): Promise<LaborerModel> => {
    try {
        const apiResponse = await AxiosService.delete<LaborerModel>(
            BackendEndpoints.DELETE_LABORER+`?id=${id}`,
        )
        return apiResponse.data
    } catch (apiError: unknown) {
        throw apiError;
    }
}

export const updateLaborer = async (id:number,requestBody:any): Promise<LaborerModel> => {
    try {
        const apiResponse = await AxiosService.put<LaborerModel>(
            BackendEndpoints.UPDATE_LABORER+`?id=${id}`,
            requestBody
        )
        return apiResponse.data
    } catch (apiError: unknown) {
        throw apiError;
    }
}
