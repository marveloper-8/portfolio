import {useState, FunctionComponent} from 'react'
// styling
import * as GENERAL_STYLE from 'styles/general'
// utils
import { PageModel } from 'helpers/utils'
// videos
import video from 'resources/header.jpg'

const Introduction: FunctionComponent<PageModel> = ({buttonAction}) => {
    const [buttonActive, setButtonActive] = useState(false);
    return (
        <div>
            <GENERAL_STYLE.InfoSection section="1">
                <GENERAL_STYLE.Mobile>
                    <GENERAL_STYLE.VideoContainerOutter2 page="home" mobile>
                        <GENERAL_STYLE.VideoContainerOutter>
                            <GENERAL_STYLE.VideoContainer>
                                <GENERAL_STYLE.Video src={video} />
                            </GENERAL_STYLE.VideoContainer>
                        </GENERAL_STYLE.VideoContainerOutter>
                    </GENERAL_STYLE.VideoContainerOutter2>
                </GENERAL_STYLE.Mobile>
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