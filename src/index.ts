export interface ReactVitalsOptions {
  lastNameUpperCase?: boolean;
}

export function reactVitals(firstName: string, lastName: string, options?: ReactVitalsOptions) {
  if (options?.lastNameUpperCase) {
    return firstName + ' ' + lastName.toLocaleUpperCase();
  }
  return firstName + ' ' + lastName;
}
