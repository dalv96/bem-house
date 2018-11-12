import { compose } from '@bem-react/core';

import { Link as Base } from './Link';
import { LinkThemeStandart } from './_theme/Link_theme_standart';
import { LinkActive } from './_active/Link_active';
import { LinkSizeM } from './_size/Link_size_m';
import { LinkSizeS } from './_size/Link_size_s';

const Link = compose(
  LinkThemeStandart,
  LinkSizeM,
  LinkActive,
  LinkSizeS
)(Base);

export default Link;