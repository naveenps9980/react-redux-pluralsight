import expect from 'expect';
import { createStore } from 'redux';
import rootReducer from '../reducers';
import intitalState from '../reducers/initialState';
import * as courseActions from '../actions/courseActions';

describe('Store', () => {

  it('should handle creating courses', function () {
    // arrange
    const store = createStore(rootReducer, intitalState);
    const course = {
      title: 'Clean Code'
    };

    //act
    const action = courseActions.createCourseSuccess(course);
    store.dispatch(action);

    //assert
    const actual = store.getState().courses[0];
    const expected = {
      title: 'Clean Code'
    };

    expect(actual).toEqual(expected);
  });
});
