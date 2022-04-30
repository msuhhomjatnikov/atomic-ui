import React from 'react';
import { Circle } from 'react-feather';

import PreviewImg from './story-assets/previewImg.jpeg';
import PreviewIcon from './story-assets/previewIcon.svg';
import AvatarImage from '../components/AvatarImage';

const CONTAINER_STYLE = {
  marginTop: '48px',
  marginLeft: '48px',
  maxWidth: '224px',
};

const CustomElement = <Circle size={16} />;

export default {
  title: 'Atoms/AvatarImage',
  component: AvatarImage,
  decorators: [
    (Story) => (
      <div style={CONTAINER_STYLE}>
        <Story />
      </div>
    ),
  ],
};

const Template = ({ ...args }) => {
  return (
    <>
      <div style={{marginBottom: '8px'}}>
        <AvatarImage size="XS" {...args} />
      </div>
      <div style={{marginBottom: '8px'}}>
        <AvatarImage size="S" {...args} />
      </div>
      <div style={{marginBottom: '8px'}}>
        <AvatarImage size="M" {...args} />
      </div>
      <div style={{marginBottom: '8px'}}>
        <AvatarImage size="L" {...args} />
      </div>
      <div style={{marginBottom: '8px'}}>
        <AvatarImage size="XL" {...args} />
      </div>
    </>
  );
};

export const AvatarImageText = Template.bind({});
AvatarImageText.args = {
  textContent: 'Atomic UI',
};

export const AvatarImageImg = Template.bind({});
AvatarImageImg.args = {
  imgContent: PreviewImg,
};

export const AvatarImageIcon = Template.bind({});
AvatarImageIcon.args = {
  iconContent: PreviewIcon,
};

export const AvatarImageCustom = Template.bind({});
AvatarImageCustom.args = {
  customContent: CustomElement,
};

export const AvatarImageColored = Template.bind({});
AvatarImageColored.args = {
  textContent: 'Random Color',
  useRandomColor: true,
};

export const AvatarImageCustomSize = Template.bind({});
AvatarImageCustomSize.args = {
  textContent: 'Random Size',
  useRandomColor: true,
  customSize: 16,
  customTextSize: 10,
};
