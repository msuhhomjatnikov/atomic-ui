import React from 'react';
import { shallow } from 'enzyme';

import { ReactComponent as Bolt } from './assets/bolt.svg';
import { ReactComponent as Clock } from './assets/clock.svg';
import { ReactComponent as CheckCircle } from './assets/check-circle.svg';
import { ReactComponent as XCircle } from './assets/x-circle.svg';

import StatusBadge from './StatusBadge';
import { STATUS_BADGE_COLOR, STATUS_BADGE_ICON } from '.';

describe('StatusBadge', () => {
  describe('when text is passed', () => {
    it('renders with informed text', () => {
      const wrapper = shallow(
          <StatusBadge
              color={STATUS_BADGE_COLOR.GREEN}
              icon={STATUS_BADGE_ICON.CHECK_CIRCLE}
              text={'Pending'}
          />,
      );
      expect(wrapper.find('.badge-label').text()).toBe('Pending');
    });
  });

  describe('when color GREEN', () => {
    it('renders with correct className', () => {
      const wrapper = shallow(
          <StatusBadge color={STATUS_BADGE_COLOR.GREEN} icon={STATUS_BADGE_ICON.CHECK_CIRCLE}/>,
      );
      expect(wrapper.exists('.-green')).toBe(true);
    });
  });

  describe('when color BLUE', () => {
    it('renders with correct className', () => {
      const wrapper = shallow(
          <StatusBadge color={STATUS_BADGE_COLOR.BLUE} icon={STATUS_BADGE_ICON.CHECK_CIRCLE}/>,
      );
      expect(wrapper.exists('.-blue')).toBe(true);
    });
  });

  describe('when color RED', () => {
    it('renders with correct className', () => {
      const wrapper = shallow(
          <StatusBadge color={STATUS_BADGE_COLOR.RED} icon={STATUS_BADGE_ICON.CHECK_CIRCLE}/>,
      );
      expect(wrapper.exists('.-red')).toBe(true);
    });
  });

  describe('when color YELLOW', () => {
    it('renders with correct className', () => {
      const wrapper = shallow(
          <StatusBadge color={STATUS_BADGE_COLOR.YELLOW} icon={STATUS_BADGE_ICON.CHECK_CIRCLE}/>,
      );
      expect(wrapper.exists('.-yellow')).toBe(true);
    });
  });

  describe('when color ORANGE', () => {
    it('renders with correct className', () => {
      const wrapper = shallow(
          <StatusBadge color={STATUS_BADGE_COLOR.ORANGE} icon={STATUS_BADGE_ICON.CHECK_CIRCLE}/>,
      );
      expect(wrapper.exists('.-orange')).toBe(true);
    });
  });

  describe('when color PINK', () => {
    it('renders with correct className', () => {
      const wrapper = shallow(
          <StatusBadge color={STATUS_BADGE_COLOR.PINK} icon={STATUS_BADGE_ICON.CHECK_CIRCLE}/>,
      );
      expect(wrapper.exists('.-pink')).toBe(true);
    });
  });

  describe('when color PURPLE', () => {
    it('renders with correct className', () => {
      const wrapper = shallow(
          <StatusBadge color={STATUS_BADGE_COLOR.PURPLE} icon={STATUS_BADGE_ICON.CHECK_CIRCLE}/>,
      );
      expect(wrapper.exists('.-purple')).toBe(true);
    });
  });

  describe('when color GRAY', () => {
    it('renders with correct className', () => {
      const wrapper = shallow(
          <StatusBadge color={STATUS_BADGE_COLOR.GRAY} icon={STATUS_BADGE_ICON.CHECK_CIRCLE}/>,
      );
      expect(wrapper.exists('.-gray')).toBe(true);
    });
  });

  describe('when icon CHECK_CIRCLE', () => {
    it('renders icon component and className', () => {
      const wrapper = shallow(
          <StatusBadge color={STATUS_BADGE_COLOR.GREEN} icon={STATUS_BADGE_ICON.CHECK_CIRCLE}/>,
      );
      expect(wrapper.exists(CheckCircle)).toBe(true);
      expect(wrapper.exists('.check-circle')).toBe(true);
    });
  });

  describe('when icon X_CIRCLE', () => {
    it('renders icon component and className', () => {
      const wrapper = shallow(
          <StatusBadge color={STATUS_BADGE_COLOR.GREEN} icon={STATUS_BADGE_ICON.X_CIRCLE}/>,
      );
      expect(wrapper.exists(XCircle)).toBe(true);
      expect(wrapper.exists('.x-circle')).toBe(true);
    });
  });

  describe('when icon CLOCK', () => {
    it('renders icon component and className', () => {
      const wrapper = shallow(
          <StatusBadge color={STATUS_BADGE_COLOR.GREEN} icon={STATUS_BADGE_ICON.CLOCK}/>,
      );
      expect(wrapper.exists(Clock)).toBe(true);
      expect(wrapper.exists('.clock')).toBe(true);
    });
  });

  describe('when icon BOLT', () => {
    it('renders icon component and className', () => {
      const wrapper = shallow(
          <StatusBadge color={STATUS_BADGE_COLOR.GREEN} icon={STATUS_BADGE_ICON.BOLT}/>,
      );
      expect(wrapper.exists(Bolt)).toBe(true);
      expect(wrapper.exists('.bolt')).toBe(true);
    });
  });
})
