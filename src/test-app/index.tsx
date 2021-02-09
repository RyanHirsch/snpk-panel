import { Component, jsx } from "panel";

export class TestApp extends Component<EmptyObj, EmptyObj> {
  get config() {
    return {
      defaultState: {},

      helpers: {},

      template: () => {
        return <h1>There you are!!</h1>;
      },
    };
  }
}

customElements.define("test-app", TestApp);
