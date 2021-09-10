import React ,{useEffect}from 'react'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import CircularProgress from '@material-ui/core/CircularProgress'

const useStyles = makeStyles(theme => ({
  layout: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    maxWidth: '768px',
    margin: '0 auto'
  },
  paper: {
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(8),
      padding: `${theme.spacing(6)}px ${theme.spacing(4)}px`
    }
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  buttonProgress: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: -12,
    marginLeft: -12
  }
}))

const Register = (props) => {
  const classes = useStyles({})
  const [formData, setFormData] = React.useState({
 
    email: '',
    password: ''
  })

  useEffect(() => {
     
    props.showSidebar(false);
    
    
    
    }, [])

  async function activate(event){
    event.preventDefault();
    //incase you want to register the user you need to do that
    // alert("clicked theer");
    // console.log(formData);
    // const response = await fetch('http://localhost:3000/api/auth/signup', {
    //   method: 'POST', 
    //   headers: {
    //     'Content-Type': 'application/json'
    //     // 'Content-Type': 'application/',
    //   },
    //   body: JSON.stringify(formData)

    // });

    const response = await fetch('http://localhost:3000/api/auth/confirm-email?token=2vU2aN', {
      method: 'GET', 
    

    });
console.log(response);

   }

  const [submitting, setSubmitting] = React.useState(false)

  return (
    <main className={classes.layout +" register"}>
      <Paper className={classes.paper} elevation={2}>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
        >
          <Typography component="h1" variant="h4" gutterBottom>
            Register
          </Typography>
        </Box>
        <form method="post" className={classes.form} noValidate>
          <TextField
            margin="normal"
            required
            fullWidth
            id="firstName"
            label="First Name"
            name="firstName"
            autoComplete="fname"
            autoFocus
            defaultValue={formData.firstName}
           
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="lastName"
            label="Last Name"
            name="lastName"
            autoComplete="lname"
            defaultValue={formData.lastName}
         
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            defaultValue={formData.email}
            onChange={e => setFormData({ ...formData, email: e.target.value })}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="new-password"
            defaultValue={formData.password}
            onChange={e => setFormData({ ...formData, password: e.target.value })}
          />
          <Box mb={6}>
            <Button
              onClick={activate}
              disabled={submitting}
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              {submitting && (
                <CircularProgress size={24} className={classes.buttonProgress} />
              )}
              {submitting ? 'Registering...' : 'Register'}
            </Button>
          </Box>
        </form>
      </Paper>
    </main>
  )
}

export default Register;