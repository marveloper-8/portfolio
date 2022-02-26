import {useState} from 'react'
// styling
import * as GENERAL_STYLE from '../styles/general'
// pages
import About from './about'
import Introduction from './introduction'
import Projects from './projects'
import Skills from './skills'
import Organisations from './organisations'
import Certificates from './certificates'
import Contact from './contact'
// videos
import video from '../resources/memoji.mp4'
// images
import sad from '../resources/sad.jpg'

const App = () => {
    const [page, setPage] = useState("home");

    const layout = [
        {
            page: "home",
            direction: "right",
            active: "home",
            component: <Introduction buttonAction={() => setPage("about")} />
        },
        {
            page: "",
            direction: "left",
            active: "about",
            component: <About 
                goBack={() => setPage("home")} 
                buttonAction={() => setPage("skills")} 
                goExperience={() => setPage("organisations")} 
                goProjects={() => setPage("projects")} 
                goCertificates={() => setPage("certificates")} 
                goOrganisations={() => setPage("organisations")} 
            />
        },
        {
            page: "",
            direction: "right",
            active: "skills",
            component: <Skills 
                goBack={() => setPage("about")} 
                buttonAction={() => setPage("organisations")} 
            />
        },
        {
            page: "",
            direction: "left",
            active: "organisations",
            component: <Organisations 
                goBack={() => setPage("skills")} 
                buttonAction={() => setPage("projects")} 
            />
        },
        {
            page: "",
            direction: "right",
            active: "projects",
            component: <Projects 
                goBack={() => setPage("organisations")} 
                buttonAction={() => setPage("certificates")} 
            />
        },
        {
            page: "",
            direction: "left",
            active: "certificates",
            component: <Certificates 
                goBack={() => setPage("projects")} 
                buttonAction={() => setPage("contact")} 
            />
        },
        {
            page: "",
            direction: "right",
            active: "contact",
            component: <Contact 
                goBack={() => setPage("certificates")} 
                buttonAction={() => setPage("home")} 
            />
        },
    ]

    return (
        <GENERAL_STYLE.Page>
            <GENERAL_STYLE.Desktop>
                <GENERAL_STYLE.VideoContainerOutter2 page={page}>
                    <GENERAL_STYLE.VideoContainerOutter>
                        <GENERAL_STYLE.VideoContainer>
                            <GENERAL_STYLE.Video src={video} autoPlay />
                        </GENERAL_STYLE.VideoContainer>
                    </GENERAL_STYLE.VideoContainerOutter>
                </GENERAL_STYLE.VideoContainerOutter2>
                {layout.map((item: any) => {
                    return (
                        <GENERAL_STYLE.Info page={item.page} direction={item.direction} active={page === item.active}>
                            {item.component}
                        </GENERAL_STYLE.Info>
                    )
                })}
            </GENERAL_STYLE.Desktop>
            <GENERAL_STYLE.Mobile>
                <GENERAL_STYLE.VideoContainerOutter2 page={page}>
                    <GENERAL_STYLE.VideoContainerOutter>
                        <GENERAL_STYLE.VideoContainer>
                            <GENERAL_STYLE.Image src={sad} />
                        </GENERAL_STYLE.VideoContainer>
                    </GENERAL_STYLE.VideoContainerOutter>
                </GENERAL_STYLE.VideoContainerOutter2>
                <GENERAL_STYLE.BadSection section="1">
                    <GENERAL_STYLE.InfoItem enhanced={true}>OOPS!</GENERAL_STYLE.InfoItem> 
                    <br />THIS ONLY WORKS WELL ON A LARGER SCREEN!
                </GENERAL_STYLE.BadSection>
            </GENERAL_STYLE.Mobile>
        </GENERAL_STYLE.Page>
    )
}

export default App;