import './DatePicker.css';
function DatePicker(props) {
const {date, onDateChange} = props;
const currentDayDate = new Date().toISOString().split('T')[0]; 
return (
<div className="date_picker_container">
  <input type="text" className="date_text" placeholder={props.placeholderText} readOnly value={date}/>
  <input type="date" className="date_picker" max={currentDayDate} onChange={(evt) => onDateChange(evt.target.value)}/>
</div>
)}

export default DatePicker;
