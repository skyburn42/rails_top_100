class ArtistsController < ApplicationController
  before_action :set_billboard
  before_action :set_artist, only: [ :show, :edit, :update, :destroy ]
  
  def index
    @artists = @billboard.artists
    render component: 'Artists', props: { billboard: @billboard, artists: @artists}
  end

  def show
  end

  def new
  end

  def edit
  end

  private
    def artist_params
      params.require(:artist).permit(:name)
    end
    def set_billboard
      @billboard = Billboard.find(params[:billboard_id])
    end
    def set_artist
      @artist = @billboard.artists.find(params[:id])
    end
end
