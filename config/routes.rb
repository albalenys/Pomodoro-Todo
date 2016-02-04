Rails.application.routes.draw do
  devise_for :users

  authenticated :user do
    root 'items#index', as: :authenticated_root
  end
  root 'users#welcome'

  resources :items
  resources :users
  get 'login' => 'users#login'
  delete 'logout' => 'users#logout'
  post '/auth' => 'users#auth'
end
