# Snowpack Panel

This is an attempt to get [panel](https://github.com/mixpanel/panel/) working with snowpack and esbuild.

Specifically, getting `tsx` working. The [panel tsx example](https://github.com/mixpanel/panel/tree/master/examples/jsx) assumes webpack + babel and leverages `transform-react-jsx`, but I don't want to lose the speed of esbuild.

As it stands, `jsx` needs to be explicitly imported to the consuming `tsx` file. [ESBuild supports auto-injection](https://esbuild.github.io/api/#inject)

```sh
yarn esbuild --inject:./jsx-shim.js src/test-app/index.tsx
```

but, snowpack doesn't support this option yet ([discussion #1469](https://github.com/snowpackjs/snowpack/discussions/1469) and [issue #1122](https://github.com/snowpackjs/snowpack/issues/1122)). Injection can be done by manually calling `esbuild` with `@snowpack/plugin-runscript`, but I haven't tried that yet.

## To Do

- [x] Vanilla Panel working with `h`
- [x] TSX Panel working with `jsx`
- [x] CSS and stylus styling
- [ ] Shadow DOM'd styling
- [ ] JSDOM tests
