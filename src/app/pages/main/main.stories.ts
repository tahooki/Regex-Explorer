import { moduleMetadata } from '@storybook/angular';
import { APP_BASE_HREF, CommonModule } from '@angular/common';
import { TestModule } from '../test/test.module';
import { TestComponent } from '../test/test.component';
import { MainModule } from './main.module';
import { TestItemModule } from './test-item/test-item.module';
import { MainComponent } from './main.component';
import { Router, RouterModule } from '@angular/router';
import { AppRoutingModule } from '../../app-routing.module';
import { MainRoutingModule } from './main-routing.module';

export default {
  title:      'main',
  decorators: [
    moduleMetadata({
      // imports both components to allow component composition with storybook
      imports: [
        RouterModule.forRoot([], { useHash: true }),
        MainModule,
        TestItemModule
      ]
    })

  ]
};

export const Default = () => ({
  component: MainComponent,
  props:     {}
});

