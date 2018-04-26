class Api::GunsController < ApplicationController
  before_action :set_gun, only: [:show, :update, :destroy]
  
  def index
    render json: Gun.all
  end

  def get_guns
    user_guns = Gun.set_guns(params[:id])
    render json: user_guns
  end

  def create
    gun = Gun.new(gun_params)

    if gun.save
      render json: gun
    else
      render_error(gun)
    end
  end

  def destroy
    @gun.destroy
  end
  
  private
    def set_gun
        @gun = Gun.find(params[:id])
    end

    def gun_params
      params.require(:gun).permit(:name, :description, :id)
    end
end
