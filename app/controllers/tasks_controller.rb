class TasksController < ApplicationController
  before_filter :authenticate_user!
  before_filter :find_task, only: [:edit, :update, :destroy]

  def index
    @tasks = Task.where(user: current_user)
  end

  def new
    @task = Task.new
  end

  def create
    task = Task.new(task_params.merge(user: current_user]))
    if task.save
      redirect_to root_path
    else
      redirect_to new_task_path
    end
  end

  def update
    if @task.update_attributes(task_params)
      redirect_to root_path
    else
      redirect_to edit_post_path(@task)
    end
  end

  def destroy
    @task.destroy
    redirect_to root_path
  end

  private

  def task_params
    params.require(:task).permit(:text)
  end

  def find_task
    @task = Task.find(params[:id])
  end
end