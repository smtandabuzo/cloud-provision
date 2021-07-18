import { Route } from '@angular/router';

import { ProvisionComponent } from './provision.component';

export const provisionRoute: Route = {
  path: 'jhi-provision',
  component: ProvisionComponent,
  data: {
    pageTitle: 'Provision'
  }
};
