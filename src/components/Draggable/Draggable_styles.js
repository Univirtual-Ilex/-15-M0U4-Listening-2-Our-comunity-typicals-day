import { css } from 'styled-components'
import Ilex from '../../App/variables'
const styles = css`
    background-color: #fff;
    border: 2px solid ${Ilex.dragItem};
    color: ${Ilex.violeta2};
    display: inline-flex;
    align-items:center;
    justify-content:center;
    vertical-align:middle;
    padding: 0.6em 0.6em;
    border-radius: 0.8em;
    box-shadow: 0 0.25em 0 0.1em ${Ilex.dragItem};
    cursor: move;
    font-size:0.75em;
    margin:0.5em 0.7em;
    position:relative;
    font-family:${Ilex.titulos};

    .hide{
        display: none;
    }
    &.hard,&.relax{
        width: 14em;
        min-height:5em;
        color:#fff;
        font-weight:bold;
    }

    &.hard{
        background-color: ${Ilex.morado};
    }
    &.relax{
        background-color: ${Ilex.violeta2};
    }
`
export default styles
