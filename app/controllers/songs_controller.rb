class SongsController < ApplicationController
  before_action :set_billboard
  before_action :set_artist
  before_action :set_song, only: [ :show, :edit, :update, :destroy ]
  def index
    @songs = @artist.songs
    render component: 'Songs', props: { artist: @artist, songs: @songs}
  end

  def show
    render component: 'Song', props: { artist: @artist, song: @song}
  end

  def new
    @song = @artist.songs.new
    render component: 'SongNew', props: { artist: @artist, song: @song }
  end

  def create
    @song = @artist.songs.new(song_params)
    if @song.save
      # redirect_to songs_path(@artist)
    else
      render component: 'SongNew', props: { artist: @artist, song: @song}
    end
  end

  def edit
    render component: 'SongEdit', props: { artist: @artist, song: @song }
  end

  def update
    if @song.update(song_params)
      redirect_to songs_path
    else
      render component: 'SongEdit', props: { artist: @artist, song: @song }
    end
  end

  def destroy
    @songs.destroy
    redirect_to artists_songs_path(@artist)
  end



  private
    def song_params
      params.require(:song).permit(:title)
    end
    def set_billboard
      @billboard = Billboard.find(params[:billboard_id])
    end

    def set_artist
      @artist = Artist.find(params[:artist_id])
    end

    def set_song
      @song = @artist.songs.find(params[:id])
    end
end
