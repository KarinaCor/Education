import * as SC from "./Footer.styled";

import { Contacts } from "../Footer/components/Contacts/Contacts";
import { Order } from "./components/Order/Order";
import { Information } from "./components/Information/Information";
import { Category } from "./components/Category/Category";
import { Newsletter } from "./components/Newslatter/Newslatter";

export const Footer = () => {
  return (
    <>
      <SC.Section>
        <SC.Wrapper>
          <Contacts />
          <Order />
          <Information />
          <Category />
          <Newsletter />
        </SC.Wrapper>
      </SC.Section>
    </>
  );
};
