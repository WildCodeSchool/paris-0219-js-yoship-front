// import React from 'react';
// import { Card, Button, CardTitle, CardText, Col } from 'reactstrap';
// import { makeStyles } from '@material-ui/core/styles';
// import ButtonBase from '@material-ui/core/ButtonBase';
// import Typography from '@material-ui/core/Typography';
// import { Container, } from 'reactstrap';
// import "./DashBoard.scss";


// const useStyles = makeStyles(theme => ({
//   root: {
//     justifyContent:'center',
   
//     display: 'flex',
//     flexWrap: 'wrap',
//     minWidth: 300,
//     width: '100%',
//   },
//   image: {
//     position: 'relative',
//     height: 200,
//     [theme.breakpoints.down('xs')]: {
//       width: '100% !important', // Overrides inline-style
//       height: 100,
//     },
//     '&:hover, &$focusVisible': {
//       zIndex: 1,
//       '& $imageBackdrop': {
//         opacity: 0.15,
//       },
//       '& $imageMarked': {
//         opacity: 0,
//       },
//       '& $imageTitle': {
//         border: '4px solid currentColor',
//       },
//     },
//   },
//   focusVisible: {},
//   imageButton: {
//     position: 'absolute',
//     left: 0,
//     right: 0,
//     top: 0,
//     bottom: 0,
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     color: theme.palette.common.white,
//   },
//   imageSrc: {
//     position: 'absolute',
//     left: 0,
//     right: 0,
//     top: 0,
//     bottom: 0,
//     backgroundSize: 'cover',
//     backgroundPosition: 'center 40%',
//   },
//   imageBackdrop: {
//     position: 'absolute',
//     left: 0,
//     right: 0,
//     top: 0,
//     bottom: 0,
//     backgroundColor: theme.palette.common.black,
//     opacity: 0.4,
//     transition: theme.transitions.create('opacity'),
//   },
//   imageTitle: {
//     position: 'relative',
//     padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${theme.spacing(1) + 6}px`,
//   },
//   imageMarked: {
//     height: 3,
//     width: 18,
//     backgroundColor: theme.palette.common.white,
//     position: 'absolute',
//     bottom: -2,
//     left: 'calc(50% - 9px)',
//     transition: theme.transitions.create('opacity'),
//   },
// }));

// export default function ButtonBases() {
//   const classes = useStyles();

//   return (

//     <section id="project" className="project-section bg-light">

//       <Container>
//         <div className="row align-items-center mb-4 mb-lg-5">
//         <div className={classes.root}>
//           <Col xl="4" lg="4">
//             <div className="ColDashBoard">
//               <Card body inverse className="CardColDashBoard">
//                 <CardTitle className={classes.image}>Mon profil</CardTitle>
//                 <CardText ClassName={classes.focusVisible}>With supporting text below as a natural lead-in to additional content.</CardText>
//                 <Button    className={classes.imageSrc}>See more</Button>
//               </Card>
//             </div>
//           </Col>
//           </div>


// {/* 
//           <Col xl="4" lg="4">
//             <div className="ColDashBoard">
//               <Card body inverse className="CardColDashBoard">
//                 <CardTitle>Ma voiture</CardTitle>
//                 <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
//                 <Button className="button-login-submit">See more</Button>
//               </Card>
//             </div>
//           </Col>

//           <Col xl="4" lg="4">
//             <div className="ColDashBoard">
//               <Card body inverse className="CardColDashBoard">
//                 <CardTitle>Mes documents</CardTitle>
//                 <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
//                 <Button className="button-login-submit">See more</Button>
//               </Card>
//             </div>
//           </Col>

//           <Col xl="4" lg="4">
//             <div className="ColDashBoard">
//               <Card body inverse className="CardColDashBoard">
//                 <CardTitle>Stastistique financiére</CardTitle>
//                 <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
//                 <Button className="button-login-submit">See more</Button>
//               </Card>
//             </div>
//           </Col>

//           <Col xl="4" lg="4">
//             <div className="ColDashBoard">
//               <Card body inverse className="CardColDashBoard">
//                 <CardTitle>Questions les plus fréquentes</CardTitle>
//                 <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
//                 <Button className="button-login-submit">See more</Button>
//               </Card>
//             </div>
//           </Col>

//           <Col xl="4" lg="4">
//             <div className="ColDashBoard">
//               <Card body inverse className="CardColDashBoard">
//                 <CardTitle>A propos</CardTitle>
//                 <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
//                 <Button className="button-login-submit">See more</Button>
//               </Card>
//             </div>
//           </Col> */}

//         </div>


//       </Container>




//     </section>
//   );
// }

import React from 'react';
import axios from 'axios'



import "./DashBoard.scss";

// const PageHeader = () => (
//     <>
//         <header className="masthead">
//             <h1>Bienvenue vous etes bien connecter</h1>
          
          
//         </header>
//     </>
// )
// export default PageHeader;


const config = require('../../config/config')
class PageHeader extends React.Component {

  state = {
    loading: true,
  }

  getData = () => {
    const token = localStorage.getItem("token")
    const uuid = localStorage.getItem("uuid")
    axios({
      method: 'Get',
      url: `http://localhost:${config.port}/users/${uuid}`,
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


  handleFiles = files => {
    console.log(files)
  }
  render() {
    if (this.state.loading) {
      return (<div>loading</div>)
    } else {
      const data = this.state.result[0]
      return (
        <header className="masthead">
        <h1>Bienvenue  {data.firstname} {data.name} vous etes bien connecté</h1>
      
      
    </header>
          );
        }
      }
    }

  export default PageHeader;