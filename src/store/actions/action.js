import {ADD_COUNTER, DECREASE_COUNTER} from '../constants/actionTypes';

export const addCounter = payload => ({type: ADD_COUNTER, payload});

export const decreaseCounter = payload => ({type: DECREASE_COUNTER, payload});
