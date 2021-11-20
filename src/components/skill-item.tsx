import {useState, FunctionComponent} from 'react'
// styling
import * as GENERAL_STYLE from '../styles/general'
// components
import Tab from './tabs2'
// utils
import { ProjectItemModel } from '../helpers/utils'

const ProjectItem: FunctionComponent<ProjectItemModel> = ({title, items}) => {
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
                {title}
            </GENERAL_STYLE.PortfolioTitle>
            {items.map((item: any) => {
                return (
                    <Tab title={item} />
                )
            })}
        </GENERAL_STYLE.PortfolioItem>
    )
}

export default ProjectItem;