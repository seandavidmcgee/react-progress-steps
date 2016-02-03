import React from 'react';
import cx from 'classnames';

const BASE_STYLE = {
  dot: {
    base: {
      background: 'white',
      border: '2px solid #D6D6D6',
      borderRadius: '50px',
      float: 'left',
      height: '10px',
      width: '10px',
    },
    active: {
      border: '2px solid #3399ff',
    },
    full: {
      background: '#3399ff',
    },
  },
  line: {
    base: {
      background: '#D6D6D6',
      float: 'left',
      height: '3px',
      marginLeft: '10px',
      marginRight: '10px',
      position: 'relative',
      top: '6px',
      width: '100px',
    },
    active: {
      background: '#3399ff',
    },
  }
};

const Dot = ({active = false, full = false, styling = true}) => {
  let style = {};

  if (styling) {
    style = Object.assign({}, BASE_STYLE.dot.base);
    if (active) style = Object.assign(style, BASE_STYLE.dot.active)
    if (full)   style = Object.assign(style, BASE_STYLE.dot.full)
  }

  return (
    <div
      style={style}
      className={cx('ProgressSteps-Dot', {
        'ProgressSteps-Dot-active': active,
        'ProgressSteps-Dot-full': full,
      })}
    />
  );
};

const Line = ({active = false, styling = true}) => {
  let style = {};

  if (styling) {
    style = Object.assign({}, BASE_STYLE.line.base);
    if (active) Object.assign(style,BASE_STYLE.line.active);
  }

  return (
    <div
      style={style}
      className={cx('ProgressSteps-Line', {
        'ProgressSteps-Line-active': active,
      })}
    />
  );
};

export default ({steps, current, ...rest}) => {
  const progress = [];

  for (var i = 0; i < steps - 1; i++) {
    progress.push(
      <div key={i}>
        <Dot
          full={i < current - 1}
          active={i < current}
          {...rest}
        />

        <Line
          active={i < current - 1}
          {...rest}
        />
      </div>
    );
  }

  progress.push(
    <Dot
      key="end"
      full={false}
      active={current >= steps}
      {...rest}
    />
  );

  return <div>{progress}</div>;
};
