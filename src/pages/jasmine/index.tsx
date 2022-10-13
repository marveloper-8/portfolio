// styling
import * as GENERAL_STYLE from 'styles/general'
// images
import love from 'resources/love.jpeg'

const App = () => {

    return (
        <GENERAL_STYLE.Page>
            <GENERAL_STYLE.BadRequest>
                <div>
                    <GENERAL_STYLE.VideoContainerOutter2>
                        <GENERAL_STYLE.VideoContainerOutter>
                            <GENERAL_STYLE.VideoContainer>
                                <GENERAL_STYLE.Image src={love} />
                            </GENERAL_STYLE.VideoContainer>
                        </GENERAL_STYLE.VideoContainerOutter>
                    </GENERAL_STYLE.VideoContainerOutter2>
                    <GENERAL_STYLE.Info direction="right" active={true}>
                        <GENERAL_STYLE.InfoSection section="1">
                            <GENERAL_STYLE.InfoItem enhanced={true}>I Love You</GENERAL_STYLE.InfoItem> 
                            <br /> Jasmine! ❤️‍🔥
                        </GENERAL_STYLE.InfoSection>
                    </GENERAL_STYLE.Info>
                </div>
            </GENERAL_STYLE.BadRequest>
        </GENERAL_STYLE.Page>
    )
}

export default App;