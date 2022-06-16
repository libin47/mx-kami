export interface Count {
  read: number
  like: number
}

export interface Image {
  height: number
  width: number
  type: string
  accent?: string
  src: string
}

export interface Pager {
  total: number
  size: number
  currentPage: number
  totalPage: number
  hasPrevPage: boolean
  hasNextPage: boolean
}

export interface PaginateResult<T> {
  data: T[]
  pagination: Pager
}

export interface BaseModel {
  created: string
  id: string
}

export interface BaseCommentIndexModel extends BaseModel {
  commentsIndex?: number

  allowComment: boolean
}
export interface TextBaseModel extends BaseCommentIndexModel {
  title: string
  text: string
  images?: Image[]
  modified: string | null
  code?: number | null
}
export interface AlbumModel{
  id: string
  name: string
  slug: string
  count: number
  created: string
}
export interface AlbumDeModel{
  id: string
  name: string
  slug: string
  created: string
  children: PhotosModel[]
}
export interface PhotosModel{
  id: string
  title: string
  slug: string
  created: string
}
export interface PhotoModel{
  id: string
  created: string
  title: string
  text: string
  photos: string[]
  slug: string
  album_id: string
  hide: boolean
  copyright: boolean
  count: {
    read: number
    like: number
  }
  album?: {
    name: string
  }
}