//Import
import React, {useState, useRef} from 'react'
import styled from 'styled-components'
import styles from './Actividad2_styles'
import Ilex from '../../App/variables'
import ButtonAudio from '../ButtonAudio'
// styles from styled
import { UiButtonsContainer } from '../Actividad1/Actividad_styles'
// Data
// import data from './Actividad2_data'
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
import Modal from '../Generales/Modal'

const Actividad2_base = ({staticContext, ...props}) => {


    const [modalFlag, setModal] = useState(false)
    const [ok, setOk] = useState(false)
    const [err, setErr] = useState(false)



    const DataPerson = Data[0] // this is the first screen and the first person
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
                setErr(true)
                DataPerson.right = 0
            }
            if(count === DataPerson.audios.length){
                DataPerson.right = 1
                setOk(true)
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

    const checkActivity = () => {
        if(DataPerson.right !== 1){
            setErr(true)
            setOk(false)
        }else{
            setErr(false)
            setOk(true)
        }
        setModal(true)
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
                <ButtonUi icon='ilx-volver' tooltip='Start Again' onClick={ () => {window.location.reload()} } />
            </UiButtonsContainer>           
            <IRow w={85} align="center">
                <ICol pt={ 4 } pb={0.5}>
                    <MainTitle color={Ilex.violeta2} size={1.5}>
                    COMPLETE THE EXERCISES WITH THE CORRECT INFORMATION FROM THE AUDIOS
                    </MainTitle>  
                </ICol>
            </IRow>
            <IRow pt={2} w={85} justify={'center'} className="columns" align={'center'} className="questions">
                <ICol w={28} >
                    <IRow>
                         <div className="title">UTP MEDICINE STUDENT</div>
                        <Area className={"persona1"} title={Data[0].name}/>
                        <AreaButtons className="audio" audio={DataPerson.audio_general}/>
                    </IRow>    
                </ICol>
                <ICol w={70} pt={3} >
                    <IRow>
                        {questions}
                    </IRow>
                </ICol>
            </IRow>
            <Modal visible={modalFlag} ok={ok} err={err} w={25} repeatUrl={'#/actividad2'} nxtUrl={'#/actividad2a'} />
             <IRow pt={9.8}>
                <ICol><ButtonCheck onClick={checkActivity}  text={'CHECK'} /></ICol>
            </IRow>
        </Container>

    )
}
const Actividad2 = styled(Actividad2_base)`${ styles }`
export default Actividad2
