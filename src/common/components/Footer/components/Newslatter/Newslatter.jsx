import { Container } from '../Container/Container'
import * as SC from '../Newslatter/Newslatter.styled'

export const Newsletter = () => {
    return (
        <Container>
            <SC.Text>НОВОСТНАЯ РАССЫЛКА</SC.Text>
            <SC.List>
              <SC.Item>Подписывайтесь на нашу рассылку</SC.Item>
            </SC.List>
            <form action="footer-form-inline">
              <input
                type="search"
                className="email-form"
                placeholder="Ваша эл.почта"
              />
            </form>
          </Container>
    )
}