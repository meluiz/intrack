import type { AvatarFullConfig } from 'react-nice-avatar'

declare global {
  interface User {
    _id: string
    name: string
    avatar: AvatarFullConfig
    created_at: Date
    updated_at: Date
  }
}
