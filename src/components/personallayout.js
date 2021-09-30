import React from 'react'
import Personaldetail from '../components/personaldetail'

class PersonalLayout extends React.Component{
    renderUser(){
        let tempArry=[]
        let datarow = this.props.user
        datarow.forEach(userdatabyrow => {
            let key =  userdatabyrow.pointno+userdatabyrow.fullname
            tempArry.push( <Personaldetail userdetail={userdatabyrow} key={key} ></Personaldetail>)
        });
        return tempArry
        
    }


    render(){
        return(
           <>
            {this.renderUser()}
            </>
            
        )
    }
}
export default PersonalLayout
