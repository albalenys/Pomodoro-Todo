Rails.application.routes.draw do
  devise_for :users

  authenticated :user do
    root 'tasks#index', as: :authenticated_root
  end
  root 'users#welcome'

  resources :tasks, except: [:new] do
    resources :timers
  end

  resources :users, only: [:create, :new]
  get 'login' => 'users#login'
  delete 'logout' => 'users#logout'
  post '/auth' => 'users#auth'
end
