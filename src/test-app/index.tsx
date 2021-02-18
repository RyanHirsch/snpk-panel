import { Component, jsx } from "panel";

import "./style.css";

export class TestApp extends Component<EmptyObj, EmptyObj> {
  get config() {
    return {
      defaultState: {},

      helpers: {},

      template: () => {
        return (
          <div>
            <h1>There you are foo</h1>
          </div>
        );
      },
    };
  }
}

customElements.define("test-app", TestApp);
