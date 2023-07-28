import { memo } from 'react';
import { ReactComponent as Heart } from 'shared/assets/icons/24/heart.svg';
import { SemanticButtonWrapper } from 'shared/ui/SemanticButtonWrapper/SemanticButtonWrapper';

export const AddProductToFavorites = memo(() => (
  <SemanticButtonWrapper>
    <Heart />
  </SemanticButtonWrapper>
));
