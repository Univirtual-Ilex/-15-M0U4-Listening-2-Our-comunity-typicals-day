import { css } from 'styled-components'
import Ilex from '../../App/variables'
const styles = css`
    min-width: 15.625em;
    min-height: 14em;
    background-image: url(./src/spriteperson250x250.png);
    background-repeat: no-repeat;
    background-position:0 0px;
    border-radius: 1em;
    padding: 0 1em;
    margin:0 0.5em 0 0.5em;
    cursor:pointer;
    h3{
        color: ${Ilex.grisOscuro};
        text-transform: uppercase;
        text-align: center;
    }
    &.persona2{
        background-position:-200px 0px;
    }
    &.persona3{
        background-position:-400px 0px;
    }
    &.persona4{
        background-position:-600px 0px;
    }
    &.persona5{
        background-position:-800px 0px;
    }
    &.selected{
        background-position-y:-250px;
        transform: scale(1.1)
    }
`

export default styles
    