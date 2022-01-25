import {PingController} from "./Ping.controller";
import {VoiceDto, Volume} from "./VoiceDto";

describe('test echo', () => {
    let controller: PingController;
    beforeEach(() => {
        controller = new PingController()
    })
    it('should respond', async () => {
        const voice = new VoiceDto()
        voice.volume = Volume.SCREAM
        voice.text = 'text'
        const result = await controller.echo('en', 'Pavel', voice)
        expect(result).toStrictEqual({lang: 'en', name: 'Pavel', volume: 'scream', text: 'text'})
    });
});
