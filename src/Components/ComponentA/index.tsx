import React from "react";
import { Store } from "../../store";
import { IReactionDisposer, observable, reaction } from "mobx";
import { LocalStore } from "./store";

interface Props {
  mainStore: Store;
}
class ComponentA extends React.Component<Props> {
  @observable localStore!: LocalStore;

  //   localStoreReaction?: IReactionDisposer;
  constructor(props: Props) {
    super(props);
    this.localStore = new LocalStore();
    // this.localStoreReactionInitialize();
  }

  componentDidMount(): void {
    this.localStore.api1();
    this.props.mainStore.api1();
  }

  componentWillUnmount(): void {
    // this.localStoreReaction();
    this.mainStoreReaction();
  }

  localStoreReaction = reaction(
    () => this.localStore.api1Loading,
    (api1Loading) => {
      console.log("localStoreReaction:>>>>", api1Loading);
    }
  );

  //   localStoreReactionInitialize = () => {
  //     this.localStoreReaction = reaction(
  //       () => this.localStore.api1Loading,
  //       (api1Loading) => {
  //         console.log("localStoreReaction:>>>>", api1Loading);
  //       }
  //     );
  //   };

  mainStoreReaction = reaction(
    () => this.props.mainStore.api1Loading,
    (api1Loading) => {
      console.log("mainStoreReaction:>>>>", api1Loading);
    }
  );

  render() {
    return <div>ComponentA</div>;
  }
}

export default ComponentA;
