class Api::BuildGunsController < ApplicationController
  def create
    build_gun = BuildGuns.new(build_gun_params)
    if build_gun.save
      render json: build_gun
    else
      render_error(build_gun)
    end
  end

  private
    def build_gun_params
      params.require(:build_gun).permit(:gun_id, :build_id, :amount)
    end
  
end
