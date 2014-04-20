class TasksController < ApplicationController
  before_action :set_task, only: [:show, :edit, :update, :destroy]
  before_action :authenticate_user!

  # GET /tasks
  # GET /tasks.json
  def index
    @tasks = Task.where(user_id: current_user.id).includes(:subtasks).all
    @subtasks = @tasks.map(&:subtasks).flatten
    @tasks = @tasks.map do |task|
      TaskSerializer.new(task, root: false).as_json
    end
    @subtasks = @subtasks.map do |task|
      SubtaskSerializer.new(task, root: false).as_json
    end
    render json: {
      tasks: @tasks,
      subtasks: @subtasks
    }
  end

  # GET /tasks/1
  # GET /tasks/1.json
  def show
    render json: @task
  end

  # GET /tasks/new
  def new
    @task = Task.new
  end

  # GET /tasks/1/edit
  def edit
  end

  # POST /tasks
  # POST /tasks.json
  def create
    @task = Task.new(task_params)
    @task.user_id = current_user.id
    if @task.save
      task_json = TaskSerializer.new(@task, root: false).as_json
      p task_json
      render json: { task: task_json }
    else
      render json: @task.errors
    end
  end

  # PATCH/PUT /tasks/1
  # PATCH/PUT /tasks/1.json
  def update
    respond_to do |format|
      if @task.update(task_params)
        format.html { redirect_to @task, notice: 'Task was successfully updated.' }
        format.json { head :no_content }
      else
        format.html { render action: 'edit' }
        format.json { render json: @task.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /tasks/1
  # DELETE /tasks/1.json
  def destroy
    @task.destroy
    respond_to do |format|
      format.html { redirect_to tasks_url }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_task
      @task = Task.where(id: params[:id], user_id: current_user.id).first
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def task_params
      params.require(:task).permit(:name, :task_details, :start_date, :end_date, :task_status, :ids)
    end
end
