import { useOrder } from '../../hooks/useOrder';
import { Container } from '../Container/Container';
import * as SC from '../Order/Order.styled'

export const Order = () => {
    const order = useOrder();
    return (
        <Container>
        <SC.Text>МОЙ СЧЕТ</SC.Text>
        <SC.List>
          {order.map(({ id, href, title }) => (
            <SC.Item key={id}>
              <SC.Link href={href}>{title}</SC.Link>
            </SC.Item>
          ))}
        </SC.List>
      </Container>
    )
}