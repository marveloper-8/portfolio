import {FunctionComponent} from 'react'
// styling
import * as GENERAL_STYLE from '../styles/general'
// utils
import { AboutModel } from '../helpers/utils'

const Tabs: FunctionComponent<AboutModel> = ({title}) => {
    return <GENERAL_STYLE.Tab>{title}</GENERAL_STYLE.Tab>;
}

export default Tabs;