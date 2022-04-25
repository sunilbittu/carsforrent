import { IDates, SelectedLocation } from './../search/search.model';

export const SEARCH_LOCATION = 'SEARCH_LOCATION';
export const SEARCH_DATES = 'SEARCH_DATES';

export function addLocationReducer(state: SelectedLocation[] = [], action) {
  console.log(action.payload);
  switch (action.type) {
    case SEARCH_LOCATION:
      return {
        ...state,
        address: action.payload.address,
        city: action.payload.city,
      };
    default:
      return state;
  }
}

export function datesReducer(state: IDates[] = [], action) {
  console.log(action.payload);
  switch (action.type) {
    case SEARCH_DATES:
      return {
        ...state,
        start: action.payload.start,
        end: action.payload.end,
      };
    default:
      return state;
  }
}
