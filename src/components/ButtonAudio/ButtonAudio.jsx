
//Import
import React, {useRef, useState} from 'react'
import styled from 'styled-components'
import styles,{buttonAudio2} from './ButtonAudio_styles'
//

// Componente base
const ButtonAudio_base = ({src, play, w, h, p, py, px, pl, pt, pr, pb, ml, mt, mr, mb, my, mx, ...props}) => {
    const ilxAudio = useRef()
    const [running, playAudio] = useState(false)
    const aPlay = () => {

        if(!running) {
            ilxAudio.current.play()
            playAudio(true)
        } else {
            ilxAudio.current.pause()
            playAudio(false)
        }

    }
    return (
        <div {...props}>
            <button className={'btn-clean ' + (running ? 'running' : '')}  onClick={ aPlay }>
                { props.children ? props.children : <i className='ilx-bocina'></i>  }
            </button>
            <audio ref={ilxAudio}>
                <source src={ src }/>
                <span>No se puede reproducir el audio</span>
            </audio>
        </div>
    )
}
const ButtonAudio = styled(ButtonAudio_base)`${ styles }`
export const ButtonAudio2 = styled(ButtonAudio)` ${ buttonAudio2 }`
export default ButtonAudio
