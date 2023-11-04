import * as SC from './HeaderForm.styled'
import { useForm } from './hooks/useForm'

export const HeaderForm = () => {
     const {handleChange, handleSubmit, search} = useForm()
    return(
        <SC.Form onSubmit ={handleSubmit} action="form-inline">
        <SC.Input onChange={handleChange} type="text" value={search}/>
        <SC.Button type='submit'>search</SC.Button>
        
    </SC.Form>
        )
   }
