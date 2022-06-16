import { IRequestAdapter } from '../interfaces/adapter'
import { IController } from '../interfaces/controller'
import {
  IRequestHandler,
  RequestProxyResult,
  ResponseProxyExtraRaw,
} from '../interfaces/request'
import { attachRawFromOneToAnthor, destructureData } from '../utils'
import { autoBind } from '../utils/auto-bind'
import { HTTPClient } from '../core/client'
import { RequestError } from '../core/error'
import { AlbumModel, AlbumDeModel } from '../models/base'
import { PostModel } from '../models/post'

declare module '../core/client' {
  interface HTTPClient<
    T extends IRequestAdapter = IRequestAdapter,
    ResponseWrapper = unknown,
  > {
    album: AlbumController<ResponseWrapper>
  }
}

export class AlbumController<ResponseWrapper> implements IController {
  name = 'album'
  base = 'albums'
  constructor(private client: HTTPClient) {
    autoBind(this)
  }

  public get proxy(): IRequestHandler<ResponseWrapper> {
    return this.client.proxy(this.base)
  }

  getAllAlbums(): RequestProxyResult<
    { data: AlbumModel[] },
    ResponseWrapper
  > {
    return this.proxy.get({
      params: {},
    })
  }

  /**
   * 根据 slug 查找相集合
   * @param slug
   */
  getAlbum(slug: string): RequestProxyResult<{data: AlbumDeModel}, ResponseWrapper>
  getAlbum(slug: string): any {
    return this.proxy(slug).get<AlbumDeModel>()
  }
}
