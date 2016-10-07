
/// <amd-dependency path="esri/core/tsSupport/declareExtendsHelper" name="__extends" />
/// <amd-dependency path="esri/core/tsSupport/decorateHelper" name="__decorate" />
/// <amd-dependency path="esri/core/tsSupport/paramsHelper" name="__params" />

import { declared, subclass, property, cast } from "esri/core/accessorSupport/decorators";

import Accessor = require("esri/core/Accessor");
import Query = require("esri/tasks/support/Query");
import Extent = require("esri/geometry/Extent");

@subclass("package.app.ClassB")
class ClassB extends declared(Accessor) {

  //--------------------------------------------------------------------------
  //
  //  Properties
  //
  //--------------------------------------------------------------------------

  //----------------------------------
  //  extent
  //----------------------------------

  // use type to define the constructor to invoke on a pojo
  @property({
    type: Extent
  })
  extent: Extent;

  //----------------------------------
  //  alpha
  //----------------------------------

  @property()
  alpha: number;

  // use @cast(propertyName) to define a function that will cast a property
  @cast("alpha")
  protected castAlpha(value: number): number {
    return Math.max(Math.min(1, value), 0);
  }

  //--------------------------------------------------------------------------
  //
  //  Public Methods
  //
  //--------------------------------------------------------------------------

  // use @cast(class) to autocast a parameter
  query(@cast(Query) query: Query): void {}

}

export = ClassB;
