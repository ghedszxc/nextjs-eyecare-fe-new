import { forwardRef, useId } from 'react'
import clsx from 'clsx'

import styles from './Input.module.scss'
import type { InputProps } from './Input.types'

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      id,
      label,
      helperText,
      error,
      required,
      disabled,
      className,
      inputClassName,
      startAdornment,
      endAdornment,
      endAction,
      hideLabel = false,
      type = 'text',
      ...props
    },
    ref
  ) => {
    const generatedId = useId()
    const inputId = id || generatedId

    const helperTextId = `${inputId}-helper`
    const errorId = `${inputId}-error`

    const describedBy = [helperText ? helperTextId : null, error ? errorId : null]
      .filter(Boolean)
      .join(' ')

    return (
      <div
        className={clsx(
          'input-field',
          styles['input-field'],
          {
            [styles['input-field--disabled']]: disabled,
            [styles['input-field--error']]: !!error,
          },
          className
        )}
      >
        {label && (
          <label
            htmlFor={inputId}
            className={clsx('input-label', styles.label, {
              ['sr-only']: hideLabel,
            })}
          >
            {label}

            {required && (
              <span className={clsx('input-required', styles.required)} aria-hidden="true">
                *
              </span>
            )}
          </label>
        )}

        <div className={clsx('input-wrapper', styles.wrapper)}>
          {startAdornment && (
            <span className={clsx('input-adornment', styles.adornment)} aria-hidden="true">
              {startAdornment}
            </span>
          )}

          <input
            ref={ref}
            id={inputId}
            type={type}
            required={required}
            disabled={disabled}
            aria-invalid={!!error}
            aria-describedby={describedBy || undefined}
            className={clsx(
              'input',
              styles.input,
              {
                [styles['input--with-start-adornment']]: !!startAdornment,
                [styles['input--with-end-adornment']]: !!endAdornment,
              },
              inputClassName
            )}
            {...props}
          />

          {endAdornment && (
            <span className={clsx('input-adornment', styles.adornment)} aria-hidden="true">
              {endAdornment}
            </span>
          )}

          {endAction && <span className={clsx('input-end-action')}>{endAction}</span>}
        </div>

        {helperText && !error && (
          <p id={helperTextId} className={clsx('input-helper-text', styles['helper-text'])}>
            {helperText}
          </p>
        )}

        {error && (
          <p id={errorId} className={clsx('input-error', styles.error)} role="alert">
            {error}
          </p>
        )}
      </div>
    )
  }
)

Input.displayName = 'Input'
