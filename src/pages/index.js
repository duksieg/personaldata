import * as React from "react"

import Mainstatus from "../components/mainstatus"
import { ShimmerSimpleGallery } from 'react-shimmer-effects'

import 'react-bootstrap/dist/react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css'

class IndexPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      user: null,
      loading: true,
    }
  }

  async componentDidMount() {
    try {
      console.log('fetching')
      let response = await fetch('https://operationnarai.herokuapp.com/detail')
      let jsonresponse = await response.json()
      //arrystatus = jsonresponse.records
      if (jsonresponse != null) {
        this.setState({ user: jsonresponse, loading: false })
      }
    } catch (err) {
      this.setState({ loading: false })
      console.error(err)
    }
  }

  render() {
    if (this.state.user == null) return <ShimmerSimpleGallery card imageHeight={100} row={2} col={3} gap={30} caption />
    return (
      <div>
        <Mainstatus user={!this.state.user || this.state.loading ? <ShimmerSimpleGallery card imageHeight={100} row={2} col={3} gap={30} caption /> : this.state.user} ></Mainstatus>
      </div>
    )
  }

}

export default IndexPage
