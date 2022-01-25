enum httpParamType {
    BODY = 'body',
    PARAMS = 'params',
    QUERY = 'query'
}

export interface IHttpMappedArg {
    argIndex: number
    reqParamName?: string
    reqParamType: httpParamType
    argType?: any
}
export const metadataKey = Symbol("httpParamsMappedToRequest")
const storeHttpMappedArgMetadata = (
    target: any,
    propertyKey: string | symbol,
    mappedArg: IHttpMappedArg) => {
    const argType = Reflect.getMetadata("design:paramtypes", target, propertyKey)[mappedArg.argIndex];
    let existingMappedArgs: IHttpMappedArg[] = Reflect.getOwnMetadata(
        metadataKey,
        target,
        propertyKey) || [];
    existingMappedArgs.push({...mappedArg, argType});
    Reflect.defineMetadata(metadataKey, existingMappedArgs, target, propertyKey);
}

export const Query = (reqParamName: string) => (target: any, propertyKey: string | symbol, argIndex: number) => {
    const httpMappedArg: IHttpMappedArg = {argIndex, reqParamName, reqParamType: httpParamType.QUERY}
    storeHttpMappedArgMetadata(target, propertyKey, httpMappedArg)
}

export const Params = (reqParamName: string) => (target: any, propertyKey: string | symbol, argIndex: number) => {
    const httpMappedArg: IHttpMappedArg = {argIndex, reqParamName, reqParamType: httpParamType.PARAMS}
    storeHttpMappedArgMetadata(target, propertyKey, httpMappedArg)
}

export const Body = (reqParamName?: string) => (target: any, propertyKey: string | symbol, argIndex: number) => {
    const argType = Reflect.getMetadata("design:paramtypes", target, propertyKey)[argIndex];
    const httpMappedArg: IHttpMappedArg = {argIndex, reqParamName, argType, reqParamType: httpParamType.BODY}
    storeHttpMappedArgMetadata(target, propertyKey, httpMappedArg)
}
