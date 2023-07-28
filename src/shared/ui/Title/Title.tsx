import { HTMLAttributes, memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Title.module.scss';
import {
  TitleFontFamT, TitleFontFams, TitleSizes, TitleSizesT
} from './types';

interface ITitle extends HTMLAttributes<HTMLHeadingElement> {
  level: 1 | 2 | 3 | 4 | 5 | 6;
  text: string;
  size?: TitleSizesT;
  className?: string;
  fontFam?: TitleFontFamT
}
export const Title = memo(({
  level,
  text,
  size = TitleSizes.S,
  className,
  fontFam = TitleFontFams.PRIMARY,
  ...props
}: ITitle) => {
  const HeadingTag = `h${level}` as any;

  return (
    <HeadingTag
      className={classNames(cls.title, {}, [cls[size], cls[fontFam], className])}
      {...props}
    >
      {text}
    </HeadingTag>
  );
});
