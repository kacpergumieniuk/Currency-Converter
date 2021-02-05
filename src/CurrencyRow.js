export default function CurrencyRow(props) {
    return (
        <div className='currency-row'>
            <input type='number'></input>
            <select>
                {props.currencyOptions.map(option => (
                    <option value={option} key={option}>{option}</option>
                ))}
                
            </select>
        </div>
    )
}
