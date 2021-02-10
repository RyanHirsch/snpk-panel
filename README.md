# Snowpack Panel

This is an attempt to get [panel](https://github.com/mixpanel/panel/) working with snowpack and esbuild.

Specifically, getting `tsx` working. The [panel tsx example](https://github.com/mixpanel/panel/tree/master/examples/jsx) assumes webpack + babel and leverages `transform-react-jsx`, but I don't want to lose the speed of esbuild.

As this code stands, there is are two compile errors:

```
  src/test-app/index.tsx(11,16): error TS7026: JSX element implicitly has type 'any' because no interface 'JSX.IntrinsicElements' exists.
  src/test-app/index.tsx(11,35): error TS7026: JSX element implicitly has type 'any' because no interface 'JSX.IntrinsicElements' exists.
```
