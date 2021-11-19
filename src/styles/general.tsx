import styled,  { css } from "styled-components";
import { isPropertySignature } from "typescript";
// import { styled } from '@mui/material/styles';
import  { Color, FontSize, FontFamily, GradientColor } from "../helpers/constants";
// utils
import  {
    InfoItemModel,
    InfoSectionModel,
    ButtonModel,
    PageModel
} from "../helpers/utils";

export const Page = styled.section`
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    display: grid;
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

export const Video = styled.video`
    width: 20vw;
    position: absolute;
    top: 1.5vw;
    left: -2.75vw;
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
    ${props => props.page === "about" ? `
        left: 55vw;
        transition: .4s ease all;
    ` : `
        left: 10vw;
        transition: .4s ease all;
    `}
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
`;

export const VideoContainer = styled.div`
    width: 15vw;
    height: 15vw;
    background: ${Color.Black};
    border-radius: 50%;
    position: relative;
    overflow: hidden;
    border: .5px solid rgba(255, 255, 255, .15);
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
    ` : `
        left: 100vw;
        transition: .4s ease all;
    `};
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
`;

export const Button = styled.button<ButtonModel>`
    outline:none;
    border:none;
    height: 15px;
    padding: 2px 4px;
    background: ${Color.Yellow};
    transition: .4s ease all;
    ${props =>  props.active && `
        height:auto;
        transition: .4s ease all;
    `};
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
        color: ${Color.Black};
        bottom: 0;
        transition: .4s ease all;
    ` : `
        text-shadow: 1px 1px 4px #000000;
    `};
`;

export const Stats = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 15px;
`;

export const StatsInfo = styled.div`
    border-radius: 0 0 5px 5px;
    border: 1px solid ${Color.Yellow};
    border-top: none;
    padding: 35px 20px;
    text-align: center;
    font-size: ${FontSize.Fs16};
    font-weight: bold;
    text-shadow: 1px 1px 4px #000000;
    transform: skew(-4deg);
`;

export const StatsInfoTitle = styled.div`
    color: ${Color.Yellow};
    font-size: ${FontSize.Fs40};
    font-family: ${FontFamily.BebasNeue};
    font-weight: bolder;
`;

export const ButtonContainer = styled.div`
    margin-top: 25px;
`;

export const Portfolio = styled.div`
    height: auto;
    max-height: 80vh;
    overflow-y: scroll;
`;