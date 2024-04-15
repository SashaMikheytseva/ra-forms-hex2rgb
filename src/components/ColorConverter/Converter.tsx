import { hexToRgb } from "../utils/hex-to-rgb";
import { useState } from "react";
import './Converter.css';

export const Converter = () => {
    const [color, setColor] = useState('#000000');
    const [value, setValue] = useState(color);
    const [rgb, setRgb] = useState(hexToRgb(value));

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
        if (/^#[0-9A-Fa-f]{6}$/.test(e.target.value) && e.target.value.length === 7) {
            const toRgb = hexToRgb(e.target.value);
            setRgb(toRgb);
            setColor(e.target.value);
        } else if ((!/^#[0-9A-Fa-f]{6}$/.test(e.target.value) && e.target.value.length === 7) || e.target.value.length > 7) {
            setColor('#ff0000');
            setRgb('Ошибка!');
        }
        

    }

  return (
    <div className="container" style={{backgroundColor: color}}>
        <form className="converter-form">
            <input className="converter-input" value={value} onChange={handleChange}></input>
            <label className="converter-label" htmlFor="rgb">{rgb}</label>
        </form>
    </div>
  )
}
