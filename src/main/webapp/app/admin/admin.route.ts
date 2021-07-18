import { Routes } from '@angular/router';

import { auditsRoute, configurationRoute, docsRoute, healthRoute, logsRoute, metricsRoute, userMgmtRoute, provisionRoute } from './';

import { UserRouteAccessService } from 'app/core';

const ADMIN_ROUTES = [auditsRoute, configurationRoute, docsRoute, healthRoute, logsRoute, ...userMgmtRoute, metricsRoute, provisionRoute];

export const adminState: Routes = [
  {
    path: '',
    data: {
      authorities: ['ROLE_ADMIN']
    },
    canActivate: [UserRouteAccessService],
    children: ADMIN_ROUTES
  }
];
