import { extend } from 'flarum/extend';
import EditGroupModal from 'flarum/components/EditGroupModal';

app.initializers.add('davidnery/nickname-group-formatter', () => {
  extend(EditGroupModal.prototype, 'init', function() {
    this.displayStyle = m.prop(this.group.displayStyle() || '');
  });

  extend(EditGroupModal.prototype, 'submitData', function(data) {
    data.displayStyle = this.displayStyle();
  });

  extend(EditGroupModal.prototype, 'fields', function(items) {
    // add item before hidde label and after icon
    items.replace('hidden', null, 5);
    items.add(
      'displayStyle',
      <div className="Form-group">
        <label>{app.translator.trans('davidnery-nickname-group-formatter.admin.display')}</label>
        <div className="helpText">
          {app.translator.trans('davidnery-nickname-group-formatter.admin.optional')}
        </div>
        <input className="FormControl" 
          placeholder='<span style="color: {groupcolor}">{username}</span>'
          value={this.displayStyle()} oninput={m.withAttr('value', this.displayStyle)}
        />
      </div>,
      10
    );
  });
});