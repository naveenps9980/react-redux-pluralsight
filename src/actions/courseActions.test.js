import expect from 'expect';
import * as courseActions from './courseActions';
import * as types from './actionTypes';

import thunk from 'redux-thunk';
import nock from 'nock';
import configureMockStore from 'redux-mock-store';

describe('Course Actions', () => {   // Testing Actions
  describe('createCourseActions', () => {
    it('should create a CREATE_COURSE_ACTIONS actions', function () {
      // arrange
      const course = {id: 'clean-code', title: 'Clean code'};
      const expectedAction = {
        type: types.CREATE_COURSE_SUCCESS,
        course: course
      };

      //act
      const action = courseActions.createCourseSuccess(course);
      //assert
      expect(action).toEqual(expectedAction);
    });
  });
});


const middleware = [thunk];
const mockStore = configureMockStore(middleware);

describe('Async Actions', () => { // Testing Thunks
  afterEach(() => {
    nock.cleanAll();
  });

  it('should create BEGIN_AJAX_CALL and LOAD_COURSES_SUCCESS when loading courses', function (done) {
    // Here is an example call to nock.
    // nock('http://localhost:8080/api')
    //   .get('/courses')
    //   .reply(200, {body: {courses: [{id: 1, firstName: 'Naveen', lastName: 'P S'}]}});

  const expectedActions = [
    {type: types.BEGIN_AJAX_CALL},
    {type: types.LOAD_COURSE_SUCCESS, body: {courses: [{id: 'clean-code', title: 'Clean code'}]}}
  ];

  const store = mockStore({courses: []}, expectedActions);
  store.dispatch(courseActions.loadCourses())
    .then(() => {
      const actions = store.getActions();
      expect(actions[0].type).toEqual(types.BEGIN_AJAX_CALL);
      expect(actions[1].type).toEqual(types.LOAD_COURSE_SUCCESS);
      done();
    });


  });


});
