class ArtistsController < ApplicationController
  before_action :set_billboard
  before_action :set_artist, only: [ :show, :edit, :update, :destroy ]
  
  def index
    @artists = @billboard.artists
    render component: 'Artists', props: { billboard: @billboard, artists: @artists}
  end

  def show
    render component: 'Artist', props: { billboard: @billboard, artist: @artist}
  end

  def new
    @artist = @billboard.artists.new
    render component: 'ArtistNew', props: { billboard: @billboard, artist: @artist }
  end

  def create
    @artist = @billboard.artists.new(artist_params)
    if @artist.save
      redirect_to billboard_artists_path(@billboard)
    else
      render component: 'ArtistNew', props: { billboard: @billboard, artist: @artist}
    end
  end

  def edit
    render component: 'ArtistEdit', props: { billboard: @billboard, artist: @artist }
  end

  def update
    if @artist.update(artist_params)
      redirect_to billboard_artists_path
    else
      render component: 'ArtistEdit', props: {billboard: @billboard, artist: @artist }
    end
  end

  def destroy
    @artist.destroy
    redirect_to billboard_artists_path(@billboard)
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
