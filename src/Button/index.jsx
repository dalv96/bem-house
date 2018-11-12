import { compose } from '@bem-react/core';

import { Button as Base } from './Button';
import { ButtonTypeAgree } from './_type/Button_type_agree';
import { ButtonSizeM } from './_size/Button_size_m';

const Button = compose(
  ButtonSizeM,
  ButtonTypeAgree
)(Base);

export default Button;