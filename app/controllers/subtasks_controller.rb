class SubtasksController < ApplicationController
  before_action :set_task, only: [:show, :edit, :update, :destroy]
  before_action :authenticate_user!

  # GET /tasks/1
  # GET /tasks/1.json
  def show
    render json: @subtask
  end

  # GET /tasks/new
  def new
    @subtask = Subtask.new
  end

  # GET /tasks/1/edit
  def edit
  end

  # POST /tasks
  # POST /tasks.json
  def create
    @subtask = Subtask.new(subtask_params)

    respond_to do |format|
      if @subtask.save
        format.html { redirect_to @subtask, notice: 'Subtask was successfully created.' }
        format.json { render action: 'show', status: :created, location: @subtask }
      else
        format.html { render action: 'new' }
        format.json { render json: @subtask.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /tasks/1
  # PATCH/PUT /tasks/1.json
  def update
    respond_to do |format|
      if @subtask.update(subtask_params)
        format.html { redirect_to @subtask, notice: 'Subtask was successfully updated.' }
        format.json { head :no_content }
      else
        format.html { render action: 'edit' }
        format.json { render json: @subtask.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /tasks/1
  # DELETE /tasks/1.json
  def destroy
    @subtask.destroy
    respond_to do |format|
      format.html { redirect_to tasks_url }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_task
      @subtask = Subtask.where(id: params[:id], user_id: current_user.id).first
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def subtask_params
      params.require(:subtask).permit(:name, :task_details, :start_date, :end_date, :task_status, :ids)
    end
end
