import { ROUTES_PATHS } from '~/routes';

import { IMenuItem } from './types';

export const MENU_ITEMS: IMenuItem[] = [
  { key: '1', label: 'Мои запросы', path: ROUTES_PATHS.requests },
  { key: '2', label: 'Закладки', path: ROUTES_PATHS.bookmarks },
  { key: '3', label: 'Оповещения', path: ROUTES_PATHS.alerts },
  { key: '4', label: 'Журнал', path: ROUTES_PATHS.log },
  { key: '5', label: 'Помощь', path: ROUTES_PATHS.help },
];
