import React from "react";
import PersonalLayout from '../components/personallayout'
class Mainstatus extends React.Component {
    constructor(props) {
        super(props)
        //this.justifyRows =this.justifyRows.bind(this)
        // oldversion nobug this.state = {
        //     user: [],
        //     before: [],
        //     current: [],
        //     after: [],
        //     loading: true
        // }
        this.state = {
            user: false,
            before: [],
            current: [],
            after: [],
            abort: [],
            sos: [],
            loading: true
        }
    }

    async componentDidMount() {
        let tempArrybefore = []
        let tempArrycurrent = []
        let tempArryafter = []
        let tempArryabort = []
        let tempArrysos = []
        let records = this.props.user.records
        if (Array.isArray(records)) {
            this.setState({ user: true })
            records.forEach(element => {
                
                if (element.specialcase =='TRUE')  {
                    tempArrysos.push(element)
                }
                if (element.status == 'before') {
                    tempArrybefore.push(element)
                } else if (element.status == 'current') {
                    tempArrycurrent.push(element)
                } else if (element.status == 'after') {
                    tempArryafter.push(element)
                } 
                else if (element.status != 'before' && element.status != 'current' && element.status != 'after' && element.status != "abort") {
                    tempArryabort.push(element)
                }
            });
            this.setState({ before: tempArrybefore, current: tempArrycurrent, after: tempArryafter, abort: tempArryabort, sos: tempArrysos, loading: false })
        } else {
            this.setState({ loading: false })
        }
    }



    render() {
        return (
            <>
                {this.state.sos == null ? <div></div> :
                    <div className="container-fluid">
                    <h3 className="text-center" style={{ backgroundColor: '#F02222' }}> ฉุกเฉิน/ขอความช่วยเหลือ </h3>
                        <div className="row row-cols-6 mt-3">
                            <PersonalLayout user={this.state.sos || !this.state.loading}></PersonalLayout>
                        </div>
                    </div>
                }

                <div className="container-fluid d-flex pt-4" style={{ backgroundColor: '#E6E6E6' }}>
                    <div className="col border border-3 rounded-2 pt-2" >
                        <h3 className="text-center sticky-top " style={{ backgroundColor: '#0D6EFD' }}> รายชื่อเป้าเตรียมเข้าค้น </h3>
                        <div className="row row-cols-4 mt-3">
                            <PersonalLayout user={this.state.before || !this.state.loading}></PersonalLayout>
                        </div>
                    </div>
                    <div className="col border border-3 rounded-2 pt-2">
                        <h3 className="text-center sticky-top" style={{ backgroundColor: '#ffc107' }}> รายชื่อเป้ากำลังเข้าค้น </h3>
                        <div className="row row-cols-4 mt-3">
                            <PersonalLayout user={this.state.current || !this.state.loading}></PersonalLayout>
                        </div>
                    </div>
                    <div className="col border border-3 rounded-2 pt-2">
                        <h3 className="text-center sticky-top " style={{ backgroundColor: '#198754' }}> รายชื่อเป้าเข้าค้นเสร็จสิ้น </h3>
                        <div className="row row-cols-4 mt-3">
                            <PersonalLayout user={this.state.after || !this.state.loading} ></PersonalLayout>
                        </div>
                    </div>
                </div>
                <div className="container-fluid border border-3 rounded-2 pt-2">
                    <h3 className="text-center"> รายชื่อเป้าไม่ทำการเช็คอิน </h3>
                    <div className='row row-cols-5 mt-3'>
                        <PersonalLayout user={this.state.abort || !this.state.loading} ></PersonalLayout>
                    </div>
                </div>
            </>
        )
    }




}

export default Mainstatus