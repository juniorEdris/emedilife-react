import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import AllProducts from '../PrimarySections/AllProdPage/AllProducts';
import { useQuery } from '../PrimarySections/Utility';
import { GetCategoryBasedProd, getCategorySortedProducts, GetChildCategoryBasedProd, GetSubCategoryBasedProd } from '../Redux/Action/CategoryBasedProdAction';
import './categoryProducts.css';
const CategoryProducts = (props) => {
  const [category, setCategory] = useState('');
  const [sort, setSort] = useState('');
  const [page, setPage] = useState(1);
  const query = useQuery();
  const id = query.get('id');
  const sub_id = query.get('subcategory_id');
  const child_id = query.get('childcategory_id');
  useEffect(() => {
    if (id) {
      props.getProducts({ page, category_id: id });
      props.setCategoryID(id);
    } else if (sub_id) {
      props.getsubProducts({ page, subcategory: sub_id });
    } else if (child_id) {
      props.getchildProducts({ page, childcategory: child_id });
    }
  }, [page, id,sub_id,child_id]);
  

  useEffect(() => {
    props.getSortingProducts({ sortingType: sort });
  }, [sort]);
  return (
    <div className="other_brands_wrapper">
      <AllProducts
        home={true}
        category={category}
        setCategory={setCategory}
        sort={sort}
        setSort={setSort}
        page={page}
        setPage={setPage}
        loading={props.loading}
        products={props.products}
        pages={props.pages}
        category_hide={true}
        section_title={props.products.length > 0 ? props.products[0]?.category : ''}
      />
    </div>
  );
};

const mapStateToProps = (state) => ({
  loading: state.CategoryProducts.loading,
  products: state.CategoryProducts.categoryProducts,
  categories: state.CategoryProducts.categoryLists,
  pages: state.CategoryProducts.categorypages,
});

const mapDispatchToProps = (dispatch) => ({
  getProducts: (data) => dispatch(GetCategoryBasedProd(data)),
  getsubProducts: (data) => dispatch(GetSubCategoryBasedProd(data)),
  getchildProducts: (data) => dispatch(GetChildCategoryBasedProd(data)),
  getSortingProducts:(data)=>dispatch(getCategorySortedProducts(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(CategoryProducts);
