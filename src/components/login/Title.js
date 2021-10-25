import { ReactComponent as MobileTitleGreen } from "../../assets/MobileTitleGreen.svg";
import { ReactComponent as MobileTitleWhite } from "../../assets/TitleWhite.svg";
import { ReactComponent as TitleGreen } from "../../assets/TitleGreen.svg";
import { ReactComponent as TitleWhite } from "../../assets/TitleWhite.svg";

const Title = (props) => {
    if(props.green) {
        return window.innerWidth < 600 ? <MobileTitleGreen /> : <TitleGreen />;
    } else if(props.white) {
        return window.innerWidth < 600 ? <MobileTitleWhite /> : <TitleWhite />;
    }
}

export default Title;