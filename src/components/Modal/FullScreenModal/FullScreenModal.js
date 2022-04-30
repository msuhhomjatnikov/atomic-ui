import React, { memo, useCallback, useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight, X } from 'react-feather';
import FocusTrap from 'focus-trap-react';

import Button, { BUTTON_SIZE, BUTTON_TYPE } from '../../Button';

import './FullScreenModal.sass';

export const FullScreenModalContent = memo(function FullScreenModalContent({
  headerText,
  descriptionText,
  children,
}) {
  return (
    <div className="full-screen-modal-content">
      {headerText ? <h3 className="text-header">{headerText}</h3> : null}
      {descriptionText ? <div className="text-description">{descriptionText}</div> : null}
      {children}
    </div>
  );
});

const FullScreenModal = memo(function FullScreenModal({
  showModal = false,
  onPageChange = {},
  currentPage = 1,
  totalPages = 1,
  onClose = {},
  usePagination = true,
  className,
  children,
  disableBackButton,
  disableForwardButton,
  disableFocusTrap = false,
}) {
  const [page, setPage] = useState(currentPage);

  useEffect(() => {
    setPage(currentPage);
  }, [currentPage]);

  const onNextClick = useCallback(() => {
    onPageChange(page + 1);
  }, [onPageChange, page]);

  const onPreviousClick = useCallback(() => {
    onPageChange(page - 1);
  }, [onPageChange, page]);

  const onCloseModal = useCallback(() => {
    onClose(false);
  }, [onClose]);

  return (
    <FocusTrap active={showModal && !disableFocusTrap}>
      <div
        className={`full-screen-modal-container ${showModal ? 'visible' : ''} ${
          className ? className : ''
        }`}
      >
        <div className="full-screen-modal-top-bar">
          {usePagination ? (
            <>
              <Button
                size={BUTTON_SIZE.MEDIUM}
                type={BUTTON_TYPE.SECONDARY}
                className="button-container mr-1"
                disabled={page <= 1 || disableBackButton}
                onClick={onPreviousClick}
              >
                <ChevronLeft className="icon" />
              </Button>
              <Button
                size={BUTTON_SIZE.MEDIUM}
                type={BUTTON_TYPE.SECONDARY}
                className="button-container"
                disabled={page >= totalPages || disableForwardButton}
                onClick={onNextClick}
              >
                <ChevronRight className="icon" />
              </Button>
            </>
          ) : null}
          <Button
            size={BUTTON_SIZE.MEDIUM}
            type={BUTTON_TYPE.SECONDARY}
            className="button-container -align-right"
            onClick={onCloseModal}
          >
            <X className="icon" />
          </Button>
        </div>
        <div className="full-screen-modal-divider" />
        {children ? <div className="full-screen-modal-children">{children}</div> : null}
      </div>
    </FocusTrap>
  );
});

export default FullScreenModal;
