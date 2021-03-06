class BillboardsController < ApplicationController
  def index
    @billboards = Billboard.all
    render component: 'Billboards', props: { billboards: @billboards }
  end

  def show
    @billboard = Billboards.find(params[:id])
    render component: 'Billboard', props: { billboard: @billboard }
  end

  def new
    @billboard = Billboard.new
    render component: 'BillboardNew', props: { billboard: @billboard }
  end

  def create
    @billboard = Billboard.new(billboard_params)
      if @billboard.save
        redirect_to billboards_path
      else
        render component: 'BillboardNew', props: {billboard: @billboard }
      end
  end

  def edit

  end


  private
    def billboard_params
      params.require(:billboard).permit(:title)
    end

end
