import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {getDataAction} from '../../store/items/actions'

export const ReduxBoard = () => {
  const dispatch = useDispatch();

  useEffect(()=> {
    dispatch(getDataAction())
  },[])


  const { items } = useSelector(
    (state) => state?.auth
  );
  
  console.log("items",items)

  return (<div>
  {items.map(({ id,title }) => {
    return <p key={id}>{ title }</p>;
  })}
  </div> )

};
