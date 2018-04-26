class CreateBuildGuns < ActiveRecord::Migration[5.1]
  def change
    create_table :build_guns do |t|
      t.belongs_to :build, foreign_key: true
      t.belongs_to :gun, foreign_key: true
      t.string :amount

      t.timestamps
    end
  end
end
