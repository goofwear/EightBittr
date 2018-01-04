import { MapScreenr } from "mapscreenr";

import { GameStartr } from "../gamestartr";

export const createMapScreener = (gameStarter: GameStartr) =>
    new MapScreenr({
        height: gameStarter.settings.height,
        width: gameStarter.settings.width,
        ...gameStarter.settings.components.screen,
    });
