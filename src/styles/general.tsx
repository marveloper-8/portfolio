import styled from "styled-components";
import  { Color, FontSize, FontFamily } from "../helpers/constants";
// utils
import  {
    InfoItemModel,
    InfoSectionModel,
    ButtonModel,
    PageModel,
    LinkIconModel
} from "../helpers/utils";

export const Page = styled.section`
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    align-items: center;
    padding: 0 100px;
    color: ${Color.White};
    background: linear-gradient(-45deg, #05215c, #5c0519, #05215c, #34056e);
    background-size: 400% 400%;
    animation: gradient 15s ease infinite;
    font-size: ${FontSize.Fs35};
    font-family: ${FontFamily.Poppins};
    display: flex;
    @keyframes gradient {
        0% {
            background-position: 0% 50%;
        }
        50% {
            background-position: 100% 50%;
        }
        100% {
            background-position: 0% 50%;
        }
    };
    @media (max-width: 1030px){
        padding: 0;
        left: 0;
        display: flex;
        align-items: center;
        justify-content: space-around;
    };
`;

export const BackgroundImage = styled.img`
    width: 100vw;
    mix-blend-mode: exclusion;
    filter: invert(100%);
    position:fixed;
    top: 0;
    left: 0;
    opacity: .3;
`;

export const Video = styled.img`
    width: 15vw;
    position: absolute;
    top: 0;
    left: 0;
    @media (max-width: 1030px){
        top: 0;
        width: 25vw;
        height: 25vw;
        left: 0;
    };
`;

export const Image = styled.img`
    width: 15vw;
    position: absolute;
    top: 0vw;
    left: 0vw;
`;

export const VideoContainerOutter2 = styled.div<PageModel>`
    width: 35vw;
    height: 35vw;
    background: rgba(0, 0, 0, .25);
    border-radius: 50%;
    position: relative;
    display: flex;
    overflow: hidden;
    align-items: center;
    justify-content: space-around;
    border: .5px solid rgba(255, 255, 255, .15);
    position: fixed;
    top: 100px;
    transition: .4s ease all;
    ${props => props.page === "about" || props.page === "organisations" || props.page === "certificates" ? `
        left: 55vw;
        transition: .4s ease all;
    ` : `
        left: 10vw;
        transition: .4s ease all;
    `}
    @media (max-width: 1030px){
        position: relative;
        left: 0;
        top: 0;
        margin: auto;
        width: 60vw;
        height: 60vw;
        ${props => props.page === "home" ? "display: flex" : "display: none"};
        ${props => props.mobile && "margin-bottom: 30px"};
    };
`;
export const VideoContainerOutter = styled.div`
    width: 25vw;
    height: 25vw;
    background: rgba(0, 0, 0, .5);
    border-radius: 50%;
    position: relative;
    display: flex;
    overflow: hidden;
    align-items: center;
    justify-content: space-around;
    border: .5px solid rgba(255, 255, 255, .15);
    @media (max-width: 1030px){
        width: 45vw;
        height: 45vw;
    };
`;

export const VideoContainer = styled.div`
    width: 15vw;
    height: 15vw;
    background: ${Color.Black};
    border-radius: 50%;
    position: relative;
    overflow: hidden;
    border: .5px solid rgba(255, 255, 255, .15);
    @media (max-width: 1030px){
        width: 25vw;
        height: 25vw;
    };
`;

export const Info = styled.div<PageModel>`
    transition: .4s ease all;
    position: fixed;
    height: 100vh;
    display: flex;
    align-items: center;
    top: 0;
    ${props => props.direction === "right" ? `
        // padding: 0 0 0 50vw;
        width: 50vw;
        left: 50vw;
        text-align: left;
        transition: .4s ease all;
    ` : `
        width:40vw;
        left: 5vw;
        text-align: left;
        transition: .4s ease all;
    `};
    ${props => props.active ? `
        // left: 0;
        transition: .4s ease all;
        @media (max-width: 1030px){
            width: 100vw;
            left: 0;
        };
    ` : `
        left: 100vw;
        transition: .4s ease all;
    `};
    @media (max-width: 1030px){
        width: 100vw;
        text-align: center;
        justify-content: space-around;
    };
`;

export const InfoItem = styled.span<InfoItemModel>`
    color: ${props => props.enhanced ? Color.Yellow : Color.White};
`;

export const InfoSection = styled.div<InfoSectionModel>`
    position: relative;
    font-family: ${FontFamily.BebasNeue};
    font-weight: bolder;
    font-size: ${props => props.type === "small" ? FontSize.Fs30 : FontSize.Fs70};
    text-shadow: 2px 2px 4px #000000;
    font-style: italic;
    animation: ${props =>
        props.section === "1" 
        ? `move 2s ease`
        : props.section === "2"
        ? `move 2.5s ease`
        : `move 3s ease`
    };
    @keyframes move {
        0% {
            right: -100vw;
        }
        70%{
            right: -100vw;
        }
        100% {
            right: 0;
        }
    };
    @media (max-width: 1030px){
        font-size: ${FontSize.Fs35};
        ${props => props.mobileNormal && `
            font-family: ${FontFamily.Poppins};
            font-size: ${FontSize.Fs11};
            font-style: normal;
        `};
    };
`;

export const Button = styled.button<ButtonModel>`
    outline:none;
    border:none;
    height: 15px;
    padding: 2px 4px;
    background: ${props => props.back ? `rgba(255, 0, 0, .25)` : Color.Yellow};
    transition: .4s ease all;
    ${props =>  props.active && `
        height:auto;
        transition: .4s ease all;
        background: ${props.back && `rgba(255, 0, 0, 1)`};
    `};
    @media (max-width: 1030px){
        height: 8px;
    };
`;

export const ButtonText = styled.div<ButtonModel>`
    font-size: ${FontSize.Fs20};
    position: relative;
    bottom: 15px;
    color: ${props => props.active ? Color.Black : Color.White};
    cursor: pointer;
    font-weight: bolder;
    transition: .4s ease all;
    ${props =>  props.active ? `
        color: ${props.back ? Color.White : Color.Black};
        bottom: 0;
        transition: .4s ease all;
    ` : `
        text-shadow: 1px 1px 4px #000000;
    `};
    @media (max-width: 1030px){
        font-size: ${FontSize.Fs11};
        bottom: 8px;
    };
`;

export const Container = styled.div`
    @media (max-width: 1030px){
        width: calc(100vw - 30px);
        padding: 10px 15px;
    };
`;

export const Stats = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 15px;
    @media (max-width: 1030px){
        padding: 0 50px;
        grid-template-columns: repeat(2, 1fr);
    };
`;

export const Contact = styled.div<PageModel>`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    width: 80%;
    grid-gap: 15px;
    @media (max-width: 1030px){
        display: grid;
        padding: 0 50px;
        ${props => props.mobile && `grid-template-columns: repeat(1, 1fr);`}
        width: calc(100vw - 150px);
    };
`;

export const StatsInfo = styled.div`
    border-radius: 0 0 5px 5px;
    border: 1px solid ${Color.Yellow};
    border-top: none;
    padding: 35px 20px;
    text-align: left;
    font-size: ${FontSize.Fs16};
    font-weight: bold;
    text-shadow: 1px 1px 4px #000000;
    transform: skew(-4deg);
    @media (max-width: 1030px){
        padding: 20px 10px;
        font-size: ${FontSize.Fs11};
    };
`;

export const StatsInfoTitle = styled.div`
    color: ${Color.Yellow};
    font-size: ${FontSize.Fs40};
    font-family: ${FontFamily.BebasNeue};
    font-weight: bolder;
    @media (max-width: 1030px){
        font-size: ${FontSize.Fs25};
    };
`;

export const ContactInfo = styled.div`
    border-radius: 0 0 5px 5px;
    border: 1px solid ${Color.Yellow};
    border-top: none;
    padding: 35px 20px;
    text-align: left;
    font-size: ${FontSize.Fs11};
    font-weight: bold;
    text-shadow: 1px 1px 4px #000000;
    transform: skew(-4deg);
    @media (max-width: 1030px){
        padding: 20px 10px;
        font-size: ${FontSize.Fs11};
    };
`;

export const ContactTitle = styled.div`
    color: ${Color.Yellow};
    font-size: ${FontSize.Fs20};
    font-family: ${FontFamily.BebasNeue};
    font-weight: bolder;
`;

export const ButtonContainer = styled.div`
    margin-top: 25px;
    padding-bottom:25px;
`;

export const Portfolio = styled.div`
    height: auto;
    max-height: 60vh;
    overflow-y: scroll;
    font-size: ${FontSize.Fs20};
    @media (max-width: 1030px){
        max-height: 60vh;
    };
`;

export const PortfolioItem = styled.div`
    border-bottom: .5px solid rgba(255, 255, 255, .25);
    padding: 20px 0;
    position: relative;
    @media (max-width: 1030px){
        font-size: ${FontSize.Fs11};
        text-align: left;
        padding: 20px;
    };
`;

export const PortfolioItemBackground = styled.div<PageModel>`
    ${props => props.active ? `
        transition: 1s ease all;
        background: linear-gradient(to right, rgba(0, 0, 0, .5), transparent);
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: -1;
    ` : `
        opacity: 0;
        transition: 1s ease all;
    `}
`;

export const PortfolioTitle = styled.div`
    font-size: ${FontSize.Fs40};
    font-family: ${FontFamily.BebasNeue};
    font-weight: bolder;
    @media (max-width: 1030px){
        font-size: ${FontSize.Fs25};
    };
`;

export const Break = styled.div`
    height: 3px;
    width: 100px;
    border-radius: 10px;
    background: rgba(255, 255, 255, .25);
    margin: 10px 0;
`;

export const Link = styled.span`
    color: ${Color.Yellow};
    font-size: ${FontSize.Fs15};
    display: flex;
    align-items: center;
    cursor: pointer;
    text-decoration: none;
`;

export const LinkIcon = styled.span<LinkIconModel>`
    margin-right: 10px;
    transition: .4s ease all;
    ${props => props.active && `
        transform: rotate(90deg);
        transition: .3s ease all;
    `}
`;

export const Tab = styled.span`
    margin-right: 10px;
    display: inline-block;
    border: 1px solid ${Color.Yellow};
    border-radius: 5px;
    padding: 5px 15px;
    font-size: ${FontSize.Fs15};
    margin-bottom: 10px;
    @media (max-width: 1030px){
        font-size: ${FontSize.Fs11};
    };
`;

export const Desktop = styled.div`
    display: block;
    @media (max-width: 1030px){
        display: none;
    };
`;

export const Mobile = styled.div`
    display: none;
    @media (max-width: 1030px){
        display: block;
    };
`;

export const BadSection = styled.div<InfoSectionModel>`
    position: relative;
    font-family: ${FontFamily.BebasNeue};
    font-weight: bolder;
    font-size: ${props => props.type === "small" ? FontSize.Fs30 : FontSize.Fs40};
    text-shadow: 2px 2px 4px #000000;
    font-style: italic;
    width: 70vw;
    text-align: center;
    margin: 25px auto 0 auto;
    left: 20vw;
    animation: ${props =>
        props.section === "1" 
        ? `move 2s ease`
        : props.section === "2"
        ? `move 2.5s ease`
        : `move 3s ease`
    };
    @keyframes move {
        0% {
            right: -100vw;
        }
        70%{
            right: -100vw;
        }
        100% {
            right: 0;
        }
    };
    @media (max-width: 1030px){
        left: 0;
    };
`;

export const BadRequest = styled.div`
    padding: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: space-around;
`;

export const ContactLink = styled.div`
    cursor:pointer;
    color: ${Color.White};
    text-decoration: none;
    word-wrap: break-word;
    &:hover{
        text-decoration: underline;
        color: ${Color.Yellow};
    };
    @media (max-width: 1030px){
        // width: 40%;
    };
`;
