export  function Checkbox (checked, onChange, label, id){
    return 
    <div>
        <input type="checkbox" 
        id={}
        name="form-check-label"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)} />
        <label htmlFor="form-check-label">{label}</label>
    </div>
}