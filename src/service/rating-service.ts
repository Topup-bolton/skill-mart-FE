import BackendEndpoints from "../constants/backend-endpoints";
import { RatingModel } from "../models/rating-model.ts";
import AxiosService from "../service/axios-service.ts";
import { DisplayErrorNotification } from "../utill/display-error-message.ts";



export const createRating = async (reqBody:RatingModel ): Promise<RatingModel> => {
    try {
        const apiResponse = await AxiosService.post<RatingModel>(
            BackendEndpoints.ADD_NEW_RATE,
            reqBody 
        )
        return apiResponse.data;
    } catch (apiError:any) {
        const errorMessage =apiError.response.data.message
        DisplayErrorNotification(errorMessage);
        throw apiError;
    }
}