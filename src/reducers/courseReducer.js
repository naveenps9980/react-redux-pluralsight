import * as types from './../actions/actionTypes';

export default function createReducer(state = [], action) {
  switch (action.type) {
    case types.CREATE_COURSE:
      return [...state,
      Object.assign({}, action.course)
      ];
    case types.LOAD_COURSE_SUCCESS:
      return action.courses;
    case types.CREATE_COURSE_SUCCESS:
      return [...state,
        Object.assign({}, action.course)
      ];
    case types.UPDATE_COURSE_SUCCESS:
      return [...state.filter(course => course.id !== action.course.id),
        Object.assign({}, action.course)
      ];

    default:
      return state;
  }
}
