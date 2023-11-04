import * as SC from '../Container/Container.styled'

export const Container = ({children}) => {
    return(
        <SC.Container>
        {children}
      </SC.Container>
    )
}