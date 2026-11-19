import { useId, type ReactElement, cloneElement } from 'react';

interface FieldProps {
  label: string;
  required?: boolean;
  error?: string;
  className?: string;
  /** A single <input>, <select> or <textarea>; id/aria props are wired automatically. */
  children: ReactElement<Record<string, unknown>>;
}

/** Label + control + inline error, with correct id/aria wiring. */
export function Field({ label, required, error, className, children }: FieldProps) {
  const id = useId();
  const errorId = `${id}-error`;
  const control = cloneElement(children, {
    id,
    required,
    'aria-required': required || undefined,
    'aria-invalid': error ? true : undefined,
    'aria-describedby': error ? errorId : undefined,
  });
  return (
    <div className={['f', className].filter(Boolean).join(' ')}>
      <label htmlFor={id}>
        {label}
        {required && <span className="req" aria-hidden="true">*</span>}
      </label>
      {control}
      {error && (
        <span id={errorId} className="f-error">
          {error}
        </span>
      )}
    </div>
  );
}
