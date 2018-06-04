import React from 'react'

export default function FormProvider(fields){
    return function(WarppedComponent){
        const initFormState = {}

        for(const key in fields){
            initFormState[key] = {
                value:fields[key].value,
                error:''
            }
        }
    
        class FormComponent extends React.Component{
            constructor(props){
                super(props)
                this.state={
                    form:initFormState,
                    formValid:false
                }
            }
    
            handleChangeValue(key,e){
                const {form} = this.state
                const newField = {value: e.target.value,valid:true,error:""}
                const Rules = fields[key].rules

                let valid = false
                
                for(let i=0;i<Rules.length;i++){

                    const {pattern,error}=Rules[i]

                    if(typeof pattern === "function"){
                        valid=pattern(newField.value)
                    }else{
                        valid=pattern.test(newField.value)
                    }

                    if(!valid){
                        newField.valid=false
                        newField.error=error
                        break
                    }
                }

                console.log(newField)

                const newForm= Object.assign({}, form ,{[key]:newField});

                const formValid = Object.keys(newForm).every(f => f.valid);

                console.log(newForm)

                this.setState({
                    form: newForm,
                    formValid
                })
            }

            setFormValue(value){

            }

            render(){

                const {form,formValid} = this.state

                return <WarppedComponent {...this.props}
                        form={form}
                        formValid={formValid}
                        onFormChange={this.handleChangeValue.bind(this)}
                        />
            }
        }

        return FormComponent
    }

}