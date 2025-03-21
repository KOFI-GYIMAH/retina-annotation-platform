import { AbstractControl, ValidationErrors } from '@angular/forms';

export const passwordMatchValidator = (
  control: AbstractControl
): ValidationErrors | null => {
  const password = control.get('password')?.value;
  const confirmPassword = control.get('confirm_password')?.value;

  return password && confirmPassword && password !== confirmPassword
    ? { mismatch: true }
    : null;
};
