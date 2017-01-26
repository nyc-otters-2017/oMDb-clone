class MoviesController < ApplicationController

  def search
    url = 'http://www.omdbapi.com/?t=' + movie_params[:title].to_s
    uri = URI(url)
    response = Net::HTTP.get(uri)
    render json: JSON.parse(response)
  end

  private

  def movie_params
    params.require(:search).permit(:title)
  end

end
