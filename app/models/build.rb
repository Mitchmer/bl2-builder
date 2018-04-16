class Build < ApplicationRecord
  belongs_to :user
  has_one :maya_skill
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
