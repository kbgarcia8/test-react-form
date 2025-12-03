import { useState } from 'react'
import './App.css'
//import AddressIcon from './assets/AddressIcon'
import EditIcon from './assets/EditIcon'
import DeleteIcon from './assets/DeleteIcon'
import { StyledDynamicForm } from './DynamicForm.styles'
import type { FieldsetShape, inputEntryShape, LabeledCheckboxOrRadio } from '@kbgarcia8/react-dynamic-form'
import { useTheme } from '@kbgarcia8/react-dynamic-form'

const addressInputsArray = [
    {
      //Input Props
      type: "checkbox" as const,
      id: "address-info",
      isRequired: true,
      //dataAttributes is obtained thru map
      disabled: false,
      name: "address",
      checked: false,
      //Start of Label Props
      textLabel: '', //=> obtained thru map
      additionalInfo: "Additional address information 1 of User",
      $labelFlexDirection: "row" as const,
      //svg: <AddressIcon/>,
      //Start of EditableInputProps
      labelClass: "editable-label",
      inputClass: "editable-input",
      //Additional in inputEntryShape
      editIcon: <EditIcon/>, //=>editIcon in EditableInputProps
      deleteIcon: <DeleteIcon/>,
      editing: false,
      editableInformation: [ //These are informations editable within radio input acting as selection
          {
              name: 'Address 1',
              info: 'Abad Santos, Manila',
              type: 'text' as const
          }
      ],
      //onClick functions obtained thru map
      isEditable: true as const,
    },
    {
      //Input Props
      type: "checkbox" as const,
      id: "address-info",
      isRequired: true,
      //dataAttributes is obtained thru map
      disabled: false,
      name: "address",
      //Start of Label Props
      textLabel: '', //=> obtained thru map
      additionalInfo: "Additional address information 2 of User",
      $labelFlexDirection: "row" as const,
      //svg: <AddressIcon/>,
      //Start of EditableInputProps
      labelClass: "editable-label",
      inputClass: "editable-input",
      //Additional in inputEntryShape
      editIcon: <EditIcon/>, //=>editIcon in EditableInputProps
      deleteIcon: <DeleteIcon/>,
      editing: false,
      editableInformation: [ //These are informations editable within radio input acting as selection
          {
              name: 'Address 2',
              info: 'Alabang, Metro Manila',
              type: 'text' as const
          }
      ],
      //onClick functions obtained thru map
      isEditable: true as const,
    },
    {
      //Input Props
      type: "checkbox" as const,
      id: "address-info",
      isRequired: true,
      //dataAttributes is obtained thru map
      disabled: false,
      name: "address",
      //Start of Label Props
      textLabel: '', //=> obtained thru map
      additionalInfo: "Additional address information 3 of User",
      $labelFlexDirection: "row" as const,
      //svg: <AddressIcon/>,
      //Start of EditableInputProps
      labelClass: "editable-label",
      inputClass: "editable-input",
      //Additional in inputEntryShape
      editIcon: <EditIcon/>, //=>editIcon in EditableInputProps
      deleteIcon: <DeleteIcon/>,
      editing: false,
      editableInformation: [ //These are informations editable within radio input acting as selection
          {
              name: 'Address 3',
              info: 'San Pablo, Laguna',
              type: 'text' as const
          }
      ],
      //onClick functions obtained thru map
      isEditable: true as const,
    }
];

const handleLegendInputsOnChange = (e:React.ChangeEvent<HTMLInputElement>) => {
  console.log(e.currentTarget.value)
}

const handleSaveClick = (e:React.MouseEvent<HTMLButtonElement>) => {
  const target = e.target as HTMLElement
  const { index } = target.dataset as { index?: number}
  console.log(`Save ${index}`)
}

const submitLogic = () => {
  console.log('Test form submit clicked')
}

const handleSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault()
  submitLogic()
}

const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
  const target = e.target as HTMLElement
  console.log(target.id)
  submitLogic()
}

const handleCancel = (e: React.MouseEvent<HTMLButtonElement>) => {
  const target = e.target as HTMLElement
  console.log(`${target.id} cancel button form clicked`)
}

const handleReset = (e: React.MouseEvent<HTMLButtonElement>) => {
  const target = e.target as HTMLElement
  console.log(`${target.id} reset button form clicked`)
}

const handleAddOfEditableEntry = (e: React.MouseEvent<HTMLButtonElement>) => {
  const target = e.target as HTMLElement
  console.log(`${target.id} button for adding editable input clicked`)
}

function App() {
  
  const handleEditClick = (e:React.MouseEvent<HTMLButtonElement>) => {
    const target = e.currentTarget as HTMLElement
    const index = Number(target.dataset.index)
    console.log(index)
    setFieldsetsValues((prevFieldset) =>
      prevFieldset.map((fieldset)=> ({
        ...fieldset,
        inputs: fieldset.inputs.map((input, idx) =>({
          ...input,
          isEditable: true as const,
          editing: idx == index && input.editing === false ? true : false
        }))
      }))
    )
  }

  const handleCancelClick = handleEditClick

  const handleDeleteClick = (e:React.MouseEvent<HTMLButtonElement>) => {
    const target = e.currentTarget as HTMLElement
    const index = Number(target.dataset.index)
    console.log(target.dataset.index)
    setFieldsetsValues((prevFieldsets) => (
      prevFieldsets.map((fieldset) => ({
        ...fieldset,
        inputs: fieldset.inputs.filter((_, idx) => idx != index)
        .map(input => ({
          ...input,
          isEditable: true as const   // <— preserve it again
        }))
      }))
    ))
  }

  const handleChangeOfEditableInformation = (e:React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.currentTarget.value)
  }

  const fieldsets:FieldsetShape[] = [
    {
          legend: "Address Informations",
          inputs: addressInputsArray.map((address, index) => ({
              ...address,
              id: `${address.id}-${index}`,
              textLabel: `${address.editableInformation[0].info}`,
              checked: false,
              isEditable: true as const,
              onChange: handleLegendInputsOnChange,
              onClickEdit: handleEditClick,
              onClickDelete: handleDeleteClick,
              onClickSave: handleSaveClick,
              onClickCancel: handleCancelClick,
              dataAttributes: {
                  "data-index": index
              }
          })) as inputEntryShape<true, LabeledCheckboxOrRadio>[],
          isExpandable: true
      },

  ];

  const [fieldsetsValues, setFieldsetsValues] = useState<FieldsetShape[]>(fieldsets)

  const { currentTheme, toggleTheme } = useTheme();

  console.log(fieldsetsValues)

  return (
    <div className='body-wrapper'>
      <h1>react-dynamic-form Testing</h1>
      <h2>Case 1: With Fieldsets</h2>
      <div className="toggle-theme-btn-container">
        <button onClick={toggleTheme}>Toggle Theme</button>
      </div>
      <div className="with-fieldsets-container">
        <StyledDynamicForm
          className={'with-fieldsets'}
          fieldsets={fieldsetsValues}
          id="address"
          isExpandable={true}
          inputClass={'address-field-input'}
          labelClass={'address-field-label'}
          labelAndInputContainerClass={'address-field-label-n-input-container'}
          onChangeOfEditableOption={handleChangeOfEditableInformation}
          handleAddingInputEntry={handleAddOfEditableEntry}
          hasSubmit
          submitText={'Submit'}
          handleSubmit={handleSubmit}
          handleSubmitForm={handleSubmitForm}
          hasReset
          resetText={'Clear'}
          handleReset={handleReset}
          hasCancel
          cancelText={'Back'}
          handleCancel={handleCancel}
        />
      </div>
    </div>
  )
}

export default App
