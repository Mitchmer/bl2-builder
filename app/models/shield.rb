class Shield < ApplicationRecord
  has_many :build_shields
  has_many :builds, through: :build_shields

  def self.set_shields(id)
    select('shields.id, name, description, bs.build_id, bs.shield_id')
    .joins("INNER JOIN build_shields bs ON bs.shield_id = shields.id")
    .where("bs.build_id = #{id}")
  end
end
