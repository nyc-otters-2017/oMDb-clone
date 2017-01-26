Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  get 'movies/search' => 'movies#search'
  
  root to: 'static#index'
end
