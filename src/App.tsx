import React from 'react'
import './App.css'
//import AddressIcon from './assets/AddressIcon'
import EditIcon from './assets/EditIcon'
import DeleteIcon from './assets/DeleteIcon'
import { StyledDynamicForm } from './DynamicForm.styles'
import type { FieldsetShape, inputEntryShape, LabeledCheckboxOrRadio } from '@kbgarcia8/react-dynamic-form'
import { useTheme } from '@kbgarcia8/react-dynamic-form'

const addressInputsArray:inputEntryShape<true,LabeledCheckboxOrRadio>[] = [
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
      additionalInfo: "Additional address information 1 of User",
      $labelFlexDirection: "row" as const,
      //svg: <AddressIcon/>,
      //Start of EditableInputProps
      labelClass: "editable-label",
      inputClass: "editable-input",
      //Additional in inputEntryShape
      isEditable: true,
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
      type: "checkbox" as const,
      id: "address-info",
      isRequired: true,
      //dataAttributes is obtained thru map
      disabled: false,
      name: "address",
      checked: false,
      //Start of Label Props
      additionalInfo: "Additional address information 2 of User",
      $labelFlexDirection: "row" as const,
      //svg: <AddressIcon/>,
      //Start of EditableInputProps
      labelClass: "editable-label",
      inputClass: "editable-input",
      //Additional in inputEntryShape
      isEditable: true,
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
      type: "checkbox" as const,
      id: "address-info",
      isRequired: true,
      //dataAttributes is obtained thru map
      disabled: false,
      name: "address",
      checked: false,
      //Start of Label Props
      additionalInfo: "Additional address information 3 of User",
      $labelFlexDirection: "row" as const,
      //svg: <AddressIcon/>,
      //Start of EditableInputProps
      labelClass: "editable-label",
      inputClass: "editable-input",
      //Additional in inputEntryShape
      isEditable: true,
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
  console.log(target)
  if (confirm('Cancel/Back button form clicked going back to previous page')) {
    window.location.reload()
  }
}

function App() {

  const { toggleTheme } = useTheme()
  const initialized = React.useRef(false)
  

  const [fieldsetsValues, setFieldsetsValues] = React.useState<FieldsetShape[] | null>(null)
  const [draftFieldsetValues, setDraftFieldSetValues] = React.useState<FieldsetShape[] | null>(null)
  
  const handleEditClick = React.useCallback((e:React.MouseEvent<HTMLButtonElement>) => {
    const target = e.currentTarget as HTMLElement
    const index = Number(target.dataset.index)
    setDraftFieldSetValues((prevDraftFieldset) => prevDraftFieldset &&
      prevDraftFieldset.map((fieldset)=> ({
        ...fieldset,
        inputs: fieldset.inputs.map((input, idx) =>({
          ...input,
          editing: idx == index && input.editing === false ? true : false
        } as typeof input))
      }))
    )
  },[])

  const handleCancelClick = React.useCallback(() => {
    
    setDraftFieldSetValues(prevDraftFieldsetValues => fieldsetsValues)
  }, [fieldsetsValues])

  const handleDeleteClick = React.useCallback((e:React.MouseEvent<HTMLButtonElement>) => {
    const target = e.currentTarget as HTMLElement
    const index = Number(target.dataset.index)
    setDraftFieldSetValues((prevDraftFieldset) => {
      if(!prevDraftFieldset) return prevDraftFieldset
      const updated = prevDraftFieldset.map((fieldset) => ({
        ...fieldset,
        inputs: fieldset.inputs.filter((_, idx) => idx != index)
      }))
      setFieldsetsValues(updated)
      return updated
    })
    
  }, [])

  const handleLegendInputsOnChange = React.useCallback((e:React.ChangeEvent<HTMLInputElement>) => {
    const target = e.currentTarget as HTMLElement
    const index = Number(target.dataset.index)
    setDraftFieldSetValues((prevDraftFieldset) => prevDraftFieldset &&
      prevDraftFieldset.map((fieldset)=> ({ 
        ...fieldset,
        inputs: fieldset.inputs.map((input, idx) =>({
          ...input,
          checked: idx === index ? true : false
        } as typeof input))
      }))
    )
  }, [])

  const handleChangeOfEditableInformation = React.useCallback((e:React.ChangeEvent<HTMLInputElement>) => {
    const target = e.currentTarget
    const info = String(target.dataset.key)
    const editableIndex = Number(target.dataset.index)
    
    setDraftFieldSetValues((prevDraftFieldset) => prevDraftFieldset &&
      prevDraftFieldset.map((fieldset)=> ({
        ...fieldset,
        inputs: fieldset.inputs.map((input) =>({
          ...input,
          editableInformation: input.editableInformation
          && input.editableInformation.map((information, idx) => (
            info === information.info && editableIndex === idx
            ? {...information, info: target.value}
            : information
          ))
        } as typeof input))
      }))
    )
  }, [])

  const handleSaveClick = React.useCallback( async() => {
    setDraftFieldSetValues((prevDraftFieldset) => {
      if(!prevDraftFieldset) return prevDraftFieldset
      const updated = prevDraftFieldset.map((fieldset)=> ({
        ...fieldset,
        inputs: fieldset.inputs.map((input, index) =>({
          ...input,
          editing: false,
          id: `${input.id}-${index}`,
          textLabel: `${input.editableInformation && input.editableInformation[0].info}`,
          checked: false,
          dataAttributes: {
            "data-index": index,
          },
        } as typeof input))
      }))
      setFieldsetsValues(updated)
      return updated
  })
  }, [])

  const handleReset = (e: React.MouseEvent<HTMLButtonElement>) => {
    const target = e.target as HTMLElement
    console.log(`${target.id} reset button form clicked`)
    setDraftFieldSetValues((prevDraftFieldset) => prevDraftFieldset &&
      prevDraftFieldset.map((fieldset)=> ({
        ...fieldset,
        inputs: []
      }))
    )
  }

  const handleAddOfEditableEntry = (e: React.MouseEvent<HTMLButtonElement>) => {
    const target = e.target as HTMLElement
    console.log(`${target.id} button for adding editable input clicked`)
    setDraftFieldSetValues((prevDraftFieldset) => prevDraftFieldset &&
      prevDraftFieldset.map((fieldset)=> ({
        ...fieldset,
        inputs: [...fieldset.inputs,
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
            additionalInfo: `Additional address information ${fieldset.inputs.length + 1} of User`,
            $labelFlexDirection: "row" as const,
            //svg: <AddressIcon/>,
            //Start of EditableInputProps
            labelClass: "editable-label",
            inputClass: "editable-input",
            //Additional in inputEntryShape
            isEditable: true as const,
            editIcon: <EditIcon/>, //=>editIcon in EditableInputProps
            deleteIcon: <DeleteIcon/>,
            editing: true,
            editableInformation: [ //These are informations editable within radio input acting as selection
                {
                    name: `Address ${fieldset.inputs.length + 1}`,
                    info: '',
                    type: 'text' as const
                }
            ],
            onChange: handleLegendInputsOnChange,
            onClickEdit: handleEditClick,
            onClickDelete: handleDeleteClick,
            onClickSave: handleSaveClick,
            onClickCancel: handleCancelClick,
          }
        ]
        }))
    )
  }
  console.log('re-render')
  //! Use for initialization only, not for remapping after save/delete
  const fieldsets = React.useMemo<FieldsetShape[]>(() => {
  return [
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
            "data-index": index,
          },
        })) as inputEntryShape<true, LabeledCheckboxOrRadio>[],
        isExpandable: true,
      },
    ];
  }, [
  handleLegendInputsOnChange,
  handleEditClick,
  handleDeleteClick,
  handleCancelClick,
  handleSaveClick]);

  React.useEffect(() =>{
    if(!initialized.current) {
      setFieldsetsValues(fieldsets)
      setDraftFieldSetValues(fieldsets)
      initialized.current = true
    }
  },[fieldsets])

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
          fieldsets={draftFieldsetValues || []}
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
