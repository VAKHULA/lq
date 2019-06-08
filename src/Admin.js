import React from "react";

import "react-datepicker/dist/react-datepicker.css";
import Accordion from "./Accordion";
import Main1 from './Main1';
import Main2 from './Main2';
import Main3 from './Main3';


class Admin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sidenavElClassName: "sidenav",
      startDate: new Date(),
      otherflag: true,
      otherText: "",
      editReject: true,
      editEndflag: false,
      selectedCat: false,
      aded : [
        { value: "Summer hot Stories", label: "Summer hot Stories" },
        { value: "Editor's Favorites", label: "Editor's Favorites" },
        { value: "Heliocentrism", label: "Heliocentrism" }
      ],
page: 1,
    };
    this.myRef = React.createRef();
  }
  onaddcat = () => {
    const {aded} = this.state;
    
    this.setState({
      aded: [...aded, this.state.selectedCat]
    })
    
  }
  onRemovecat = (e) => {
    const {aded} = this.state;
    const aded2 = aded.filter((it)=>(it.label !== e.target.getAttribute('data-val') ))
   
    this.setState({
      aded: [...aded2]
    })
  }
  changeCategories = (e) => {
    
    this.setState({selectedCat: e})
  }
  oneditReject = e => {
    e.preventDefault();
    this.setState({
      editReject: !this.state.editReject
    });
    this.myRef.current.focus();
  };
  handleClick = e => {
    
    if (this.state.sidenavElClassName.includes("active")) {
      this.setState({ sidenavElClassName: "sidenav" });
    } else {
      this.setState({ sidenavElClassName: "sidenav active" });
    }
  };
  handleClickPrev = e => {
    e.preventDefault();
      this.setState({ page: 2 });
  };
  handleClickHome = () => {
    console.log('handleClickHome');
    
      this.setState({ page: 1 });
  };
  handleChangeDate = d => {
    this.setState({ startDate: d });
  };
  changeOther = e => {
    e.preventDefault();
    this.setState({
      otherflag: !this.state.otherflag
    });
  };

  editEnd = e => {
    e.preventDefault();
    this.setState({
      editEndflag: !this.state.editEndflag
    });
  };
  render() {
    return (
      <div className="grid-container">
       
        <header className="header">
          <div className="content">
          <div className="menu-icon" onClick={this.handleClick}>
          <i className="fa fa-bars" />
        </div>
          <div className="header__search">Submit Story - plez2tease</div>
          <div className="header__avatar">
            Log Out
            <i className="fa fa-sign-out " />
          </div>
          </div>

        </header>
<div className="content" style={{ alignItems: 'start' }}>

<aside className={this.state.sidenavElClassName} a>
          <img
            src="https://1uzje.codesandbox.io/lit_logo_big.svg"
            style={{ margin: "25px 50px 0" }}
            alt="lit_logo"
          />
          <div className="sidenav__close-icon" onClick={this.handleClick}>
            <i className="icon-times" />
          </div>
          <ul className="sidenav__list">
            <Accordion handleClickHome={this.handleClickHome} />
          </ul>
        </aside>
        <main className="main" style={{ width: '100%' }}>

          {this.state.page === 1 && 
            <Main2 handleClickPrev={this.handleClickPrev}/>
          }
          {this.state.page === 2 && 
            <Main3 />
          }
          {this.state.page === 3 && 
            <Main1 />
          }
        </main>
</div>

        <footer className="footer ">
          <div className="content">
            <div className="footer__copyright">&copy; 2019 MTH</div>
            <div className="footer__signature">Made with flexbox</div>
          </div>
        </footer>
      </div>
    );
  }
}

export default Admin;
