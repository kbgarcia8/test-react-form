import React from 'react'
import './App.css'
//import AddressIcon from './assets/AddressIcon'
import EditIcon from './assets/EditIcon'
import DeleteIcon from './assets/DeleteIcon'
import { StyledDynamicForm } from './DynamicForm.styles'
import type { FieldsetShape, inputEntryShape, LabeledCheckboxOrRadio, LabeledTextLike } from '@kbgarcia8/react-dynamic-form'
import { useTheme } from '@kbgarcia8/react-dynamic-form'

const addressInputsArray:inputEntryShape<true,LabeledCheckboxOrRadio>[] = [
    {
      type: "checkbox" as const,
      id: "address-info",
      isRequired: true,
      disabled: false,
      name: "address",
      checked: false,
      additionalInfo: "Additional address information 1 of User",
      $labelFlexDirection: "row" as const,
      labelClass: "editable-label",
      inputClass: "editable-input",
      isEditable: true,
      editIcon: <EditIcon/>, 
      deleteIcon: <DeleteIcon/>,
      editing: false,
      editableInformation: [ 
          {
              name: 'Address 1',
              info: 'Abad Santos, Manila',
              type: 'text' as const
          }
      ],
      
    },
    {
      type: "checkbox" as const,
      id: "address-info",
      isRequired: true,
      disabled: false,
      name: "address",
      checked: false,
      additionalInfo: "Additional address information 2 of User",
      $labelFlexDirection: "row" as const,
      labelClass: "editable-label",
      inputClass: "editable-input",
      isEditable: true,
      editIcon: <EditIcon/>, 
      deleteIcon: <DeleteIcon/>,
      editing: false,
      editableInformation: [ 
          {
              name: 'Address 2',
              info: 'Alabang, Metro Manila',
              type: 'text' as const
          }
      ],
      
    },
    {
      type: "checkbox" as const,
      id: "address-info",
      isRequired: true,
      disabled: false,
      name: "address",
      checked: false,
      additionalInfo: "Additional address information 3 of User",
      $labelFlexDirection: "row" as const,
      labelClass: "editable-label",
      inputClass: "editable-input",
      isEditable: true,
      editIcon: <EditIcon/>, 
      deleteIcon: <DeleteIcon/>,
      editing: false,
      editableInformation: [ 
          {
              name: 'Address 3',
              info: 'San Pablo, Laguna',
              type: 'text' as const
          }
      ],
      
    }
];

const paymentInputArray:inputEntryShape<true,LabeledCheckboxOrRadio>[] = [
    {
      type: "checkbox" as const,
      id: "payment-option",
      isRequired: true,
      disabled: false,
      name: "payment",
      checked: false,
      additionalInfo: "Payment Method 1",
      $labelFlexDirection: "row" as const,
      labelClass: "editable-label",
      inputClass: "editable-input",
      isEditable: true,
      editIcon: <EditIcon/>, 
      deleteIcon: <DeleteIcon/>,
      editing: false,
      editableInformation: [ 
          {
              name: 'Payment Method 1',
              info: 'GCash',
              type: 'text' as const
          },
          {
              name: 'Payment Method Information 1',
              info: '09123456789',
              type: 'text' as const
          }
      ],
      
    },
    {
      type: "checkbox" as const,
      id: "payment-option",
      isRequired: true,
      disabled: false,
      name: "payment",
      checked: false,
      additionalInfo: "Payment Method 2",
      $labelFlexDirection: "row" as const,
      labelClass: "editable-label",
      inputClass: "editable-input",
      isEditable: true,
      editIcon: <EditIcon/>, 
      deleteIcon: <DeleteIcon/>,
      editing: false,
      editableInformation: [ 
          {
              name: 'Payment Method 2',
              info: 'Debit Card',
              type: 'text' as const
          },
          {
              name: 'Payment Method Information 2',
              info: '123456789',
              type: 'text' as const
          }
      ],
      
    },
    {
      
      type: "checkbox" as const,
      id: "payment-option",
      isRequired: true,
      disabled: false,
      name: "payment",
      checked: false,
      additionalInfo: "Payment Method 3",
      $labelFlexDirection: "row" as const,
      labelClass: "editable-label",
      inputClass: "editable-input",
      isEditable: true,
      editIcon: <EditIcon/>, 
      deleteIcon: <DeleteIcon/>,
      editing: false,
      editableInformation: [ 
          {
              name: 'Payment Method 3',
              info: 'Credit Card',
              type: 'text' as const
          },
          {
              name: 'Payment Method Information 3',
              info: '987654321',
              type: 'text' as const
          }
      ],
      
    }
];

const educationalInformationInputArray:inputEntryShape<false,LabeledTextLike>[] = [
  {
    type: "text" as const,
    id: "educational-info",
    isRequired: true,
    disabled: false,
    name: "education",
    value: 'Technological Institute of the Philippines-Manila',
    $labelFlexDirection: "column" as const,
    labelClass: "editable-label",
    inputClass: "editable-input",
    isEditable: false,
  },
  {
    type: "text" as const,
    id: "educational-info",
    isRequired: true,
    disabled: false,
    name: "education",
    value: 'Pamantasan ng Lungsod ng Maynila',
    $labelFlexDirection: "column" as const,
    labelClass: "editable-label",
    inputClass: "editable-input",
    isEditable: false,
  },
  {
    type: "text" as const,
    id: "educational-info",
    isRequired: true,
    disabled: false,
    name: "education",
    value: 'National University',
    $labelFlexDirection: "column" as const,
    labelClass: "editable-label",
    inputClass: "editable-input",
    isEditable: false,
  }
]

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
  
  const [formInputsValues, setFormInputsValues] = React.useState<inputEntryShape<false,LabeledTextLike>[] | null>(null)

  const handleEditClick = React.useCallback((e:React.MouseEvent<HTMLButtonElement>) => {
    const target = e.currentTarget as HTMLElement
    const index = Number(target.dataset.index)
    const fieldsetIndex = Number(target.dataset.fieldsetidx)

    setDraftFieldSetValues((prevDraftFieldset) => prevDraftFieldset &&
      prevDraftFieldset.map((fieldset, fieldsetidx)=> ({
        ...fieldset,
        inputs: fieldset.inputs.map((input, idx) =>({
          ...input,
          editing: (idx == index && fieldsetIndex === fieldsetidx) && input.editing === false ? true : false
        } as typeof input))
      }))
    )
  },[])

  const handleCancelClick = React.useCallback(() => {
    
    setDraftFieldSetValues(_prevDraftFieldsetValues => fieldsetsValues)
  }, [fieldsetsValues])

  const handleDeleteClick = React.useCallback((e:React.MouseEvent<HTMLButtonElement>) => {
    const target = e.currentTarget as HTMLElement
    const index = Number(target.dataset.index)
    const fieldsetIndex = Number(target.dataset.fieldsetidx)
    console.log(fieldsetIndex)

    setDraftFieldSetValues((prevDraftFieldset) => {
      if(!prevDraftFieldset) return prevDraftFieldset
      const updated = prevDraftFieldset.map((fieldset, fieldsetidx) => ({
        ...fieldset,
        inputs: fieldsetidx === fieldsetIndex ? fieldset.inputs.filter((_, idx) => idx != index) : fieldset.inputs
      } as typeof fieldset))
      setFieldsetsValues(updated)
      return updated
    })
    
  }, [])

  const handleLegendInputsOnChange = React.useCallback((e:React.ChangeEvent<HTMLInputElement>) => {
    const target = e.currentTarget as HTMLElement
    const index = Number(target.dataset.index)
    const fieldsetIndex = Number(target.dataset.fieldsetidx)

    setDraftFieldSetValues((prevDraftFieldset) => prevDraftFieldset &&
      prevDraftFieldset.map((fieldset,fieldsetidx)=> 
        fieldsetidx === fieldsetIndex 
        ? {...fieldset,
            inputs: fieldset.inputs.map((input, idx) =>({
              ...input,
              checked: idx === index ? true : false
            } as typeof input))
          }
        : fieldset)
    )
  }, [])

  const handleChangeOfEditableInformation = React.useCallback((e:React.ChangeEvent<HTMLInputElement>) => {
    const target = e.currentTarget
    const info = String(target.dataset.key)
    const editableIndex = Number(target.dataset.index)
    const fieldsetIndex = Number(target.dataset.fieldsetindex)
    
    setDraftFieldSetValues((prevDraftFieldset) => prevDraftFieldset &&
      prevDraftFieldset.map((fieldset,fieldsetidx)=> 
        fieldsetidx === fieldsetIndex
        ? {
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
          }
        : fieldset
      )
    )
  }, [])

  const handleSaveClick = React.useCallback((e:React.MouseEvent<HTMLButtonElement>) => {
    const target = e.currentTarget
    const fieldsetIndex = Number(target.dataset.fieldsetindex)

    setDraftFieldSetValues((prevDraftFieldset) => {
      if(!prevDraftFieldset) return prevDraftFieldset
      const updated = prevDraftFieldset.map((fieldset, fieldsetidx)=> 
        fieldsetidx === fieldsetIndex
        ? {
            ...fieldset,
            inputs: fieldset.inputs.map((input, index) =>({
              ...input,
              editing: false,
              id: `${input.id}-${index}`,
              textLabel: `${input.editableInformation && input.editableInformation[0].info}`,
              checked: false,
              dataAttributes: {
                "data-index": index,
                "data-fieldsetidx": fieldsetidx
              },
            } as typeof input))
          }
        : fieldset)
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
    const target = e.currentTarget as HTMLElement
    const fieldsetIndex = Number(target.dataset.fieldsetindex)
    
    console.log(`${target.id} button for adding editable input clicked`)
    setDraftFieldSetValues((prevDraftFieldset) => {
      if (!prevDraftFieldset) {
        return prevDraftFieldset
      } else {
        const updated = [...prevDraftFieldset]
        if (fieldsetIndex === 0) {
          updated[0] = {...prevDraftFieldset[0],
            inputs: [
              ...prevDraftFieldset[0].inputs,
              {
                type: "checkbox" as const,
                id: "address-info",
                isRequired: true,
                disabled: false,
                name: "address",
                checked: false,
                additionalInfo: `Additional address information ${prevDraftFieldset[0].inputs.length + 1} of User`,
                $labelFlexDirection: "row" as const,
                labelClass: "editable-label",
                inputClass: "editable-input",
                isEditable: true as const,
                editIcon: <EditIcon/>, 
                deleteIcon: <DeleteIcon/>,
                editing: true,
                editableInformation: [ 
                    {
                        name: `Address ${prevDraftFieldset[0].inputs.length + 1}`,
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
          }
        } else if (fieldsetIndex === 1) {
          updated[1] = {...prevDraftFieldset[1],
            inputs: [
              ...prevDraftFieldset[1].inputs,
              {
                type: "checkbox" as const,
                id: "paymet-option",
                isRequired: true,
                disabled: false,
                name: "payment",
                checked: false,
                
                additionalInfo: `Payment Method ${prevDraftFieldset[1].inputs.length + 1}`,
                $labelFlexDirection: "row" as const,
                labelClass: "editable-label",
                inputClass: "editable-input",
                isEditable: true as const,
                editIcon: <EditIcon/>,
                deleteIcon: <DeleteIcon/>,
                editing: true,
                editableInformation: [ 
                    {
                      name: `Payment Method ${prevDraftFieldset[1].inputs.length + 1}`,
                      info: '',
                      type: 'text' as const
                    },
                    {
                      name: `Payment Method Information ${prevDraftFieldset[1].inputs.length + 1}`,
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
          }
        }
        return updated
      }
    })
  }

  const handleChangeofEducationalInformations = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.currentTarget
    const index = Number(target.dataset.index)
    const value = target.value
    console.log(index)
    setFormInputsValues((prevFormInputsValues) => 
      prevFormInputsValues
      ? prevFormInputsValues.map((input,inputIndex) => 
          inputIndex === index 
          ? {...input,
              value: value
            }
          : input
        )
      : prevFormInputsValues
    )
  }
  console.log(formInputsValues)
  console.log(fieldsetsValues)
  
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
            "data-fieldsetidx": 0
          },
        })) as inputEntryShape<true, LabeledCheckboxOrRadio>[],
        isExpandable: true,
      },
      {
        legend: "Payment Options",
        inputs: paymentInputArray.map((payment,index) => ({
          ...payment,
          id: `${payment.id}-${index}`,
          textLabel: `${payment.editableInformation[0].info}`,
          checked: false,
          isEditable: true as const,
          onChange: handleLegendInputsOnChange,
          onClickEdit: handleEditClick,
          onClickDelete: handleDeleteClick,
          onClickSave: handleSaveClick,
          onClickCancel: handleCancelClick,
          dataAttributes: {
            "data-index": index,
            "data-fieldsetidx": 1
          },
        }))as inputEntryShape<true, LabeledCheckboxOrRadio>[],
        isExpandable: true
      }
    ];
  }, [
  handleLegendInputsOnChange,
  handleEditClick,
  handleDeleteClick,
  handleCancelClick,
  handleSaveClick]);

  const educationalInformationInputs = educationalInformationInputArray.map((educationalInput,index)=>(
    {...educationalInput,
      id: `${educationalInput.id}-${index}`,
      textLabel: `Education Info ${index+1}`,
      isEditable: false as const,
      onChange: handleChangeofEducationalInformations,
      dataAttributes: {
        "data-index": index,
      },
    }
  ))

  React.useEffect(() =>{
    if(!initialized.current) {
      setFieldsetsValues(fieldsets)
      setDraftFieldSetValues(fieldsets)
      setFormInputsValues(educationalInformationInputs)
      initialized.current = true
    }
  },[fieldsets,educationalInformationInputs])
  
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
      <h2>Case 2: Without Fieldsets (non-expandable formInputs)</h2>
      <div className="without-fieldsets-container">
        <StyledDynamicForm
          className={'without-fieldsets'}
          fieldsets={null}
          formInputs={formInputsValues || []}
          id="education"
          isExpandable={false}
          inputClass={'education-form-input'}
          labelClass={'education-form-label'}
          labelAndInputContainerClass={'education-form-label-n-input-container'}
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
