export  function Checkbox (checked, onChange, label){
    return 
    <div>
        <input type="checkbox" 
        name="form-check-label"
        checked={checked}
        onChange={(e) => onChange(e.target.val)} />
        <label htmlFor="form-check-label">{label}</label>
    </div>
}