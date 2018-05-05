class CreateBuildShields < ActiveRecord::Migration[5.1]
  def change
    create_table :build_shields do |t|
      t.belongs_to :build, foreign_key: true
      t.belongs_to :shield, foreign_key: true

      t.timestamps
    end
  end
end
