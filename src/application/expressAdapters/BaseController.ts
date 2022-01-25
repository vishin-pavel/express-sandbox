import 'reflect-metadata'

interface IRequest {
    query: any
    body: any
    params: any
}

interface IResponse {
    status: (number: number) => IResponse
    send: (response: any) => IResponse
}

export class BaseController {
    constructor(readonly request?: IRequest, readonly response?: IResponse) {
    }
}

