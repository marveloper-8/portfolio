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
                <GENERAL_STYLE.Info page="home" direction="right" active={page === "home" ? true : false}>
                    <Introduction buttonAction={() => setPage("about")} />
                </GENERAL_STYLE.Info>
                <GENERAL_STYLE.Info direction="left" active={page === "about" ? true : false}>
                    <About buttonAction={() => setPage("skills")} />
                </GENERAL_STYLE.Info>
                <GENERAL_STYLE.Info direction="right" active={page === "skills" ? true : false}>
                    <Skills buttonAction={() => setPage("organisations")} />
                </GENERAL_STYLE.Info>
                <GENERAL_STYLE.Info direction="left" active={page === "organisations" ? true : false}>
                    <Organisations buttonAction={() => setPage("projects")} />
                </GENERAL_STYLE.Info>
                <GENERAL_STYLE.Info direction="right" active={page === "projects" ? true : false}>
                    <Projects buttonAction={() => setPage("certificates")} />
                </GENERAL_STYLE.Info>
                <GENERAL_STYLE.Info direction="left" active={page === "certificates" ? true : false}>
                    <Certificates buttonAction={() => setPage("contact")} />
                </GENERAL_STYLE.Info>
                <GENERAL_STYLE.Info direction="right" active={page === "contact" ? true : false}>
                    <Contact buttonAction={() => setPage("home")} />
                </GENERAL_STYLE.Info>
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