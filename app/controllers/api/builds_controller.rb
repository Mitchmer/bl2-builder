class Api::BuildsController < ApplicationController
  before_action :authenticate_user!
  before_action :set_builds, only: [:show, :update]
  
  def index
    render json: Build.all
  end

  def show
    render json: @build
  end

  def update
  end

  def create

  end

  def destroy
  end

  private
    def set_build
      @build = Build.find(params[:id])
    end

    def build_params
      params.require(:build).permit(:name, :character)
    end
end