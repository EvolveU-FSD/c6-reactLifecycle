import './App.css';
import {useState} from 'react'
import LifeCycleDemo from './components/lifecycle/lifecycleDemo'
import Empty from './components/empty/emptyComponent'
import StatePlay from './components/statePlay/statePlay'
import Toggle from './Toggle'
import PropsPlayParent from './components/propsPlay/propsPlayParent'
import RecoveryPlayParent from './components/recoverableEdits/recoveryPlayParent'
import GuardParent from './components/guardPlay/guardParent'

function SelectWidgetButton({name, nameOfSelectedWidget, setWidget}){
  const backgroundColor = name === nameOfSelectedWidget ? 'lightBlue' : 'grey'
  return <div style={{border: '1px solid blue', padding: 20, width: 100, height: 25, margin: 25, backgroundColor}}
    onClick={()=>{setWidget(name)}}>
    {name}
  </div>
}

function App() {
  var [widget, setWidget] = useState()
  var [toggle, setToggle] = useState(false)

  const widgets = [
    {name: 'Empty', component: (<Empty/>)},
    {name: 'LifecycleDemo', component: (<LifeCycleDemo />)},
    {name: 'State Play', component: (<StatePlay/>)},
    {name: 'Props Play', component: (<PropsPlayParent/>)},
    {name: 'Recovering Edits', component: (<RecoveryPlayParent/>)},
    {name: 'Guard Play', component: (<GuardParent />)}
  ]
  var selectedWidget = widgets.find(curWidget => curWidget.name === widget)
  return (
    <div className="App" style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
      <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-around'}}>
        {widgets.map(curWidget => 
          <SelectWidgetButton key={curWidget.name} name={curWidget.name} nameOfSelectedWidget={widget} setWidget={setWidget}/>
        )}
      </div>
      <div style={{borderRadius: 50, height: 25, width: 25, border: '1px solid black', 
        backgroundColor: toggle ? 'white' : 'black' }}
        onClick = {()=>setToggle(!toggle)}/>
      {/* <Toggle/> */}
      <div style={{width: '60%', height: '400px', border: '1px solid black', margin: 25}}>
        { selectedWidget && selectedWidget.component}
        {!selectedWidget && <div style={{margin: 25}}>Nothing selected</div>}
      </div>
    </div>
  );
}

export default App;
