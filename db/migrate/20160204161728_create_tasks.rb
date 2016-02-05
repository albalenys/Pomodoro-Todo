class CreateTasks < ActiveRecord::Migration
  def change
    create_table :tasks do |t|
      t.string :text, null: false

      t.belongs_to :user

      t.timestamps null: false
    end
  end
end
