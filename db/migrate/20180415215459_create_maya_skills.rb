class CreateMayaSkills < ActiveRecord::Migration[5.1]
  def change
    create_table :maya_skills do |t|
      t.integer :accelerate
      t.integer :ward
      t.belongs_to :build, foreign_key: true

      t.timestamps
    end
  end
end
