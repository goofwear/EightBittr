import { IAliases, ITriggerContainer } from "inputwritr";

import { EightBittr } from "../EightBittr";

import { GeneralComponent } from "./GeneralComponent";

/**
 * User input filtering and handling.
 */
export class Inputs<TEightBittr extends EightBittr> extends GeneralComponent<TEightBittr> {
    /**
     * Known, allowed aliases for input event triggers.
     */
    public readonly aliases?: IAliases;

    /**
     * Mapping of events to their key codes, to their callbacks.
     */
    public readonly triggers?: ITriggerContainer;
}
