class CreateSubtasks < ActiveRecord::Migration
  def change
    create_table :subtasks do |t|
      t.string :name
      t.datetime :start_date
      t.datetime :end_date
      t.integer :user_id
      t.integer :task_id
      t.integer :task_status
      t.text :task_details

      t.timestamps
    end
  end
end
