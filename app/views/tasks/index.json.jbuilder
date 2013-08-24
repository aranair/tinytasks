json.array!(@tasks) do |task|
  json.extract! task, :id, :name, :estimate, :task_details, :user_id
end
