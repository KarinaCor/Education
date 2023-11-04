import { useInformation } from '../../hooks/useInformation';
import { Container } from '../Container/Container';
import * as SC from '../Information/Information.styled'

export const Information = () => {
    const information = useInformation();
    return (
        <Container>
            <SC.Text>ИНФОРМАЦИЯ</SC.Text>
            <SC.List>
              {information.map(({ id, href, title }) => (
                <SC.Item key={id}>
                  <SC.Link href={href}>{title}</SC.Link>
                </SC.Item>
              ))}
            </SC.List>
          </Container>
       
    )
}