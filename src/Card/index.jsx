import { compose } from '@bem-react/core';

import { Card as Base } from './Card';
import { CardSizeL } from './_size/Card_size_l';
import { CardSizeM } from './_size/Card_size_m';
import { CardSizeS } from './_size/Card_size_s';
import { CardTypeCritical } from './_type/Card_type_critical';

const Card = compose(
  CardSizeL,
  CardSizeM,
  CardSizeS,
  CardTypeCritical
)(Base);

export default Card;