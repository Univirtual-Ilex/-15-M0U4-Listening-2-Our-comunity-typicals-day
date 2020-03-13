import { css } from 'styled-components'
import Ilex from '../../App/variables'

const styles = css`
   .btn-audio-text{
        margin-left: 1.5em;
        margin-bottom: 1em;
        margin-top: -0.2em;
        background-color: ${Ilex.violeta2};
        border-radius: 0.4em;
        color: white;
        width: 6em;
        height: 1.5em;
        text-align: center;
        font-weight: bold;
        box-shadow: 0 0.3em 0 0 ${Ilex.color_gris_input};
        cursor: pointer;

    }
    .title{
        color: ${Ilex.violeta2};
        font-weight: bold;
        text-align: center;
        margin-bottom: -1.5em;
        margin-left: -2em;
    }
    .audio{
       margin-left: 7em;
       margin-top: 1em;
    }
    .persona5{
        background-position-y: 25px;
    }
    .questions{
        color: ${Ilex.textos};
        margin-top: 1em;
        line-height: 1.2em;
    }
    .running0{  
        .ilx-bocina{
            color: rgba(84,236,194,1);   
        }
    }
    .running1{   
        .ilx-bocina{
            color: rgba(84,236,194,1);   
        }
    }
    `

export default styles
    