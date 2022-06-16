import type { IRequestAdapter } from '../interfaces/adapter'
import type { IController } from '../interfaces/controller'
import type { IRequestHandler, RequestProxyResult } from '../interfaces/request'
import { autoBind } from '../utils/auto-bind'
import type { HTTPClient } from '../core/client'
import type { PhotoModel } from '../models/base'

declare module '../core/client' {
  interface HTTPClient<
    T extends IRequestAdapter = IRequestAdapter,
    ResponseWrapper = unknown,
  > {
    photo: PhotoController<ResponseWrapper>
  }
}

export class PhotoController<ResponseWrapper> implements IController {
  name = 'photo'
  base = 'photos'
  constructor(private client: HTTPClient) {
    autoBind(this)
  }

  public get proxy(): IRequestHandler<ResponseWrapper> {
    return this.client.proxy(this.base)
  }

  /**
   * 根据 ID 查找相册
   * @param album
   * @param slug
   */
   getPhotoBySlug(album: string, slug: string): RequestProxyResult<PhotoModel, ResponseWrapper>
   getPhotoBySlug(album: string, slug: string): any {
     return this.proxy(album)(slug).get<PhotoModel>()
   }

  /**
   * 根据 ID 查找相册
   * @param id
   */
  getPhotoByID(id: string): RequestProxyResult<PhotoModel, ResponseWrapper>
  getPhotoByID(id: string): any {
    return this.proxy(id).get<PhotoModel>()
  }
}
