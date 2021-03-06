import { FrameTickr } from "frametickr";

import { EightBittr } from "../EightBittr";

export const createFrameTicker = (eightBitter: EightBittr) =>
    new FrameTickr({
        events: {
            pause: (): void => {
                eightBitter.gameplay.onPause();
            },
            play: (): void => {
                eightBitter.gameplay.onPlay();
            },
        },
        // tslint:disable-next-line: no-empty
        frame: eightBitter.frames.tick || (() => {}),
        interval: eightBitter.frames.interval,
        ...eightBitter.settings.components.frameTicker,
    });
