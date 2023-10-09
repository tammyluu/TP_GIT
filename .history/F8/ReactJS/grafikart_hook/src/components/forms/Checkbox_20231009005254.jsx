export  function Checkbox (checked, onChange, label){
    return 
    <div>
        <input type="checkbox" 
        name="form-check-label"
        checked={checked}
        onChange={(e)} />
        <label htmlFor="form-check-label">{label}</label>
    </div>
}