Groups::Application.routes.draw do
  devise_for :users

  resources :home, :only => [:index]

  resources :groups, :only => [:show,:create, :destroy]

end
