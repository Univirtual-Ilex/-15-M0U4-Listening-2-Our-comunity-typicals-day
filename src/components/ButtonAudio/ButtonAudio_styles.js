import { css } from 'styled-components'
import Ilex from '../../App/variables'
import {margin, padding } from '../Grid/Grid_styles'
// import Ilex from '../../App/variables'
const styles = css`
.ilx-bocina{
    
    font-size:1.2em;
    &:hover{
        color: rgba(84,236,194,1);
    }
}
`
export const buttonAudio2 = css`
.bocina{
    font-size: 1.8em
}
button{
    box-shadow: 0 0.5em 0 0 ${Ilex.dragItem};
    padding: ${props => padding(props)};
    margin : ${props => margin(props)};
}
button.running{
    box-shadow: 0 0.5em 0 0 ${Ilex.verde};
}


`

export default styles
    