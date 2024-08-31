export interface Button {
  buttonText: string
  url: string
  variant?: 'default' | 'subscribe'
  disabled?: boolean
  type?: 'submit' | 'reset' | 'button' | 'menu'
}
