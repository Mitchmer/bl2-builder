class Api::BuildShieldsController < ApplicationController
  def create
    build_shield = BuildShields.new(build_shield_params)
    if build_shield.save
      render json: build_shield
    else
      render_error(build_shield)
    end
  end

  private
    def build_shield_params
      params.require(:build_shield).permit(:shield_id, :build_id)
    end
end
