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

// Styles
import styled from 'styled-components'
import styles, { DraggablesContainer, AreasContainer, UiButtonsContainer } from './Actividad_styles'
import Ilex from '../../App/variables'
// import interaction from './Actividad_interactions'
import Data from '../Data'
import Tooltip from '../Tooltip'

const Actividad_base = ({staticContext, ...props}) => {
    

    
    const persons = Data.map((data, i) => {
        return(
            <ICol w={20}>
                <Area className={"persona" + (i + 1)} title={data.name}/>
                <AreaButtons audio={data.audio_general}/>
                
            </ICol>
        )
    })

    return (
        <Container bgImage='./src/bg_actividad1.png' {...props} id="area" h={40}>
            
            <UiButtonsContainer>
                <ButtonUi icon='ilx-ayuda' tooltip='click on the buttons to listen and read the activities, associate them with the texts below.' />
                <ButtonUi icon='ilx-volver' tooltip='Start Again' onClick={ () => {window.location.href = '/actividad1'} } />
            </UiButtonsContainer>
            <ICol mt={3}>
                <MainTitle color={Ilex.violeta2}>
                    LISTEN AND PRACTICE FAMILY MEMBERS. THEN, CLASSIFY EACH FAMILY MEMBER BY ITS GENDER.
                </MainTitle>
            </ICol>

            <AreasContainer className="zoom-mini">
                <IRow>
                    {persons}
                </IRow>


            </AreasContainer>
            
            

            <IRow className='pestanaBottom' >
                <ICol ><ButtonCheck link={'/actividad2'} text={'NEXT'} /></ICol>
            </IRow>
        </Container>
    )

}

const Actividad = styled(Actividad_base)`
    ${ styles.mistyles }
`


export default Actividad