import React from "react";

const paragraph =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet natus sint provident vel ab reprehenderit cum soluta, suscipit facere nisi sed earum repellendus fuga debitis, nam molestiae minima voluptates possimus.";

const data = [
  {
    title: "Submissions",
    paragraph: [
      {
        label: 'Awaiting',
        link: '#'
      },
      {
        label: 'Rejected',
        link: '#'
      },
      {
        label: 'Removed from site',
        link: '#'
      },
      {
        label: 'Updated Tags',
        link: '#'
      },
      {
        label: 'Scheduled to be published',
        link: '#'
      },
      {
        label: 'Edit',
        link: '#'
      },
      {
        label: 'Urls',
        link: '#'
      },
    ],
    icon:"icon-book",
    type: 'submenu',
  },
  {
    title: "Editors Queue",
    paragraph: '',
    icon:"icon-editor",
    type: 'link',
  },
  {
    title: "Members",
    paragraph: [
      {
        label: 'Approve Registrations',
        link: '#'
      },
      {
        label: 'Add Member',
        link: '#'
      },
      {
        label: 'Select Member',
        link: '#'
      },
      {
        label: 'Member List',
        link: '#'
      },
      {
        label: 'Member Userpics',
        link: '#'
      },
      {
        label: 'Illustra List',
        link: '#'
      }
    ],
    icon:"fa fa-users",
    type: 'submenu',
  },
  {
    title: "Comments",
    paragraph: [
      {
        label: 'Moderate Comments',
        link: '#'
      },
      {
        label: 'Moderate Feedback',
        link: '#'
      },
      {
        label: 'Moderate Contacts',
        link: '#'
      },
      {
        label: 'Search Comments',
        link: '#'
      }
    ],
    icon:"icon-comments-o",
    type: 'submenu',
  },
  {
    title: "Optins",
    paragraph: [
      {
        label: 'Allow Optin',
        link: '#'
      },
      {
        label: 'Optin Allowed',
        link: '#'
      },
      {
        label: 'Optined Members',
        link: '#'
      },
    ],
    icon:"icon-cog",
    type: 'submenu',
  },
  {
    title: "Categories",
    paragraph,
    icon:"icon-align-left",
    type: 'link',
  },
  {
    title: "Email Stories",
    paragraph: [
      {
        label: 'Ban List',
        link: '#'
      },
      {
        label: 'Stats',
        link: '#'
      },
    ],
    icon:"icon-envelope-o",
    type: 'submenu',
  },
  {
    title: "Anti-Spam",
    paragraph: [
      {
        label: 'Blocked Emails',
        link: '#'
      },
      {
        label: 'Detained Email',
        link: '#'
      },
    ],
    icon:"fa fa-ban",
    type: 'submenu',
  },
  {
    title: "Contests",
    paragraph: [
      {
        label: 'Create/Edit',
        link: '#'
      },
      {
        label: 'Select',
        link: '#'
      },
      {
        label: 'Report',
        link: '#'
      },
    ],
    icon:"icon-trophy",
    type: 'submenu',
  },
  {
    title: "Story Tags",
    paragraph: [
      {
        label: 'Ban Tags',
        link: '#'
      },
      {
        label: 'Fix Tags',
        link: '#'
      },
    ],
    icon:"icon-tags",
    type: 'submenu',
  },
  {
    title: "Search.literotica.com",
    paragraph: [
      {
        label: 'Approve Searches',
        link: '#'
      },
      {
        label: 'Ban Search Terms',
        link: '#'
      },
    ],
    icon:"icon-search",
    type: 'submenu',
  },
  {
    title: "Miscellaneous",
    paragraph: [
      {
        label: 'List Stories',
        link: '#'
      },
      {
        label: 'Feedback Ban',
        link: '#'
      },
      {
        label: 'Moderators',
        link: '#'
      },
      {
        label: 'Pics Bulk',
        link: '#'
      },
      {
        label: 'Voting Report',
        link: '#'
      },
      {
        label: 'Favorites Report',
        link: '#'
      },
      {
        label: 'Comments Report',
        link: '#'
      },
      {
        label: 'VOD Ads',
        link: '#'
      },
      {
        label: 'Mobile Apps Versions',
        link: '#'
      },
      {
        label: 'Opt-in Counts',
        link: '#'
      },
      {
        label: 'Stats',
        link: '#'
      },
    ],
    icon:"fa fa-puzzle-piece ",
    type: 'submenu',
  },
  {
    title: "New Ads",
    paragraph: [
      {
        label: 'Page Groups',
        link: '#'
      },
      {
        label: 'Ads',
        link: '#'
      },
      {
        label: 'Groups',
        link: '#'
      },
    ],
    icon:"fa fa-bullhorn ",
    type: 'submenu',
  },
  {
    title: "Reported",
    paragraph: [
      {
        label: 'Submissions (81)',
        link: '#'
      },
      {
        label: 'Users (225)',
        link: '#'
      },
      {
        label: 'Comments (201)',
        link: '#'
      },
    ],
    icon:"fa fa-flag ",
    type: 'submenu',
  },
  {
    title: "Chyoo",
    paragraph,
    icon:"fa fa-table ",
    type: 'external',
  },
  {
    title: "Help",
    paragraph, icon:"fa fa-question-circle-o",
    type: 'external',
  }
];

export class Accordion extends React.Component {
  render() {
    return (
      <div {...{ className: "wrapper" }}>
        <ul {...{ className: "accordion-list" }}>
          {data.map((data, key) => {
            return (
              <li {...{ className: "sidenav__list-item accordion-list__item", key }}>
                <AccordionItem {...data} />
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

class AccordionItem extends React.Component {
  state = {
    opened: false
  };

  render() {
    const {
      props: { title, type, icon },
      state: { opened }
    } = this;
    let { paragraph } = this.props;

    if (type === 'external') {
      return (
          <div
            {...{
              className: `accordion-item`,
            }}
          >
            <div {...{ className: "accordion-item__line" }}>
              <h3 {...{ className: "accordion-item__title" }}><i className={`accordion-item__link-icon ${icon}`} />{title}</h3>
              <i className="accordion-item__icon fa fa-external-link-square" />
            </div>
          </div>
        );
      }

      if (type === 'link') {
        return (
            <div
              {...{
                className: `accordion-item`,
              }}
            >
              <div {...{ className: "accordion-item__line" }}>
                <h3 {...{ className: "accordion-item__title" }}><i className={`accordion-item__link-icon ${icon}`} />{title}</h3>
                <i className="accordion-item__icon fa fa-link" />
              </div>
            </div>
          );
        }

        if(Array.isArray(paragraph)){
          return (
            <div
              {...{
                className: `accordion-item, ${opened && "accordion-item--opened"}`,
                onClick: () => {
                  this.setState({ opened: !opened });
                }
              }}
            >
              <div {...{ className: "accordion-item__line" }}>
                <h3 {...{ className: "accordion-item__title" }}><i className={`accordion-item__link-icon ${icon}`} />{title}</h3>
                <i {...{ className: "accordion-item__icon fa fa-angle-right" }} />
              </div>
              <div {...{ className: "accordion-item__inner" }}>
                <div {...{ className: "accordion-item__content" }}>
                  <p {...{ className: "accordion-item__paragraph" }}>
                  <ul {...{ className: "accordion-item__submenu" }}>
                    {paragraph.map((item, idx) => (
                      <li key={idx} {...{ className: "accordion-subitem__line" }}>
                        <h3 {...{ className: "accordion-subitem__title" }}>{item.label}</h3>
                        {/* <i {...{ className: "accordion-subitem__icon fa fa-chevron-right" }} /> */}
                      </li>
                      ))}
                  </ul>
                  </p>
                </div>
              </div>
            </div>
          );
        }
    return (
      <div
        {...{
          className: `accordion-item, ${opened && "accordion-item--opened"}`,
          onClick: () => {
            this.setState({ opened: !opened });
          }
        }}
      >
        <div {...{ className: "accordion-item__line" }}>
          <h3 {...{ className: "accordion-item__title" }}><i className={`accordion-item__link-icon ${icon}`} />{title}</h3>
          <i {...{ className: "accordion-item__icon fa fa-chevron-right" }} />
        </div>
        <div {...{ className: "accordion-item__inner" }}>
          <div {...{ className: "accordion-item__content" }}>
            <p {...{ className: "accordion-item__paragraph" }}>{paragraph}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Accordion;
