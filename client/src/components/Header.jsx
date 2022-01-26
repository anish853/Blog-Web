import { AppBar, Toolbar, Typography, makeStyles } from "@material-ui/core";
import { Link, useHistory } from 'react-router-dom';
import { useOktaAuth } from "@okta/okta-react";
import { Opacity } from "@material-ui/icons";
const useStyle = makeStyles({
  component: {
    background: '#FFFFFF',
    color: 'black'
  },
  container: {
    justifyContent: 'center',
    '&  >*': {
      padding: 20,
      color: 'black',
      textDecoration: 'none'
    }
  }
})
const Header = () => {
  const history = useHistory();
  const classes = useStyle();
  const { oktaAuth, authState } = useOktaAuth();
  if (authState && authState.isPending) return null;
  const login = async () => history.push('/login');
  const logout = async () => oktaAuth.signOut();
  const button = authState.isAuthenticated ?
    <button onClick={logout} style={{background:"unset",border:"none",textTransform:"uppercase",fontFamily:"Roboto",
  fontSize:17,cursor:"pointer",opacity:0.8}}>Logout</button> :
    <button onClick={login}>Login</button>;
  return (

    <AppBar className={classes.component}>
      <Toolbar className={classes.container}>
        <Link to="/"><Typography>Home</Typography></Link>
        <Link to="/about"><Typography>About</Typography></Link>
        <Link to="/contact"><Typography>Contact</Typography></Link>      
        <Typography>{button}</Typography>
      </Toolbar>
    </AppBar>
  );
}
export default Header;