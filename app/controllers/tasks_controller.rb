class TasksController < ApplicationController
  before_filter :authenticate_user!
  before_filter :find_task, only: [:edit, :update, :destroy]

  def index
    @task = Task.new
    @tasks = Task.where(user: current_user).sort_by {|task| task.created_at }
  end

  def create
    task = Task.new(task_params.merge(user: current_user))
    if task.save
      redirect_to root_path
    else
      flash[:error] = task.errors.full_messages
      redirect_to root_path
    end
  end

  def update
    if @task.update_attributes(task_params)
      redirect_to root_path
    else
      flash[:error] = @task.errors.full_messages
      redirect_to root_path
    end
  end

  def destroy
    @task.destroy
    render json: @task
  end

  private

  def task_params
    params.require(:task).permit(:text)
  end

  def find_task
    @task = Task.find(params[:id])
  end
end