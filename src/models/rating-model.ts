export interface RatingModel {
    username?:string,
    contact:string,
    comment:string,
    stars: number,
    
}

export interface GetRatingModel extends RatingModel{
    response:[]
}