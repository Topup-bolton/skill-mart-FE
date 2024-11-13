import AxiosService from "../service/axios-service.ts";
import BackendEndpoints from "../constants/backend-endpoints";
import { LabororModel } from "../models/laboror-model.ts";

export const createNewLaboror = async (reqBody: LabororModel): Promise<LabororModel> => {
    try {
        const apiResponse = await AxiosService.post<LabororModel>(
            BackendEndpoints.ADD_NEW_LABOROR,
            reqBody
        )
        return apiResponse.data;
    } catch (apiError) {
        throw apiError;
    }
}