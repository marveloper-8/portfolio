import {useState, useEffect, useRef} from 'react'
// utils
import ReactPlayer from 'react-player'
// styling
import * as GENERAL_STYLE from '../../styles/general'
// images
import background from '../../icons/background.jpeg'
// videos
import video from '../../resources/memoji.mp4'
// resources
import cv from '../../resources/cv.pdf'

const Introduction = () => {
    const [buttonActive, setButtonActive] = useState(false);
    const [buttonActive2, setButtonActive2] = useState(false);
    const [page, setPage] = useState("home");

    return (
        <GENERAL_STYLE.Page>
            <GENERAL_STYLE.VideoContainerOutter2 page={page}>
                <GENERAL_STYLE.VideoContainerOutter>
                    <GENERAL_STYLE.VideoContainer>
                        <GENERAL_STYLE.Video loop src={video} autoPlay />
                    </GENERAL_STYLE.VideoContainer>
                </GENERAL_STYLE.VideoContainerOutter>
            </GENERAL_STYLE.VideoContainerOutter2>
            <GENERAL_STYLE.Info page="home" direction="right" active={page === "home" ? true : false}>
                <div>
                    <GENERAL_STYLE.InfoSection section="1">
                        HI. I'M <GENERAL_STYLE.InfoItem enhanced={true}>JOSH!</GENERAL_STYLE.InfoItem>
                    </GENERAL_STYLE.InfoSection>
                    <GENERAL_STYLE.InfoSection section="2">
                        AND WELCOME TO
                    </GENERAL_STYLE.InfoSection>
                    <GENERAL_STYLE.InfoSection section="3">MY WEBSITE!!</GENERAL_STYLE.InfoSection>
                    <span
                        style={{cursor: 'pointer'}}
                        onMouseEnter={() => setButtonActive(true)} 
                        onMouseLeave={() => setButtonActive(false)} 
                        onClick={() => setPage("about")}
                    >

                        <GENERAL_STYLE.Button active={buttonActive}>
                            <GENERAL_STYLE.ButtonText active={buttonActive}>LEARN ABOUT ME</GENERAL_STYLE.ButtonText>
                        </GENERAL_STYLE.Button>
                    </span>
                </div>
            </GENERAL_STYLE.Info>
            <GENERAL_STYLE.Info page="about" direction="left" active={page === "about" ? true : false}>
                <div>
                    <GENERAL_STYLE.InfoSection section="1">
                        <GENERAL_STYLE.InfoItem enhanced={true}>ABOUT ME!</GENERAL_STYLE.InfoItem>
                    </GENERAL_STYLE.InfoSection>
                    <GENERAL_STYLE.InfoSection section="2" type="small">
                        <p>
                            A Javascript Developer who has over 3 years extensive experience using Typescript, state management tools such as Redux, data visualization tools such as D3, styling frameworks such as SASS and Styled Components, technologies used for testing such as Jest and Enzyme, and mobile application development tools such as React Native
                        </p>
                    </GENERAL_STYLE.InfoSection>
                    <GENERAL_STYLE.Stats>
                        <GENERAL_STYLE.StatsInfo>
                            <GENERAL_STYLE.StatsInfoTitle>3+</GENERAL_STYLE.StatsInfoTitle>
                            <div>Years of Experience</div>
                        </GENERAL_STYLE.StatsInfo>
                        <GENERAL_STYLE.StatsInfo>
                            <GENERAL_STYLE.StatsInfoTitle>30+</GENERAL_STYLE.StatsInfoTitle>
                            <div>Projects Involvement</div>
                        </GENERAL_STYLE.StatsInfo>
                        <GENERAL_STYLE.StatsInfo>
                            <GENERAL_STYLE.StatsInfoTitle>5+</GENERAL_STYLE.StatsInfoTitle>
                            <div>Software Certifications</div>
                        </GENERAL_STYLE.StatsInfo>
                        <GENERAL_STYLE.StatsInfo>
                            <GENERAL_STYLE.StatsInfoTitle>5+</GENERAL_STYLE.StatsInfoTitle>
                            <div>Organizations Worked With</div>
                        </GENERAL_STYLE.StatsInfo>
                    </GENERAL_STYLE.Stats>
                    <GENERAL_STYLE.ButtonContainer>
                        <span
                            style={{cursor: 'pointer'}}
                            onMouseEnter={() => setButtonActive(true)} 
                            onMouseLeave={() => setButtonActive(false)} 
                        >
                            <a href={cv} target="_blank" rel="noreferrer">
                                <GENERAL_STYLE.Button active={buttonActive}>
                                    <GENERAL_STYLE.ButtonText active={buttonActive}>DOWNLOAD CV</GENERAL_STYLE.ButtonText>
                                </GENERAL_STYLE.Button>
                            </a>
                        </span>
                        <span
                            style={{
                                cursor: 'pointer',
                                marginLeft: '20px'
                            }}
                            onMouseEnter={() => setButtonActive2(true)} 
                            onMouseLeave={() => setButtonActive2(false)} 
                            onClick={() => setPage("projects")}
                        >
                            <GENERAL_STYLE.Button active={buttonActive2}>
                                <GENERAL_STYLE.ButtonText active={buttonActive2}>APPS WORKED ON</GENERAL_STYLE.ButtonText>
                            </GENERAL_STYLE.Button>
                        </span>
                    </GENERAL_STYLE.ButtonContainer>
                </div>
            </GENERAL_STYLE.Info>
            <GENERAL_STYLE.Info page="about" direction="right" active={page === "projects" ? true : false}>
                <div>
                    <GENERAL_STYLE.InfoSection section="1">
                        <GENERAL_STYLE.InfoItem enhanced={true}>PROJECTS!</GENERAL_STYLE.InfoItem>
                    </GENERAL_STYLE.InfoSection>
                    <GENERAL_STYLE.Portfolio>
                        
                    </GENERAL_STYLE.Portfolio>
                    <GENERAL_STYLE.ButtonContainer>
                        <span
                            style={{cursor: 'pointer'}}
                            onMouseEnter={() => setButtonActive(true)} 
                            onMouseLeave={() => setButtonActive(false)} 
                        >
                            <a href={cv} target="_blank" rel="noreferrer">
                                <GENERAL_STYLE.Button active={buttonActive}>
                                    <GENERAL_STYLE.ButtonText active={buttonActive}>DOWNLOAD CV</GENERAL_STYLE.ButtonText>
                                </GENERAL_STYLE.Button>
                            </a>
                        </span>
                        <span
                            style={{
                                cursor: 'pointer',
                                marginLeft: '20px'
                            }}
                            onMouseEnter={() => setButtonActive2(true)} 
                            onMouseLeave={() => setButtonActive2(false)} 
                            onClick={() => setPage("projects")}
                        >
                            <GENERAL_STYLE.Button active={buttonActive2}>
                                <GENERAL_STYLE.ButtonText active={buttonActive2}>APPS WORKED ON</GENERAL_STYLE.ButtonText>
                            </GENERAL_STYLE.Button>
                        </span>
                    </GENERAL_STYLE.ButtonContainer>
                </div>
            </GENERAL_STYLE.Info>
        </GENERAL_STYLE.Page>
    )
}

export default Introduction;