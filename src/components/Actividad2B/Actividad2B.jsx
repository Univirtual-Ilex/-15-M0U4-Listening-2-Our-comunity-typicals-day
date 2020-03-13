//Import
import React, {useState, useRef} from 'react'
import styled from 'styled-components'
import styles from './Actividad2B_styles'
import Ilex from '../../App/variables'
import ButtonAudio from '../ButtonAudio'
// styles from styled
import { UiButtonsContainer } from '../Actividad1/Actividad_styles'
// Data
// import data from './Actividad2B_data'
// Components
import Container from '../Container'
import MainTitle from '../MainTitle'
import { IRow, ICol } from '../Grid'
// import ButtonUi from '../ButtonControlUI'
import ButtonCheck from '../ButtonCheck'
import ButtonUi from '../ButtonControlUI'
// import PreguntaRadio from '../PreguntaRadio/PreguntaRadio'
// Componente base
import Data from '../Data'
import PreguntaTF from '../PreguntaTF'

import ButtonRadioSimple from '../ButtonRadioSimple'
import AreaButtons from '../AreaButtons'


import Area from '../AreaDrop'


const Actividad2B_base = ({staticContext, ...props}) => {

    const DataPerson = Data[2] // this is the first screen and the first person

    const ilxAudio0 = useRef()
    const ilxAudio1 = useRef()
    const ilxAudio2 = useRef()
    const ilxAudio3 = useRef()
    const [running0, playAudio0] = useState(false)
    const [running1, playAudio1] = useState(false)
    const [running2, playAudio2] = useState(false)
    const [running3, playAudio3] = useState(false)

    const aPlay = (i) => {

        if(!eval('running' + i)) {
            eval('ilxAudio' + i).current.play()
            eval('playAudio' + i)(true)
        } else {
            eval('ilxAudio' + i).current.pause()
            eval('playAudio' + i)(false)
        }

    }

    const w_c = 100 / DataPerson.audios.length
    const changeData = () => {
        var count = 0
        DataPerson.audios.forEach((audio) => {
            if(audio.right == 1){
                count ++
            }else{
                DataPerson.right = 0
            }
            if(count === DataPerson.audios.length){
                DataPerson.right = 1
            }
        })
    }


    const setChecked = (audioId, buttonId) => {
        const data = DataPerson.audios[audioId]
        
        const button = data.buttons[buttonId]

        if(button.score === 1){
            data.right = 1
        }else{
            data.right = 0
        }

        changeData()
    }


    const questions = DataPerson.audios.map((data,i) => {
        return(
            <ICol w={w_c} key={i} >
                <IRow>
                    <ButtonAudio src={data.audio} className={"btn-audio "  + (eval('running' + i) ? 'running' + i: '')}></ButtonAudio>
                        <div className="btn-audio-text" onClick={() => aPlay(i)}>{data.audio_text}</div>
                        <audio ref={eval('ilxAudio' + i)}>
                        <source src={ data.audio }/>
                       <span>No se puede reproducir el audio</span>
                        </audio>
                </IRow>
                {
                    data.buttons.map((button, index) => {
                        return(
                            <ButtonRadioSimple setCheckedState={setChecked} key={index} buttonId={index} audioId={i}  nameb={'button_' + i} text={button.text} className={"ml-1  " + 'first_button1' + i} />
                        )
                    })
                } 
            </ICol>
        )
    })
    return (
        <Container bgImage='./src/bg_actividad1.png' h={38} w={80} {...props}>
            <UiButtonsContainer>
                <ButtonUi icon='ilx-ayuda' tooltip='Assign the activities of each student to the corresponding schedule' />
                <ButtonUi icon='ilx-volver' tooltip='Start Again' onClick={ () => {window.location.href = '/actividad1'} } />
            </UiButtonsContainer>           
            <IRow w={85} align="center">
                <ICol pt={ 4 } pb={0.5}>
                    <MainTitle color={Ilex.violeta2} size={1.5}>
                    COMPLETE THE EXERCISES WITH THE CORRECT INFORMATION FROM THE AUDIOS
                    </MainTitle>  
                </ICol>
            </IRow>
            <IRow pt={2} w={85} justify={'center'}  align={'center'} className="questions">
                <ICol w={25} >
                    <IRow>
                        <div className="title">ILEX ASSISTANT</div>
                        <div className="assitant"></div>
                        <AreaButtons className="audio" audio={DataPerson.audio_general}/>
                    </IRow>          
                </ICol>
                <ICol w={70} pt={3} className="columns">
                    <IRow>
                        {questions}
                    </IRow>
                </ICol>
            </IRow>
             <IRow pt={9.5}>
             <ICol><a href="/actividad2c"> <ButtonCheck  text={'CHECK'} /></a></ICol>
            </IRow>
        </Container>

    )
}
const Actividad2B = styled(Actividad2B_base)`${ styles }`
export default Actividad2B
