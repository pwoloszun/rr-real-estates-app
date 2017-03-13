import { shallow, mount } from 'enzyme';
import React from 'react';

import HelloWorld from '../index';

describe('<HelloWorld />', () => {
  describe('user prop not defined, welcome header rendering', () => {
    let shallowedComponent;
    let h3;

    beforeEach(() => {
      shallowedComponent = shallow(<HelloWorld/>);
      h3 = shallowedComponent.find("h3");
    });

    it('should render welcome header', () => {
      expect(h3).toBeDefined();
    });

    it('should render welcome message inside header', () => {
      expect(h3.text()).toEqual('Hi!!!');
    });

    it('should not render welcome msg', () => {
      const renderedComponent = shallow(<HelloWorld/>);
      expect(renderedComponent.contains(<p></p>)).toEqual(false);
    });

    describe('user prop has changed', () => {
      let user;

      beforeEach(() => {
        user = {name: "ed"};
        shallowedComponent.setProps({
          user
        });
      });

      it('should welcome given user', () => {
        expect(shallowedComponent.contains(<p>Greetings {user.name.toUpperCase()}!</p>)).toEqual(true);
      });
    });
  });

  describe('user prop has been passed', () => {
    it('should welcome given user', () => {
      const user = {name: "bob"};
      const renderedComponent = shallow(<HelloWorld user={user}/>);
      expect(renderedComponent.contains(<p>Greetings {user.name.toUpperCase()}!</p>)).toEqual(true);
    });
  });

  describe('header on click event', () => {
    describe('onHeaderClick prop defined', () => {
      it('should welcome given user', () => {
        const mockCallback = jest.fn();
        const mountedComponent = mount(<HelloWorld onHeaderClick={mockCallback}/>);

        const h3 = mountedComponent.find("h3");
        h3.simulate("click");

        expect(mockCallback).toHaveBeenCalled();
      });
    });

    describe('onHeaderClick prop not defined', () => {
      it('should throw exception', () => {
        const mountedComponent = mount(<HelloWorld/>);
        const h3 = mountedComponent.find("h3");
        expect(() => {
          h3.simulate("click");
        }).toThrow();
      });
    });
  });
});
