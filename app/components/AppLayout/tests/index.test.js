import React from 'react';
import { shallow } from 'enzyme';

import AppLayout from '../index';

describe('<AppLayout />', () => {
  it('should render its children', () => {
    const children = (<h1>Test</h1>);
    const renderedComponent = shallow(
      <AppLayout>
        {children}
      </AppLayout>
    );
    expect(renderedComponent.contains(children)).toBe(true);
  });
});
