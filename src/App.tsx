import { useState } from 'react'
import './App.css'
import AddressIcon from './assets/AddressIcon'
import EditIcon from './assets/EditIcon'
import DeleteIcon from './assets/DeleteIcon'
import { StyledDynamicForm } from './DynamicForm.styles'
import type { FieldsetShape, inputEntryShape } from '@kbgarcia8/react-dynamic-form'

const addressInputsArray = [
    {
      //Input Props
      type: "text" as const,
      id: "address-info",
      isRequired: true,
      //dataAttributes is obtained thru map
      disabled: false,
      name: "address",
      value: "",
      placeholderText: "",
      //Start of Label Props
      textLabel: "Address Information",
      additionalInfo: "Address Information 1 of User",
      $labelFlexDirection: "column" as const,
      svg: <AddressIcon/>,
      //Start of EditableInputProps
      labelClass: "editable-label",
      inputClass: "editable-input",
      isEditable: true,
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
    },
    {
      //Input Props
      type: "text" as const,
      id: "address-info",
      isRequired: true,
      //dataAttributes is obtained thru map
      disabled: false,
      name: "address",
      value: "",
      placeholderText: "",
      //Start of Label Props
      textLabel: "Address Information",
      additionalInfo: "Address Information 2 of User",
      $labelFlexDirection: "column" as const,
      svg: <AddressIcon/>,
      //Start of EditableInputProps
      labelClass: "editable-label",
      inputClass: "editable-input",
      isEditable: true,
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
    },
    {
      //Input Props
      type: "text" as const,
      id: "address-info",
      isRequired: true,
      //dataAttributes is obtained thru map
      disabled: false,
      name: "address",
      value: "",
      placeholderText: "",
      //Start of Label Props
      textLabel: "Address Information",
      additionalInfo: "Address Information 3 of User",
      $labelFlexDirection: "column" as const,
      svg: <AddressIcon/>,
      //Start of EditableInputProps
      labelClass: "editable-label",
      inputClass: "editable-input",
      isEditable: true,
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
    }
];

const handleLegendInputsOnChange = (e:React.ChangeEvent<HTMLInputElement>) => {
  console.log(e.currentTarget.value)
}

const handleEditClick = (e:React.MouseEvent<HTMLButtonElement>) => {
  const target = e.target as HTMLElement
  const { index } = target.dataset as { index?: number}
  console.log(`Edit ${index}`)
}

const handleDeleteClick = (e:React.MouseEvent<HTMLButtonElement>) => {
  const target = e.target as HTMLElement
  const { index } = target.dataset as { index?: number}
  console.log(`Delete ${index}`)
}

const handleSaveClick = (e:React.MouseEvent<HTMLButtonElement>) => {
  const target = e.target as HTMLElement
  const { index } = target.dataset as { index?: number}
  console.log(`Save ${index}`)
}

const handleCancelClick = (e:React.MouseEvent<HTMLButtonElement>) => {
  const target = e.target as HTMLElement
  const { index } = target.dataset as { index?: number}
  console.log(`Cancel ${index}`)
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

const handleDelete = (e: React.MouseEvent<HTMLButtonElement>) => {
  const target = e.target as HTMLElement
  console.log(`${target.id} delete button form clicked`)
}

const handleEdit = (e: React.MouseEvent<HTMLButtonElement>) => {
  const target = e.target as HTMLElement
  console.log(`${target.id} edit button form clicked`)
}

const handleAddOfEditableEntry = (e: React.MouseEvent<HTMLButtonElement>) => {
  const target = e.target as HTMLElement
  console.log(`${target.id} button for adding editable input clicked`)
}

const fieldsets:FieldsetShape[] = [
	{
        legend: "Address Informations",
        inputs: addressInputsArray.map((address, index) => ({
            ...address,
            id: `${address.id}-${index}`,
            onChange: handleLegendInputsOnChange,
            onClickEdit: handleEditClick,
            onClickDelete: handleDeleteClick,
            onClickSave: handleSaveClick,
            onClickCancel: handleCancelClick,
            dataAttributes: {
                "data-index": index
            }
        })),
        height: "35%",
        isExpandable: true
    },

];

function App() {
  const [addressFieldsetValues, setAddressFieldsetValues] = useState<inputEntryShape<boolean>[]|null>(fieldsets[0].inputs) 

  console.log(addressFieldsetValues)

  return (
    <div className='body-wrapper'>
      <h1>react-dynamic-form Testing</h1>
      <h2>Case 1: With Fieldsets</h2>
      <div className="with-fieldsets-container">
        <StyledDynamicForm
          className={'with-fieldsets'}
          fieldsets={fieldsets}
          id="address"
          isExpandable={true}
          inputClass={'address-field-input'}
          labelClass={'address-field-label'}
          labelAndInputContainerClass={'address-field-lic'}
          handleAddingInputEntry={handleAddOfEditableEntry}
          hasSubmit
          submitText={'Submit'}
          handleSubmit={handleSubmit}
          handleSubmitForm={handleSubmitForm}
          hasCancel
          cancelText={'Back'}
          handleCancel={handleCancel}
          hasDelete
          deleteText={'Remove'}
          handleDelete={handleDelete}
          hasEdit
          editText={'Edit'}
          handleEdit={handleEdit}
        />
      </div>
    </div>
  )
}

export default App
