import validator from 'validator';

export const required = value => (value || typeof value === 'number' ? undefined : 'Required');

export const maxLength = max => value => value && value.length > max ? `Must be ${max} characters or less` : undefined;

export const minLength = min => value => value && value.length < min ? `Must be ${min} characters or more` : undefined;

export const number = value => (value && validator.isNumeric(value) ? 'Must be a number' : undefined);

export const minValue = min => value => value && value < min ? `Must be at least ${min}` : undefined;

export const email = value => (value && !validator.isEmail(value) ? 'Invalid email address' : undefined);

export const alphaNumeric = value => (value && !validator.isAlphanumeric(value) ? 'Only alphanumeric characters' : undefined);

export const phoneNumber = value => (value && !validator.isMobilePhone(value) ? 'Invalid phone number' : undefined);
