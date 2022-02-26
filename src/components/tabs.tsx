import {FunctionComponent} from 'react'
// styling
import * as GENERAL_STYLE from 'styles/general'
// utils
import { AboutModel } from 'helpers/utils'

const Tabs: FunctionComponent<AboutModel> = ({title, content}) => {

    return (
        <GENERAL_STYLE.StatsInfo>
            <GENERAL_STYLE.StatsInfoTitle>
                {title}
            </GENERAL_STYLE.StatsInfoTitle>
            <div>
                {content}
            </div>
        </GENERAL_STYLE.StatsInfo>
    )
}

export default Tabs;