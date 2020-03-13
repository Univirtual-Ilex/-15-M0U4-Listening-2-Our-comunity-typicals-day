import styled, {css} from 'styled-components'
// eslint-disable-next-line
import Ilex from '../../App/variables'
// eslint-disable-next-line
import animations from './Actividad_animations'

const mistyles = css`
.hide{
    display: none;
}
.pestanaBottom{
    position:absolute;
    bottom:-1.3em;
}
.tooltips{
    justify-content: center;
    cursor: pointer;
    position: relative;
}
.tooltip{
    margin-top: 1em;
}
.name{
    color: ${Ilex.violeta2};
    font-weight: bold;
    height: 50px;
    margin-top: 2em;

}
.person-container{
    width: 200px;
}


`

export const DraggablesContainer = styled.div`
    width: 90%;
    margin: 0 60px;
    padding: 0.4em 1em 0.4em 1em;
    text-align:center;
    &.dcontainer{
        position: relative;
        z-index:2000;
        top:-2em;
        transform:translateX(1em);
    }
`

export const AreasContainer = styled(DraggablesContainer)`
    z-index:900;
    margin:0 auto;
    display:flex;
    justify-content:center;
    align-items: center ;
    position: relative;
    &.zoom-mini{
        .Tooltip{

            h3{
                padding-bottom: 1em;
                font-size:1.5em;
            }
        }
    }
`

export const ProgressbarContainer = styled.div`
    width: 60%;
    margin:auto;
`

export const UiButtonsContainer = styled.div`
    width:6.5em;
    height:3em;
    display: flex;
    justify-content:space-between;
    right:0;
    position:absolute;
    right:1.6em;
    top:1em;

`

export default {mistyles , DraggablesContainer, AreasContainer, ProgressbarContainer}