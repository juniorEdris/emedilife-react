import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import AllProducts from '../PrimarySections/AllProdPage/AllProducts';
import { useQuery } from '../PrimarySections/Utility';
import { GetNeccessaryProducts } from '../Redux/Action/NeccessaryProductsAction';

const NeccessaryProducts = (props) => {
  const [category, setCategory] = useState('');
  const [sort, setSort] = useState('');
  const [page, setPage] = useState(1);
  useEffect(() => {
    props.getProducts({ page });
  }, [page]);
  return (
    <div className="neccessary_product_wrapper">
      <AllProducts
        category={category}
        setCategory={setCategory}
        sort={sort}
        setSort={setSort}
        page={page}
        setPage={setPage}
        loading={props.loading}
        products={props.products}
        pages={props.pages}
      />
    </div>
  );
};

const mapStateToProps = (state) => ({
  loading: state.NeccessaryContent.loading,
  products: state.NeccessaryContent.neccessaryResults,
  pages: state.NeccessaryContent.neccessary_pages,
});

const mapDispatchToProps = (dispatch) => ({
  getProducts: (data) => dispatch(GetNeccessaryProducts(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NeccessaryProducts);
