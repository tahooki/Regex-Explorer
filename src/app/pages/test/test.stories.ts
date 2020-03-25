import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { TestModule } from './test.module';
import { TestComponent } from './test.component';

export default {
  title:          'Test',
  decorators:     [
    moduleMetadata({
      // imports both components to allow component composition with storybook
      declarations: [ ],
      imports:      [ CommonModule, TestModule ]
    })
  ]
};

export const Default = () => ({
  component: TestComponent,
  props:    {}
});
