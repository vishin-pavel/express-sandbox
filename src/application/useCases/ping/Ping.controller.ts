import {BaseController} from "../../expressAdapters/BaseController";
import {Body, Params, Query} from "../../expressAdapters/ExtractHttpParamsDecorator";
import {VoiceDto} from "./VoiceDto";
import {validateOrReject} from "class-validator";


export class PingController extends BaseController {
    async echo(
        @Query('lang') lang: string,
        @Params('name') name: string,
        @Body() voice: VoiceDto
    ) {
        await validateOrReject(voice) // voice here is an instance of VoiceDto already
        return {
            name,
            lang,
            ...voice
        }
    }
    ping() {
        this.response?.status(201)
        return 'ping'
    }

    pong() {
        return 'pong'
    }

}
