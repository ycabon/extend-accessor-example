/// <amd-dependency path="esri/core/tsSupport/declareExtendsHelper" name="__extends" />
/// <amd-dependency path="esri/core/tsSupport/decorateHelper" name="__decorate" />
/// <amd-dependency path="esri/core/tsSupport/paramsHelper" name="__params" />

import { declared, subclass, property, cast } from "esri/core/accessorSupport/decorators";

import Accessor = require("esri/core/Accessor");

// sets the declaredClass property and mixin all the classes in the declared call
@subclass("package.app.ClassA")
class ClassA extends declared(Accessor) {

  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------

  constructor() {
    super();
  }

  initialize() {
    console.log("all props set");
  }

  //--------------------------------------------------------------------------
  //
  //  Properties
  //
  //--------------------------------------------------------------------------

  //----------------------------------
  //  firstName
  //----------------------------------

  // declare a property
  @property()
  firstName: string;

  //----------------------------------
  //  lastName
  //----------------------------------

  // declare a read-only property
  @property()
  lastName: string;

  //----------------------------------
  //  fullName
  //----------------------------------

  // declare a read-write computed property
  @property({
    dependsOn: ["firstName", "lastName"]
  })
  get fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
  set fullName(value: string) {
    const split = value.split(" ");
    this._set("firstName", split[0]);
    this._set("lastName", split[1]);
  }

  //----------------------------------
  //  fullName
  //----------------------------------

  @property({
    // autocast support
    type: Date
  })
  birthday: Date;

  //----------------------------------
  //  age
  //----------------------------------

  // read only and computed
  @property({
    readOnly: true,
    dependsOn: ["birthday"]
  })
  get age(): number {
    return 0;
  }


  //--------------------------------------------------------------------------
  //
  //  Protected Methods
  //
  //--------------------------------------------------------------------------

  // Those methods are on Accessor, but not exposed in the typings.
  // They allow setting an getting from the property cache
  protected _get: (propertyName: string, value: any) => void;
  protected _set: (propertyName: string, value: any) => void;


}

export = ClassA;
