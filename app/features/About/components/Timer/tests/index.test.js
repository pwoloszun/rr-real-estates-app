import { shallow } from 'enzyme';
import React from 'react';

// import Timer from '../index';

const tickPending = (count) => {
  for (let i = 0; i < count; i++) {
    jest.runOnlyPendingTimers();
  }
};

describe('<Timer />', () => {
  xdescribe('seconds prop not defined (default value)', () => {
    let shallowedWrapper;
    let timeEl;

    beforeEach(() => {
      shallowedWrapper = shallow(<Timer/>);
    });

    it('should render time', () => {
    });

    it('should render time in proper format', () => {
    });

    it('should render start btn', () => {
    });

    it('should render pause btn', () => {
    });

    it('should disable pause btn by default', () => {
    });

    it('should render reset btn', () => {
    });

    describe('on start btn click', () => {
      beforeEach(() => {
        jest.useFakeTimers();
      });

      it('should render formated time since start', () => {
      });

      it('should disable start btn', () => {
      });

      it('should enable pause btn', () => {
      });

      describe('on pause btn click', () => {
        beforeEach(() => {
          tickPending(98);
        });

        it('should render formated time', () => {
        });

        it('should not update time after paused', () => {
        });

        it('should resume after start click', () => {
        });
      });

      describe('on reset btn click', () => {
        beforeEach(() => {
          tickPending(22);
        });

        it('should render default formated time', () => {
        });

        it('should start from default after start click', () => {
        });
      });

    });

  });

});
