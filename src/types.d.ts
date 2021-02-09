declare type TODO = any;

/** Represents basic object type with typed values */
declare type Obj<ValueT = any> = Record<string, ValueT>;
/** An empty object with no keys. Using {} means any non-nullish value, not an object with no keys */
declare type EmptyObj = Obj<never>;
/** An object with unknown values. It provides a little extra safety over `Obj` because the user must explicitly cast to a type if using built in methods off the value. ie `.length` or `.map`*/
declare type UnknownObj = Obj<unknown>;
