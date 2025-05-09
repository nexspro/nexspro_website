Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      devise_for :users, controllers: {
        sessions: "api/v1/sessions",
        registrations: "api/v1/registrations",
        passwords: "api/v1/passwords"
      }, path: "", path_names: {
        sign_in: "login",
        sign_out: "logout",
        registration: "signup"
      }, defaults: { format: :json }

      resources :users, only: [ :index, :show, :update, :destroy ]
      resources :profiles, only: [ :show, :update ]
      resources :projects
      resources :library
      resources :payments, only: [ :create ]
      resources :carts, only: [ :show, :update ]
      resources :uploads, only: [ :create ]
    end
  end
end
