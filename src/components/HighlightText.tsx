import classNames from 'classnames';
import React from 'react';

/*
    Component source: https://stackoverflow.com/questions/29652862/highlight-text-using-reactjs
 */
export default function HighlightText({ text = '', highlight = '' }) {
  if (!highlight) {
    return <p title={text} className="text-left line-clamp-1">{text}</p>;
  }

  const parts = text.split(new RegExp(`(${highlight})`, 'gi'));

  return (
    <p className="text-left line-clamp-1">
      {' '}
      { parts.map((part) => (
        <span
          key={part}
          className={classNames({
            'font-semibold': part.toLowerCase() === highlight.toLowerCase(),
          })}
        >
          {part}
        </span>
      ))}
      {' '}

    </p>
  );
}
