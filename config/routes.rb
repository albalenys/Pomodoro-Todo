Rails.application.routes.draw do
  root 'items#index'
  resources :items
  resources :users
  get 'login' => 'users#login'
  post '/auth' => 'users#auth'
end
