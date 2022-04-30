import React from 'react';
import { shallow } from 'enzyme';

import HelpTooltip from './HelpTooltip';

describe('HelpTooltip', () => {
  describe('when iconClassName is passed', () => {
    it('icon renders with informed className', () => {
      const wrapper = shallow(<HelpTooltip iconClassName="my-fun-class" />);
      expect(wrapper.exists('.my-fun-class')).toBe(true);
    });
  });

  describe('when iconSrc is passed', () => {
    it('icon renders informed src', () => {
      const wrapper = shallow(
        <HelpTooltip iconClassName="my-fun-class" iconSrc={'fake-img-src.svg'} />,
      );
      expect(wrapper.find('img.my-fun-class').prop('src')).toBe('fake-img-src.svg');
    });
  });
});
