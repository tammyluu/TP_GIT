//import myStyles from './ExReactA.module.css'
const TextBox = (message) => {
    let textBox = message? message.textBox: 'toto'

    return (
        <>
            <p className={'btn btn-' + message.colorBox } >{textBox}</p>
            
            
        </>
    )
}

export default TextBox