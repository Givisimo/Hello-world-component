import { createCustomElement } from '@servicenow/ui-core';
import snabbdom from '@servicenow/ui-renderer-snabbdom';
import styles from './styles.scss';
import view from './view';

createCustomElement('x-550308-hello-world', {
  renderer: { type: snabbdom },
  view,
  styles,
  initialState: {
    bgColor: 'light',
  },
});
