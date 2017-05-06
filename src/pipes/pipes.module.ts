import { NgModule } from '@angular/core';

import { CapitalizePipe } from './capitalize/capitalize.pipe';
import { CleanPipe } from './clean/clean.pipe';
import { KeysPipe } from './keys/keys.pipe';

const pipes = [
    CapitalizePipe,
    CleanPipe,
    KeysPipe
];

@NgModule({
    exports: pipes,
    declarations: pipes
})
export class PipesModule {}