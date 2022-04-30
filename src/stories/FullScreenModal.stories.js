import React, { useState } from 'react';

import FullScreenModal, { FullScreenModalContent } from '../components/Modal/FullScreenModal';
import Button from '../components/Button';
import Banner from '../components/Banner';

export default {
  title: 'Atoms/Modal',
  component: FullScreenModal,
  argTypes: {
    showModal: true,
  },
  decorators: [
    (Story) => (
      <div>
        <Story />
      </div>
    ),
  ],
};

const CONTAINER_STYLE = { marginTop: '32px' };

const Component = (
  <div style={CONTAINER_STYLE}>
    <Banner withIcon message="No idea what you’re doing?" type="INFO" iconTop/>
      <Button onClick={() => {}} text="Open Modal" type="SECONDARY" />
  </div>
);

const Template = (args) => {
  const [show, setShow] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <>
      <Button onClick={() => setShow(true)} text="Open Modal" type="SECONDARY" />
        {show && (
            <FullScreenModal
                showModal={show}
                currentPage={currentPage}
                onPageChange={setCurrentPage}
                onClose={setShow}
                totalPages={10}
                {...args}
            >
                <FullScreenModalContent>
                    {Component}
                </FullScreenModalContent>
            </FullScreenModal>
        )}
    </>
  );
};

export const FullScreen = Template.bind({});
FullScreen.args = {};
