class Api::BuildsController < ApplicationController
  before_action :authenticate_user!, only: [:update, :create, :destroy]
  before_action :set_builds, only: [:show, :update]
  
  def index
    render json: Build.all.order(created_at: :desc)
  end

  def user_index
    render json: current_user.builds.all.order(created_at: :desc)
  end

  def show
    render json: @build
  end

  def update
  end

  def create
    binding.pry
    build = current_user.builds.create(build_params)
    if build.save
      render json: build
    else
      render json: { errors: build.errors.full_messages.join(',') }, status: 422
    end
  end

  def destroy
  end

  private
    def set_build
      @build = Build.find(params[:id])
    end

    def build_params
      params.require(:build).permit(:name, :character, :description, :skills => {})
    end
end