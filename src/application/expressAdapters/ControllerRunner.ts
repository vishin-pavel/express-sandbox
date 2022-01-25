import {MethodsNames} from "../../utils/types";
import {NextFunction, Request, Response} from "express";
import {
    IHttpMappedArg,
    metadataKey as httpMappedArgsMetadataKey
} from "./ExtractHttpParamsDecorator";
import { plainToInstance } from "class-transformer";

const premitives = [String, Number, Boolean, Symbol, null, undefined]

const prepareArg = (request: Request, results: any[]) => (arg: IHttpMappedArg) => {
    let value = arg.reqParamName ? request?.[arg.reqParamType]?.[arg.reqParamName] : request?.[arg.reqParamType]
    if(!premitives.includes(arg.argType) && value){
        value = plainToInstance(arg.argType, value)
    }
    results[arg.argIndex] = value
}

export const controllerRunner = <T>(
    Controller: { new(...args: any[]): T },
    methodName: MethodsNames<T>) => async (
    request: Request,
    response: Response,
    next: NextFunction) => {
    try {
        const controller = new Controller(request, response)
        const httpMappedParameters: IHttpMappedArg[] = Reflect.getOwnMetadata(httpMappedArgsMetadataKey, Controller.prototype, methodName as string);
        const args: any[] = []
        httpMappedParameters.map(prepareArg(request, args))
        const result = await (controller[methodName] as unknown as Function).apply(controller, args)
        response.json(result)
    } catch (e) {
        next(e)
    }
}
export const runnerFor = <C>(Controller: { new(...args: any[]): C }) => (methodName: MethodsNames<C>) => {
    return controllerRunner(Controller, methodName)
}
