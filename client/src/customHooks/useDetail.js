import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { clearDetail, getRecipeById } from "../redux/actions";

const useDetail = () => {
  const dispatch = useDispatch();
  const recipeInfo = useSelector((state) => state.recipeInfo);

  const { id } = useParams();
  useEffect(() => {
    dispatch(getRecipeById(id));

    return () => dispatch(clearDetail());
  }, [id]);

  return recipeInfo;
};

export default useDetail;
