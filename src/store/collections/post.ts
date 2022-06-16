/* eslint-disable @typescript-eslint/no-non-null-assertion */
import type { PostModel } from 'api-client'

import { apiClient } from '~/utils/client'

import { Store } from '../helper/base'
import { FetchOption } from '../types/options'

export class PostStore extends Store<PostModel> {
  async fetchById(id: string, options: FetchOption = {}) {
    if (!options.force && this.has(id)) {
      return this.get(id)!
    }
    const data = await apiClient.post.getPost(id)

    this.add(data)
    return this.get(id)!
  }

  async fetchBySlug(category: string, slug: string) {
    const data = await apiClient.post.getPost(
      category,
      encodeURIComponent(slug),
    )
    this.add(data)
    return data
  }
}
