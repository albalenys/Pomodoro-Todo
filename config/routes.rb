Rails.application.routes.draw do
  devise_for :users

  resources :users, only: [:new]
  get 'login' => 'users#login'
  delete 'logout' => 'users#logout'
  post '/auth' => 'users#auth'
  post '/register' => 'users#register'

  authenticated :user do
    root 'tasks#index', as: :authenticated_root
  end
  root 'shared#welcome'

  resources :tasks, except: [:new, :show] do
    resources :pomodoros, only: [:create, :new]
  end
  get '/reset' => 'pomodoros#reset'
end
