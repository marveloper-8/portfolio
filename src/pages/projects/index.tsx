import {useState, FunctionComponent} from 'react'
// styling
import * as GENERAL_STYLE from 'styles/general'
// resources
import cv from 'resources/cv.pdf'
// utils
import { PageModel } from 'helpers/utils'
// components
import ProjectItem from 'components/project-items'

const Projects: FunctionComponent<PageModel> = ({buttonAction, goBack}) => {
    const [buttonActive, setButtonActive] = useState(false);
    const [buttonActive2, setButtonActive2] = useState(false);
    const [buttonActive3, setButtonActive3] = useState(false);

    const data = [
        // {
        //     org: "BioCatlog Portfolio",
        //     role: "React Developer",
        //     desc: "Portfolio Website",
        //     tech: "Next JS, Redux, Material UI, SCSS, Styled Components, Typescript, React, REST API, Test Driven Development, Jest, Enzyme, React Testing Library, Trello",
        //     link: "https://biocatlog.com"
        // },
        // {
        //     org: "BioCatlog Profile",
        //     role: "React Developer",
        //     desc: "Link in Bio Technology",
        //     tech: "Next JS, Redux, Material UI, SCSS, Styled Components, Typescript, React, REST API, Test Driven Development, Jest, Enzyme, React Testing Library, Trello",
        //     link: "https://catlog-bio.vercel.app/biocatlog"
        // },
        // {
        //     org: "BioCatlog Storefront",
        //     role: "React Developer",
        //     desc: "Biocatlog Storefront",
        //     tech: "Next JS, Redux, Material UI, SCSS, Styled Components, Typescript, React, REST API, Test Driven Development, Jest, Enzyme, React Testing Library, Trello",
        //     link: "https://catlog-bio.vercel.app/s/demo"
        // },
        // {
        //     org: "BioCatlog Admin App",
        //     role: "React Developer",
        //     desc: "Administrator's Application",
        //     tech: "Redux, Material UI, SCSS, Styled Components, Typescript, React, REST API, Test Driven Development, Jest, Enzyme, React Testing Library, Trello",
        //     link: "https://app.biocatlog.com"
        // },
        {
            org: "Mira Hairline",
            role: "React Developer",
            desc: "Online store for hair shoppig",
            tech: "Next JS, React JS, SCSS, Styled Components, Typescript, React Context, Jest, React Testing Libraryo",
            link: "https://www.mirahairline.com/"
        },
        {
            org: "Test Your Typing",
            role: "React Developer",
            desc: "Typing Test",
            tech: "Next JS, React JS, SCSS, Styled Components, Typescript, Test Driven Development, Jest, Enzyme, React Testing Library, Trello",
            link: "https://test-your-typing-skill.vercel.app/"
        },
        {
            org: "ThatApp",
            role: "React Developer (while at ProDevs)",
            desc: "Data management & Enterprise App",
            tech: "Redux, Material UI, SCSS, Styled Components, Typescript, React, D3, REST API, Test Driven Development, Jest, Enzyme, React Testing Library, Trello, Asana",
            link: "http://thatapp.io/"
        },
        {
            org: "ProDevs",
            role: "React Developer (while at ProDevs)",
            desc: "Portfolio App for ProDevs Outsourcing",
            tech: "Material UI, SCSS, Styled Components, Typescript, React, GraphQL, Scrum, Jest, Enzyme, React Testing Library, Trello",
            link: "http://prodevs.io/"
        },
        {
            org: "COVID-19 Medfit",
            role: "React Developer (while at ProDevs)",
            desc: "COVID-19 Medical App",
            tech: "Styled Components, Typescript, React, GraphQL, Test Driven Development, Jest, Enzyme, React Testing Library, Asana",
            link: "https://covid19.medfit.com.ng/"
        },
        {
            org: "Momize",
            role: "React Developer",
            desc: "Fintech App",
            tech: "Styled Components, Material UI, SCSS, Tailwind CSS, Typescript, React, REST API, Test Driven Development, Redux, Jest, Enzyme, React Testing Library, Trello",
            link: "http://momize-spa.vercel.app/"
        },
        {
            org: "Github Clone",
            role: "Javascript & UI Developer",
            desc: "Github Mini Clone",
            tech: "Javascript, CSS",
            link: "http://marveloper-8.github.io/github-clone/"
        },
        {
            org: "Dashboard Design",
            role: "React Developer",
            desc: "Dashboard",
            tech: "React JS, SCSS, Styled Components, ReCharts, D3, Typescript, Test Driven Development, Jest, Enzyme, React Testing Library, Trello",
            link: "https://gentle-valkyrie-7a76c2.netlify.app/"
        },
        {
            org: "RPSLS",
            role: "React Developer",
            desc: "Rock Paper Scissors Lizard Spock” as seen in the popular Sitcom 'Big Bang Theory'",
            tech: "Styled Components, SCSS, Typescript, React, Next JS, Test Driven Development, Jest, Enzyme, React Testing Library, REST API",
            link: "http://rpsls-five.vercel.app/"
        },
        {
            org: "Game of Life",
            role: "React Developer",
            desc: "Game of Life by Conway",
            tech: "Styled Components, Typescript, React, Test Driven Development, Jest, Enzyme, React Testing Library",
            link: "https://game-of-life-eight-theta.vercel.app/"
        },
        {
            org: "Google Search",
            role: "Software Developer",
            desc: "Google Homepage Search replica with the actual search functionalities of google",
            tech: "CSS, HTML, REST API",
            link: "https://marveloper-8.github.io/google-homepage-replica/"
        },
        {
            org: "Hacker News Blog",
            role: "React Developer",
            desc: "Hacker News App",
            tech: "SCSS, Typescript, React, Test Driven Development, Jest, Enzyme, React Testing Library, GraphQL",
            link: "http://hacker-news-one.vercel.app/"
        },
        {
            org: "Instagram Clone",
            role: "React Developer",
            desc: "Instagram Clone",
            tech: "Styled Components, SCSS, Typescript, React, Test Driven Development, Redux, Jest, Enzyme, React Testing Library",
            link: "http://instagram-lovat.vercel.app/"
        },
        {
            org: "WhatsApp Clone",
            role: "React Developer",
            desc: "WhatsApp Clone",
            tech: "Styled Components, SCSS, Typescript, React, Test Driven Development, Redux, Jest, Enzyme, React Testing Library",
            link: "http://whatsapp-clone-marveloper.vercel.app/"
        },
        {
            org: "Ripple Impact",
            role: "Frontend Developer (while at Ripple Impact)",
            desc: "Ripple Impact Website",
            tech: "SCSS, JavaScript, Trello",
            link: "http://r-impact.com/"
        },
        {
            org: "GidiJobs",
            role: "Fullstack Developer (while at Ripple Impact)",
            desc: "Gidi Jobs portal",
            tech: "Laravel, JavaScript, Trello",
            link: "https://www.gidijobs.com/"
        },
    ]

    return (
        <div>
            <GENERAL_STYLE.InfoSection section="1">
                <GENERAL_STYLE.InfoItem enhanced={true}>PROJECTS!</GENERAL_STYLE.InfoItem>
            </GENERAL_STYLE.InfoSection>
            <GENERAL_STYLE.Portfolio>
                {data.map((item: any) => {
                    return (
                        <ProjectItem
                            org={item.org}
                            role={item.role}
                            desc={item.desc}
                            tech={item.tech}
                            link={item.link}
                        />
                    )
                })}
            </GENERAL_STYLE.Portfolio>
            <GENERAL_STYLE.ButtonContainer>
                <span
                    style={{
                        cursor: 'pointer',
                        marginRight: '10px'
                    }}
                    onMouseEnter={() => setButtonActive3(true)} 
                    onMouseLeave={() => setButtonActive3(false)} 
                    onClick={goBack}
                >
                    <GENERAL_STYLE.Button back={true} active={buttonActive3}>
                        <GENERAL_STYLE.ButtonText back={true} active={buttonActive3}>GO BACK</GENERAL_STYLE.ButtonText>
                    </GENERAL_STYLE.Button>
                </span>
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
                        marginLeft: '10px'
                    }}
                    onMouseEnter={() => setButtonActive2(true)} 
                    onMouseLeave={() => setButtonActive2(false)} 
                    onClick={buttonAction}
                >
                    <GENERAL_STYLE.Button active={buttonActive2}>
                        <GENERAL_STYLE.ButtonText active={buttonActive2}>CERTIFICATES OBTAINED</GENERAL_STYLE.ButtonText>
                    </GENERAL_STYLE.Button>
                </span>
            </GENERAL_STYLE.ButtonContainer>
        </div>
    )
}

export default Projects;
