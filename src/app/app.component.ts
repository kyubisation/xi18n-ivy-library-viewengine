import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <lib-ve-i18n></lib-ve-i18n>
    <lib-ivy-i18n></lib-ivy-i18n>
    <span i18n>This works!</span>
  `,
  styles: []
})
export class AppComponent {
  title = 'xi18n-ivy-library-viewengine';
}
