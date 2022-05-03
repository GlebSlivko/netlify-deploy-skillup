
export const Checkbox = ({ label,isChecked,id }) => {
    return (
        <label htmlFor={id}>
            <input type="checkbox" checked={isChecked} id={id}/>
            <span>{label}</span>
        </label>
    )
}

// onChange={(event => onChange(event.target.checked))}