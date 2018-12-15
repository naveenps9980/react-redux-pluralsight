import expect from 'expect';
import React from 'react';
import {mount, shallow} from 'enzyme';
import TestUtils from 'react-addons-test-utils';
import CourseForm from './CourseForm';


function setUp(saving) {
  let props = {
    course: {}, saving: saving, errors: {},
    onSave: () => {
    },
    onChange: () => {
    }
  };

  return shallow(<CourseForm {...props}/>);
}


describe('CourseForm via Enzyme', () => {
  it('should render form and h1', function () {
    const wrapper = setUp();
    expect(wrapper.find('form').length).toBe(1);
    expect(wrapper.find('h1').text()).toBe('Manage Course');
  });

  it('should save button is labeled "Save" when not saving', function () {
    const wrapper = setUp(false);
    expect(wrapper.find('input').props().value).toBe('Save');
  });

  it('should save button is labeled "Saving..." when saving', function () {
    const wrapper = setUp(true);
    expect(wrapper.find('input').props().value).toBe('Saving...');
  });
});
