import { css } from 'styled-components'
import Ilex from '../../App/variables'
const styles = css`
    color: ${Ilex.color_grisMedio};
    .bloque-columnas{
        column-count:4;
        column-gap: 3.5em;
        orphans:0;
        widows: 0;
        
        li{
            margin: 0.5em 0.5em;


            &:first-child{
                margin: 0em 0;
            }
        }
    }
    .lista-preguntas {
        display:flex;
        flex-direction: column;
        align-items:stretch;
        align-content:space-between;
        flex-wrap:wrap;
        height:25.4em;
        li{
            margin: 0.5em 0.5em;
            width: 10em ;
        }
    }
    .contenedor-txt{
        background-color: #f1f1f1;
        min-height: 30em;
        border-radius: 0.5em;
        padding: 1em;
        font-weight: lighter;
        text-align: justify;
        .sub-contenedor-img{
            img {
                max-width :100%;
                width: 100%;
            }
        }
    }
    &.columns{
        height: 40em;
        flex-direction: column;
        flex-wrap: wrap;
    }
    .questions{
        color: ${Ilex.textos};
        margin-top: 1em;
        line-height: 1.2em;
    }
    .check{
        margin-top: 1.25em;
    }
    .btn-audio-text{
        margin-left: 1.5em;
        margin-bottom: 1em;
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
        margin-bottom: -1em;
        margin-left: 3em;
    }
    .audio{
       margin-left: 10em;
       margin-top: 1em;
    }
    .persona1{
        background-position: 22px 25px;
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
    .running2{        
        .ilx-bocina{
            color: rgba(84,236,194,1);   
        }
    }
    .running3{        
        .ilx-bocina{
            color: rgba(84,236,194,1);   
        }
    }

`

export default styles
    