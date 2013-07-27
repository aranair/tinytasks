class CreateTasks < ActiveRecord::Migration
  def change
    create_table :tasks do |t|
      t.string :name
      t.datetime :start_date
      t.datetime :end_date
      t.time :estimate

      t.timestamps
    end
  end
end
