
import * as SC from "./HeroSection.styled";
import { useCategories } from "./hooks/useCategories";
import { useNavigation } from "./hooks/useNavigation";

export const HeroSection = () => {
  const categories = useCategories();
  const navigation = useNavigation();
  return (
    <>
      <SC.Section>
        <SC.Div>
          <SC.Div2>
            <div>
              <SC.Button>ALL CATEGORIES</SC.Button>
              <SC.List>
                {categories.map(({ id, href, title }) => (
                  <SC.Item key={id}>
                    <SC.ARef href={href}>{title}</SC.ARef>
                  </SC.Item>
                ))}
              </SC.List>
            </div>
            <SC.Nav>
              <SC.Ul>
                {navigation.map(({ id, href, title }) => (
                  <SC.Li key={id}>
                    <SC.A to={href}>{title}</SC.A>
                  </SC.Li>
                ))}
              </SC.Ul>
            </SC.Nav>
            {/* <SC.ImgWrap>
              <SC.HeroImg></SC.HeroImg>
            </SC.ImgWrap> */}
          </SC.Div2>
        </SC.Div>
      </SC.Section>
    </>
  );
};
