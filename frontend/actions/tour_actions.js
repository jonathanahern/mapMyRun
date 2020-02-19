import * as APIUtil from "../util/tour_api_util";

export const RECEIVE_TOUR = "RECEIVE_TOUR";
export const RECEIVE_TOURS = "RECEIVE_TOURS";

export const receiveTour = tour => ({
    type: RECEIVE_TOUR,
    tour
});

export const receiveTours = tours => ({
    type: RECEIVE_TOURS,
    tours
});

export const createTour = tour => dispatch =>
    APIUtil.createTour(tour).then(
        tour => dispatch(receiveTour(tour))
);

export const fetchTours = () => dispatch =>
    APIUtil.fetchTours().then(
        tours => dispatch(receiveTours(tours))
);
