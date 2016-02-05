class CreateTimers < ActiveRecord::Migration
  def change
    create_table :timers do |t|
      t.integer :length, null: false, default: 25

      t.belongs_to :task, null: false

      t.timestamps
    end
  end
end
