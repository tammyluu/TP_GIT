export  function Checkbox (checked, onChange, label, id){
    return 
    <div>
        <input type="checkbox" 
        id={id}
        name="form-check-label"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)} />
        <label htmlFor={}id"form-check-label">{label}</label>
    </div>
}