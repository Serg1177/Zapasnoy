import { joinPath } from '../lib';

export enum PathsEnum {
  Root = '/',
  Alerts = 'alerts',
  Bookmarks = 'bookmarks',
  Forbidden = 'forbidden',
  Help = 'help',
  Log = 'log',
  NotFound = 'not-found',
  Requests = 'requests',
}

export const ROUTES_PATHS = {
  root: PathsEnum.Root,
  alerts: joinPath([
    PathsEnum.Root,
    PathsEnum.Alerts,
  ]),
  bookmarks: joinPath([
    PathsEnum.Root,
    PathsEnum.Bookmarks,
  ]),
  forbidden: joinPath([
    PathsEnum.Root,
    PathsEnum.Forbidden,
  ]),
  help: joinPath([
    PathsEnum.Root,
    PathsEnum.Help,
  ]),
  log: joinPath([
    PathsEnum.Root,
    PathsEnum.Log,
  ]),
  notFound: joinPath([
    PathsEnum.Root,
    PathsEnum.NotFound,
  ]),
  requests: joinPath([
    PathsEnum.Root,
    PathsEnum.Requests,
  ]),
};
