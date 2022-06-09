import { joinPath } from '../lib';

export enum RouteMap {
  Root = '/',
  Forbidden = 'forbidden',
  NotFound = 'not-found',
}

export const ROUTES_PATHS = {
  Root: RouteMap.Root,
  Forbidden: joinPath([
    RouteMap.Root,
    RouteMap.Forbidden,
  ]),
  NotFound: joinPath([
    RouteMap.Root,
    RouteMap.NotFound,
  ]),
};
