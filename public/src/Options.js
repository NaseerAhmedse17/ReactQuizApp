import react from 'react';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';

//function correctmark(props,para){
// if(props.target.value===para.qes.answer){
//     para.qes.score=1;
//     para.qes.status="correct";
// }
// else{
//     para.qes.status="incorrect";
// }
//console.log(para.qes.score);
//}

function options(props){
function correctmark(para){    
if(para.target.value===props.qes.answer){
    props.qes.score=1;
    props.qes.status="correct";
}
else{
    props.qes.status="incorrect";
}
console.log(props.qes.status);
}
return (
    <div className="radio">
    <Form.Check 
    type="radio"
    id={props.value}
    name="option"
    value={props.value}
    label={props.value}
    unchecked = "true"
    onChange={correctmark.bind(this)}
  />
    </div>
)
}
export default options;