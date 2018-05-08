import {FILTER_DATE_RANGE, FILTER_SELECTION, DELETE_ARTICLE} from '../constants';

const defaultFilterState = {
  selection: [],
  dateRange: {
    startDate: null,
    endDate: null
  }
}

export default (filterState = defaultFilterState, action) => {

  const {type, payload} = action;

  switch (type) {
    case FILTER_DATE_RANGE:
      return {...filterState, dateRange: payload.dateRange};

    case FILTER_SELECTION:
      return {...filterState, selection: payload.selection};

    case DELETE_ARTICLE:
      return {...filterState, selection: filterState.selection.filter(id => id !== payload.id)};
  }

  return filterState;
}
