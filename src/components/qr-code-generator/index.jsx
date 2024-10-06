import { useState } from "react";
import QRCode from "react-qr-code";

export default function Qrcode() {
    const [qrcode, setqrcode] = useState('');
    const [input, setinput] = useState('');

    function handleGenrateQrcode() {
        setqrcode(input);
        setinput('');
    }

    return (
        <div>
            <h1>QR code Generator</h1>
            <div>
                <input 
                    onChange={(e) => setinput(e.target.value)} 
                    type="text" 
                    name="qr-code" 
                    value={input}
                    placeholder="Enter your value here" 
                />
                <button 
                    disabled={input && input.trim() !== "" ? false : true} 
                    onClick={handleGenrateQrcode}
                >
                    Generate
                </button>
            </div>
            <div>
                <QRCode id="qr-code-value" value={qrcode} size={400} bgColor="white" />
            </div>
        </div>
    );
}
