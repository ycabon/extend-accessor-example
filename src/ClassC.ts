/// <amd-dependency path="esri/core/tsSupport/declareExtendsHelper" name="__extends" />
/// <amd-dependency path="esri/core/tsSupport/decorateHelper" name="__decorate" />
/// <amd-dependency path="esri/core/tsSupport/paramsHelper" name="__params" />

import { declared, subclass, property, cast } from "esri/core/accessorSupport/decorators";

import ClassA = require("./ClassA");
import ClassB = require("./ClassB");

// declare all superclasses
interface Base extends ClassA, ClassB {}
// interface of the constructor that implements all the subclasses
interface BaseConstructor { new (): Base; }
// return the base class of the subclass
function getBase(): BaseConstructor { return <any> ClassA; /* only return one of the base classes */ }

@subclass("myclassName")
// declared list all the base classes without the one returned by getBase
class ClassC extends declared(getBase(), ClassB) {

}

export = ClassC;
