export  function Checkbox ({checked, onChange, label, id}){
    return (
    <div className="form-check">
        <input type="checkbox" 
        id={id}
        name="form-check-label"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)} />
        <label htmlFor={id} className="form-check-label">{label}</label>
    </div>)
}