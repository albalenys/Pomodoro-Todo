class PomodorosController < ApplicationController
  def new
    @pomodoro = Pomodoro.new
    @task = Task.find(params[:task_id])
  end

  def create
    pomodoro = Pomodoro.new(pomodoro_params.merge(user: current_user))
    if pomodoro.save
      redirect_to root_path
    else
      redirect_to new_task_pomodoro_path
    end
  end

  def reset
    Pomodoro.where(user: current_user).destroy_all
    redirect_to root_path
  end

  private

  def pomodoro_params
    params.require(:pomodoro).permit(:length, :task_id)
  end
end