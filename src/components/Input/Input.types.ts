import type { InputHTMLAttributes, ReactNode } from 'react'

export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size' | 'type'> {
  label?: string
  helperText?: string
  error?: string
  startAdornment?: ReactNode
  endAdornment?: ReactNode
  endAction?: ReactNode
  hideLabel?: boolean
  inputClassName?: string
  type?: 'text' | 'number' | 'password'
}
