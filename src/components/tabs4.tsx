import {FunctionComponent} from 'react'
// styling
import * as GENERAL_STYLE from '../styles/general'
// utils
import { AboutModel } from '../helpers/utils'

const Tabs: FunctionComponent<AboutModel> = ({title, content}) => {
    return (
        <GENERAL_STYLE.ContactInfo>
            <GENERAL_STYLE.ContactTitle>
                {title}
            </GENERAL_STYLE.ContactTitle>
            {
                title === "Phone" 
                ? (
                    <a href={`tel:${content}`}>
                        <GENERAL_STYLE.ContactLink>
                            {content}
                        </GENERAL_STYLE.ContactLink>
                    </a>
                ) : title === "Email"
                ? (
                    <a href={`mailto:${content}`}>
                        <GENERAL_STYLE.ContactLink>
                            {content}
                        </GENERAL_STYLE.ContactLink>
                    </a>
                ) : (
                    <a style={{textDecoration: 'none'}} href={content} target="_blank" rel="noreferrer">
                        <GENERAL_STYLE.ContactLink>
                            {content}
                        </GENERAL_STYLE.ContactLink>
                    </a>
                )
            }
        </GENERAL_STYLE.ContactInfo>
    )
}

export default Tabs;