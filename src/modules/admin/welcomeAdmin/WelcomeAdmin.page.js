import Header from "../../../components/Header";
import PageDefault from "../../../components/PageDefault";
import { ReactComponent as Title } from "../../../assets/TitleWhite.svg";

export const WelcomeAdmin = () => {
  return (
    <PageDefault>
      <Header>
        <Title height="70px"/>
      </Header>
    </PageDefault>
  );
};
