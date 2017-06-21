/* eslint no-undef: 0 */

import routes from '../routes';

const allApplicationSubPath = ['/user'];

describe('Applications routes definitions', () => {
  it('should create a React node', () => {
    const appRoutes = routes();
    expect(appRoutes.props.component).toBeDefined();
    expect(appRoutes.props.path).toBeDefined();
    expect(appRoutes.props.path).toEqual('/');
  });
  it('should have a children node for each sub path', () => {
    const appRoutes = routes();
    expect(appRoutes.props.children).toBeDefined();
    expect(appRoutes.props.children).toBeInstanceOf(Array);
    const childPath = appRoutes.props.children.filter(child => child.props.path).map(child2 => child2.props.path);
    expect(childPath).toEqual(allApplicationSubPath);
  });
});
