import React, { useState, useRef } from 'react';
import { useAnnouncer } from '../context/AnnouncementContext';

// FormsDemo builds a sample form demonstrating accessible labels,
// validation and feedback.  When the user submits the form, validation
// errors are displayed inline and announced via the announcement context.

interface FormValues {
  name: string;
  email: string;
  password: string;
  gender: string;
  subscribe: boolean;
  colour: string;
  message: string;
}

const FormsDemo: React.FC = () => {
  const initialValues: FormValues = {
    name: '',
    email: '',
    password: '',
    gender: '',
    subscribe: false,
    colour: '',
    message: '',
  };
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<Partial<Record<keyof FormValues, string>>>({});
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const { announce } = useAnnouncer();

  // refs for focusing the first invalid field
  const refs = {
    name: useRef<HTMLInputElement>(null),
    email: useRef<HTMLInputElement>(null),
    password: useRef<HTMLInputElement>(null),
    genderMale: useRef<HTMLInputElement>(null),
    colour: useRef<HTMLSelectElement>(null),
    message: useRef<HTMLTextAreaElement>(null),
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type, checked } = e.target as any;
    setValues((prev) => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
  };

  const validate = (): Partial<Record<keyof FormValues, string>> => {
    const newErrors: Partial<Record<keyof FormValues, string>> = {};
    if (!values.name.trim()) newErrors.name = 'Name is required.';
    if (!values.email.trim()) newErrors.email = 'Email is required.';
    else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(values.email)) newErrors.email = 'Email is invalid.';
    if (!values.password) newErrors.password = 'Password is required.';
    if (!values.gender) newErrors.gender = 'Please select a gender.';
    if (!values.colour) newErrors.colour = 'Please select a colour.';
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      announce('Form submitted successfully');
      alert('Form submitted!');
      setValues(initialValues);
    } else {
      // focus first invalid field
      const firstKey = Object.keys(validationErrors)[0] as keyof FormValues;
      switch (firstKey) {
        case 'name':
          refs.name.current?.focus();
          break;
        case 'email':
          refs.email.current?.focus();
          break;
        case 'password':
          refs.password.current?.focus();
          break;
        case 'gender':
          refs.genderMale.current?.focus();
          break;
        case 'colour':
          refs.colour.current?.focus();
          break;
        case 'message':
          refs.message.current?.focus();
          break;
      }
      const summary = Object.values(validationErrors).join(' ');
      announce(`Form submission failed. ${summary}`);
    }
  };

  return (
    <div>
      <p>
        <strong>What this demonstrates:</strong> Accessible form fields with
        proper labels, grouping via <code>fieldset</code>/<code>legend</code>,
        required indicators, hints and inline validation messages. Validation
        errors are associated with their fields and announced to assistive
        technologies.
      </p>
      <ul>
        <li>
          Try submitting the form without filling it out. Focus should move to
          the first error and a summary will be announced.
        </li>
        <li>
          Use the show/hide toggle to reveal your password without losing
          focus.
        </li>
      </ul>
      <form onSubmit={handleSubmit} noValidate className="a11y-form">
        <div className="form-field">
          <label htmlFor="name">Name <span aria-hidden="true">*</span></label>
          <input
            className="form-control"
            type="text"
            id="name"
            name="name"
            autoComplete="name"
            ref={refs.name}
            value={values.name}
            onChange={handleChange}
            aria-required="true"
            aria-invalid={errors.name ? 'true' : 'false'}
            aria-describedby={errors.name ? 'error-name' : undefined}
          />
          {errors.name && (
            <span id="error-name" role="alert" className="form-error">
              {errors.name}
            </span>
          )}
        </div>
        <div className="form-field">
          <label htmlFor="email">Email <span aria-hidden="true">*</span></label>
          <input
            className="form-control"
            type="email"
            id="email"
            name="email"
            autoComplete="email"
            ref={refs.email}
            value={values.email}
            onChange={handleChange}
            aria-required="true"
            aria-invalid={errors.email ? 'true' : 'false'}
            aria-describedby={errors.email ? 'error-email' : undefined}
          />
          {errors.email && (
            <span id="error-email" role="alert" className="form-error">
              {errors.email}
            </span>
          )}
        </div>
        <div className="form-field">
          <label htmlFor="password">Password <span aria-hidden="true">*</span></label>
          <div className="form-password-row">
            <input
              className="form-control"
              type={showPassword ? 'text' : 'password'}
              id="password"
              name="password"
              autoComplete="current-password"
              ref={refs.password}
              value={values.password}
              onChange={handleChange}
              aria-required="true"
              aria-invalid={errors.password ? 'true' : 'false'}
              aria-describedby={errors.password ? 'error-password' : undefined}
            />
            <button
              type="button"
              onClick={() => setShowPassword((s) => !s)}
              aria-pressed={showPassword}
              aria-label={showPassword ? 'Hide password' : 'Show password'}
            >
              {showPassword ? 'Hide' : 'Show'}
            </button>
          </div>
          {errors.password && (
            <span id="error-password" role="alert" className="form-error">
              {errors.password}
            </span>
          )}
        </div>
        <fieldset className="form-field form-group">
          <legend>
            Gender <span aria-hidden="true">*</span>
          </legend>
          <div className="form-choice">
            <input
              type="radio"
              id="gender-male"
              name="gender"
              value="male"
              ref={refs.genderMale}
              checked={values.gender === 'male'}
              onChange={handleChange}
              aria-required="true"
              aria-invalid={errors.gender ? 'true' : 'false'}
            />
            <label htmlFor="gender-male">Male</label>
          </div>
          <div className="form-choice">
            <input
              type="radio"
              id="gender-female"
              name="gender"
              value="female"
              checked={values.gender === 'female'}
              onChange={handleChange}
              aria-required="true"
              aria-invalid={errors.gender ? 'true' : 'false'}
            />
            <label htmlFor="gender-female">Female</label>
          </div>
          <div className="form-choice">
            <input
              type="radio"
              id="gender-other"
              name="gender"
              value="other"
              checked={values.gender === 'other'}
              onChange={handleChange}
              aria-required="true"
              aria-invalid={errors.gender ? 'true' : 'false'}
            />
            <label htmlFor="gender-other">Other</label>
          </div>
          {errors.gender && (
            <span id="error-gender" role="alert" className="form-error">
              {errors.gender}
            </span>
          )}
        </fieldset>
        <div className="form-field form-checkbox-row">
          <input
            type="checkbox"
            id="subscribe"
            name="subscribe"
            checked={values.subscribe}
            onChange={handleChange}
          />
          <label htmlFor="subscribe">Subscribe to newsletter</label>
        </div>
        <div className="form-field">
          <label htmlFor="colour">Favourite colour <span aria-hidden="true">*</span></label>
          <select
            className="form-control"
            id="colour"
            name="colour"
            ref={refs.colour}
            value={values.colour}
            onChange={handleChange}
            aria-required="true"
            aria-invalid={errors.colour ? 'true' : 'false'}
            aria-describedby={errors.colour ? 'error-colour' : undefined}
          >
            <option value="" disabled>
              Select a colour
            </option>
            <option value="red">Red</option>
            <option value="green">Green</option>
            <option value="blue">Blue</option>
          </select>
          {errors.colour && (
            <span id="error-colour" role="alert" className="form-error">
              {errors.colour}
            </span>
          )}
        </div>
        <div className="form-field">
          <label htmlFor="message">Message (optional)</label>
          <textarea
            className="form-control"
            id="message"
            name="message"
            ref={refs.message}
            value={values.message}
            onChange={handleChange}
            rows={4}
          />
        </div>
        <div className="form-actions">
          <button type="submit">Submit form</button>
        </div>
      </form>
    </div>
  );
};

export default FormsDemo;