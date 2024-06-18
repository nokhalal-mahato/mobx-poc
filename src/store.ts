import { computed, observable, action, makeObservable } from "mobx";

export class Store<T = any> {
  @observable section: T[] = [];
  @observable api1Loading = false;
  @observable api2Loading = false;

  constructor() {
    makeObservable(this);
  }

  @action.bound
  addSection(section: T) {
    this.section.push(section);
  }

  @computed
  get sections() {
    return this.section;
  }

  @computed
  get apiLoadingStatus() {
    return this.api1Loading && this.api2Loading;
  }

  @action.bound
  async api1() {
    this.api1Loading = true;
    await new Promise((resolve) => setTimeout(resolve, 1000));
    this.api1Loading = false;
  }

  @action.bound
  async api2() {
    this.api2Loading = true;
    await new Promise((resolve) => setTimeout(resolve, 1000));
    this.api2Loading = false;
  }
}

// const store = new Store<string>();

// store.addSection("Hello");

// mobx.autorun(() => {
//   console.log("autorun:");
//   console.log(store.sections.join(""));
// });

// setTimeout(() => {
//   store.addSection(", ");
//   store.addSection("world");
//   store.addSection("!");
// }, 100);
