import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'block',
    '& > * + *': {
      marginLeft: theme.spacing(2),
      justifyContent:"center",
      alignItems:"center",      
    },
  },
}));

export function CircularIndeterminate(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CircularProgress {...props}/>
    </div>    
  );
}