import {IsEnum, IsString} from "class-validator";

export enum Volume {
    SCREAM = 'scream',
    WHISPER = 'whisper'
}

export class VoiceDto {
    @IsEnum(Volume)
    volume?: string
    @IsString()
    text?: string
}
