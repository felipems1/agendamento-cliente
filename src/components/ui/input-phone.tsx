import { InputHTMLAttributes } from 'react'
import MaskedInput from 'react-text-mask'
import { cn } from '@/lib/utils'

type InputPhoneProps = InputHTMLAttributes<HTMLInputElement>

export function InputPhone(props: InputPhoneProps) {
  const { className, ...rest } = props

  return (
    <MaskedInput
      mask={[
        '(',
        /\d/,
        /\d/,
        ')',
        ' ',
        '9',
        ' ',
        /\d/,
        /\d/,
        /\d/,
        /\d/,
        '-',
        /\d/,
        /\d/,
        /\d/,
        /\d/,
      ]}
      className={cn(
        'flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm',
        className,
      )}
      {...rest}
    />
  )
}
