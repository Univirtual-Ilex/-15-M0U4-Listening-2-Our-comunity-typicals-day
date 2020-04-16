import React, {useRef, useState} from 'react'
//Components
import Container from '../Container'
import MainTitle from '../MainTitle'
import DraggableItem from '../Draggable'
import Area from '../AreaDrop'
import ButtonUi from '../ButtonControlUI'
import Modal from '../Generales/Modal'
import ButtonCheck from '../ButtonCheck'
import {ICol, IRow} from '../Grid'
import AreaButtons from '../AreaButtons'
import ButtonAudio from '../ButtonAudio'

// Styles
import styled from 'styled-components'
import styles, { DraggablesContainer, AreasContainer, UiButtonsContainer } from './Actividad_styles'
import Ilex from '../../App/variables'
// import interaction from './Actividad_interactions'
import Data from '../Data'
import Tooltip from '../Tooltip'
import activities from './Actividad_activities'
import time from './Actividad_time'


const Actividad_base = ({staticContext, ...props}) => {
    const [visible1, setvisible1] = useState(false)
    const [visible2, setvisible2] = useState(false)

    
    const persons = Data.map((data, i) => {
        return(
            <ICol key={i} className="person-container">          
                <div  className="name">{data.name}</div>         
                <Area className={"persona" + (i + 1)} title={data.name}/>
                <AreaButtons className="audio" audio={data.audio_general}/>           
            </ICol>
        )
    })

    return (
        <Container bgImage='./src/bg_actividad1.png' {...props} id="area" h={40} w={75}>
            
            <UiButtonsContainer>
                <ButtonUi icon='ilx-ayuda' tooltip='Listen carefully to the recordings then answer the correct option of each person' />
                <ButtonUi icon='ilx-volver' tooltip='Start Again' onClick={ () => {window.location.reload()} } />
            </UiButtonsContainer>
            <ICol mt={3}>
                <MainTitle color={Ilex.violeta2}>
                    LISTEN CAREFULLY THE INFORMATION FROM EACH PERSON'S TYPICAL DAY
                </MainTitle>
            </ICol>

            <AreasContainer className="zoom-mini">
                <IRow>
                    {persons}
                </IRow>
            </AreasContainer>
            
            <IRow className="tooltips">
                <div onClick={() => setvisible1(!visible1)}>
                    <img src="./src/tooltip1.png" alt=""/>
                </div>
                <Tooltip  visible={visible1} closebtn={()=> setvisible1(!visible1)} w={30} pos={"22em, -20em"}>
                    <h2>PRACTICE TELLING ACTIVITIES</h2>
                    { activities.map((item, index) => {
                        return(
                            <IRow key={"activities" + item.id} className="tooltip">
                                <ICol>
                                    <IRow>
                                        <ICol w={30}>
                                            <ButtonAudio src={item.audio}></ButtonAudio>
                                        </ICol>
                                        <ICol w={60}>
                                            <h3>{item.act}</h3>
                                        </ICol>
                                    </IRow>
                                </ICol>
                            </IRow>
                        )
                    })

                    }
                </Tooltip>
                <div onClick={() => setvisible2(!visible2)}>
                    <img src="./src/tooltip2.png" alt=""/>
                </div>
                <Tooltip  visible={visible2} closebtn={()=> setvisible2(!visible2)} w={30} pos={"45em, -8em"}>
                    <h2>PRACTICE TELLING TIME</h2>
                    { time.map((item, index) => {
                        return(
                            <IRow key={"time" + item.id} className="tooltip">
                                <ICol>
                                    <IRow>
                                        <ICol w={30}>
                                            <ButtonAudio src={item.audio}></ButtonAudio>
                                        </ICol>
                                        <ICol w={60}>
                                            <h3>{item.time}</h3>
                                        </ICol>
                                    </IRow>
                                </ICol>
                            </IRow>
                        )
                    })
                    }
                </Tooltip>
            </IRow>

            <IRow className='pestanaBottom'  >
                <ICol><a href="#/actividad2"> <ButtonCheck  text={'NEXT'} /></a></ICol>
            </IRow>
        </Container>
    )

}

const Actividad = styled(Actividad_base)`
    ${ styles.mistyles }
`


export default Actividad