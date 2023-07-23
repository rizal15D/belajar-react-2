/* eslint-disable react/prop-types */
export default function MyButton({ text, onClick, counter }) {

    const myStyle = (text !== 'Reset!') ? {} : {margin: 20, display: 'block'};


    return (
        <button onClick={onClick} style={myStyle}>
        {text}
        </button>
    );
}