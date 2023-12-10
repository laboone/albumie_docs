/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually
  tutorialSidebar: [
    {
      type: "doc",
      id: "intro"
    },
    {
      type: 'category',
      label: '基本的な操作方法',
      link: {
        type: "doc",
        id: "tutorial/intro",
      },
      items: [
        {
          type: 'doc',
          id: 'tutorial/upload-photo',
        },
        {
          type: 'doc',
          id: 'tutorial/register-person',
        },
        {
          type: 'doc',
          id: 'tutorial/analyze-photos',
        },
        {
          type: 'doc',
          id: 'tutorial/create-album',
        },
        {
          type: 'doc',
          id: 'tutorial/download-album',
        },
      ],
    },
    {
      type: 'category',
      label: '一歩すすんだ操作',
      items: [
        {
          type: 'doc',
          id: 'advanced/add-people',
        },
        {
          type: 'doc',
          id: 'advanced/face-recognition-accuracy',
        },
        {
          type: 'doc',
          id: 'advanced/create-collection',
        },
        {
          type: 'doc',
          id: 'advanced/album-photo-category',
        },
        {
          type: 'doc',
          id: 'advanced/delete-photo',
        },
        {
          type: 'doc',
          id: 'advanced/user-management',
        }
      ]
    },
    {
      type: 'category',
      label: '有料プラン',
      items: [
        {
          type: 'doc',
          id: 'plan/paid-plan',
        },
        {
          type: 'doc',
          id: 'plan/cancel-plan',
        },
        {
          type: 'doc',
          id: 'plan/change-email',
        },
      ]
    },
    {
      type: 'category',
      label: 'よくあるご質問',
      items: [
        {
          type: 'doc',
          id: 'faq/requirement'
        },
        {
          type: 'doc',
          id: 'faq/receipt'
        },
      ]
    },
    {
      type: 'doc',
      id: "inquiry"
    },
  ],
};

module.exports = sidebars;