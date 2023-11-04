import * as SC from '../Contacts/Contacts.styled'
import { Container } from '../Container/Container'

export const Contacts = () => {
    return (
        <Container>
        <SC.Text className="footer-title">СВЯЖИТЕСЬ С НАМИ</SC.Text>
        <SC.List>
          <SC.Item>
            <SC.Link href="mailto:demo@gmail.com">demo@gmail.com</SC.Link>
          </SC.Item>
          <SC.Item>
            Webibazzar, A - 2 Puffin Street Puffinville, varachha, Сурат
          </SC.Item>
          <SC.Item>
            <SC.Link href="tel:+1234567">+1234567</SC.Link>
          </SC.Item>
        </SC.List>
      </Container>
    )
}