import { IGlobalCheck, IHitCallback, IHitCheck, IThingFunctionGeneratorContainer, IThingFunctionGeneratorContainerGroup } from "thinghittr";

import { EightBittr } from "../EightBittr";

import { GeneralComponent } from "./GeneralComponent";

/**
 * Checkers and callbacks for Thing collisions.
 */
export class Collisions<TEightBittr extends EightBittr> extends GeneralComponent<TEightBittr> {
    /**
     * Function generators for checking whether a Thing may collide.
     */
    public readonly globalCheckGenerators?: IThingFunctionGeneratorContainer<IGlobalCheck>;

    /**
     * Function generators for checking whether two Things are colliding.
     */
    public readonly hitCheckGenerators?: IThingFunctionGeneratorContainerGroup<IHitCheck>;

    /**
     * Function generators for reacting to two Things colliding.
     */
    public readonly hitCallbackGenerators?: IThingFunctionGeneratorContainerGroup<IHitCallback>;
}
