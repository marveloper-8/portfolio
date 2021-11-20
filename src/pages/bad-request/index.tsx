// styling
import * as GENERAL_STYLE from '../../styles/general'
// images
import bad from '../../resources/bad.jpg'

const App = () => {

    return (
        <GENERAL_STYLE.Page>
            <GENERAL_STYLE.BadRequest>
                <div>
                    <GENERAL_STYLE.VideoContainerOutter2>
                        <GENERAL_STYLE.VideoContainerOutter>
                            <GENERAL_STYLE.VideoContainer>
                                <GENERAL_STYLE.Image src={bad} />
                            </GENERAL_STYLE.VideoContainer>
                        </GENERAL_STYLE.VideoContainerOutter>
                    </GENERAL_STYLE.VideoContainerOutter2>
                    <GENERAL_STYLE.BadSection section="1">
                        <GENERAL_STYLE.InfoItem enhanced={true}>WRONG PAGE!</GENERAL_STYLE.InfoItem> 
                        <br /> THIS PAGE DOESN'T EXIST!
                    </GENERAL_STYLE.BadSection>
                </div>
            </GENERAL_STYLE.BadRequest>
        </GENERAL_STYLE.Page>
    )
}

export default App;