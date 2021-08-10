import React from 'react';
import { Link ,useHistory} from 'react-router-dom';
import {connect} from 'react-redux';

function NavList(props) {
  const allCategory = (e) => {
    e.preventDefault();
    props.setCategoryBar(!props.categoryBar);
  };
  const preventEvent = (e) => {
    e.preventDefault();
  };
  // Ekhane kore den
  const history = useHistory()
  // console.log(props,history);
  const redirectToPage=(navIteme) => {
    return navIteme.map(item => {
      if (item.page_id !== null) {
        // call page_by_id_api after clicking this menu console.log('pageId', item.page_id)
        return <li>
              <Link to={`/${item.page_id}`} onClick={preventEvent}>
                      {item.name}
               </Link>
        </li>
      } else if(item.category_id !==null){
        // call product_by_category_id_api console.log('catId',item.category_id)
        return <li>
              <Link to={`/${item.category_id}`} onClick={preventEvent}>
                  {item.name}
              </Link>
        </li>
        
      } else if(item.custom_link !==null){
        // just add link to anchor , do not need to call any api console.log('link',item.custom_link)
        return <li>
            <a href={`${item.custom_link}`}  rel='noreferrer' target='_blank'>
                  {item.name}
                </a>
        </li>
      }else {
        // show iteme.connect in a page 
        return console.log('content',item.content)
      }
    })
  };

  return (
    <div className="nav_links">
      <ul>
        <li>
          <Link to="#" className="nav-all" onClick={allCategory}>
            <span class="lnr lnr-menu"></span> all
          </Link>
        </li>
        {/*{props.navlists.length > 0 && props.navlists.map(list => (
          <li key={list.id}>
             {console.log(list)} 
            <Link to="#" onClick={preventEvent}>
              {list.name}
            </Link>
          </li>   
        ))}*/}
        {redirectToPage(props.navlists)}
      </ul>
    </div>
  );
}
const mapStateToProps = state => ({
  navlists:state.HomeContent.header_menu,
})
const mapDispatchToProps = dispatch=>({})
export default connect(mapStateToProps,mapDispatchToProps)(NavList);

