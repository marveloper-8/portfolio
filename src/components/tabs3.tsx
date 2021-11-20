import {FunctionComponent} from 'react'
// styling
import * as GENERAL_STYLE from '../styles/general'
// utils
import { AboutModel } from '../helpers/utils'

const Tabs: FunctionComponent<AboutModel> = ({title, content, academy}) => {

    return (
        <GENERAL_STYLE.StatsInfo>
            <GENERAL_STYLE.PortfolioTitle>
                <div style={{color: "yellow"}}>{title}</div>
                <div>{academy}</div>
            </GENERAL_STYLE.PortfolioTitle>
            <div>
                {content}
            </div>
        </GENERAL_STYLE.StatsInfo>
    )
}

export default Tabs;