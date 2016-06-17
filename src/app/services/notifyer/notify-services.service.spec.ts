import {
  beforeEachProviders,
  it,
  describe,
  expect,
  inject
} from '@angular/core/testing';
import { NotifyServicesService } from './notify-services.service.ts';

describe('NotifyServices Service', () => {
  beforeEachProviders(() => [NotifyServicesService]);

  it('should ...',
      inject([NotifyServicesService], (service: NotifyServicesService) => {
    expect(service).toBeTruthy();
  }));
});
