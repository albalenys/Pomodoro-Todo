class TasksController < ApplicationController
  def index
    @tasks = Task.where(user_id: session[:user_id])
  end

  def new
    @task = Task.new
  end

  def create
    task = Task.new(task_params.merge(user_id: session[:user_id]))
    if task.save
      redirect_to "/"
    else
      redirect_to new_task_path
    end
  end

  def edit
    @task = Task.find(params[:id])
  end

  def update
    @task = Task.find(params[:id])
    if @task.update_attributes(task_params)
      redirect_to root_path
    else
      redirect_to edit_post_path(@task)
    end
  end

  def destroy
    @task = Task.find(params[:id])
    @task.destroy
    redirect_to root_path
  end

  private

  def task_params
    params.require(:task).permit(:text)
  end
end