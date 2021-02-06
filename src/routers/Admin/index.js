import {routeBase, routeAdmin} from '../../utils/route.util';

export default [
  routeAdmin('/admin/auth', 'LoginPage'),
  routeBase('/admin', 'Admin', {adminAuth: true}, [
    routeAdmin('/admin/welcome', 'WelcomeContent', {}, [], 'Welcome'),
    routeAdmin('/admin/stations', 'StationContent', {}, [], 'Station Dashboard'),
    routeAdmin('/admin/aboutus', 'AboutUsContent', {}, [], 'About Us')
  ])
];
