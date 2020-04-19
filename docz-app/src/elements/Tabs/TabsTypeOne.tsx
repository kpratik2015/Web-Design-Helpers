import React from "react";
import styled from "styled-components/macro";

const TabList = styled.ul`
  display: flex;
  flex-wrap: nowrap;
  width: 100%;
  padding-left: 0;
  margin-bottom: 0;
  list-style: none;
  justify-content: center;
  border-bottom: 0.0625rem solid #d9dbe3;
`;

const Tab = styled.li`
  cursor: pointer;
`;

const TabItem = styled.a`
  position: relative;
  display: inline-block;
  font-size: 1rem;
  margin-bottom: -0.5rem;
  min-width: 4.25rem;
  padding: 1rem 1.5rem;
  transition: color 0.2s;
  cursor: pointer;
  text-decoration: none;
  color: ${(props) => props.theme.text.quarternary};
  outline: none;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: center;
  &[aria-selected="true"] {
    color: ${(props) => props.theme.text.secondary};
    position: relative;
    display: flex;
    flex-direction: column;
    &:after {
      left: 0;
      right: 0;
      background: currentColor;
      opacity: 1;
    }
  }
  &:after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 50%;
    right: 50%;
    opacity: 0;
    height: 0.1875rem;
    transition: 0.2s;
  }
`;

const TabPanel = styled.div``;

const TabsTypeOne: React.FC = (props) => {
  const TABS = [
    {
      name: "Nils Frahm",
      id: "nils-frahm",
    },
    { name: "Agnes Obel", id: "agnes-obel" },
    { name: "Joke", id: "joke" },
  ];
  const [selectedTab, setSelectedTab] = React.useState(TABS[0]);
  return (
    <React.Fragment>
      <TabList role="tablist" aria-label="Entertainment">
        {TABS.map(({ name, id }) => (
          <Tab key={id}>
            <TabItem
              data-toggle="tab"
              onClick={() => setSelectedTab({ name, id })}
              role="tab"
              id={`tab-${id}`}
              aria-controls={`panel-${id}`}
              aria-selected={selectedTab.id === id}
              tabIndex={selectedTab.id !== id ? -1 : 0}
            >
              {name}
            </TabItem>
          </Tab>
        ))}
      </TabList>
      <TabPanel
        tabIndex={0}
        role="tabpanel"
        id={`panel-${selectedTab.id}`}
        aria-labelledby={`tab-${selectedTab.id}`}
      >
        {selectedTab.name}
      </TabPanel>
    </React.Fragment>
  );
};

export default TabsTypeOne;
