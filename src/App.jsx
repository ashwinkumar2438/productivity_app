import './App.css';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Actions} from '@src/store/Reducers';
function App({LoginUser,name,mail}) {
  return (
    <div className="App">
   <h1>Hello World</h1>
   <h2>{name}</h2>
   <h3>{mail}</h3>
  <button onClick={()=>{
    LoginUser({email:'batman@testride.com',password:'robin'})
  }}>Update User</button>
    </div>
  );
}

const mapStateToProps=(state)=>({name:state.user.name,mail:state.user.email})
const mapDispatchToProps=(dispatch)=>{
  return bindActionCreators({
    LoginUser:Actions.user.login
  },dispatch);
}


export default connect(mapStateToProps,mapDispatchToProps)(App);
