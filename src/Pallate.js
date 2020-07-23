import React from 'react'
import ColorBox from './ColorBox';
import './pallate.css'

function Pallate(props) {

    const colorBox = props.colors.map(color => (
        <ColorBox background={color.color} name={color.name} />
    ))

    return (

        <div className='pallate'>
            {/* navbar */}

            <div className='pallate-color'>
                {colorBox}
            </div>
            {/* footer */}

        </div>


    )
}

export default Pallate
