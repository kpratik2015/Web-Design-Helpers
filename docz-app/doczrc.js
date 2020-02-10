export default {
  typescript: true,
  /**If you plan to deploy your site to https://foo.github.io/bar/, the base should be set to /bar/ */
  base: process.env.DOCZ_BASE || '/web-nuggets/',
  /**source folder of components */
  src: process.env.DOCZ_SOURCE || './',
  files: '**/*.{md,markdown,mdx}',
  ignore: [
    'README.md',
    'changelog.md',
    'code_of_conduct.md',
    'contributing.md',
    'license.md'
  ],
  dest: '/dist-remote/web-nuggets' || process.env.DOCZ_DEST || '.docz/dist',
  public: '/public',
  /**Branch used to edit your document when clicking on Github button. */
  editBranch: 'master',
  title: 'Pratik Web Nuggets',
  menu: ['Home', 'Branding', 'Grid']
};
