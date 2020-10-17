import { extend } from 'flarum/extend';
import EditGroupModal from 'flarum/components/EditGroupModal';

// import { app } from '../../../../../vendor/flarum/core/js/src/forum';
// import { extend } from '../../../../../vendor/flarum/core/js/src/common/extend';
// import EditGroupModal from '../../../../../vendor/flarum/core/js/src/admin/components/EditGroupModal';

app.initializers.add('davidnery/flarum-nickname-group-formatter', () => {
  extend(EditGroupModal.prototype, 'init', function() {
    this.displayStyle = m.prop(this.group.attribute('displayStyle') || '');
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
        <label>Como o nick dos usuários do grupo será exibido?</label>
        <div className="helpText">
          NÃO obrigatório
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