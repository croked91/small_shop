import { HTMLAttributes, memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Text.module.scss';
import {
  TextFontFams,
  TextFontFamsT,
  TextSizes,
  TextSizesT
} from './types';

interface IText extends HTMLAttributes<HTMLParagraphElement> {
  text: string;
  size?: TextSizesT;
  className?: string;
  fontFam?: TextFontFamsT
}
export const Text = memo(({
  text,
  size = TextSizes.S,
  className,
  fontFam = TextFontFams.PRIMARY,
  ...props
}: IText) => (
  <p
    className={classNames(cls.title, {}, [cls[size], cls[fontFam], className])}
    {...props}
  >
    {text}
  </p>
));
