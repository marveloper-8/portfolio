import {useState, FunctionComponent} from 'react'
// styling
import * as GENERAL_STYLE from '../../styles/general'
// resources
import cv from '../../resources/cv.pdf'
// utils
import { PageModel } from '../../helpers/utils'
// components
import Tabs from '../../components/tabs'

const About: FunctionComponent<PageModel> = ({
    buttonAction,
    goExperience,
    goProjects,
    goCertificates,
    goOrganisations,
    goBack
}) => {
    const [buttonActive, setButtonActive] = useState(false);
    const [buttonActive2, setButtonActive2] = useState(false);
    const [buttonActive3, setButtonActive3] = useState(false);

    const tab_data = [
        {
            title: "3+",
            content: "Years of Experience",
            goTo: goExperience
        },
        {
            title: "30+",
            content: "Projects Involvement",
            goTo: goProjects
        },
        {
            title: "5+",
            content: "Software Certifications",
            goTo: goCertificates
        },
        {
            title: "5+",
            content: "Organizations Worked With",
            goTo: goOrganisations
        },
    ]

    return (
        <div>
            <GENERAL_STYLE.InfoSection section="1">
                <GENERAL_STYLE.InfoItem enhanced={true}>ABOUT ME!</GENERAL_STYLE.InfoItem>
            </GENERAL_STYLE.InfoSection>
            <GENERAL_STYLE.InfoSection section="2" type="small">
                <p>
                    A Javascript Developer who has over 3 years extensive experience using Typescript, state management tools such as Redux, data visualization tools such as D3, styling frameworks such as SASS and Styled Components, technologies used for testing such as Jest and Enzyme, and mobile application development tools such as React Native
                </p>
            </GENERAL_STYLE.InfoSection>
            <GENERAL_STYLE.Stats>
                {tab_data.map((item: any) => {
                    return (
                        <span onClick={item.goTo} style={{cursor: 'pointer'}}>
                            <Tabs 
                                title={item.title} 
                                content={item.content} 
                            />
                        </span>
                    )
                })}
            </GENERAL_STYLE.Stats>
            <GENERAL_STYLE.ButtonContainer>
                <span
                    style={{
                        cursor: 'pointer',
                        marginRight: '20px'
                    }}
                    onMouseEnter={() => setButtonActive3(true)} 
                    onMouseLeave={() => setButtonActive3(false)} 
                    onClick={goBack}
                >
                    <GENERAL_STYLE.Button back={true} active={buttonActive3}>
                        <GENERAL_STYLE.ButtonText back={true} active={buttonActive3}>GO BACK</GENERAL_STYLE.ButtonText>
                    </GENERAL_STYLE.Button>
                </span>
                <span
                    style={{cursor: 'pointer'}}
                    onMouseEnter={() => setButtonActive(true)} 
                    onMouseLeave={() => setButtonActive(false)} 
                >
                    <a href={cv} target="_blank" rel="noreferrer">
                        <GENERAL_STYLE.Button active={buttonActive}>
                            <GENERAL_STYLE.ButtonText active={buttonActive}>DOWNLOAD CV</GENERAL_STYLE.ButtonText>
                        </GENERAL_STYLE.Button>
                    </a>
                </span>
                <span
                    style={{
                        cursor: 'pointer',
                        marginLeft: '20px'
                    }}
                    onMouseEnter={() => setButtonActive2(true)} 
                    onMouseLeave={() => setButtonActive2(false)} 
                    onClick={buttonAction}
                >
                    <GENERAL_STYLE.Button active={buttonActive2}>
                        <GENERAL_STYLE.ButtonText active={buttonActive2}>SKILLS ACQUIRED</GENERAL_STYLE.ButtonText>
                    </GENERAL_STYLE.Button>
                </span>
            </GENERAL_STYLE.ButtonContainer>
        </div>
    )
}

export default About;