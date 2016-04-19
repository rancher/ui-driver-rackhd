define('ui/components/drivers/driver-%%DRIVERNAME%%/component', ['exports', 'ember', 'ui/mixins/driver'], function (exports, _ember, _uiMixinsDriver) {
  var Ember = _ember.default;
  var DriverMixin = _uiMixinsDriver.default;

  exports['default'] = Ember.Component.extend(DriverMixin, {
    driverName: 'driver-%%DRIVERNAME%%',
    config: Ember.computed.alias('model.%%DRIVERNAME%%Config'),

    actions: {
      setTransport(str) {
        this.set('config.transport', str);
      },
    },

    bootstrap: function() {
      let config = this.get('store').createRecord({
        type:        '%%DRIVERNAME%%Config',
        transport:   'http',
        endpoint:    '',
        nodeId:      '',
        sshUser:     'root',
        sshPassword: '',
        sshPort:     '22',
      });

      this.set('model', this.get('store').createRecord({
        type: 'machine',
        '%%DRIVERNAME%%Config': config,
      }));
    }.on('init'),
  });
});
