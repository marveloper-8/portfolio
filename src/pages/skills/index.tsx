import {useState, FunctionComponent} from 'react'
// styling
import * as GENERAL_STYLE from '../../styles/general'
// resources
import cv from '../../resources/cv.pdf'
// utils
import { PageModel } from '../../helpers/utils'
// components
import SkillItem from '../../components/skill-item'

const Skills: FunctionComponent<PageModel> = ({buttonAction, goBack}) => {
    const [buttonActive, setButtonActive] = useState(false);
    const [buttonActive2, setButtonActive2] = useState(false);
    const [buttonActive3, setButtonActive3] = useState(false);

    const data = [
        {
            title: "Software Development Stack",
            stack: [
                "Javascript",
                "Typescript",
                "React JS",
                "Next JS",
                "Redux",
                "Three JS",
                "React Native",
                "Node JS",
                "Express JS",
                "Git Version Control",
                "SasS",
                "RxJS"
            ]
        },
        {
            title: "Backend Languages",
            stack: [
                "Python",
                "Flask",
                "Node JS",
                "Postgre SQL",
                "MySQL",
                "Mongo DB",
                "Graph QL",
                "Web Socket",
            ]
        },
        {
            title: "Backend Connections",
            stack: [
                "Web Socket",
                "Rest API",
                "GraphQL"
            ]
        },
        {
            title: "Styling",
            stack: [
                "Styled Components",
                "SCSS",
                "Material UI",
                "Tailwind CSS",
                "Bootstrap"
            ]
        },
        {
            title: "Data Visualisation",
            stack: [
                "D3",
                "Chart JS",
                "Plotly.js"
            ]
        },
        {
            title: "Unit Testing",
            stack: [
                "Jest",
                "Enzyme",
                "React Testing Library"
            ]
        },
        {
            title: "Project Management",
            stack: [
                "Trello",
                "Jira",
                "Asana"
            ]
        },
        {
            title: "Methodologies",
            stack: [
                "Agile",
                "Scrum",
                "Test Driven Development"
            ]
        },
        {
            title: "Soft Skills",
            stack: [
                "Excellent Communication Skill",
                "Attention to details",
                "Problem solving skills",
                "Working continuously on a task until completion",
                "Ability to work well in a team",
                "Logical thinking",
                "Ability to work well with a team"
            ]
        },
    ]

    return (
        <div>
            <GENERAL_STYLE.InfoSection section="1">
                <GENERAL_STYLE.InfoItem enhanced={true}>SKILLS ACQUIRED!</GENERAL_STYLE.InfoItem>
            </GENERAL_STYLE.InfoSection>
            <GENERAL_STYLE.Portfolio>
                {data.map((item: any) => {
                    return (
                        <SkillItem
                            title={item.title}
                            items={item.stack}
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
                        <GENERAL_STYLE.ButtonText active={buttonActive2}>ORGANISATIONS WORKED WITH</GENERAL_STYLE.ButtonText>
                    </GENERAL_STYLE.Button>
                </span>
            </GENERAL_STYLE.ButtonContainer>
        </div>
    )
}

export default Skills;