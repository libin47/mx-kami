import type { IRequestAdapter } from '../interfaces/adapter' 
import { IController } from '../interfaces/controller'
import type { IRequestHandler, RequestProxyResult } from '../interfaces/request'
import { autoBind } from '../utils/auto-bind'
import type { HTTPClient } from '../core/client'

declare module '../core/client' {
  interface HTTPClient<
    T extends IRequestAdapter = IRequestAdapter,
    ResponseWrapper = unknown,
  > {
    qa: QAController<ResponseWrapper>
  }
}

export interface QuestionModel{
  question: string
}

export class QAController<ResponseWrapper> implements IController {
  name = 'QA'
  base = 'QA'
  constructor(private client: HTTPClient) {
    autoBind(this)
  }

  public get proxy(): IRequestHandler<ResponseWrapper> {
    return this.client.proxy(this.base)
  }

  /**
   * 根据 ID查找问题
   * @param id
   */
   getQuestionByID(id: string): RequestProxyResult<QuestionModel, ResponseWrapper>
   getQuestionByID(id: string): any {
     return this.proxy(id).get<QuestionModel>()
   }
  }