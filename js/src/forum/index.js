import { extend } from 'flarum/extend';
import PostUser from 'flarum/components/PostUser';
import { escape } from '../helpers/escape';

app.initializers.add('davidnery/nickname-group-formatter', () => {
  extend(PostUser.prototype, 'config', function () {
    const user = this.props.post.user();
    
    if (!user || !user.displayName()) {
      return;
    }

    const primaryGroup = user.groups().find(group => group.displayStyle() !== null);
    
    if (!primaryGroup) {
      return;
    }
    
    const color = primaryGroup.attribute('color');
    const displayStyle = primaryGroup.displayStyle();

    this.$('.username').html(
      displayStyle.replace(/\{username\}/g, escape(user.displayName()))
        .replace(/\{groupcolor\}/g, color || '#FFF')
    );
  });
});