import "./shop.styles.scss";

import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { setCategoriesMap } from "../../store/categories/category.action";
import { Route, Routes } from "react-router-dom";
import CategoryPreview from "../../components/category-preview/category-preview.component";
import Category from "../../components/category/category.component";
const Shop = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = [];
      dispatch(setCategoriesMap(categoryMap));
    };

    getCategoriesMap();
  }, [dispatch]);
  return (
    <Routes>
      <Route index element={<CategoryPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};

export default Shop;
