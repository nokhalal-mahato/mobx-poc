import * as React from "react";
import "./styles.css";
import { Store } from "./store";
import * as mobxReact from "mobx-react";
import ComponentA from "./Components/ComponentA";

const store = new Store<string>();

export default mobxReact.observer(function App() {
  const [value, setValue] = React.useState("");

  React.useEffect(() => {
    store.api1();
    store.api2();
  }, []);

  return (
    <div className="App">
      <h1>MobX React Typescript Starter</h1>
      <h2>Add a section:</h2>
      <input
        value={value}
        onChange={(e) => {
          setValue(e.currentTarget.value);
        }}
      />
      <button
        disabled={value === ""}
        onClick={() => {
          store.addSection(value);
        }}
      >
        Add section
      </button>
      <h2>Sections:</h2>
      <ul>
        {store.sections.map((section) => (
          <li>{section}</li>
        ))}
      </ul>
      {store.apiLoadingStatus ? <p>Loading...</p> : null}
      <ComponentA mainStore={store} />
    </div>
  );
});
