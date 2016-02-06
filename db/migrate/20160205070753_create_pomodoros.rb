class CreatePomodoros < ActiveRecord::Migration
  def change
    create_table :pomodoros do |t|
      t.integer :length, null: false, default: 25

      t.belongs_to :task, null: false

      t.timestamps
    end
  end
end
