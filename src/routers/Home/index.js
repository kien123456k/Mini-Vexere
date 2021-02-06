import {routeBase, routeUtil, routeHome} from '../../utils/route.util';

export default [
  routeUtil('/:pathMatch(.*)*', 'NotFoundPage'),
  routeBase('/', 'Home', {}, [
    routeHome('/', 'HomePage'),
    routeHome('/about', 'AboutPage'),
    routeHome('/stations', 'StationsPage'),
    routeHome('/stations/:id', 'DetailStationPage')
  ])
];
