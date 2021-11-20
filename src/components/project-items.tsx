import {useState, FunctionComponent} from 'react'
// styling
import * as GENERAL_STYLE from '../styles/general'
// resources
import {AiOutlineLink} from 'react-icons/ai'
// utils
import { ProjectItemModel } from '../helpers/utils'

const ProjectItem: FunctionComponent<ProjectItemModel> = ({org, desc, role, tech, link}) => {
    const [active, setActive] = useState(false);
    const [activeBackground, setActiveBackground] = useState(false);
    return (
        <GENERAL_STYLE.PortfolioItem
            onMouseEnter={() => setActiveBackground(true)} 
            onMouseLeave={() => setActiveBackground(false)} 
        >
            <GENERAL_STYLE.PortfolioItemBackground 
                active={activeBackground}
            />
            <GENERAL_STYLE.PortfolioTitle>
                <span style={{color: "yellow"}}>{org}</span> &bull; {role}
            </GENERAL_STYLE.PortfolioTitle>
            <div>{desc}</div>
            <GENERAL_STYLE.Break />
            <div style={{
                fontWeight: 'bolder',
                textShadow: '1px 1px 4px #000000'
            }}>Technologies Used:</div>
            <div>{tech}</div>
            <GENERAL_STYLE.Break />
            <a style={{textDecoration: 'none'}} href={link} target="_blank" rel="noreferrer">
                <GENERAL_STYLE.Link
                    onMouseEnter={() => setActive(true)} 
                    onMouseLeave={() => setActive(false)} 
                >
                    <GENERAL_STYLE.LinkIcon active={active}>
                        <AiOutlineLink />
                    </GENERAL_STYLE.LinkIcon> View this project
                </GENERAL_STYLE.Link>
            </a>
        </GENERAL_STYLE.PortfolioItem>
    )
}

export default ProjectItem;