import {FormControl} from "@angular/forms";
import _ from 'lodash';

export function isNotEmptyValidator (control: FormControl) {
  control.value === ''? null : {isNotEmpty: true}
};