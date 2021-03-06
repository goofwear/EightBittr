import { component } from "babyioc";
import { ITimeCycleSettings } from "classcyclr";
import { IFilterContainer, IPalette } from "pixelrendr";

import { EightBittr } from "../EightBittr";
import { IThing } from "../IEightBittr";

import { GeneralComponent } from "./GeneralComponent";
import { Classes } from "./graphics/Classes";
import { Flipping } from "./graphics/Flipping";
import { Opacity } from "./graphics/Opacity";

/**
 * Settings to be passed in order to ClassCyclr::addClassCycle.
 */
export interface ISpriteCycleSettings {
    /**
     * Classes to create a class cycling event.
     */
    0: ITimeCycleSettings;

    /**
     * An optional name to store the cycling event under.
     */
    1?: string;

    /**
     * An optional way to determine how long to wait between classes.
     */
    2?: number | (() => number);
}

/**
 * Changes the visual appearance of Things.
 */
export class Graphics<TEightBittr extends EightBittr> extends GeneralComponent<TEightBittr> {
    /**
     * Filters that may be used by sprites in the library.
     */
    public readonly filters?: IFilterContainer;

    /**
     * What class name should indicate a Thing is to be flipped verticallu.
     */
    public readonly flipVert?: string;

    /**
     * What class name should indicate a Thing is to be flipped horizontally.
     */
    public readonly flipHoriz?: string;

    /**
     * A nested library of sprites to process.
     */
    public readonly library?: any;

    /**
     * The default palette of colors to use for sprites.
     */
    public readonly paletteDefault?: IPalette;

    /**
     * Amount to expand sprites by when processing.
     */
    public readonly scale?: number;

    /**
     * Maximum size of a SpriteMultiple to pre-render.
     */
    public readonly spriteCacheCutoff?: number;

    /**
     * What key in attributions should contain sprite heights.
     */
    public readonly spriteHeight?: string;

    /**
     * What key in attributions should contain sprite widths.
     */
    public readonly spriteWidth?: string;

    /**
     * Arrays of Thing[]s that are to be drawn in each refill.
     */
    public readonly thingArrays?: IThing[][];

    /**
     * Adds and removes visual classes for Things.
     */
    @component(Classes)
    public readonly classes: Classes<TEightBittr>;

    /**
     * Visually flips Things.
     */
    @component(Flipping)
    public readonly flipping: Flipping<TEightBittr>;

    /**
     * Changes the opacity of Things.
     */
    @component(Opacity)
    public readonly opacity: Opacity<TEightBittr>;

    /**
     * Generates a key for a Thing based off the Thing's basic attributes.
     * This key should be used for PixelRender.get calls, to cache the Thing's
     * sprite.
     *
     * @param thing
     * @returns A key that to identify the Thing's sprite.
     */
    public generateThingKey(thing: IThing): string {
        return thing.groupType + " " + thing.title + " " + thing.className;
    }
}
