import { extend } from 'flarum/extend';
import PostUser from 'flarum/components/PostUser';

// import { app } from '../../../../../vendor/flarum/core/js/src/forum';
// import { extend } from '../../../../../vendor/flarum/core/js/src/common/extend';
// import PostUser from '../../../../../vendor/flarum/core/js/src/forum/components/PostUser';

app.initializers.add('davidnery/flarum-nickname-group-formatter', () => {
  extend(PostUser.prototype, 'view', function (content) {
    const user = this.props.post.user();
    
    if (!user || !user.displayName()) {
      return;
    }

    const primaryGroup = user.groups()[0];
    const color = primaryGroup.attribute('color');
    const displayStyle = primaryGroup.attribute('displayStyle');

    if (!displayStyle) {
      return;
    }

    this.$('.username').html(
      displayStyle.replace('{username}', user.displayName())
        .replace('{groupcolor}', color || '#FFF')
    );
  });
});