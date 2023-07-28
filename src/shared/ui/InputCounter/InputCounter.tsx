import { memo } from 'react';
import { ReactComponent as Stroke } from 'shared/assets/icons/16/stroke.svg';
import { SemanticButtonWrapper } from '../SemanticButtonWrapper/SemanticButtonWrapper';
import cls from './InputCounter.module.scss';

interface IInputCounter {
  current?: number;
  max?: number;
  min?: number;
  onChange?: (value: number) => void;
}

export const InputCounter = memo(({
  current,
  max = 100,
  min = 1,
  onChange
}: IInputCounter) => {
  if (!current) {
    return null;
  }
  const onUpClickHandler = () => {
    if (current < max) {
      onChange?.(current + 1);
    }
  };

  const onDownClickHandler = () => {
    if (current > min) {
      onChange?.(current - 1);
    }
  };

  return (
    <div className={cls.inputCounter}>
      <div className={cls.value}>
        <p>
          {current || min}
        </p>
      </div>
      <div className={cls.buttons}>
        <SemanticButtonWrapper
          onClick={onUpClickHandler}
          className={cls.button}
        >
          <Stroke className={cls.invertedStroke} />
        </SemanticButtonWrapper>
        <SemanticButtonWrapper
          onClick={onDownClickHandler}
          className={cls.button}
        >
          <Stroke />
        </SemanticButtonWrapper>
      </div>
    </div>
  );
});
