import {useState, FunctionComponent} from 'react'
// styling
import * as GENERAL_STYLE from '../../styles/general'
// resources
import cv from '../../resources/cv.pdf'
// utils
import { PageModel } from '../../helpers/utils'
// components
import OrganisationsItem from '../../components/organisations-item'

const Organisations: FunctionComponent<PageModel> = ({buttonAction, goBack}) => {
    const [buttonActive, setButtonActive] = useState(false);
    const [buttonActive2, setButtonActive2] = useState(false);
    const [buttonActive3, setButtonActive3] = useState(false);

    const data = [
        {
            org: "SynOption",
            role: "React Developer (Singapore Remote)",
            desc: "September 2021 till date",
            stack: [
                "Developed high end applications using React",
                "Adopted Material UI, Styled Components, and SCSS for styling",
                "Worked hand in hand with a large team of frontend developers",
                "Developed the state management system using Redux",
                "Connected some applications to their respective backend services using WebSocket",
            ]
        },
        {
            org: "ProDevs",
            role: "React Developer (United States Remote)",
            desc: "September 2020 - August 2021",
            stack: [
                "Developed high end applications using React",
                "Adopted Material UI and SCSS for styling",
                "Developed templates for web medical reports",
                "Developed Email templates",
                "Developed a large number of landing pages",
                "Worked hand in hand with Laravel developers",
                "Developed the state management system using Redux",
                "Connected some applications to their respective backend services using WebSocket, REST API, and GraphQL",
                "Worked hand in hand with the UI Designer to create applications, mostly React, to perfectly match designs on Figma"
            ]
        },
        {
            org: "U-Greet",
            role: "React Developer (Canada Remote)",
            desc: "May 2021 - August 2021",
            stack: [
                "Built the website and the application using React JS",
                "Used state management systems with Redux",
                "Worked hand in hand with Laravel developer",
                "Connected to the backend service using REST API"
            ]
        },
        {
            org: "Ripple Impact",
            role: "Fullstack Developer & Technical Recruiter (Nigeria Remote)",
            desc: "January 2020 - June 2020",
            stack: [
                "Managed the job portal using Laravl",
                "Developed and maintained the main website using React",
                "Designed some of the digital designs to be used for job advertisement",
                "Led the recruitment team’s technical interviews in Nigeria"
            ]
        },
        {
            org: "Bethesda Child Support Agency",
            role: "React Developer Intern (Nigeria)",
            desc: "July 2017 - December 2017",
            stack: [
                "Developed the official website using React",
                "Developed digital designs for social media posts",
                "Supported the social media management team"
            ]
        },
        {
            org: "Crystal Realtors & Associates",
            role: "Software Developer (Nigeria)",
            desc: "January 2016 - March 2017",
            stack: [
                "Built the website and the application using React JS",
                "Developed the API using Laravel",
                "Managed the application that allowed users to employ the services of the company"
            ]
        },
        {
            org: "G.M.G Training Institute",
            role: "Temporary React Development Training (Nigeria)",
            desc: "September 2016 - December 2016",
            stack: [
                "Worked side by side with trained React professionals",
                "Learnt how to connect React applications to backend services",
                "Learnt how to style a React application properly using SASS"
            ]
        },
    ]

    return (
        <div>
            <GENERAL_STYLE.InfoSection section="1">
                <GENERAL_STYLE.InfoItem enhanced={true}>ORGANISATIONS WORKED WITH!</GENERAL_STYLE.InfoItem>
            </GENERAL_STYLE.InfoSection>
            <GENERAL_STYLE.Portfolio>
                {data.map((item: any) => {
                    return (
                        <OrganisationsItem
                            org={item.org}
                            role={item.role}
                            desc={item.desc}
                            items={item.stack}
                        />
                    )
                })}
            </GENERAL_STYLE.Portfolio>
            <GENERAL_STYLE.ButtonContainer>
                <span
                    style={{
                        cursor: 'pointer',
                        marginRight: '10px'
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
                        marginLeft: '10px'
                    }}
                    onMouseEnter={() => setButtonActive2(true)} 
                    onMouseLeave={() => setButtonActive2(false)} 
                    onClick={buttonAction}
                >
                    <GENERAL_STYLE.Button active={buttonActive2}>
                        <GENERAL_STYLE.ButtonText active={buttonActive2}>APPS WORKED ON</GENERAL_STYLE.ButtonText>
                    </GENERAL_STYLE.Button>
                </span>
            </GENERAL_STYLE.ButtonContainer>
        </div>
    )
}

export default Organisations;