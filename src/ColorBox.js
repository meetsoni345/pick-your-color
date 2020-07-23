import React, { useState, useEffect } from 'react'
import './colorbox.css';
import { CopyToClipboard } from 'react-copy-to-clipboard';

function ColorBox(props) {
    const { name, background } = props;
    const [copied, setCopied] = useState(false)

    const changeCopyState = () => {
        setCopied(true);

        console.log(copied);

    }

    useEffect(() => {
        if (copied) {
            setTimeout(() => {
                setCopied(false)
            }, 1500);
        }
    }, [copied])

    return (
        <CopyToClipboard text={background} onCopy={() => changeCopyState()}>
            <div style={{ background }} className='colorBox'>

                <div style={{ background }} className={`copy-overlay ${copied && 'show'}`} />

                <div className={`copied-text ${copied && 'show'}`}>
                    <h1>Copied!</h1>
                    <p>{background}</p>
                </div>
                <div className='copy-container'>
                    <div className='box-content'>
                        <span>{name}</span>
                    </div>
                    <button className='copy-button'>Click To Copy</button>
                </div>
                {/* <span className='more'>More</span> */}
            </div>
        </CopyToClipboard>

    )
}

export default ColorBox
