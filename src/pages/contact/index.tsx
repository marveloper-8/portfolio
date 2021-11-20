import {useState, FunctionComponent} from 'react'
// styling
import * as GENERAL_STYLE from '../../styles/general'
// resources
import cv from '../../resources/cv.pdf'
// utils
import { PageModel } from '../../helpers/utils'
// components
import Tabs from '../../components/tabs4'

const Contact: FunctionComponent<PageModel> = ({buttonAction}) => {
    const [buttonActive, setButtonActive] = useState(false);
    const [buttonActive2, setButtonActive2] = useState(false);

    const work_data = [
        "B2B Contract",
        "B2C Contract",
        "In-House",
        "Freelance",
    ];

    const contact_data = [
        {
            title: "Phone",
            content: "+238074681328",
        },
        {
            title: "Email",
            content: "g.joshua.e@gmail.com",
        },
        {
            title: "Linkedin",
            content: "https://www.linkedin.com/in/joshua-e-019a68164",
        },
        {
            title: "GitHub",
            content: "https://www.github.com/marveloper-8",
        },
    ]

    return (
        <div>
            <GENERAL_STYLE.InfoSection section="1">
                <GENERAL_STYLE.InfoItem enhanced={true}>CONNECT WITH ME!</GENERAL_STYLE.InfoItem>
            </GENERAL_STYLE.InfoSection>
            <div style={{marginTop: '25px'}} />
            <GENERAL_STYLE.Portfolio>
                <GENERAL_STYLE.PortfolioTitle>
                    Modes of Work
                </GENERAL_STYLE.PortfolioTitle>
                <GENERAL_STYLE.Contact>
                    {work_data.map((item: any) => {
                        return <Tabs title={item} />
                    })}
                </GENERAL_STYLE.Contact>
                <br /><br />
                <GENERAL_STYLE.PortfolioTitle>
                    Contact Me
                </GENERAL_STYLE.PortfolioTitle>
                <GENERAL_STYLE.Contact>
                    {contact_data.map((item: any) => {
                        return <Tabs title={item.title} content={item.content} />
                    })}
                </GENERAL_STYLE.Contact>
            </GENERAL_STYLE.Portfolio>
            <GENERAL_STYLE.ButtonContainer>
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
                        <GENERAL_STYLE.ButtonText active={buttonActive2}>GO BACK TO HOME</GENERAL_STYLE.ButtonText>
                    </GENERAL_STYLE.Button>
                </span>
            </GENERAL_STYLE.ButtonContainer>
        </div>
    )
}

export default Contact;