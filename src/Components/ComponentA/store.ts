import { observable, action, makeObservable } from "mobx";

export class LocalStore {
  @observable api1Loading = false;
  @observable api2Loading = false;

  constructor() {
    makeObservable(this);
  }

  @action.bound
  async api1() {
    this.api1Loading = true;
    await new Promise((resolve) => setTimeout(resolve, 1000));
    this.api1Loading = false;
  }
}
