import {
  beforeEachProviders,
  it,
  describe,
  expect,
  inject
} from '@angular/core/testing';
import { SoundServicesService } from './sound-services.service.ts';

describe('SoundServices Service', () => {
  beforeEachProviders(() => [SoundServicesService]);

  it('should ...',
      inject([SoundServicesService], (service: SoundServicesService) => {
    expect(service).toBeTruthy();
  }));
});
