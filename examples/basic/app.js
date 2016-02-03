import React from 'react';
import ReactDOM from 'react-dom';
import ProgressSteps from '../../lib/index';

let App = () =>
  <div className="example">
    <h1>react-progress-steps</h1>
    <pre>{`<ProgressSteps steps={5} current={1} />`}</pre>
    <ProgressSteps steps={5} current={1} /><br/>

    <pre>{`<ProgressSteps steps={5} current={2} />`}</pre>
    <ProgressSteps steps={5} current={2} /><br/>

    <pre>{`<ProgressSteps steps={5} current={3} />`}</pre>
    <ProgressSteps steps={5} current={3} /><br/>

    <pre>{`<ProgressSteps steps={5} current={4} />`}</pre>
    <ProgressSteps steps={5} current={4} /><br/>

    <pre>{`<ProgressSteps steps={5} current={5} />`}</pre>
    <ProgressSteps steps={5} current={5} /><br/>
  </div>

ReactDOM.render(<App/>, document.getElementById('container'));
