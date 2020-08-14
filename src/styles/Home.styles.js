import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  logo: {
    height: '195px',
    width: '145px',
    paddingTop: '10px',
    margin: '170px 170px 0px',
    display: 'flex',
    flexDirection: 'column',
  },
  cardContainer: {
    display: 'flex',
    justifyContent: 'space-evenly',
    width: '100%'
  },
  cards: {
    height: '295px',
    width: '225px',
    marginTop: '30px'
  },
  welcome: {
    color: '#F2F2F2',
    fontSize: '30px',
    paddingTop: '10%',
    textAlign: 'center'
  },
  choose: {
    color: '#F2F2F2',
    fontSize: '30px',
    width: '85%',
    textAlign: 'center',
    margin: '50px auto'
  },
}))

export default useStyles;