Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'api/auth'
  namespace :api do
    resources :users, only: :update
  end

  post 'api/builds', to: 'api/builds#create'
  get 'api/builds', to: 'api/builds#index'
  get 'api/users/:id/builds', to: 'api/builds#user_index'
  #Do not place any routes below this one
  get '*other', to: 'static#index'
end
