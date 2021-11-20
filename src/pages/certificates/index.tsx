import {useState, FunctionComponent} from 'react'
// styling
import * as GENERAL_STYLE from '../../styles/general'
// resources
import cv from '../../resources/cv.pdf'
// utils
import { PageModel } from '../../helpers/utils'
// components
import Tab from '../../components/tabs3'

const Certificates: FunctionComponent<PageModel> = ({buttonAction, goBack}) => {
    const [buttonActive, setButtonActive] = useState(false);
    const [buttonActive2, setButtonActive2] = useState(false);
    const [buttonActive3, setButtonActive3] = useState(false);

    const data = [
        {
            title: "CS50 Web Programming, Python & JavaScript",
            academy: "Harvard University",
            content: "October 2021 - December 2021",
        },
        {
            title: "Web Development & Graphics Design",
            academy: "Ekobits Academy",
            content: "November 2018 - October 2019",
        },
        {
            title: "Responsive Web Design",
            academy: "FreeCodeCamp",
            content: "October 2021",
        },
        {
            title: "JavaScript Algorithms and Data Structure",
            academy: "FreeCodeCamp",
            content: "November 2021",
        },
        {
            title: "HTML5",
            academy: "SoloLearn",
            content: "February 2019",
        },
        {
            title: "CSS3",
            academy: "SoloLearn",
            content: "February 2019",
        },
        {
            title: "JavaScript",
            academy: "SoloLearn",
            content: "April 2019",
        },
    ]

    return (
        <div>
            <GENERAL_STYLE.InfoSection section="1">
                <GENERAL_STYLE.InfoItem enhanced={true}>CERTIFICATES OBTAINED!</GENERAL_STYLE.InfoItem>
            </GENERAL_STYLE.InfoSection>
            <div style={{marginTop: '50px'}}></div>
            <GENERAL_STYLE.Portfolio>
                {data.map((item: any) => {
                    return (
                        <Tab
                            title={item.title}
                            academy={item.academy}
                            content={item.content}
                        />
                    )
                })}
            </GENERAL_STYLE.Portfolio>
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
                        <GENERAL_STYLE.ButtonText active={buttonActive2}>LET'S CONNECT</GENERAL_STYLE.ButtonText>
                    </GENERAL_STYLE.Button>
                </span>
            </GENERAL_STYLE.ButtonContainer>
        </div>
    )
}

export default Certificates;