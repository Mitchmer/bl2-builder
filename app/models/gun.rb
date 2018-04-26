class Gun < ApplicationRecord
  has_many :build_guns
  has_many :builds, through: :build_guns
  
  def self.set_guns(id)
    select('guns.id, name, description, bg.build_id, bg.gun_id')
    .joins("INNER JOIN build_guns bg ON bg.gun_id = guns.id")
    .where("bg.build_id = #{id}")
  end
end
