class RemoveMayaSkillsFromBuild < ActiveRecord::Migration[5.1]
  def change
    drop_table :maya_skills
  end
end
