import React from "react";
import Select from 'react-select';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import Accordion from './Accordion';

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];

class Admin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sidenavElClassName: "sidenav",
      selectedOption: null,
      startDate: new Date()
    };
  }

  handleClick = e => {
    if (this.state.sidenavElClassName.includes("active")) {
      this.setState({ sidenavElClassName: "sidenav" });
    } else {
      this.setState({ sidenavElClassName: "sidenav active" });
    }
  };
  handleChangeDate = (d) => {
    this.setState({ startDate: d });
  }
  render() {
    const { selectedOption } = this.state;
    return (
      <div className="grid-container">
        <div className="menu-icon" onClick={this.handleClick}>
          <i className="fa fa-bars" />
        </div>
        <header className="header">
          <div className="header__search">
            Submit Story - plez2tease
          </div>
          <div className="header__avatar">Log Out<i className="fa fa-sign-out " /></div>
        </header>
        <aside className={this.state.sidenavElClassName}>
          <div className="sidenav__close-icon" onClick={this.handleClick}>
            <i className="icon-times" />
          </div>
          <ul className="sidenav__list">
            <Accordion />
          </ul>
        </aside>
        <main className="main">
          <div className="main-header">
            <div className="main-header__heading">Story Information:</div>
            <div className="main-header__updates">Previously Rejected:

One or more of the photographs you submitted do not meet our content requirements. Please read here for our complete guidelines: http://www.literotica.com/faq/05238710.shtml#06028542.
</div>
          </div>

          <div className="main-monoblock flex">
            <div>Language: </div>
            <div>
              <Select
              className="select"
                value={selectedOption}
                onChange={this.handleChange}
                options={options}
              />
            </div>
            <div>
              <div className="button blue">Save</div>
            </div>
          </div>
          <div className="main-monoblock flex">
            <div>Language: </div>
            <div>
              <DatePicker
                selected={this.state.startDate}
                onChange={this.handleChangeDate}
                dateFormat="MM/yyyy"
                showMonthYearPicker
            />
            </div>
            <div>
              <div className="button blue">Save</div>
            </div>
          </div>
          <div className="main-overview">
            <div className="overviewcard">
              <div className="overviewcard__icon">Remove from Literotica?</div>
              <div className="overviewcard__info">
              <div className="button red">Remove</div>
            </div>
            </div>
            <div className="overviewcard">
              <div className="overviewcard__icon">Assign to another Author?</div>
              <div className="overviewcard__info"><div className="button blue">Assign</div></div>
            </div>
            <div className="overviewcard">
              <div className="overviewcard__icon">Delete?</div>
              <div className="overviewcard__info"><div className="button red">Delete</div></div>
            </div>
          </div>
          <div className="main-cards">
            <div className="card">
            <div className="card-title">Story Tags:</div>
            <div className="card-content">(Phrases or keywords to help readers find this submission. FAQ)
* - automatically generated tags
<div className="button blue">Save</div>
</div>

            </div>
            <div className="card">
              <div className="tags_list">
                <div className="tag"><i className="fa fa-tag" />18 year old</div>
                <div className="tag"><i className="fa fa-tag" />affair</div>
                <div className="tag"><i className="fa fa-tag" />19-year-old</div>
                <div className="tag"><i className="fa fa-tag" />abduction</div>
                <div className="tag"><i className="fa fa-tag" />action adventure</div>
                <div className="tag"><i className="fa fa-tag" />adultery</div>
                <div className="tag"><i className="fa fa-tag" />adventure</div>
              </div>
            </div>
            <div className="card">
              <div className="tags_list">
                <div className="tag"><i className="fa fa-tag" />18 year old</div>
                <div className="tag"><i className="fa fa-tag" />affair</div>
                <div className="tag"><i className="fa fa-tag" />19-year-old</div>
                <div className="tag"><i className="fa fa-tag" />abduction</div>
                <div className="tag"><i className="fa fa-tag" />action adventure</div>
                <div className="tag"><i className="fa fa-tag" />adultery</div>
                <div className="tag"><i className="fa fa-tag" />adventure</div>
              </div>
            </div>

          </div>
          <div className="main-monoblock">
            <div className="main-monoblock_head">
              Story title
            </div>
            <div className="main-monoblock_subhead">
            main-monoblock_subhead
            </div>
          </div>
          <div className="main-monoblock blue">
            <div className="main-monoblock_head">
              Story title
            </div>
          </div>
          <div className="main-monoblock flex">
            <div>Schema:</div>
            
            <input type="radio" className="flat-checkbox" id="radio_large_A" name="radio_large"  checked/>
<label for="radio_large_A">large checked</label>
<input type="radio" className="flat-checkbox" id="radio_large_B" name="radio_large" />
<label for="radio_large_B">large</label>
            <div>
              <div className="button blue">Change</div>
            </div>
         
          </div>
          <div className="main-block" style={{background:'#EEEEEE'}}>
            <div className="main-block__heading">Reject Submission</div>
            <div className="main-block__updates">
              <p>
                Dear writer,<br />
                Thank you for your submission to Literotica. We appreciate the time and effort you've taken to write a story and submit it to our site. However, we've found that we cannot post your submission. The checklist below may help you in re-examining your manuscript.
              </p>
              <ul className="two_columns_list">
                <li>
                  <div>Did I follow the Writer's Guidelines for submission? These can be found by clicking here</div>
                  <div>
                    <input type="checkbox" className="flat-checkbox" id="check_large" checked/>
                    <label for="check_large">Writer's Guidelines</label>
                  </div>
                </li>
                <li>
                  <div>Could the story be developed more fully? That is, is it too short to do the plot justice? Is it under 750 words?</div>
                  <div>
                  <input type="checkbox" className="flat-checkbox" id="check_large" />
                    <label for="check_large">Length</label>
                    </div>
                </li>
                <li>
                  <div>Did I check to make sure everything was spelled correctly?</div>
                  <div>
                  <input type="checkbox" className="flat-checkbox" id="check_large" />
                    <label for="check_large">Spelling</label>
                    </div>
                </li>
                <li>
                  <div>Were there any serious errors in punctuation or formatting (i.e. submitted in all capital letters, capitalization errors, etc.)?</div>
                  <div>
                  <input type="checkbox" className="flat-checkbox" id="check_large" />
                    <label for="check_large">Formatting</label>
                     </div>
                </li>
                <li>
                  <div>Was the story not broken into appropriately sized paragraphs?</div>
                  <div>
                  <input type="checkbox" className="flat-checkbox" id="check_large" />
                    <label for="check_large">Structure</label>
                     </div>
                </li>
                <li>
                  <div>Was there an underage (under 18 years old) sexual relationship in my story?</div>
                  <div>
                  <input type="checkbox" className="flat-checkbox" id="check_large" />
                    <label for="check_large">Child Abuse</label>
                     </div>
                </li>
                <li>
                  <div>Were there URL links, site addresses, or other advertisements within the story?</div>
                  <div>
                  <input type="checkbox" className="flat-checkbox" id="check_large" />
                    <label for="check_large">Advertising</label>
                     </div>
                </li>
                <li>
                  <div>The file is not one we can open, came through garbled, or the text field is blank.</div>
                  <div>
                  <input type="checkbox" className="flat-checkbox" id="check_large" />
                    <label for="check_large">Broken File</label>
                     </div>
                </li>
                <li>
                  <div>The file you've sent is password protected. Please resubmit the file without a password</div>
                  <div>
                  <input type="checkbox" className="flat-checkbox" id="check_large" checked/>
                    <label for="check_large">Password Protected</label>
                     </div>
                </li>
                <li>
                  <div>OTHER:</div>
                  <div>
                    <input type="checkbox" className="flat-checkbox" id="check_large" checked/>
                    <label for="check_large">Other</label>
                  </div>
                </li>
              </ul>
              <p>
                Please feel free to re-submit the story after a Volunteer Editor has examined it, or after you've made revisions. You can find a list of Volunteer Editors here.<br />
                Please consult our Writer's Resources section and make sure you read our submission guidelines:<br />
                If you have any questions on these, please let us know.<br />
                Thanks for your time, and look forward to reading you again!<br />
                Laurel &amp; Manu<br />
                Literotica.Com
              </p>
            </div>
          </div>
        </main>
        <footer className="footer">
          <div className="footer__copyright">&copy; 2018 MTH</div>
          <div className="footer__signature">Made with love by pure genius</div>
        </footer>
      </div>
    );
  }
}

export default Admin;
