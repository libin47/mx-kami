import { createContext } from 'react'

import type { Image } from 'api-client'

export const ImageSizeMetaContext = createContext(
  new Map() as Map<string, Image>,
)
