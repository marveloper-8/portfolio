import {useState, FunctionComponent} from 'react'
// styling
import * as GENERAL_STYLE from '../../styles/general'
// resources
import cv from '../../resources/cv.pdf'
// utils
import { PageModel } from '../../helpers/utils'
// components
import Tabs from '../../components/tabs'

const Introduction: FunctionComponent<PageModel> = ({buttonAction}) => {
    const [buttonActive, setButtonActive] = useState(false);

    return (
        <div>
            <GENERAL_STYLE.InfoSection section="1">
                HI. I'M <GENERAL_STYLE.InfoItem enhanced={true}>JOSH!</GENERAL_STYLE.InfoItem>
            </GENERAL_STYLE.InfoSection>
            <GENERAL_STYLE.InfoSection section="2">
                AND WELCOME TO
            </GENERAL_STYLE.InfoSection>
            <GENERAL_STYLE.InfoSection section="3">MY WEBSITE!!</GENERAL_STYLE.InfoSection>
            <span
                style={{cursor: 'pointer'}}
                onMouseEnter={() => setButtonActive(true)} 
                onMouseLeave={() => setButtonActive(false)} 
                onClick={buttonAction}
            >

                <GENERAL_STYLE.Button active={buttonActive}>
                    <GENERAL_STYLE.ButtonText active={buttonActive}>LEARN ABOUT ME</GENERAL_STYLE.ButtonText>
                </GENERAL_STYLE.Button>
            </span>
        </div>
    )
}

export default Introduction;