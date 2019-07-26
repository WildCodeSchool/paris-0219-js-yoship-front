import React from 'react';
import axios from 'axios'
import "./DashBoard.scss";
import Loader from '../UI/Loader/Loader'

const config = require('../../config/config')
class PageHeader extends React.Component {

  state = {
    loading: true,
  }

  getData = () => {
    const token = localStorage.getItem("token")
    const uuid = localStorage.getItem("uuid")
    let pathApi = process.env.REACT_APP_PATH_API_DEV + '/users/'
    if (process.env.NODE_ENV === 'production') {
      pathApi = process.env.REACT_APP_PATH_API_PROD + '/users/'
    }
    axios({
      method: 'Get',
      url: `${pathApi}${uuid}`,
      headers: {
        'x-access-token': `${token}`
      }
    })
      .then(res => {
        const result = res.data
        this.setState({ result, loading: false })
        console.log("getData", this.state)
      })

  }

  componentDidMount = () => {
    this.getData()
  }

  render() {
    if (this.state.loading) {
      return (<Loader />) //loading
    } else {
      const data = this.state.result[0]
      return (
        <header className="masthead">
          <Loader triggerAnim={true} />
          <h1>Bienvenue {data.firstname} {data.name} vous êtes bien connecté</h1>
        </header>
      );
    }
  }
}
export default PageHeader;


