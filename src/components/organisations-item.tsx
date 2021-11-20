import {useState, FunctionComponent} from 'react'
// styling
import * as GENERAL_STYLE from '../styles/general'
// utils
import { ProjectItemModel } from '../helpers/utils'

const ProjectItem: FunctionComponent<ProjectItemModel> = ({org, role, desc, items}) => {
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
            <ol>
                {items.map((item: any) => {
                    return (
                        <li>{item}</li>
                    )
                })}
            </ol>
        </GENERAL_STYLE.PortfolioItem>
    )
}

export default ProjectItem;