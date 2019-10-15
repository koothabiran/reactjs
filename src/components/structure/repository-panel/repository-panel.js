import React, { Component } from 'react';
import { Collapse,Tree, Popover, Menu, Icon  } from 'antd';

import './repository-panel.css';

const { TreeNode, DirectoryTree } = Tree;
const { Panel } = Collapse;
const { SubMenu } = Menu;

function callback(key) {
    console.log(key);
}
  
const content = (
    <React.Fragment>
      <div>
        <p>Add Chapter</p>
        <p>Add Page</p>
        <p>Add Screen</p>
        <p>Add Question</p>
        <p>Add Question group</p>
      </div> <hr />
      <div>
        <p>Copy From</p>
        <p>Import Custom</p>
      </div> <hr />
      <div>
        <p>Duplicate</p>
        <p>Rename</p>
        <p>Delete</p>
      </div>
    </React.Fragment>  
  );

const popUp = (
        <React.Fragment>
            Chapter2
            <Popover placement="right" content={content}>
                <span className="popover-span">...</span>
            </Popover>
        </React.Fragment> 
);    

class BLMRepositoryPanelComponent extends Component {
  handleClick = e => {
    console.log('click ', e);
  };

  render() {    
    return (
      <div>
        <Menu onClick={this.handleClick} defaultSelectedKeys={['1']} defaultOpenKeys={['sub1']} mode="inline"
        className="parent-collapse">
        <SubMenu key="sub1" title={
            <span>
            <Icon type="menu" className="menu-icon"/>              
            <span><b>STRUCTURE</b></span>
            </span>
          }>
          <Collapse onChange={callback} defaultActiveKey="1">
                    <Panel header="Landing Page" key="1">
                        <DirectoryTree multiple defaultExpandAll>
                            <TreeNode title="Intro" key="Intro" isLeaf />
                            <TreeNode title="Connexion" key="Connexion" isLeaf />
                            <TreeNode title="Help" key="Help" isLeaf />
                            <TreeNode title="Summary" key="Summary" isLeaf />
                        </DirectoryTree>
                    </Panel>
                    <Panel header="Structure" key="2">
                        <DirectoryTree multiple defaultExpandAll >
                            <TreeNode title="CHAPTER 1" key="Chapter1">
                            <TreeNode title="page1" key="page1" isLeaf />
                            <TreeNode title="page2" key="page2" isLeaf />
                            </TreeNode>
                            <TreeNode title={popUp} key="Chapter2">
                            <TreeNode title="screen1" key="screen1" isLeaf />
                            <TreeNode title="Question" key="Question" isLeaf />
                            <TreeNode title="Question Group" key="Question Group" isLeaf />
                            </TreeNode>
                            <TreeNode title="CHAPTER 3" key="Chapter3">
                            </TreeNode>
                        </DirectoryTree>
                    </Panel>
                    <Panel header="Annexes" key="3" >
                        <DirectoryTree multiple defaultExpandAll >
                            <TreeNode title="GLOBAL" key="GLOBAL">
                            <TreeNode title="download" key="download" isLeaf />
                            <TreeNode title="product Catalogue" key="product Catalogue" isLeaf />
                            <TreeNode title="Simultear de discussion" key="Simultear de discussion" isLeaf />
                            <TreeNode title="Glossaire" key="Glossaire" isLeaf />
                            </TreeNode>
                            <TreeNode title="CHAPITRE 1" key="CHAPITRE 1">
                            <TreeNode title="Documents" key="Documents" isLeaf />
                            </TreeNode>
                            <TreeNode title="GAMIFICATION" key="GAMIFICATION">
                            </TreeNode>
                        </DirectoryTree>
                    </Panel>
                </Collapse>
        </SubMenu>
             </Menu>
      </div>
    );
  }
}
export default BLMRepositoryPanelComponent;