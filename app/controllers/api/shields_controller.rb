class Api::ShieldsController < ApplicationController
  before_action :set_shield, only: [:show, :update, :destroy]

  def index
    render json: Shield.all
  end

  def get_shields
    user_shields = Shield.set_shields(params[:id])
    render json: user_shields
  end

  def create
    shield = Shield.new(shield_params)
    
    if shield.save
      render json: shield
    else
      render error(shield)
    end
  end

  def destroy
    @shield.destroy
  end

  private
    def set_shield
      @shield = Shield.find(params[:id])
    end

    def shield_params
      params.require(:shield).permit(:name, :description, :image, :id)
    end

end
