class AddSkillsToBuild < ActiveRecord::Migration[5.1]
  def change
    add_column :builds, :skills, :jsonb
  end
end
