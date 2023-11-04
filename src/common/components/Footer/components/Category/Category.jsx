import { useCategory } from '../../hooks/useCategoty';
import * as SC from '../Category/Caterory.styled'
import { Container } from '../Container/Container';

export const Category = () => {
    const category = useCategory();
    return (
        <Container> 
            <SC.Text>КАТЕГОРИЯ</SC.Text>
            <SC.List>
              {category.map(({ id, href, title }) => (
                <SC.Item key={id}>
                  <SC.Link href={href}>{title}</SC.Link>
                </SC.Item>
              ))}
            </SC.List>
          </Container>
    )
}