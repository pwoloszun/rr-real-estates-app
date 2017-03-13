import { shallow } from 'enzyme';
import React from 'react';

describe('<RouteForm />', () => {
  describe('route not defined (default value)', () => {
    xit('should render create new btn', () => {
      //TODO
    });

    'should render create new btn with proper text';

    describe('on Create New Route click', () => {
      'should render "Save" btn';

      'should render "Cancel" btn';

      'should render empty name text field';

      describe('on Save click', () => {
        'should not hide name field';

        'should clear name field';

        'should trigger onSave event';
      });

      describe('on Cancel click', () => {
        'should render "Create" btn';

        'should trigger onCancel event';

        describe('on Create New Route click', () => {
          'should reset name field';
        });
      });

    });

  });

});
