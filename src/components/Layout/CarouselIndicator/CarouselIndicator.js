// @flow
/*
 * CarouselIndicator
 */

// Vendor
import React from 'react';
import classnames from 'classnames';

import style from './CarouselIndicator.scss';

type Props = {
  length: number,
  current: number,
  showNext?: boolean,
  nextStep?: Function,
  className?: string,
};

function CarouselIndicator(props: Props) {
  const {
    className,
    length,
    current,
    showNext,
    nextStep,
    ...restProps
  } = props;

  return (
    <div className={classnames(style.outer, className)} {...restProps}>
      <ol className={style.wrapper}>
        {Array(length)
          .fill(1)
          .map((child, index) => (
            <li
              key={`dot-${index + 1}`}
              className={classnames(style.item, {
                [style.active]: current === index,
              })}
            />
          ))}

        {current < length - 1 && (
          <li className={style.nextBtn} onClick={nextStep}>
            Next
          </li>
        )}
      </ol>
    </div>
  );
}
CarouselIndicator.defaultProps = {
  current: 0,
  length: 0,
};
export default CarouselIndicator;
