import { DynamicForm } from '@kbgarcia8/react-dynamic-form'
import styled from 'styled-components'

export const StyledDynamicForm = styled(DynamicForm)`
    
    &.with-fieldsets{
        height: 100%;
    }
    & .address-fieldset-wrapper{
        border: 2px solid red;
        display: flex;
        flex-direction: column;
    }
    & fieldset{
        flex: 1;
        padding: 1rem;
        width: auto;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    & legend {
        font-weight: 700;
    }
    & .address-field-lic {
        border: 2px solid blue;
        width: 75%;
        padding: 0.5rem;
    }
`