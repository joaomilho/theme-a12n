
module.exports = {
    hooks: {
        config: function(config) {
            config.styles = config.styles || config.pluginsConfig['theme-a12n'].styles;

            return config;
        }
    }
};
