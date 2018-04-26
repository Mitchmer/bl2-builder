class Build < ApplicationRecord
  belongs_to :user
  has_many :build_guns
  has_many :guns, through: :build_guns
  # def self.get_user_builds
  #   Build.find_by_sql('
  #     SELECT builds.id, name, character, user_id, users.email, builds.created_at
  #     FROM builds
  #     LEFT JOIN users
  #       ON users.id = builds.user_id
  #     ORDER BY created_at DESC
  #     ')
  # end
end
