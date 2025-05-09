require_relative "boot"
require "rails/all"

Bundler.require(*Rails.groups)

module Nexspro
  class Application < Rails::Application
    config.load_defaults 8.0

    # Auto-load lib/tasks but ignore assets
    config.autoload_lib(ignore: %w[assets tasks])

    # Mode API only (pas de views ni assets)
    config.api_only = true
  end
end
