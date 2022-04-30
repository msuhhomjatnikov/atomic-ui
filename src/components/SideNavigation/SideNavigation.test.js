import React from 'react';
import { shallow, mount } from 'enzyme';

import SideNavigation from './SideNavigation';

const completeOption = [
  {
    label: 'Billing account',
    state: 'COMPLETED',
    value: 'BILLING_ACCOUNT',
  },
];

const errorOption = [
  {
    label: 'Company leadership',
    state: 'ERROR',
    value: 'COMPANY_LEADERSHIP',
  },
];

const lockedOption = [
  {
    label: 'Financial information',
    state: 'LOCKED',
    value: 'FINANCIAL_INFORMATION',
  },
];

const incompleteOption = [
  {
    label: 'Company details',
    state: 'INCOMPLETE',
    value: 'COMPANY_DETAILS',
  },
];

describe('SideNavigation', () => {
  describe('when className is passed', () => {
    it('renders informed className', () => {
      const wrapper = shallow(<SideNavigation className="custom-class" />);
      expect(wrapper.exists('.custom-class')).toBe(true);
    });
  });

  describe('when withIcon is true', () => {
    it('renders feather icons', () => {
      const wrapper = mount(<SideNavigation withIcon options={completeOption} />);
      expect(wrapper.exists('.side-nav__button__icon')).toBe(true);
    });

    it('renders other icons', () => {
      const wrapper = mount(<SideNavigation withIcon options={lockedOption} />);
      expect(wrapper.exists('.side-nav__button__icon')).toBe(true);
    });
  });

  describe('when withIcon is false', () => {
    it('does not render icons', () => {
      const wrapper = mount(<SideNavigation withIcon={false} />);
      expect(wrapper.exists('.side-nav__button__icon')).toBe(false);
    });
  });

  describe('when there is a defaultValue', () => {
    it('renders active class', () => {
      const wrapper = mount(
        <SideNavigation options={incompleteOption} defaultValue={incompleteOption[0].value} />,
      );
      expect(wrapper.exists('.side-nav__button--active')).toBe(true);
    });
  });

  describe('states', () => {
    it('renders LOCKED class', () => {
      const wrapper = mount(<SideNavigation options={lockedOption} />);
      expect(wrapper.exists('.side-nav__button--locked')).toBe(true);
    });

    it('renders COMPLETE class', () => {
      const wrapper = mount(<SideNavigation options={completeOption} />);
      expect(wrapper.exists('.side-nav__button--complete')).toBe(true);
    });

    it('renders ERROR class', () => {
      const wrapper = mount(<SideNavigation options={errorOption} />);
      expect(wrapper.exists('.side-nav__button--error')).toBe(true);
    });

    it('renders INCOMPLETE class', () => {
      const wrapper = mount(<SideNavigation options={incompleteOption} />);
      expect(wrapper.exists('.side-nav__button--incomplete')).toBe(true);
    });
  });
});
