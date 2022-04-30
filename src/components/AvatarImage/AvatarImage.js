import React, { memo, useMemo } from 'react';

import './AvatarImage.sass';

const AVATAR_SIZE_DEFS = {
  XS: {
    class: '-xs',
  },
  S: {
    class: '-s',
  },
  M: {
    class: '-m',
  },
  L: {
    class: '-l',
  },
  XL: {
    class: '-xl',
  },
};

const AVATAR_COLOR_DEFS = {
  DEFAULT: {
    class: '-default',
  },
  BLUE: {
    class: '-blue',
  },
  PURPLE: {
    class: '-purple',
  },
  PINK: {
    class: '-pink',
  },
  RED: {
    class: '-red',
  },
  ORANGE: {
    class: '-orange',
  },
  YELLOW: {
    class: '-yellow',
  },
  GREEN: {
    class: '-green',
  },
  GRAY: {
    class: '-gray',
  },
};

const AVATAR_COLORS = [
  'var(--blue-300)',
  'var(--purple-300)',
  'var(--pink-300)',
  'var(--red-300)',
  'var(--orange-300)',
  'var(--gray-300)',
  'var(--green-300)',
  'var(--yellow-300)',
];

const generateColor = (text) => {
  let hash = 0;

  for (let i = 0; i < text.length; i++) {
    hash += text.charCodeAt(i);
  }

  return hash % AVATAR_COLORS.length;
};

const getInitials = (text, regex) =>
  text
    ?.split(regex)
    .filter((e) => e)
    .slice(0, 2)
    .map((part) => part.charAt(0).toUpperCase())
    .join('');

export const AvatarImageContent = memo(function AvatarImageContent({
  size = 'M',
  iconContent,
  textContent,
  imgContent,
  customSize,
  customTextSize,
  customContent,
  regex = /[^a-zA-Z]/,
  contentClass = 'avatar-image-content',
}) {
  const sizeStyle = useMemo(
    () => ({
      height: customSize ? `${customSize}px` : undefined,
      width: customSize ? `${customSize}px` : undefined,
      fontSize: customTextSize ? `${customTextSize}px` : undefined,
    }),
    [customSize, customTextSize],
  );

  if (customContent) {
    return (
      <div
        className={`${customSize ? '' : AVATAR_SIZE_DEFS[size].class} ${contentClass}`}
        style={sizeStyle}
      >
        {customContent}
      </div>
    );
  }

  if (iconContent) {
    return (
      <img
        src={iconContent}
        alt="icon"
        className={`avatar-image-icon ${
          customSize ? '' : AVATAR_SIZE_DEFS[size].class
        } ${contentClass}`}
        style={sizeStyle}
      />
    );
  }

  if (imgContent) {
    return (
      <img
        src={imgContent}
        alt="imgContent"
        className={`avatar-image-img ${
          customSize ? '' : AVATAR_SIZE_DEFS[size].class
        } ${contentClass}`}
        style={sizeStyle}
      />
    );
  }

  if (textContent) {
    return (
      <div
        className={`avatar-image-text ${
          customTextSize ? '' : AVATAR_SIZE_DEFS[size].class
        } ${contentClass}`}
        style={sizeStyle}
      >
        {getInitials(textContent, regex)}
      </div>
    );
  }

  return null;
});

const AvatarImage = memo(
  ({
    size = 'M',
    customSize,
    textContent,
    backgroundColor = 'DEFAULT',
    containerClass = '',
    useRandomColor = false,
    ...contentProps
  }) => {
    const style = useMemo(
      () => ({
        backgroundColor: useRandomColor && AVATAR_COLORS[generateColor(textContent)],
        height: customSize && `${customSize}px`,
        width: customSize && `${customSize}px`,
      }),
      [useRandomColor, textContent, customSize],
    );

    return (
      <div
        className={`avatar-image-container ${customSize ? '' : AVATAR_SIZE_DEFS[size].class} ${
          !useRandomColor && AVATAR_COLOR_DEFS[backgroundColor].class
        } ${containerClass}`}
        style={style}
      >
        <AvatarImageContent
          {...contentProps}
          size={size}
          customSize={customSize}
          textContent={textContent}
        />
      </div>
    );
  },
);

export default AvatarImage;
