import { FunctionComponent, ReactNode } from 'react';

export interface IProductCardAction {
  title: string
  Icon?: FunctionComponent<React.SVGProps<SVGSVGElement>>
  component?: ReactNode
  onClick?: (id: number) => void
}
