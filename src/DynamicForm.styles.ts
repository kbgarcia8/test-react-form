import { DynamicForm } from '@kbgarcia8/react-dynamic-form'
import styled from 'styled-components'

export const StyledDynamicForm = styled(DynamicForm)`
    background-color: ${({theme})=> theme.colors.bg};
    color: ${({theme})=> theme.colors.text};
    &.with-fieldsets{
        height: 50%;
        padding: 0.75rem;
    }
    & .address-fieldset-wrapper{
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
    & .address-field-label-n-input-container {
        width: 75%;
        padding: 0.5rem;
        flex-direction: row;
        justify-content: space-between;
    }
    & .add-input-button-space{
        display: flex;
        align-items: center;
        justify-content: center;
    }
    & .add-input-entry {
        width: 12.5%;
    }
`