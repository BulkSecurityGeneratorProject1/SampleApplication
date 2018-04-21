import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { SampleApplicationRegionMySuffixModule } from './region-my-suffix/region-my-suffix.module';
import { SampleApplicationCountryMySuffixModule } from './country-my-suffix/country-my-suffix.module';
import { SampleApplicationLocationMySuffixModule } from './location-my-suffix/location-my-suffix.module';
import { SampleApplicationDepartmentMySuffixModule } from './department-my-suffix/department-my-suffix.module';
import { SampleApplicationTaskMySuffixModule } from './task-my-suffix/task-my-suffix.module';
import { SampleApplicationEmployeeMySuffixModule } from './employee-my-suffix/employee-my-suffix.module';
import { SampleApplicationJobMySuffixModule } from './job-my-suffix/job-my-suffix.module';
import { SampleApplicationJobHistoryMySuffixModule } from './job-history-my-suffix/job-history-my-suffix.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    imports: [
        SampleApplicationRegionMySuffixModule,
        SampleApplicationCountryMySuffixModule,
        SampleApplicationLocationMySuffixModule,
        SampleApplicationDepartmentMySuffixModule,
        SampleApplicationTaskMySuffixModule,
        SampleApplicationEmployeeMySuffixModule,
        SampleApplicationJobMySuffixModule,
        SampleApplicationJobHistoryMySuffixModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SampleApplicationEntityModule {}
