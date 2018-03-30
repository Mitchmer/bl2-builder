class Api::BuildsController < ApplicationController
  before_action :authenticate_user!
  before_action :set_builds, only: [:show, :update]
  
  def index
    render json: Build.all
  end

  def show
  end

  def update
  end

  def create
    
  end

  def destroy
  end
end