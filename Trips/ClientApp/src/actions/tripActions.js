import axios from 'axios';

export const GET_ALL_TRIPS_REQUEST = 'GET_ALL_TRIPS_REQUEST';
export const GET_ALL_TRIPS_SUCCESS = 'GET_ALL_TRIPS_SUCCESS';
export const GET_ALL_TRIPS_ERROR = 'GET_ALL_TRIPS_ERROR';

const getTripSuccess = payload => ({
    type: GET_ALL_TRIPS_SUCCESS,
    payload
});

const getTripsError = payload => ({
    type: GET_ALL_TRIPS_ERROR,
    payload
});

export const getAllTrips = () => dispatch => {
    dispatch({type: GET_ALL_TRIPS_REQUEST});
    return axios.get('api/trips/GetTrips').then(res => {
        const reponse = res.data;
        dispatch(getTripSuccess(reponse));
    }).catch(error => {
        dispatch(getTripsError('Something went wrong!'));
        return Promise.reject({});
    })
}