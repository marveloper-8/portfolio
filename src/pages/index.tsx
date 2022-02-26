import {useState} from 'react'
// styling
import * as GENERAL_STYLE from 'styles/general'
// pages
import About from 'pages/about'
import Introduction from 'pages/introduction'
import Projects from 'pages/projects'
import Skills from 'pages/skills'
import Organisations from 'pages/organisations'
import Certificates from 'pages/certificates'
import Contact from 'pages/contact'
// videos
import video from 'resources/header.jpg'

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
                            <GENERAL_STYLE.Video src={video} />
                        </GENERAL_STYLE.VideoContainer>
                    </GENERAL_STYLE.VideoContainerOutter>
                </GENERAL_STYLE.VideoContainerOutter2>
            </GENERAL_STYLE.Desktop>
            {layout.map((item: any) => {
                return (
                    <GENERAL_STYLE.Info page={item.page} direction={item.direction} active={page === item.active}>
                        {item.component}
                    </GENERAL_STYLE.Info>
                )
            })}
        </GENERAL_STYLE.Page>
    )
}

export default App;