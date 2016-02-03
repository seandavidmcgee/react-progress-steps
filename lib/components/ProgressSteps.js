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
      background: '#3399ff'
    },
    current: {
      border: '2px solid #3399ff',
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

const Dot = ({active = false, current = false, styling = true}) => {
  let style = {};

  if (styling) {
    style = Object.assign({}, BASE_STYLE.dot.base);

    if (current) {
      Object.assign(style, BASE_STYLE.dot.current);
    } else if (active) {
      Object.assign(style, BASE_STYLE.dot.active);
    }
  }

  return (
    <div
      style={style}
      className={cx('ProgressSteps-Dot', {
        'ProgressSteps-Step-desactivated': !active && !current,
        'ProgressSteps-Step-activated': active,
        'ProgressSteps-Step-current': current,
      })}
    />
  );
};

const Line = ({active = false, styling = true}) => {
  let style = {};

  if (styling) {
    style = Object.assign({}, BASE_STYLE.line.base);
    if (active) Object.assign(style, BASE_STYLE.line.active);
  }

  return (
    <div
      style={style}
      className={cx('ProgressSteps-Line', {
        'ProgressSteps-Line-desactivated': !active,
        'ProgressSteps-Line-activated': active,
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
          current={i == current - 1}
          active={i < current - 1}
          {...rest}
        />

        <Line
          current={true}
          active={i < current - 1}
          {...rest}
        />
      </div>
    );
  }

  progress.push(
    <Dot
      key="end"
      current={current === steps}
      {...rest}
    />
  );

  return <div>{progress}</div>;
};
