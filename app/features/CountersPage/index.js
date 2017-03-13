import React from 'react';

import { Panel } from "../../components";
import SyncCounter from "./SyncCounter";
import ThunkCounter from "./ThunkCounter";
import LocalCounter from "./LocalCounter";

export default class CountersPage extends React.Component {

  render() {
    return (
      <div>
        <Panel title="Local Counter">
          <LocalCounter/>
        </Panel>
        <hr/>

        <Panel title="Sync Counter">
          <SyncCounter/>
        </Panel>
        <hr/>

        <Panel title="Thunk Counter">
          <ThunkCounter/>
        </Panel>
        <hr/>

      </div>
    );
  }
}
