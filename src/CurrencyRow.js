export default function CurrencyRow(props) {
    return (
        <div className='currency-row'>
            <input type='number' value={props.amount} onChange = {props.onChangeAmount}></input>
            <select value = {props.selectCurrency} onChange = {props.onChangeCurrency}>
                {props.currencyOptions.map(option => (
                    <option value={option} key={option}>{option}</option>
                ))}
                
            </select>
        </div>
    )
}
