# Snowpack Panel

This is an attempt to get [panel](https://github.com/mixpanel/panel/) working with snowpack and esbuild.

Specifically, getting `tsx` working. The [panel tsx example](https://github.com/mixpanel/panel/tree/master/examples/jsx) assumes webpack + babel and leverages `transform-react-jsx`, but I don't want to lose the speed of esbuild.
