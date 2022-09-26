import {useState, FunctionComponent} from 'react'
// styling
import * as GENERAL_STYLE from 'styles/general'
// resources
import cv from 'resources/cv.pdf'
// utils
import { PageModel } from 'helpers/utils'
// components
import OrganisationsItem from 'components/organisations-item'

const Organisations: FunctionComponent<PageModel> = ({buttonAction, goBack}) => {
    const [buttonActive, setButtonActive] = useState(false);
    const [buttonActive2, setButtonActive2] = useState(false);
    const [buttonActive3, setButtonActive3] = useState(false);

    const data = [
        {
            org: "BioCatlog",
            role: "Lead Frontend Developer (United States - Remote)",
            desc: "September 2021 till date",
            stack: [
                "Developed the entire frontend of the link-in-bio app, store front, & portfolio app using React JS and Next JS which has been accessed by over 20,000 people",
                "Made SEO a priority and manipulated it to properly display user’s data",
            ]
        },
        {
            org: "SynOption",
            role: "React Developer (Singapore - Remote)",
            desc: "September 2021 - August 2022",
            stack: [
                "Developed the interface of a high end Forex & Crypto Trading application using React JS while also connecting them to a backend service using websocket & REST API connection",
                "Data Visualization using multiple graphs & data while also using a global state management technology (Redux).",
            ]
        },
        {
            org: "ProDevs",
            role: "React Developer (United States - Remote)",
            desc: "September 2020 - August 2021",
            stack: [
                "Worked on a medical app for COVID-19 targeted activities which was used by thousands of people & became the most recognized and highest earning COVID-19 medical app in Nigeria",
                "Worked on a data management application, and it’s portfolio app, that helps automate, backup & synchronize data seamlessly",
                "Worked on ProDevs’ portfolio website to help customers understand what ProDevs does in it’s entirety",
                "Worked on an app that helps with water distribution and sales in Lagos, Nigeria, both wholesale and retail, with a payment system and chatting between vendors and buyers integrated into it for better interactivity"
            ]
        },
        {
            org: "U-Greet",
            role: "React Developer (Canada - Remote)",
            desc: "May 2021 - August 2021",
            stack: [
                "Worked on the interface of a social media application that allows you manipulate videos by adding background images, music, and a lot more. The app also allows for collaborators who are invited via email or any other means"
            ]
        },
        {
            org: "Ripple Impact",
            role: "Fullstack Developer & Technical Recruiter (Nigeria)",
            desc: "January 2020 - June 2020",
            stack: [
                "Managed the Gidi Jobs portal’s application using Laravel both for the frontend and backend",
                "Developed and maintained the main website using React JS",
                "Designed some of the digital designs to be used for job advertisement",
                "Led the recruitment team’s technical interviews in Nigeria"
            ]
        }
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